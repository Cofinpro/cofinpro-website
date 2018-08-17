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
              nurNochImArchivAnzeigen
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
      pressemeldungen: {
        current: [],
        archiv: [],
      },
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
        archiv: [],
      },
      studien: {
        current: [],
        archiv: [],
      },
      thesenpapiere: {
        current: [],
        archiv: [],
      },
      whitepapers: {
        current: [],
        archiv: [],
      },
      loesungsskizzen: {
        current: [],
        archiv: [],
      },
    }

    let dataFachKreditBeratung = {
      pressemeldungen: {
        current: [],
        archiv: [],
      },
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
        archiv: [],
      },
      studien: {
        current: [],
        archiv: [],
      },
      thesenpapiere: {
        current: [],
        archiv: [],
      },
      whitepapers: {
        current: [],
        archiv: [],
      },
      loesungsskizzen: {
        current: [],
        archiv: [],
      },
    }

    let dataFachWertpapierBeratung = {
      pressemeldungen: {
        current: [],
        archiv: [],
      },
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
        archiv: [],
      },
      studien: {
        current: [],
        archiv: [],
      },
      thesenpapiere: {
        current: [],
        archiv: [],
      },
      whitepapers: {
        current: [],
        archiv: [],
      },
      loesungsskizzen: {
        current: [],
        archiv: [],
      },
    }

    let dataTechnologieBeratung = {
      pressemeldungen: {
        current: [],
        archiv: [],
      },
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
        archiv: [],
      },
      studien: {
        current: [],
        archiv: [],
      },
      thesenpapiere: {
        current: [],
        archiv: [],
      },
      whitepapers: {
        current: [],
        archiv: [],
      },
      loesungsskizzen: {
        current: [],
        archiv: [],
      },
    }

    let dataDigitalisierungBeratung = {
      pressemeldungen: {
        current: [],
        archiv: [],
      },
      veroeffentlichungen: {
        all: [],
        links: [],
        downloads: [],
        archiv: [],
      },
      studien: {
        current: [],
        archiv: [],
      },
      thesenpapiere: {
        current: [],
        archiv: [],
      },
      whitepapers: {
        current: [],
        archiv: [],
      },
      loesungsskizzen: {
        current: [],
        archiv: [],
      },
    }

    for (let i = 0; i < result.data.allContentfulDownload.edges.length; ++i) {
      let download = result.data.allContentfulDownload.edges[i].node

      if (
        download.zuordnungZuBereiche !== undefined &&
        download.zuordnungZuBereiche !== null
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

    let veroeffentlichungen = result.data.allContentfulVeroffentlichung.edges

    extractAllVeroeffentlichungenToBucket(
      veroeffentlichungen,
      dataManagementBeratung,
      'Managementberatung'
    )
    extractAllVeroeffentlichungenToBucket(
      veroeffentlichungen,
      dataFachKreditBeratung,
      'Fachberatung-Kredit'
    )
    extractAllVeroeffentlichungenToBucket(
      veroeffentlichungen,
      dataFachWertpapierBeratung,
      'Fachberatung-Wertpapier'
    )
    extractAllVeroeffentlichungenToBucket(
      veroeffentlichungen,
      dataTechnologieBeratung,
      'Technologieberatung'
    )
    extractAllVeroeffentlichungenToBucket(
      veroeffentlichungen,
      dataDigitalisierungBeratung,
      'Digitalisierung'
    )

    let pressemeldungen = result.data.allContentfulPressemeldung.edges

    extractAllPressemeldungenToBucket(
      pressemeldungen,
      dataManagementBeratung,
      'Managementberatung'
    )
    extractAllPressemeldungenToBucket(
      pressemeldungen,
      dataFachKreditBeratung,
      'Fachberatung-Kredit'
    )
    extractAllPressemeldungenToBucket(
      pressemeldungen,
      dataFachWertpapierBeratung,
      'Fachberatung-Wertpapier'
    )
    extractAllPressemeldungenToBucket(
      pressemeldungen,
      dataTechnologieBeratung,
      'Technologieberatung'
    )
    extractAllPressemeldungenToBucket(
      pressemeldungen,
      dataDigitalisierungBeratung,
      'Digitalisierung'
    )

    const templatePressemeldungSite = path.resolve(
      `./src/templates/content-max/index.jsx`
    )

    for (
      let i = 0; i < result.data.allContentfulPressemeldung.edges.length;
      ++i
    ) {
      let pressemeldung = result.data.allContentfulPressemeldung.edges[i].node

      let pathToBigMiddleImage =
        pressemeldung.groesBildMitte !== undefined &&
        pressemeldung.groesBildMitte !== null ?
        '/' + pressemeldung.groesBildMitte.id + '/' :
        '/unkown/'
      let pathToParagraphOneImage =
        pressemeldung.bildZuParagraph1 !== undefined &&
        pressemeldung.bildZuParagraph1 !== null ?
        '/' + pressemeldung.bildZuParagraph1.id + '/' :
        '/unkown/'
      let pathToParagraphTwoImage =
        pressemeldung.bildZuParagraph2 !== undefined &&
        pressemeldung.bildZuParagraph2 !== null ?
        '/' + pressemeldung.bildZuParagraph2.id + '/' :
        '/unkown/'
      let pathToParagraphThreeImage =
        pressemeldung.bildZuParagraph3 !== undefined &&
        pressemeldung.bildZuParagraph3 !== null ?
        '/' + pressemeldung.bildZuParagraph3.id + '/' :
        '/unkown/'

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
        siteHeader: 'Hier finden Sie gesammelte Neuigkeiten aus unserem Medienforum: von Fachartikeln über Pressemitteilungen bis zu Studien und Whitepapers.',
        professionalPublications: 'Unsere Managementberater schreiben regelmäßig für Fachmedien über Trendthemen und Erfahrungen aus der Projektarbeit. Lesen Sie nach, was unsere Experten publizieren.',
        buttonTextProfessionalPublications: 'Alle Fachpublikationen Managementberatung',
        pressReleases: 'Was wir mit unserer Managementberatung bewirken, teilen wir natürlich gerne. Hier finden Sie eine Übersicht über Pressemeldungen aus unserem Haus.',
        medien: 'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Managementberatung ',
        buttonTextStudien: 'Alle Studien Managementberatung',
        buttonTextThesen: 'Alle Thesenpapiere Managementberatung',
        buttonTextWhitePaper: 'Alle Whitepapers Managementberatung',
        buttonTextLösung: 'Alle Lösungsskizzen Managementberatung',
        content: {
          buttonVeroeffentlichungenLink: '/news-medien/archiv/veroeffentlichungen/managementberatung',
          buttonPressemeldungenLink: '/news-medien/archiv/pressemeldungen/managementberatung',
          buttonStudienLink: '/news-medien/archiv/studien/managementberatung',
          buttonThesenpapiereLink: '/news-medien/archiv/thesenpapiere/managementberatung',
          buttonWhitepaperLink: '/news-medien/archiv/whitepapers/managementberatung',
          buttonLoesungLink: '/news-medien/archiv/loesungsskizzen/managementberatung',
        },
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
        siteHeader: 'Hier finden Sie alle Neuigkeiten aus unserem Cofinpro-Medienforum: von Fachpublikationen über Pressemeldungen bis zu Studien, Whitepapers und Lösungsskizzen. ',
        professionalPublications: 'Unsere Fachberater schreiben regelmäßig für Fachmedien über Kreditthemen. Lesen Sie nach, welchen Trends sich unsere Experten widmen.',
        buttonTextProfessionalPublications: 'Alle Publikationen Fachberatung Kredit ',
        pressReleases: 'Welche Wirkung unsere Fachberatung hat, machen wir gerne öffentlich. Hier geht es zur Übersicht über unsere Pressemeldungen zum Schwerpunkt Kredit.',
        medien: 'Was wir in der Fachberatung mit Schwerpunkt Kredit erarbeiten und entwickeln, halten wir in Fachformaten für Sie fest. Hier können Sie sie downloaden.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Fachberatung Kredit',
        buttonTextStudien: 'Alle Studien Kredit ',
        buttonTextThesen: 'Alle Thesenpapiere Kredit ',
        buttonTextWhitePaper: 'Alle Whitepapers Kredit ',
        buttonTextLösung: 'Alle Lösungsskizzen Kredit ',
        content: {
          buttonVeroeffentlichungenLink: '/news-medien/archiv/veroeffentlichungen/fachberatung-kredit',
          buttonPressemeldungenLink: '/news-medien/archiv/pressemeldungen/fachberatung-kredit',
          buttonStudienLink: '/news-medien/archiv/studien/fachberatung-kredit',
          buttonThesenpapiereLink: '/news-medien/archiv/thesenpapiere/fachberatung-kredit',
          buttonWhitepaperLink: '/news-medien/archiv/whitepapers/fachberatung-kredit',
          buttonLoesungLink: '/news-medien/archiv/loesungsskizzen/fachberatung-kredit',
        },
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
        siteHeader: 'Hier finden Sie alles Wissenswerte aus unserem Medienforum: von Neuigkeiten wie Fachartikel über Pressemeldungen bis zu Whitepapers und themenbezogenen Studien.',
        professionalPublications: 'Lesen Sie nach, über welche Trendthemen aus dem Wertpapierbereich unsere Experten für Fachmedien schreiben.',
        buttonTextProfessionalPublications: 'Alle Publikationen Fachberatung Wertpapier',
        pressReleases: 'Was wir mit unserer Fachberatung erreichen, teilen wir gerne öffentlich. Hier finden Sie eine Übersicht über unsere Pressemeldungen zum Schwerpunkt Wertpapier.',
        medien: 'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Fachberatung Wertpapier',
        buttonTextStudien: 'Alle Studien Wertpapier',
        buttonTextThesen: 'Alle Thesenpapiere Wertpapier',
        buttonTextWhitePaper: 'Alle Whitepapers Wertpapier ',
        buttonTextLösung: 'Alle Lösungsskizzen Wertpapier',
        content: {
          buttonVeroeffentlichungenLink: '/news-medien/archiv/veroeffentlichungen/fachberatung-wertpapier',
          buttonPressemeldungenLink: '/news-medien/archiv/pressemeldungen/fachberatung-wertpapier',
          buttonStudienLink: '/news-medien/archiv/studien/fachberatung-wertpapier',
          buttonThesenpapiereLink: '/news-medien/archiv/thesenpapiere/fachberatung-wertpapier',
          buttonWhitepaperLink: '/news-medien/archiv/whitepapers/fachberatung-wertpapier',
          buttonLoesungLink: '/news-medien/archiv/loesungsskizzen/fachberatung-wertpapier',
        },
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
        siteHeader: 'Hier finden Sie jede Menge Wissenswertes aus unserem Cofinpro-Medienforum: von Neuigkeiten wie Fachartikel über Pressemeldungen bis zu Whitepapers und themenbezogenen Studien.',
        professionalPublications: 'Unsere Technologieberater schreiben regelmäßig für Fachmedien über ihre Projekte und Herausforderungen. Lesen Sie nach, was unsere Experten bewegt.',
        buttonTextProfessionalPublications: 'Alle Publikationen Technologieberatung',
        pressReleases: 'Was wir mit unserer Expertise erreichen, teilen wir gerne mit der Presse. Hier finden Sie unsere Meldungen rund um Technologieberatung.',
        medien: 'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Technologieberatung',
        buttonTextStudien: 'Alle Studien Technologieberatung',
        buttonTextThesen: 'Alle Thesenpapiere Technologieberatung ',
        buttonTextWhitePaper: 'Alle Whitepapers Technologieberatung ',
        buttonTextLösung: 'Alle Lösungsskizzen Technologieberatung ',
        content: {
          buttonVeroeffentlichungenLink: '/news-medien/archiv/veroeffentlichungen/technologieberatung',
          buttonPressemeldungenLink: '/news-medien/archiv/pressemeldungen/technologieberatung',
          buttonStudienLink: '/news-medien/archiv/studien/technologieberatung',
          buttonThesenpapiereLink: '/news-medien/archiv/thesenpapiere/technologieberatung',
          buttonWhitepaperLink: '/news-medien/archiv/whitepapers/technologieberatung',
          buttonLoesungLink: '/news-medien/archiv/loesungsskizzen/technologieberatung',
        },
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
        siteHeader: 'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
        professionalPublications: 'Unsere Experten verfassen regelmäßig Fachbeiträge rund um die jüngsten Digitalisierungsthemen. Welchen Trends sie sich in ihren Artikeln widmen? Lesen Sie einfach nach.',
        buttonTextProfessionalPublications: 'Alle Publikationen Digitalisierung',
        pressReleases: 'Was wir mit unserer Expertise bewirken, teilen wir natürlich gerne. Hier finden Sie unsere Pressemeldungen rund um den Schwerpunkt Digitalisierung.',
        medien: 'Welche Erkenntnisse und Erfahrungen unsere Digitalisierungsexperten im Projektumfeld erarbeiten, halten wir regelmäßig in Fachformaten zum Download fest.',
        buttonTextPressRelease: 'Alle Pressemitteilungen Digitalisierung',
        buttonTextStudien: 'Alle Studien Digitalisierung',
        buttonTextThesen: 'Alle Thesenpapiere Digitalisierung ',
        buttonTextWhitePaper: 'Alle Whitepapers Digitalisierung',
        buttonTextLösung: 'Alle Lösungsskizzen Digitalisierung ',
        content: {
          buttonVeroeffentlichungenLink: '/news-medien/archiv/veroeffentlichungen/digitalisierung',
          buttonPressemeldungenLink: '/news-medien/archiv/pressemeldungen/digitalisierung',
          buttonStudienLink: '/news-medien/archiv/studien/digitalisierung',
          buttonThesenpapiereLink: '/news-medien/archiv/thesenpapiere/digitalisierung',
          buttonWhitepaperLink: '/news-medien/archiv/whitepapers/digitalisierung',
          buttonLoesungLink: '/news-medien/archiv/loesungsskizzen/digitalisierung',
        },
      },
    })

    console.log(`created page /news-medien/digitalisierung.`)

    // Studien Archiv

    const templateArchiveStudien = path.resolve(
      `./src/templates/archiv/studien/index.jsx`
    )

    createDownloadsArchivSites(
      dataManagementBeratung.studien,
      '/news-medien/archiv/studien/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.studien,
      '/news-medien/archiv/studien/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.studien,
      '/news-medien/archiv/studien/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.studien,
      '/news-medien/archiv/studien/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.studien,
      '/news-medien/archiv/studien/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse und Erfahrungen unsere Digitalisierungsexperten im Projektumfeld erarbeiten, halten wir regelmäßig in Fachformaten zum Download fest.',
      templateArchiveStudien,
      createPage
    )

    // Thesenpapiere Archiv

    const templateArchiveThesenpapiere = path.resolve(
      `./src/templates/archiv/thesenpapiere/index.jsx`
    )

    createDownloadsArchivSites(
      dataManagementBeratung.thesenpapiere,
      '/news-medien/archiv/thesenpapiere/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.thesenpapiere,
      '/news-medien/archiv/thesenpapiere/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.thesenpapiere,
      '/news-medien/archiv/thesenpapiere/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.thesenpapiere,
      '/news-medien/archiv/thesenpapiere/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.thesenpapiere,
      '/news-medien/archiv/thesenpapiere/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse und Erfahrungen unsere Digitalisierungsexperten im Projektumfeld erarbeiten, halten wir regelmäßig in Fachformaten zum Download fest.',
      templateArchiveThesenpapiere,
      createPage
    )

    // Whitepapers Archiv

    const templateArchiveWhitepapers = path.resolve(
      `./src/templates/archiv/whitepapers/index.jsx`
    )

    createDownloadsArchivSites(
      dataManagementBeratung.whitepapers,
      '/news-medien/archiv/whitepapers/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.whitepapers,
      '/news-medien/archiv/whitepapers/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.whitepapers,
      '/news-medien/archiv/whitepapers/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.whitepapers,
      '/news-medien/archiv/whitepapers/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.whitepapers,
      '/news-medien/archiv/whitepapers/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse und Erfahrungen unsere Digitalisierungsexperten im Projektumfeld erarbeiten, halten wir regelmäßig in Fachformaten zum Download fest.',
      templateArchiveWhitepapers,
      createPage
    )

    // Lösungsskizzen Archiv

    const templateArchiveLoesungsskizzen = path.resolve(
      `./src/templates/archiv/loesungsskizzen/index.jsx`
    )

    createDownloadsArchivSites(
      dataManagementBeratung.loesungsskizzen,
      '/news-medien/archiv/loesungsskizzen/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.loesungsskizzen,
      '/news-medien/archiv/loesungsskizzen/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.loesungsskizzen,
      '/news-medien/archiv/loesungsskizzen/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.loesungsskizzen,
      '/news-medien/archiv/loesungsskizzen/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.loesungsskizzen,
      '/news-medien/archiv/loesungsskizzen/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse und Erfahrungen unsere Digitalisierungsexperten im Projektumfeld erarbeiten, halten wir regelmäßig in Fachformaten zum Download fest.',
      templateArchiveLoesungsskizzen,
      createPage
    )

    // Veröffentlichungen Archiv

    createVeroeffentlichungenArchivSites(
      dataManagementBeratung,
      '/news-medien/archiv/veroeffentlichungen/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Managementberater schreiben regelmäßig für Fachmedien über Trendthemen und Erfahrungen aus der Projektarbeit. Lesen Sie nach, was unsere Experten publizieren.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataFachKreditBeratung,
      '/news-medien/archiv/veroeffentlichungen/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Fachberater schreiben regelmäßig für Fachmedien über Kreditthemen. Lesen Sie nach, welchen Trends sich unsere Experten widmen.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataFachWertpapierBeratung,
      '/news-medien/archiv/veroeffentlichungen/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Lesen Sie nach, über welche Trendthemen aus dem Wertpapierbereich unsere Experten für Fachmedien schreiben.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataTechnologieBeratung,
      '/news-medien/archiv/veroeffentlichungen/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Technologieberater schreiben regelmäßig für Fachmedien über ihre Projekte und Herausforderungen. Lesen Sie nach, was unsere Experten bewegt.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataDigitalisierungBeratung,
      '/news-medien/archiv/veroeffentlichungen/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Experten verfassen regelmäßig Fachbeiträge rund um die jüngsten Digitalisierungsthemen. Welchen Trends sie sich in ihren Artikeln widmen? Lesen Sie einfach nach.',
      createPage
    )

    // Pressemeldungen Archiv

    createPressemeldungenArchivSites(
      dataManagementBeratung,
      '/news-medien/archiv/pressemeldungen/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Managementberatung bewirken, teilen wir natürlich gerne. Hier finden Sie eine Übersicht über Pressemeldungen aus unserem Haus.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataFachKreditBeratung,
      '/news-medien/archiv/pressemeldungen/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Wirkung unsere Fachberatung hat, machen wir gerne öffentlich. Hier geht es zur Übersicht über unsere Pressemeldungen zum Schwerpunkt Kredit.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataFachWertpapierBeratung,
      '/news-medien/archiv/pressemeldungen/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Fachberatung erreichen, teilen wir gerne öffentlich. Hier finden Sie eine Übersicht über unsere Pressemeldungen zum Schwerpunkt Wertpapier.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataTechnologieBeratung,
      '/news-medien/archiv/pressemeldungen/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Expertise erreichen, teilen wir gerne mit der Presse. Hier finden Sie unsere Meldungen rund um Technologieberatung.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataDigitalisierungBeratung,
      '/news-medien/archiv/pressemeldungen/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Expertise bewirken, teilen wir natürlich gerne. Hier finden Sie unsere Pressemeldungen rund um den Schwerpunkt Digitalisierung.',
      createPage
    )

    callback(null)
  })
}

