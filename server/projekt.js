const _ = require('lodash')
const path = require('path')
const slash = require('slash')

exports.create = function(graphql, createPage, backgroundImages, callback) {
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

    var categoryImageIndex = {}

    var index = 0

    _.each(result.data.allContentfulProjekt.edges, edge => {
      var indexOfImage = 0
      var imageOverlayTemp = ''

      if (
        categoryImageIndex[edge.node.kategorieInDerDasProjektFllt] !== undefined
      ) {
        indexOfImage =
          categoryImageIndex[edge.node.kategorieInDerDasProjektFllt] + 1
        categoryImageIndex[
          edge.node.kategorieInDerDasProjektFllt
        ] = indexOfImage
      }
      if (
        categoryImageIndex[edge.node.kategorieInDerDasProjektFllt] === undefined
      ) {
        categoryImageIndex[
          edge.node.kategorieInDerDasProjektFllt
        ] = indexOfImage
      }

      if (index % 2 === 0) {
        imageOverlayTemp = '--brown'
      } else {
        imageOverlayTemp = '--pink'
      }

      var pathPrefix =
        edge.node.kategorieInDerDasProjektFllt.toLowerCase() +
        '/' +
        edge.node.urlDerSeite

      console.log(indexOfImage)

      createPage({
        path: '/projekte/' + pathPrefix,
        component: slash(template),
        context: {
          id: edge.node.id,
          image: backgroundImages[indexOfImage],
          backgroundOverlayColor: imageOverlayTemp,
        },
      })
      console.log('created page /projekte/' + pathPrefix)

      ++index
    })
    callback(null)
  })
}
