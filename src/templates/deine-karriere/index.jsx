import React from 'react'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import ThreeIconsWithTextLayout from '../../components/layouts/ThreeIconsWithTextLayout'
import TestimonialLayout from '../../components/layouts/TestimonialLayout'

import HeroImageLayout from '../../components/layouts/HeroImageLayout'
import SiteHeaderContent from '../../components/SiteHeaderContent'
import ContentfulImage from '../../components/images/ContentfulImage'
import HtmlHeader from '../../components/HtmlHeader'

class LaufbahnTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteDeineKarriere

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <HeroImageLayout
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

        <ThreeIconsWithTextLayout
          title={graphQlResult.vorteile.titel}
          iconLeft={this.props.data.iconVorteilLinksSharp}
          textLeft={graphQlResult.vorteile.textVorteil1.textVorteil1}
          iconMiddle={this.props.data.iconVorteilMitteSharp}
          textMiddle={graphQlResult.vorteile.textVorteil2.textVorteil2}
          iconRight={this.props.data.iconVorteilRechtsSharp}
          textRight={graphQlResult.vorteile.textVorteil3.textVorteil3}
        />

        {graphQlResult.perspektive.name == null ||
        graphQlResult.perspektive.name !== 'andere' ? (
          <div className="container margin-120-top">
            <div className="row">
              <div className="col-12">
                <p className="h2 text-primary padding-sm-bottom">
                  {graphQlResult.titelLaufbahnBild}
                </p>
              </div>
              <div className="col-8 col-md-12">
                <ContentfulImage
                  imageFile={graphQlResult.bildFuerLaufbahn}
                  styleClasses="img-fluid d-none d-md-block"
                />
                <ContentfulImage
                  imageFile={graphQlResult.bildFuerLaufbahnMobile}
                  styleClasses="img-fluid d-block d-md-none"
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="d-none d-md-block filler-box-200">
                <p className="filler" />
              </div>
              <h2 className="h6">{graphQlResult.skillUntertitel}</h2>
              <h3 className="h2">{graphQlResult.skillsTitel}</h3>
              <p>{graphQlResult.skillsBeschreibung.skillsBeschreibung}</p>
              {graphQlResult.skills.length > 0 &&
                graphQlResult.skills.map((skill, i) => {
                  var colorHeader

                  if (i == 0) {
                    colorHeader = 'text-primary'
                  } else if (i == 1) {
                    colorHeader = 'text-secondary'
                  } else if (i == 2) {
                    colorHeader = 'text-primary'
                  } else {
                    colorHeader = 'text-dark'
                  }

                  return (
                    <p
                      key={'skill-' + i}
                      hidden={skill.ueberschrift == null ? true : false}
                    >
                      <span className={colorHeader}>
                        {skill.ueberschrift}&nbsp;
                      </span>
                      {skill.text && skill.text.text}
                    </p>
                  )
                })}
            </div>

            <div className="col-12 col-md-2">
              <div className="d-sm-block d-md-none margin-80-top">
                <p />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <TestimonialLayout
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

        {graphQlResult.perspektive.name == null ||
          (graphQlResult.perspektive.name !== 'andere' && (
            <div className="container margin-100-top">
              <div className="row">
                <div className="col">
                  <p className="h2 text-primary">
                    {graphQlResult.titelKompetenzen}
                  </p>
                  <ContentfulImage
                    imageFile={graphQlResult.bildKompetenzen}
                    styleClasses="img-fluid d-none d-md-block padding-sm-top"
                  />
                  <ContentfulImage
                    imageFile={graphQlResult.bildKompetenzenSmartphone}
                    styleClasses="img-fluid d-block d-md-none padding-sm-top"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default LaufbahnTemplate

export const pageQuery = graphql`
  query deineKarriereQuery(
    $id: String!
    $titelbildId: String!
    $titelbildKleinId: String!
    $vorteilIconLinksId: String!
    $vorteilIconMitteId: String!
    $vorteilIconRechtsId: String!
  ) {
    contentfulSeiteDeineKarriere(id: { eq: $id }) {
      id
      metaData {
        id
        title
        keywords {
          id
          keywords
        }
        description {
          id
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
        id
        beschreibungAbsatz1
      }
      beschreibungAbsatz2 {
        id
        beschreibungAbsatz2
      }
      titelLaufbahnBild
      bildFuerLaufbahn {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildFuerLaufbahnMobile {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
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
      skillsTitel
      skillUntertitel
      skillsBeschreibung {
        skillsBeschreibung
      }
      skills {
        titel
        ueberschrift
        text {
          text
        }
      }
      titelKompetenzen
      bildKompetenzen {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildKompetenzenSmartphone {
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
    iconVorteilLinksSharp: imageSharp(id: { regex: $vorteilIconLinksId }) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilMitteSharp: imageSharp(id: { regex: $vorteilIconMitteId }) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilRechtsSharp: imageSharp(id: { regex: $vorteilIconRechtsId }) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
