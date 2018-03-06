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
            }
          }
        }
      }
    `
  ).then(result => {
    const workLifeTemplate = path.resolve(`./src/templates/work-life.jsx`)

    console.log('finished query work life.')

    _.each(result.data.allContentfulSeiteWorkLife.edges, edge => {
      console.log('loop.' + edge.node.id)

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
            path: `/work-life`,
            component: slash(workLifeTemplate),
            context: {
              id: edge.node.id,
              infoBoxLinksBilderSharp: results.one,
              infoboxRechtsBilderSharp: results.two,
            },
          })

          console.log('created page work life.')

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
