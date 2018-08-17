import React from 'react'

import RelevanteLinks from '../../components/relevanteLinks'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class Projekt extends React.Component {
  render() {
    const graphQlResult = this.props.data.contentfulProjekt

    var mainImage = this.props.pathContext.bigImage

    //var allStockImages = this.props.pathContext.allImages
    //var indexOfimage = this.props.pathContext.indexOfImage

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-7">
              <h1 className="h1">{graphQlResult.ueberschrift}</h1>
              <h2 className="margin-20-top d-none d-md-block">
                {graphQlResult.unterueberschrift}
              </h2>
              <p className="d-block d-md-none">
                {graphQlResult.unterueberschrift}
              </p>
            </div>
            <div className="col-12 col-md-5 margin-0-top margin-xs-40-top">
              <ImageWrapper sourceType={SOURCE_TYP_SHARP} source={mainImage} />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Ziele</h2>
              <div className="blue-bullet">
                {graphQlResult.ziele !== undefined &&
                graphQlResult.ziele !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.ziele.ziele} />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6" />
            <div className="col-12 col-md-6">
              <h2 className="h2">Aufgaben</h2>
              <div className="blue-bullet">
                {graphQlResult.aufgaben !== undefined &&
                graphQlResult.aufgaben !== null ? (
                  <ContentfulMarkdownText
                    text={graphQlResult.aufgaben.aufgaben}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6">
              <h2 className="h2">Ergebnisse</h2>
              <div className="blue-bullet">
                {graphQlResult.ergebnisse !== undefined &&
                graphQlResult.ergebnisse !== null ? (
                  <ContentfulMarkdownText
                    text={graphQlResult.ergebnisse.ergebnisse}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="row margin-20-top">
            <div className="col-12 col-md-6" />
            <div className="col-12 col-md-6 margin-top-20">
              <h2 className="h2">Unser Beitrag</h2>
              <div className="blue-bullet">
                {graphQlResult.unserBeitrag !== undefined &&
                graphQlResult.unserBeitrag !== null ? (
                  <ContentfulMarkdownText
                    text={graphQlResult.unserBeitrag.unserBeitrag}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projekt

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    contentfulProjekt(id: { eq: $id }) {
      id
      relevanteBeratungsfelder
      relevanteFokusthemen {
        id
        url
        uberschriftGanzOben
        unterueberschrift
      }
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
`
