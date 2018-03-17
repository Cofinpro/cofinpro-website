const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, callback) {
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
    const deineEntwicklungTemplate = path.resolve(
      `./src/templates/deine-entwicklung.jsx`
    )

    _.each(result.data.allContentfulSeiteDeineEntwicklung.edges, edge => {
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
        },
        function(err, results) {
          console.log('finished image processing deine entwicklung.')

          createPage({
            path: `${edge.node.perspektive.name}/deine-entwicklung`,
            component: slash(deineEntwicklungTemplate),
            context: {
              id: edge.node.id,
              titelBildDesktop: results.titelBildDesktop,
              titelBildMobile: results.titelBildMobile,
            },
          })

          console.log(
            `created page ${edge.node.perspektive.name}/deine-entwicklung`
          )
          callback(null)
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
