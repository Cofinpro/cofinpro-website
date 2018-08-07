import React from 'react'

import RelevanteFokusthemen from '../../../components/RelevanteFokusthemen'
import ReferenzAndDownload from '../../../components/ReferenzAndDownload'
import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../../components/images/ImageWrapper'

class BeratungsfelderKredit extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-md-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 800,
                }}
              />
            </div>
          </div>
        </div>

        <div className="container margin-40-top">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 128,
                      height: 132,
                    }}
                  />
                </div>
              </div>

              <h1 className="h1 margin-20-top">Kreditgeschäft</h1>
              <h2 className="h2 margin-20-top d-none d-md-block">
                Unsere Fachberatung im Kreditgeschäft
              </h2>
              <p className="d-block d-md-none">
                Unsere Fachberatung im Kreditgeschäft
              </p>
              <h4 className="h4 margin-40-top d-none d-md-block">
                Mit Lösungen für das Kreditgeschäft von morgen unterstützen wir
                Sie im steigenden Wettbewerb, in der Ausrichtung zu zeitgemäßer
                Kundenorientierung und der Bewältigung der Anforderungen aus der
                Regulatorik.
              </h4>
              <p className="d-block d-md-none">
                Mit Lösungen für das Kreditgeschäft von morgen unterstützen wir
                Sie im steigenden Wettbewerb, in der Ausrichtung zu zeitgemäßer
                Kundenorientierung und der Bewältigung der Anforderungen aus der
                Regulatorik.
              </p>
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
        <div className="container">
          <div className="row margin-140-top margin-xs-60-top">
            <div className="col-12">
              <h2 className="h2 text-primary text-center">Kreditprozess</h2>
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 200,
                }}
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

        <div className="container">
          <div className="row margin-40-top">
            <div className="col-12 col-md-5 ">
              <h3 className="h3">
                Unsere Themen rund um Fachberatung im Kreditgeschäft:
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 margin-100-top margin-xs-20-top">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="Kundenbindung und Effizienz in der Bestandsführung "
                    styleClasses="h4"
                  />
                }
              />
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="Data Governance für regulatorische Compliance (BCBS 239, AnaCredit, ERF) "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row margin-xs-20-top justify-content-center">
                <div className="col-12 col-md-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="Automatisierung in der Bonitätsprüfung und Sicherheitenbewertung "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row margin-40-top margin-xs-20-top">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="kundenorientierte Vertriebswege und digitale Antragsprozesse "
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className="container margin-100-top">
          <ReferenzAndDownload />
        </div>
      </div>
    )
  }
}

export default BeratungsfelderKredit
