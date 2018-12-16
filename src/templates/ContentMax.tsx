import React from 'react';
import { graphql } from 'gatsby';

import ExternalLinkButton from 'components/buttons/ExternalLinkButton';
import HtmlHeader from 'components/HtmlHeader';
import ContentMaxParagraph from './ContentMaxParagraph';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';
import Layout from 'components/Layout';

interface Paragraph {
  text: string;
  image: SharpImage;
}

interface Props {
  location: any;
  pageContext: {
    content: any;
    paragraphThreeImageSharp: SharpImage;
  };
  data: any;
}

class ContentseiteMax extends React.Component<Props> {
  render() {
    const content = this.props.pageContext.content;

    const paragraphOne: Paragraph = {
      text: content.paragraph1 ? content.paragraph1.paragraph1 : undefined,
      image: this.props.data.paragraphOneImageSharp,
    };

    const paragraphTwo: Paragraph = {
      text: content.paragraph2 ? content.paragraph2.paragraph2 : undefined,
      image: this.props.data.paragraphTwoImageSharp,
    };

    const paragraphThree = undefined;

    const paragrapOneSpaceToTop = !!this.props.data.bigMiddleImageSharp ? 'margin-40-top' : 'margin-120-top';

    const DATE_OPTIONS = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    const seoTitle = !!content.unteruebrschrift
      ? `${content.ueberschrift}-${content.unteruebrschrift.unteruebrschrift}`
      : content.ueberschrift;
    const seoDescription = !!content.introText ? content.introText.introText.substring(0, 215) : seoTitle;

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
            <div className="col-12 col-md-9 col-lg-8">
              <h1 className="h1">{content.ueberschrift}</h1>
              {content.unteruebrschrift !== undefined &&
                content.unteruebrschrift !== null && <h2 className="h2 margin-20-top">{content.unteruebrschrift}</h2>}
              <p className="h5 margin-60-top margin-xs-20-top">
                {new Date(content.verffentlichungsdatum).toLocaleDateString('de-DE', DATE_OPTIONS)}
              </p>
              <p className="h4 normal-font d-none d-lg-block margin-20-top">
                {content.introText !== undefined && content.introText.introText}
              </p>
              <p className="h5 normal-font d-none d-md-block d-lg-none margin-20-top">
                {content.introText !== undefined && content.introText.introText}
              </p>
              <p className="d-block normal-font d-md-none margin-20-top">
                {content.introText !== undefined && content.introText.introText}
              </p>
            </div>
            <div className="col-12 col-md-3 col-lg-4" />
          </div>
        </div>

        {this.props.data.bigMiddleImageSharp !== undefined &&
          this.props.data.bigMiddleImageSharp !== null && (
            <div className="container margin-100-top margin-xs-60-top">
              <div className="row">
                <div className="col-12 align-items-center">
                  <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.bigMiddleImageSharp} />
                </div>
              </div>
            </div>
          )}

        {(paragraphOne.text !== undefined || paragraphOne.image !== undefined) && (
          <ContentMaxParagraph
            content={{
              image: paragraphOne.image,
              text: paragraphOne.text,
              orderText: 'order-md-1',
              orderPicture: 'order-md-2',
            }}
            style={{ container: `${paragrapOneSpaceToTop} margin-xs-40-top` }}
          />
        )}

        {(paragraphTwo.text !== undefined || paragraphTwo.image !== undefined) && (
          <ContentMaxParagraph
            content={{
              image: paragraphTwo.image,
              text: paragraphTwo.text,
              orderText: 'order-md-2',
              orderPicture: 'order-md-1',
            }}
            style={{ container: 'margin-100-top margin-xs-80-top' }}
          />
        )}

        {paragraphThree !== undefined &&
          paragraphThree !== null && (
            <ContentMaxParagraph
              content={{
                image: this.props.pageContext.paragraphThreeImageSharp,
                text: content.paragraphThree.text,
                orderText: 'order-md-1',
                orderPicture: 'order-md-2',
              }}
              style={{ container: 'margin-100-top margin-xs-80-top' }}
            />
          )}

        {content.downloadDatei !== undefined &&
          content.downloadDatei !== null && (
            <div className="container margin-100-top margin-xs-60-top">
              <div className="row">
                <div className="col-12 text-center">
                  {content.downloadBeschreibenderText !== undefined && (
                    <p>{content.downloadBeschreibenderText.downloadBeschreibenderText}</p>
                  )}
                </div>
                <div className="col-12 col-md-6 offset-md-3 text-center">
                  <ExternalLinkButton
                    text={'DOWNLOAD'}
                    _href={`/pdf/contentful/${content.downloadDatei.id}.pdf`}
                    _target={'_blank'}
                    styleSpan="w-100 w-md-unset"
                  />
                </div>
              </div>
            </div>
          )}
      </Layout>
    );
  }
}

export default ContentseiteMax;

export const pageQuery = graphql`
  query contentMaxQuery(
    $bigMiddleImageId: String!
    $paragraphOneImageId: String!
    $paragraphTwoImageId: String!
    $paragraphThreeImageId: String!
  ) {
    bigMiddleImageSharp: imageSharp(id: { regex: $bigMiddleImageId }) {
      fluid(quality: 90, maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
    paragraphOneImageSharp: imageSharp(id: { regex: $paragraphOneImageId }) {
      fluid(quality: 90, maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
    paragraphTwoImageSharp: imageSharp(id: { regex: $paragraphTwoImageId }) {
      fluid(quality: 90, maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
    paragraphThreeImageSharp: imageSharp(id: { regex: $paragraphThreeImageId }) {
      fluid(quality: 90, maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;
