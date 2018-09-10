import React from 'react'

import RelevanteLinks from '../../../components/relevanteLinks'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'

import FokusThemenSmallLayout from '../../../components/layouts/FokusThemenSmallLayout'

import PageIntroText from '../../../components/text/PageIntroText'

import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderManagementTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const graphQlResult = this.props.data.allContentfulFokusthemaEinteilung

    var fokusthemen = []

    let focusThemsWrapper = this.props.data.allContentfulFokusthemaEinteilung
      .edges[0].node

    for (let i = 0; i < focusThemsWrapper.fokusthemenManagement.length; ++i) {
      fokusthemen.push(focusThemsWrapper.fokusthemenManagement[i])
    }

    let relevantFocusFields = []

    for (let i = 0; i < focusThemsWrapper.fokusthemenManagement.length; ++i) {
      relevantFocusFields.push({
        title: focusThemsWrapper.fokusthemenManagement[i].uberschriftGanzOben,
        url:
          '/fokusthemen/thema/' +
          focusThemsWrapper.fokusthemenManagement[i].url,
      })
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-none d-md-block">
                <ImageWrapper
                  sourceType={SOURCE_TYP_SHARP}
                  source={this.props.data.titelBildDesktopSharp}
                />
              </div>
              <div className="d-block d-md-none">
                <ImageWrapper
                  sourceType={SOURCE_TYP_SHARP}
                  source={this.props.data.titelBildMobileSharp}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-60-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="row d-flex d-md-none">
                <div className="col-3 col-lg-2">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={
                      '/img/beratungsfelder/management/Managementberatung-Icon.png'
                    }
                  />
                </div>
              </div>
              <h1 className="h1 margin-20-top">Managementberatung</h1>
              <h2 className="h2 margin-20-top">
                Wie wir Geschäftsmodelle gestalten und optimieren
              </h2>
              <PageIntroText
                content={{
                  text:
                    'Für uns steckt in guter Managementberatung auch »Zeitgeistberatung«. Schließlich beleuchten wir für Banken und Asset Manager, ob und wie sich Trends auf deren Geschäft auswirken. Unsere Kooperation mit Spitzeninstituten, die daraus resultierende Marktkenntnis und unsere ohnehin enorme Passion für die Finanzindustrie lässt uns genau erkennen, welche Fragestellungen es wert sind, unter die Lupe genommen zu werden. Oftmals fertigen wir eigene Studien und Foren an. So gewinnen wir Erkenntnisse, die uns wiederum helfen, Chancen und Nutzen zu bewerten und sie Risiken und Restriktionen gegenüberzustellen. Aus dem Ergebnis leiten wir für unsere Kunden realistische, sichere Handlungsempfehlungen ab.',
                }}
                style={{ container: 'margin-40-top margin-xs-0-top' }}
              />
            </div>
            <div className="col-12 col-md-1 d-block d-lg-none" />
            <div className="col-12 col-md-3 col-lg-5">
              <div className="row d-none d-md-flex justify-content-end">
                <div className="col-12 col-md-12 col-lg-6">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={
                      '/img/beratungsfelder/management/Managementberatung-Icon.png'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">Die Zukunft wird gut </h2>
              <p>
                Wir unterstützen unsere Kunden in ihrem Ziel,
                Digitalisierungsstrategien zu entwickeln, treiben als Begleiter
                bei der Digitalen Transformation die Organisationsentwicklung
                voran.
              </p>
            </div>
            <div className="col-md-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.managementMatrixSharp}
              />
            </div>
          </div>
        </div>
        <FokusThemenSmallLayout
          header={'Wettbewerb nutzen, um im Wettbewerb zu bleiben'}
          text={
            'Wir führen Auswahlverfahren durch und nehmen mit objektiven, nachhaltigen Entscheidungsgrundlagen gut und gerne in die Hand, die Effizienz unserer Kunden entscheidend zu steigern.'
          }
          fokusthemen={fokusthemen}
        />
        <div className="margin-120-top margin-xs-100-top">
          <ReferenzAndDownload
            content={{
              right: {
                header: 'Referenzprojekte',
                description:
                  'Welche Projekte haben wir im Kontext unserer Fokusthemen schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
                button: {
                  text: 'WEITERE REFERENZEN',
                  path: '/projekte/managementberatung',
                },
              },
              left: {
                header: 'Medien',
                description:
                  'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                button: {
                  text: 'WEITERE PUBLIKATIONEN',
                  path: '/news-medien/managementberatung',
                },
              },
            }}
          />
        </div>
      </div>
    )
  }
}

export default BeratungsfelderManagementTemplate

export const pageQuery = graphql`
  query BeratungsfelderManagementQuery {
    allContentfulFokusthemaEinteilung {
      edges {
        node {
          fokusthemenManagement {
            id
            url
            uberschriftGanzOben
            unterueberschrift
            icon
            relevanteBeratungsfelder
            headline {
              headline
            }
          }
        }
      }
    }
    titelBildDesktopSharp: imageSharp(
      id: { regex: "/Management-Titelbild-Desktop/" }
    ) {
      sizes(quality: 80, maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    titelBildMobileSharp: imageSharp(
      id: { regex: "/Management-Titelbild-Mobile/" }
    ) {
      sizes(quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    managementMatrixSharp: imageSharp(
      id: { regex: "/Management-Beratungsmatrix/" }
    ) {
      sizes(quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
