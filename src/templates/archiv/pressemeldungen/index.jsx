import React from 'react'

import LayoutPressemeldungen from '../../news-medien-uebersicht/LayoutPressemeldungen'

import NavigationBeratungsfelder from '../../../components/navigation/NavigationBeratungsfelder'

class PressemeldungArchivTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var input = this.props.pathContext.input
    var siteDescription = this.props.pathContext.siteDescription
    var sectionDescription = this.props.pathContext.sectionDescription

    let firstSetOfImages = [
      this.props.data.pressemeldungOneSharp,
      this.props.data.pressemeldungTwoSharp,
      this.props.data.pressemeldungThreeSharp,
      this.props.data.pressemeldungFourSharp,
    ]

    let secondSetOfImages = [
      this.props.data.veroeffentlichungenOneSharp,
      this.props.data.veroeffentlichungenTwoSharp,
      this.props.data.veroeffentlichungenThreeSharp,
      this.props.data.veroeffentlichungenFourSharp,
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
                urlPrefix="news-medien/archiv/pressemeldungen"
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
              <h2 className="h2">{'Pressemeldungen'}</h2>
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
              <LayoutPressemeldungen
                content={{
                  id: 'pressemeldungen',
                  header: 'Pressemeldungen',
                  images: i % 2 === 0 ? firstSetOfImages : secondSetOfImages,
                  description: sectionDescription,
                  elements: input[key],
                  showButton: false,
                }}
                style={{
                  container: 'margin-60-top margin-xs-40-top ',
                  row: 'margin-40-top margin-xs-0-top',
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default PressemeldungArchivTemplate

export const pageQuery = graphql`
  query pressemeldungenArchivQuery {
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
  }
`
