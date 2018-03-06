const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, stellenAnzeigen, callback) {
  graphql(
    `
      {
        allContentfulSeiteJobsBewerbung(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const template = path.resolve(`./src/templates/jobs-bewerbung.jsx`)

    _.each(result.data.allContentfulSeiteJobsBewerbung.edges, edge => {
      createPage({
        path: `/jobs-bewerbung`,
        component: slash(template),
        context: {
          id: edge.node.id,
          stellenAnzeigen: stellenAnzeigen,
        },
      })

      console.log(`created page /jobs-bewerbung`)
    })

    callback(null)
  })
}
