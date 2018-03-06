const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(
  createPage,
  createRedirect,
  stellenAnzeigen,
  callback
) {
  console.log(`start create stellenanzeige.`)

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

  callback(null)
}
