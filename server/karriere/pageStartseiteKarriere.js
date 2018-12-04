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
              bildFuerPerspektiveFach {
                id
              }
              bildFuerPerspektiveTech {
                id
              }
              bildFuerPerspektiveStudent {
                id
              }
              bildFuerPerspektiveAndere {
                id
              }
            }
          }
        }
      }
    `
  ).then(result => {
    console.log(`ended query for index.html`)

    const template = path.resolve(
      `./src/templates/karriere/startseite.tsx`
    )

    _.each(result.data.allContentfulSeiteStartseiteKarriere.edges, edge => {
      createPage({
        path: `/karriere`,
        component: slash(template),
        context: {
          id: edge.node.id,
          bildFuerPerspektiveFachId:
            '/' + edge.node.bildFuerPerspektiveFach.id + '/',
          bildFuerPerspektiveTechId:
            '/' + edge.node.bildFuerPerspektiveTech.id + '/',
          bildFuerPerspektiveStudentId:
            '/' + edge.node.bildFuerPerspektiveStudent.id + '/',
          bildFuerPerspektiveAndereId:
            '/' + edge.node.bildFuerPerspektiveAndere.id + '/',
        },
      })

      console.log(`created page /karriere.tsx`)
    })

    callback(null)
  })
}
