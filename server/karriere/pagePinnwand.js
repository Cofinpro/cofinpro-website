const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(createPage, news, callback) {
  const template = path.resolve(`./src/templates/karriere/pinnwand/index.jsx`)

  createPage({
    path: `/karriere/pinnwand`,
    component: slash(template),
    context: {
      allNews: news,
    },
  })

  console.log(`created page /pinnwand.`)

  callback(null)
}
