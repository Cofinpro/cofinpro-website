const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.create = function(graphql, createPage, createRedirect, callback) {
  console.log('start graphql query: allContentfulFokusthemaEinteilung.')

  graphql(
    `
      {
        allContentfulFokusthemaEinteilung {
          edges {
            node {
              id
              contentfulInternerName
              ueberschriftWertpapier
              ueberschriftKredit
              ueberschriftManagement
              ueberschriftTechnologie
              ueberschriftDigitalisierung
              beschreibungWertpapier {
                beschreibungWertpapier
              }
              beschreibungKredit {
                beschreibungKredit
              }
              beschreibungManagement {
                beschreibungManagement
              }
              beschreibungTechnologie {
                beschreibungTechnologie
              }
              beschreibungDigitalisierung {
                beschreibungDigitalisierung
              }
              fokusthemenWertpapier {
                id
                url
                uberschriftGanzOben
                unterueberschrift
                icon
                headline {
                  headline
                }
              }
              fokusthemenKredit {
                id
                url
                uberschriftGanzOben
                unterueberschrift
                icon
                headline {
                  headline
                }
              }
              fokusthemenManagement {
                id
                url
                uberschriftGanzOben
                unterueberschrift
                icon
                headline {
                  headline
                }
              }
              fokusthemenTechnologie {
                id
                url
                uberschriftGanzOben
                unterueberschrift
                icon
                headline {
                  headline
                }
              }
              fokusthemenDigitalisierung {
                id
                url
                uberschriftGanzOben
                unterueberschrift
                icon
                headline {
                  headline
                }
              }
            }
          }
        }
        allContentfulFokusthema {
          edges {
            node {
              id
              url
            }
          }
        }
      }
    `
  ).then(result => {
    console.log('end graphql query: allContentfulFokusthemaEinteilung.')

    const template = path.resolve(`./src/templates/fokusthemen.tsx`)

    if (result.data.allContentfulFokusthemaEinteilung.edges.length > 0) {
      createPage({
        path: `/fokusthemen/managementberatung`,
        component: slash(template),
        context: {
          name: 'Managementberatung',
          url: 'managementberatung',
          header:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .ueberschriftManagement,
          description:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .beschreibungManagement.beschreibungManagement,
          fokusthemen:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .fokusthemenManagement,
        },
      })

      console.log(`created page /fokusthemen/managementberatung.`)

      createPage({
        path: `/fokusthemen/fachberatung-kredit`,
        component: slash(template),
        context: {
          name: 'Fachberatung-Kredit',
          url: 'fachberatung-kredit',
          header:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .ueberschriftKredit,
          description:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .beschreibungKredit.beschreibungKredit,
          fokusthemen:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .fokusthemenKredit,
        },
      })

      console.log(`created page /fokusthemen/fachberatung-kredit.`)

      createPage({
        path: `/fokusthemen/fachberatung-wertpapier`,
        component: slash(template),
        context: {
          name: 'Fachberatung-Wertpapier',
          url: 'fachberatung-wertpapier',
          header:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .ueberschriftWertpapier,
          description:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .beschreibungWertpapier.beschreibungWertpapier,
          fokusthemen:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .fokusthemenWertpapier,
        },
      })

      console.log(`created page /fokusthemen/fachberatung-wertpapier.`)

      createPage({
        path: `/fokusthemen/technologieberatung`,
        component: slash(template),
        context: {
          name: 'Technologieberatung',
          url: 'technologieberatung',
          header:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .ueberschriftTechnologie,
          description:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .beschreibungTechnologie.beschreibungTechnologie,
          fokusthemen:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .fokusthemenTechnologie,
        },
      })

      console.log(`created page /fokusthemen/technologieberatung.`)

      createPage({
        path: `/fokusthemen/digitalisierung`,
        component: slash(template),
        context: {
          name: 'Digitalisierung',
          url: 'digitalisierung',
          header:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .ueberschriftDigitalisierung,
          description:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .beschreibungDigitalisierung.beschreibungDigitalisierung,
          fokusthemen:
            result.data.allContentfulFokusthemaEinteilung.edges[0].node
              .fokusthemenDigitalisierung,
        },
      })

      console.log(`created page /fokusthemen/digitalisierung.`)

      // Detailseiten Fokusthemen ab hier

      const templateDetail = path.resolve(
        `./src/templates/fokusthemenDetail.tsx`
      )

      for (
        let i = 0;
        i < result.data.allContentfulFokusthema.edges.length;
        ++i
      ) {
        createPage({
          path: `/fokusthemen/thema/${
            result.data.allContentfulFokusthema.edges[i].node.url
          }`,
          component: slash(templateDetail),
          context: {
            id: result.data.allContentfulFokusthema.edges[i].node.id,
          },
        })
        console.log(
          `created page /fokusthemen/thema/${
            result.data.allContentfulFokusthema.edges[i].node.url
          }.`
        )
      }
    }

    console.log(`created pages für fokusthemen done.`)

    callback(null)
  })
}
