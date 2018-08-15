import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'
import FokusthemaPreview from '../../../components/layouts/FokusthemenLayout/FokusthemaPreview'
import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderWertpapierTemplate extends React.Component {
  render() {
    const graphQlResult = this.props.data.allContentfulZuordnungFokusthemen

    console.log(graphQlResult)
    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.wertpapierImageSharp}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row margin-20-top">
                <div className="col-md-4">
                  <div className="d-none d-md-block">
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={this.props.data.iconImageSharp}
                    />
                  </div>
                  <div className="d-block d-md-none">
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={this.props.data.iconImageSharp}
                      styleClasses="beratungs-icons"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h1 className="h1 margin-20-top">Wertpapiergeschäft</h1>
                  <h2 className="h2 margin-20-top">
                    Unsere Fachberatung im Wertpapiergeschäft
                  </h2>
                  <h4 className="h4 margin-40-top">
                    Langjährige Erfahrung im Wertpapiergeschäft, tiefes
                    methodisches Wissen und hohe Projektmanagementkompetenz
                    macht uns zu führenden Beratern.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
          <div className="row margin-120-top margin-xs-40-top">
            <div className="col-md-6">
              <h2 className="h2">
                Wir decken die gesamte Wertschöpfungskette ab
              </h2>
              <p className="text-left margin-20-top">
                Unsere Leistungen für Banken reichen von Beratung über Vertrieb,
                Handel und Abwicklung bis Verwahrung.
                Kapitalverwaltungsgesellschaften unterstützen wir bei der
                Digitalisierung von Geschäftsmodellen, der Umsetzung
                regulatorischer Anforderungen, im Portfoliomanagement und bei
                der Optimierung ihrer Markt- und Stammdaten.
              </p>
            </div>
          </div>
          <div className="row margin-120-top margin-xs-20-top">
            <div className="col-md-12">
              <h2 className="h2 text-primary text-center">Wertpapierprozess</h2>
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.processImageSharp}
              />
            </div>
          </div>
          <div className="row margin-80-top margin-xs-20-top">
            <div className="col-md-12">
              <h2 className="h2 text-primary text-center">Investmentprozess</h2>
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.process2ImageSharp}
              />
            </div>
          </div>
          <div className="row margin-100-top margin-xs-40-top">
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2 className="h2">Alles greift ineinander</h2>
              <p className="text-left margin-20-top">
                Das Wertpapiergeschäft unserer Kunden wird sowohl in Deutschland
                als auch global von immer stärkerer Regulierung bestimmt, von
                anhaltendem Niedrigzinsumfeld und hohem Kostensenkungsdruck.
                Anforderungen wie MiFID II / MiFIR, PRIIPs und das
                Finanzmarktnovellierungsgesetz, die Harmonisierung der
                europäischen Wertpapierabwicklung und neue technologische Trends
                wirken sich auf die Themenfelder unserer Kunden entlang des
                ganzen Wertpapierprozesses aus. Es ist also nur konsequent,
                unser Beratungsangebot ganzheitlich zu gestalten, damit so viele
                Prozesse wie möglich sinnvoll ineinandergreifen.
              </p>
            </div>
          </div>
          <div className="row margin-60-top margin-xs-20-top">
            <div className="col-md-5">
              <h3 className="h3">
                Unsere Themen rund um Fachberatung im Wertpapiergeschäft:
              </h3>
            </div>
            <div className="col-md-7" />
          </div>
          <div className="row ">
            <div className="col-md-6 margin-100-top margin-xs-40-top">
              <FokusthemaPreview
                url={graphQlResult.edges[0].node.fokusthemenWertpapier[0].url}
                header={
                  graphQlResult.edges[0].node.fokusthemenWertpapier[0]
                    .uberschriftGanzOben
                }
                subheader={
                  graphQlResult.edges[0].node.fokusthemenWertpapier[0].subheader
                }
                color={'--orange-pink'}
                icon={graphQlResult.edges[0].node.fokusthemenWertpapier[0].icon}
                overlayElement={
                  <ContentfulMarkdownText
                    text="Kundenbindung und Effizienz in der Bestandsführung "
                    styleClasses="h4"
                  />
                }
              />
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <FokusthemaPreview
                    url={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[1].url
                    }
                    header={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[1]
                        .uberschriftGanzOben
                    }
                    subheader={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[1]
                        .subheader
                    }
                    color={'--pink-orange'}
                    icon={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[1].icon
                    }
                    overlayElement={
                      <ContentfulMarkdownText
                        text="Kundenbindung und Effizienz in der Bestandsführung "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-4" />
            </div>
            <div className="col-md-6">
              <div className="row margin-xs-20-top">
                <div className="col-md-2" />
                <div className="col-12 col-md-8">
                  <FokusthemaPreview
                    url={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[2].url
                    }
                    header={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[2]
                        .uberschriftGanzOben
                    }
                    subheader={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[2]
                        .subheader
                    }
                    color={'--grey-orange'}
                    icon={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[2].icon
                    }
                    overlayElement={
                      <ContentfulMarkdownText
                        text="Kundenbindung und Effizienz in der Bestandsführung "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
                <div className="col-md-2" />
              </div>
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12">
                  <FokusthemaPreview
                    url={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[3].url
                    }
                    header={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[3]
                        .uberschriftGanzOben
                    }
                    subheader={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[3]
                        .subheader
                    }
                    color={'--blue-yellow'}
                    icon={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[3].icon
                    }
                    overlayElement={
                      <ContentfulMarkdownText
                        text="Kundenbindung und Effizienz in der Bestandsführung "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-end negative-margin-40-top margin-xs-20-top">
            <div className="col-12 col-md-5">
              <div className="row">
                <div className="col-md-2" />
                <div className="col-12 col-md-10">
                  <FokusthemaPreview
                    url={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[4].url
                    }
                    header={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[4]
                        .uberschriftGanzOben
                    }
                    subheader={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[4]
                        .subheader
                    }
                    color={'--yellow-blue'}
                    icon={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[4].icon
                    }
                    overlayElement={
                      <ContentfulMarkdownText
                        text="Kundenbindung und Effizienz in der Bestandsführung "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row margin-xs-20-top">
                <div className="col-md-10">
                  <FokusthemaPreview
                    url={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[5].url
                    }
                    header={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[5]
                        .uberschriftGanzOben
                    }
                    subheader={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[5]
                        .subheader
                    }
                    color={'--grey-blue'}
                    icon={
                      graphQlResult.edges[0].node.fokusthemenWertpapier[5].icon
                    }
                    overlayElement={
                      <ContentfulMarkdownText
                        text="Kundenbindung und Effizienz in der Bestandsführung "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
          <div className="margin-100-top margin-xs-40-top">
            <ReferenzAndDownload />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderWertpapierTemplate

export const pageQuery = graphql`
  query BeratungsfelderWertQuery {
    allContentfulZuordnungFokusthemen {
      edges {
        node {
          fokusthemenWertpapier {
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
    wertpapierImageSharp: imageSharp(id: { regex: "/Wertpapier/" }) {
      sizes(quality: 100, maxWidth: 2000, maxHeight: 1000, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    iconImageSharp: imageSharp(id: { regex: "/fachberatung/" }) {
      sizes(quality: 100, maxWidth: 130, maxHeight: 143, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    processImageSharp: imageSharp(id: { regex: "/fb2/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    process2ImageSharp: imageSharp(id: { regex: "/fb3/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
