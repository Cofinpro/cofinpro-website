import React from 'react';

import ReferenzAndDownload from 'components/ReferenzAndDownload';
import PageIntroText from 'components/PageIntroText';
import FokusThemenFachLayout from 'components/layouts/FokusThemenFachLayout';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  data: {
    allContentfulFokusthemaEinteilung: any;
    titelBildDesktopSharp: SharpImage;
    titelBildMobileSharp: SharpImage;
    processImageSharp: SharpImage;
    processImageSharpM: SharpImage;
    process2ImageSharp: SharpImage;
    process2ImageSharpM: SharpImage;
  };
}

class BeratungsfelderWertpapierTemplate extends React.Component<Props> {
  render() {
    const focusThemsWrapper = this.props.data.allContentfulFokusthemaEinteilung.edges[0].node;
    const fokusthemen = [...focusThemsWrapper.fokusthemenWertpapier];

    return (
      <div>
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
              <div className="row">
                <div className="col-md-12">
                  <h1 className="h1 margin-xs-20-top">Wertpapiergeschäft</h1>
                  <h2 className="h2 normal-font margin-20-top">Unsere Fachberatung im Wertpapiergeschäft</h2>
                  <PageIntroText
                    content={{
                      text:
                        'Langjährige Erfahrung im Wertpapiergeschäft, tiefes methodisches Wissen und hohe Projektmanagement-Kompetenz macht uns zu führenden Beratern.',
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
          <div className="row margin-120-top margin-xs-40-top">
            <div className="col-md-6">
              <h2 className="h2">Wir decken die gesamte Wertschöpfungskette ab</h2>
              <p className="text-left margin-20-top">
                Unsere Leistungen für Banken reichen von Beratung über Vertrieb, Handel und Abwicklung bis Verwahrung.
                Kapitalverwaltungsgesellschaften unterstützen wir bei der Digitalisierung von Geschäftsmodellen, der Umsetzung
                regulatorischer Anforderungen, im Portfoliomanagement und bei der Optimierung ihrer Markt- und Stammdaten.
              </p>
            </div>
          </div>
          <div className="row margin-120-top margin-xs-20-top d-none d-md-block">
            <div className="col-md-12">
              <h3 className="h2 text-primary text-center">Wertpapierprozess</h3>
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.processImageSharp} styleClasses={'margin-30-top'} />
            </div>
          </div>
          <div className="row margin-120-top margin-xs-20-top d-flex d-md-none justify-content-center">
            <h3 className="h2 text-primary text-center">Wertpapierprozess</h3>
          </div>
          <div className="row margin-xs-20-top d-flex d-md-none justify-content-center">
            <div className="col-3">
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.processImageSharpM} styleClasses={'margin-30-top'} />
            </div>
          </div>
          <div className="row margin-80-top margin-xs-20-top d-none d-md-block">
            <div className="col-md-12">
              <h3 className="h2 text-primary text-center">Investmentprozess</h3>
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.process2ImageSharp} styleClasses={'margin-30-top'} />
            </div>
          </div>
          <div className="row margin-120-top margin-xs-20-top d-flex d-md-none justify-content-center">
            <h3 className="h2 text-primary text-center">Investmentprozess</h3>
          </div>
          <div className="row margin-xs-20-top d-flex d-md-none justify-content-center">
            <div className="col-6">
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.process2ImageSharpM} styleClasses={'margin-30-top'} />
            </div>
          </div>
          <div className="row margin-120-top margin-xs-40-top">
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2 className="h2">Alles greift ineinander</h2>
              <p className="text-left margin-20-top">
                Was bewegt Cofinpro im Wertpapiergeschäft? Hier geben wir einen Überblick. Mit unseren Themen in diesem Bereich fokussieren
                wir uns auf die Wertpapierprozesse von Banken und Kapitalverwaltungsgesellschaften. Der Markt hat sich in den vergangenen
                Jahren stark verändert. In Deutschland und weltweit greifen immer stärkere Regulierungsmechanismen, Stichworte wie MiFID II/
                MiFIR, PRIIPs und das Finanzmarktnovellierungsgesetz, die Harmonisierung der europäischen Wertpapierabwicklung sowie
                technologische Neuerungen und Trendthemen machen das Bestehen im Wettbewerb schwieriger denn je. Hier setzen wir mit einem
                ganzheitlichen Beratungsprozess für unsere Kunden an.
              </p>
              <p>
                Es ist also nur konsequent, unser Beratungsangebot ganzheitlich zu gestalten, damit so viele Prozesse wie möglich sinnvoll
                ineinandergreifen.
              </p>
            </div>
          </div>
        </div>
        <FokusThemenFachLayout
          style={{
            textCol: 'col-md-5',
          }}
          text={'Unsere Themen rund um Fachberatung im Wertpapiergeschäft:'}
          fokusthemen={fokusthemen}
        />
        <div className="container">
          <div className="margin-120-top margin-xs-40-top">
            <ReferenzAndDownload
              content={{
                right: {
                  header: 'Referenzprojekte',
                  description:
                    'Welche Projekte haben wir im Kontext unserer Fokusthemen schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
                  button: {
                    text: 'WEITERE REFERENZEN',
                    path: '/projekte/fachberatung-wertpapier',
                  },
                },
                left: {
                  header: 'Medien',
                  description:
                    'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                  button: {
                    text: 'WEITERE PUBLIKATIONEN',
                    path: '/news-medien/fachberatung-wertpapier',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BeratungsfelderWertpapierTemplate;

export const pageQuery = graphql`
  query BeratungsfelderWertQuery {
    allContentfulFokusthemaEinteilung {
      edges {
        node {
          fokusthemenWertpapier {
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
    titelBildDesktopSharp: imageSharp(id: { regex: "/Wertpapier-Titelbild-Desktop/" }) {
      sizes(quality: 80, maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    titelBildMobileSharp: imageSharp(id: { regex: "/Wertpapier-Titelbild-Mobile/" }) {
      sizes(quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    processImageSharp: imageSharp(id: { regex: "/fb2/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    process2ImageSharp: imageSharp(id: { regex: "/fb3/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    processImageSharpM: imageSharp(id: { regex: "/prozessmobile2/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    process2ImageSharpM: imageSharp(id: { regex: "/prozessmobile3/" }) {
      sizes(quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
