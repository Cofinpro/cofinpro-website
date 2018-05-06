import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import ThreeIconsWithText from '../../components/layouts/ThreeIconsWithText'
import Testimonial from '../../components/layouts/Testimonial'
import ContentBoxStyleOne from '../../components/layouts/ContentBoxStyleOne'

import SiteHeader from '../../components/SiteHeader'
import SiteHeaderContent from '../../components/SiteHeaderContent'
import ContentfulImage from '../../components/ContentfulImage'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'
import HtmlHeader from '../../components/HtmlHeader'

class GehaltBeteiligungTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteGehaltBenefits

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    function CreateImage(props) {
      if (typeof props.image !== 'undefined') {
        return (
          <ContentfulImage
            imageFile={props.image}
            styleClasses="img-fluid padding-md-bottom"
          />
        )
      } else {
        return null
      }
    }

    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <SiteHeader
          title={graphQlResult.hauptueberschrift}
          titleImage={this.props.data.imageTitelBildSharp}
          titleImageSmall={this.props.data.imageTitelBildKleinSharp}
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

        <ThreeIconsWithText
          title={graphQlResult.vorteile.titel}
          iconLeft={graphQlResult.vorteile.bildVorteil1}
          textLeft={graphQlResult.vorteile.textVorteil1.textVorteil1}
          iconMiddle={graphQlResult.vorteile.bildVorteil2}
          textMiddle={graphQlResult.vorteile.textVorteil2.textVorteil2}
          iconRight={graphQlResult.vorteile.bildVorteil3}
          textRight={graphQlResult.vorteile.textVorteil3.textVorteil3}
        />

        {graphQlResult.artenVonStudenten == null ||
        graphQlResult.artenVonStudenten.length === 0 ? (
          <div className="container margin-120-top">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="row">
                  <div className="col-12 col-md-10 col-lg-9">
                    <h2 className="h6">
                      {graphQlResult.infoboxLinksObenUntertitel}
                    </h2>
                    <h3 className="h2">
                      {graphQlResult.infoboxLinksObenTitel}
                    </h3>
                    <CreateImage
                      image={graphQlResult.infoboxLinksObenBild}
                      {...this.props}
                    />
                  </div>
                  <div className="col-12 col-md-2 col-lg-3" />
                  <div className="col-12 col-md-12">
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.infoboxLinksObenBeschreibung
                          .infoboxLinksObenBeschreibung
                      }
                    />
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.infoboxLinksObenBeschreibungAbsatz2
                          .infoboxLinksObenBeschreibungAbsatz2
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-2" />

              <div className="col-12 col-md-5">
                <div className="d-none d-md-block filler-box-220">
                  <p className="filler" />
                </div>
                <div className="d-block d-md-none margin-60-top">
                  <p className="filler" />
                </div>

                <div className="row">
                  <div className="col-12 col-md-10 col-lg-9">
                    <h2 className="h6">
                      {graphQlResult.infoboxRechtsObenUntertitel}
                    </h2>
                    <h3 className="h2">
                      {graphQlResult.infoboxRechtsObenTitel}
                    </h3>
                    <CreateImage
                      image={graphQlResult.infoboxRechtsObenBild}
                      {...this.props}
                    />
                  </div>
                  <div className="col-12 col-md-2 col-lg-3" />
                  <div className="col-12 col-md-12">
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.infoboxRechtsObenBeschreibung
                          .infoboxRechtsObenBeschreibung
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-2 col-lg-3" />
            </div>
          </div>
        ) : null}

        {graphQlResult.artenVonStudenten == null ||
        graphQlResult.artenVonStudenten.length === 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-1" />

              <div className="col-12 col-md-5">
                <div className="d-none d-md-block margin-100-top">
                  <p className="filler" />
                </div>
                <div className="d-block d-md-none margin-60-top">
                  <p className="filler" />
                </div>

                <div className="row">
                  <div className="col-12 col-md-10 col-lg-9">
                    <h2 className="h6">
                      {graphQlResult.infoboxLinksUntenUntertitel}
                    </h2>
                    <h3 className="h2">
                      {graphQlResult.infoboxLinksUntenTitel}
                    </h3>
                    <CreateImage
                      image={graphQlResult.infoboxLinksUntenBild}
                      {...this.props}
                    />
                  </div>
                  <div className="col-12 col-md-2 col-lg-3" />
                  <div className="col-12 col-md-12">
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.infoboxLinksUntenBeschreibung
                          .infoboxLinksUntenBeschreibung
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-1 col-lg-2" />

              <div className="col-12 col-md-5">
                <div className="d-none d-md-block filler-box-320">
                  <p className="filler" />
                </div>
                <div className="d-block d-md-none margin-60-top">
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
          <div className="container margin-120-top">
            <div className="row">
              <div className="col-12 col-md-6">
                {graphQlResult.artenVonStudenten.length > 0 ? (
                  <div className="">
                    <div className="d-block d-md-none margin-30-top" />
                    <h4 className="padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[0].ueberschrift}
                    </h4>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[0].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 offset-md-6">
                {graphQlResult.artenVonStudenten.length > 1 ? (
                  <div className="">
                    <div className="d-block d-md-none margin-40-top" />
                    <h4 className="padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[1].ueberschrift}
                    </h4>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[1].beschreibung
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
                  <div className="">
                    <div className="d-block d-md-none margin-40-top" />
                    <h4 className="padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[2].ueberschrift}
                    </h4>
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
              <div className="col-12 col-md-6 offset-md-6">
                {graphQlResult.artenVonStudenten.length > 3 ? (
                  <div className="">
                    <div className="d-block d-md-none margin-40-top" />
                    <h4 className="padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[3].ueberschrift}
                    </h4>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[3].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                {graphQlResult.artenVonStudenten.length > 4 ? (
                  <div className="">
                    <div className="d-block d-md-none margin-40-top" />
                    <h4 className="padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[4].ueberschrift}
                    </h4>
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
              <div className="col-12 col-md-6 offset-md-6">
                {graphQlResult.artenVonStudenten.length > 5 ? (
                  <div className="">
                    <div className="d-block d-md-none margin-40-top" />
                    <h4 className="padding-sm-bottom">
                      {graphQlResult.artenVonStudenten[5].ueberschrift}
                    </h4>
                    <ContentfulMarkdownText
                      text={
                        graphQlResult.artenVonStudenten[5].beschreibung
                          .beschreibung
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="row margin-120-top">
              <div className="col-12 col-md-6 offset-md-6">
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
      </div>
    )
  }
}

export default GehaltBeteiligungTemplate

export const pageQuery = graphql`
  query gehaltBenefitsQuery(
    $id: String!
    $titelbildId: String!
    $titelbildKleinId: String!
  ) {
    contentfulSeiteGehaltBenefits(id: { eq: $id }) {
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
  }
`
