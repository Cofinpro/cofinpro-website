import React from 'react'

import LayoutVeroeffentlichungen from '../../news-medien-uebersicht/LayoutVeroeffentlichungen'
import NavigationBeratungsfelder from '../../../components/navigation/NavigationBeratungsfelder'
import HtmlHeader from '../../../components/HtmlHeader'
import PageIntroText from '../../../components/text/PageIntroText'

class VeroeffentlichungenArchivTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var name = this.props.pathContext.name
    var input = this.props.pathContext.input
    var siteDescription = this.props.pathContext.siteDescription
    var sectionDescription = this.props.pathContext.sectionDescription

    let firstSetOfImages = [
      this.props.data.veroeffentlichungenOneSharp,
      this.props.data.veroeffentlichungenTwoSharp,
      this.props.data.veroeffentlichungenThreeSharp,
      this.props.data.veroeffentlichungenFourSharp,
    ]

    let secondSetOfImages = [
      this.props.data.pressemeldungOneSharp,
      this.props.data.pressemeldungTwoSharp,
      this.props.data.pressemeldungThreeSharp,
      this.props.data.pressemeldungFourSharp,
    ]

    let seoTitel = 'Fachpublikationen Archiv - ' + name
    let seoDescription = siteDescription

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: seoTitel,
            description: seoDescription,
          }}
        />
        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Medien Archiv</h1>
              <PageIntroText
                content={{
                  text: siteDescription,
                }}
              />
            </div>
          </div>
        </div>

        <div className="container margin-80-top margin-xs-40-top">
          <div className="row">
            <div className="col-12">
              <NavigationBeratungsfelder
                links={[
                  {
                    text: 'Alle Beratungsfelder',
                    path: '/alle-beratungsfelder',
                  },
                  { text: 'Managementberatung', path: '/managementberatung' },
                  { text: 'Fachberatung Kredit', path: '/fachberatung-kredit' },
                  {
                    text: 'Fachberatung Wertpapier',
                    path: '/fachberatung-wertpapier',
                  },
                  { text: 'Technologieberatung', path: '/technologieberatung' },
                  { text: 'Digitalisierung', path: '/digitalisierung' },
                ]}
                urlPrefix="news-medien/archiv/veroeffentlichungen"
                description={
                  'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren?  \n Wählen Sie selbst. '
                }
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">{'Fachpublikationen'}</h2>
              <p>{sectionDescription}</p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>

        {Object.keys(input).length === 0 && (
          <div className="container margin-40-top margin-xs-20-top">
            <div className="row">
              <div className="col-12">
                <p className="no-media-available-text">
                  Es sind keine Medien zu diesem Thema in dieser Kategorie
                  verfügbar
                </p>
              </div>
            </div>
          </div>
        )}
        {Object.keys(input).map((key, i) => {
          let spacingTop = i === 0 ? 'margin-60-top' : 'margin-120-top'

          return (
            <div key={i}>
              <div className={'container ' + spacingTop}>
                <div className="row">
                  <div className="col-12">
                    <p className="h2">{key.replace('year-', '')}</p>
                  </div>
                </div>
              </div>
              <LayoutVeroeffentlichungen
                content={{
                  id: 'veroeffentlichungen-' + i,
                  header: 'Veröffentlichungen',
                  images: i % 2 === 0 ? firstSetOfImages : secondSetOfImages,
                  description: sectionDescription,
                  elements: input[key],
                  showButton: false,
                }}
                style={{
                  row: 'margin-20-top margin-xs-0-top',
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default VeroeffentlichungenArchivTemplate

export const pageQuery = graphql`
  query veroeffentlichungenArchivQuery {
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
  }
`
