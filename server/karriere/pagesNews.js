const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(createPage, news, callback) {
  const template = path.resolve(`./src/templates/karriere/news/index.jsx`)

  _.each(news, edge => {
    createPage({
      path: `/karriere/pinnwand/${edge.node.url}`,
      component: slash(template),
      context: {
        id: edge.node.id,
        news: edge,
      },
    })

    console.log(`created page /karriere/pinnwand/${edge.node.id}.`)
  })

  callback(null)
}
