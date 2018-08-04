const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulSeiteFokusthema.')

  graphql(
    `
      {
        allContentfulSeiteFokusthema {
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
    console.log('end graphql query: allContentfulSeiteFokusthema.')

    const template = path.resolve(
      `./src/templates/fokusthemen/detail/index.jsx`
    )

    _.each(result.data.allContentfulSeiteFokusthema.edges, edge => {
      createPage({
        path: `/fokusthemen/${edge.node.url}`,
        component: slash(template),
        context: {
          id: edge.node.id,
        },
      })

      createRedirect({
        fromPath: `/fokusthemen/${edge.node.id}`,
        redirectInBrowser: true,
        toPath: `/fokusthemen/${edge.node.url}`,
      })

      console.log(`created page /fokusthemen/${edge.node.url}.`)
    })

    callback(null)
  })
}
