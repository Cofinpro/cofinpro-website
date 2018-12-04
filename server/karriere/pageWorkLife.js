const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, callback) {
  graphql(
    `
      {
        allContentfulSeiteWorkLife(limit: 1000) {
          edges {
            node {
              id
              vorteile {
                bildVorteil1 {
                  id
                }
                bildVorteil2 {
                  id
                }
                bildVorteil3 {
                  id
                }
              }
              infoBoxLinksBilder {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              infoboxRechtsBilder {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              titelbild {
                id
              }
              titelbildKlein {
                id
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const workLifeTemplate = path.resolve(
      `./src/templates/karriere/work-life.tsx`
    )

    console.log('finished query work life.')

    _.each(result.data.allContentfulSeiteWorkLife.edges, edge => {
      const vorteilIconLinksIdTemp = edge.node.vorteile.bildVorteil1.id
      const vorteilIconMitteIdTemp = edge.node.vorteile.bildVorteil2.id
      const vorteilIconRechtsIdTemp = edge.node.vorteile.bildVorteil3.id

      async.parallel(
        {
          one: async.apply(
            createSharpImages,
            graphql,
            'maxWidth: 1500, maxHeight: 1000, quality: 60, cropFocus: CENTER',
            edge.node.infoBoxLinksBilder
          ),
          two: async.apply(
            createSharpImages,
            graphql,
            'maxWidth: 1200, maxHeight: 800, quality: 60, cropFocus: CENTER',
            edge.node.infoboxRechtsBilder
          ),
        },
        function(err, results) {
          // results is now equals to: {one: 1, two: 2}

          console.log('finished image processing work life.')

          createPage({
            path: `/karriere/work-life`,
            component: slash(workLifeTemplate),
            context: {
              id: edge.node.id,
              titelbildId: '/' + edge.node.titelbild.id + '/',
              titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
              infoBoxLinksBilderSharp: results.one,
              infoboxRechtsBilderSharp: results.two,
              vorteilIconLinksId: '/' + vorteilIconLinksIdTemp + '/',
              vorteilIconMitteId: '/' + vorteilIconMitteIdTemp + '/',
              vorteilIconRechtsId: '/' + vorteilIconRechtsIdTemp + '/',
            },
          })

          console.log('created page /karriere/work-life.')

          callback()
        }
      )
    })
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
