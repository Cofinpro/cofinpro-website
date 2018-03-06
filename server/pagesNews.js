const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(createPage, news, callback) {
  const template = path.resolve(`./src/templates/news.jsx`)

  _.each(news, edge => {
    var titelbildIdVar =
      edge.node.titelbild !== null ? '/' + edge.node.titelbild.id + '/' : ''
    var newsBildIdVar =
      edge.node.newsBild !== null ? '/' + edge.node.newsBild.id + '/' : ''

    createPage({
      path: `pinnwand/${edge.node.url}`,
      component: slash(template),
      context: {
        id: edge.node.id,
        news: edge,
      },
    })

    console.log(`created page pinnwand/${edge.node.id}.`)
  })

  callback(null)
}
