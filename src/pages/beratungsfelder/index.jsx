import React from 'react'

import ThreeIconsWithLinks from '../../components/layouts/ThreeIconsWithLinks'
import LinkButton from '../../components/buttons/LinkButton'

import HtmlHeader from '../../components/HtmlHeader'

import PageIntroText from '../../components/text/PageIntroText'

import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class BeratungsfelderStartseite extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const buttonLinkText = 'MEHR'

    let seoTitle =
      'Beratungsfelder - Management-, Fach- und Technologieberatung'
    let seoDescription =
      'Wir sind Experten für Kredit und Wertpapier und beraten führende Banken und Kapitalverwaltungsgesellschaften. Als Managementberater, Fachberater und Technologieberater haben wir die Zukunftsfähigkeit unserer Kunden im Blick.'

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: seoTitle,
            description: seoDescription,
          }}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7">
              <h1 className="h1">Das sind unsere Beratungsfelder </h1>
              <PageIntroText
                content={{
                  text:
                    'Wir sind Experten für Kredit und Wertpapier und beraten führende Banken und Kapitalverwaltungsgesellschaften. Als Managementberater, Fachberater und Technologieberater haben wir die Zukunftsfähigkeit unserer Kunden im Blick. Damit sie den Herausforderungen nicht hinterher sind, sondern einen Schritt voraus.',
                }}
              />
            </div>
          </div>
        </div>

        <ThreeIconsWithLinks
          styleClass="d-none d-md-block margin-100-top"
          iconLeft={this.props.data.iconVorteilLinksSharp}
          titleLeft={'Managementberatung'}
          linkLeft={'/beratungsfelder/management'}
          iconMiddle={this.props.data.iconVorteilMitteSharp}
          titleMiddle={'Fachberatung'}
          linkMiddle={'/beratungsfelder/fach'}
          iconRight={this.props.data.iconVorteilRechtsSharp}
          titleRight={'Technologieberatung'}
          linkRight={'/beratungsfelder/technologie'}
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.mngmtHeroImageSharp}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h2 className="h2">Wir sind Managementberater</h2>
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

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 d-md-none">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.fachHeroImageSharp}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h2 className="h2">Wir sind Fachberater</h2>
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
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.fachHeroImageSharp}
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.techHeroImageSharp}
              />
            </div>
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h2 className="h2">Wir sind Technologieberater</h2>
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
    mngmtHeroImageSharp: imageSharp(
      id: { regex: "/Management-Titelbild-Mobile/" }
    ) {
      sizes(quality: 80, maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    fachHeroImageSharp: imageSharp(
      id: { regex: "/Fachberatung-Titelbild-Mobile/" }
    ) {
      sizes(quality: 80, maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    techHeroImageSharp: imageSharp(
      id: { regex: "/Technologie-Titelbild-Mobile/" }
    ) {
      sizes(quality: 80, maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
