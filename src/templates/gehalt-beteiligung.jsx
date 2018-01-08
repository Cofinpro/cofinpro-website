import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Benefits from '../components/Benefits'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import Testimonial from '../components/Testimonial'
import ContentfulImage from '../components/ContentfulImage'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'
import ContentBoxStyleOne from '../components/ContentBoxStyleOne'

class GehaltBeteiligungTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulGehaltBenefits

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <Helmet
          title={graphQlResult.metaData.title}
          link={[{ rel: 'canonical', href: this.getCurrentUrl() }]}
          meta={[
            {
              property: 'og:title',
              content: `${graphQlResult.metaData.title}`,
            },
            {
              property: 'Keywords',
              content: `${graphQlResult.metaData.keywords.keywords}`,
            },
            {
              property: 'Description',
              content: `${graphQlResult.metaData.description.description}`,
            },
            {
              property: 'og:description',
              content: `${graphQlResult.metaData.description.description}`,
            },
          ]}
        />

        <SiteHeader
          title={graphQlResult.hauptueberschrift}
          imageFile={graphQlResult.bildUnterHauptueberschrift}
          imageSmall={graphQlResult.titelbildKlein}
        />

        <SiteHeaderContent
          title={graphQlResult.titelBeschreibung}
          subtitle={graphQlResult.untertitelBeschreibung}
          text1={
            graphQlResult.absatz1Beschreibung
              ? graphQlResult.absatz1Beschreibung.absatz1Beschreibung
              : null
          }
          text2={
            graphQlResult.absatz2Beschreibung
              ? graphQlResult.absatz2Beschreibung.absatz2Beschreibung
              : null
          }
        />

        <Benefits
          title={graphQlResult.vorteile.titel}
          img1={graphQlResult.vorteile.bildVorteil1}
          text1={graphQlResult.vorteile.textVorteil1.textVorteil1}
          img2={graphQlResult.vorteile.bildVorteil2}
          text2={graphQlResult.vorteile.textVorteil2.textVorteil2}
          img3={graphQlResult.vorteile.bildVorteil3}
          text3={graphQlResult.vorteile.textVorteil3.textVorteil3}
        />

        {graphQlResult.artenVonStudenten == null ||
        graphQlResult.artenVonStudenten.length === 0 ? (
          <div className="container padding-md-bottom padding-lg-top">
            <div className="row">
              <div className="col-12 col-md-5">
                {graphQlResult.artenVonStudenten == null ||
                graphQlResult.artenVonStudenten.length === 0 ? (
                  <ContentBoxStyleOne
                    title={graphQlResult.infoboxLinksObenTitel}
                    subtitle={graphQlResult.infoboxLinksObenUntertitel}
                    image={graphQlResult.infoboxLinksObenBild}
                    paragraphs={[
                      graphQlResult.infoboxLinksObenBeschreibung
                        .infoboxLinksObenBeschreibung,
                      graphQlResult.infoboxLinksObenBeschreibungAbsatz2
                        .infoboxLinksObenBeschreibungAbsatz2,
                    ]}
                  />
                ) : null}
              </div>

              <div className="col-12 col-md-1" />

              <div className="col-12 col-md-5 padding-lg-top">
                <div className="d-none d-md-block filler-box">
                  <p className="filler" />
                </div>

                {graphQlResult.artenVonStudenten == null ||
                graphQlResult.artenVonStudenten.length === 0 ? (
                  <ContentBoxStyleOne
                    title={graphQlResult.infoboxRechtsObenTitel}
                    subtitle={graphQlResult.infoboxRechtsObenUntertitel}
                    image={graphQlResult.infoboxRechtsObenBild}
                    paragraphs={[
                      graphQlResult.infoboxRechtsObenBeschreibung
                        .infoboxRechtsObenBeschreibung,
                    ]}
                  />
                ) : null}
              </div>

              <div className="col-12 col-md-1" />
            </div>
          </div>
        ) : null}

        {graphQlResult.artenVonStudenten == null ||
        graphQlResult.artenVonStudenten.length === 0 ? (
          <div className="container padding-md-top-bottom">
            <div className="row">
              <div className="col-12 col-md-1" />

              <div className="col-12 col-md-5">
                {graphQlResult.artenVonStudenten == null ||
                graphQlResult.artenVonStudenten.length === 0 ? (
                  <ContentBoxStyleOne
                    title={graphQlResult.infoboxLinksUntenTitel}
                    subtitle={graphQlResult.infoboxLinksUntenUntertitel}
                    image={graphQlResult.infoboxLinksUntenBild}
                    paragraphs={[
                      graphQlResult.infoboxLinksUntenBeschreibung
                        .infoboxLinksUntenBeschreibung,
                    ]}
                  />
                ) : null}
              </div>

              <div className="col-12 col-md-1" />

              <div className="col-12 col-md-5 padding-lg-top">
                <div className="d-none d-md-block filler-box">
                  <p className="filler" />
                </div>

                <Testimonial
                  title={graphQlResult.testimonial.ueberschrift}
                  text={graphQlResult.testimonial.zitat.zitat}
                  author={graphQlResult.testimonial.autor}
                  authorTitle={graphQlResult.testimonial.autorTitel}
                  videoUrl={graphQlResult.testimonial.linkVonYouTubeVideo}
                  imageFile={graphQlResult.testimonial.bildTestimonial}
                />
              </div>
            </div>
          </div>
        ) : null}

        {graphQlResult.artenVonStudenten != null &&
        graphQlResult.artenVonStudenten.length > 0 ? (
          <div className="container padding-md-top-bottom">
            <div className="row">
              <div className="col-12 col-md-6">
                {graphQlResult.artenVonStudenten.length > 0 ? (
                  <div className="padding-md-top-bottom">
                    <p className="h4 padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[0].ueberschrift}
                    </p>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[0].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>

              <div className="col-12 col-md-6">
                {graphQlResult.artenVonStudenten.length > 1 ? (
                  <div className="padding-md-top-bottom">
                    <p className="h4 padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[1].ueberschrift}
                    </p>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[1].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
                {graphQlResult.artenVonStudenten.length > 2 ? (
                  <div className="padding-md-top-bottom">
                    <p className="h4 padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[2].ueberschrift}
                    </p>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[2].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                {graphQlResult.artenVonStudenten.length > 2 ? (
                  <div className="padding-md-top-bottom">
                    <p className="h4 padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[3].ueberschrift}
                    </p>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[3].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>

              <div className="col-12 col-md-6">
                {graphQlResult.artenVonStudenten.length > 2 ? (
                  <div className="padding-md-top-bottom">
                    <p className="h4 padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[4].ueberschrift}
                    </p>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[4].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                {graphQlResult.artenVonStudenten.length > 2 ? (
                  <div className="padding-md-top-bottom">
                    <p className="h4 padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[5].ueberschrift}
                    </p>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[5].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>

              <div className="col-12 col-md-6" />
            </div>

            <div className="row">
              <div className="col-12 col-md-6 padding-md-top-bottom">
                <Testimonial
                  title={graphQlResult.testimonial.ueberschrift}
                  text={graphQlResult.testimonial.zitat.zitat}
                  author={graphQlResult.testimonial.autor}
                  authorTitle={graphQlResult.testimonial.autorTitel}
                  videoUrl={graphQlResult.testimonial.linkVonYouTubeVideo}
                  imageFile={graphQlResult.testimonial.bildTestimonial}
                />
              </div>
              <div className="col-12 col-md-6" />
            </div>
          </div>
        ) : null}

        {/*<div className="container padding-md-top-bottom text-center">
                    <div className="row padding-md-top-bottom">
                        <div className="col">
                            <p>PRIVAT NUTZBARE SONDERLEISTUNGEN</p>
                            <p className="h1">Die richtige Ausstattung für flexible Arbeitsplatzmodelle</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-3 d-block d-md-none"></div>
                        <div className="col-5 col-md-3">
                            <img src={pathPrefix + '/img/icon_hand_star.png'} className="img-fluid" />
                            <p className="sub-line">Lorem ipsum dolor sit amet, consetetur</p>
                        </div>
                        <div className="col-3 d-block d-md-none"></div>
                        <div className="d-none d-md-block col-12 col-md-1 align-self-center">
                            <img src={pathPrefix + '/img/icon_plus.png'} className="img-fluid" />
                        </div>
                        <div className="col-5 col-md-3">
                            <img src={pathPrefix + '/img/icon_3_house.png'} className="img-fluid" />
                            <p className="sub-line">Lorem ipsum dolor sit amet, consetetur</p>
                        </div>
                        <div className="col-2 col-md-1 align-self-center">
                            <img src={pathPrefix + '/img/icon_plus.png'} className="img-fluid" />
                        </div>
                        <div className="col-5 col-md-3">
                            <img src={pathPrefix + '/img/icon_3_people.png'} className="img-fluid" />
                            <p className="sub-line">Lorem ipsum dolor sit amet, consetetur</p>
                        </div>
                    </div>
                </div>}*/}
      </div>
    )
  }
}

export default GehaltBeteiligungTemplate

export const pageQuery = graphql`
  query gehaltBenefitsQuery($id: String!) {
    contentfulGehaltBenefits(id: { eq: $id }) {
      id
      metaData {
        id
        title
        keywords {
          keywords
        }
        description {
          description
        }
      }
      perspektive {
        name
      }
      parent {
        id
      }
      titel
      hauptueberschrift
      bildUnterHauptueberschrift {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      titelbildKlein {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      untertitelBeschreibung
      titelBeschreibung
      absatz1Beschreibung {
        absatz1Beschreibung
      }
      absatz2Beschreibung {
        absatz2Beschreibung
      }
      vorteile {
        titel
        textVorteil1 {
          textVorteil1
        }
        bildVorteil1 {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        textVorteil2 {
          textVorteil2
        }
        bildVorteil2 {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        textVorteil3 {
          textVorteil3
        }
        bildVorteil3 {
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
      infoboxLinksObenUntertitel
      infoboxLinksObenTitel
      infoboxLinksObenBild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      infoboxLinksObenBeschreibung {
        infoboxLinksObenBeschreibung
      }
      infoboxLinksObenBeschreibungAbsatz2 {
        infoboxLinksObenBeschreibungAbsatz2
      }
      infoboxRechtsObenUntertitel
      infoboxRechtsObenTitel
      infoboxRechtsObenBild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      infoboxRechtsObenBeschreibung {
        infoboxRechtsObenBeschreibung
      }
      spaltenInfoUntertitel
      spaltenInfoTitel
      spaltenInfoTextLinks {
        spaltenInfoTextLinks
      }
      spaltenInfoBildLinks {
        file {
          url
          fileName
          contentType
        }
      }
      spaltenInfoTextMitte {
        spaltenInfoTextMitte
      }
      spaltenInfoBildMitte {
        file {
          url
          fileName
          contentType
        }
      }
      spaltenInfoTextRechts {
        spaltenInfoTextRechts
      }
      spaltenInfoBildRechts {
        file {
          url
          fileName
          contentType
        }
      }
      infoboxLinksUntenUntertitel
      infoboxLinksUntenTitel
      infoboxLinksUntenBild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      infoboxLinksUntenBeschreibung {
        infoboxLinksUntenBeschreibung
      }
      testimonial {
        titel
        ueberschrift
        zitat {
          zitat
        }
        bildTestimonial {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        linkVonYouTubeVideo
        autor
        autorTitel
        buttonText
      }
      artenVonStudenten {
        titelContentful
        ueberschrift
        beschreibung {
          beschreibung
        }
      }
    }
  }
`
