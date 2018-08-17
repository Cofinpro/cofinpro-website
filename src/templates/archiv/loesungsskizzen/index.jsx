import React from 'react'

import LayoutDownloads from '../../news-medien-uebersicht/LayoutDownloads'

import NavigationBeratungsfelder from '../../../components/navigation/NavigationBeratungsfelder'

class LoesungsskizzenArchivTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var input = this.props.pathContext.input
    var siteDescription = this.props.pathContext.siteDescription
    var sectionDescription = this.props.pathContext.sectionDescription

    let firstSetOfImages = [
      this.props.data.loesungsskizzenOneSharp,
      this.props.data.loesungsskizzenTwoSharp,
    ]

    let secondSetOfImages = [
      this.props.data.thesenpapierOneSharp,
      this.props.data.thesenpapierTwoSharp,
    ]

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Medien Archiv</h1>
              <p className="h4 bold-font d-none d-md-block">
                {siteDescription}
              </p>
              <p className="d-block d-md-none">{siteDescription}</p>
            </div>
          </div>
        </div>

        <div className="container margin-80-top margin-xs-40-top">
          <div className="row">
            <div className="col-12">
              <NavigationBeratungsfelder
                urlPrefix="news-medien/archiv/loesungsskizzen"
                description={
                  'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren? Wählen Sie selbst. '
                }
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">{'LOESUNGSSKIZZEN'}</h2>
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
                  Keine Medien zu diesem Thema <br />in dieser Kategorie
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
                  id: 'LOESUNGSSKIZZEN',
                  header: 'LOESUNGSSKIZZEN',
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

export default LoesungsskizzenArchivTemplate

export const pageQuery = graphql`
  query loesungsskizzenArchivQuery {
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
  }
`
