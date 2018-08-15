import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'

import FokusthemaPreview from '../../../components/layouts/FokusthemenLayout/FokusthemaPreview'

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
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.heroImageSharp}
              />
            </div>
          </div>
        </div>
        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={
                      '/img/beratungsfelder/management/managementberatung.png'
                    }
                    styleClasses={'beratungs-icons'}
                  />
                </div>
              </div>
              <h1 className="h1 margin-20-top">Managementberatung</h1>
              <h2 className="h2 margin-20-top">
                Wie wir Geschäftsmodelle gestalten und optimieren
              </h2>
              <h4 className="h4 margin-40-top">
                Für uns steckt in guter Managementberatung auch
                »Zeitgeistberatung«. Schließlich beleuchten wir für Banken und
                Asset Manager, ob und wie sich Trends auf deren Geschäft
                auswirken. Unsere Kooperation mit Spitzeninstituten, die daraus
                resultierende Marktkenntnis und unsere ohnehin enorme Passion
                für die Finanzindustrie lässt uns genau erkennen, welche
                Fragestellungen es wert sind, unter die Lupe genommen zu werden.
                Oftmals fertigen wir eigene Studien und Foren an. So gewinnen
                wir Erkenntnisse, die uns wiederum helfen, Chancen und Nutzen zu
                bewerten und sie Risiken und Restriktionen gegenüberzustellen.
                Aus dem Ergebnis leiten wir für unsere Kunden realistische,
                sichere Handlungsempfehlungen ab.
              </h4>
            </div>
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
                    graphQlResult.edges[0].node.fokusthemenManagement[0].header
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
            <div className="col-md-6 margin-xs-20-top">
              <FokusthemaPreview
                url={graphQlResult.edges[0].node.fokusthemenManagement[1].url}
                header={
                  graphQlResult.edges[0].node.fokusthemenManagement[1].header
                }
                subheader={
                  graphQlResult.edges[0].node.fokusthemenManagement[1].subheader
                }
                color={'--orange-pink'}
                icon={graphQlResult.edges[0].node.fokusthemenManagement[1].icon}
              />
              <div className="row margin-20-top">
                <div className="col-md-8 align-items-end">
                  <FokusthemaPreview
                    url={
                      graphQlResult.edges[0].node.fokusthemenManagement[2].url
                    }
                    header={
                      graphQlResult.edges[0].node.fokusthemenManagement[2]
                        .header
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
                    graphQlResult.edges[0].node.fokusthemenManagement[0].header
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
          <ReferenzAndDownload />
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
    heroImageSharp: imageSharp(id: { regex: "/Managementberatung/" }) {
      sizes(quality: 100, maxWidth: 2000, maxHeight: 1000, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    managementMatrixSharp: imageSharp(id: { regex: "/ManagementMatrix/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
