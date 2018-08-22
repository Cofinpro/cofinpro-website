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
                relevanteBeratungsfelder
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

    let dataAll = createNewBucket()
    let dataManagementBeratung = createNewBucket()
    let dataFachKreditBeratung = createNewBucket()
    let dataFachWertpapierBeratung = createNewBucket()
    let dataTechnologieBeratung = createNewBucket()
    let dataDigitalisierungBeratung = createNewBucket()

    let veroeffentlichungenMap = [
      {
        name: 'Managementberatung',
        bucket: dataManagementBeratung,
      },
      {
        name: 'Fachberatung-Kredit',
        bucket: dataFachKreditBeratung,
      },
      {
        name: 'Fachberatung-Wertpapier',
        bucket: dataFachWertpapierBeratung,
      },
      {
        name: 'Technologieberatung',
        bucket: dataTechnologieBeratung,
      },
      {
        name: 'Digitalisierung',
        bucket: dataDigitalisierungBeratung,
      },
    ]

    let veroeffentlichungen = result.data.allContentfulVeroffentlichung.edges
    let pressemeldungen = result.data.allContentfulPressemeldung.edges
    let downloads = result.data.allContentfulDownload.edges

    for (let i = 0; i < veroeffentlichungenMap.length; ++i) {
      extractAllDownloadsToBucket(
        downloads,
        veroeffentlichungenMap[i].bucket,
        veroeffentlichungenMap[i].name
      )
      extractAllVeroeffentlichungenToBucket(
        veroeffentlichungen,
        veroeffentlichungenMap[i].bucket,
        veroeffentlichungenMap[i].name
      )
      extractAllPressemeldungenToBucket(
        pressemeldungen,
        veroeffentlichungenMap[i].bucket,
        veroeffentlichungenMap[i].name
      )
    }

    insertBucketItemsToOtherBucket(dataManagementBeratung, dataAll)
    insertBucketItemsToOtherBucket(dataFachKreditBeratung, dataAll)
    insertBucketItemsToOtherBucket(dataFachWertpapierBeratung, dataAll)
    insertBucketItemsToOtherBucket(dataTechnologieBeratung, dataAll)
    insertBucketItemsToOtherBucket(dataDigitalisierungBeratung, dataAll)

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

      createPage({
        path: `/pressemitteilung/${pressemeldung.urlDerSeite}`,
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

      console.log(
        `created page /pressemitteilung/${pressemeldung.urlDerSeite}.`
      )
    }

    createPage({
      path: `/news-medien/alle-beratungsfelder`,
      component: slash(template),
      context: {
        name: 'Alle Beratungsfelder',
        url: '/alle-beratungsfelder',
        input: dataAll,
        siteHeader:
          'Hier finden Sie gesammelte Neuigkeiten aus unserem Medienforum: von Fachartikeln über Pressemitteilungen bis zu Studien und Whitepapers.',
        professionalPublications:
          'Unsere Berater schreiben regelmäßig für Fachmedien über Trendthemen und Erfahrungen aus der Projektarbeit. Lesen Sie nach, was unsere Experten publizieren.',
        buttonTextProfessionalPublications: 'Alle Fachpublikationen',
        pressReleases:
          'Was wir mit unserer Beratung bewirken, teilen wir natürlich gerne. Hier finden Sie eine Übersicht über Pressemeldungen aus unserem Haus.',
        medien:
          'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
        buttonTextPressRelease: 'Alle Pressemitteilungen',
        buttonTextStudien: 'Alle Studien',
        buttonTextThesen: 'Alle Thesenpapiere',
        buttonTextWhitePaper: 'Alle Whitepapers',
        buttonTextLösung: 'Alle Lösungsskizzen',
        content: {
          buttonVeroeffentlichungenLink:
            '/news-medien/archiv/veroeffentlichungen/alle-beratungsfelder',
          buttonPressemeldungenLink:
            '/news-medien/archiv/pressemitteilungen/alle-beratungsfelder',
          buttonStudienLink: '/news-medien/archiv/studien/alle-beratungsfelder',
          buttonThesenpapiereLink:
            '/news-medien/archiv/thesenpapiere/alle-beratungsfelder',
          buttonWhitepaperLink:
            '/news-medien/archiv/whitepapers/alle-beratungsfelder',
          buttonLoesungLink:
            '/news-medien/archiv/loesungsskizzen/alle-beratungsfelder',
        },
      },
    })

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
        buttonTextPressRelease: 'Alle Pressemitteilungen Managementberatung',
        buttonTextStudien: 'Alle Studien Managementberatung',
        buttonTextThesen: 'Alle Thesenpapiere Managementberatung',
        buttonTextWhitePaper: 'Alle Whitepapers Managementberatung',
        buttonTextLösung: 'Alle Lösungsskizzen Managementberatung',
        content: {
          buttonVeroeffentlichungenLink:
            '/news-medien/archiv/veroeffentlichungen/managementberatung',
          buttonPressemeldungenLink:
            '/news-medien/archiv/pressemitteilungen/managementberatung',
          buttonStudienLink: '/news-medien/archiv/studien/managementberatung',
          buttonThesenpapiereLink:
            '/news-medien/archiv/thesenpapiere/managementberatung',
          buttonWhitepaperLink:
            '/news-medien/archiv/whitepapers/managementberatung',
          buttonLoesungLink:
            '/news-medien/archiv/loesungsskizzen/managementberatung',
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
        buttonTextStudien: 'Alle Studien Kredit',
        buttonTextThesen: 'Alle Thesenpapiere Kredit ',
        buttonTextWhitePaper: 'Alle Whitepapers Kredit ',
        buttonTextLösung: 'Alle Lösungsskizzen Kredit ',
        content: {
          buttonVeroeffentlichungenLink:
            '/news-medien/archiv/veroeffentlichungen/fachberatung-kredit',
          buttonPressemeldungenLink:
            '/news-medien/archiv/pressemitteilungen/fachberatung-kredit',
          buttonStudienLink: '/news-medien/archiv/studien/fachberatung-kredit',
          buttonThesenpapiereLink:
            '/news-medien/archiv/thesenpapiere/fachberatung-kredit',
          buttonWhitepaperLink:
            '/news-medien/archiv/whitepapers/fachberatung-kredit',
          buttonLoesungLink:
            '/news-medien/archiv/loesungsskizzen/fachberatung-kredit',
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
        content: {
          buttonVeroeffentlichungenLink:
            '/news-medien/archiv/veroeffentlichungen/fachberatung-wertpapier',
          buttonPressemeldungenLink:
            '/news-medien/archiv/pressemitteilungen/fachberatung-wertpapier',
          buttonStudienLink:
            '/news-medien/archiv/studien/fachberatung-wertpapier',
          buttonThesenpapiereLink:
            '/news-medien/archiv/thesenpapiere/fachberatung-wertpapier',
          buttonWhitepaperLink:
            '/news-medien/archiv/whitepapers/fachberatung-wertpapier',
          buttonLoesungLink:
            '/news-medien/archiv/loesungsskizzen/fachberatung-wertpapier',
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
        content: {
          buttonVeroeffentlichungenLink:
            '/news-medien/archiv/veroeffentlichungen/technologieberatung',
          buttonPressemeldungenLink:
            '/news-medien/archiv/pressemitteilungen/technologieberatung',
          buttonStudienLink: '/news-medien/archiv/studien/technologieberatung',
          buttonThesenpapiereLink:
            '/news-medien/archiv/thesenpapiere/technologieberatung',
          buttonWhitepaperLink:
            '/news-medien/archiv/whitepapers/technologieberatung',
          buttonLoesungLink:
            '/news-medien/archiv/loesungsskizzen/technologieberatung',
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
        content: {
          buttonVeroeffentlichungenLink:
            '/news-medien/archiv/veroeffentlichungen/digitalisierung',
          buttonPressemeldungenLink:
            '/news-medien/archiv/pressemitteilungen/digitalisierung',
          buttonStudienLink: '/news-medien/archiv/studien/digitalisierung',
          buttonThesenpapiereLink:
            '/news-medien/archiv/thesenpapiere/digitalisierung',
          buttonWhitepaperLink:
            '/news-medien/archiv/whitepapers/digitalisierung',
          buttonLoesungLink:
            '/news-medien/archiv/loesungsskizzen/digitalisierung',
        },
      },
    })

    console.log(`created page /news-medien/digitalisierung.`)

    // Studien Archiv

    const templateArchiveStudien = path.resolve(
      `./src/templates/archiv/studien/index.jsx`
    )

    createDownloadsArchivSites(
      dataAll.studien,
      'Alle Beratungsfelder',
      '/news-medien/archiv/studien/alle-beratungsfelder',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataManagementBeratung.studien,
      'Managementberatung',
      '/news-medien/archiv/studien/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.studien,
      'Fachberatung-Kredit',
      '/news-medien/archiv/studien/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.studien,
      'Fachberatung-Wertpapier',
      '/news-medien/archiv/studien/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.studien,
      'Technologieberatung',
      '/news-medien/archiv/studien/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveStudien,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.studien,
      'Digitalisierung',
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
      dataAll.thesenpapiere,
      'Alle Beratungsfelder',
      '/news-medien/archiv/thesenpapiere/alle-beratungsfelder',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataManagementBeratung.thesenpapiere,
      'Managementberatung',
      '/news-medien/archiv/thesenpapiere/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.thesenpapiere,
      'Fachberatung-Kredit',
      '/news-medien/archiv/thesenpapiere/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.thesenpapiere,
      'Fachberatung-Wertpapier',
      '/news-medien/archiv/thesenpapiere/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.thesenpapiere,
      'Technologieberatung',
      '/news-medien/archiv/thesenpapiere/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveThesenpapiere,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.thesenpapiere,
      'Digitalisierung',
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
      dataAll.whitepapers,
      'Alle Beratungsfelder',
      '/news-medien/archiv/whitepapers/alle-beratungsfelder',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataManagementBeratung.whitepapers,
      'Managementberatung',
      '/news-medien/archiv/whitepapers/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.whitepapers,
      'Fachberatung-Kredit',
      '/news-medien/archiv/whitepapers/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.whitepapers,
      'Fachberatung-Wertpapier',
      '/news-medien/archiv/whitepapers/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.whitepapers,
      'Technologieberatung',
      '/news-medien/archiv/whitepapers/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveWhitepapers,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.whitepapers,
      'Digitalisierung',
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
      dataAll.loesungsskizzen,
      'Alle Beratungsfelder',
      '/news-medien/archiv/loesungsskizzen/alle-beratungsfelder',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataManagementBeratung.loesungsskizzen,
      'Managementberatung',
      '/news-medien/archiv/loesungsskizzen/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Themen sind die Trends, die die Zukunft bewegen. Ergebnisse, Erkenntnisse und wichtige Erfahrungswerte halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataFachKreditBeratung.loesungsskizzen,
      'Fachberatung-Kredit',
      '/news-medien/archiv/loesungsskizzen/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataFachWertpapierBeratung.loesungsskizzen,
      'Fachberatung-Wertpapier',
      '/news-medien/archiv/loesungsskizzen/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Ergebnisse, Erkenntnisse und Erfahrungen aus der Fachberatung halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataTechnologieBeratung.loesungsskizzen,
      'Technologieberatung',
      '/news-medien/archiv/loesungsskizzen/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse, Ergebnisse und Erfahrungen bringen unsere Berater aus Technologieprojekten mit? In diesen Fachformaten zum Download halten wir es für Sie fest.',
      templateArchiveLoesungsskizzen,
      createPage
    )
    createDownloadsArchivSites(
      dataDigitalisierungBeratung.loesungsskizzen,
      'Digitalisierung',
      '/news-medien/archiv/loesungsskizzen/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Erkenntnisse und Erfahrungen unsere Digitalisierungsexperten im Projektumfeld erarbeiten, halten wir regelmäßig in Fachformaten zum Download fest.',
      templateArchiveLoesungsskizzen,
      createPage
    )

    // Veröffentlichungen Archiv

    createVeroeffentlichungenArchivSites(
      dataAll,
      'Alle Beratungsfelder',
      '/news-medien/archiv/veroeffentlichungen/alle-beratungsfelder',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Managementberater schreiben regelmäßig für Fachmedien über Trendthemen und Erfahrungen aus der Projektarbeit. Lesen Sie nach, was unsere Experten publizieren.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataManagementBeratung,
      'Managementberatung',
      '/news-medien/archiv/veroeffentlichungen/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Managementberater schreiben regelmäßig für Fachmedien über Trendthemen und Erfahrungen aus der Projektarbeit. Lesen Sie nach, was unsere Experten publizieren.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataFachKreditBeratung,
      'Fachberatung-Kredit',
      '/news-medien/archiv/veroeffentlichungen/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Fachberater schreiben regelmäßig für Fachmedien über Kreditthemen. Lesen Sie nach, welchen Trends sich unsere Experten widmen.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataFachWertpapierBeratung,
      'Fachberatung-Wertpapier',
      '/news-medien/archiv/veroeffentlichungen/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Lesen Sie nach, über welche Trendthemen aus dem Wertpapierbereich unsere Experten für Fachmedien schreiben.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataTechnologieBeratung,
      'Technologieberatung',
      '/news-medien/archiv/veroeffentlichungen/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Technologieberater schreiben regelmäßig für Fachmedien über ihre Projekte und Herausforderungen. Lesen Sie nach, was unsere Experten bewegt.',
      createPage
    )
    createVeroeffentlichungenArchivSites(
      dataDigitalisierungBeratung,
      'Digitalisierung',
      '/news-medien/archiv/veroeffentlichungen/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Unsere Experten verfassen regelmäßig Fachbeiträge rund um die jüngsten Digitalisierungsthemen. Welchen Trends sie sich in ihren Artikeln widmen? Lesen Sie einfach nach.',
      createPage
    )

    // Pressemeldungen Archiv

    createPressemeldungenArchivSites(
      dataAll,
      'Alle Beratungsfelder',
      '/news-medien/archiv/pressemitteilungen/alle-beratungsfelder',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Managementberatung bewirken, teilen wir natürlich gerne. Hier finden Sie eine Übersicht über Pressemeldungen aus unserem Haus.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataManagementBeratung,
      'Managementberatung',
      '/news-medien/archiv/pressemitteilungen/managementberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Managementberatung bewirken, teilen wir natürlich gerne. Hier finden Sie eine Übersicht über Pressemeldungen aus unserem Haus.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataFachKreditBeratung,
      'Fachberatung-Kredit',
      '/news-medien/archiv/pressemitteilungen/fachberatung-kredit',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Welche Wirkung unsere Fachberatung hat, machen wir gerne öffentlich. Hier geht es zur Übersicht über unsere Pressemeldungen zum Schwerpunkt Kredit.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataFachWertpapierBeratung,
      'Fachberatung-Wertpapier',
      '/news-medien/archiv/pressemitteilungen/fachberatung-wertpapier',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Fachberatung erreichen, teilen wir gerne öffentlich. Hier finden Sie eine Übersicht über unsere Pressemeldungen zum Schwerpunkt Wertpapier.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataTechnologieBeratung,
      'Technologieberatung',
      '/news-medien/archiv/pressemitteilungen/technologieberatung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Expertise erreichen, teilen wir gerne mit der Presse. Hier finden Sie unsere Meldungen rund um Technologieberatung.',
      createPage
    )
    createPressemeldungenArchivSites(
      dataDigitalisierungBeratung,
      'Digitalisierung',
      '/news-medien/archiv/pressemitteilungen/digitalisierung',
      'Hier teilen wir jede Menge Neuigkeiten aus unserem Medienforum mit Ihnen: von  Fachpublikationen über Pressemitteilungen bis zu themenbezogenen Studien, Whitepapers und Lösungsskizzen.',
      'Was wir mit unserer Expertise bewirken, teilen wir natürlich gerne. Hier finden Sie unsere Pressemeldungen rund um den Schwerpunkt Digitalisierung.',
      createPage
    )

    callback(null)
  })
}

