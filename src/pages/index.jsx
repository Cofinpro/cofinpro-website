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
  createMediaDataStructureForDownloads(_input) {
    let result = []

    for (let i = 0; i < _input.length; ++i) {
      result.push({
        to: `/pdf/contentful/${_input[i].datei.id}.pdf`,
        linkType: 'external',
        header: _input[i].beschriftungDesDownloads,
        date: _input[i].datumDerVerffentlichung,
        description:
          _input[i].beschreibung !== null
            ? _input[i].beschreibung.beschreibung
            : null,
      })
    }
    return result
  }

  createMediaDataStructureForPressemeldung(_input) {
    let result = []

    for (let i = 0; i < _input.length; ++i) {
      result.push({
        to: _input[i].urlDerSeite,
        linkType: 'internal',
        header: _input[i].ueberschrift,
        subHeader: _input[i].unteruebrschrift,
        date: _input[i].verffentlichungsdatum,
        description:
          _input[i].introText !== null ? _input[i].introText.introText : null,
      })
    }
    return result
  }

  createMediaDataStructureForVeroeffentlichung(_input) {
    let result = []

    for (let i = 0; i < _input.length; ++i) {
      let url = ''
      let linkType = ''
      if (
        _input[i].urlDerVerffentlichung !== undefined &&
        _input[i].urlDerVerffentlichung !== null
      ) {
        url = _input[i].urlDerVerffentlichung
      }
      if (_input[i].pdfDatei !== undefined && _input[i].pdfDatei !== null) {
        url = `/pdf/contentful/${_input[i].pdfDatei.id}.pdf`
      }

      result.push({
        to: url,
        linkType: 'external',
        header: _input[i].ueberschrift,
        subHeader: _input[i].unterUeberschrift,
        date: _input[i].datumDerVerffentlichung,
        description:
          _input[i].beschreibung !== null
            ? _input[i].beschreibung.beschreibung
            : null,
      })
    }
    return result
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var fokusthemen = []

    let focusThemsWrapper = this.props.data.allContentfulFokusthemaEinteilung
      .edges[0].node

    for (let i = 0; i < focusThemsWrapper.fokusthemenStartseite.length; ++i) {
      fokusthemen.push(focusThemsWrapper.fokusthemenStartseite[i])
    }

    let medienEinteilung = {}
    let edges = this.props.data.allContentfulMedienEinteilung.edges

    for (let i = 0; i < edges.length; ++i) {
      if (edges[i].node.id === 'A2YNdv1hwOCuGueqyCiMO') {
        medienEinteilung = edges[i].node
      }
    }

    let medien = []

    if (medienEinteilung.startseiteVerlinkungZuDownloads != null) {
      medien = medien.concat(
        this.createMediaDataStructureForDownloads(
          medienEinteilung.startseiteVerlinkungZuDownloads
        )
      )
    }

    if (medienEinteilung.startseiteVerlinkungZuVeroeffentlichungen != null) {
      medien = medien.concat(
        this.createMediaDataStructureForVeroeffentlichung(
          medienEinteilung.startseiteVerlinkungZuVeroeffentlichungen
        )
      )
    }

    if (medienEinteilung.startseiteVerlinkungZuPressemeldungen != null) {
      medien = medien.concat(
        this.createMediaDataStructureForPressemeldung(
          medienEinteilung.startseiteVerlinkungZuPressemeldungen
        )
      )
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-none d-md-block">
                <ImageWrapper
                  sourceType={SOURCE_TYP_SHARP}
                  source={this.props.data.titelBildDesktopSharp}
                />
              </div>
              <div className="d-block d-md-none">
                <ImageWrapper
                  sourceType={SOURCE_TYP_SHARP}
                  source={this.props.data.titelBildMobileSharp}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-60-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8">
              <h1 className="h1">Hallo, hier ist Cofinpro</h1>
              <p className="h4 normal-font d-none d-lg-block margin-20-top">
                Wir sind die Management-, Fach- und Technologieberatung für
                Deutschlands führende Banken und
                Kapitalverwaltungsgesellschaften. <br />
                <br />Als Experten für Kredit und Wertpapier begleiten und
                navigieren wir unsere Kunden durch die Herausforderungen von
                Digitalisierung, neuen Marktanforderungen und Regulatorik.
              </p>
              <p className="h5 normal-font d-none d-md-block d-lg-none margin-20-top">
                Wir sind die Management-, Fach- und Technologieberatung für
                Deutschlands führende Banken und
                Kapitalverwaltungsgesellschaften. <br />
                <br />Als Experten für Kredit und Wertpapier begleiten und
                navigieren wir unsere Kunden durch die Herausforderungen von
                Digitalisierung, neuen Marktanforderungen und Regulatorik.
              </p>
              <p className="d-block normal-font d-md-none margin-20-top">
                Wir sind die Management-, Fach- und Technologieberatung für
                Deutschlands führende Banken und
                Kapitalverwaltungsgesellschaften. <br />
                <br />Als Experten für Kredit und Wertpapier begleiten und
                navigieren wir unsere Kunden durch die Herausforderungen von
                Digitalisierung, neuen Marktanforderungen und Regulatorik.
              </p>
              <LinkButton
                styleLink="d-inline d-md-none margin-10-top"
                styleSpan="margin-20-bottom w-100"
                text="BERATUNGSFELDER ÜBERSICHT"
                path="/beratungsfelder"
              />
              <LinkButton
                styleSpan="w-100 w-md-unset margin-10-top"
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
              <h2 className="h2">Neues von Cofinpro</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              {medien.length > 0 && (
                <NewsMedienPreview
                  content={{
                    url: medien[0].to,
                    linkType: medien[0].linkType,
                    header: medien[0].header,
                    subHeader: medien[0].subHeader,
                    image: this.props.data.newsMedienLinks,
                    date: medien[0].date,
                    publishedBy: medien[0].publishedBy,
                    intro: medien[0].description,
                  }}
                />
              )}
            </div>
            <div className="col-12 col-md-6">
              {medien.length > 1 && (
                <NewsMedienPreview
                  content={{
                    url: medien[1].to,
                    linkType: medien[1].linkType,
                    header: medien[1].header,
                    subHeader: medien[1].subHeader,
                    image: this.props.data.newsMedienRechts,
                    date: medien[1].date,
                    publishedBy: medien[1].publishedBy,
                    intro: medien[1].description,
                  }}
                />
              )}
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
          showButton={true}
          style={{ container: 'margin-120-top margin-xs-80-top' }}
        />
      </div>
    )
  }
}

