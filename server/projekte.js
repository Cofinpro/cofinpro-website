const _ = require('lodash')
const path = require('path')
const slash = require('slash')

exports.create = function(graphql, createPage, backgroundImages, callback) {
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
      }
    `
  ).then(result => {
    let images = []

    images.push('/img/projekte/sharp-projekte-a4_gray.jpg')

    images.push('/img/projekte/sharp-projekte-a2-pink.jpg')
    images.push('/img/projekte/sharp-projekte-a6-pink.jpg')

    images.push('/img/projekte/sharp-projekte-a7-grau.jpg')
    images.push('/img/projekte/sharp-projekte-a9-grau.jpg')

    images.push('/img/projekte/sharp-projekte-a10-pink.jpg')
    images.push('/img/projekte/sharp-projekte-a29-pink.jpg')

    images.push('/img/projekte/sharp-projekte-a14-grau.jpg')
    images.push('/img/projekte/sharp-projekte-a16-grau.jpg')

    images.push('/img/projekte/sharp-projekte-a15-pink.jpg')
    images.push('/img/projekte/sharp-projekte-a34-pink.jpg')

    images.push('/img/projekte/sharp-projekte-a11-grau.jpg')
    images.push('/img/projekte/sharp-projekte-a24-grau.jpg')

    images.push('/img/projekte/sharp-projekte-a22-pink.jpg')
    images.push('/img/projekte/sharp-projekte-a37-pink.jpg')

    images.push('/img/projekte/sharp-projekte-a39-grau.jpg')
    images.push('/img/projekte/sharp-projekte-a31-grau.jpg')

    images.push('/img/projekte/sharp-projekte-a35-pink.jpg')

    //images.push('sharp-projekte-a40-grau.jpg')

    const template = path.resolve(`./src/templates/projekte.tsx`)

    if (result.data.allContentfulProjekteZuordnung.edges.length > 0) {
      createPage({
        path: '/projekte/managementberatung',
        component: slash(template),
        context: {
          id: 'Managementberatung',
          title: 'Unsere Projekte in der Managementberatung ',
          description:
            'Auswahlverfahren, Organisationsentwicklung oder Digitalisierungsstrategien sind nur wenige Stichwörter: Was sich auf diesem Feld bei uns in den vergangenen Jahren getan hat, zeigt unsere Projektauswahl.',
          projects:
            result.data.allContentfulProjekteZuordnung.edges[0].node
              .managementberatung,
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
          description:
            'In den vergangenen Jahren hat sich auf unserem Kerngebiet viel getan: Was genau, zeigen wir hier anhand einer Auswahl unserer Projekte.',
          projects:
            result.data.allContentfulProjekteZuordnung.edges[0].node
              .fachberatungKredit,
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
          description:
            'Hier ist in den vergangenen Jahren viel passiert: Was genau wir in unserem Kerngebiet geleistet haben, zeigen wir mit einer exemplarischen Projektauswahl.',
          projects:
            result.data.allContentfulProjekteZuordnung.edges[0].node
              .fachberatungWertpapier,
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
          description:
            'Welche technologischen Antworten wir auf die Herausforderungen unserer Kunden haben? Hier finden Sie eine Auswahl exemplarischer Projekte.',
          projects:
            result.data.allContentfulProjekteZuordnung.edges[0].node
              .technologieberatung,
          stockImages: images,
        },
      })
      console.log('created page /projekte/technologieberatung')

      createPage({
        path: '/projekte/digitalisierung',
        component: slash(template),
        context: {
          id: 'Digitalisierung',
          title: 'Unsere Projekte im Kontext der Digitalisierung',
          description:
            'Ob Digi-Ramp-up, Innovationslabore oder agile Organisation: Hier finden Sie eine Reihe exemplarischer Projekte aus dem Umfeld der Digitalisierung.',
          projects:
            result.data.allContentfulProjekteZuordnung.edges[0].node
              .digitalisierung,
          stockImages: images,
        },
      })
      console.log('created page /projekte/digitalisierung')
    }

    // Detailseiten Projekte ab hier

    const templateDetail = path.resolve(`./src/templates/projekt.tsx`)

    let indexOfImage = 0

    for (let i = 0; i < result.data.allContentfulProjekt.edges.length; ++i) {
      createPage({
        path: `/projekte/${
          result.data.allContentfulProjekt.edges[i].node.urlDerSeite
        }`,
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

      console.log(
        `created page /projekte/${
          result.data.allContentfulProjekt.edges[i].node.urlDerSeite
        }.`
      )
    }

    callback(null)
  })
}
