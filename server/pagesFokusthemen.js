const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulFokusthema.')

  graphql(
    `
      {
        allContentfulFokusthema {
          edges {
            node {
              id
              url
            }
          }
        }
      }
    `
  ).then(result => {
    console.log('end graphql query: allContentfulFokusthema.')

    const template = path.resolve(
      `./src/templates/fokusthemen/detail/index.jsx`
    )

    _.each(result.data.allContentfulFokusthema.edges, edge => {
      console.log(edge.node.id)

      createPage({
        path: `/fokusthemen/${edge.node.url}`,
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      })

      console.log(`created page /fokusthemen/${edge.node.url}.`)
    })

    callback(null)
  })
}