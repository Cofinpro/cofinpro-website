const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function(graphql, createPage, callback) {
  console.log('start graphql query: allContentfulSeiteJobsBewerbung.')

  graphql(
    `
      {
        allContentfulSeiteJobsBewerbung(limit: 1000) {
          edges {
            node {
              id
              titelbild {
                id
              }
              titelbildKlein {
                id
              }
              erstesBildAnsprechpartnerBewerbungen {
                id
              }
              zweitesBildAnsprechpartnerBewerbungen {
                id
              }
              gptw {
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
    console.log('end graphql query: allContentfulSeiteJobsBewerbung.')

    const template = path.resolve(`./src/templates/jobs-bewerbung/index.jsx`)

    _.each(result.data.allContentfulSeiteJobsBewerbung.edges, edge => {
      console.log('finished image processing jobs bewerbung.')

      createPage({
        path: `/jobs-bewerbung`,
        component: slash(template),
        context: {
          id: edge.node.id,
          titelbildId: '/' + edge.node.titelbild.id + '/',
          titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
          ansprechpartnerEinsBildId:
            '/' + edge.node.erstesBildAnsprechpartnerBewerbungen.id + '/',
          ansprechpartnerZweiBildId:
            '/' + edge.node.zweitesBildAnsprechpartnerBewerbungen.id + '/',
          gptwId: '/' + edge.node.gptw.bild.id + '/',
        },
      })

      console.log(`created page /jobs-bewerbung`)
    })

    callback(null)
  })
}
