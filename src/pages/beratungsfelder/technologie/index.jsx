import React from 'react'

import RelevanteLinks from '../../../components/relevanteLinks'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'

import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderTechnologie extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.techImageSharp}
              />
            </div>
          </div>
        </div>
        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_SHARP}
                    source={this.props.data.iconImageSharp}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h1 className="h1 margin-20-top">Technologieberatung</h1>
                  <h2 className="h2 margin-20-top">
                    Wie sich IT und Zukunft<br />verbinden lassen
                  </h2>
                  <p className="h4 normal-font d-none d-lg-block margin-40-top">
                    Neue Anforderungen an Unternehmen verlangen nach
                    IT-Landschaften, die belastbar und in die Zukunft gerichtet
                    sind. Mit unserer Technologieberatung nehmen wir die
                    IT-Herausforderungen unserer Kunden auf, erarbeiten Lösungen
                    und setzen sie um. Wir analysieren also Bestehendes,
                    kreieren Neues und weisen den Weg in Richtung Zukunft. So,
                    wie es zu unseren Kunden passt und in engem Austausch, aber
                    das versteht sich von selbst.
                  </p>
                  <p className="h5 normal-font d-none d-md-block d-lg-none margin-40-top">
                    Neue Anforderungen an Unternehmen verlangen nach
                    IT-Landschaften, die belastbar und in die Zukunft gerichtet
                    sind. Mit unserer Technologieberatung nehmen wir die
                    IT-Herausforderungen unserer Kunden auf, erarbeiten Lösungen
                    und setzen sie um. Wir analysieren also Bestehendes,
                    kreieren Neues und weisen den Weg in Richtung Zukunft. So,
                    wie es zu unseren Kunden passt und in engem Austausch, aber
                    das versteht sich von selbst.
                  </p>
                  <p className="d-block normal-font d-md-none margin-40-top">
                    Neue Anforderungen an Unternehmen verlangen nach
                    IT-Landschaften, die belastbar und in die Zukunft gerichtet
                    sind. Mit unserer Technologieberatung nehmen wir die
                    IT-Herausforderungen unserer Kunden auf, erarbeiten Lösungen
                    und setzen sie um. Wir analysieren also Bestehendes,
                    kreieren Neues und weisen den Weg in Richtung Zukunft. So,
                    wie es zu unseren Kunden passt und in engem Austausch, aber
                    das versteht sich von selbst.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
            <div className="col-md-4">
              <RelevanteLinks
                title="relevante fokusthemen"
                relevanteLinks={[
                  { title: 'hallo1', url: 'sasa' },
                  { title: 'hallo2', url: 'sasa' },
                  { title: 'hallo3', url: 'sasa' },
                  { title: 'hallo4', url: 'sasa' },
                  { title: 'hallo5', url: 'sasa' },
                  { title: 'hallo6', url: 'sasa' },
                  { title: 'hallo7', url: 'sasa' },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-120-top margin-xs-40-top justify-content-center">
            <div className="col-md-10">
              <h2 className="h2 text-primary text-center">Headline</h2>
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.headlineImageSharp}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-60-top">
            <div className="col-md-6">
              <h3>Zukunft? Bitte hier entlang </h3>
            </div>
          </div>
          <div className="row margin justify-content-center">
            <div className="col-md-6">
              <p>
                Auf diese Plattformen für unterschiedliche Zielgruppen
                fokussieren wir uns:<p />
                <ul className="blue-bullet">
                  <li>
                    <b>Customer Experience: </b>Diese Plattform stellt den
                    B2C-Kunden in den Mittelpunkt. Eine hohe User Experience
                    ermöglicht den digitalen Vertrieb (komplexer)
                    Finanzprodukte. Die Analyse des Kundenverhaltens hilft, ihn
                    lückenlos zu verstehen. Durch die flexible Anpassbarkeit
                    können Änderungen im Markt bzw. geändertes Kundenverhalten
                    schnell abgebildet werden.<p />
                  </li>
                  <li>
                    <b>Ecosystems: </b> Regulatorik (PSD2) beschleunigt
                    Marktveränderungen, der Trend zur stärkeren Spezialisierung
                    der Banken wird gefördert. Hier kommt Unbundling Banks in
                    Spiel. Banken entscheiden für jedes ihrer Produkte, ob sie
                    es selbst herstellen, von anderen einkaufen oder anderen
                    anbieten. Damit steigen die Anforderungen an die
                    Interoperabilität von IT-Systemen. Mit dieser Plattform
                    setzen wir auf die Bereitstellung und Verwaltung von APIs,
                    die Modularisierung der Systemlandschaft und auf die
                    Anbindung von Legacy-Systemen zur Abbildung fachlicher
                    Services.<p />
                  </li>
                  <li>
                    <b>Information Systems: </b>Diese Plattform automatisiert
                    fachliche Prozesse im Unternehmen Ende-zu-Ende und macht sie
                    so effizienter.
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Um diese Plattformen zu entwickeln, bauen wir ein starkes
                Fundament. Dafür verwenden wir die aktuellste
                Entwicklungs-Infrastruktur, die unter anderem beinhaltet:<p />
                <ul className="blue-bullet">
                  <li>
                    moderne Methoden im Software Engineering wie DevOps und
                    Scrum<p />
                  </li>
                  <li>
                    Continuous Delivery zur automatisierten und schnellen
                    Bereitstellung von Software in kurzen Zyklen<p />
                  </li>
                  <li>
                    Toolchains zur Steigerung von Effizienz und Qualität
                    innerhalb der Software-Entwicklung
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="row margin-140-top margin-xs-40-top">
            <div className="col-md-6">
              <h3 className="h3">
                Unsere Projektleistungen in der Technologieberatung in Kürze
              </h3>
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.processImageSharp}
              />
              <p className="margin-20-top margin-xs-20-top">
                <ul className="blue-bullet">
                  <li>
                    <b>Assessment und Roadmap:</b> Wir nehmen die Anforderungen
                    an die IT unserer Kunden individuell auf, analysieren die
                    aktuelle IT-Landschaft und erarbeiten zusammen eine Roadmap
                    zur Weiterentwicklung.<p />
                  </li>
                  <li>
                    <b>Modernize:</b> Wir analysieren vorhandene Anwendungen und
                    Architekturen technisch, erarbeiten Ansätze zur
                    Modernisierung und bewerten sie im engen Austausch. Beim
                    Konzeptionieren der IT-Architektur machen wir nicht halt,
                    sondern setzen neue Lösungen auch um.<p />
                  </li>
                  <li>
                    <b>Create:</b> Wir kümmern uns um den Aufbau neuer
                    Plattformen für effizientere Prozessketten. Und wir schaffen
                    modulare Architekturen für Kooperationspartner und
                    B2B-Kunden sowie Lösungen für digitale Geschäftsmodelle.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="margin-120-top margin-xs-40-top">
            <ReferenzAndDownload
              content={{
                right: {
                  header: 'Referenzprojekte',
                  description:
                    'Welche Projekte haben wir im Kontext unserer Fokusthemen schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
                  button: {
                    text: 'Alle Referenzen zum Thema',
                    path: '/projekte/technologieberatung',
                  },
                },
                left: {
                  header: 'Medien',
                  description:
                    'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                  button: {
                    text: 'Alle Publikationen zum Thema',
                    path: '/news-medien/technologieberatung',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTechnologie

export const pageQuery = graphql`
  query BeratungsfelderTechQuery {
    techImageSharp: imageSharp(id: { regex: "/Technologieberatung/" }) {
      sizes(quality: 100, maxWidth: 2000, maxHeight: 800, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    iconImageSharp: imageSharp(id: { regex: "/technologieberatung/" }) {
      sizes(quality: 100, maxWidth: 300) {
        ...GatsbyImageSharpSizes
      }
    }
    headlineImageSharp: imageSharp(id: { regex: "/tech3/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    processImageSharp: imageSharp(id: { regex: "/tech4/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    processImageSharpM: imageSharp(id: { regex: "/tech4_m/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
