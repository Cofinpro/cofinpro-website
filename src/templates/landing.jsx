import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import PubSub from 'pubsub-js'

import Facts from '../components/Facts'
import SitePost from '../components/SitePost'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import NewsPreview from '../components/NewsPreview'
import ContentfulImage from '../components/ContentfulImage'
import SocialMediaCarousel from '../components/SocialMediaCarousel'
import CarrerOfferBox from '../components/CarrerOfferBox'
import Testimonial from '../components/Testimonial'
import HtmlHeader from '../components/HtmlHeader'
import LinkButton from '../components/buttons/LinkButton'

import StorageHelper from '../utils/storageHelper'

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

    const titelBildDesktop = this.props.pathContext.titelBildDesktop
    const titelBildMobile = this.props.pathContext.titelBildMobile
    const anzeigen = this.props.pathContext.anzeigen

    const site = get(this, 'props.data.site.siteMetadata')

    const { location } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const topNews = this.props.pathContext.topNews

    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <SiteHeader
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

        <div className="container margin-100-top">
          <div className="row">
            <div className="col text-center">
              <h2>{graphQlResult.faktenCofinpro.titel}</h2>
            </div>
          </div>
        </div>

        <Facts
          fakt1Titel={graphQlResult.faktenCofinpro.fakt1Titel}
          fakt1Text={graphQlResult.faktenCofinpro.fakt1Text}
          fakt1Image={graphQlResult.faktenCofinpro.fakt1Bild}
          fakt2Titel={graphQlResult.faktenCofinpro.fakt2Titel}
          fakt2Text={graphQlResult.faktenCofinpro.fakt2Text}
          fakt2Image={graphQlResult.faktenCofinpro.fakt2Bild}
          fakt3Titel={graphQlResult.faktenCofinpro.fakt3Titel}
          fakt3Text={graphQlResult.faktenCofinpro.fakt3Text}
          fakt3Image={graphQlResult.faktenCofinpro.fakt3Bild}
          fakt4Titel={graphQlResult.faktenCofinpro.fakt4Titel}
          fakt4Text={graphQlResult.faktenCofinpro.fakt4Text}
          fakt4Image={graphQlResult.faktenCofinpro.fakt4Bild}
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

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">
              <h2 className="h6">{graphQlResult.newsUntertitel}</h2>
              <h3 className="h2">{graphQlResult.newsTitel}</h3>
              <p className="margin-20-bottom d-block w-100 d-lg-none p-font-large-md">
                {graphQlResult.newsBeschreibung.newsBeschreibung}
              </p>
              <p className="margin-20-bottom d-none d-lg-block w-75 p-font-large-md">
                {graphQlResult.newsBeschreibung.newsBeschreibung}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-1" />
            {topNews.length > 0
              ? topNews.map((news, i) => {
                  return (
                    <div className="col-12 col-md-5" key={'news-column-' + i}>
                      <NewsPreview
                        key={'news-NewsPreview-' + i}
                        createdAt={news.node.datumFuerDieAnzeige}
                        title={news.node.ueberschrift}
                        description={
                          news.node.kurzeBeschreibung.kurzeBeschreibung
                        }
                        newsId={news.node.id}
                        imageFile={news.node.titelbild}
                        imageFileSharp={news.node.titelbildSharp}
                        url={news.node.url}
                        {...this.props}
                      />
                    </div>
                  )
                })
              : null}
            <div className="col-12 col-md-1" />
          </div>
          <div className="row margin-40-top">
            <div className="col-12 col-md-10 mx-auto">
              <LinkButton
                text="ZUR PINNWAND"
                path="/pinnwand"
                {...this.props}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="d-none d-md-block padding-lg-top-bottom">
                <p className="filler" />
              </div>
              {graphQlResult.testimonialLinkeBox !== null &&
              graphQlResult.testimonialLinkeBox.length > 0 ? (
                <Testimonial
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
              <div className="stellenangebote-box padding-md">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-9">
                    <h2 className="h6">{graphQlResult.untertitelRechteBox}</h2>
                    <h3 className="h2">{graphQlResult.titelRechteBox}</h3>
                  </div>
                </div>
                <CarrerOfferBox anzeigen={anzeigen} {...this.props} />

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
                title="facebook"
              >
                <img
                  src={pathPrefix + '/img/icons/facebook.png'}
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="http://instagram.com/cofinpro_ag"
                target="_blank"
                title="instagram"
              >
                <img
                  src={pathPrefix + '/img/icons/instagram.png'}
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://twitter.com/cofinpro_ag"
                target="_blank"
                title="twitter"
              >
                <img
                  src={pathPrefix + '/img/icons/twitter.png'}
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7sM2sP8l2E60A4rZrA6ZTQ"
                target="_blank"
                title="you tube"
              >
                <img
                  src={pathPrefix + '/img/icons/youtube.png'}
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/846504/"
                target="_blank"
                title="linkedin"
              >
                <img
                  src={pathPrefix + '/img/icons/linkedin.png'}
                  className="social-media-icon-carousel"
                />
              </a>
              <a
                href="https://www.xing.com/companies/cofinproag"
                target="_blank"
                title="xing"
              >
                <img
                  src={pathPrefix + '/img/icons/xing.png'}
                  className="social-media-icon-carousel"
                />
              </a>
            </div>
          </div>

          <div className="row justify-content-center padding-md-top">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
              <SocialMediaCarousel
                carouselId={'social-media'}
                socialMediaPosts={graphQlResult.socialMediaPosts}
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
  }
`
