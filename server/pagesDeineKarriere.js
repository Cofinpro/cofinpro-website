const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

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

    callback()
  })
}

function createSharpImage(graphql, sharpParameter, originalImg, callback) {
  var itemsProcessed = 0
  var resultImages = []

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
