import React from 'react'

import ThreeIconsWithLinks from '../../components/layouts/ThreeIconsWithLinks'
import LinkButton from '../../components/buttons/LinkButton'
import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
} from '../../components/images/ImageWrapper'

class BeratungsfelderStartseite extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const buttonLinkText = 'MEHR'

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-7">
              <h1 className="h1">Beratungsfelder</h1>
              <p className="h4 margin-20-top d-md-block d-none">
                Wir sind Experten für Kredit und Wertpapier und beraten führende
                Banken und Kapitalverwaltungsgesellschaften. Als
                Managementberater, Fachberater und Technologieberater haben wir
                die Zukunftsfähigkeit unserer Kunden im Blick. Damit sie den
                Herausforderungen nicht hinterher sind, sondern einen Schritt
                voraus.
              </p>
              <p className="d-md-none">
                Wir sind Experten für Kredit und Wertpapier und beraten führende
                Banken und Kapitalverwaltungsgesellschaften. Als
                Managementberater, Fachberater und Technologieberater haben wir
                die Zukunftsfähigkeit unserer Kunden im Blick. Damit sie den
                Herausforderungen nicht hinterher sind, sondern einen Schritt
                voraus.
              </p>
            </div>
          </div>
        </div>

        <ThreeIconsWithLinks
          styleClass="margin-100-top"
          iconLeft={this.props.data.iconVorteilLinksSharp}
          titleLeft={'Managementberatung'}
          iconMiddle={this.props.data.iconVorteilMitteSharp}
          titleMiddle={'Fachberatung'}
          iconRight={this.props.data.iconVorteilRechtsSharp}
          titleRight={'Technologieberatung'}
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h1 className="h2">Wir sind Managementberater</h1>
              <p>
                In der Managementberatung entwickeln wir
                Digitalisierungsstrategien, bereiten den Weg zur agilen
                Organisation, begleiten Auswahlverfahren, übernehmen das
                Programmmanagementaufsatz und verantworten Vorhaben zur
                Effizienzsteigerung bei führenden Finanzinstituten. Und auch
                Zukunftsthemen gehören dazu, aktuell digitale Transformation,
                Machine Learning, Unbundling Banks und Blockchain.
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text={buttonLinkText}
                path="/beratungsfelder/management"
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 d-md-none">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h1 className="h2">Wir sind Fachberater</h1>
              <p>
                Als Spezialisten für Kredit und Wertpapier begleiten und
                navigieren wir unsere Kunden durch die Herausforderungen von
                Digitalisierung, neuen Marktanforderungen und Regulatorik und
                konzipieren nutzenoptimierte Prozesse und Lösungen.<br />
                <p />
                &#8594; Kredit <br />
                &#8594; Wertpapier
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text={buttonLinkText}
                path="/beratungsfelder/fach"
              />
            </div>
            <div className="col-md-6 d-md-block d-none">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                source="http://via.placeholder.com/600x350"
                sourceType={SOURCE_TYP_BOOTSTRAP}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h1 className="h2">Wir sind Technologieberater</h1>
              <p>
                Als Technologieberater machen wir IT-Landschaften belastbar für
                die Anforderungen der Zukunft. Dazu gehört, dass wir
                analysieren, was ist, und kreieren, was neu dazukommen sollte,
                und zwar effizient und kostensparend. Kurz: Wir kümmern uns um
                die Innovation, von der Konzeption bis zur Praxis.
              </p>
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text={buttonLinkText}
                path="/beratungsfelder/technologie"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderStartseite

export const pageQuery = graphql`
  query BeratungsfelderQuery {
    imageCool: imageSharp {
      sizes(maxWidth: 1600, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilLinksSharp: imageSharp(
      id: { regex: "/ZEiMMpHD0Ium86MUc6oi0/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilMitteSharp: imageSharp(
      id: { regex: "/c14zZzUPkdQy4gMImWEWAMS/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilRechtsSharp: imageSharp(
      id: { regex: "/c6jYnfcyIh2Q4Mm4YMiI822/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
