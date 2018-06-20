import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import FourFactsLayout from '../../components/layouts/FourFactsLayout'
import TestimonialLayout from '../../components/layouts/TestimonialLayout'
import HeroImageLayout from '../../components/layouts/HeroImageLayout'

import SiteHeaderContent from '../../components/SiteHeaderContent'
import NewsPreviewNewest from '../../components/NewsPreviewNewest'
import ContentfulImage from '../../components/images/ContentfulImage'
import SocialMediaCarousel from '../../components/carousels/SocialMediaCarousel'
import CarrerOfferBox from '../../components/CarrerOfferBox'
import HtmlHeader from '../../components/HtmlHeader'
import LinkButton from '../../components/buttons/LinkButton'

import StorageHelper from '../../utils/storageHelper'

class LandingTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteLandingPerspektive

    const stellenAnzeigen = this.props.data.allContentfulSeiteStellenanzeige
      .edges

    const titelBildDesktop = this.props.pathContext.titelBildDesktop
    const titelBildMobile = this.props.pathContext.titelBildMobile
    const socialMediaPostBilder = this.props.pathContext.socialMediaPostBilder

    const site = get(this, 'props.data.site.siteMetadata')

    const { location } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const cofinproNews = this.props.pathContext.cofinproNews

    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <HeroImageLayout
          title={graphQlResult.hauptueberschrift}
          titleImage={titelBildDesktop}
          titleImageSmall={titelBildMobile}
        />

        <SiteHeaderContent
          title={graphQlResult.titelBeschreibung}
          subtitle={graphQlResult.untertitelBeschreibung}
          text1={graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1}
          text2={graphQlResult.beschreibungAbsatz2.beschreibungAbsatz2}
        />

        <FourFactsLayout
          content={{
            title: graphQlResult.faktenCofinpro.titel,
            columns: [
              {
                fact: graphQlResult.faktenCofinpro.fakt1Text,
                text: graphQlResult.faktenCofinpro.fakt1Titel,
                icon: graphQlResult.faktenCofinpro.fakt1Bild,
              },
              {
                fact: graphQlResult.faktenCofinpro.fakt2Text,
                text: graphQlResult.faktenCofinpro.fakt2Titel,
                icon: graphQlResult.faktenCofinpro.fakt2Bild,
              },
              {
                fact: graphQlResult.faktenCofinpro.fakt3Text,
                text: graphQlResult.faktenCofinpro.fakt3Titel,
                icon: graphQlResult.faktenCofinpro.fakt3Bild,
              },
              {
                fact: graphQlResult.faktenCofinpro.fakt4Text,
                text: graphQlResult.faktenCofinpro.fakt4Titel,
                icon: graphQlResult.faktenCofinpro.fakt4Bild,
              },
            ],
          }}
          isHeaderCentered={true}
        />

        <div className="container margin-60-top">
          <div className="row">
            <div className="col text-center">
              <LinkButton
                text="MEHR ÜBER COFINPRO"
                path="/ueber-uns"
                {...this.props}
              />
            </div>
          </div>
        </div>

        <NewsPreviewNewest
          content={{
            untertitel: graphQlResult.newsUntertitel,
            titel: graphQlResult.newsTitel,
            beschreibung: graphQlResult.newsBeschreibung.newsBeschreibung,
            news: cofinproNews,
          }}
        />

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="d-none d-md-block padding-lg-top-bottom">
                <p className="filler" />
              </div>
              {graphQlResult.testimonialLinkeBox !== null &&
              graphQlResult.testimonialLinkeBox.length > 0 ? (
                <TestimonialLayout
                  title={graphQlResult.testimonialLinkeBox[0].ueberschrift}
                  text={graphQlResult.testimonialLinkeBox[0].zitat.zitat}
                  author={graphQlResult.testimonialLinkeBox[0].autor}
                  authorTitle={graphQlResult.testimonialLinkeBox[0].autorTitel}
                  videoUrl={
                    graphQlResult.testimonialLinkeBox[0].linkVonYouTubeVideo
                  }
                  imageFile={
                    graphQlResult.testimonialLinkeBox[0].bildTestimonial
                  }
                />
              ) : null}
            </div>

            <div className="col-12 col-md-2">
              <div className="d-sm-block d-md-none margin-120-top">
                <p />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className="border-img-blue padding-md">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-9">
                    <h2 className="h6">{graphQlResult.untertitelRechteBox}</h2>
                    <h3 className="h2">{graphQlResult.titelRechteBox}</h3>
                  </div>
                </div>
                <CarrerOfferBox anzeigen={stellenAnzeigen} {...this.props} />

                <div className="row padding-sm-top">
                  <div className="col-12 col-md-9">
                    <LinkButton
                      text={graphQlResult.buttonRechteBox}
                      path="/jobs"
                      {...this.props}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <h2 className="h6">{graphQlResult.socialMediaUntertitel}</h2>
              <h3 className="h2">{graphQlResult.socialMediaTitel}</h3>
              <p className="p-font-large-md">
                {graphQlResult.socialMediaBeschreibung.socialMediaBeschreibung}
              </p>
            </div>
            <div className="col-12 text-center margin-20-top padding-sm-bottom">
              <a
                href="https://www.facebook.com/Cofinpro"
                target="_blank"
                rel="noopener"
                title="facebook"
              >
                <img
                  src={pathPrefix + '/img/icons/facebook.png'}
                  alt="cofinpro facebook profile"
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="http://instagram.com/cofinpro_ag"
                target="_blank"
                rel="noopener"
                title="instagram"
              >
                <img
                  src={pathPrefix + '/img/icons/instagram.png'}
                  alt="cofinpro instagram profile"
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://twitter.com/cofinpro_ag"
                target="_blank"
                rel="noopener"
                title="twitter"
              >
                <img
                  src={pathPrefix + '/img/icons/twitter.png'}
                  alt="cofinpro twitter profile"
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7sM2sP8l2E60A4rZrA6ZTQ"
                target="_blank"
                rel="noopener"
                title="you tube"
              >
                <img
                  src={pathPrefix + '/img/icons/youtube.png'}
                  alt="cofinpro youtube profile"
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/846504/"
                target="_blank"
                rel="noopener"
                title="linkedin"
              >
                <img
                  src={pathPrefix + '/img/icons/linkedin.png'}
                  alt="cofinpro linkedin profile"
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://www.xing.com/companies/cofinproag"
                target="_blank"
                rel="noopener"
                title="xing"
              >
                <img
                  src={pathPrefix + '/img/icons/xing.png'}
                  alt="cofinpro xing profile"
                  className="social-media-icon-carousel"
                />
              </a>
            </div>
          </div>

          <div className="row justify-content-center padding-md-top">
            <div className="col-12 col-md-10 col-lg-8">
              <SocialMediaCarousel
                carouselId={'social-media'}
                socialMediaPosts={graphQlResult.socialMediaPosts}
                sharpImages={socialMediaPostBilder}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingTemplate

