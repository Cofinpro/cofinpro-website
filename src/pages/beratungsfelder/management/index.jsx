import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'

import FokusthemaPreview from '../../../components/layouts/FokusthemenLayout/FokusthemaPreview'

import PageIntroText from '../../../components/text/PageIntroText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderManagementTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const graphQlResult = this.props.data.allContentfulZuordnungFokusthemen

    console.log(graphQlResult)
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
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-4 col-md-3 col-lg-2">
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
            <div className="col-md-1" />
            <div className="col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>
        <div className="container margin-120-top margin-xs-40-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">Trends sind unser Ding</h2>
              <p className="margin-20-top">
                Wir unterstützen unsere Kunden in ihrem Ziel,
                Digitalisierungsstrategien zu entwickeln, und begleiten sie auf
                ihrem Weg zur agilen Organisation. Themen, mit denen wir uns im
                Kontext der Digitalisierung aktuell beschäftigen, sind etwa
                digitale Transformation, Machine Learning, Unbundling Banks und
                Blockchain.
              </p>
              <div className="margin-120-top margin-xs-40-top">
                <FokusthemaPreview
                  url={graphQlResult.edges[0].node.fokusthemenManagement[0].url}
                  header={
                    graphQlResult.edges[0].node.fokusthemenManagement[0]
                      .uberschriftGanzOben
                  }
                  subheader={
                    graphQlResult.edges[0].node.fokusthemenManagement[0]
                      .uberschriftGanzOben
                  }
                  color={'--blue-yellow'}
                  icon={
                    graphQlResult.edges[0].node.fokusthemenManagement[0].icon
                  }
                />
              </div>
            </div>
            <div className="col-md-6 margin-xs-20-top">
              <FokusthemaPreview
                url={graphQlResult.edges[0].node.fokusthemenManagement[1].url}
                header={
                  graphQlResult.edges[0].node.fokusthemenManagement[1]
                    .uberschriftGanzOben
                }
                subheader={
                  graphQlResult.edges[0].node.fokusthemenManagement[1].subheader
                }
                color={'--orange-pink'}
                icon={graphQlResult.edges[0].node.fokusthemenManagement[1].icon}
              />
              <div className="row margin-20-top">
                <div className="col-md-4" />
                <div className="col-md-8 justify-content-end">
                  <FokusthemaPreview
                    url={
                      graphQlResult.edges[0].node.fokusthemenManagement[2].url
                    }
                    header={
                      graphQlResult.edges[0].node.fokusthemenManagement[2]
                        .uberschriftGanzOben
                    }
                    subheader={
                      graphQlResult.edges[0].node.fokusthemenManagement[2]
                        .subheader
                    }
                    color={'--pink-orange'}
                    icon={
                      graphQlResult.edges[0].node.fokusthemenManagement[2].icon
                    }
                  />
                </div>
              </div>
              <div className="margin-40-top margin-xs-20-top">
                <FokusthemaPreview
                  url={graphQlResult.edges[0].node.fokusthemenManagement[0].url}
                  header={
                    graphQlResult.edges[0].node.fokusthemenManagement[0]
                      .uberschriftGanzOben
                  }
                  subheader={
                    graphQlResult.edges[0].node.fokusthemenManagement[0]
                      .subheader
                  }
                  color={'--blue-yellow'}
                  icon={
                    graphQlResult.edges[0].node.fokusthemenManagement[0].icon
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-80-top">
            <div className="col-md-6">
              <h2 className="h2">Die Zukunft wird gut </h2>
              <p>
                Wir treiben die Organisationsentwicklung voran, übernehmen das
                Programmmanagement und führen Auswahlverfahren durch. Mit
                objektiven, nachhaltigen Entscheidungsgrundlagen nehmen wir es
                gut und gerne in die Hand, die Effektivität und Effizienz
                unserer Kunden entscheidend zu steigern.
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
        <div className="margin-120-top margin-xs-40-top">
          <ReferenzAndDownload
            content={{
              right: {
                header: 'Referenzprojekte',
                description:
                  'Welche Projekte haben wir im Kontext unserer Fokusthemen schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
                button: {
                  text: 'Alle Referenzen zum Thema',
                  path: '/projekte/managementberatung',
                },
              },
              left: {
                header: 'Medien',
                description:
                  'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                button: {
                  text: 'Alle Publikationen zum Thema',
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
    allContentfulZuordnungFokusthemen {
      edges {
        node {
          fokusthemenManagement {
            id
            url
            uberschriftGanzOben
            unterueberschrift
            icon
            beratungsfelder
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
    managementMatrixSharp: imageSharp(id: { regex: "/ManagementMatrix/" }) {
      sizes(quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
