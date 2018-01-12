import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import CarrerOfferPreview from '../components/CarrerOfferPreview'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import HtmlHeader from '../components/HtmlHeader'

import StorageHelper from '../utils/storageHelper'

class StellenmarktTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const { location } = this.props

    const graphQlResult = this.props.data.contentfulStellenmarkt

    const stellenAnzeigen = this.props.pathContext.stellenAnzeigen

    var andereFound = false
    var fachFound = false
    var techFound = false
    var studentFound = false

    markPresentGroups()

    function markPresentGroups() {
      stellenAnzeigen.map((item, i) => {
        if (item.node.perspektiveLink.name === 'andere') {
          andereFound = true
        } else if (
          item.node.perspektiveLink.name === 'fachlicher-professional' ||
          item.node.perspektiveLink.name === 'fachlicher-absolvent'
        ) {
          fachFound = true
        } else if (
          item.node.perspektiveLink.name === 'technologischer-professional' ||
          item.node.perspektiveLink.name === 'technologischer-absolvent'
        ) {
          techFound = true
        } else if (item.node.perspektiveLink.name === 'studenten') {
          studentFound = true
        }
      })
    }

    function StellenangeboteAndere(props) {
      const found = props.found

      if (!found) {
        return null
      }
      return (
        <div className="container padding-lg-top-bottom">
          <div className="row justify-content-start">
            <div className="col-12 col-md-10 col-lg-8">
              <h3>JOBANGEBOTE FÜR ANDERE EXPERTISEN</h3>
              <div className="row">
                {stellenAnzeigen != null && stellenAnzeigen.length > 0
                  ? stellenAnzeigen.map((item, i) => {
                      var stellenAnzeige = item.node

                      if (stellenAnzeige.perspektiveLink.name === 'andere') {
                        return (
                          <div
                            className="col-12 col-md-6 padding-sm-top-bottom"
                            key={'column-ANDERE-' + i}
                          >
                            <CarrerOfferPreview
                              key={'CarrerOfferPreview-ANDERE-' + i}
                              title={stellenAnzeige.titel}
                              employmentType={stellenAnzeige.art}
                              expiration={stellenAnzeige.befristung}
                              locationEmployee={stellenAnzeige.ort}
                              anzeigeId={stellenAnzeige.id}
                              styleClass="jobangebote-andere-box"
                              {...props}
                            />
                          </div>
                        )
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      )
    }

    function StellenangeboteStudenten(props) {
      const found = props.found

      if (!found) {
        return null
      }
      return (
        <div className="container padding-lg-top-bottom">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h3>JOBANGEBOTE FÜR STUDENTEN</h3>
              <div className="row">
                {stellenAnzeigen != null && stellenAnzeigen.length > 0
                  ? stellenAnzeigen.map((item, i) => {
                      var stellenAnzeige = item.node

                      if (stellenAnzeige.perspektiveLink.name === 'studenten') {
                        return (
                          <div
                            className="col-12 col-md-6 padding-sm-top-bottom"
                            key={'column-STUDI-' + i}
                          >
                            <CarrerOfferPreview
                              key={'CarrerOfferPreview-STUDI-' + i}
                              title={stellenAnzeige.titel}
                              employmentType={stellenAnzeige.art}
                              expiration={stellenAnzeige.befristung}
                              locationEmployee={stellenAnzeige.ort}
                              anzeigeId={stellenAnzeige.id}
                              styleClass="jobangebote-studenten-box"
                              {...props}
                            />
                          </div>
                        )
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      )
    }

    function StellenangeboteFach(props) {
      const found = props.found

      if (!found) {
        return null
      }
      return (
        <div className="container padding-lg-top-bottom">
          <div className="row justify-content-start">
            <div className="col-12 col-md-10 col-lg-8">
              <h3>JOBANGEBOTE FÜR FACHBERATER</h3>
              <div className="row">
                {stellenAnzeigen != null && stellenAnzeigen.length > 0
                  ? stellenAnzeigen.map((item, i) => {
                      var stellenAnzeige = item.node

                      if (
                        stellenAnzeige.perspektiveLink.name ===
                          'fachlicher-professional' ||
                        stellenAnzeige.perspektiveLink.name ===
                          'fachlicher-absolvent'
                      ) {
                        return (
                          <div
                            className="col-12 col-md-6 padding-sm-top-bottom"
                            key={'column-FACHBERATER-' + i}
                          >
                            <CarrerOfferPreview
                              key={'CarrerOfferPreview-FACHBERATER-' + i}
                              title={stellenAnzeige.titel}
                              employmentType={stellenAnzeige.art}
                              expiration={stellenAnzeige.befristung}
                              locationEmployee={stellenAnzeige.ort}
                              anzeigeId={stellenAnzeige.id}
                              styleClass="jobangebote-fachberater-box"
                              {...props}
                            />
                          </div>
                        )
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      )
    }

    function StellenangeboteTech(props) {
      const found = props.found

      if (!found) {
        return null
      }
      return (
        <div className="container padding-lg-top-bottom">
          <div className="row justify-content-end">
            <div className="col-12 col-md-10 col-lg-8">
              <h3>JOBANGEBOTE FÜR TECHNOLOGIE-BERATER</h3>
              <div className="row">
                {stellenAnzeigen != null && stellenAnzeigen.length > 0
                  ? stellenAnzeigen.map((item, i) => {
                      var stellenAnzeige = item.node

                      if (
                        stellenAnzeige.perspektiveLink.name ===
                          'technologischer-professional' ||
                        stellenAnzeige.perspektiveLink.name ===
                          'technologischer-absolvent'
                      ) {
                        return (
                          <div
                            className="col-12 col-md-6 padding-sm-top-bottom"
                            key={'column-TECHI-' + i}
                          >
                            <CarrerOfferPreview
                              key={'CarrerOfferPreview-TECHI-' + i}
                              title={stellenAnzeige.titel}
                              employmentType={stellenAnzeige.art}
                              expiration={stellenAnzeige.befristung}
                              locationEmployee={stellenAnzeige.ort}
                              anzeigeId={stellenAnzeige.id}
                              styleClass="jobangebote-technologie-box"
                              {...props}
                            />
                          </div>
                        )
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <SiteHeader
          title={graphQlResult.hauptueberschrift}
          imageFile={graphQlResult.titelbild}
          titleTag="h1"
        />

        <SiteHeaderContent
          title={graphQlResult.beschreibungTitel}
          subtitle={graphQlResult.beschreibungUntertitel}
          text1={graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1}
          text2={graphQlResult.beschreibungAbsatz2.beschreibungAbsatz2}
          subtitleTag="h2"
        />

        <StellenangeboteFach found={fachFound} {...this.props} />

        <StellenangeboteTech found={techFound} {...this.props} />

        <StellenangeboteStudenten found={studentFound} {...this.props} />

        <StellenangeboteAndere found={andereFound} {...this.props} />

        <div className="container bg-orange-light padding-lg-top-bottom margin-lg-top-bottom">
          <div className="row">
            <div className="col text-center">
              <h2 className="h5 padding-sm-bottom">
                {graphQlResult.callToActionText.callToActionText}
              </h2>
              <a
                href={
                  graphQlResult.linkZurInitiativBewerbung.linkZurExternenQuelle
                    .linkZurExternenQuelle
                }
              >
                <span className="btn btn btn-outline-primary">
                  {graphQlResult.linkZurInitiativBewerbung.linkBezeichnung}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StellenmarktTemplate

export const pageQuery = graphql`
  query stellenmarktQuery($id: String!) {
    contentfulStellenmarkt(id: { eq: $id }) {
      id
      metaData {
        id
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
      contentfulTitel
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
      beschreibungUntertitel
      beschreibungTitel
      beschreibungAbsatz1 {
        beschreibungAbsatz1
      }
      beschreibungAbsatz2 {
        beschreibungAbsatz2
      }
      callToActionText {
        callToActionText
      }
      linkZurInitiativBewerbung {
        linkBezeichnung
        linkZurExternenQuelle {
          linkZurExternenQuelle
        }
      }
    }
  }
`
