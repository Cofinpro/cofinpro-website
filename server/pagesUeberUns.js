const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function (graphql, createPage, callback) {

  console.log("start graphql query: allContentfulSeiteUeberUns.");

  graphql(
    `
      {
        allContentfulSeiteUeberUns(limit: 1000) {
          edges {
            node {
              id
              titelbild {
                id
              }
              titelbildKlein {
                id
              }
              karrieremagazin {
                bild {
                  id
                }
              }
              projekte {
                bild {
                  id
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {

    console.log("end graphql query: allContentfulSeiteUeberUns.");

    const ueberUnsTemplate = path.resolve(`./src/templates/ueber-uns/index.jsx`)

    _.each(result.data.allContentfulSeiteUeberUns.edges, edge => {

      createPage({
        path: `/ueber-uns`,
        component: slash(ueberUnsTemplate),
        context: {
          id: edge.node.id,
          titelbildId: '/' + edge.node.titelbild.id + '/',
          titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
          projektBildId: '/' + edge.node.projekte.bild.id + '/',
          karrieremagazinId: '/' + edge.node.karrieremagazin.bild.id + '/',
        },
      })

      console.log('created page ueber-uns.')
    })

    callback(null)

  })
}