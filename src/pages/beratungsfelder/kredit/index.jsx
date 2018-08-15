import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import FokusThemenFachLayout from '../../../components/layouts/FokusThemenFachLayout'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderKredit extends React.Component {
  render() {
    var fokusthemen = []

    let focusThemsWrapper = this.props.data.allContentfulZuordnungFokusthemen
      .edges[0].node

    for (let i = 0; i < focusThemsWrapper.fokusthemenKredit.length; ++i) {
      fokusthemen.push(focusThemsWrapper.fokusthemenKredit[i])
    }

    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.kreditImageSharp}
              />
            </div>
          </div>
        </div>

        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <div className="d-none d-md-block">
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={this.props.data.iconImageSharp}
                    />
                  </div>
                  <div className="d-block d-md-none">
                    <ImageWrapper
                      sourceType={SOURCE_TYP_SHARP}
                      source={this.props.data.iconImageSharp}
                      styleClasses="beratungs-icons"
                    />
                  </div>
                </div>
              </div>
              <div className="row margin-20-top">
                <div className="col-md-12">
                  <h1 className="h1">Kreditgeschäft</h1>
                  <h2 className="h2 margin-20-top d-none d-md-block">
                    Unsere Fachberatung im Kreditgeschäft
                  </h2>
                  <p className="d-block d-md-none">
                    Unsere Fachberatung im Kreditgeschäft
                  </p>
                  <h4 className="h4 margin-40-top d-none d-md-block">
                    Mit Lösungen für das Kreditgeschäft von morgen unterstützen
                    wir Sie im steigenden Wettbewerb, in der Ausrichtung zu
                    zeitgemäßer Kundenorientierung und der Bewältigung der
                    Anforderungen aus der Regulatorik.
                  </h4>
                  <p className="d-block d-md-none">
                    Mit Lösungen für das Kreditgeschäft von morgen unterstützen
                    wir Sie im steigenden Wettbewerb, in der Ausrichtung zu
                    zeitgemäßer Kundenorientierung und der Bewältigung der
                    Anforderungen aus der Regulatorik.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>
        <div className="container margin-140-top margin-xs-60-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">Im Wettbewerb bestehen </h2>
              <p className="text-left margin-20-top">
                Die Kreditbranche ist von starkem Wettbewerb geprägt, und
                Institute sind herausgefordert, sich stetig zu verbessern.
                Einerseits müssen Produktionskosten sinken, um die
                Konkurrenzfähigkeit zu sichern. Andererseits dürfen
                Optimierungen nicht zu Lasten des Kunden gehen. Denn
                Kundengewinnung und Kundenbindung sind erfolgsentscheidender
                denn je. Im Kontext von Digitalisierung und Industrialisierung
                der Kreditprozesse muss nicht nur die konsequente Steigerung der
                Wettbewerbsfähigkeit berücksichtigt werden, sondern auch die
                Umsetzung regulatorischer Anforderungen. Dafür braucht es neue
                fachliche und auch IT-technische Lösungen.
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row margin-140-top margin-xs-60-top">
            <div className="col-12">
              <h2 className="h2 text-primary text-center">Kreditprozess</h2>
              <ImageWrapper
                sourceType={SOURCE_TYP_SHARP}
                source={this.props.data.processImageSharp}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-120-top margin-xs-80-top">
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2 className="h2">Die Zukunft kann kommen</h2>
              <p className="text-left margin-20-top">
                Als Fachberater im Kreditgeschäft kombinieren wir Wissen und
                langjährige Praxiserfahrung mit wirksamen Beratungsmethoden und
                technischem Know-how. Es ist diese Kompetenzbündelung, mit der
                wir die zu Ihnen passenden Konzepte, effiziente Prozesse und
                agile IT-Lösungen entwickeln. So lassen sich Kosten senken, und
                Sie können auf die Regularien und Marktanforderungen flexibel
                reagieren. In den Themen Vertrieb, Antrags- und
                Bestandsprozesse, Reporting und Meldewesen bringen wir unsere
                Expertise in den Produktfeldern Konsumentenkredit,
                Immobilienfinanzierung und Gewerbe- und Firmenkundenkredite ein,
                aber auch jede Menge Einblicke in aktuelle Regulierungen. Und
                natürlich sorgen wir auf Wunsch dafür, dass unsere Empfehlungen
                auch in die Praxis umgesetzt werden.
              </p>
            </div>
          </div>
        </div>

        <FokusThemenFachLayout
          text={'Unsere Themen rund um Fachberatung im Kreditgeschäft:'}
          fokusthemen={fokusthemen}
        />

        <div className="container margin-100-top">
          <ReferenzAndDownload
            content={{
              right: {
                header: 'Referenzprojekte',
                description:
                  'Welche Projekte haben wir im Kontext unserer Fokusthemen schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
                button: {
                  text: 'Alle Referenzen zum Thema',
                  path: '/projekte/fachberatung-kredit',
                },
              },
              left: {
                header: 'Medien',
                description:
                  'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                button: {
                  text: 'Alle Publikationen zum Thema',
                  path: '/news-medien/fachberatung-kredit',
                },
              },
            }}
          />
        </div>
      </div>
    )
  }
}

export default BeratungsfelderKredit

export const pageQuery = graphql`
  query BeratungsfelderKreditQuery {
    allContentfulZuordnungFokusthemen {
      edges {
        node {
          fokusthemenKredit {
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
    }
    kreditImageSharp: imageSharp(id: { regex: "/Kredit/" }) {
      sizes(quality: 100, maxWidth: 2000, maxHeight: 1000, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    iconImageSharp: imageSharp(id: { regex: "/fachberatung/" }) {
      sizes(quality: 100, maxWidth: 130, maxHeight: 143, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    processImageSharp: imageSharp(id: { regex: "/fb1/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