function extractAllPressemeldungenToBucket(
  _pressemeldungen,
  _bucket,
  _identifier
) {
  for (let i = 0; i < _pressemeldungen.length; ++i) {
    let pressemeldung = _pressemeldungen[i].node

    if (
      pressemeldung.anzeigenFuerBeratungsfelder !== undefined &&
      pressemeldung.anzeigenFuerBeratungsfelder !== null
    ) {
      if (pressemeldung.anzeigenFuerBeratungsfelder.indexOf(_identifier) > -1) {
        if (pressemeldung.pressemeldungNurImArchivAnzeigen === false) {
          _bucket.pressemeldungen.current.push(pressemeldung)
        }
        _bucket.pressemeldungen.archiv.push(pressemeldung)
      }
    }
  }
}

function extractAllVeroeffentlichungenToBucket(
  _veroeffentlichungen,
  _bucket,
  _identifier
) {
  for (let i = 0; i < _veroeffentlichungen.length; ++i) {
    let veroeffentlichung = _veroeffentlichungen[i].node

    if (
      veroeffentlichung.zuordnungZuBereiche !== undefined &&
      veroeffentlichung.zuordnungZuBereiche !== null
    ) {
      if (veroeffentlichung.zuordnungZuBereiche.indexOf(_identifier) > -1) {
        addVeroeffentlichungToBucket(veroeffentlichung, _bucket)
      }
    }
  }
}

