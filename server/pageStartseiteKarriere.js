const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, callback) {
  console.log(`started query for index.html`)

  graphql(
    `
      {
        allContentfulSeiteStartseiteKarriere(limit: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    console.log(`ended query for index.html`)

    const template = path.resolve(`./src/templates/startseite.jsx`)

    _.each(result.data.allContentfulSeiteStartseiteKarriere.edges, edge => {
      createPage({
        path: `/`,
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      })

      console.log(`created page /index.jsx`)
    })

    callback(null)
  })
}
