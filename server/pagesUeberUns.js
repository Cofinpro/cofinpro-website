const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, callback) {
  graphql(
    `
      {
        allContentfulSeiteUeberUns(limit: 1000) {
          edges {
            node {
              id
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
    const ueberUnsTemplate = path.resolve(`./src/templates/ueber-uns/index.jsx`)

    var itemsProcessed = 0

    _.each(result.data.allContentfulSeiteUeberUns.edges, edge => {
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
          itemsProcessed++

          createPage({
            path: `/ueber-uns`,
            component: slash(ueberUnsTemplate),
            context: {
              id: edge.node.id,
              titelBildDesktop: results.titelBildDesktop,
              titelBildMobile: results.titelBildMobile,
            },
          })

          console.log('created page ueber-uns.')

          if (
            itemsProcessed ===
            result.data.allContentfulSeiteUeberUns.edges.length
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