export default Startseite

export const pageQuery = graphql`
  query StartseiteQuery {
    allContentfulFokusthemaEinteilung {
      edges {
        node {
          id
          fokusthemenStartseite {
            id
            url
            uberschriftGanzOben
            unterueberschrift
            icon
            headline {
              headline
            }
          }
        }
      }
    }
    allContentfulMedienEinteilung {
      edges {
        node {
          id
          startseiteVerlinkungZuDownloads {
            id
            contentfulInternerName
            datumDerVerffentlichung
            beschriftungDesDownloads
            zuordnungZuBereiche
            artDesDownloads
            nurImArchivAnzeigen
            beschreibung {
              beschreibung
            }
            datei {
              id
              title
              description
            }
          }
          startseiteVerlinkungZuPressemeldungen {
            id
            contentfulInternerName
            verffentlichungsdatum
            urlDerSeite
            downloadDatei {
              id
              title
              description
            }
            downloadBeschreibenderText {
              downloadBeschreibenderText
            }
            pressemeldungNurImArchivAnzeigen
            anzeigenFuerBeratungsfelder
            ueberschrift
            unteruebrschrift
            introText {
              introText
            }
          }
          startseiteVerlinkungZuVeroeffentlichungen {
            id
            contentfulInternerName
            datumDerVerffentlichung
            ueberschrift
            unterUeberschrift
            zuordnungZuBereiche
            pdfDatei {
              id
              title
              description
            }
            beschreibung {
              beschreibung
            }
            urlDerVerffentlichung
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
    titelBildDesktopSharp: imageSharp(
      id: { regex: "/Startseite-Titelbild-Desktop/" }
    ) {
      sizes(quality: 80, maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    titelBildMobileSharp: imageSharp(
      id: { regex: "/Startseite-Titelbild-Mobile/" }
    ) {
      sizes(quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    newsMedienLinks: imageSharp(id: { regex: "/startseite-b12/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    newsMedienRechts: imageSharp(id: { regex: "/startseite-b17/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
