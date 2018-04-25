import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import CarrerOffersCarousel from '../../components/CarrerOffersCarousel'
import CarrerOfferCarouselBox from '../../components/CarrerOfferCarouselBox'
import SiteHeader from '../../components/SiteHeader'
import SiteHeaderContent from '../../components/SiteHeaderContent'
import TestimonialLarge from '../../components/TestimonialLarge'
import ContentfulImage from '../../components/ContentfulImage'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'
import HtmlHeader from '../../components/HtmlHeader'
import LinkButton from '../../components/buttons/LinkButton'
import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'

import StorageHelper from '../../utils/storageHelper'

import './style.scss'

class JobsBewerbungTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteJobsBewerbung
    const stellenAnzeigen = this.props.pathContext.stellenAnzeigen

    const { location } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <SiteHeader
          title={graphQlResult.hauptueberschrift}
          titleImage={this.props.data.imageTitelBildSharp}
          titleImageSmall={this.props.data.imageTitelBildKleinSharp}
        />

        <SiteHeaderContent
          title={graphQlResult.beschreibungTitel}
          subtitle={graphQlResult.beschreibungUntertitel}
          text1={graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1}
          text2={graphQlResult.beschreibungAbsatz2.beschreibungAbsatz2}
        />

        <div className="container margin-80-top">
          <CarrerOfferCarouselBox
            titel={graphQlResult.ueberschriftStellenanzeigen}
            stellenAnzeigen={stellenAnzeigen}
            buttonText={'ALLE JOBS'}
            {...this.props}
          />
        </div>

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <h3 className="h2">
                {graphQlResult.ueberschriftAnsprechpartnerBewerbungen}
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
              <Img
                sizes={
                  this.props.data.ansprechpartnerEinsBildSharp != null
                    ? this.props.data.ansprechpartnerEinsBildSharp.sizes
                    : null
                }
              />
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="d-block d-md-none margin-20-top" />
              <Img
                sizes={
                  this.props.data.ansprechpartnerZweiBildSharp != null
                    ? this.props.data.ansprechpartnerZweiBildSharp.sizes
                    : null
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-9 col-lg-5 offset-lg-1">
              <ContentfulMarkdownText
                text={
                  graphQlResult.beschreibungAnsprechpartnerBewerbungen
                    .beschreibungAnsprechpartnerBewerbungen
                }
                styleClasses="margin-20-top"
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top">
          <div className="row">
            <div className="col">
              <h2 className="h6">
                {graphQlResult.bewerbungsprozessUntertitel}
              </h2>
              <h3 className="h2 margin-40-bottom">
                {graphQlResult.bewerbungsprozessTitel}
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="row">
                <div className="col-12 col-md-10 order-1">
                  <div className="row d-flex align-items-center">
                    <div className="col-2">
                      <p className="display-3 text-info bold-font">1</p>
                    </div>

                    <div className="col-12 col-md-8">
                      <h4>{graphQlResult.bewerbungsprozessSchritt1Titel}</h4>
                    </div>
                    <div className="col-12 col-md-2" />
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-10">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt1Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p>
                        {
                          graphQlResult.bewerbungsprozessSchritt1Beschreibung
                            .bewerbungsprozessSchritt1Beschreibung
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2 order-2" />
                <div className="col-12 col-md-2 order-2" />
                <div className="col-12 col-md-10 order-3 justify-content-end">
                  <div className="row d-none d-md-block filler-box-two">
                    <div className="col">
                      <p className="filler" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <p className="display-3 text-info bold-font">3</p>
                    </div>

                    <div className="col-12 col-md-8">
                      <h4>{graphQlResult.bewerbungsprozessSchritt3Titel}</h4>
                    </div>
                    <div className="col-12 col-md-2" />
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-10">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt3Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
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

            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="row">
                <div className="col-12 col-md-10 order-2">
                  <div className="row d-none d-md-block filler-box">
                    <div className="col">
                      <p className="filler" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <p className="display-3 text-info bold-font">2</p>
                    </div>

                    <div className="col-12 col-md-8">
                      <h4>{graphQlResult.bewerbungsprozessSchritt2Titel}</h4>
                    </div>
                    <div className="col-12 col-md-2" />
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-10">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt2Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p>
                        {
                          graphQlResult.bewerbungsprozessSchritt2Beschreibung
                            .bewerbungsprozessSchritt2Beschreibung
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-2 order-3" />
                <div className="col-12 col-md-2 order-3" />

                <div className="col-12 col-md-10 order-4">
                  <div className="row d-none d-md-block filler-box-two">
                    <div className="col">
                      <p className="filler" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <p className="display-3 text-info bold-font">4</p>
                    </div>

                    <div className="col-12 col-md-8">
                      <h4>{graphQlResult.bewerbungsprozessSchritt4Titel}</h4>
                    </div>
                    <div className="col-12 col-md-2" />
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-10">
                      <ContentfulImage
                        imageFile={graphQlResult.bewerbungsprozessSchritt4Bild}
                        styleClasses="img-fluid padding-sm-top-bottom"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
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

            <div className="col-12 order-1 d-block d-md-none">
              <div className="row d-flex align-items-center">
                <div className="col-2">
                  <p className="display-3 text-info bold-font">1</p>
                </div>

                <div className="col-10">
                  <h4>{graphQlResult.bewerbungsprozessSchritt1Titel}</h4>
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

            <div className="col-12 order-3 d-block d-md-none margin-60-top">
              <div className="row d-none d-md-block filler-box-two">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <p className="display-3 text-info bold-font">3</p>
                </div>

                <div className="col-10">
                  <h4>{graphQlResult.bewerbungsprozessSchritt3Titel}</h4>
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

            <div className="col-12 order-2 d-block d-md-none margin-60-top">
              <div className="row d-none d-md-block filler-box">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <p className="display-3 text-info bold-font">2</p>
                </div>

                <div className="col-10">
                  <h4>{graphQlResult.bewerbungsprozessSchritt2Titel}</h4>
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

            <div className="col-12 order-4 d-block d-md-none margin-60-top">
              <div className="row d-none d-md-block filler-box-two">
                <div className="col">
                  <p className="filler" />
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <p className="display-3 text-info bold-font">4</p>
                </div>

                <div className="col-10">
                  <h4>{graphQlResult.bewerbungsprozessSchritt4Titel}</h4>
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

        <div className="container bg-orange-light margin-100-top padding-md-top-bottom">
          <div className="row">
            <div className="col text-center">
              <p className="h4 text-primary">
                {graphQlResult.callToActionUntenUeberschrift}
              </p>
              <ContentfulMarkdownText
                text={graphQlResult.callToActionUntenText.callToActionUntenText}
                styleClasses="d-block d-md-none w-100"
              />
              <ContentfulMarkdownText
                text={graphQlResult.callToActionUntenText.callToActionUntenText}
                styleClasses="d-none d-md-block w-75 mx-auto"
              />
              <div className="row">
                <div className="col-12 col-md-1" />
                <div className="col-12 col-md-5 padding-md-top text-md-right">
                  <LinkButton
                    text="AUF FREIEN JOB BEWERBEN"
                    path="/jobs"
                    styleSpan="space-button-left-right w-100"
                  />
                </div>
                <div className="col-12 col-md-5 padding-md-top text-md-left">
                  <ExternalLinkButton
                    text={
                      graphQlResult.linkZurInitiativBewerbung.linkBezeichnung
                    }
                    _href={
                      graphQlResult.linkZurInitiativBewerbung
                        .linkZurExternenQuelle.linkZurExternenQuelle
                    }
                    _target="_blank"
                    styleSpan="space-button-left-right w-100"
                  />
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
  query jobsBewerbungQuery(
    $id: String!
    $titelbildId: String!
    $titelbildKleinId: String!
    $ansprechpartnerEinsBildId: String!
    $ansprechpartnerZweiBildId: String!
  ) {
    contentfulSeiteJobsBewerbung(id: { eq: $id }) {
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
      ueberschriftStellenanzeigen
      ueberschriftAnsprechpartnerBewerbungen
      erstesBildAnsprechpartnerBewerbungen {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      zweitesBildAnsprechpartnerBewerbungen {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      beschreibungAnsprechpartnerBewerbungen {
        beschreibungAnsprechpartnerBewerbungen
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
      callToActionUntenUeberschrift
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
    imageTitelBildSharp: imageSharp(id: { regex: $titelbildId }) {
      sizes(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    imageTitelBildKleinSharp: imageSharp(id: { regex: $titelbildKleinId }) {
      sizes(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    ansprechpartnerEinsBildSharp: imageSharp(
      id: { regex: $ansprechpartnerEinsBildId }
    ) {
      sizes(maxWidth: 2000, maxHeight: 1335, quality: 60, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    ansprechpartnerZweiBildSharp: imageSharp(
      id: { regex: $ansprechpartnerZweiBildId }
    ) {
      sizes(maxWidth: 2000, maxHeight: 1335, quality: 60, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
