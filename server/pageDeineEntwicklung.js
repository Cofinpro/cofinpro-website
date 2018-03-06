const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

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

            callback()
          }
        })
      }
    )
  })
}
