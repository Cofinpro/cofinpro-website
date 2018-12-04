const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulSeiteStellenanzeige.')

  graphql(
    `
      {
        allContentfulSeiteStellenanzeige {
          edges {
            node {
              id
              url
              bildStellenanzeige {
                id
              }
            }
          }
        }
      }
    `
  ).then(result => {
    console.log('end graphql query: allContentfulSeiteStellenanzeige.')

    const template = path.resolve(
      `./src/templates/karriere/stellenanzeige.tsx`
    )

    _.each(result.data.allContentfulSeiteStellenanzeige.edges, edge => {
      createPage({
        path: `/karriere/stellenanzeige/${edge.node.url}`,
        component: slash(template),
        context: {
          id: edge.node.id,
          bildStellenanzeigeId: '/' + edge.node.bildStellenanzeige.id + '/',
        },
      })

      createRedirect({
        fromPath: `/karriere/stellenanzeige/${edge.node.id}`,
        redirectInBrowser: true,
        toPath: `/karriere/stellenanzeige/${edge.node.url}`,
      })

      console.log(`created page /karriere/stellenanzeige/${edge.node.url}.`)
    })

    callback(null)
  })
}
