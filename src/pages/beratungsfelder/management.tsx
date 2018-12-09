import React from 'react';
import { graphql } from 'gatsby';

import ReferenzAndDownload from 'components/ReferenzAndDownload';
import FokusThemenSmallLayout from 'components/layouts/FokusThemenSmallLayout';
import PageIntroText from 'components/PageIntroText';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  data: {
    allContentfulFokusthemaEinteilung: any;
    processImageSharp: SharpImage;
    processImageSharpM: SharpImage;
    titelBildDesktopSharp: SharpImage;
    titelBildMobileSharp: SharpImage;
    managementMatrixSharp: SharpImage;
  };
}

class BeratungsfelderManagementTemplate extends React.Component<Props> {
  render() {
    const focusThemsWrapper = this.props.data.allContentfulFokusthemaEinteilung.edges[0].node;
    const fokusthemen = [...focusThemsWrapper.fokusthemenManagement];

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
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/beratungsfelder/management/Managementberatung-Icon.png'} />
                </div>
              </div>
              <h1 className="h1 margin-20-top">Managementberatung</h1>
              <h2 className="h2 normal-font margin-20-top">Wie wir Geschäftsmodelle gestalten und optimieren</h2>
              <PageIntroText
                content={{
                  text:
                    'Für uns steckt in guter Managementberatung auch »Zeitgeistberatung«. Schließlich beleuchten wir für Banken und Asset Manager, ob und wie sich Trends auf deren Geschäft auswirken. Unsere Kooperation mit Spitzeninstituten, die daraus resultierende Marktkenntnis und unsere ohnehin enorme Passion für die Finanzindustrie lässt uns genau erkennen, welche Fragestellungen es wert sind, unter die Lupe genommen zu werden. Oftmals fertigen wir eigene Studien und Foren an. So gewinnen wir Erkenntnisse, die uns wiederum helfen, Chancen und Nutzen zu bewerten und sie Risiken und Restriktionen gegenüberzustellen. Aus dem Ergebnis leiten wir für unsere Kunden realistische, sichere Handlungsempfehlungen ab.',
                }}
                style={{ container: 'margin-40-top margin-xs-0-top' }}
              />
            </div>
            <div className="col-12 col-md-1 d-block d-lg-none" />
            <div className="col-12 col-md-3 col-lg-5">
              <div className="row d-none d-md-flex justify-content-end">
                <div className="col-12 col-md-12 col-lg-6">
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/beratungsfelder/management/Managementberatung-Icon.png'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">Die Zukunft wird gut </h2>
              <p>
                Wir unterstützen unsere Kunden in ihrem Ziel, Digitalisierungsstrategien zu entwickeln, und treiben als Begleiter bei der
                Digitalen Transformation die Organisationsentwicklung voran.
              </p>
            </div>
            <div className="col-md-6">
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.managementMatrixSharp} />
            </div>
          </div>
        </div>
        <FokusThemenSmallLayout
          header={'Im Wettbewerb schön oben bleiben'}
          text={
            'Wir führen Auswahlverfahren durch und nehmen es gut und gerne in die Hand, mit objektiven, nachhaltigen Entscheidungsgrundlagen die Effizienz unserer Kunden entscheidend zu steigern.'
          }
          fokusthemen={fokusthemen}
        />
        <div className="margin-120-top margin-xs-100-top">
          <ReferenzAndDownload
            content={{
              right: {
                header: 'Referenzprojekte',
                description:
                  'Welche Projekte haben wir im Kontext unserer Fokusthemen schon gemeistert und welches Kundenziel stand dahinter? Welche Schritte waren notwendig, welchen Mehrwert konnten wir leisten und welchen Nutzen haben wir bewirkt? In diesem Überblick erfahren Sie es.',
                button: {
                  text: 'ZU DEN REFERENZEN',
                  path: '/projekte/managementberatung',
                },
              },
              left: {
                header: 'Medien',
                description:
                  'Wissen soll nicht ungeteilt bleiben. Unsere Einschätzungen zu spannenden Fragen für Fachmedien aufzuschreiben oder als Pressemeldungen kundzutun, das lassen wir uns nicht nehmen. Sämtliche Veröffentlichungen zum Thema finden Sie hier.',
                button: {
                  text: 'ZU DEN PUBLIKATIONEN',
                  path: '/news-medien/managementberatung',
                },
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default BeratungsfelderManagementTemplate;

export const pageQuery = graphql`
  query BeratungsfelderManagementQuery {
    allContentfulFokusthemaEinteilung {
      edges {
        node {
          fokusthemenManagement {
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
    titelBildDesktopSharp: imageSharp(id: { regex: "/Management-Titelbild-Desktop/" }) {
      fluid(quality: 80, maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
    titelBildMobileSharp: imageSharp(id: { regex: "/Management-Titelbild-Mobile/" }) {
      fluid(quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
    managementMatrixSharp: imageSharp(id: { regex: "/Management-Beratungsmatrix/" }) {
      fluid(quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
