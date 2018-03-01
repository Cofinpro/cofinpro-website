'use strict'

function create(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  const template = path.resolve(`./src/templates/pinnwand.jsx`)

  createPage({
    path: `/pinnwand`,
    component: slash(template),
    context: {
      allNews: news,
    },
  })

  console.log(`created page /pinnwand.`)

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
}

exports.create
