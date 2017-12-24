const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
var async = require("async")
const fs = require(`fs-extra`)
var moment = require('moment');
const axios = require('axios');

var stellenAnzeigenJson = require('./test-data/allContentfulStellenanzeige.json');

var testDataAllContentfulAsset = require('./test-data/allContentfulAsset.json');

const runWithTestData = false;

const pathPrefix = "";

// Implement the Gatsby API “createPages”. This is called after the Gatsby
// bootstrap is finished so you have access to any information necessary to
// programmatically create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {

  const { createPage, createRedirect } = boundActionCreators

  moment.locale('de');

  var stellenAnzeigen;
  var news;

  return new Promise((resolve, reject) => {

    async.waterfall([
      async.apply(refreshImages, graphql, createPage, createRedirect, stellenAnzeigen, news),
      getStellenanzeigen,
      createStellenanzeigen,
      getNews,
      createPinnwand,
      createNews,
      createStellenmarkt,
      createUeberUns,
      createDeineKarriere,
      createDeineEntwicklung,
      createStart,
      createGehaltBenefits,
      createWorkLife,
      createJobsBewerbung,
      createStartseite
    ], function (error, success) {
      if (error) { alert('Something is wrong!'); }
      resolve()
      console.log("done");
      return alert('Done!');
    });

  })
}

function getNews(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  var isTest = false;

  if (isTest) {
    news = stellenAnzeigenJson;

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);
  } else {
    graphql(`{
      allContentfulNews(sort: {
        fields: [datumFuerDieAnzeige],
        order: DESC
      }) {
        edges {
          node {
            id
            metaData {
              title
              keywords {
                keywords
              }
              description {
                description
              }
            }
            parent {
              id
            }
            titel
            titelbild {
              id
              title
              description
              file {
                url
                fileName
                contentType
              }
            }
            datumFuerDieAnzeige
            ueberschrift
            kurzeBeschreibung {
              kurzeBeschreibung
            }
            absatz1 {
              absatz1
            }
          }
        }
      }
    }    
  `).then(result => {

        news = result.data.allContentfulNews.edges;

        news.forEach(function (object, index) {
          if (object.node.datumFuerDieAnzeige != null) {
            object.node.datumFuerDieAnzeige = moment(object.node.datumFuerDieAnzeige, "YYYY-MM-DD").format('L');
          }
        });

        callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

      })
  }

}

function createPinnwand(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  const template = path.resolve(`./src/templates/pinnwand.jsx`)

  createPage({
    path: `/pinnwand`,
    component: slash(template),
    context: {
      allNews: news
    }
  })

  console.log(`created page /pinnwand.`);

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

}

function createNews(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  const template = path.resolve(`./src/templates/news.jsx`)

  _.each(news, edge => {

    createPage({
      path: `pinnwand/news/${edge.node.id}`,
      component: slash(template),
      context: {
        id: edge.node.id,
        news: edge
      }
    })

    console.log(`created page pinnwand/news/${edge.node.id}.`);

  })

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

}

function getStellenanzeigen(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  var isTest = false;

  if (isTest) {
    stellenAnzeigen = stellenAnzeigenJson.data.allContentfulStellenanzeige.edges;

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);
  } else {
    graphql(`{
        allContentfulStellenanzeige {
          edges {
            node {
              id
              metaData {
                title
                keywords {
                  keywords
                }
                description {
                  description
                }
              }
              ort
              befristung
              art
              titel
              perspektiveLink {
                name
              }
              ueberschriftGanzOben
              bildStellenanzeige {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              absatzEins {
                absatzEins
              }
              spaltenInfoTitelLinks
              spaltenInfoBeschreibungLinksLang {
                spaltenInfoBeschreibungLinksLang
              }
              spaltenInfoTitelMitte
              spaltenInfoBeschreibungMitte {
                spaltenInfoBeschreibungMitte
              }
              spaltenInfoTitelRechts
              spaltenInfoBeschreibungRechts {
                spaltenInfoBeschreibungRechts
              }
              uMantis {
                uMantis
              }
            }
          }
        }
      }    
    `).then(result => {


        stellenAnzeigen = result.data.allContentfulStellenanzeige.edges;

        callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

      })
  }

}

