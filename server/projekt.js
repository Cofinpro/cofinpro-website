const _ = require('lodash')
const path = require('path')
const slash = require('slash')

exports.create = function (graphql, createPage, callback) {

    graphql(
        `
          {
            allContentfulProjekt {
              edges {
                node {
                    id
                    kategorieInDerDasProjektFllt
                    urlDerSeite
                }
              }
            }
          }
        `
    ).then(result => {

        const template = path.resolve(`./src/templates/projekt/index.jsx`)

        _.each(result.data.allContentfulProjekt.edges, edge => {
            var pathPrefix = edge.node.kategorieInDerDasProjektFllt.toLowerCase() + '/' + edge.node.urlDerSeite;
            createPage({
                path: '/projekte/' + pathPrefix,
                component: slash(template),
                context: {
                    id: edge.node.id,
                },
            })
            console.log('created page /projekte/' + pathPrefix)
        })
        callback(null)
    })
}