function extractAllDownloadsToBucket(_downloads, _bucket, _identifier) {
  for (let i = 0; i < _downloads.length; ++i) {
    let download = _downloads[i].node

    if (
      download.zuordnungZuBereiche !== undefined &&
      download.zuordnungZuBereiche !== null
    ) {
      if (download.zuordnungZuBereiche.indexOf(_identifier) > -1) {
        addDownloadToBucket(download, _bucket)
      }
    }
  }
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
  _name,
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
      name: _name,
      input: inputData,
      siteDescription: _siteDescription,
      sectionDescription: _sectionDescription,
    },
  })

  console.log(`created page ${_url}.`)
}

function createPressemeldungenArchivSites(
  _data,
  _name,
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
      name: _name,
      input: inputData,
      siteDescription: _siteDescription,
      sectionDescription: _sectionDescription,
    },
  })

  console.log(`created page ${_url}.`)
}

function createDownloadsArchivSites(
  _data,
  _name,
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
      name: _name,
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
    .forEach(function(key) {
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
    .forEach(function(key) {
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
    .forEach(function(key) {
      ordered['year-' + key] = yearToElementsMap[key]
    })
  return ordered
}

function createNewBucket() {
  return {
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
}

function insertBucketItemsToOtherBucket(_from, _to) {
  for (let i = 0; i < _from.pressemeldungen.current.length; ++i) {
    _to.pressemeldungen.current.push(_from.pressemeldungen.current[i])
  }
  for (let i = 0; i < _from.pressemeldungen.archiv.length; ++i) {
    _to.pressemeldungen.archiv.push(_from.pressemeldungen.archiv[i])
  }

  for (let i = 0; i < _from.veroeffentlichungen.all.length; ++i) {
    _to.veroeffentlichungen.all.push(_from.veroeffentlichungen.all[i])
  }
  for (let i = 0; i < _from.veroeffentlichungen.links.length; ++i) {
    _to.veroeffentlichungen.links.push(_from.veroeffentlichungen.links[i])
  }
  for (let i = 0; i < _from.veroeffentlichungen.downloads.length; ++i) {
    _to.veroeffentlichungen.downloads.push(
      _from.veroeffentlichungen.downloads[i]
    )
  }
  for (let i = 0; i < _from.veroeffentlichungen.archiv.length; ++i) {
    _to.veroeffentlichungen.archiv.push(_from.veroeffentlichungen.archiv[i])
  }

  for (let i = 0; i < _from.studien.current.length; ++i) {
    _to.studien.current.push(_from.studien.current[i])
  }
  for (let i = 0; i < _from.studien.archiv.length; ++i) {
    _to.studien.archiv.push(_from.studien.archiv[i])
  }

  for (let i = 0; i < _from.thesenpapiere.current.length; ++i) {
    _to.thesenpapiere.current.push(_from.thesenpapiere.current[i])
  }
  for (let i = 0; i < _from.thesenpapiere.archiv.length; ++i) {
    _to.thesenpapiere.archiv.push(_from.thesenpapiere.archiv[i])
  }

  for (let i = 0; i < _from.whitepapers.current.length; ++i) {
    _to.whitepapers.current.push(_from.whitepapers.current[i])
  }
  for (let i = 0; i < _from.whitepapers.archiv.length; ++i) {
    _to.whitepapers.archiv.push(_from.whitepapers.archiv[i])
  }

  for (let i = 0; i < _from.loesungsskizzen.current.length; ++i) {
    _to.loesungsskizzen.current.push(_from.loesungsskizzen.current[i])
  }
  for (let i = 0; i < _from.loesungsskizzen.archiv.length; ++i) {
    _to.loesungsskizzen.archiv.push(_from.loesungsskizzen.archiv[i])
  }
}
