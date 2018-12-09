import React from 'react';
import { graphql } from 'gatsby';

import ThreeIconsWithTextLayout from 'components/layouts/ThreeIconsWithTextLayout';
import HeroImageLayout from 'components/layouts/HeroImageLayout';

import SiteHeaderContent from 'components/SiteHeaderContent';
import HtmlHeader from 'components/HtmlHeader';
import ImageCarouselV2 from 'components/carousels/ImageCarouselV2';
import ContentfulMarkdownText from 'components/ContentfulMarkdownText';
import { SharpImage } from 'models/SharpImage';

interface Props {
  data: any;
  pageContext: {
    infoBoxLinksBilderSharp: SharpImage;
    infoboxRechtsBilderSharp: SharpImage;
  };
}

class WorkLifeTemplate extends React.Component<Props> {
  componentDidMount() {
    $('#carousel-adventsworkshop').carousel({
      interval: 4000,
    });
    $('#carousel-outtakes').carousel({
      interval: 4000,
    });
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteWorkLife;

    const infoBoxLinksBilderSharp = this.props.pageContext.infoBoxLinksBilderSharp;
    const infoboxRechtsBilderSharp = this.props.pageContext.infoboxRechtsBilderSharp;

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
                      sharpImages={infoBoxLinksBilderSharp}
                      options="slide"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8">
                  {graphQlResult.infoboxLinksPoints.length > 0
                    ? graphQlResult.infoboxLinksPoints.map((point: any, index: number) => {
                        return (
                          <p key={`point-${index}`}>
                            <span className="bold-font">
                              {point.ueberschrift}
                              &nbsp;
                            </span>
                            {point.text ? point.text.text : null}
                          </p>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4" />
          </div>
        </div>

        <div className="container margin-120-top">
          <div className="row">
            <div className="col-12 col-md-4" />
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-12">
                  <h2 className="h6">{graphQlResult.infoboxRechtsUntertitel}</h2>
                  <h3 className="h2">{graphQlResult.infoboxRechtsTitel}</h3>
                  <div className="margin-20-bottom">
                    <ImageCarouselV2
                      carouselId="adventsworkshop"
                      contentfulImages={graphQlResult.infoboxRechtsBilder}
                      sharpImages={infoboxRechtsBilderSharp}
                      options="slide"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="embed-responsive embed-responsive-16by9 margin-20-bottom">
                    <iframe
                      className="embed-responsive-item"
                      title="Adventsworkshop in Budapest"
                      src={graphQlResult.infoBoxRechtsVideo.replace('/watch?v=', '/embed/')}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-lg-8">
                  <ContentfulMarkdownText
                    text={
                      graphQlResult.infoboxRechtsBeschreibung !== null
                        ? graphQlResult.infoboxRechtsBeschreibung.infoboxRechtsBeschreibung
                        : ''
                    }
                    {...this.props}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkLifeTemplate;

export const pageQuery = graphql`
  query workLifeQuery(
    $id: String!
    $titelbildId: String!
    $titelbildKleinId: String!
    $vorteilIconLinksId: String!
    $vorteilIconMitteId: String!
    $vorteilIconRechtsId: String!
  ) {
    contentfulSeiteWorkLife(id: { eq: $id }) {
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
      infoboxLinksPoints {
        titel
        ueberschrift
        text {
          text
        }
      }
      infoboxRechtsUntertitel
      infoboxRechtsTitel
      infoboxRechtsBilder {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      infoBoxRechtsVideo
      infoboxRechtsBeschreibung {
        infoboxRechtsBeschreibung
      }
    }
    imageTitelBildSharp: imageSharp(id: { regex: $titelbildId }) {
      fluid(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
    imageTitelBildKleinSharp: imageSharp(id: { regex: $titelbildKleinId }) {
      fluid(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
    iconVorteilLinksSharp: imageSharp(id: { regex: $vorteilIconLinksId }) {
      fluid(quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
    iconVorteilMitteSharp: imageSharp(id: { regex: $vorteilIconMitteId }) {
      fluid(quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
    iconVorteilRechtsSharp: imageSharp(id: { regex: $vorteilIconRechtsId }) {
      fluid(quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
