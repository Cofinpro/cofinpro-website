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

const runWithTestData = false

const pathPrefix = ''

// Implement the Gatsby API “createPages”. This is called after the Gatsby
// bootstrap is finished so you have access to any information necessary to
// programmatically create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators

  moment.locale('de')

  var stellenAnzeigen
  var news

  return new Promise((resolve, reject) => {
    async.waterfall(
      [
        async.apply(
          refreshImages,
          graphql,
          createPage,
          createRedirect,
          stellenAnzeigen,
          news
        ),
        getStellenanzeigen,
        createStellenanzeigen,
        getNews,
        createPinnwand,
        createNews,
        createStellenmarkt,
        createUeberUns,
        createDeineKarriere,
        createDeineEntwicklung,
        createStart,
        createGehaltBenefits,
        createWorkLife,
        createJobsBewerbung,
        createStartseite,
      ],
      function(error, success) {
        resolve()
        console.log('done')
        return alert('Done!')
      }
    )
  })
}

function getNews(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  var isTest = false

  if (isTest) {
    news = stellenAnzeigenJson

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  } else {
    graphql(`
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
      news = result.data.allContentfulSeiteNews.edges

      news.forEach(function(object, index) {
        if (object.node.datumFuerDieAnzeige != null) {
          object.node.datumFuerDieAnzeige = moment(
            object.node.datumFuerDieAnzeige,
            'YYYY-MM-DD'
          ).format('L')
        }
      })

      var itemsProcessed = 0

      news.forEach((item, index, array) => {
        graphql(
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
          if (itemsProcessed === news.length) {
            callback(
              null,
              graphql,
              createPage,
              createRedirect,
              stellenAnzeigen,
              news
            )
          }
        })
      })
    })
  }
}

function createSharpImage(graphql, node, imageId, parameterAsString, callback) {
  graphql(
    `
      {
      titelbildSharp: imageSharp(id: { regex: "/` +
      imageId +
      `/" }) {
        sizes(` +
      parameterAsString +
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
    callback(result)
  })
}

function createPinnwand(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  const template = path.resolve(`./src/templates/pinnwand.jsx`)

  createPage({
    path: `/pinnwand`,
    component: slash(template),
    context: {
      allNews: news,
    },
  })

  console.log(`created page /pinnwand.`)

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
}

function createNews(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  const template = path.resolve(`./src/templates/news.jsx`)

  _.each(news, edge => {
    var titelbildIdVar =
      edge.node.titelbild !== null ? '/' + edge.node.titelbild.id + '/' : ''
    var newsBildIdVar =
      edge.node.newsBild !== null ? '/' + edge.node.newsBild.id + '/' : ''

    createPage({
      path: `pinnwand/${edge.node.url}`,
      component: slash(template),
      context: {
        id: edge.node.id,
        news: edge,
      },
    })

    console.log(`created page pinnwand/${edge.node.id}.`)
  })

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
}

function getStellenanzeigen(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  var isTest = false

  if (isTest) {
    stellenAnzeigen = stellenAnzeigenJson.data.allContentfulStellenanzeige.edges

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  } else {
    console.log('starting graphql query for stellenanezigen.')

    graphql(`
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
      stellenAnzeigen = result.data.allContentfulSeiteStellenanzeige.edges

      console.log('finished graphql query for stellenanezigen.')

      callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
    })
  }
}

function createStellenanzeigen(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  const template = path.resolve(`./src/templates/stellenanzeige.jsx`)

  _.each(stellenAnzeigen, edge => {
    createPage({
      path: `/stellenanzeige/${edge.node.url}`,
      component: slash(template),
      context: {
        id: edge.node.id,
        stellenAnzeige: edge,
        stellenAnzeigen: stellenAnzeigen,
      },
    })

    createRedirect({
      fromPath: `/stellenanzeige/${edge.node.id}`,
      redirectInBrowser: true,
      toPath: `/stellenanzeige/${edge.node.url}`,
    })

    console.log(`created page stellenanzeige/${edge.node.url}.`)
  })

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
}

function createStellenmarkt(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteStellenmarkt(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const template = path.resolve(`./src/templates/stellenmarkt.jsx`)

    _.each(result.data.allContentfulSeiteStellenmarkt.edges, edge => {
      createPage({
        path: `/jobs`,
        component: slash(template),
        context: {
          id: edge.node.id,
          stellenAnzeigen: stellenAnzeigen,
        },
      })

      console.log(`created page /jobs.`)
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function createUeberUns(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteUeberUns(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const ueberUnsTemplate = path.resolve(`./src/templates/ueber-uns.jsx`)

    _.each(result.data.allContentfulSeiteUeberUns.edges, edge => {
      createPage({
        path: `/ueber-uns`,
        component: slash(ueberUnsTemplate),
        context: {
          id: edge.node.id,
        },
      })

      console.log('created page ueber-uns.')
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function createDeineKarriere(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteDeineKarriere(limit: 1000) {
          edges {
            node {
              id
              perspektive {
                name
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const deineKarriereTemplate = path.resolve(
      `./src/templates/deine-karriere.jsx`
    )

    _.each(result.data.allContentfulSeiteDeineKarriere.edges, edge => {
      createPage({
        path: `${edge.node.perspektive.name}/deine-karriere`,
        component: slash(deineKarriereTemplate),
        context: {
          id: edge.node.id,
        },
      })

      console.log(`created page ${edge.node.perspektive.name}/deine-karriere`)
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function createDeineEntwicklung(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteDeineEntwicklung(limit: 1000) {
          edges {
            node {
              id
              perspektive {
                name
              }
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
            }
          }
        }
      }
    `
  ).then(result => {
    var resultMainQuery = result

    const deineEntwicklungTemplate = path.resolve(
      `./src/templates/deine-entwicklung.jsx`
    )

    var itemsProcessed = 0

    resultMainQuery.data.allContentfulSeiteDeineEntwicklung.edges.forEach(
      (item, index, array) => {
        graphql(
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
          if (
            itemsProcessed ===
            resultMainQuery.data.allContentfulSeiteDeineEntwicklung.edges.length
          ) {
            console.log('finished titelbild processing deine entwicklung.')

            _.each(
              resultMainQuery.data.allContentfulSeiteDeineEntwicklung.edges,
              edge => {
                createPage({
                  path: `${edge.node.perspektive.name}/deine-entwicklung`,
                  component: slash(deineEntwicklungTemplate),
                  context: {
                    id: edge.node.id,
                    titelbildSharp: edge.node.titelbildSharp,
                  },
                })

                console.log(
                  `created page ${edge.node.perspektive.name}/deine-entwicklung`
                )
              }
            )

            callback(
              null,
              graphql,
              createPage,
              createRedirect,
              stellenAnzeigen,
              news
            )
          }
        })
      }
    )
  })
}

function createStart(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteLandingPerspektive(limit: 1000) {
          edges {
            node {
              id
              perspektive {
                name
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const landingTemplate = path.resolve(`./src/templates/landing.jsx`)

    var topNews = []
    var numberOfTopsNews = 2

    for (var i = 0; i < news.length; ++i) {
      if (i < numberOfTopsNews) {
        topNews.push(news[i])
      }
    }

    _.each(result.data.allContentfulSeiteLandingPerspektive.edges, edge => {
      createPage({
        path: `${edge.node.perspektive.name}/landing`,
        component: slash(landingTemplate),
        context: {
          id: edge.node.id,
          anzeigen: stellenAnzeigen,
          topNews: topNews,
        },
      })

      console.log(`created page ${edge.node.perspektive.name}/landing`)
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function createGehaltBenefits(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteGehaltBenefits(limit: 1000) {
          edges {
            node {
              id
              perspektive {
                name
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const gehaltBeteiligungTemplate = path.resolve(
      `./src/templates/gehalt-beteiligung.jsx`
    )

    _.each(result.data.allContentfulSeiteGehaltBenefits.edges, edge => {
      createPage({
        path: `${edge.node.perspektive.name}/gehalt-beteiligung`,
        component: slash(gehaltBeteiligungTemplate),
        context: {
          id: edge.node.id,
        },
      })

      console.log(
        `created page ${edge.node.perspektive.name}/gehalt-beteiligung`
      )
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function createWorkLife(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteWorkLife(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const workLifeTemplate = path.resolve(`./src/templates/work-life.jsx`)

    _.each(result.data.allContentfulSeiteWorkLife.edges, edge => {
      createPage({
        path: `/work-life`,
        component: slash(workLifeTemplate),
        context: {
          id: edge.node.id,
        },
      })

      console.log('created page work life.')
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function createJobsBewerbung(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteJobsBewerbung(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const template = path.resolve(`./src/templates/jobs-bewerbung.jsx`)

    _.each(result.data.allContentfulSeiteJobsBewerbung.edges, edge => {
      createPage({
        path: `/jobs-bewerbung`,
        component: slash(template),
        context: {
          id: edge.node.id,
          stellenAnzeigen: stellenAnzeigen,
        },
      })

      console.log(`created page /jobs-bewerbung`)
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function createStartseite(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteStartseiteKarriere(limit: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const template = path.resolve(`./src/templates/startseite.jsx`)

    _.each(result.data.allContentfulSeiteStartseiteKarriere.edges, edge => {
      createPage({
        path: `/`,
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      })

      console.log(`created page /index.jsx`)
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

function refreshImages(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  console.log('started image processing.')

  if (runWithTestData) {
    _.each(testDataAllContentfulAsset.data.allContentfulAsset.edges, edge => {
      var fileName = edge.node.file.fileName
      var newFileName =
        edge.node.id +
        fileName.substring(fileName.lastIndexOf('.'), fileName.length)
      var path = './static/img/contentful/' + newFileName

      if (!existsAsset(path)) {
        console.log('asset for id:' + edge.node.id + ' not found.')

        var url = 'http:' + edge.node.file.url

        getAndStoreAssetFromContentful(url, path)
      }
    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  } else {
    graphql(
      `
        {
          allContentfulAsset(limit: 2000) {
            edges {
              node {
                id
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      `
    ).then(result => {
      var itemsProcessed = 0

      _.each(result.data.allContentfulAsset.edges, edge => {
        var fileName = edge.node.file.fileName
        var newFileName =
          edge.node.id +
          fileName.substring(fileName.lastIndexOf('.'), fileName.length)
        var path = './static/img/contentful/' + newFileName

        console.log('checking if image exists under:' + path)

        if (!existsAsset(path)) {
          console.log('asset for id:' + edge.node.id + ' not found.')

          var url = 'http:' + edge.node.file.url

          console.log('getting file from url:' + url)
          console.log('storing file under path:' + path)

          axios({
            method: 'get',
            url: url,
            responseType: 'stream',
          }).then(function(response) {
            response.data.pipe(fs.createWriteStream(path))
            itemsProcessed++

            if (
              itemsProcessed === result.data.allContentfulAsset.edges.length
            ) {
              setTimeout(function() {
                callback(
                  null,
                  graphql,
                  createPage,
                  createRedirect,
                  stellenAnzeigen,
                  news
                )
                console.log('timeout completed')
              }, 1000)
            }
          })
        } else {
          itemsProcessed++

          if (itemsProcessed === result.data.allContentfulAsset.edges.length) {
            setTimeout(function() {
              callback(
                null,
                graphql,
                createPage,
                createRedirect,
                stellenAnzeigen,
                news
              )
              console.log('timeout completed')
            }, 1000)
          }
        }
      })
    })
  }
}

function existsAsset(_path) {
  if (fs.existsSync(_path)) {
    return true
  }
  return false
}
