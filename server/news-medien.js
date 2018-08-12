const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var moment = require('moment')

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
        allContentfulVeroffentlichung(
          sort: { fields: [datumDerVerffentlichung], order: DESC }
        ) {
          edges {
            node {
              id
              contentfulInternerName
              datumDerVerffentlichung
              ueberschrift
              unterUeberschrift
              zuordnungZuBereiche
              pdfDatei {
                id
                title
                description
              }
              urlDerVerffentlichung
            }
          }
        }
        allContentfulPressemeldung(
          sort: { fields: [verffentlichungsdatum], order: DESC }
        ) {
          edges {
            node {
              id
              contentfulInternerName
              verffentlichungsdatum
              urlDerSeite
              downloadDatei {
                id
                title
                description
              }
              downloadBeschreibenderText {
                downloadBeschreibenderText
              }
              pressemeldungNurImArchivAnzeigen
              anzeigenFuerBeratungsfelder
              ueberschrift
              unteruebrschrift
              fokusthema {
                id
                beratungsfelder
                url
                uberschriftGanzOben
                unterueberschrift
              }
              introText {
                introText
              }
              groesBildMitte {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              paragraph1 {
                paragraph1
              }
              bildZuParagraph1 {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              paragraph2 {
                paragraph2
              }
              bildZuParagraph2 {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
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
      pressemeldungen: [],
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
      },
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataFachKreditBeratung = {
      pressemeldungen: [],
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
      },
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataFachWertpapierBeratung = {
      pressemeldungen: [],
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
      },
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataTechnologieBeratung = {
      pressemeldungen: [],
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
      },
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    let dataDigitalisierungBeratung = {
      pressemeldungen: [],
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
      },
      studien: [],
      thesenpapiere: [],
      whitepapers: [],
      loesungsskizzen: [],
    }

    for (let i = 0; i < result.data.allContentfulDownload.edges.length; ++i) {
      let download = result.data.allContentfulDownload.edges[i].node

      if (
        download.zuordnungZuBereiche !== undefined &&
        download.zuordnungZuBereiche !== null &&
        download.nurImArchivAnzeigen === false
      ) {
        if (download.zuordnungZuBereiche.indexOf('Managementberatung') > -1) {
          addDownloadToBucket(download, dataManagementBeratung)
        }
        if (download.zuordnungZuBereiche.indexOf('Fachberatung-Kredit') > -1) {
          addDownloadToBucket(download, dataFachKreditBeratung)
        }
        if (
          download.zuordnungZuBereiche.indexOf('Fachberatung-Wertpapier') > -1
        ) {
          addDownloadToBucket(download, dataFachWertpapierBeratung)
        }
        if (download.zuordnungZuBereiche.indexOf('Technologieberatung') > -1) {
          addDownloadToBucket(download, dataTechnologieBeratung)
        }
        if (download.zuordnungZuBereiche.indexOf('Digitalisierung') > -1) {
          addDownloadToBucket(download, dataDigitalisierungBeratung)
        }
      }
    }

    for (
      let i = 0; i < result.data.allContentfulVeroffentlichung.edges.length;
      ++i
    ) {
      let veroffentlichung =
        result.data.allContentfulVeroffentlichung.edges[i].node

      if (
        veroffentlichung.zuordnungZuBereiche !== undefined &&
        veroffentlichung.zuordnungZuBereiche !== null
      ) {
        if (
          veroffentlichung.zuordnungZuBereiche.indexOf('Managementberatung') > -1
        ) {
          addVeroeffentlichungToBucket(veroffentlichung, dataManagementBeratung)
        }
        if (
          veroffentlichung.zuordnungZuBereiche.indexOf('Fachberatung-Kredit') > -1
        ) {
          addVeroeffentlichungToBucket(veroffentlichung, dataFachKreditBeratung)
        }
        if (
          veroffentlichung.zuordnungZuBereiche.indexOf(
            'Fachberatung-Wertpapier'
          ) > -1
        ) {
          addVeroeffentlichungToBucket(
            veroffentlichung,
            dataFachWertpapierBeratung
          )
        }
        if (
          veroffentlichung.zuordnungZuBereiche.indexOf('Technologieberatung') > -1
        ) {
          addVeroeffentlichungToBucket(
            veroffentlichung,
            dataTechnologieBeratung
          )
        }
        if (
          veroffentlichung.zuordnungZuBereiche.indexOf('Digitalisierung') > -1
        ) {
          addVeroeffentlichungToBucket(
            veroffentlichung,
            dataDigitalisierungBeratung
          )
        }
      }
    }

    for (
      let i = 0; i < result.data.allContentfulPressemeldung.edges.length;
      ++i
    ) {
      let pressemeldung = result.data.allContentfulPressemeldung.edges[i].node

      if (
        pressemeldung.anzeigenFuerBeratungsfelder !== undefined &&
        pressemeldung.anzeigenFuerBeratungsfelder !== null &&
        pressemeldung.pressemeldungNurImArchivAnzeigen === false
      ) {
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf('Managementberatung') > -1
        ) {
          dataManagementBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf('Fachberatung-Kredit') > -1
        ) {
          dataFachKreditBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf('Fachberatung-Wertpapier') > -1
        ) {
          dataFachWertpapierBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf('Technologieberatung') > -1
        ) {
          dataTechnologieBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf('Digitalisierung') > -1
        ) {
          dataDigitalisierungBeratung.pressemeldungen.push(pressemeldung)
        }
      }
    }

    const templatePressemeldungSite = path.resolve(`./src/templates/content-max/index.jsx`)

    for (
      let i = 0; i < result.data.allContentfulPressemeldung.edges.length;
      ++i
    ) {
      let pressemeldung = result.data.allContentfulPressemeldung.edges[i].node

      let pathToBigMiddleImage = pressemeldung.groesBildMitte !== undefined && pressemeldung.groesBildMitte !== null ? '/' + pressemeldung.groesBildMitte.id + '/' : '/unkown/'
      let pathToParagraphOneImage = pressemeldung.bildZuParagraph1 !== undefined && pressemeldung.bildZuParagraph1 !== null ? '/' + pressemeldung.bildZuParagraph1.id + '/' : '/unkown/'
      let pathToParagraphTwoImage = pressemeldung.bildZuParagraph2 !== undefined && pressemeldung.bildZuParagraph2 !== null ? '/' + pressemeldung.bildZuParagraph2.id + '/' : '/unkown/'
      let pathToParagraphThreeImage = pressemeldung.bildZuParagraph3 !== undefined && pressemeldung.bildZuParagraph3 !== null ? '/' + pressemeldung.bildZuParagraph3.id + '/' : '/unkown/'

      if (pressemeldung.verffentlichungsdatum != null) {
        pressemeldung.verffentlichungsdatum = moment(
          pressemeldung.verffentlichungsdatum,
          'YYYY-MM-DD'
        ).format('L')
      }

      createPage({
        path: `/pressemeldung/${pressemeldung.urlDerSeite}`,
        component: slash(templatePressemeldungSite),
        context: {
          id: pressemeldung.id,
          bigMiddleImageId: pathToBigMiddleImage,
          paragraphOneImageId: pathToParagraphOneImage,
          paragraphTwoImageId: pathToParagraphTwoImage,
          paragraphThreeImageId: pathToParagraphThreeImage,
          content: pressemeldung,
        },
      })

      console.log(`created page /pressemeldung/${pressemeldung.urlDerSeite}.`)
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

    callback(null)
  })
}

function addVeroeffentlichungToBucket(_veroeffentlichung, _bucket) {
  let typeOfVeroeffentlichung = 'unknown'

  if (
    _veroeffentlichung.urlDerVerffentlichung !== undefined &&
    _veroeffentlichung.urlDerVerffentlichung !== null
  ) {
    _bucket.veroeffentlichungen.links.push(_veroeffentlichung)
    typeOfVeroeffentlichung = 'link'
  }

  if (
    _veroeffentlichung.pdfDatei !== undefined &&
    _veroeffentlichung.pdfDatei !== null
  ) {
    _bucket.veroeffentlichungen.downloads.push(_veroeffentlichung)
    typeOfVeroeffentlichung = 'file'
  }

  _veroeffentlichung.dataType = typeOfVeroeffentlichung
  _bucket.veroeffentlichungen.all.push(_veroeffentlichung)
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