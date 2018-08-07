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
              contentfulInternerName
              kategorieInDerDasProjektFllt
              urlDerSeite
              ueberschrift
              unterueberschrift
            }
          }
        }
      }
    `
  ).then(result => {
    let categories = [
      {
        id: 'Managementberatung',
        path: 'managementberatung',
        title: 'Unsere Projekte in der Managementberatung ',
        description:
          'Programmmanagement, Auswahlverfahren, Organisationsentwicklung oder Digitalisierungsstrategien sind nur wenige Stichwörter: Was sich auf diesem Feld bei uns in den vergangenen Jahren getan hat, zeigt unsere Projektauswahl. ',
        projects: [],
      },
      {
        id: 'Fachberatung-Kredit',
        path: 'fachberatung-kredit',
        title: 'Unsere Projekte im Kreditgeschäft',
        description:
          'In den vergangenen Jahren hat sich auf unserem Kerngebiet viel getan: Was genau, zeigen wir hier anhand einer Auswahl unserer Projekte. ',
        projects: [],
      },
      {
        id: 'Fachberatung-Wertpapier',
        path: 'fachberatung-wertpapier',
        title: 'Unsere Projekte im Wertpapiergeschäft',
        description:
          'Hier ist in den vergangenen Jahren viel passiert: Was genau wir in unserem Kerngebiet geleistet haben, zeigen wir mit einer exemplarischen Projektauswahl. ',
        projects: [],
      },
      {
        id: 'Technologieberatung',
        path: 'technologieberatung',
        title: 'Unsere Projekte in der Technologieberatung',
        description:
          'Welche technologischen Antworten wir auf die Herausforderungen unserer Kunden haben? Hier finden Sie eine Auswahl exemplarischer Projekte. ',
        projects: [],
      },
      {
        id: 'Digitalisierung',
        path: 'digitalisierung',
        title: 'Unsere Projekte im Kontext von Digitalisierung',
        description:
          'Ob Digi-Ramp-up, Innovationslabore oder agile Organisation: Hier finden Sie eine Reihe exemplarischer Projekte aus dem Umfeld der Digitalisierung. ',
        projects: [],
      },
    ]

    const template = path.resolve(`./src/templates/projekte/index.jsx`)

    _.each(result.data.allContentfulProjekt.edges, edge => {
      for (let i = 0; i < categories.length; ++i) {
        if (categories[i].id === edge.node.kategorieInDerDasProjektFllt) {
          categories[i].projects.push(edge.node)
        }
      }
    })

    _.each(categories, category => {
      createPage({
        path: '/projekte/' + category.path,
        component: slash(template),
        context: {
          id: category.id,
          title: category.title,
          description: category.description,
          projects: category.projects,
          stockImages: backgroundImages,
        },
      })
      console.log('created page /projekte/' + category.path)
    })
    callback(null)
  })
}
