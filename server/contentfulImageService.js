'use strict'

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
var async = require('async')
const fs = require(`fs-extra`)
var moment = require('moment')
const axios = require('axios')

var runWithTestData = false

function refreshImages(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
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

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
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
      _.each(result.data.allContentfulAsset.edges, edge => {
        var fileName = edge.node.file.fileName
        var newFileName =
          edge.node.id +
          fileName.substring(fileName.lastIndexOf('.'), fileName.length)
        var path = './../static/img/contentful/' + newFileName

        if (!existsAsset(path)) {
          console.log('asset for id:' + edge.node.id + ' not found.')

          var url = 'http:' + edge.node.file.url

          getAndStoreAssetFromContentful(url, path)
        }
      })

      callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
    })
  }
}

function getAndStoreAssetFromContentful(_url, _path) {
  console.log('getting file from url:' + _url)
  console.log('storing file under path:' + _path)

  axios({
    method: 'get',
    url: _url,
    responseType: 'stream',
  }).then(function(response) {
    response.data.pipe(fs.createWriteStream(_path))
  })
}

function existsAsset(_path) {
  if (fs.existsSync(_path)) {
    return true
  }
  return false
}

exports.refreshImages