function addVeroeffentlichungToBucket(_veroeffentlichung, _bucket) {
  let typeOfVeroeffentlichung = 'unknown'

  if (
    _veroeffentlichung.urlDerVerffentlichung !== undefined &&
    _veroeffentlichung.urlDerVerffentlichung !== null
  ) {
    typeOfVeroeffentlichung = 'link'
  }

  if (
    _veroeffentlichung.pdfDatei !== undefined &&
    _veroeffentlichung.pdfDatei !== null
  ) {
    typeOfVeroeffentlichung = 'file'
  }
  _veroeffentlichung.dataType = typeOfVeroeffentlichung

  if (_veroeffentlichung.nurNochImArchivAnzeigen === false) {
    if (typeOfVeroeffentlichung === 'link') {
      _bucket.veroeffentlichungen.links.push(_veroeffentlichung)
    }

    if (typeOfVeroeffentlichung === 'file') {
      _bucket.veroeffentlichungen.downloads.push(_veroeffentlichung)
    }
    _bucket.veroeffentlichungen.all.push(_veroeffentlichung)
  }
  _bucket.veroeffentlichungen.archiv.push(_veroeffentlichung)
}

function addDownloadToBucket(_download, _bucket) {
  if (_download.nurImArchivAnzeigen === false) {
    if (_download.artDesDownloads === 'Studie') {
      _bucket.studien.current.push(_download)
    } else if (_download.artDesDownloads === 'Lösungsskizze') {
      _bucket.loesungsskizzen.current.push(_download)
    } else if (_download.artDesDownloads === 'Whitepaper') {
      _bucket.whitepapers.current.push(_download)
    } else if (_download.artDesDownloads === 'Thesenpapier') {
      _bucket.thesenpapiere.current.push(_download)
    }
  }
  if (_download.artDesDownloads === 'Studie') {
    _bucket.studien.archiv.push(_download)
  } else if (_download.artDesDownloads === 'Lösungsskizze') {
    _bucket.loesungsskizzen.archiv.push(_download)
  } else if (_download.artDesDownloads === 'Whitepaper') {
    _bucket.whitepapers.archiv.push(_download)
  } else if (_download.artDesDownloads === 'Thesenpapier') {
    _bucket.thesenpapiere.archiv.push(_download)
  }
}

