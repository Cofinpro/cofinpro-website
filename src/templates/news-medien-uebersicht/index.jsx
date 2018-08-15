import React from 'react'
import Link from 'gatsby-link'

import LinkButton from '../../components/buttons/LinkButton'
import MobileToggleWithButton from '../../components/buttons/MobileToggleWithButton'

import LayoutDownloads from './LayoutDownloads'
import LayoutDownloadRow from './LayoutDownloadRow'
import LayoutVeroeffentlichungen from './LayoutVeroeffentlichungen'
import LayoutPressemeldungen from './LayoutPressemeldungen'

import DownloadPreviewTextAndImageLayout from '../../components/layouts/DownloadPreviewTextAndImageLayout'

import NavigationBeratungsfelder from '../../components/navigation/NavigationBeratungsfelder'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

import './style.scss'

class NewsMedienUebersichtTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var input = this.props.pathContext.input
    var siteHeader = this.props.pathContext.siteHeader
    var professionalPublications = this.props.pathContext
      .professionalPublications
    var buttonTextProfessionalPublications = this.props.pathContext
      .buttonTextProfessionalPublications
    var pressReleases = this.props.pathContext.pressReleases
    var medien = this.props.pathContext.medien
    var buttonTextPressRelease = this.props.pathContext.buttonTextPressRelease
    var buttonTextStudien = this.props.pathContext.buttonTextStudien
    var buttonTextThesen = this.props.pathContext.buttonTextThesen
    var buttonTextWhitePaper = this.props.pathContext.buttonTextWhitePaper
    var buttonTextLösung = this.props.pathContext.buttonTextLösung
    var weAboutUs = this.props.pathContext.weAboutUs

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">News&amp;Medien</h1>
              <p className="h4 bold-font d-none d-md-block">{siteHeader}</p>
              <p className="d-block d-md-none">{siteHeader}</p>
            </div>
          </div>
        </div>

        <div className="container margin-80-top margin-xs-40-top">
          <div className="row">
            <div className="col-12">
              <NavigationBeratungsfelder
                urlPrefix="news-medien"
                description={
                  'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren? Wählen Sie selbst. '
                }
              />
            </div>
          </div>
        </div>

        <LayoutVeroeffentlichungen
          content={{
            id: 'veroeffentlichungen',
            header: 'Veröffentlichungen',
            images: [
              this.props.data.veroeffentlichungenOneSharp,
              this.props.data.veroeffentlichungenTwoSharp,
              this.props.data.veroeffentlichungenThreeSharp,
              this.props.data.veroeffentlichungenFourSharp,
            ],
            description: professionalPublications,
            elements: input.veroeffentlichungen,
            buttonText: buttonTextProfessionalPublications,
          }}
          style={{ container: 'margin-60-top margin-xs-40-top ' }}
        />
        <LayoutPressemeldungen
          content={{
            id: 'pressemeldungen',
            header: 'Pressemeldungen',
            images: [
              this.props.data.pressemeldungOneSharp,
              this.props.data.pressemeldungTwoSharp,
              this.props.data.pressemeldungThreeSharp,
              this.props.data.pressemeldungFourSharp,
            ],
            description: pressReleases,
            elements: input.pressemeldungen,
            buttonText: buttonTextPressRelease,
          }}
        />
        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Downloads</h2>
              <p className="no-margin">{medien}</p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>

        <LayoutDownloads
          content={{
            id: 'STUDIEN',
            header: 'STUDIEN',
            images: [
              this.props.data.studienOneSharp,
              this.props.data.studienTwoSharp,
            ],
            downloads: input.studien,
            buttonText: buttonTextStudien,
          }}
          style={{ container: 'margin-60-top margin-xs-40-top ' }}
        />

        <LayoutDownloads
          content={{
            id: 'THESENPAPIERE',
            header: 'THESENPAPIERE',
            images: [
              this.props.data.thesenpapierOneSharp,
              this.props.data.thesenpapierTwoSharp,
            ],
            downloads: input.thesenpapiere,
            buttonText: buttonTextThesen,
          }}
          style={{ container: 'margin-60-top margin-xs-60-top ' }}
        />

        <LayoutDownloads
          content={{
            id: 'WHITEPAPERS',
            header: 'WHITEPAPERS',
            images: [
              this.props.data.whitepapersOneSharp,
              this.props.data.whitepapersTwoSharp,
            ],
            medien: [
              {
                header: 'Headline Medien/Unterthema 1',
                subheader: 'Subheadline Medien/Unterthema 1',
              },
              {
                header: 'Headline Medien/Unterthema 2',
                subheader: 'Subheadline Medien/Unterthema 2',
              },
            ],
            downloads: input.whitepapers,
            buttonText: buttonTextWhitePaper,
          }}
          style={{ container: 'margin-60-top margin-xs-60-top ' }}
        />

        <LayoutDownloads
          content={{
            id: 'LOESUNGSSKIZZEN',
            header: 'LÖSUNGSSKIZZEN',
            images: [
              this.props.data.loesungsskizzenOneSharp,
              this.props.data.loesungsskizzenTwoSharp,
            ],
            downloads: input.loesungsskizzen,
            buttonText: buttonTextLösung,
          }}
          style={{ container: 'margin-60-top margin-xs-60-top ' }}
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Wir über uns</h2>
              <p className="no-margin">
                Was das Angebot von Cofinpro ausmacht, was wir konkret tun und
                was wir mit unserer Arbeit bewirken, erfahren Sie im
                Unternehmensfolder. In unserem Cofinpro Karrieremagazin können
                Sie nachlesen, was uns als Arbeitgeber ausmacht und welche
                Karrieremöglichkeiten wir bieten (nämlich sehr viele).
              </p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>
        <DownloadPreviewTextAndImageLayout
          style={{ container: 'margin-40-top margin-xs-0-top' }}
        />
      </div>
    )
  }
}

export default NewsMedienUebersichtTemplate

export const pageQuery = graphql`
  query newsMediaOverviewQuery {
    veroeffentlichungenOneSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a14/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenTwoSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a29/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenThreeSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a16/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenFourSharp: imageSharp(
      id: { regex: "/medien-veroeffentlichungen-a1/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungOneSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b50/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungTwoSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b3/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungThreeSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b2/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungFourSharp: imageSharp(
      id: { regex: "/medien-pressemeldungen-b39/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    studienOneSharp: imageSharp(id: { regex: "/medien-studien-a42/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    studienTwoSharp: imageSharp(id: { regex: "/medien-studien-a7/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    thesenpapierOneSharp: imageSharp(
      id: { regex: "/medien-thesenpapiere-a26/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    thesenpapierTwoSharp: imageSharp(
      id: { regex: "/medien-thesenpapiere-a6/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    whitepapersOneSharp: imageSharp(id: { regex: "/medien-whitepapers-b8/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    whitepapersTwoSharp: imageSharp(id: { regex: "/medien-whitepapers-b31/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    loesungsskizzenOneSharp: imageSharp(
      id: { regex: "/medien-loesungsskizzen-b32/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    loesungsskizzenTwoSharp: imageSharp(
      id: { regex: "/medien-loesungsskizzen-b26/" }
    ) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
