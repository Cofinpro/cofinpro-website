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
              socialMediaPosts {
                titel
                headline
                bildDesPosts {
                  id
                  title
                  description
                  file {
                    url
                    fileName
                    contentType
                  }
                }
                textDesPosts {
                  textDesPosts
                }
                urlDesPosts {
                  urlDesPosts
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const landingTemplate = path.resolve(`./src/templates/landing/index.jsx`)

    var topNews = []
    var numberOfTopsNews = 2

    for (var i = 0; i < news.length; ++i) {
      if (i < numberOfTopsNews) {
        topNews.push(news[i])
      }
    }
    var itemsProcessed = 0

    var postBilder = []

    if (result.data.allContentfulSeiteLandingPerspektive.edges.length > 0) {
      _.each(
        result.data.allContentfulSeiteLandingPerspektive.edges[0].node
          .socialMediaPosts,
        post => {
          postBilder.push(post.bildDesPosts)
        }
      )
    }

    _.each(result.data.allContentfulSeiteLandingPerspektive.edges, edge => {
      async.parallel(
        {
          titelBildDesktop: async.apply(
            createSharpImage,
            graphql,
            'maxWidth: 1600, quality: 90',
            edge.node.titelbild
          ),
          titelBildMobile: async.apply(
            createSharpImage,
            graphql,
            'maxWidth: 1600, quality: 90',
            edge.node.titelbildKlein
          ),
          socialMediaPostBilder: async.apply(
            createSharpImages,
            graphql,
            'maxWidth: 800, maxHeight: 800, quality: 90, cropFocus: CENTER',
            postBilder
          ),
        },
        function(err, results) {
          itemsProcessed++

          createPage({
            path: `${edge.node.perspektive.name}/landing`,
            component: slash(landingTemplate),
            context: {
              id: edge.node.id,
              anzeigen: stellenAnzeigen,
              topNews: topNews,
              titelBildDesktop: results.titelBildDesktop,
              titelBildMobile: results.titelBildMobile,
              socialMediaPostBilder: results.socialMediaPostBilder,
            },
          })

          console.log(`created page ${edge.node.perspektive.name}/landing`)

          if (
            itemsProcessed ===
            result.data.allContentfulSeiteLandingPerspektive.edges.length
          ) {
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

function createSharpImages(
  graphql,
  sharpParameter,
  listOfInputImages,
  callback
) {
  var itemsProcessed = 0
  var resultImages = []

  _.each(listOfInputImages, image => {
    graphql(
      `
                {
                resultImage: imageSharp(id: { regex: "/` +
        image.id +
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
      resultImages.push(result.data.resultImage)

      itemsProcessed++
      if (itemsProcessed === listOfInputImages.length) {
        callback(null, resultImages)
      }
    })
  })
}
