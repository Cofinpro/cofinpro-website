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
const pagePinnwand = require('./server/karriere/pagePinnwand')
const pagesNews = require('./server/karriere/pagesNews')
const pagesStellenanzeigen = require('./server/karriere/pagesStellenanzeigen')
const pageStellenmarkt = require('./server/karriere/pageStellenmarkt')
const pageDeineEntwicklung = require('./server/karriere/pageDeineEntwicklung')
const pagesDeineKarriere = require('./server/karriere/pagesDeineKarriere')
const pageJobBewerbung = require('./server/karriere/pageJobBewerbung')
const pagesGehaltBenefits = require('./server/karriere/pagesGehaltBenefits')
const pageLanding = require('./server/karriere/pageLanding')
const pageStartseiteKarriere = require('./server/karriere/pageStartseiteKarriere')
const pagesUeberUns = require('./server/karriere/pagesUeberUns')
const pageWorkLife = require('./server/karriere/pageWorkLife')
const pagesFokusthemen = require('./server/pagesFokusthemen')

const pageProjekte = require('./server/projekte')

const runWithTestData = false

const pathPrefix = ''

let globalGraphql = null
let globalCreatePage = null
let globalCreateRedirect = null
let globalBackgroundImages = []

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
        getNews,
        getStockImages,
        createPages,
      ],
      function(error, success) {
        resolve()
        console.log('done')
      }
    )
  })
}

function createPages(callback) {
  var asyncTasks = []

  asyncTasks.push(
    async.apply(
      pagesStellenanzeigen.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(pagePinnwand.create, globalCreatePage, globalNews)
  )
  asyncTasks.push(async.apply(pagesNews.create, globalCreatePage, globalNews))
  asyncTasks.push(
    async.apply(pageStellenmarkt.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pagesUeberUns.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(
      pagesDeineKarriere.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(
      pageDeineEntwicklung.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(
      pageLanding.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect,
      globalNews
    )
  )
  asyncTasks.push(
    async.apply(
      pagesGehaltBenefits.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(pageWorkLife.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pageJobBewerbung.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pageStartseiteKarriere.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(
      pagesFokusthemen.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )

  asyncTasks.push(
    async.apply(
      pageProjekte.create,
      globalGraphql,
      globalCreatePage,
      globalBackgroundImages
    )
  )

  async.waterfall(asyncTasks, function() {
    // All tasks are done now
    callback()
  })
}

function createSharpImage(graphql, sharpParameter, originalImg, callback) {
  if (originalImg === undefined || originalImg === null) {
    callback(null, null)
  } else {
    graphql(
      `
        {
        resultImage: imageSharp(id: { regex: "/` +
        originalImg.id +
        `/" }) {
                              sizes(` +
        sharpParameter +
        `) {
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
      callback(null, result.data.resultImage)
    })
  }
}

function getStockImages(callback) {
  globalGraphql(`
    {
      architektur1ImageSharp: imageSharp(id: { regex: "/stock_architektur_1/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      architektur2ImageSharp: imageSharp(id: { regex: "/stock_architektur_2/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      architektur4ImageSharp: imageSharp(id: { regex: "/stock_architektur_4/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      architektur6ImageSharp: imageSharp(id: { regex: "/stock_architektur_6/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      architektur7ImageSharp: imageSharp(id: { regex: "/stock_architektur_7/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      architektur9ImageSharp: imageSharp(id: { regex: "/stock_architektur_9/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      architektur10ImageSharp: imageSharp(
        id: { regex: "/stock_architektur_10/" }
      ) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      architektur11ImageSharp: imageSharp(
        id: { regex: "/stock_architektur_11/" }
      ) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht46ImageSharp: imageSharp(id: { regex: "/stock_licht_46/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht2ImageSharp: imageSharp(id: { regex: "/stock_licht_2/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht3ImageSharp: imageSharp(id: { regex: "/stock_licht_3/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht4ImageSharp: imageSharp(id: { regex: "/stock_licht_4/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht41ImageSharp: imageSharp(id: { regex: "/stock_licht_41/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht42ImageSharp: imageSharp(id: { regex: "/stock_licht_42/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht31ImageSharp: imageSharp(id: { regex: "/stock_licht_31/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
      licht22ImageSharp: imageSharp(id: { regex: "/stock_licht_22/" }) {
        sizes(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
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
`).then(result => {
    globalBackgroundImages.length = 0

    globalBackgroundImages.push(result.data.architektur1ImageSharp)
    globalBackgroundImages.push(result.data.architektur2ImageSharp)

    globalBackgroundImages.push(result.data.licht46ImageSharp)
    globalBackgroundImages.push(result.data.licht2ImageSharp)

    globalBackgroundImages.push(result.data.architektur4ImageSharp)
    globalBackgroundImages.push(result.data.architektur6ImageSharp)

    globalBackgroundImages.push(result.data.licht31ImageSharp)
    globalBackgroundImages.push(result.data.licht22ImageSharp)

    globalBackgroundImages.push(result.data.architektur7ImageSharp)
    globalBackgroundImages.push(result.data.architektur9ImageSharp)

    globalBackgroundImages.push(result.data.licht3ImageSharp)
    globalBackgroundImages.push(result.data.licht4ImageSharp)

    globalBackgroundImages.push(result.data.architektur10ImageSharp)
    globalBackgroundImages.push(result.data.architektur11ImageSharp)

    globalBackgroundImages.push(result.data.licht41ImageSharp)
    globalBackgroundImages.push(result.data.licht42ImageSharp)

    callback(null)
  })
}

function getNews(callback) {
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
              zugeordnetePerspektivenKompetenz  {
                name
              }
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
      console.log('creating sharp images for news:' + item.node.titel)

      async.parallel(
        {
          titelBild: async.apply(
            createSharpImage,
            globalGraphql,
            'maxWidth: 2000, maxHeight: 1250, quality: 60, cropFocus: CENTER',
            item.node.titelbild
          ),
          newsBild: async.apply(
            createSharpImage,
            globalGraphql,
            'maxWidth: 1800, quality: 60',
            item.node.newsBild
          ),
        },
        function(err, results) {
          itemsProcessed++

          item.node.titelbildSharp = results.titelBild
          item.node.newsBildSharp = results.newsBild

          if (itemsProcessed === globalNews.length) {
            console.log('finished sharp images for all news.')

            callback(null)
          }
        }
      )
    })
  })
}
