const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
var moment = require('moment')

exports.create = function(graphql, createPage, createRedirect, callback) {
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

    const template = path.resolve(
      `./src/templates/news-medien-uebersicht/index.jsx`
    )

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
      let i = 0;
      i < result.data.allContentfulVeroffentlichung.edges.length;
      ++i
    ) {
      let veroffentlichung =
        result.data.allContentfulVeroffentlichung.edges[i].node

      if (
        veroffentlichung.zuordnungZuBereiche !== undefined &&
        veroffentlichung.zuordnungZuBereiche !== null
      ) {
        if (
          veroffentlichung.zuordnungZuBereiche.indexOf('Managementberatung') >
          -1
        ) {
          addVeroeffentlichungToBucket(veroffentlichung, dataManagementBeratung)
        }
        if (
          veroffentlichung.zuordnungZuBereiche.indexOf('Fachberatung-Kredit') >
          -1
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
          veroffentlichung.zuordnungZuBereiche.indexOf('Technologieberatung') >
          -1
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
      let i = 0;
      i < result.data.allContentfulPressemeldung.edges.length;
      ++i
    ) {
      let pressemeldung = result.data.allContentfulPressemeldung.edges[i].node

      if (
        pressemeldung.anzeigenFuerBeratungsfelder !== undefined &&
        pressemeldung.anzeigenFuerBeratungsfelder !== null &&
        pressemeldung.pressemeldungNurImArchivAnzeigen === false
      ) {
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf(
            'Managementberatung'
          ) > -1
        ) {
          dataManagementBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf(
            'Fachberatung-Kredit'
          ) > -1
        ) {
          dataFachKreditBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf(
            'Fachberatung-Wertpapier'
          ) > -1
        ) {
          dataFachWertpapierBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf(
            'Technologieberatung'
          ) > -1
        ) {
          dataTechnologieBeratung.pressemeldungen.push(pressemeldung)
        }
        if (
          pressemeldung.anzeigenFuerBeratungsfelder.indexOf('Digitalisierung') >
          -1
        ) {
          dataDigitalisierungBeratung.pressemeldungen.push(pressemeldung)
        }
      }
    }

    const templatePressemeldungSite = path.resolve(
      `./src/templates/content-max/index.jsx`
    )

    for (
      let i = 0;
      i < result.data.allContentfulPressemeldung.edges.length;
      ++i
    ) {
      let pressemeldung = result.data.allContentfulPressemeldung.edges[i].node

      let pathToBigMiddleImage =
        pressemeldung.groesBildMitte !== undefined &&
        pressemeldung.groesBildMitte !== null
          ? '/' + pressemeldung.groesBildMitte.id + '/'
          : '/unkown/'
      let pathToParagraphOneImage =
        pressemeldung.bildZuParagraph1 !== undefined &&
        pressemeldung.bildZuParagraph1 !== null
          ? '/' + pressemeldung.bildZuParagraph1.id + '/'
          : '/unkown/'
      let pathToParagraphTwoImage =
        pressemeldung.bildZuParagraph2 !== undefined &&
        pressemeldung.bildZuParagraph2 !== null
          ? '/' + pressemeldung.bildZuParagraph2.id + '/'
          : '/unkown/'
      let pathToParagraphThreeImage =
        pressemeldung.bildZuParagraph3 !== undefined &&
        pressemeldung.bildZuParagraph3 !== null
          ? '/' + pressemeldung.bildZuParagraph3.id + '/'
          : '/unkown/'

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
        siteHeader:
          'Hier finden Sie gesammelte Neuigkeiten aus unserem Medienforum: von Fachartikeln über Pressemitteilungen bis zu Studien und Whitepapers.',
        professionalPublications:
          'Unsere Managementberater schreiben regelmäßig für Fachmedien über Trendthemen und Erfahrungen aus der Projektarbeit. Lesen Sie nach, was unsere Experten publizieren.',
        buttonTextProfessionalPublications:
          'Alle Fachpublikationen Managementberatung',
        pressReleases:
          'Was wir mit unserer Managementberatung bewirken, teilen wir natürlich gerne. Hier finden Sie eine Übersicht über Pressemeldungen aus unserem Haus.',
        medien:
          'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Managementberatung ',
        buttonTextStudien: 'Alle Studien Managementberatung',
        buttonTextThesen: 'Alle Thesenpapiere Managementberatung',
        buttonTextWhitePaper: 'Alle Whitepapers Managementberatung',
        buttonTextLösung: 'Alle Lösungsskizzen Managementberatung',
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
        siteHeader:
          'Hier finden Sie alle Neuigkeiten aus unserem Cofinpro-Medienforum: von Fachpublikationen über Pressemeldungen bis zu Studien, Whitepapers und Lösungsskizzen. ',
        professionalPublications:
          'Unsere Fachberater schreiben regelmäßig für Fachmedien über Kreditthemen. Lesen Sie nach, welchen Trends sich unsere Experten widmen.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Fachberatung Kredit ',
        pressReleases:
          'Welche Wirkung unsere Fachberatung hat, machen wir gerne öffentlich. Hier geht es zur Übersicht über unsere Pressemeldungen zum Schwerpunkt Kredit.',
        medien:
          'Was wir in der Fachberatung mit Schwerpunkt Kredit erarbeiten und entwickeln, halten wir in Fachformaten für Sie fest. Hier können Sie sie downloaden.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Fachberatung Kredit',
        buttonTextStudien: 'Alle Studien Kredit ',
        buttonTextThesen: 'Alle Thesenpapiere Kredit ',
        buttonTextWhitePaper: 'Alle Whitepapers Kredit ',
        buttonTextLösung: 'Alle Lösungsskizzen Kredit ',
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
        siteHeader:
          'Hier finden Sie alles Wissenswerte aus unserem Medienforum: von Neuigkeiten wie Fachartikel über Pressemeldungen bis zu Whitepapers und themenbezogenen Studien.',
        professionalPublications:
          'Lesen Sie nach, über welche Trendthemen aus dem Wertpapierbereich unsere Experten für Fachmedien schreiben.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Fachberatung Wertpapier',
        pressReleases:
          'Was wir mit unserer Fachberatung erreichen, teilen wir gerne öffentlich. Hier finden Sie eine Übersicht über unsere Pressemeldungen zum Schwerpunkt Wertpapier.',
        medien:
          'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
        buttonTextPressRelease:
          'Alle Pressemitteilungen Fachberatung Wertpapier',
        buttonTextStudien: 'Alle Studien Wertpapier',
        buttonTextThesen: 'Alle Thesenpapiere Wertpapier',
        buttonTextWhitePaper: 'Alle Whitepapers Wertpapier ',
        buttonTextLösung: 'Alle Lösungsskizzen Wertpapier',
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
        siteHeader:
          'Hier finden Sie jede Menge Wissenswertes aus unserem Cofinpro-Medienforum: von Neuigkeiten wie Fachartikel über Pressemeldungen bis zu Whitepapers und themenbezogenen Studien.',
        professionalPublications:
          'Unsere Technologieberater schreiben regelmäßig für Fachmedien über ihre Projekte und Herausforderungen. Lesen Sie nach, was unsere Experten bewegt.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Technologieberatung',
        pressReleases:
          'Was wir mit unserer Expertise erreichen, teilen wir gerne mit der Presse. Hier finden Sie unsere Meldungen rund um Technologieberatung.',
        medien:
          'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Technologieberatung',
        buttonTextStudien: 'Alle Studien Technologieberatung',
        buttonTextThesen: 'Alle Thesenpapiere Technologieberatung ',
        buttonTextWhitePaper: 'Alle Whitepapers Technologieberatung ',
        buttonTextLösung: 'Alle Lösungsskizzen Technologieberatung ',
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
        siteHeader:
          'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
        professionalPublications:
          'Unsere Experten verfassen regelmäßig Fachbeiträge rund um die jüngsten Digitalisierungsthemen. Welchen Trends sie sich in ihren Artikeln widmen? Lesen Sie einfach nach.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Digitalisierung',
        pressReleases:
          'Was wir mit unserer Expertise bewirken, teilen wir natürlich gerne. Hier finden Sie unsere Pressemeldungen rund um den Schwerpunkt Digitalisierung.',
        medien:
          'Welche Erkenntnisse und Erfahrungen unsere Digitalisierungsexperten im Projektumfeld erarbeiten, halten wir regelmäßig in Fachformaten zum Download fest.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Digitalisierung',
        buttonTextStudien: 'Alle Studien Digitalisierung',
        buttonTextThesen: 'Alle Thesenpapiere Digitalisierung ',
        buttonTextWhitePaper: 'Alle Whitepapers Digitalisierung',
        buttonTextLösung: 'Alle Lösungsskizzen Digitalisierung ',
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
