'use strict'

function create(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  graphql(
    `
      {
        allContentfulStellenmarkt(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    const template = path.resolve(`./src/templates/stellenmarkt.jsx`)

    _.each(result.data.allContentfulStellenmarkt.edges, edge => {
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

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
  })
}

exports.create
