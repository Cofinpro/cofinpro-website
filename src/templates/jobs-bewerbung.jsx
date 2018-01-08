import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import CarrerOffersCarousel from '../components/CarrerOffersCarousel'
import CarrerOfferCarouselBox from '../components/CarrerOfferCarouselBox'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import TestimonialLarge from '../components/TestimonialLarge'
import ContentfulImage from '../components/ContentfulImage'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'

import StorageHelper from '../utils/storageHelper'

class JobsBewerbungTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulJobsBewerbung
    const stellenAnzeigen = this.props.pathContext.stellenAnzeigen

    const { location } = this.props

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
          imageFile={graphQlResult.titelbild}
          imageSmall={graphQlResult.titelbildKlein}
        />

        <SiteHeaderContent
          title={graphQlResult.beschreibungTitel}
          subtitle={graphQlResult.beschreibungUntertitel}
          text1={graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1}
          text2={graphQlResult.beschreibungAbsatz2.beschreibungAbsatz2}
        />

        <div className="container padding-md-top-bottom margin-md-top-bottom">
          <CarrerOfferCarouselBox
            titel={graphQlResult.ueberschriftStellenanzeigen}
            stellenAnzeigen={stellenAnzeigen}
            buttonText={'MEHR JOBS ANZEIGEN'}
            {...this.props}
          />
        </div>

        <TestimonialLarge
          title={graphQlResult.testimonial.ueberschrift}
          text={graphQlResult.testimonial.zitat.zitat}
          author={graphQlResult.testimonial.autor}
          authorTitle={graphQlResult.testimonial.autorTitel}
          videoUrl={graphQlResult.testimonial.linkVonYouTubeVideo}
          imageFile={graphQlResult.testimonial.bildTestimonial}
        />

        <div className="container padding-md-top-bottom">
          <div className="row padding-md-top-bottom">
            <div className="col">
              <h2 className="h6">
                {graphQlResult.bewerbungsprozessUntertitel}
              </h2>
              <h3 className="h2">{graphQlResult.bewerbungsprozessTitel}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 d-none d-md-block">
              <div className="row">
                <div className="col-12 order-1">
                  <div className="row d-flex align-items-center">
                    <div className="col-2">
                      <p className="display-4">1</p>
                    </div>

                    <div className="col-10">
                      <p className="h4">
                        {graphQlResult.bewerbungsprozessSchritt1Titel}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt1Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                      <p>
                        {
                          graphQlResult.bewerbungsprozessSchritt1Beschreibung
                            .bewerbungsprozessSchritt1Beschreibung
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 order-3">
                  <div className="row d-none d-md-block filler-box-two">
                    <div className="col">
                      <p className="filler" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <p className="display-4">3</p>
                    </div>

                    <div className="col-10">
                      <p className="h4">
                        {graphQlResult.bewerbungsprozessSchritt3Titel}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt3Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                      <p>
                        {
                          graphQlResult.bewerbungsprozessSchritt3Beschreibung
                            .bewerbungsprozessSchritt3Beschreibung
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-2 d-none d-md-block" />

            <div className="col-12 col-md-5 d-none d-md-block">
              <div className="row">
                <div className="col-12 order-2">
                  <div className="row d-none d-md-block filler-box">
                    <div className="col">
                      <p className="filler" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <p className="display-4">2</p>
                    </div>

                    <div className="col-10">
                      <p className="h4">
                        {graphQlResult.bewerbungsprozessSchritt2Titel}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt2Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                      <p>
                        {
                          graphQlResult.bewerbungsprozessSchritt2Beschreibung
                            .bewerbungsprozessSchritt2Beschreibung
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 order-4">
                  <div className="row d-none d-md-block filler-box-two">
                    <div className="col">
                      <p className="filler" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <p className="display-4">4</p>
                    </div>

                    <div className="col-10">
                      <p className="h4">
                        {graphQlResult.bewerbungsprozessSchritt4Titel}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt4Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                      <p>
                        {
                          graphQlResult.bewerbungsprozessSchritt4Beschreibung
                            .bewerbungsprozessSchritt4Beschreibung
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 order-1 d-block d-md-none padding-md-top-bottom">
              <div className="row d-flex align-items-center">
                <div className="col-2">
                  <p className="display-4">1</p>
                </div>

                <div className="col-10">
                  <p className="h4">
                    {graphQlResult.bewerbungsprozessSchritt1Titel}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ContentfulImage
                    imageFile={graphQlResult.bewerbungsprozessSchritt1Bild}
                    styleClasses="img-fluid padding-sm-top-bottom"
                  />
                  <p>
                    {
                      graphQlResult.bewerbungsprozessSchritt1Beschreibung
                        .bewerbungsprozessSchritt1Beschreibung
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 order-3 d-block d-md-none padding-md-top-bottom">
              <div className="row d-none d-md-block filler-box-two">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <p className="display-4">3</p>
                </div>

                <div className="col-10">
                  <p className="h4">
                    {graphQlResult.bewerbungsprozessSchritt3Titel}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ContentfulImage
                    imageFile={graphQlResult.bewerbungsprozessSchritt3Bild}
                    styleClasses="img-fluid padding-sm-top-bottom"
                  />
                  <p>
                    {
                      graphQlResult.bewerbungsprozessSchritt3Beschreibung
                        .bewerbungsprozessSchritt3Beschreibung
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 order-2 d-block d-md-none padding-md-top-bottom">
              <div className="row d-none d-md-block filler-box">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <p className="display-4">2</p>
                </div>

                <div className="col-10">
                  <p className="h4">
                    {graphQlResult.bewerbungsprozessSchritt2Titel}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ContentfulImage
                    imageFile={graphQlResult.bewerbungsprozessSchritt2Bild}
                    styleClasses="img-fluid padding-sm-top-bottom"
                  />
                  <p>
                    {
                      graphQlResult.bewerbungsprozessSchritt2Beschreibung
                        .bewerbungsprozessSchritt2Beschreibung
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 order-4 d-block d-md-none padding-md-top-bottom">
              <div className="row d-none d-md-block filler-box-two">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <p className="display-4">4</p>
                </div>

                <div className="col-10">
                  <p className="h4">
                    {graphQlResult.bewerbungsprozessSchritt4Titel}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ContentfulImage
                    imageFile={graphQlResult.bewerbungsprozessSchritt4Bild}
                    styleClasses="img-fluid padding-sm-top-bottom"
                  />
                  <p>
                    {
                      graphQlResult.bewerbungsprozessSchritt4Beschreibung
                        .bewerbungsprozessSchritt4Beschreibung
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-orange-light padding-lg-top-bottom margin-lg-top-bottom">
          <div className="row">
            <div className="col text-center">
              <ContentfulMarkdownText
                text={graphQlResult.callToActionUntenText.callToActionUntenText}
                styleClasses="img-fluid h5 d-block d-md-none w-100"
              />
              <ContentfulMarkdownText
                text={graphQlResult.callToActionUntenText.callToActionUntenText}
                styleClasses="h5 d-none d-md-block w-75 mx-auto"
              />
              <div className="row">
                <div className="col-12 col-md-6 padding-md-top text-md-right">
                  <Link to={pathPrefix + '/jobs'}>
                    <span className="btn btn-outline-primary space-button-left-right">
                      AUF FREIEN JOB BEWERBEN
                    </span>
                  </Link>
                </div>
                <div className="col-12 col-md-6 padding-md-top text-md-left">
                  <a
                    href={
                      graphQlResult.linkZurInitiativBewerbung
                        .linkZurExternenQuelle.linkZurExternenQuelle
                    }
                    target="_blank"
                  >
                    <span className="btn btn-outline-primary space-button-left-right">
                      {graphQlResult.linkZurInitiativBewerbung.linkBezeichnung}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobsBewerbungTemplate

export const pageQuery = graphql`
  query jobsBewerbungQuery($id: String!) {
    contentfulJobsBewerbung(id: { eq: $id }) {
      metaData {
        title
        keywords {
          keywords
        }
        description {
          description
        }
      }
      parent {
        id
      }
      titel
      hauptueberschrift
      titelbild {
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
      beschreibungUntertitel
      beschreibungTitel
      beschreibungAbsatz1 {
        beschreibungAbsatz1
      }
      beschreibungAbsatz2 {
        beschreibungAbsatz2
      }
      ueberschriftStellenanzeigen
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
      bewerbungsprozessUntertitel
      bewerbungsprozessTitel
      bewerbungsprozessSchritt1Titel
      bewerbungsprozessSchritt1Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt1Beschreibung {
        bewerbungsprozessSchritt1Beschreibung
      }
      bewerbungsprozessSchritt2Titel
      bewerbungsprozessSchritt2Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt2Beschreibung {
        bewerbungsprozessSchritt2Beschreibung
      }
      bewerbungsprozessSchritt3Titel
      bewerbungsprozessSchritt3Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt3Beschreibung {
        bewerbungsprozessSchritt3Beschreibung
      }
      bewerbungsprozessSchritt4Titel
      bewerbungsprozessSchritt4Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bewerbungsprozessSchritt4Beschreibung {
        bewerbungsprozessSchritt4Beschreibung
      }
      textfeldKontaktdaten {
        textfeldKontaktdaten
      }
      callToActionUntenText {
        callToActionUntenText
      }
      linkZurInitiativBewerbung {
        linkBezeichnung
        linkZurExternenQuelle {
          linkZurExternenQuelle
        }
      }
    }
  }
`
