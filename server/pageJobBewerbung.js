const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')

exports.create = function (graphql, createPage, stellenAnzeigen, callback) {
  graphql(
    `
      {
        allContentfulSeiteJobsBewerbung(limit: 1000) {
          edges {
            node {
              id
              titelbild {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              titelbildKlein {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              erstesBildAnsprechpartnerBewerbungen {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              zweitesBildAnsprechpartnerBewerbungen {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const template = path.resolve(`./src/templates/jobs-bewerbung.jsx`)

    _.each(result.data.allContentfulSeiteJobsBewerbung.edges, edge => {
      async.parallel(
        {
          imageOne: async.apply(
            createSharpImage,
            graphql,
            'maxWidth: 2000, maxHeight: 1335, quality: 60, cropFocus: CENTER',
            edge.node.erstesBildAnsprechpartnerBewerbungen
          ),
          imageTwo: async.apply(
            createSharpImage,
            graphql,
            'maxWidth: 2000, maxHeight: 1335, quality: 60, cropFocus: CENTER',
            edge.node.zweitesBildAnsprechpartnerBewerbungen
          ),
          titelBildDesktop: async.apply(
            createSharpImage,
            graphql,
            'quality: 90',
            edge.node.titelbild
          ),
          titelBildMobile: async.apply(
            createSharpImage,
            graphql,
            'quality: 90',
            edge.node.titelbildKlein
          ),
        },
        function (err, results) {
          // results is now equals to: {one: 1, two: 2}

          console.log('finished image processing jobs bewerbung.')

          createPage({
            path: `/jobs-bewerbung`,
            component: slash(template),
            context: {
              id: edge.node.id,
              stellenAnzeigen: stellenAnzeigen,
              titelBildDesktop: results.titelBildDesktop,
              titelBildMobile: results.titelBildMobile,
              erstesBildAnsprechpartnerBewerbungen: results.imageOne,
              zweitesBildAnsprechpartnerBewerbungen: results.imageTwo,
            },
          })

          console.log(`created page /jobs-bewerbung`)
          callback(null)
        }
      )
    })
  })
}

function createSharpImage(graphql, sharpParameter, originalImg, callback) {
  graphql(
    `
      {
      resultImage: imageSharp(id: { regex: "/` +
    originalImg.id +
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
    callback(null, result.data.resultImage)
  })
}
