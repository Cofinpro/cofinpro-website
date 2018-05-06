const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function (graphql, createPage, createRedirect, callback) {

  console.log("start graphql query: allContentfulSeiteGehaltBenefits.");

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

    console.log("end graphql query: allContentfulSeiteGehaltBenefits.");

    const gehaltBeteiligungTemplate = path.resolve(`./src/templates/gehalt-beteiligung/index.jsx`);
    
    createRedirect({
      fromPath: `/gehalt-beteiligung`,
      redirectInBrowser: true,
      toPath: `/`,
    })

    _.each(result.data.allContentfulSeiteGehaltBenefits.edges, edge => {

      createPage({
        path: `${edge.node.perspektive.name}/gehalt-beteiligung`,
        component: slash(gehaltBeteiligungTemplate),
        context: {
          id: edge.node.id,
          titelbildId: '/' + edge.node.bildUnterHauptueberschrift.id + '/',
          titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
        },
      })
      console.log(`created page ${edge.node.perspektive.name}/gehalt-beteiligung`);
    })

    callback(null);
  })
}