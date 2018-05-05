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
              managementBoardMitglieder {
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

    const managementBoardMitgliederImages = [];

    _.each(result.data.allContentfulSeiteUeberUns.edges[0].node.managementBoardMitglieder, item => {
      managementBoardMitgliederImages.push(item.bild);
    });

    _.each(result.data.allContentfulSeiteUeberUns.edges, edge => {

      async.parallel(
        {
          mbImages: async.apply(
            createSharpImages,
            graphql,
            'maxWidth: 800, quality: 60',
            managementBoardMitgliederImages
          ),
        },
        function(err, results) {

          console.log('finished image processing ueber uns.')

          var imageMap = new Object();

          _.each(results.mbImages, image => {
            imageMap[image.sizes.originalName] = image;
          });

          createPage({
            path: `/ueber-uns`,
            component: slash(ueberUnsTemplate),
            context: {
              id: edge.node.id,
              titelbildId: '/' + edge.node.titelbild.id + '/',
              titelbildKleinId: '/' + edge.node.titelbildKlein.id + '/',
              projektBildId: '/' + edge.node.projekte.bild.id + '/',
              karrieremagazinId: '/' + edge.node.karrieremagazin.bild.id + '/',
              mbImagesSharp: imageMap,
            },
          })
    
          console.log('created page ueber-uns.')

          callback()
        }
      )


    })

  })
}

function createSharpImages(
  graphql,
  sharpParameter,
  listOfInputImages,
  callback
) {
  var itemsProcessed = 0
  var resultImages = []

  _.each(listOfInputImages, image => {
    graphql(
      `
                {
                resultImage: imageSharp(id: { regex: "/` +
        image.id +
        `/" }) {
                        sizes(` +
        sharpParameter +
        `) {
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                        base64
                        aspectRatio
                        sizes
                        }
                    }
                }          
            `
    ).then(result => {
      resultImages.push(result.data.resultImage)

      itemsProcessed++
      if (itemsProcessed === listOfInputImages.length) {
        callback(null, resultImages)
      }
    })
  })
}