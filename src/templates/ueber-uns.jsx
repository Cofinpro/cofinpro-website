import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Facts from '../components/Facts'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import ImageCarousel from '../components/ImageCarousel'
import ImageCarouselV2 from '../components/ImageCarouselV2'
import ContentfulImage from '../components/ContentfulImage'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'
import TestimonialCarousel from '../components/TestimonialCarousel'
import HtmlHeader from '../components/HtmlHeader'

class UeberUnsTemplate extends React.Component {
  componentDidMount() {
    $('#carousel-auszeichnungen').carousel({
      interval: 2000,
    })
  }

  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteUeberUns

    const titelBildDesktop = this.props.pathContext.titelBildDesktop
    const titelBildMobile = this.props.pathContext.titelBildMobile

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <SiteHeader
          title={graphQlResult.hauptueberschrift}
          titleImage={titelBildDesktop}
          titleImageSmall={titelBildMobile}
        />

        <SiteHeaderContent
          title={graphQlResult.beschreibungTitel}
          subtitle={graphQlResult.beschreibungUntertitel}
          text1={
            graphQlResult.beschreibungAbsatz1
              ? graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1
              : null
          }
          text2={
            graphQlResult.beschreibungAbsatz2
              ? graphQlResult.beschreibungAbsatz2.beschreibungAbsatz2
              : null
          }
        />

        <div className="container margin-100-top">
          <div className="row text-center">
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-8">
              <p className="">{graphQlResult.ueberschriftVon3SpaltenTop}</p>
            </div>
            <div className="col-12 col-md-2" />
          </div>

          <div className="row justify-content-center text-center padding-md-top-bottom">
            <div className="col-6 col-md-4">
              <h4 className="p padding-sm-bottom">
                {graphQlResult.spaltenTopTitelLinks}
              </h4>
              <ContentfulImage
                imageFile={graphQlResult.spaltenTopBildLinks}
                styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
              />
              <ContentfulImage
                imageFile={graphQlResult.spaltenTopBildLinks}
                styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
              />
              <p className="">
                {graphQlResult.spaltenTopTextLinks.spaltenTopTextLinks}
              </p>
            </div>
            <div className="col-6 col-md-4">
              <h4 className="p padding-sm-bottom">
                {graphQlResult.spaltenTopTitelMitte}
              </h4>
              <ContentfulImage
                imageFile={graphQlResult.spaltenTopBildMitte}
                styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
              />
              <ContentfulImage
                imageFile={graphQlResult.spaltenTopBildMitte}
                styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
              />
              <p className="">
                {graphQlResult.spaltenTopTextMitte.spaltenTopTextMitte}
              </p>
            </div>
            <div className="col-6 col-md-4">
              <h4 className="p padding-sm-bottom">
                {graphQlResult.spaltenTopTitelRechts}
              </h4>
              <ContentfulImage
                imageFile={graphQlResult.spaltenTopBildRechts}
                styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
              />
              <ContentfulImage
                imageFile={graphQlResult.spaltenTopBildRechts}
                styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
              />
              <p className="">
                {graphQlResult.spaltenTopTextRechts.spaltenTopTextRechts}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-none d-md-block margin-60-top">
              <div className="row justify-content-end">
                <div className="col-12 col-lg-10 order-1">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="h6">
                        {graphQlResult.ersteTextboxUntertitel}
                      </h2>
                      <h3 className="h2">{graphQlResult.ersteTextboxTitel}</h3>
                      <ContentfulMarkdownText
                        text={
                          graphQlResult.ersteTextboxInhalt.ersteTextboxInhalt
                        }
                        {...this.props}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-10 order-3">
                  <div className="row d-none d-md-block filler-box-120">
                    <div className="col-12">
                      <p className="filler" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h2 className="h6">
                        {graphQlResult.dritteTextboxUntertitel}
                      </h2>
                      <h3 className="h2">{graphQlResult.dritteTextboxTitel}</h3>
                      <ContentfulMarkdownText
                        text={
                          graphQlResult.dritteTextboxInhalt.dritteTextboxInhalt
                        }
                        {...this.props}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="row">
                <div className="col-12 order-2">
                  <div className="row d-none d-md-block filler-box-240 justify-content-end">
                    <div className="col-12 col-lg-10">
                      <p className="filler" />
                    </div>
                  </div>

                  <div className="row justify-content-end">
                    <div className="col-12 col-lg-10">
                      <h2 className="h6">
                        {graphQlResult.zweiteTextboxUntertitel}
                      </h2>
                      <h3 className="h2">{graphQlResult.zweiteTextboxTitel}</h3>
                      <ContentfulMarkdownText
                        text={
                          graphQlResult.zweiteTextboxInhalt.zweiteTextboxInhalt
                        }
                        {...this.props}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 order-1 d-block d-md-none margin-60-top">
              <div className="row">
                <div className="col-12">
                  <h2 className="h6">{graphQlResult.ersteTextboxUntertitel}</h2>
                  <h3 className="h2">{graphQlResult.ersteTextboxTitel}</h3>
                  <ContentfulMarkdownText
                    text={graphQlResult.ersteTextboxInhalt.ersteTextboxInhalt}
                    {...this.props}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 order-3 d-block d-md-none margin-60-top">
              <div className="row d-none d-md-block filler-box-two">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h2 className="h6">
                    {graphQlResult.dritteTextboxUntertitel}
                  </h2>
                  <h3 className="h2">{graphQlResult.dritteTextboxTitel}</h3>
                  <ContentfulMarkdownText
                    text={graphQlResult.dritteTextboxInhalt.dritteTextboxInhalt}
                    {...this.props}
                  />
                </div>
              </div>
            </div>

