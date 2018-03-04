import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import HtmlHeader from '../components/HtmlHeader'
import ExternalLinkButton from '../components/buttons/ExternalLinkButton'

import JobContainerBox from '../components/stellenmarkt/JobContainerBox'

import StorageHelper from '../utils/storageHelper'

class StellenmarktTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { location } = this.props

    const graphQlResult = this.props.data.contentfulSeiteStellenmarkt

    const stellenAnzeigen = this.props.pathContext.stellenAnzeigen

    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

        <SiteHeader
          title={graphQlResult.hauptueberschrift}
          imageFile={graphQlResult.titelbild}
          imageSmall={graphQlResult.titelbildKlein}
          titleTag="h1"
        />

        <SiteHeaderContent
          title={graphQlResult.beschreibungTitel}
          subtitle={graphQlResult.beschreibungUntertitel}
          text1={graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1}
          text2={graphQlResult.beschreibungAbsatz2.beschreibungAbsatz2}
          subtitleTag="h2"
          titleTag="h3"
        />

        <div className="d-none d-md-block margin-120-top">
          <p />
        </div>

        <JobContainerBox
          id="FACHBERATER"
          anzeigen={this.props.pathContext.stellenAnzeigen}
          boxTitle="JOBANGEBOTE FÜR FACHBERATER"
          filter={['fachlicher-professional', 'fachlicher-absolvent']}
          boxStyle="jobangebote-fachberater-box"
          columnDefinition="col-12 col-md-10 col-lg-8"
          rowDefinition="row justify-content-start"
          borderStyleFallback="secondary"
          {...this.props}
        />

        <JobContainerBox
          id="TECHI"
          anzeigen={this.props.pathContext.stellenAnzeigen}
          boxTitle="JOBANGEBOTE FÜR TECHNOLOGIE-BERATER"
          filter={['technologischer-professional', 'technologischer-absolvent']}
          boxStyle="jobangebote-technologie-box"
          columnDefinition="col-12 col-md-10 col-lg-8"
          rowDefinition="row justify-content-end"
          borderStyleFallback="primary"
          {...this.props}
        />

        <JobContainerBox
          id="STUDI"
          anzeigen={this.props.pathContext.stellenAnzeigen}
          boxTitle="JOBANGEBOTE FÜR STUDENTEN"
          filter={['studenten']}
          boxStyle="jobangebote-studenten-box"
          additionalColumn={<div className="col-12 col-md-1 col-lg-1" />}
          rowDefinition="row justify-content-start"
          borderStyleFallback="secondary"
          {...this.props}
        />

        <JobContainerBox
          id="ANDERE"
          anzeigen={this.props.pathContext.stellenAnzeigen}
          boxTitle="JOBANGEBOTE FÜR ANDERE EXPERTISEN"
          filter={['andere']}
          boxStyle="jobangebote-andere-box"
          rowDefinition="row justify-content-start"
          borderStyleFallback="primary"
          {...this.props}
        />

        <div className="container bg-orange-light padding-md-top-bottom margin-120-top">
          <div className="row">
            <div className="col text-center">
              <h2 className="h4 padding-sm-bottom">
                {graphQlResult.callToActionText.callToActionText}
              </h2>
              <ExternalLinkButton
                text={graphQlResult.linkZurInitiativBewerbung.linkBezeichnung}
                _href={
                  graphQlResult.linkZurInitiativBewerbung.linkZurExternenQuelle
                    .linkZurExternenQuelle
                }
                _target="_blank"
              />
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
    contentfulSeiteStellenmarkt(id: { eq: $id }) {
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
