import React from 'react';
import { graphql } from 'gatsby';

import ThreeIconsWithTextLayout from 'components/layouts/ThreeIconsWithTextLayout';
import TestimonialLayout from 'components/layouts/TestimonialLayout';

import HeroImageLayout from 'components/layouts/HeroImageLayout';
import SiteHeaderContent from 'components/SiteHeaderContent';
import ContentfulImage from 'components/images/ContentfulImage';
import HtmlHeader from 'components/HtmlHeader';
import Layout from 'components/Layout';
import { SharpImageFluid } from 'models/SharpImageFluid';

interface Props {
  location: any;
  data: {
    contentfulSeiteDeineKarriere: any;
    imageTitelBildSharp: SharpImageFluid;
    imageTitelBildKleinSharp: SharpImageFluid;
    iconVorteilLinksSharp: SharpImageFluid;
    iconVorteilMitteSharp: SharpImageFluid;
    iconVorteilRechtsSharp: SharpImageFluid;
  };
}

class LaufbahnTemplate extends React.Component<Props> {
  getColorHeader(index: number): string {
    switch (index) {
      case 0:
        return 'text-primary';
      case 1:
        return 'text-secondary';
      case 2:
        return 'text-primary';
      default:
        return 'text-dark';
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteDeineKarriere;
    //

    return (
      <Layout location={this.props.location}>
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

        {graphQlResult.perspektive.name == null || graphQlResult.perspektive.name !== 'andere' ? (
          <div className="container margin-120-top">
            <div className="row">
              <div className="col-12">
                <p className="h2 text-primary padding-sm-bottom">{graphQlResult.titelLaufbahnBild}</p>
              </div>
              <div className="col-8 col-md-12">
                <ContentfulImage imageFile={graphQlResult.bildFuerLaufbahn} styleClasses="img-fluid d-none d-md-block" />
                <ContentfulImage imageFile={graphQlResult.bildFuerLaufbahnMobile} styleClasses="img-fluid d-block d-md-none" />
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
                graphQlResult.skills.map((skill: any, index: number) => {
                  return (
                    <p key={`skill-${index}`} hidden={skill.ueberschrift == null ? true : false}>
                      <span className={this.getColorHeader(index)}>
                        {skill.ueberschrift}
                        &nbsp;
                      </span>
                      {skill.text && skill.text.text}
                    </p>
                  );
                })}
            </div>

            <div className="col-12 col-md-2">
              <div className="d-sm-block d-md-none margin-80-top">
                <p />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <TestimonialLayout
                carouselId={'deine-karriere'}
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

        {graphQlResult.perspektive.name == null ||
          (graphQlResult.perspektive.name !== 'andere' && (
            <div className="container margin-100-top">
              <div className="row">
                <div className="col">
                  <p className="h2 text-primary">{graphQlResult.titelKompetenzen}</p>
                  <ContentfulImage imageFile={graphQlResult.bildKompetenzen} styleClasses="img-fluid d-none d-md-block padding-sm-top" />
                  <ContentfulImage
                    imageFile={graphQlResult.bildKompetenzenSmartphone}
                    styleClasses="img-fluid d-block d-md-none padding-sm-top"
                  />
                </div>
              </div>
            </div>
          ))}
      </Layout>
    );
  }
}

export default LaufbahnTemplate;

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
    imageTitelBildSharp: file(relativePath: { regex: $titelbildId }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTitelBildKleinSharp: file(relativePath: { regex: $titelbildKleinId }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iconVorteilLinksSharp: file(relativePath: { regex: $vorteilIconLinksId }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iconVorteilMitteSharp: file(relativePath: { regex: $vorteilIconMitteId }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iconVorteilRechtsSharp: file(relativePath: { regex: $vorteilIconRechtsId }) {
      childImageSharp {
        fluid(quality: 60) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
