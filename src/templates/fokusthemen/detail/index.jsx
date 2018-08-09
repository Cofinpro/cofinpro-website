import React from 'react'

import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'
import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class FokusthemenDetailTeamplate extends React.Component {
  render() {
    const graphQlResult = this.props.data.contentfulFokusthema

    var srcOficonTopLeft =
      '/img/icons/fokusthema/' + graphQlResult.icon.toLowerCase() + '-color.png'

    return (
      <div>
        <div className="container margin-40-top">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-6 col-md-4">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={srcOficonTopLeft}
                  />
                </div>
                <div className="col-6 col-md-7" />
              </div>
              <div className="row margin-40-top">
                <div className="col-12">
                  <h1 className="h1">{graphQlResult.uberschriftGanzOben}</h1>
                  <p className="h4 margin-20-top d-md-block d-none">
                    {graphQlResult.headline.headline}
                  </p>
                  <p className="d-md-none">{graphQlResult.headline.headline}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1" />
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-12">
                  <RelevanteFokusthemen />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row d-md-flex">
            <div className="col-12 col-md-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.stockImageOne}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Headline Medien/ Unterthema 1"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-md-6 col-12 margin-xs-20-top">
              <div className="row">
                <div className="col-12 col-md-4" />
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_SHARP}
                    source={this.props.data.stockImageTwo}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Headline Medien/ Unterthema 2"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-md-8 col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_SHARP}
                    source={this.props.data.stockImageThree}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Headline Medien/ Unterthema 3"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-40-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1 margin-xs-80-top">
              <h1 className="h2">Die Herausforderung</h1>
              <ContentfulMarkdownText
                text={graphQlResult.herausforderung.herausforderung}
              />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.stockImageFour}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Headline Medien/ Unterthema 4"
                    styleClasses="h4"
                  />
                }
              />
            </div>
          </div>
        </div>

        <div className="container margin-60-top margin-xs-80-top">
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6 margin-xs-20-top">
              <h1 className="h2">Unser Lösungsansatz</h1>
              <ContentfulMarkdownText
                text={graphQlResult.loesungsansatz.loesungsansatz}
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-md-6 margin-xs-20-top">
              <h1 className="h2">Ihr Nutzen</h1>
              <ContentfulMarkdownText text={graphQlResult.nutzen.nutzen} />
            </div>
          </div>
        </div>

        <ReferenzAndDownload style={{ container: 'margin-xs-80-top' }} />
      </div>
    )
  }
}

export default FokusthemenDetailTeamplate

export const pageQuery = graphql`
  query fokusthemaQuery($id: String!) {
    contentfulFokusthema(id: { eq: $id }) {
      url
      beratungsfelder
      icon
      uberschriftGanzOben
      headline {
        headline
      }
      herausforderung {
        herausforderung
      }
      loesungsansatz {
        loesungsansatz
      }
      nutzen {
        nutzen
      }
    }
    stockImageOne: imageSharp(id: { regex: "/fokusthema-stockbild-b24/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageTwo: imageSharp(id: { regex: "/fokusthema-stockbild-b14/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageThree: imageSharp(id: { regex: "/fokusthema-stockbild-a26/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageFour: imageSharp(id: { regex: "/fokusthema-stockbild-b2/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
