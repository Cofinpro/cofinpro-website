const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, callback) {
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

    const deineKarriereTemplate = path.resolve(
      `./src/templates/deine-karriere.jsx`
    )

    var itemsProcessed = 0

    _.each(result.data.allContentfulSeiteDeineKarriere.edges, edge => {

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
        function (err, results) {

          itemsProcessed++

          createPage({
            path: `${edge.node.perspektive.name}/deine-karriere`,
            component: slash(deineKarriereTemplate),
            context: {
              id: edge.node.id,
              titelBildDesktop: results.titelBildDesktop,
              titelBildMobile: results.titelBildMobile,
            },
          })
    
          console.log(`created page ${edge.node.perspektive.name}/deine-karriere`)
          
          if (itemsProcessed === result.data.allContentfulSeiteDeineKarriere.edges.length) {
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