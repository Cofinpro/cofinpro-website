import React from 'react';
import { graphql } from 'gatsby';

import ContentfulMarkdownText from 'components/ContentfulMarkdownText';
import HtmlHeader from 'components/HtmlHeader';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import Layout from 'components/Layout';

interface Props {
  location: any;
  data: any;
  pageContext: {
    bigImage: any;
  };
}

class Projekt extends React.Component<Props> {
  render() {
    const graphQlResult = this.props.data.contentfulProjekt;
    const mainImage = this.props.pageContext.bigImage;

    let seoTitle = `Projekt: ${graphQlResult.ueberschrift}`;
    if (graphQlResult.unterueberschrift !== undefined && graphQlResult.unterueberschrift !== null) {
      seoTitle = `${seoTitle}-${graphQlResult.unterueberschrift}`;
    }

    const seoDescription = seoTitle;

    return (
      <Layout {...this.props}>
        <HtmlHeader
          direktData={{
            title: seoTitle,
            description: seoDescription,
          }}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-lg-10 col-xl-8">
              <h1 className="h1">{graphQlResult.ueberschrift}</h1>
              <h2 className="h2 normal-font margin-20-top d-none d-md-block">{graphQlResult.unterueberschrift}</h2>
              <p className="h2 normal-font d-block d-md-none">{graphQlResult.unterueberschrift}</p>
            </div>
          </div>
        </div>

        <div className="container margin-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <ImageWrapper sourceType={SourceTyp.Bootstrap} source={mainImage} />
            </div>
          </div>
        </div>
        <div className="container margin-60-top margin-md-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="h2">Ziele</h3>
              <div className="blue-bullet">
                {graphQlResult.ziele !== undefined && graphQlResult.ziele !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.ziele.ziele} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6" />
            <div className="col-12 col-md-6">
              <h3 className="h2">Aufgaben</h3>
              <div className="blue-bullet">
                {graphQlResult.aufgaben !== undefined && graphQlResult.aufgaben !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.aufgaben.aufgaben} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6">
              <h3 className="h2">Ergebnisse</h3>
              <div className="blue-bullet">
                {graphQlResult.ergebnisse !== undefined && graphQlResult.ergebnisse !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.ergebnisse.ergebnisse} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6" />
            <div className="col-12 col-md-6 margin-top-20">
              <h2 className="h2">Unser Beitrag</h2>
              <div className="blue-bullet">
                {graphQlResult.unserBeitrag !== undefined && graphQlResult.unserBeitrag !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.unserBeitrag.unserBeitrag} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Projekt;

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    contentfulProjekt(id: { eq: $id }) {
      id
      relevanteBeratungsfelder
      urlDerSeite
      ueberschrift
      unterueberschrift
      ziele {
        ziele
      }
      aufgaben {
        aufgaben
      }
      ergebnisse {
        ergebnisse
      }
      unserBeitrag {
        unserBeitrag
      }
    }
  }
`;
