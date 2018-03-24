const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, callback) {
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
              bildUnterHauptueberschrift {
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
    const gehaltBeteiligungTemplate = path.resolve(
      `./src/templates/gehalt-beteiligung/index.jsx`
    )

    var itemsProcessed = 0

    _.each(result.data.allContentfulSeiteGehaltBenefits.edges, edge => {
      async.parallel(
        {
          titelBildDesktop: async.apply(
            createSharpImage,
            graphql,
            'maxWidth: 1600, quality: 90',
            edge.node.bildUnterHauptueberschrift
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
            path: `${edge.node.perspektive.name}/gehalt-beteiligung`,
            component: slash(gehaltBeteiligungTemplate),
            context: {
              id: edge.node.id,
              titelBildDesktop: results.titelBildDesktop,
              titelBildMobile: results.titelBildMobile,
            },
          })

          console.log(
            `created page ${edge.node.perspektive.name}/gehalt-beteiligung`
          )

          if (
            itemsProcessed ===
            result.data.allContentfulSeiteGehaltBenefits.edges.length
          ) {
            callback(null)
          }
        }
      )
    })

    callback()
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
