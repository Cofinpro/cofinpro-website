const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulSeiteDeineEntwicklung.')

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
    console.log('end graphql query: allContentfulSeiteDeineEntwicklung.')

    const deineEntwicklungTemplate = path.resolve(
      `./src/templates/deine-entwicklung/index.jsx`
    )

    createRedirect({
      fromPath: `/deine-entwicklung`,
      redirectInBrowser: true,
      toPath: `/`,
    })

    _.each(result.data.allContentfulSeiteDeineEntwicklung.edges, edge => {
      console.log('finished image processing deine entwicklung.')

      createPage({
        path: `${edge.node.perspektive.name}/deine-entwicklung`,
        component: slash(deineEntwicklungTemplate),
        context: {
          id: edge.node.id,
          titelbildId: '/' + edge.node.titelbild.id + '/',
          titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
        },
      })

      console.log(
        `created page ${edge.node.perspektive.name}/deine-entwicklung`
      )
    })
    callback(null)
  })
}
