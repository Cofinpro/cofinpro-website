import React from 'react'
import Link from 'gatsby-link'

import RelevanteLinks from '../../../components/relevanteLinks'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'

import PageIntroText from '../../../components/text/PageIntroText'

import {
  ImageWrapper,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderTechnologie extends React.Component {
  render() {
    let focusThemsWrapper = this.props.data.allContentfulFokusthemaEinteilung
      .edges[0].node

    let relevantFocusFields = []

    for (let i = 0; i < focusThemsWrapper.fokusthemenTechnologie.length; ++i) {
      relevantFocusFields.push({
        title: focusThemsWrapper.fokusthemenTechnologie[i].uberschriftGanzOben,
        url:
          '/fokusthemen/thema/' +
          focusThemsWrapper.fokusthemenTechnologie[i].url,
      })
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
            <div className="col-12 col-md-9 col-lg-7">
              <div className="row">
                <div className="col-3 col-lg-2">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_BOOTSTRAP}
                    source={
                      '/img/beratungsfelder/technologie/Technologie-Icon.png'
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h1 className="h1 margin-20-top">
                    Unsere Technologieberatung
                  </h1>
                  <h2 className="h2 margin-20-top">
                    Wie sich IT und Zukunft<br />verbinden lassen
                  </h2>
                  <PageIntroText
                    content={{
                      text:
                        'Neue Anforderungen an Unternehmen verlangen nach IT-Landschaften, die belastbar und in die Zukunft gerichtet sind. Mit unserer Technologieberatung nehmen wir die IT-Herausforderungen unserer Kunden auf, erarbeiten Lösungen und setzen sie um. Wir analysieren also Bestehendes, kreieren Neues und weisen den Weg in Richtung Zukunft. So, wie es zu unseren Kunden passt und in engem Austausch, aber das versteht sich von selbst.',
                    }}
                    style={{ container: 'margin-40-top margin-xs-0-top' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-5">
              {/*<RelevanteLinks
                title="relevante fokusthemen"
                relevanteLinks={relevantFocusFields}
              />*/}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-120-top margin-xs-40-top justify-content-center">
            <div className="col-md-10">
              <h3 className="h2 text-primary text-center">
                Wir betrachten die Plattformen <br />unserer Kunden ganzheitlich
              </h3>
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.headlineImageSharp}
                styleClasses={'margin-30-top'}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-120-top">
            <div className="col-md-6">
              <h2>
                Zukunft? <br />Bitte hier entlang
              </h2>
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
          <div className="row margin-120-top margin-xs-40-top">
            <div className="col-md-6">
              <h3 className="h3">
                Unsere Projektleistungen in der Technologieberatung in Kürze
              </h3>
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.processImageSharp}
                styleClasses={'margin-30-top'}
              />
              <p className="margin-40-top margin-xs-20-top">
                <ul className="blue-bullet">
                  <li>
                    <b>
                      <Link to={'/fokusthemen/thema/assessment-und-roadmap'}>
                        Assessment und Roadmap:
                      </Link>
                    </b>{' '}
                    Wir nehmen die Anforderungen an die IT unserer Kunden
                    individuell auf, analysieren die aktuelle IT-Landschaft und
                    erarbeiten zusammen eine Roadmap zur Weiterentwicklung.<p />
                  </li>
                  <li>
                    <b>
                      <Link
                        to={
                          '/fokusthemen/thema/modernisierung-von-it-architekturen'
                        }
                      >
                        Modernize:
                      </Link>
                    </b>{' '}
                    Wir analysieren vorhandene Anwendungen und Architekturen
                    technisch, erarbeiten Ansätze zur Modernisierung und
                    bewerten sie im engen Austausch. Beim Konzeptionieren der
                    IT-Architektur machen wir nicht halt, sondern setzen neue
                    Lösungen auch um.<p />
                  </li>
                  <li>
                    <b>
                      <Link to={'/fokusthemen/thema/aufbau-neuer-plattformen'}>
                        Create:
                      </Link>
                    </b>{' '}
                    Wir kümmern uns um den Aufbau neuer Plattformen für
                    effizientere Prozessketten. Und wir schaffen modulare
                    Architekturen für Kooperationspartner und B2B-Kunden sowie
                    Lösungen für digitale Geschäftsmodelle.
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
                    text: 'WEITERE REFERENZEN',
                    path: '/projekte/technologieberatung',
                  },
                },
                left: {
                  header: 'Medien',
                  description:
                    'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                  button: {
                    text: 'WEITERE PUBLIKATIONEN',
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
    allContentfulFokusthemaEinteilung {
      edges {
        node {
          fokusthemenTechnologie {
            id
            url
            uberschriftGanzOben
            unterueberschrift
            icon
            relevanteBeratungsfelder
            headline {
              headline
            }
          }
        }
      }
    }
    titelBildDesktopSharp: imageSharp(
      id: { regex: "/Technologie-Titelbild-Desktop/" }
    ) {
      sizes(quality: 80, maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    titelBildMobileSharp: imageSharp(
      id: { regex: "/Technologie-Titelbild-Mobile/" }
    ) {
      sizes(quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    iconImageSharp: imageSharp(id: { regex: "/technologieberatung/" }) {
      sizes(quality: 100, maxWidth: 200) {
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
