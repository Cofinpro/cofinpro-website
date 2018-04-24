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
    const deineKarriereTemplate = path.resolve(
      `./src/templates/deine-karriere/index.jsx`
    )

    var itemsProcessed = 0

    _.each(result.data.allContentfulSeiteDeineKarriere.edges, edge => {
      itemsProcessed++

      createPage({
        path: `${edge.node.perspektive.name}/deine-karriere`,
        component: slash(deineKarriereTemplate),
        context: {
          id: edge.node.id,
          titelbildId: '/' + edge.node.titelbild.id + '/',
          titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
        },
      })

      console.log(`created page ${edge.node.perspektive.name}/deine-karriere`)

      if (
        itemsProcessed ===
        result.data.allContentfulSeiteDeineKarriere.edges.length
      ) {
        callback(null)
      }
    })
  })
}
