const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(
  graphql,
  createPage,
  news,
  stellenAnzeigen,
  callback
) {
  graphql(
    `
      {
        allContentfulSeiteLandingPerspektive(limit: 1000) {
          edges {
            node {
              id
              perspektive {
                name
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const landingTemplate = path.resolve(`./src/templates/landing.jsx`)

    var topNews = []
    var numberOfTopsNews = 2

    for (var i = 0; i < news.length; ++i) {
      if (i < numberOfTopsNews) {
        topNews.push(news[i])
      }
    }

    _.each(result.data.allContentfulSeiteLandingPerspektive.edges, edge => {
      createPage({
        path: `${edge.node.perspektive.name}/landing`,
        component: slash(landingTemplate),
        context: {
          id: edge.node.id,
          anzeigen: stellenAnzeigen,
          topNews: topNews,
        },
      })

      console.log(`created page ${edge.node.perspektive.name}/landing`)
    })

    callback()
  })
}
