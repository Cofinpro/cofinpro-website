import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'

//
import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderTechnologie extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_BOOTSTRAP}
                source={
                  '/img/beratungsfelder/technologie/20180718-cofinpro-stills18919.jpg'
                }
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row margin-20-top">
                <div className="col-md-4">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={
                      '/img/beratungsfelder/technologie/technologieberatung.png'
                    }
                  />
                </div>
              </div>
              <h1 className="h1 margin-20-top">Technologieberatung</h1>
              <h2 className="h2 margin-20-top">
                Wie sich IT und Zukunft<br />verbinden lassen
              </h2>
              <h4 className="h4 margin-40-top">
                Neue Anforderungen an Unternehmen verlangen nach
                IT-Landschaften, die belastbar und in die Zukunft gerichtet
                sind. Mit unserer Technologieberatung nehmen wir die
                IT-Herausforderungen unserer Kunden auf, erarbeiten Lösungen und
                setzen sie um. Wir analysieren also Bestehendes, kreieren Neues
                und weisen den Weg in Richtung Zukunft. So, wie es zu unseren
                Kunden passt und in engem Austausch, aber das versteht sich von
                selbst.
              </h4>
            </div>

            <div className="col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
          <div className="row margin-120-top margin-xs-60-top">
            <div className="col-md-6">
              <h2 className="h2">
                LOREM IPSUM dolor <br />
                sit amet lorem ipsum
              </h2>
              <p className="text-left margin-20-top">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-120-top margin-xs-40-top justify-content-center">
            <div className="col-md-10">
              <h2 className="h2 text-primary text-center">Headline</h2>
              <ImageWrapper
                sourceType={SOURCE_TYP_BOOTSTRAP}
                source={'/img/beratungsfelder/technologie/tech3.png'}
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
                <ul>
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
                <ul>
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
                sourceType={SOURCE_TYP_BOOTSTRAP}
                source={'/img/beratungsfelder/technologie/tech.png'}
              />
              <p className="margin-20-top margin-xs-20-top">
                <ul>
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
            <ReferenzAndDownload />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTechnologie
