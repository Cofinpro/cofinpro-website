const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, stellenAnzeigen, callback) {
  console.log(`start query for page /jobs.`)

  graphql(
    `
      {
        allContentfulSeiteStellenmarkt(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    console.log(`end query for page /jobs.`)

    const template = path.resolve(`./src/templates/stellenmarkt/index.jsx`)

    _.each(result.data.allContentfulSeiteStellenmarkt.edges, edge => {
      createPage({
        path: `/jobs`,
        component: slash(template),
        context: {
          id: edge.node.id,
          stellenAnzeigen: stellenAnzeigen,
        },
      })

      console.log(`created page /jobs.`)
    })

    callback(null)
  })
}
