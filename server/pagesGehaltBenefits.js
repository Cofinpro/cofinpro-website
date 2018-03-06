const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, callback) {
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
            }
          }
        }
      }
    `
  ).then(result => {
    const gehaltBeteiligungTemplate = path.resolve(
      `./src/templates/gehalt-beteiligung.jsx`
    )

    _.each(result.data.allContentfulSeiteGehaltBenefits.edges, edge => {
      createPage({
        path: `${edge.node.perspektive.name}/gehalt-beteiligung`,
        component: slash(gehaltBeteiligungTemplate),
        context: {
          id: edge.node.id,
        },
      })

      console.log(
        `created page ${edge.node.perspektive.name}/gehalt-beteiligung`
      )
    })

    callback()
  })
}
