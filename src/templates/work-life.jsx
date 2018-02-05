import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Benefits from '../components/Benefits'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import Testimonial from '../components/Testimonial'
import ContentfulImage from '../components/ContentfulImage'
import HtmlHeader from '../components/HtmlHeader'
import ImageCarouselV2 from '../components/ImageCarouselV2'

class WorkLifeTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulWorkLife

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

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

        <Benefits
          title={graphQlResult.vorteile.titel}
          img1={graphQlResult.vorteile.bildVorteil1}
          text1={graphQlResult.vorteile.textVorteil1.textVorteil1}
          img2={graphQlResult.vorteile.bildVorteil2}
          text2={graphQlResult.vorteile.textVorteil2.textVorteil2}
          img3={graphQlResult.vorteile.bildVorteil3}
          text3={graphQlResult.vorteile.textVorteil3.textVorteil3}
        />

        <div className="container margin-100-top">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12">
                  <h2 className="h6">{graphQlResult.infoboxLinksUntertitel}</h2>
                  <h3 className="h2">{graphQlResult.infoboxLinksTitel}</h3>
                  <div className="margin-20-bottom">
                    <ImageCarouselV2
                      carouselId="outtakes"
                      contentfulImages={graphQlResult.infoBoxLinksBilder}
                      options="slide"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8">
                  {graphQlResult.infoboxLinksPoints.length > 0
                    ? graphQlResult.infoboxLinksPoints.map((point, i) => {
                        return (
                          <p key={'point-' + i}>
                            <span className="text-primary">
                              {point.ueberschrift}&nbsp;
                            </span>
                            {point.text ? point.text.text : null}
                          </p>
                        )
                      })
                    : null}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4" />
          </div>
        </div>

        <div className="container margin-120-top">
          <div className="row justify-content-end">
            <div className="col-12 col-md-5">
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
      </div>
    )
  }
}

export default WorkLifeTemplate

export const pageQuery = graphql`
  query workLifeQuery($id: String!) {
    contentfulWorkLife(id: { eq: $id }) {
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
      hauptueberschrift
      beschreibungUntertitel
      beschreibungTitel
      beschreibungAbsatz1 {
        beschreibungAbsatz1
      }
      beschreibungAbsatz2 {
        beschreibungAbsatz2
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
      infoboxLinksUntertitel
      infoboxLinksTitel
      infoBoxLinksBilder {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      infoboxLinksBeschreibung {
        infoboxLinksBeschreibung
      }
      infoboxLinksPoints {
        titel
        ueberschrift
        text {
          text
        }
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
    }
  }
`
