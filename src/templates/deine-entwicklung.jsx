import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Benefits from '../components/Benefits'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import Testimonial from '../components/Testimonial'
import ContentfulImage from '../components/ContentfulImage'

class DeineEntwicklungTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulDeineEntwicklung

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

        <Benefits
          title={graphQlResult.vorteile.titel}
          img1={graphQlResult.vorteile.bildVorteil1}
          text1={graphQlResult.vorteile.textVorteil1.textVorteil1}
          img2={graphQlResult.vorteile.bildVorteil2}
          text2={graphQlResult.vorteile.textVorteil2.textVorteil2}
          img3={graphQlResult.vorteile.bildVorteil3}
          text3={graphQlResult.vorteile.textVorteil3.textVorteil3}
        />

        <div className="container padding-lg-top-bottom">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="d-none d-md-block padding-lg-top-bottom">
                <p className="filler" />
              </div>
              <h2 className="h6">{graphQlResult.trainingUntertitel}</h2>
              <h3 className="h2">{graphQlResult.trainingTitel}</h3>
              <ContentfulImage
                imageFile={graphQlResult.trainingBild}
                styleClasses="img-fluid padding-sm-top-bottom"
              />
              <p>{graphQlResult.trainingBeschreibung.trainingBeschreibung}</p>

              <Link to={pathPrefix + '/jobs'}>
                <span className="btn btn btn-outline-primary">
                  JETZT BEWERBEN
                </span>
              </Link>
            </div>

            <div className="col-12 col-md-2">
              <div className="d-sm-block d-md-none padding-md-top-bottom">
                <p />
              </div>
            </div>

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

export default DeineEntwicklungTemplate

export const pageQuery = graphql`
  query deineEntwicklungQuery($id: String!) {
    contentfulDeineEntwicklung(id: { eq: $id }) {
      id
      perspektive {
        name
      }
      metaData {
        id
        title
        keywords {
          id
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
      trainingUntertitel
      trainingTitel
      trainingBild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      trainingBeschreibung {
        trainingBeschreibung
      }
      trainingsmodellText
      trainingsmodellBild {
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
