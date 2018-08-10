import React from 'react'

import LinkButton from '../components/buttons/LinkButton'
import ThreeIconsWithLinks from '../components/layouts/ThreeIconsWithLinks'

import FokusthemenLayout from '../components/layouts/FokusthemenLayout'

import NewsMedienPreview from '../components/startseite/NewsMedienPreview'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../components/images/ImageWrapper'

class Startseite extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var fokusthemen = []

    for (
      let i = 0;
      i < this.props.data.allContentfulFokusthema.edges.length;
      ++i
    ) {
      fokusthemen.push(this.props.data.allContentfulFokusthema.edges[i].node)
    }

    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.heroImageSharp}
              />
            </div>
          </div>
        </div>

        <div className="container margin-80-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Hallo, hier ist Cofinpro</h1>
              <p>
                Wir sind die Management-, Fach- und Technologieberatung für
                Deutschlands führende Banken und
                Kapitalverwaltungsgesellschaften. Als Experten für Kredit und
                Wertpapier begleiten und navigieren wir unsere Kunden durch die
                Herausforderungen von Digitalisierung, neuen Marktanforderungen
                und Regulatorik.
              </p>
              <LinkButton
                styleLink="d-inline d-md-none"
                styleSpan="margin-20-bottom w-100"
                text="BERATUNGSFELDER ÜBERSICHT"
                path="/beratungsfelder"
              />
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text="MEHR ÜBER COFINPRO"
                path="/cofinpro"
              />
            </div>
          </div>
        </div>

        <ThreeIconsWithLinks
          styleClass="margin-80-top"
          iconLeft={this.props.data.iconVorteilLinksSharp}
          titleLeft="Managementberatung"
          iconMiddle={this.props.data.iconVorteilMitteSharp}
          titleMiddle="Fachberatungext"
          iconRight={this.props.data.iconVorteilRechtsSharp}
          titleRight="Technologieberatung"
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12">
              <h3 className="h2">Neues von Cofinpro</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <NewsMedienPreview
                content={{
                  url: '/',
                  header:
                    'Studie: Sprint? Digitaler Wandel fordert von Banken Ausdauer statt Aktivismus',
                  image: this.props.data.newsMedienLinks,
                  date: '11.08.2018',
                  publishedBy: 'IT Finanzmagazin, 06/2018',
                  intro:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                }}
              />
            </div>
            <div className="col-12 col-md-6">
              <NewsMedienPreview
                content={{
                  url: '/',
                  header:
                    'Studie: Sprint? Digitaler Wandel fordert von Banken Ausdauer statt Aktivismus',
                  image: this.props.data.newsMedienRechts,
                  date: '11.08.2018',
                  publishedBy: 'IT Finanzmagazin, 06/2018',
                  intro:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12">
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text="NEWS&MEDIEN ÜBERSICHT"
                path="/news-medien"
                {...this.props}
              />
            </div>
          </div>
        </div>

        <FokusthemenLayout
          header={'Unsere Fokusthemen'}
          description={
            ' Mit Teams aus Management-, Fach- und Technologieberatern unterstützen wir Banken und Kapitalverwaltungsgesellschaften, damit sie den  unterschiedlichsten Herausforderungen gerecht werden. Hier möchten wir Ihnen einen Einblick in unser Leistungsspektrum geben, von der agilen Transformation oder dem Aufsatz von Effizienzsteigerungen über die Regulierung und Digitalisierung im Kredit- und Wertpapiergeschäft bis hin zum Design moderner Plattform-Architekturen und vielen Themen mehr.'
          }
          fokusthemen={fokusthemen}
          style={{ container: 'margin-120-top margin-xs-80-top' }}
        />
      </div>
    )
  }
}

export default Startseite

export const pageQuery = graphql`
  query StartseiteQuery {
    allContentfulFokusthema {
      edges {
        node {
          id
          url
          uberschriftGanzOben
          unterueberschrift
          icon
          beratungsfelder
          headline {
            headline
          }
        }
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
    heroImageSharp: imageSharp(
      id: { regex: "/20180718-cofinpro-stills19468-sw/" }
    ) {
      sizes(quality: 100, maxWidth: 2000, maxHeight: 1000, cropFocus: SOUTH) {
        ...GatsbyImageSharpSizes
      }
    }
    newsMedienLinks: imageSharp(id: { regex: "/startseite-b12/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: SOUTH) {
        ...GatsbyImageSharpSizes
      }
    }
    newsMedienRechts: imageSharp(id: { regex: "/startseite-b17/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: SOUTH) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
