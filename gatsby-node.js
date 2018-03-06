const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')
const fs = require(`fs-extra`)
var moment = require('moment')
const axios = require('axios')

var stellenAnzeigenJson = require('./test-data/allContentfulStellenanzeige.json')
var testDataAllContentfulAsset = require('./test-data/allContentfulAsset.json')

const contentfulImageService = require('./server/contentfulImageService')
const pagePinnwand = require('./server/pagePinnwand')
const pagesNews = require('./server/pagesNews')
const pagesStellenanzeigen = require('./server/pagesStellenanzeigen')
const pageStellenmarkt = require('./server/pageStellenmarkt')
const pageDeineEntwicklung = require('./server/pageDeineEntwicklung')
const pagesDeineKarriere = require('./server/pagesDeineKarriere')
const pageJobBewerbung = require('./server/pageJobBewerbung')
const pagesGehaltBenefits = require('./server/pagesGehaltBenefits')
const pageLanding = require('./server/pageLanding')
const pageStartseiteKarriere = require('./server/pageStartseiteKarriere')
const pagesUeberUns = require('./server/pagesUeberUns')
const pageWorkLife = require('./server/pageWorkLife')

const runWithTestData = false

const pathPrefix = ''

let globalGraphql = null
let globalCreatePage = null
let globalCreateRedirect = null

let globalStellenAnzeigen = []
let globalNews = []

// Implement the Gatsby API “createPages”. This is called after the Gatsby
// bootstrap is finished so you have access to any information necessary to
// programmatically create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators

  globalGraphql = graphql
  globalCreatePage = createPage
  globalCreateRedirect = createRedirect

  moment.locale('de')

  return new Promise((resolve, reject) => {
    async.waterfall(
      [
        async.apply(contentfulImageService.refreshImages, globalGraphql),
        getStellenanzeigen,
        getNews,
        createPages,
      ],
      function(error, success) {
        resolve()
        console.log('done')
        return alert('Done!')
      }
    )
  })
}

function createPages(callback) {
  var asyncTasks = []

  asyncTasks.push(
    async.apply(
      pagesStellenanzeigen.create,
      globalCreatePage,
      globalCreateRedirect,
      globalStellenAnzeigen
    )
  )
  asyncTasks.push(
    async.apply(pagePinnwand.create, globalCreatePage, globalNews)
  )
  asyncTasks.push(async.apply(pagesNews.create, globalCreatePage, globalNews))
  asyncTasks.push(
    async.apply(
      pageStellenmarkt.create,
      globalGraphql,
      globalCreatePage,
      globalStellenAnzeigen
    )
  )
  asyncTasks.push(
    async.apply(pagesUeberUns.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pagesDeineKarriere.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pageDeineEntwicklung.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(
      pageLanding.create,
      globalGraphql,
      globalCreatePage,
      globalNews,
      globalStellenAnzeigen
    )
  )
  asyncTasks.push(
    async.apply(pagesGehaltBenefits.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pageWorkLife.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(
      pageJobBewerbung.create,
      globalGraphql,
      globalCreatePage,
      globalStellenAnzeigen
    )
  )
  asyncTasks.push(
    async.apply(pageStartseiteKarriere.create, globalGraphql, globalCreatePage)
  )

  async.waterfall(asyncTasks, function() {
    // All tasks are done now
    callback()
  })
}

function getNews(callback) {
  var isTest = false

  if (isTest) {
    globalNews = stellenAnzeigenJson

    callback(null)
  } else {
    globalGraphql(`
      {
        allContentfulSeiteNews(
          sort: { fields: [datumFuerDieAnzeige], order: DESC }
        ) {
          edges {
            node {
              id
              metaData {
                title
                keywords {
                  keywords
                }
                description {
                  description
                }
              }
              parent {
                id
              }
              url
              titel
              titelbild {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              datumFuerDieAnzeige
              ueberschrift
              kurzeBeschreibung {
                kurzeBeschreibung
              }
              absatz1 {
                absatz1
              }
              newsBild {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              absatz2 {
                absatz2
              }
            }
          }
        }
      }
    `).then(result => {
      globalNews = result.data.allContentfulSeiteNews.edges

      globalNews.forEach(function(object, index) {
        if (object.node.datumFuerDieAnzeige != null) {
          object.node.datumFuerDieAnzeige = moment(
            object.node.datumFuerDieAnzeige,
            'YYYY-MM-DD'
          ).format('L')
        }
      })

      var itemsProcessed = 0

      globalNews.forEach((item, index, array) => {
        globalGraphql(
          `
            {
            titelbildSharp: imageSharp(id: { regex: "/` +
            item.node.titelbild.id +
            `/" }) {
              sizes(maxWidth: 2000, maxHeight: 1250, quality: 60, cropFocus: CENTER) {
                src
                srcSet
                srcWebp
                srcSetWebp
                originalImg
                originalName
                base64
                aspectRatio
                sizes
              }
            }
          }          
        `
        ).then(result => {
          item.node.titelbildSharp = result.data.titelbildSharp

          itemsProcessed++
          if (itemsProcessed === globalNews.length) {
            callback(null)
          }
        })
      })
    })
  }
}

function getStellenanzeigen(callback) {
  console.log('starting graphql query for stellenanezigen.')

  globalGraphql(`
      {
        allContentfulSeiteStellenanzeige {
          edges {
            node {
              id
              url
              metaData {
                title
                keywords {
                  keywords
                }
                description {
                  description
                }
              }
              ort
              befristung
              art
              titel
              perspektiveLink {
                name
              }
              ueberschriftGanzOben
              bildStellenanzeige {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              absatzEins {
                absatzEins
              }
              spaltenInfoTitelLinks
              spaltenInfoBeschreibungLinksLang {
                spaltenInfoBeschreibungLinksLang
              }
              spaltenInfoTitelMitte
              spaltenInfoBeschreibungMitte {
                spaltenInfoBeschreibungMitte
              }
              spaltenInfoTitelRechts
              spaltenInfoBeschreibungRechts {
                spaltenInfoBeschreibungRechts
              }
              uMantis {
                uMantis
              }
            }
          }
        }
      }
    `).then(result => {
    globalStellenAnzeigen = result.data.allContentfulSeiteStellenanzeige.edges

    console.log('finished graphql query for stellenanezigen.')

    callback(null)
  })
}
