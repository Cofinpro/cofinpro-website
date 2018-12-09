import React from 'react';
import { graphql } from 'gatsby';

import ThreeIconsWithTextLayout from 'components/layouts/ThreeIconsWithTextLayout';
import TestimonialLayout from 'components/layouts/TestimonialLayout';

import HeroImageLayout from 'components/layouts/HeroImageLayout';
import SiteHeaderContent from 'components/SiteHeaderContent';
import ContentfulImage from 'components/images/ContentfulImage';
import HtmlHeader from 'components/HtmlHeader';
import LinkButton from 'components/buttons/LinkButton';

interface Props {
  data: any;
}

class DeineEntwicklungTemplate extends React.Component<Props> {
  render() {
    const graphQlResult = this.props.data.contentfulSeiteDeineEntwicklung;

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

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="d-none d-md-block margin-120-top">
                <p className="filler" />
              </div>
              <h2 className="h6">{graphQlResult.trainingUntertitel}</h2>
              <h3 className="h2">{graphQlResult.trainingTitel}</h3>
              <ContentfulImage imageFile={graphQlResult.trainingBild} styleClasses="img-fluid padding-sm-top-bottom" />
              <p className="margin-md-bottom">{graphQlResult.trainingBeschreibung.trainingBeschreibung}</p>

              <LinkButton text="JETZT BEWERBEN" path="/karriere/jobs" />
            </div>

            <div className="col-12 col-md-2">
              <div className="d-sm-block d-md-none margin-80-top">
                <p />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <TestimonialLayout
                carouselId={'deine-entwicklung'}
                title={graphQlResult.testimonial.ueberschrift}
                text={graphQlResult.testimonial.zitat.zitat}
                author={graphQlResult.testimonial.autor}
                authorTitle={graphQlResult.testimonial.autorTitel}
                videoUrl={graphQlResult.testimonial.linkVonYouTubeVideo}
                // TODO: imageFile={graphQlResult.testimonial.bildTestimonial}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeineEntwicklungTemplate;

export const pageQuery = graphql`
  query deineEntwicklungQuery(
    $id: String!
    $titelbildId: String!
    $titelbildKleinId: String!
    $vorteilIconLinksId: String!
    $vorteilIconMitteId: String!
    $vorteilIconRechtsId: String!
  ) {
    contentfulSeiteDeineEntwicklung(id: { eq: $id }) {
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
`;
