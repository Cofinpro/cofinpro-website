import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';

import ReferenzAndDownload from 'components/ReferenzAndDownload';
import FokusThemenFachLayout from 'components/layouts/FokusThemenFachLayout';
import PageIntroText from 'components/PageIntroText';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImageFluid } from 'models/SharpImageFluid';

interface Props {
  data: {
    allContentfulFokusthemaEinteilung: any;
    processImageSharp: SharpImageFluid;
    processImageSharpM: SharpImageFluid;
    titelBildDesktopSharp: SharpImageFluid;
    titelBildMobileSharp: SharpImageFluid;
  };
  location: any;
  history: any;
}

class BeratungsfelderKredit extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const focusThemsWrapper = this.props.data.allContentfulFokusthemaEinteilung.edges[0].node;
    const fokusthemen = [...focusThemsWrapper.fokusthemenKredit];

    return (
      <Layout location={this.props.location}>
        <div className="container negative-margin-30-top">
          <div className="row">
            <div className="col-md-12">
              <div className="d-none d-md-block">
                <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.titelBildDesktopSharp} />
              </div>
              <div className="d-block d-md-none">
                <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.titelBildMobileSharp} />
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-60-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="row d-flex d-md-none">
                <div className="col-3 col-lg-2">
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/beratungsfelder/fach/Fachberatung-Icon.png'} />
                </div>
              </div>
              <div className="row margin-20-top">
                <div className="col-md-12">
                  <h1 className="h1 margin-xs-20-top">Kreditgeschäft</h1>
                  <h2 className="h2 normal-font margin-20-top d-none d-md-block">Unsere Fachberatung im Kreditgeschäft</h2>
                  <p className="normal-font d-block d-md-none">Unsere Fachberatung im Kreditgeschäft</p>
                  <PageIntroText
                    content={{
                      text:
                        'Mit Lösungen für das Kreditgeschäft von morgen unterstützen wir Sie im steigenden Wettbewerb, in der Ausrichtung zu zeitgemäßer Kundenorientierung und der Bewältigung der Anforderungen aus der Regulatorik.',
                    }}
                    style={{ container: 'margin-40-top margin-xs-0-top' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1 d-block d-lg-none" />
            <div className="col-12 col-md-3 col-lg-5">
              <div className="row d-none d-md-flex justify-content-end">
                <div className="col-12 col-md-12 col-lg-6">
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/beratungsfelder/fach/Fachberatung-Icon.png'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-120-top margin-xs-60-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">Im Wettbewerb bestehen</h2>
              <p className="text-left margin-20-top">
                Die Kreditbranche ist von starkem Wettbewerb geprägt, und Institute sind herausgefordert, sich stetig zu verbessern.
                Einerseits müssen Produktionskosten sinken, um die Konkurrenzfähigkeit zu sichern. Andererseits dürfen Optimierungen nicht
                zu Lasten des Kunden gehen. Denn Kundengewinnung und Kundenbindung sind erfolgsentscheidender denn je. Im Kontext von
                Digitalisierung und Industrialisierung der Kreditprozesse muss nicht nur die konsequente Steigerung der Wettbewerbsfähigkeit
                berücksichtigt werden, sondern auch die Umsetzung regulatorischer Anforderungen. Dafür braucht es neue fachliche und auch
                IT-technische Lösungen.
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row margin-120-top d-none d-md-block">
            <div className="col-12">
              <h2 className="h2 text-primary text-center">Kreditprozess</h2>
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.processImageSharp} styleClasses={'margin-30-top'} />
            </div>
          </div>
          <div className="row margin-xs-20-top d-flex d-md-none justify-content-center">
            <h2 className="h2 text-primary text-center">Kreditprozess</h2>
          </div>
          <div className="row margin-xs-20-top d-flex d-md-none justify-content-center">
            <div className="col-6">
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.processImageSharpM} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row margin-120-top margin-xs-80-top">
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2 className="h2">Die Zukunft kann kommen</h2>
              <p className="text-left margin-20-top">
                Als Fachberater im Kreditgeschäft kombinieren wir Wissen und langjährige Praxiserfahrung mit wirksamen Beratungsmethoden und
                technischem Know-how. Es ist diese Kompetenzbündelung, mit der wir die zu Ihnen passenden Konzepte, effiziente Prozesse und
                agile Lösungen entwickeln. So lassen sich Kosten senken, und Sie können auf die Regularien und Marktanforderungen flexibel
                reagieren.
              </p>
              <p>
                In den Themen Vertrieb, Antrags- und Bestandsprozesse, Reporting und Meldewesen bringen wir unsere Expertise in den
                Produktfeldern Konsumentenkredit, Immobilienfinanzierung sowie Gewerbe- und Firmenkundenkredite ein, aber auch jede Menge
                Einblicke in aktuelle Regulierungen. Und natürlich sorgen wir auf Wunsch dafür, dass unsere Empfehlungen auch in die Praxis
                umgesetzt werden.
              </p>
            </div>
          </div>
        </div>

        <FokusThemenFachLayout
          style={{
            container: '',
            textCol: 'col-md-5',
          }}
          text={'Unsere Themen rund um Fachberatung im Kreditgeschäft:'}
          fokusthemen={fokusthemen}
        />

        <div className="container margin-120-top">
          <ReferenzAndDownload
            content={{
              right: {
                header: 'Referenzprojekte',
                description:
                  'Welche Projekte haben wir im Kontext unserer Fokusthemen schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
                button: {
                  text: 'WEITERE REFERENZEN',
                  path: '/projekte/fachberatung-kredit',
                },
              },
              left: {
                header: 'Medien',
                description:
                  'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                button: {
                  text: 'WEITERE PUBLIKATIONEN',
                  path: '/news-medien/fachberatung-kredit',
                },
              },
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default BeratungsfelderKredit;

export const pageQuery = graphql`
  query BeratungsfelderKreditQuery {
    allContentfulFokusthemaEinteilung {
      edges {
        node {
          fokusthemenKredit {
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

    titelBildDesktopSharp: file(relativePath: { regex: "/Kredit-Titelbild-Desktop/" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    titelBildMobileSharp: file(relativePath: { regex: "/Kredit-Titelbild-Mobile/" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    processImageSharp: file(relativePath: { regex: "/fb1/" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    processImageSharpM: file(relativePath: { regex: "/kreditprozessmobile/" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
