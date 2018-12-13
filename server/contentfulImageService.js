const _ = require(`lodash`)
const fs = require(`fs-extra`)
const axios = require('axios')

var runWithTestData = false

exports.refreshImages = function(graphql, callback) {
  console.log('started image processing.')

  if (runWithTestData) {
    _.each(testDataAllContentfulAsset.data.allContentfulAsset.edges, edge => {
      var fileName = edge.node.file.fileName
      var newFileName =
        edge.node.contentful_id +
        fileName.substring(fileName.lastIndexOf('.'), fileName.length)
      var path = './static/img/contentful/' + newFileName

      if (!existsAsset(path)) {
        console.log('asset for id:' + edge.node.contentful_id + ' not found.')

        var url = 'http:' + edge.node.file.url

        getAndStoreAssetFromContentful(url, path)
      }
    })

    callback(null)
  } else {
    graphql(
      `
        {
          allContentfulAsset(limit: 3000) {
            edges {
              node {
                id
                contentful_id
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
        if (edge.node.file === undefined || edge.node.file === null) {
          return
        }

        var path = getDestinationPath(edge)
        console.log('checking if asset exists under:' + path)

        if (path !== '' && !existsAsset(path)) {
          console.log('asset for id:' + edge.node.contentful_id + ' not found.')

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
              }, 5000)
            }
          })
        } else {
          itemsProcessed++

          if (itemsProcessed === result.data.allContentfulAsset.edges.length) {
            setTimeout(function() {
              callback(null)
              console.log('timeout completed')
            }, 5000)
          }
        }
      })
    })
  }
}

function getDestinationPath(edge) {
  var fileName = edge.node.file.fileName
  var newFileName =
    edge.node.contentful_id +
    fileName.substring(fileName.lastIndexOf('.'), fileName.length)

  console.log('new file name:' + newFileName)

  if (isImage(newFileName)) {
    return './static/img/contentful/' + newFileName
  } else if (isPdf(newFileName)) {
    return './static/pdf/contentful/' + newFileName
  }
}

function isImage(_fileName) {
  return ['.jpg', '.jpeg', '.png', '.ico'].some(x =>
    _fileName.toLowerCase().endsWith(x)
  )
}

function isPdf(_fileName) {
  return _fileName.toLowerCase().endsWith('.pdf')
}

function existsAsset(_path) {
  return fs.existsSync(_path)
}
