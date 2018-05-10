const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulSeiteDeineKarriere.')

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
    console.log('end graphql query: allContentfulSeiteDeineKarriere.')

    const deineKarriereTemplate = path.resolve(
      `./src/templates/deine-karriere/index.jsx`
    )

    createRedirect({
      fromPath: `/deine-karriere`,
      redirectInBrowser: true,
      toPath: `/`,
    })

    var itemsProcessed = 0

    _.each(result.data.allContentfulSeiteDeineKarriere.edges, edge => {
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
    })

    callback(null)
  })
}