            <div className="col-12 order-2 d-block d-md-none margin-60-top">
              <div className="row d-none d-md-block filler-box">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h2 className="h6">
                    {graphQlResult.zweiteTextboxUntertitel}
                  </h2>
                  <h3 className="h2">{graphQlResult.zweiteTextboxTitel}</h3>
                  <ContentfulMarkdownText
                    text={graphQlResult.zweiteTextboxInhalt.zweiteTextboxInhalt}
                    {...this.props}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-100-top">
          <div className="row">
            <div className="col-12 col-md-1" />
            <div className="col-12 col-md-8">
              <h2 className="h6">{graphQlResult.raeumlichkeitenUntertitel}</h2>
              <h3 className="h2">{graphQlResult.raeumlichkeitenTitel}</h3>
              <ImageCarouselV2
                carouselId="workplace"
                contentfulImages={graphQlResult.raeumlichkeitenBilder}
                options="slide"
              />
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-1" />
            <div className="col-12 col-md-5">
              <ContentfulMarkdownText
                text={
                  graphQlResult.raeumlichkeitenBeschreibung
                    .raeumlichkeitenBeschreibung
                }
                {...this.props}
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top d-block d-md-none">
          <div className="row">
            <div className="col">
              <h2 className="h6">{graphQlResult.kollegenUntertitel}</h2>
              <h3 className="h2">{graphQlResult.kollegenTitel}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <TestimonialCarousel
                carouselId="testimonialc"
                testimonials={graphQlResult.testimonialsVonUeberUns}
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top d-none d-md-block">
          <div className="row">
            <div className="col">
              <h2 className="h6">{graphQlResult.kollegenUntertitel}</h2>
              <h3 className="h2">{graphQlResult.kollegenTitel}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padding-sm-bottom">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={graphQlResult.videoLink1.replace('/watch?v=', '/embed/')}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <p className="h4 padding-sm-bottom">
                {graphQlResult.kollegenZitat.kollegenZitat}
              </p>
              <p className="p-font-large-md">
                {graphQlResult.kollegenAuthorZitat}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 padding-sm-top-bottom">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={graphQlResult.videoLink2.replace('/watch?v=', '/embed/')}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-12 col-md-6 padding-sm-top-bottom">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={graphQlResult.videoLink3.replace('/watch?v=', '/embed/')}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6" />
            <div className="col-12 col-md-6 padding-sm-top-bottom">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={graphQlResult.videoLink4.replace('/watch?v=', '/embed/')}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-100-top">
          <div className="row justify-content-end">
            <div className="col-12 col-md-8">
              <h2 className="h6">{graphQlResult.projekteUntertitel}</h2>
              <h3 className="h2">{graphQlResult.projekteTitel}</h3>
              <ContentfulImage
                imageFile={graphQlResult.projekteBild}
                styleClasses="img-fluid"
              />
            </div>
            <div className="col-12 col-md-1" />
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-3" />
            <div className="col-12 col-md-5">
              <ContentfulMarkdownText
                text={graphQlResult.projekteBeschreibung.projekteBeschreibung}
                {...this.props}
              />
            </div>
            <div className="col-12 col-md-1" />
          </div>
        </div>

        <div className="container margin-120-top">
          <div className="row">
            <div className="col">
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

        <div className="container margin-40-top">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 text-center">
              <ContentfulImage
                imageFile={graphQlResult.standorte}
                styleClasses="img-fluid img-md-padding"
              />
              <p className="p-font-large">Unsere Standorte</p>
            </div>
            <div className="col-12 col-md-2">
              <p className="margin-80-top"> </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-12 col-md-9 col-lg-8 mx-auto align-self-center">
                  <ImageCarousel
                    carouselId="auszeichnungen"
                    contentfulImages={graphQlResult.auszeichnungenBilder}
                    options="slide"
                  />
                  <p className="text-center p-font-large padding-md-top">
                    Unsere Auszeichnungen
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1" />
          </div>
        </div>
      </div>
    )
  }
}

export default UeberUnsTemplate

export const pageQuery = graphql`
  query ueberUnsQuery($id: String!) {
    contentfulSeiteUeberUns(id: { eq: $id }) {
      id
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
      ueberschriftVon3SpaltenTop
      spaltenTopTitelLinks
      spaltenTopTextLinks {
        spaltenTopTextLinks
      }
      spaltenTopBildLinks {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      spaltenTopTitelMitte
      spaltenTopTextMitte {
        spaltenTopTextMitte
      }
      spaltenTopBildMitte {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      spaltenTopTitelRechts
      spaltenTopTextRechts {
        spaltenTopTextRechts
      }
      spaltenTopBildRechts {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      ersteTextboxUntertitel
      ersteTextboxTitel
      ersteTextboxInhalt {
        ersteTextboxInhalt
      }
      zweiteTextboxUntertitel
      zweiteTextboxTitel
      zweiteTextboxInhalt {
        zweiteTextboxInhalt
      }
      dritteTextboxUntertitel
      dritteTextboxTitel
      dritteTextboxInhalt {
        dritteTextboxInhalt
      }
      raeumlichkeitenUntertitel
      raeumlichkeitenTitel
      raeumlichkeitenBilder {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      raeumlichkeitenBeschreibung {
        raeumlichkeitenBeschreibung
      }
      kollegenUntertitel
      kollegenTitel
      kollegenZitat {
        kollegenZitat
      }
      videoLink1
      videoLink2
      videoLink3
      videoLink4
      testimonialsVonUeberUns {
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
      kollegenAuthorZitat
      projekteUntertitel
      projekteTitel
      projekteBild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      projekteBeschreibung {
        projekteBeschreibung
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
      auszeichnungenBilder {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      standorte {
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
  }
`
