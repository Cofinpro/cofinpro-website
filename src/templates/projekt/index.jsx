import React from 'react'

import RelevanteFokusthemen from '../../components/RelevanteFokusthemen'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class Projekt extends React.Component {
  render() {
    const graphQlResult = this.props.data.contentfulProjekt

    var mainImage = this.props.pathContext.image
    var backgroundOverlayColor = this.props.pathContext.backgroundOverlayColor

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="h1">{graphQlResult.ueberschrift}</h1>
              <h2 className="margin-20-top d-none d-md-block">
                {graphQlResult.unterueberschrift}
              </h2>
              <p className="d-block d-md-none">
                {graphQlResult.unterueberschrift}
              </p>
              {/*<h4 className="margin-40-top d-none d-md-block">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </h4>
              <p className="d-block d-md-none">
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>*/}
            </div>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>

        <div className="container no-gutters-mobile margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={mainImage}
                backgroundOverlay={
                  <div
                    className={
                      'image-overlay-background image-overlay-background' +
                      backgroundOverlayColor
                    }
                  />
                }
                showOverlay={true}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Ziele</h2>
              <div className="blue-bullet">
                {graphQlResult.ziele !== undefined ? (
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
                {graphQlResult.aufgaben !== undefined ? (
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
                {graphQlResult.ergebnisse !== undefined ? (
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
                {graphQlResult.unserBeitrag !== undefined ? (
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
      contentfulInternerName
      kategorieInDerDasProjektFllt
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
