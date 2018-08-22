const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulSeiteDeineKarriere.')

  graphql(
    `
      {
        allContentfulSeiteDeineKarriere(limit: 1000) {
          edges {
            node {
              id
              perspektive {
                name
              }
              vorteile {
                bildVorteil1 {
                  id
                }
                bildVorteil2 {
                  id
                }
                bildVorteil3 {
                  id
                }
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
    console.log('end graphql query: allContentfulSeiteDeineKarriere.')

    const deineKarriereTemplate = path.resolve(
      `./src/templates/karriere/deine-karriere/index.jsx`
    )

    createRedirect({
      fromPath: `/karriere/deine-karriere`,
      redirectInBrowser: true,
      toPath: `/`,
    })

    var itemsProcessed = 0

    _.each(result.data.allContentfulSeiteDeineKarriere.edges, edge => {
      const vorteilIconLinksIdTemp = edge.node.vorteile.bildVorteil1.id
      const vorteilIconMitteIdTemp = edge.node.vorteile.bildVorteil2.id
      const vorteilIconRechtsIdTemp = edge.node.vorteile.bildVorteil3.id

      createPage({
        path: `/karriere/${edge.node.perspektive.name}/deine-karriere`,
        component: slash(deineKarriereTemplate),
        context: {
          id: edge.node.id,
          titelbildId: '/' + edge.node.titelbild.id + '/',
          titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
          vorteilIconLinksId: '/' + vorteilIconLinksIdTemp + '/',
          vorteilIconMitteId: '/' + vorteilIconMitteIdTemp + '/',
          vorteilIconRechtsId: '/' + vorteilIconRechtsIdTemp + '/',
        },
      })

      console.log(
        `created page /karriere/${edge.node.perspektive.name}/deine-karriere`
      )
    })

    callback(null)
  })
}