function createStellenanzeigen(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  const template = path.resolve(`./src/templates/stellenanzeige.jsx`)

  _.each(stellenAnzeigen, edge => {

    createPage({
      path: `/stellenanzeige/${edge.node.id}`,
      component: slash(template),
      context: {
        id: edge.node.id,
        stellenAnzeige: edge,
        stellenAnzeigen: stellenAnzeigen
      }
    })

    console.log(`created page stellenanzeige/${edge.node.id}.`);

  })

  callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

}

function createStellenmarkt(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
        allContentfulStellenmarkt(limit: 1000) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
  ).then(result => {

    const template = path.resolve(`./src/templates/stellenmarkt.jsx`)

    _.each(result.data.allContentfulStellenmarkt.edges, edge => {

      createPage({
        path: `/jobs`,
        component: slash(template),
        context: {
          id: edge.node.id,
          stellenAnzeigen: stellenAnzeigen
        }
      })

      console.log(`created page /jobs.`);

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createUeberUns(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
        allContentfulUeberUns(limit: 1000) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
  ).then(result => {

    const ueberUnsTemplate = path.resolve(`./src/templates/ueber-uns.jsx`)

    _.each(result.data.allContentfulUeberUns.edges, edge => {

      createPage({
        path: `/ueber-uns`,
        component: slash(ueberUnsTemplate),
        context: {
          id: edge.node.id
        }
      })

      console.log("created page ueber-uns.");

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createDeineKarriere(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
      allContentfulDeineKarriere(limit: 1000) {
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

    createRedirect({
      fromPath: pathPrefix + '/undefined/deine-karriere',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: pathPrefix + '/deine-karriere',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: '/deine-karriere',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: '/undefined/deine-karriere',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: '/stellenmarkt',
      redirectInBrowser: true,
      toPath: '/jobs',
    })

    const deineKarriereTemplate = path.resolve(`./src/templates/deine-karriere.jsx`)

    _.each(result.data.allContentfulDeineKarriere.edges, edge => {

      createPage({
        path: `${edge.node.perspektive.name}/deine-karriere`,
        component: slash(deineKarriereTemplate),
        context: {
          id: edge.node.id
        }
      })

      console.log(`created page ${edge.node.perspektive.name}/deine-karriere`);

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createDeineEntwicklung(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
        allContentfulDeineEntwicklung(limit: 1000) {
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

    createRedirect({
      fromPath: pathPrefix + '/deine-entwicklung',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: pathPrefix + '/undefined/deine-entwicklung',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: '/deine-entwicklung',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: '/undefined/deine-entwicklung',
      redirectInBrowser: true,
      toPath: '/',
    })

    const deineEntwicklungTemplate = path.resolve(`./src/templates/deine-entwicklung.jsx`)

    _.each(result.data.allContentfulDeineEntwicklung.edges, edge => {

      createPage({
        path: `${edge.node.perspektive.name}/deine-entwicklung`,
        component: slash(deineEntwicklungTemplate),
        context: {
          id: edge.node.id
        }
      })

      console.log(`created page ${edge.node.perspektive.name}/deine-entwicklung`);

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createStart(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
        allContentfulStartseitePerspektive(limit: 1000) {
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

    createRedirect({
      fromPath: '/landing',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: '/undefined/landing',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: pathPrefix + '/landing',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: pathPrefix + '/undefined/landing',
      redirectInBrowser: true,
      toPath: '/',
    })

    const landingTemplate = path.resolve(`./src/templates/landing.jsx`)

    var topNews = [];
    var numberOfTopsNews = 2;

    for (var i = 0; i < news.length; ++i) {
      if (i < numberOfTopsNews) {
        topNews.push(news[i]);
      }
    }

    _.each(result.data.allContentfulStartseitePerspektive.edges, edge => {

      createPage({
        path: `${edge.node.perspektive.name}/landing`,
        component: slash(landingTemplate),
        context: {
          id: edge.node.id,
          anzeigen: stellenAnzeigen,
          topNews: topNews
        }
      })

      console.log(`created page ${edge.node.perspektive.name}/landing`);

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createGehaltBenefits(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
      allContentfulGehaltBenefits(limit: 1000) {
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

    createRedirect({
      fromPath: '/gehalt-beteiligung',
      redirectInBrowser: true,
      toPath: '/',
    })

    createRedirect({
      fromPath: '/undefined/gehalt-beteiligung',
      redirectInBrowser: true,
      toPath: '/',
    })

    const gehaltBeteiligungTemplate = path.resolve(`./src/templates/gehalt-beteiligung.jsx`)

    _.each(result.data.allContentfulGehaltBenefits.edges, edge => {

      createPage({
        path: `${edge.node.perspektive.name}/gehalt-beteiligung`,
        component: slash(gehaltBeteiligungTemplate),
        context: {
          id: edge.node.id
        }
      })

      console.log(`created page ${edge.node.perspektive.name}/gehalt-beteiligung`);

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createWorkLife(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
      allContentfulWorkLife(limit: 1000) {
            edges {
              node {
                id
              }
            }
          }
        }
      `
  ).then(result => {

    const workLifeTemplate = path.resolve(`./src/templates/work-life.jsx`)

    _.each(result.data.allContentfulWorkLife.edges, edge => {

      createPage({
        path: `/work-life`,
        component: slash(workLifeTemplate),
        context: {
          id: edge.node.id
        }
      })

      console.log("created page work life.");

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createJobsBewerbung(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
      allContentfulJobsBewerbung(limit: 1000) {
        edges {
          node {
            id
          }
        }
      }
    }    
        `
  ).then(result => {


    const template = path.resolve(`./src/templates/jobs-bewerbung.jsx`)

    _.each(result.data.allContentfulJobsBewerbung.edges, edge => {

      createPage({
        path: `/jobs-bewerbung`,
        component: slash(template),
        context: {
          id: edge.node.id,
          stellenAnzeigen: stellenAnzeigen
        }
      })

      console.log(`created page /jobs-bewerbung`);

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function createStartseite(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  graphql(
    `{
        allContentfulWahlDerKompetenz(limit: 1) {
          edges {
            node {
              id
            }
          }
        }
      }    
          `
  ).then(result => {


    const template = path.resolve(`./src/templates/startseite.jsx`)

    _.each(result.data.allContentfulWahlDerKompetenz.edges, edge => {

      createPage({
        path: `/`,
        component: slash(template),
        context: {
          id: edge.node.id
        }
      })

      console.log(`created page /index.jsx`);

    })

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  })

}

function refreshImages(graphql, createPage, createRedirect, stellenAnzeigen, news, callback) {

  if (runWithTestData) {

    _.each(testDataAllContentfulAsset.data.allContentfulAsset.edges, edge => {

      var fileName = edge.node.file.fileName;
      var newFileName = edge.node.id + fileName.substring(fileName.lastIndexOf('.'), fileName.length);
      var path = "./static/img/contentful/" + newFileName;

      if (!existsAsset(path)) {
        console.log("asset for id:" + edge.node.id + " not found.");

        var url = "http:" + edge.node.file.url;

        getAndStoreAssetFromContentful(url, path);
      }

    });

    callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);

  } else {
    graphql(
      `{
        allContentfulAsset(limit: 1000) {
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

        var fileName = edge.node.file.fileName;
        var newFileName = edge.node.id + fileName.substring(fileName.lastIndexOf('.'), fileName.length);
        var path = "./static/img/contentful/" + newFileName;

        if (!existsAsset(path)) {
          console.log("asset for id:" + edge.node.id + " not found.");

          var url = "http:" + edge.node.file.url;

          getAndStoreAssetFromContentful(url, path);
        }

      });

      callback(null, graphql, createPage, createRedirect, stellenAnzeigen, news);
    })
  }

}

function getAndStoreAssetFromContentful(_url, _path) {

  console.log("getting file from url:" + _url);
  console.log("storing file under path:" + _path);

  axios({
    method: 'get',
    url: _url,
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(_path))
    });
}

function existsAsset(_path) {
  if (fs.existsSync(_path)) {
    return true;
  }
  return false;
}
