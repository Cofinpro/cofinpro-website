const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulSeiteGehaltBenefits.')

  graphql(
    `
      {
        allContentfulSeiteGehaltBenefits(limit: 1000) {
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
              bildUnterHauptueberschrift {
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
    console.log('end graphql query: allContentfulSeiteGehaltBenefits.')

    const gehaltBeteiligungTemplate = path.resolve(
      `./src/templates/gehalt-beteiligung/index.jsx`
    )

    createRedirect({
      fromPath: `/gehalt-beteiligung`,
      redirectInBrowser: true,
      toPath: `/`,
    })

    _.each(result.data.allContentfulSeiteGehaltBenefits.edges, edge => {
      const vorteilIconLinksIdTemp = edge.node.vorteile.bildVorteil1.id
      const vorteilIconMitteIdTemp = edge.node.vorteile.bildVorteil2.id
      const vorteilIconRechtsIdTemp = edge.node.vorteile.bildVorteil3.id

      createPage({
        path: `${edge.node.perspektive.name}/gehalt-beteiligung`,
        component: slash(gehaltBeteiligungTemplate),
        context: {
          id: edge.node.id,
          titelbildId: '/' + edge.node.bildUnterHauptueberschrift.id + '/',
          titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
          vorteilIconLinksId: '/' + vorteilIconLinksIdTemp + '/',
          vorteilIconMitteId: '/' + vorteilIconMitteIdTemp + '/',
          vorteilIconRechtsId: '/' + vorteilIconRechtsIdTemp + '/',
        },
      })
      console.log(
        `created page ${edge.node.perspektive.name}/gehalt-beteiligung`
      )
    })

    callback(null)
  })
}
