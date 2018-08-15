import React from 'react'

import ExternalLinkButton from '../../components/buttons/ExternalLinkButton'
import RelevanteFokusthemen from '../../components/RelevanteFokusthemen'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import ContentMaxParagraph from './ContentMaxParagraph'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class ContentseiteMax extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const content = this.props.pathContext.content

    console.log(content)

    let paragraphOne = undefined
    let paragraphTwo = undefined
    let paragraphThree = undefined

    if (content.paragraph1 !== undefined && content.paragraph1 !== null) {
      if (typeof paragraphOne == 'undefined') {
        paragraphOne = {}
      }
      paragraphOne.text = content.paragraph1.paragraph1
    }

    if (
      this.props.data.paragraphOneImageSharp !== undefined &&
      this.props.data.paragraphOneImageSharp !== null
    ) {
      if (typeof paragraphOne == 'undefined') {
        paragraphOne = {}
      }
      paragraphOne.image = this.props.data.paragraphOneImageSharp
    }

    if (content.paragraph2 !== undefined && content.paragraph2 !== null) {
      if (typeof paragraphTwo == 'undefined') {
        paragraphTwo = {}
      }
      paragraphTwo.text = content.paragraph2.paragraph2
    }

    if (
      this.props.data.paragraphTwoImageSharp !== undefined &&
      this.props.data.paragraphTwoImageSharp !== null
    ) {
      if (typeof paragraphTwo == 'undefined') {
        paragraphTwo = {}
      }
      paragraphTwo.image = this.props.data.paragraphTwoImageSharp
    }

    let middleImageIsNotPresent = false

    if (
      this.props.data.bigMiddleImageSharp === undefined ||
      this.props.data.bigMiddleImageSharp === null
    ) {
      middleImageIsNotPresent = true
    }

    let paragrapOneSpaceToTop = 'margin-120-top'

    if (middleImageIsNotPresent) {
      paragrapOneSpaceToTop = 'margin-40-top'
    }

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <h1 className="h1">{content.ueberschrift}</h1>
              {content.unteruebrschrift !== undefined &&
                content.unteruebrschrift !== null && (
                  <h2 className="h2 margin-20-top">
                    {content.unteruebrschrift}
                  </h2>
                )}
              <p className="h5 margin-60-top margin-xs-20-top">
                {content.verffentlichungsdatum}
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
            <div className="col-12 d-block d-md-none d-lg-block col-lg-1" />
            <div className="col-12 col-md-4 col-lg-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>

        {this.props.data.bigMiddleImageSharp !== undefined &&
          this.props.data.bigMiddleImageSharp !== null && (
            <div className="container margin-100-top margin-xs-60-top">
              <div className="row">
                <div className="col-12 align-items-center">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_SHARP}
                    source={this.props.data.bigMiddleImageSharp}
                  />
                </div>
              </div>
            </div>
          )}

        {paragraphOne !== undefined &&
          paragraphOne !== null && (
            <ContentMaxParagraph
              content={{
                image: paragraphOne.image,
                text: paragraphOne.text,
                orderText: 'order-md-1',
                orderPicture: 'order-md-2',
              }}
              style={{ container: paragrapOneSpaceToTop + ' margin-xs-80-top' }}
            />
          )}

        {paragraphTwo !== undefined &&
          paragraphTwo !== null && (
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
                image: this.props.pathContext.paragraphThreeImageSharp,
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
                    <p>
                      {
                        content.downloadBeschreibenderText
                          .downloadBeschreibenderText
                      }
                    </p>
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
      </div>
    )
  }
}

export default ContentseiteMax

export const pageQuery = graphql`
  query contentMaxQuery(
    $bigMiddleImageId: String!
    $paragraphOneImageId: String!
    $paragraphTwoImageId: String!
    $paragraphThreeImageId: String!
  ) {
    bigMiddleImageSharp: imageSharp(id: { regex: $bigMiddleImageId }) {
      sizes(quality: 90, maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    paragraphOneImageSharp: imageSharp(id: { regex: $paragraphOneImageId }) {
      sizes(quality: 90, maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    paragraphTwoImageSharp: imageSharp(id: { regex: $paragraphTwoImageId }) {
      sizes(quality: 90, maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
    paragraphThreeImageSharp: imageSharp(
      id: { regex: $paragraphThreeImageId }
    ) {
      sizes(quality: 90, maxWidth: 1600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
