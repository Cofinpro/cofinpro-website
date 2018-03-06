const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, callback) {
  graphql(
    `
      {
        allContentfulSeiteUeberUns(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const ueberUnsTemplate = path.resolve(`./src/templates/ueber-uns.jsx`)

    _.each(result.data.allContentfulSeiteUeberUns.edges, edge => {
      createPage({
        path: `/ueber-uns`,
        component: slash(ueberUnsTemplate),
        context: {
          id: edge.node.id,
        },
      })

      console.log('created page ueber-uns.')
    })

    callback()
  })
}