function createVeroeffentlichungenArchivSites(
  _data,
  _url,
  _siteDescription,
  _sectionDescription,
  createPage
) {
  const template = path.resolve(
    `./src/templates/archiv/veroeffentlichungen/index.jsx`
  )

  let inputData = createYearToVeroeffentlichungenMap(_data)

  createPage({
    path: _url,
    component: slash(template),
    context: {
      name: 'VeroeffentlichungenArchiv',
      input: inputData,
      siteDescription: _siteDescription,
      sectionDescription: _sectionDescription,
    },
  })

  console.log(`created page ${_url}.`)
}

function createPressemeldungenArchivSites(
  _data,
  _url,
  _siteDescription,
  _sectionDescription,
  createPage
) {
  const template = path.resolve(
    `./src/templates/archiv/pressemeldungen/index.jsx`
  )

  let inputData = createYearToPressemeldungenMap(_data)

  createPage({
    path: _url,
    component: slash(template),
    context: {
      name: 'PressemeldungenArchiv',
      input: inputData,
      siteDescription: _siteDescription,
      sectionDescription: _sectionDescription,
    },
  })

  console.log(`created page ${_url}.`)
}

function createDownloadsArchivSites(
  _data,
  _url,
  _siteDescription,
  _sectionDescription,
  _template,
  createPage
) {
  let inputData = createYearToDownloadsMap(_data)

  createPage({
    path: _url,
    component: slash(_template),
    context: {
      name: 'DownloadArchiv',
      input: inputData,
      siteDescription: _siteDescription,
      sectionDescription: _sectionDescription,
    },
  })

  console.log(`created page ${_url}.`)
}

