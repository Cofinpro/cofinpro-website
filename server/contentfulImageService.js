const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')
const fs = require(`fs-extra`)
var moment = require('moment')
const axios = require('axios')

var runWithTestData = false

exports.refreshImages = function(graphql, callback) {
  console.log('started image processing.')

  if (runWithTestData) {
    _.each(testDataAllContentfulAsset.data.allContentfulAsset.edges, edge => {
      var fileName = edge.node.file.fileName
      var newFileName =
        edge.node.id +
        fileName.substring(fileName.lastIndexOf('.'), fileName.length)
      var path = './static/img/contentful/' + newFileName

      if (!existsAsset(path)) {
        console.log('asset for id:' + edge.node.id + ' not found.')

        var url = 'http:' + edge.node.file.url

        getAndStoreAssetFromContentful(url, path)
      }
    })

    callback(null)
  } else {
    graphql(
      `
        {
          allContentfulAsset(limit: 2000) {
            edges {
              node {
                id
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      `
    ).then(result => {
      var itemsProcessed = 0

      _.each(result.data.allContentfulAsset.edges, edge => {
        var fileName = edge.node.file.fileName
        var newFileName =
          edge.node.id +
          fileName.substring(fileName.lastIndexOf('.'), fileName.length)
        var path = './static/img/contentful/' + newFileName

        console.log('checking if image exists under:' + path)

        if (!existsAsset(path)) {
          console.log('asset for id:' + edge.node.id + ' not found.')

          var url = 'http:' + edge.node.file.url

          console.log('getting file from url:' + url)
          console.log('storing file under path:' + path)

          axios({
            method: 'get',
            url: url,
            responseType: 'stream',
          }).then(function(response) {
            response.data.pipe(fs.createWriteStream(path))
            itemsProcessed++

            if (
              itemsProcessed === result.data.allContentfulAsset.edges.length
            ) {
              setTimeout(function() {
                callback(null)
                console.log('timeout completed')
              }, 1000)
            }
          })
        } else {
          itemsProcessed++

          if (itemsProcessed === result.data.allContentfulAsset.edges.length) {
            setTimeout(function() {
              callback(null)
              console.log('timeout completed')
            }, 1000)
          }
        }
      })
    })
  }
}

function existsAsset(_path) {
  if (fs.existsSync(_path)) {
    return true
  }
  return false
}
