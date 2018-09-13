import React from 'react'

import LayoutDownloads from '../../news-medien-uebersicht/LayoutDownloads'
import NavigationBeratungsfelder from '../../../components/navigation/NavigationBeratungsfelder'
import HtmlHeader from '../../../components/HtmlHeader'
import PageIntroText from '../../../components/text/PageIntroText'

class ThesenpapiereArchivTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var name = this.props.pathContext.name
    var input = this.props.pathContext.input
    var siteDescription = this.props.pathContext.siteDescription
    var sectionDescription = this.props.pathContext.sectionDescription

    let firstSetOfImages = [
      this.props.data.thesenpapierOneSharp,
      this.props.data.thesenpapierTwoSharp,
    ]

    let secondSetOfImages = [
      this.props.data.loesungsskizzenOneSharp,
      this.props.data.loesungsskizzenTwoSharp,
    ]

    let seoTitel = 'Thesenpapiere Archiv - ' + name
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
          urlPrefix="news-medien/archiv/thesenpapiere"
          description={
            'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren? Wählen Sie selbst. '
          }
          styleClass={'margin-80-top margin-xs-40-top'}
        />

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">{'THESENPAPIERE'}</h2>
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
              <LayoutDownloads
                content={{
                  id: 'THESENPAPIERE-' + i,
                  header: 'THESENPAPIERE',
                  images: i % 2 === 0 ? firstSetOfImages : secondSetOfImages,
                  description: sectionDescription,
                  downloads: input[key],
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

export default ThesenpapiereArchivTemplate

export const pageQuery = graphql`
  query thesenpapiereArchivQuery {
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
