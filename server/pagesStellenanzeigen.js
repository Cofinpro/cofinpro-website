const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(
  graphql,
  createPage,
  createRedirect,
  callback
) {
  console.log("start graphql query: allContentfulSeiteStellenanzeige.");

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

    console.log("end graphql query: allContentfulSeiteStellenanzeige.");

    const template = path.resolve(`./src/templates/stellenanzeige/index.jsx`)

    _.each(result.data.allContentfulSeiteStellenanzeige.edges, edge => {

      createPage({
        path: `/stellenanzeige/${edge.node.url}`,
        component: slash(template),
        context: {
          id: edge.node.id,
          bildStellenanzeigeId: '/' + edge.node.bildStellenanzeige.id + '/',
        },
      })
  
      createRedirect({
        fromPath: `/stellenanzeige/${edge.node.id}`,
        redirectInBrowser: true,
        toPath: `/stellenanzeige/${edge.node.url}`,
      })
  
      console.log(`created page stellenanzeige/${edge.node.url}.`)
    })

    callback(null);
  })
}