function createYearToVeroeffentlichungenMap(_input) {
  var allYears = _input.veroeffentlichungen.archiv

  var yearToElementsMap = {}

  for (let i = 0; i < allYears.length; ++i) {
    let year = new Date(allYears[i].datumDerVerffentlichung).getFullYear()
    let yearAsString = String(year)

    if (yearAsString in yearToElementsMap) {
      yearToElementsMap[yearAsString].push(allYears[i])
    } else {
      yearToElementsMap[yearAsString] = [allYears[i]]
    }
  }

  var ordered = {}
  Object.keys(yearToElementsMap)
    .reverse()
    .forEach(function (key) {
      ordered['year-' + key] = yearToElementsMap[key]
    })
  return ordered
}

function createYearToPressemeldungenMap(_input) {
  var allYears = _input.pressemeldungen.archiv

  var yearToElementsMap = {}

  for (let i = 0; i < allYears.length; ++i) {
    let year = new Date(allYears[i].verffentlichungsdatum).getFullYear()
    let yearAsString = String(year)

    if (yearAsString in yearToElementsMap) {
      yearToElementsMap[yearAsString].push(allYears[i])
    } else {
      yearToElementsMap[yearAsString] = [allYears[i]]
    }
  }

  var ordered = {}
  Object.keys(yearToElementsMap)
    .reverse()
    .forEach(function (key) {
      ordered['year-' + key] = yearToElementsMap[key]
    })
  return ordered
}

function createYearToDownloadsMap(_input) {
  var allYears = _input.archiv

  var yearToElementsMap = {}

  for (let i = 0; i < allYears.length; ++i) {
    let year = new Date(allYears[i].datumDerVerffentlichung).getFullYear()
    let yearAsString = String(year)

    if (yearAsString in yearToElementsMap) {
      yearToElementsMap[yearAsString].push(allYears[i])
    } else {
      yearToElementsMap[yearAsString] = [allYears[i]]
    }
  }

  var ordered = {}
  Object.keys(yearToElementsMap)
    .reverse()
    .forEach(function (key) {
      ordered['year-' + key] = yearToElementsMap[key]
    })
  return ordered
}