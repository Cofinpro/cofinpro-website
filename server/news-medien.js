const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function (graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: news medien.')

  graphql(
    `
      {
        allContentfulDownload(
          sort: { fields: [datumDerVerffentlichung], order: DESC }
        ) {
          edges {
            node {
              id
              contentfulInternerName
              datumDerVerffentlichung
              beschriftungDesDownloads
              zuordnungZuBereiche
              artDesDownloads
              nurImArchivAnzeigen
              datei {
                id
                title
                description
              }
            }
          }
        }
      }
    `
  ).then(result => {
    console.log('end graphql query: news medien.')

    const template = path.resolve(`./src/templates/news-medien-uebersicht/index.jsx`)

    let dataManagementBeratung = {
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataFachKreditBeratung = {
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataFachWertpapierBeratung = {
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataTechnologieBeratung = {
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataDigitalisierungBeratung = {
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    for (let i = 0; i < result.data.allContentfulDownload.edges.length; ++i) {
      let download = result.data.allContentfulDownload.edges[i].node;

      if (download.zuordnungZuBereiche.indexOf('Managementberatung') > -1) {
        addDownloadToBucket(download, dataManagementBeratung)
      }
      if (download.zuordnungZuBereiche.indexOf('Fachberatung-Kredit') > -1) {
        addDownloadToBucket(download, dataFachKreditBeratung)
      }
      if (download.zuordnungZuBereiche.indexOf('Fachberatung-Wertpapier') > -1) {
        addDownloadToBucket(download, dataFachWertpapierBeratung)
      }
      if (download.zuordnungZuBereiche.indexOf('Technologieberatung') > -1) {
        addDownloadToBucket(download, dataTechnologieBeratung)
      }
      if (download.zuordnungZuBereiche.indexOf('Digitalisierung') > -1) {
        addDownloadToBucket(download, dataDigitalisierungBeratung)
      }

    }

    createPage({
      path: `/news-medien/managementberatung`,
      component: slash(template),
      context: {
        name: 'Managementberatung',
        url: 'managementberatung',
        input: dataManagementBeratung,
      },
    })

    console.log(`created page /news-medien/managementberatung.`)

    createPage({
      path: `/news-medien/fachberatung-kredit`,
      component: slash(template),
      context: {
        name: 'Fachberatung-Kredit',
        url: 'fachberatung-kredit',
        input: dataFachKreditBeratung,
      },
    })

    console.log(`created page /news-medien/fachberatung-kredit.`)

    createPage({
      path: `/news-medien/fachberatung-wertpapier`,
      component: slash(template),
      context: {
        name: 'Fachberatung-Wertpapier',
        url: 'fachberatung-wertpapier',
        input: dataFachWertpapierBeratung,
      },
    })

    console.log(`created page /news-medien/fachberatung-wertpapier.`)

    createPage({
      path: `/news-medien/technologieberatung`,
      component: slash(template),
      context: {
        name: 'Technologieberatung',
        url: 'technologieberatung',
        input: dataTechnologieBeratung,
      },
    })

    console.log(`created page /news-medien/technologieberatung.`)

    createPage({
      path: `/news-medien/digitalisierung`,
      component: slash(template),
      context: {
        name: 'Digitalisierung',
        url: 'digitalisierung',
        input: dataDigitalisierungBeratung,
      },
    })

    console.log(`created page /news-medien/digitalisierung.`)

    // Detailseiten Fokusthemen ab hier

    callback(null)
  })
}

function addDownloadToBucket(_download, _bucket) {
  if (_download.artDesDownloads === 'Studie') {
    _bucket.studien.push(_download)

  } else if (_download.artDesDownloads === 'Lösungsskizze') {
    _bucket.loesungsskizzen.push(_download)

  } else if (_download.artDesDownloads === 'Whitepaper') {
    _bucket.whitepapers.push(_download)

  } else if (_download.artDesDownloads === 'Thesenpapier') {
    _bucket.thesenpapiere.push(_download)

  }
}