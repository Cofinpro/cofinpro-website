'use strict'

function create(
  graphql,
  createPage,
  createRedirect,
  stellenAnzeigen,
  news,
  callback
) {
  const template = path.resolve(`./src/templates/stellenanzeige.jsx`)

  _.each(stellenAnzeigen, edge => {
    createPage({
      path: `/stellenanzeige/${edge.node.url}`,
      component: slash(template),
      context: {
        id: edge.node.id,
        stellenAnzeige: edge,
        stellenAnzeigen: stellenAnzeigen,
      },
    })

    createRedirect({
      fromPath: `/stellenanzeige/${edge.node.id}`,
      redirectInBrowser: true,
      toPath: `/stellenanzeige/${edge.node.url}`,
    })

    console.log(`created page stellenanzeige/${edge.node.url}.`)
  })

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news)
}

exports.create