export const pageQuery = graphql`
  query startseitePerspektiveQuery($id: String!) {
    contentfulSeiteLandingPerspektive(id: { eq: $id }) {
      id
      perspektive {
        name
      }
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
      untertitelBeschreibung
      titelBeschreibung
      beschreibungAbsatz1 {
        beschreibungAbsatz1
      }
      beschreibungAbsatz2 {
        beschreibungAbsatz2
      }
      faktenCofinpro {
        name
        untertitel
        titel
        fakt1Titel
        fakt1Text
        fakt1Bild {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        fakt2Titel
        fakt2Text
        fakt2Bild {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        fakt3Titel
        fakt3Text
        fakt3Bild {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        fakt4Titel
        fakt4Text
        fakt4Bild {
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
      newsUntertitel
      newsTitel
      newsBeschreibung {
        newsBeschreibung
      }
      testimonialLinkeBox {
        titel
        ueberschrift
        zitat {
          zitat
        }
        linkVonYouTubeVideo
        autor
        autorTitel
        buttonText
      }
      untertitelRechteBox
      titelRechteBox
      buttonRechteBox
      socialMediaUntertitel
      socialMediaTitel
      socialMediaBeschreibung {
        socialMediaBeschreibung
      }
      socialMediaPosts {
        titel
        headline
        bildDesPosts {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        textDesPosts {
          textDesPosts
        }
        urlDesPosts {
          urlDesPosts
        }
      }
    }
    allContentfulSeiteStellenanzeige {
      edges {
        node {
          id
          url
          metaData {
            title
            keywords {
              keywords
            }
            description {
              description
            }
          }
          ort
          befristung
          art
          titel
          zuordnungZuKompetenzen {
            name
          }
          ueberschriftGanzOben
          bildStellenanzeige {
            id
            title
            description
            file {
              url
              fileName
              contentType
            }
          }
          absatzEins {
            absatzEins
          }
          spaltenInfoTitelLinks
          spaltenInfoBeschreibungLinksLang {
            spaltenInfoBeschreibungLinksLang
          }
          spaltenInfoTitelMitte
          spaltenInfoBeschreibungMitte {
            spaltenInfoBeschreibungMitte
          }
          spaltenInfoTitelRechts
          spaltenInfoBeschreibungRechts {
            spaltenInfoBeschreibungRechts
          }
          uMantis {
            uMantis
          }
        }
      }
    }
  }
`
