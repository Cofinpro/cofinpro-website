import React from 'react'

import HtmlHeader from '../../../components/HtmlHeader'

import RelevanteLinks from '../../../components/relevanteLinks'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'

import StockphotoWithExternalLink from '../../../components/images/StockphotoWithExternalLink'

import PageIntroText from '../../../components/text/PageIntroText'

import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
} from '../../../components/images/ImageWrapper'

class FokusthemenDetailTeamplate extends React.Component {
  render() {
    const graphQlResult = this.props.data.contentfulFokusthema

    let linksAndNamesForRevelantLinks = []

    for (let i = 0; i < graphQlResult.relevanteBeratungsfelder.length; ++i) {
      if (graphQlResult.relevanteBeratungsfelder[i] === 'Managementberatung') {
        linksAndNamesForRevelantLinks.push({
          title: graphQlResult.relevanteBeratungsfelder[i],
          url: '/beratungsfelder/management',
        })
      }
      if (graphQlResult.relevanteBeratungsfelder[i] === 'Kreditgeschäft') {
        linksAndNamesForRevelantLinks.push({
          title: graphQlResult.relevanteBeratungsfelder[i],
          url: '/beratungsfelder/kredit',
        })
      }
      if (graphQlResult.relevanteBeratungsfelder[i] === 'Wertpapiergeschäft') {
        linksAndNamesForRevelantLinks.push({
          title: graphQlResult.relevanteBeratungsfelder[i],
          url: '/beratungsfelder/wertpapier',
        })
      }
      if (graphQlResult.relevanteBeratungsfelder[i] === 'Technologieberatung') {
        linksAndNamesForRevelantLinks.push({
          title: graphQlResult.relevanteBeratungsfelder[i],
          url: '/beratungsfelder/technologie',
        })
      }
    }

    var srcOficonTopLeft =
      '/img/icons/fokusthema/' + graphQlResult.icon.toLowerCase() + '-color.png'

    let stockImages = [
      this.props.data.stockImageOne,
      this.props.data.stockImageTwo,
      this.props.data.stockImageThree,
      this.props.data.stockImageFour,
    ]

    let medien = []

    if (graphQlResult.verlinkteVeroeffentlichungen !== null) {
      for (
        let i = 0;
        i < graphQlResult.verlinkteVeroeffentlichungen.length;
        ++i
      ) {
        let veroeffentlichungen = graphQlResult.verlinkteVeroeffentlichungen[i]
        if (veroeffentlichungen !== null) {
          if (veroeffentlichungen.urlDerVerffentlichung !== null) {
            medien.push({
              hrefLink: veroeffentlichungen.urlDerVerffentlichung,
              header: veroeffentlichungen.ueberschrift,
              subHeader: veroeffentlichungen.unterUeberschrift,
            })
          }
          if (veroeffentlichungen.pdfDatei !== null) {
            medien.push({
              hrefLink: `/pdf/contentful/${
                veroeffentlichungen.pdfDatei.id
              }.pdf`,
              header: veroeffentlichungen.ueberschrift,
              subHeader: veroeffentlichungen.unterUeberschrift,
            })
          }
        }
      }
    }

    if (graphQlResult.verlinktePressemeldungen !== null) {
      for (let i = 0; i < graphQlResult.verlinktePressemeldungen.length; ++i) {
        let pressemeldung = graphQlResult.verlinktePressemeldungen[i]
        if (pressemeldung !== null) {
          medien.push({
            hrefLink: `/pressemeldung/${pressemeldung.urlDerSeite}`,
            header: pressemeldung.ueberschrift,
            subHeader: pressemeldung.unteruebrschrift,
          })
        }
      }
    }

    if (graphQlResult.verlinkteDownloads !== null) {
      for (let i = 0; i < graphQlResult.verlinkteDownloads.length; ++i) {
        let download = graphQlResult.verlinkteDownloads[i]
        if (download !== null && download.datei !== null) {
          medien.push({
            hrefLink: `/pdf/contentful/${download.datei.id}.pdf`,
            header: download.beschriftungDesDownloads,
          })
        }
      }
    }

    let seoTitel = graphQlResult.uberschriftGanzOben
    let seoDescription = seoTitel

    if (
      graphQlResult.headline !== undefined &&
      graphQlResult.headline !== null
    ) {
      seoDescription = graphQlResult.headline.headline
    }

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: 'Fokusthema: ' + seoTitel,
            description: seoDescription,
          }}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7">
              <div className="row">
                <div className="col-6 col-md-4">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={srcOficonTopLeft}
                  />
                </div>
                <div className="col-6 col-md-7" />
              </div>
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12">
                  <h1 className="h1">{graphQlResult.uberschriftGanzOben}</h1>
                  <PageIntroText
                    content={{ text: graphQlResult.headline.headline }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-5">
              <div className="row">
                <div className="col-12">
                  {/*<RelevanteLinks
                    title="relevante beratungsfelder"
                    relevanteLinks={linksAndNamesForRevelantLinks}
                  />*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 margin-xs-80-top">
              <h2 className="h2">Die Herausforderung</h2>
              <div className="blue-bullet">
                {graphQlResult.herausforderung !== undefined &&
                graphQlResult.herausforderung !== null ? (
                  <ContentfulMarkdownText
                    text={graphQlResult.herausforderung.herausforderung}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-40-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 offset-md-6 col-md-6 margin-xs-40-top">
              <h2 className="h2">Unser Lösungsansatz</h2>
              <div className="blue-bullet">
                {graphQlResult.loesungsansatz !== undefined &&
                graphQlResult.loesungsansatz !== null ? (
                  <ContentfulMarkdownText
                    text={graphQlResult.loesungsansatz.loesungsansatz}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-40-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h2 className="h2">Ihr Nutzen</h2>
              <div className="blue-bullet">
                {graphQlResult.nutzen !== undefined &&
                graphQlResult.nutzen !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.nutzen.nutzen} />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {medien.length > 0 && (
          <div className="container margin-120-top margin-xs-80-top">
            <div className="row d-md-flex">
              <div className="col-12 col-md-6">
                <StockphotoWithExternalLink
                  content={medien}
                  images={stockImages}
                  indexOfElelement={0}
                />
              </div>
              <div className="col-md-6 col-12 margin-xs-20-top">
                <div className="row">
                  <div className="col-12 col-md-4" />
                  <div className="col-12 col-md-8">
                    <StockphotoWithExternalLink
                      content={medien}
                      images={stockImages}
                      indexOfElelement={1}
                    />
                  </div>
                </div>
                <div className="row margin-40-top margin-xs-20-top">
                  <div className="col-md-8 col-12">
                    <StockphotoWithExternalLink
                      content={medien}
                      images={stockImages}
                      indexOfElelement={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {medien.length > 3 && (
          <div className="container margin-40-top margin-xs-20-top">
            <div className="row">
              <div className="col-12 col-md-6 order-2 order-md-1 margin-xs-80-top" />
              <div className="col-12 col-md-6 order-1 order-md-2">
                <StockphotoWithExternalLink
                  content={medien}
                  images={stockImages}
                  indexOfElelement={3}
                />
              </div>
            </div>
          </div>
        )}

        <ReferenzAndDownload
          style={{ container: 'margin-120-top margin-xs-80-top' }}
          content={{
            right: {
              header: 'Referenzprojekte',
              description:
                'Welche Projekte haben wir im Umfeld unserer Fokusthemen bereits gemeistert und was war das Kundenziel? Welche Schritte waren nötig, welchen Beitrag konnten wir leisten und welchen Nutzen haben wir bewirkt? Hier erfahren Sie es anhand einer Auswahl ' +
                graphQlResult.uberschriftGanzOben +
                '.',
              button: {
                text: 'ALLE REFERENZEN',
                path: '/projekte/managementberatung',
              },
            },
            left: {
              header: 'Medien',
              description:
                'Wissen soll man teilen. Unsere Einschätzungen rund um spannende Fragen für Fachmedien aufzuschreiben oder in Form von Pressemitteilungen kundzutun, das lassen wir uns nicht nehmen. Hier finden Sie sämtliche Veröffentlichungen zum Thema ' +
                graphQlResult.uberschriftGanzOben +
                '.',
              button: {
                text: 'ALLE PUBLIKATIONEN',
                path: '/news-medien/alle-beratungsfelder',
              },
            },
          }}
        />
      </div>
    )
  }
}

export default FokusthemenDetailTeamplate

export const pageQuery = graphql`
  query fokusthemaQuery($id: String!) {
    contentfulFokusthema(id: { eq: $id }) {
      id
      url
      icon
      uberschriftGanzOben
      headline {
        headline
      }
      herausforderung {
        herausforderung
      }
      loesungsansatz {
        loesungsansatz
      }
      nutzen {
        nutzen
      }
      relevanteBeratungsfelder
      verlinkteVeroeffentlichungen {
        id
        ueberschrift
        unterUeberschrift
        urlDerVerffentlichung
        pdfDatei {
          id
          title
          description
        }
      }
      verlinktePressemeldungen {
        id
        ueberschrift
        unteruebrschrift
        urlDerSeite
      }
      verlinkteDownloads {
        id
        beschriftungDesDownloads
        datei {
          id
          title
          description
        }
      }
    }
    stockImageOne: imageSharp(id: { regex: "/fokusthema-stockbild-b24/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageTwo: imageSharp(id: { regex: "/fokusthema-stockbild-b14/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageThree: imageSharp(id: { regex: "/fokusthema-stockbild-a26/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageFour: imageSharp(id: { regex: "/fokusthema-stockbild-b2/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
