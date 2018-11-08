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
    let dataUnternehmenAllgemein = createNewBucket()

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
      {
        name: 'Unternehmen',
        bucket: dataUnternehmenAllgemein,
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
    insertBucketItemsToOtherBucket(dataUnternehmenAllgemein, dataAll)

    const templatePressemeldungSite = path.resolve(
      `./src/templates/content-max/index.jsx`
    )

    createPressemeldungPages(result, createPage, templatePressemeldungSite)

    var date_sort_desc = function(date1, date2) {
      // This is a comparison function that will result in dates being sorted in
      // DESCENDING order.
      date1 = new Date(date1)
      date2 = new Date(date2)
      if (date1 > date2) return -1
      if (date1 < date2) return 1
      return 0
    }
    ;['loesungsskizzen', 'studien', 'thesenpapiere', 'whitepapers'].forEach(
      topic => {
        console.log(topic)
        dataAll[topic].current = dataAll[topic].current.sort((x, y) => {
          return date_sort_desc(
            x.datumDerVerffentlichung,
            y.datumDerVerffentlichung
          )
        })
      }
    )

    dataAll.veroeffentlichungen.all = dataAll.veroeffentlichungen.all.sort(
      (x, y) => {
        return date_sort_desc(
          x.datumDerVerffentlichung,
          y.datumDerVerffentlichung
        )
      }
    )

    dataAll.pressemeldungen.current = dataAll.pressemeldungen.current.sort(
      (x, y) => {
        return date_sort_desc(x.verffentlichungsdatum, y.verffentlichungsdatum)
      }
    )

    createPage({
      path: `/news-medien/alle-beratungsfelder`,
      component: slash(template),
      context: {
        name: 'Alle Beratungsfelder',
        url: '/alle-beratungsfelder',
        input: dataAll,
        siteHeader:
          'Im Cofinpro-Medienforum teilen wir unser geballtes Wissen: von Presseinformationen über Fachpublikationen bis hin zu Studien.',
        professionalPublications:
          'Unsere Berater sind gefragte Autoren. Wenn Sie sich einen Eindruck verschaffen wollen, was wir in der Fachpresse zu sagen haben, lesen Sie einfach hier nach.',
        pressReleases:
          'Digitalisierung, Regulatorik, innovative Technologien: Was bedeutet das für die Banken? Mit diesen Themen setzen wir uns in unseren Presseinformationen auseinander.',
        medien:
          'Branchenspezifische Themen, strukturiert aufbereitet: Das finden Sie in unseren Studien, Thesenpapieren, Whitepapers und Lösungsskizzen.',
        buttonTextProfessionalPublications: 'Zum Fachpublikationen-Archiv',
        buttonTextPressRelease: 'Zum Pressemitteilungen-Archiv',
        buttonTextStudien: 'Zum Studien-Archiv',
        buttonTextThesen: 'Zum Thesenpapier-Archiv',
        buttonTextWhitePaper: 'Zum Whitepaper-Archiv',
        buttonTextLösung: 'Zum Lösungsskizzen-Archiv',
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
          'Im Medienforum finden Sie gesammelte Neuigkeiten aus der Managementberatung: von Fachartikeln über Pressemitteilungen bis hin zu Studien und Whitepapers.',
        professionalPublications:
          'Unsere Managementberater schreiben regelmäßig für Fachmedien über Trendthemen und branchenspezifische Herausforderungen. Lesen Sie nach, was unsere Experten publizieren.',
        pressReleases:
          'Was bewegt die Banken und Kapitalverwaltungsgesellschaften? Was wir wissen, teilen wir natürlich gerne in unseren Pressemeldungen.',
        medien:
          'Unsere Themen in der Managementberatung sind die Trends, die die Zukunft bewegen. Ergebnisse und Erkenntnisse halten wir regelmäßig in Fachformaten für Sie fest, die Sie hier herunterladen können.',
        buttonTextProfessionalPublications:
          'Archiv Fachpublikationen Managementberatung',
        buttonTextPressRelease: 'Archiv Pressemitteilungen Managementberatung',
        buttonTextStudien: 'Archiv Studien Managementberatung',
        buttonTextThesen: 'Archiv Thesenpapiere Managementberatung',
        buttonTextWhitePaper: 'Archiv Whitepapers Managementberatung',
        buttonTextLösung: 'Archiv Lösungsskizzen Managementberatung',
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
          'Hier finden Sie alle Neuigkeiten aus unserem Cofinpro-Medienforum rund um das Kreditgeschäft: von Fachpublikationen über Pressemeldungen bis hin zu Studien, Whitepapers und Lösungsskizzen.',
        professionalPublications:
          'Unsere Fachberater schreiben regelmäßig für Fachmedien über Kreditthemen. Lesen Sie nach, mit welchen Fragestellungen sich unsere Experten beschäftigen.',
        pressReleases:
          'Was tut sich im Kreditgeschäft? Hier geht es zur Übersicht unserer Pressemeldungen zum Schwerpunkt Kredit.',
        medien:
          'Was wir in der Fachberatung Kredit evaluieren, halten wir in Fachformaten wie beispielsweise Lösungsskizzen oder Whitepapers fest. Hier können Sie sie downloaden.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Fachberatung Kredit ',
        buttonTextPressRelease: 'Archiv Pressemitteilungen Kredit',
        buttonTextStudien: 'Archiv Studien Kredit',
        buttonTextThesen: 'Archiv Thesenpapiere Kredit',
        buttonTextWhitePaper: 'Archiv Whitepapers Kredit',
        buttonTextLösung: 'Archiv Lösungsskizzen Kredit',
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
          'Hier im Medienforum finden Sie alles Wissenswerte im Kontext von Wertpapier: von Fachartikeln über Pressemeldungen bis zu Whitepapers und themenbezogenen Studien.',
        professionalPublications:
          'Lesen Sie nach, über welche Themen aus dem Wertpapierbereich unsere Experten für Fachmedien schreiben.',
        pressReleases:
          'Mit welchen Wertpapierthemen wir uns auseinandersetzen, teilen wir gerne öffentlich. Hier finden Sie eine Übersicht über unsere Pressemeldungen in diesem Schwerpunkt.',
        medien:
          'Ergebnisse und Erkenntnisse rund um Wertpapierprozesse halten wir in ausgesuchten Fachformaten für Sie fest, die Sie hier downloaden können.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Fachberatung Wertpapier',
        buttonTextPressRelease: 'Archiv Pressemitteilungen Wertpapier',
        buttonTextStudien: 'Archiv Studien Wertpapier',
        buttonTextThesen: 'Archiv Thesenpapiere Wertpapier',
        buttonTextWhitePaper: 'Archiv Whitepapers Wertpapier ',
        buttonTextLösung: 'Archiv Lösungsskizzen Wertpapier',
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
          'Hier finden Sie jede Menge Wissenswertes im Kontext von Technologieberatung: Neuigkeiten von Fachartikeln über Lösungsskizzen bis zu Whitepapers liegen im Medienforum bereit.',
        professionalPublications:
          'Unsere Technologieberater schreiben regelmäßig für Fachmedien. Lesen Sie nach, was unsere Experten bewegt.',
        pressReleases:
          'Hier finden Sie unsere Meldungen rund um Technologieberatung.',
        medien:
          'Welche Erkenntnisse und Erfahrungen haben unsere Technologieberater gewonnen? In diesen Fachformaten zum Download halten wir es für Sie fest.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Technologieberatung',
        buttonTextPressRelease: 'Archiv Pressemitteilungen Technologieberatung',
        buttonTextStudien: 'Archiv Studien Technologieberatung',
        buttonTextThesen: 'Archiv Thesenpapiere Technologieberatung ',
        buttonTextWhitePaper: 'Archiv Whitepapers Technologieberatung ',
        buttonTextLösung: 'Archiv Lösungsskizzen Technologieberatung ',
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
          'Hier teilen wir jede Menge Digitalisierungsneuigkeiten aus unserem Medienforum mit Ihnen: Fachpublikationen, Pressemitteilungen oder auch Studien und Thesenpapiere können Sie hier digital erhalten.',
        professionalPublications:
          'Was unsere Berater in Fachbeiträgen zu Fragestellungen der Digitalisierung zu sagen haben? Lesen Sie einfach nach.',
        pressReleases:
          'Was wir der Presse mitteilen? Hier finden Sie unsere Pressemeldungen rund um den Schwerpunkt Digitalisierung.',
        medien:
          'Ob Studien, Thesenpapiere, Whitepapers oder Videos: Diverse Fachformate zum Thema Digitalisierung können Sie hier kennenlernen.',
        buttonTextProfessionalPublications:
          'Alle Publikationen Digitalisierung',
        buttonTextPressRelease: 'Archiv Pressemitteilungen Digitalisierung',
        buttonTextStudien: 'Archiv Studien Digitalisierung',
        buttonTextThesen: 'Archiv Thesenpapiere Digitalisierung ',
        buttonTextWhitePaper: 'Archiv Whitepapers Digitalisierung',
        buttonTextLösung: 'Archiv Lösungsskizzen Digitalisierung ',
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

    createPage({
      path: `/news-medien/cofinpro`,
      component: slash(template),
      context: {
        name: 'Cofinpro',
        url: 'cofinpro',
        input: dataUnternehmenAllgemein,
        siteHeader:
          'Was tut sich in unserem Unternehmen und womit sorgen wir gerade für Wirbel? Hier finden Sie alle Beiträge dazu aus unserem Medienforum.',
        pressReleases:
          'Stillstand? Kennen wir nicht. Was sich bei Cofinpro tut, teilen wir natürlich auch der Presse mit. Zum Nachlesen bitte hier entlang.',
        buttonTextPressRelease: 'Archiv Pressemitteilungen Cofinpro',
        content: {
          buttonPressemeldungenLink:
            '/news-medien/archiv/pressemitteilungen/cofinpro',
        },
      },
    })

    console.log(`created page /news-medien/cofinpro.`)

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
    createPressemeldungenArchivSites(
      dataUnternehmenAllgemein,
      'Cofinpro',
      '/news-medien/archiv/pressemitteilungen/cofinpro',
      'Hier finden Sie sämtliche Pressemitteilungen zu Neuigkeiten aus unserem Unternehmen, fein säuberlich archiviert.',
      'Welche Neuigkeiten gibt’s aus unserem Unternehmen und womit machen wir Wirbel? Hier können Sie es nachlesen.',
      createPage
    )

    callback(null)
  })
}

function createPressemeldungPages(
  result,
  createPage,
  templatePressemeldungSite
) {
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
    console.log(`created page /pressemitteilung/${pressemeldung.urlDerSeite}.`)
  }
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
    var found = false
    for (let j = 0; j < _to.pressemeldungen.current.length; ++j) {
      if (
        _to.pressemeldungen.current[j].contentfulInternerName ===
        _from.pressemeldungen.current[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.pressemeldungen.current.push(_from.pressemeldungen.current[i])
    }
  }
  for (let i = 0; i < _from.pressemeldungen.archiv.length; ++i) {
    var found = false
    for (let j = 0; j < _to.pressemeldungen.archiv.length; ++j) {
      if (
        _to.pressemeldungen.archiv[j].contentfulInternerName ===
        _from.pressemeldungen.archiv[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.pressemeldungen.archiv.push(_from.pressemeldungen.archiv[i])
    }
  }

  for (let i = 0; i < _from.veroeffentlichungen.all.length; ++i) {
    var found = false
    for (let j = 0; j < _to.veroeffentlichungen.all.length; ++j) {
      if (
        _to.veroeffentlichungen.all[j].contentfulInternerName ===
        _from.veroeffentlichungen.all[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.veroeffentlichungen.all.push(_from.veroeffentlichungen.all[i])
    }
  }
  for (let i = 0; i < _from.veroeffentlichungen.links.length; ++i) {
    var found = false
    for (let j = 0; j < _to.veroeffentlichungen.links.length; ++j) {
      if (
        _to.veroeffentlichungen.links[j].contentfulInternerName ===
        _from.veroeffentlichungen.links[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.veroeffentlichungen.links.push(_from.veroeffentlichungen.links[i])
    }
  }
  for (let i = 0; i < _from.veroeffentlichungen.downloads.length; ++i) {
    var found = false
    for (let j = 0; j < _to.veroeffentlichungen.downloads.length; ++j) {
      if (
        _to.veroeffentlichungen.downloads[j].contentfulInternerName ===
        _from.veroeffentlichungen.downloads[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.veroeffentlichungen.downloads.push(
        _from.veroeffentlichungen.downloads[i]
      )
    }
  }
  for (let i = 0; i < _from.veroeffentlichungen.archiv.length; ++i) {
    var found = false
    for (let j = 0; j < _to.veroeffentlichungen.archiv.length; ++j) {
      if (
        _to.veroeffentlichungen.archiv[j].contentfulInternerName ===
        _from.veroeffentlichungen.archiv[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.veroeffentlichungen.archiv.push(_from.veroeffentlichungen.archiv[i])
    }
  }

  for (let i = 0; i < _from.studien.current.length; ++i) {
    var found = false
    for (let j = 0; j < _to.studien.current.length; ++j) {
      if (
        _to.studien.current[j].contentfulInternerName ===
        _from.studien.current[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.studien.current.push(_from.studien.current[i])
    }
  }
  console.log('copied studien current')
  for (let i = 0; i < _from.studien.archiv.length; ++i) {
    var found = false
    for (let j = 0; j < _to.studien.archiv.length; ++j) {
      if (
        _to.studien.archiv[j].contentfulInternerName ===
        _from.studien.archiv[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.studien.archiv.push(_from.studien.archiv[i])
    }
  }
  console.log('copied studien archiv')
  for (let i = 0; i < _from.thesenpapiere.current.length; ++i) {
    var found = false
    for (let j = 0; j < _to.thesenpapiere.current.length; ++j) {
      if (
        _to.thesenpapiere.current[j].contentfulInternerName ===
        _from.thesenpapiere.current[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.thesenpapiere.current.push(_from.thesenpapiere.current[i])
    }
  }
  console.log('copied thesenpapiere current')
  for (let i = 0; i < _from.thesenpapiere.archiv.length; ++i) {
    var found = false
    for (let j = 0; j < _to.thesenpapiere.archiv.length; ++j) {
      if (
        _to.thesenpapiere.archiv[j].contentfulInternerName ===
        _from.thesenpapiere.archiv[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.thesenpapiere.archiv.push(_from.thesenpapiere.archiv[i])
    }
  }
  console.log('copied thesenpapiere archiv')
  for (let i = 0; i < _from.whitepapers.current.length; ++i) {
    var found = false
    for (let j = 0; j < _to.whitepapers.current.length; ++j) {
      if (
        _to.whitepapers.current[j].contentfulInternerName ===
        _from.whitepapers.current[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.whitepapers.current.push(_from.whitepapers.current[i])
    }
  }
  console.log('copied whitepapers current')
  for (let i = 0; i < _from.whitepapers.archiv.length; ++i) {
    var found = false
    for (let j = 0; j < _to.whitepapers.archiv.length; ++j) {
      if (
        _to.whitepapers.archiv[j].contentfulInternerName ===
        _from.whitepapers.archiv[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.whitepapers.archiv.push(_from.whitepapers.archiv[i])
    }
  }
  console.log('copied whitepapers archiv')
  for (let i = 0; i < _from.loesungsskizzen.current.length; ++i) {
    var found = false
    for (let j = 0; j < _to.loesungsskizzen.current.length; ++j) {
      if (
        _to.loesungsskizzen.current[j].contentfulInternerName ===
        _from.loesungsskizzen.current[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.loesungsskizzen.current.push(_from.loesungsskizzen.current[i])
    }
  }
  console.log('copied loesungsskizzen current')
  for (let i = 0; i < _from.loesungsskizzen.archiv.length; ++i) {
    var found = false
    for (let j = 0; j < _to.loesungsskizzen.archiv.length; ++j) {
      if (
        _to.loesungsskizzen.archiv[j].contentfulInternerName ===
        _from.loesungsskizzen.archiv[i].contentfulInternerName
      ) {
        found = true
      }
    }
    if (found === false) {
      _to.loesungsskizzen.archiv.push(_from.loesungsskizzen.archiv[i])
    }
  }
  console.log('copied loesungsskizzen archiv')
}
