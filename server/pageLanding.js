const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')


exports.create = function(
  graphql,
  createPage,
  news,
  stellenAnzeigen,
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
              titelbildKlein {
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
    const landingTemplate = path.resolve(`./src/templates/landing.jsx`)

    var topNews = []
    var numberOfTopsNews = 2

    for (var i = 0; i < news.length; ++i) {
      if (i < numberOfTopsNews) {
        topNews.push(news[i])
      }
    }
    var itemsProcessed = 0

    _.each(result.data.allContentfulSeiteLandingPerspektive.edges, edge => {

      async.parallel(
        {
          titelBildDesktop: async.apply(
            createSharpImage,
            graphql,
            'quality: 90',
            edge.node.titelbild
          ),
          titelBildMobile: async.apply(
            createSharpImage,
            graphql,
            'quality: 90',
            edge.node.titelbildKlein
          ),
        },
        function (err, results) {

          itemsProcessed++

          createPage({
            path: `${edge.node.perspektive.name}/landing`,
            component: slash(landingTemplate),
            context: {
              id: edge.node.id,
              anzeigen: stellenAnzeigen,
              topNews: topNews,
              titelBildDesktop: results.titelBildDesktop,
              titelBildMobile: results.titelBildMobile
            },
          })

          console.log(`created page ${edge.node.perspektive.name}/landing`)
          
          if (itemsProcessed === result.data.allContentfulSeiteLandingPerspektive.edges.length) {
            callback(null)
          }

        }
      )

    })
  })
}


function createSharpImage(graphql, sharpParameter, originalImg, callback) {
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
