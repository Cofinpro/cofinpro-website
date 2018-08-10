const _ = require('lodash')
const path = require('path')
const slash = require('slash')

exports.create = function (graphql, createPage, backgroundImages, callback) {
  graphql(
    `
      {
        allContentfulProjekt {
          edges {
            node {
              id
              urlDerSeite
            }
          }
        }
        allContentfulProjekteZuordnung {
          edges {
            node {
              id
              contentfulInterneBezeichnung
              managementberatung {
                id
                relevanteBeratungsfelder
                urlDerSeite
                ueberschrift
                unterueberschrift
              }
              fachberatungKredit {
                id
                relevanteBeratungsfelder
                urlDerSeite
                ueberschrift
                unterueberschrift
              }
              fachberatungWertpapier {
                id
                relevanteBeratungsfelder
                urlDerSeite
                ueberschrift
                unterueberschrift
              }
              technologieberatung {
                id
                relevanteBeratungsfelder
                urlDerSeite
                ueberschrift
                unterueberschrift
              }
              digitalisierung {
                id
                relevanteBeratungsfelder
                urlDerSeite
                ueberschrift
                unterueberschrift
              }
            }
          }
        }
        stockA2pink: imageSharp(id: { regex: "/sharp-projekte-a2-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA4grau: imageSharp(id: { regex: "/sharp-projekte-a4_gray/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA6pink: imageSharp(id: { regex: "/sharp-projekte-a6-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA7grau: imageSharp(id: { regex: "/sharp-projekte-a7-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA9grau: imageSharp(id: { regex: "/sharp-projekte-a9-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA10pink: imageSharp(id: { regex: "/sharp-projekte-a10-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA11grau: imageSharp(id: { regex: "/sharp-projekte-a11-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA14grau: imageSharp(id: { regex: "/sharp-projekte-a14-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA15pink: imageSharp(id: { regex: "/sharp-projekte-a15-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA16grau: imageSharp(id: { regex: "/sharp-projekte-a16-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA22pink: imageSharp(id: { regex: "/sharp-projekte-a22-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA24grau: imageSharp(id: { regex: "/sharp-projekte-a24-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA29pink: imageSharp(id: { regex: "/sharp-projekte-a29-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA31grau: imageSharp(id: { regex: "/sharp-projekte-a31-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA34pink: imageSharp(id: { regex: "/sharp-projekte-a34-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA35pink: imageSharp(id: { regex: "/sharp-projekte-a35-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA37pink: imageSharp(id: { regex: "/sharp-projekte-a37-pink/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA39grau: imageSharp(id: { regex: "/sharp-projekte-a39-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
        stockA40grau: imageSharp(id: { regex: "/sharp-projekte-a40-grau/" }) {
          sizes(quality: 100, maxWidth: 2000, maxHeight: 1200, cropFocus: CENTER) {
            src
            srcSet
            srcWebp
            srcSetWebp
            originalImg
            originalName
            base64
            aspectRatio
            sizes
          }
        }
      }
    `
  ).then(result => {
    let images = []

    images.push(result.data.stockA4grau)

    images.push(result.data.stockA2pink)
    images.push(result.data.stockA6pink)

    images.push(result.data.stockA7grau)
    images.push(result.data.stockA9grau)

    images.push(result.data.stockA10pink)
    images.push(result.data.stockA29pink)

    images.push(result.data.stockA14grau)
    images.push(result.data.stockA16grau)

    images.push(result.data.stockA15pink)
    images.push(result.data.stockA34pink)

    images.push(result.data.stockA11grau)
    images.push(result.data.stockA24grau)

    images.push(result.data.stockA22pink)
    images.push(result.data.stockA37pink)

    images.push(result.data.stockA39grau)
    images.push(result.data.stockA31grau)

    images.push(result.data.stockA35pink)

    const template = path.resolve(`./src/templates/projekte/index.jsx`)

    if (result.data.allContentfulProjekteZuordnung.edges.length > 0) {
      createPage({
        path: '/projekte/managementberatung',
        component: slash(template),
        context: {
          id: 'Managementberatung',
          title: 'Unsere Projekte in der Managementberatung ',
          description: 'Programmmanagement, Auswahlverfahren, Organisationsentwicklung oder Digitalisierungsstrategien sind nur wenige Stichwörter: Was sich auf diesem Feld bei uns in den vergangenen Jahren getan hat, zeigt unsere Projektauswahl.',
          projects: result.data.allContentfulProjekteZuordnung.edges[0].node.managementberatung,
          stockImages: images,
        },
      })
      console.log('created page /projekte/managementberatung')

      createPage({
        path: '/projekte/fachberatung-kredit',
        component: slash(template),
        context: {
          id: 'Fachberatung-Kredit',
          title: 'Unsere Projekte im Kreditgeschäft',
          description: 'In den vergangenen Jahren hat sich auf unserem Kerngebiet viel getan: Was genau, zeigen wir hier anhand einer Auswahl unserer Projekte.',
          projects: result.data.allContentfulProjekteZuordnung.edges[0].node.fachberatungKredit,
          stockImages: images,
        },
      })
      console.log('created page /projekte/fachberatung-kredit')

      createPage({
        path: '/projekte/fachberatung-wertpapier',
        component: slash(template),
        context: {
          id: 'Fachberatung-Wertpapier',
          title: 'Unsere Projekte im Wertpapiergeschäft',
          description: 'Hier ist in den vergangenen Jahren viel passiert: Was genau wir in unserem Kerngebiet geleistet haben, zeigen wir mit einer exemplarischen Projektauswahl.',
          projects: result.data.allContentfulProjekteZuordnung.edges[0].node.fachberatungWertpapier,
          stockImages: images,
        },
      })
      console.log('created page /projekte/fachberatung-wertpapier')

      createPage({
        path: '/projekte/technologieberatung',
        component: slash(template),
        context: {
          id: 'Technologieberatung',
          title: 'Unsere Projekte in der Technologieberatung',
          description: 'Welche technologischen Antworten wir auf die Herausforderungen unserer Kunden haben? Hier finden Sie eine Auswahl exemplarischer Projekte.',
          projects: result.data.allContentfulProjekteZuordnung.edges[0].node.technologieberatung,
          stockImages: images,
        },
      })
      console.log('created page /projekte/technologieberatung')

      createPage({
        path: '/projekte/digitalisierung',
        component: slash(template),
        context: {
          id: 'Digitalisierung',
          title: 'Unsere Projekte im Kontext von Digitalisierung',
          description: 'Ob Digi-Ramp-up, Innovationslabore oder agile Organisation: Hier finden Sie eine Reihe exemplarischer Projekte aus dem Umfeld der Digitalisierung.',
          projects: result.data.allContentfulProjekteZuordnung.edges[0].node.digitalisierung,
          stockImages: images,
        },
      })
      console.log('created page /projekte/digitalisierung')
    }

    // Detailseiten Projekte ab hier

    const templateDetail = path.resolve(`./src/templates/projekt/index.jsx`)

    let indexOfImage = 0

    for (let i = 0; i < result.data.allContentfulProjekt.edges.length; ++i) {

      createPage({
          path: `/projekte/${result.data.allContentfulProjekt.edges[i].node.urlDerSeite}`,
          component: slash(templateDetail),
          context: {
            id: result.data.allContentfulProjekt.edges[i].node.id,
            bigImage: images[indexOfImage],
          },
        })
        ++indexOfImage

      if (indexOfImage === images.length) {
        indexOfImage = 0
      }

      console.log(`created page /projekte/${result.data.allContentfulProjekt.edges[i].node.urlDerSeite}.`)
    }

    callback(null)
  })
}