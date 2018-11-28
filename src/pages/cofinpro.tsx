import React from 'react';

import LinkButton from 'components/buttons/LinkButton';
import PageIntroText from 'components/PageIntroText';
import FourFactsSmallLayout from 'components/layouts/FourFactsSmallLayout';
import DownloadPreviewTextAndImageLayout from 'components/layouts/DownloadPreviewTextAndImageLayout';
import ThreeIconsWithLinks from 'components/layouts/ThreeIconsWithLinks';
import HtmlHeader from 'components/HtmlHeader';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';

interface Props {
  data: any;
}

class Startseite extends React.Component<Props> {
  render() {
    const graphQlResult = this.props.data.contentfulBausteinCofinproFakten;
    const graphQlResultCofinpro = this.props.data.contentfulSeiteCofinpro;
    const graphQlResultDownloads = this.props.data.contentfulDownloadEinteilung.downloads;

    const downloads = graphQlResultDownloads.map(download => {
      return {
        href: `/pdf/contentful/${download.datei.id}.pdf`,
        title: download.beschriftungDesDownloads,
        image: download.bild,
      };
    });

    const seoTitle = 'Über Cofinpro - Was tun wir, wie arbeiten wir und was macht uns aus?';
    const seoDescription =
      'Unsere Experten konzentrieren sich auf Digitalisierung, neue Marktanforderungen und Regulatorik in den Beratungsfeldern Management-, Fach- und Technologieberatung. Wir bauen auf ein Beratungskonzept, das alle Elemente der Wertschöpfungskette für Unternehmen in der Finanzindustrie abdeckt.';

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: seoTitle,
            description: seoDescription,
          }}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7">
              <h1 className="h1">Über Cofinpro</h1>
              <PageIntroText
                content={{
                  text: 'Was tun wir, wie arbeiten wir und was macht uns aus?  \n Hier stellen wir uns vor.',
                }}
              />
              <LinkButton
                styleLink="d-inline d-md-none"
                styleSpan="margin-20-bottom w-100"
                text="BERATUNGSFELDER ÜBERSICHT"
                path="/beratungsfelder"
              />
            </div>
          </div>
        </div>

        <ThreeIconsWithLinks
          styleClass="d-none d-md-block margin-100-top"
          iconLeft={this.props.data.iconVorteilLinksSharp}
          titleLeft="Managementberatung"
          linkLeft={'/beratungsfelder/management'}
          iconMiddle={this.props.data.iconVorteilMitteSharp}
          titleMiddle="Fachberatung"
          linkMiddle={'/beratungsfelder/fach'}
          iconRight={this.props.data.iconVorteilRechtsSharp}
          titleRight="Technologieberatung"
          linkRight={'/beratungsfelder/technologie'}
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="h2">Das tun wir</h3>
              <p>
                Unsere Experten konzentrieren sich auf Digitalisierung, neue Marktanforderungen und Regulatorik in den Beratungsfeldern
                Management-, Fach- und Technologieberatung.
              </p>
              <p>
                Wir bauen auf ein Beratungskonzept, das alle Elemente der Wertschöpfungskette für Unternehmen in der Finanzindustrie
                abdeckt. Als Managementberater, Fachberater mit Fokus auf Kredit und Wertpapier sowie Technologieberater für agile,
                zukunftsfähige Architekturen bieten wir unseren Kunden zukunftsfähige Lösungen für ihr Geschäftsmodell. Persönlich,
                unabhängig und im vertrauensvollen Kontakt.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <ImageWrapper sourceType={SourceTyp.Bootstrap} source={'/img/allgemein/landkarte.png'} />
              <p className="margin-20-top h5 d-none d-md-block">Unsere Standorte</p>
              <p className="margin-20-top d-block d-md-none">Unsere Standorte</p>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <FourFactsSmallLayout
                content={{
                  title: graphQlResult.titel,
                  columns: [
                    {
                      title: graphQlResult.fakt1Text,
                      text: graphQlResult.fakt1Titel,
                      icon: graphQlResult.fakt1Bild,
                    },
                    {
                      title: graphQlResult.fakt2Text,
                      text: graphQlResult.fakt2Titel,
                      icon: graphQlResult.fakt2Bild,
                    },
                    {
                      title: graphQlResult.fakt3Text,
                      text: graphQlResult.fakt3Titel,
                      icon: graphQlResult.fakt3Bild,
                    },
                    {
                      title: graphQlResult.fakt4Text,
                      text: graphQlResult.fakt4Titel,
                      icon: graphQlResult.fakt4Bild,
                    },
                  ],
                }}
                isHeaderCentered={false}
              />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <h2>So sind wir</h2>
              <p>
                Seit unserer Gründung sehen wir uns darin bestätigt, dass nur eine positive, zukunftsorientierte Unternehmenspolitik eine
                solide Basis für erfolgreiche Zusammenarbeit bildet. Dazu gehört auch, sich für die Bewahrung eines intakten ökonomischen,
                ökologischen und sozialen Gefüges einzusetzen. Diese Verantwortung empfinden wir gegenüber unseren Kunden, unseren
                Mitarbeitern und der Gesellschaft.
              </p>
              <h3 className="h5 margin-30-top">Ökonomische Verantwortung</h3>
              <p>
                Wir wünschen uns langfristige, faire Geschäftsbeziehungen, mit denen sich nachhaltige Ergebnisse für unsere Kunden erreichen
                lassen. Unser bedeutendstes Kapital dabei sind unsere Mitarbeiter, denn mit all ihrer professionellen und menschlichen
                Unterschiedlichkeit sind sie das Herz von Cofinpro.
              </p>
              <h3 className="h5 margin-30-top">Ökologische Verantwortung</h3>
              <p>
                Unternehmen können wichtige Schritte tun, um die Umweltbelastung gering zu halten. Deshalb kommt bei uns modernste Technik
                zum Einsatz, und wir übergeben ausgedientes Equipment dem Recycling-Kreislauf. Es versteht sich, dass unsere Fahrzeuge den
                aktuellsten Umweltschutzrichtlinien entsprechen. Und sowieso rauschen immer mehr von uns auf Elektrorollern durch den
                Großstadtverkehr. Für jeden gebuchten Flug zahlen wir außerdem einen Ausgleich an die Initiative{' '}
                <a
                  href="https://www.charta-der-vielfalt.de/unterzeichnen/unterzeichner-innen/zeige/cofinpro-ag/"
                  target="_blank"
                  rel="noopener"
                >
                  »Atmosfair«
                </a>
                .
              </p>
              <h3 className="h5 margin-30-top">Soziale Verantwortung</h3>
              <p>
                Wir schätzen jedes Teammitglied, unabhängig von Geschlecht, Ethnie, Alter, körperlicher Einschränkung, Religion oder
                Lebensstil. Um das offiziell zu machen, haben wir die{' '}
                <a href="https://www.atmosfair.de" target="_blank" rel="noopener">
                  »Charta der Vielfalt«
                </a>{' '}
                unterzeichnet. Damit gehören wir zum größten deutschen Netzwerk für Diversity Management. Als Mitglied der Initiative »Fair
                Company« hält sich Cofinpro an die ethischen Grundregeln der Arbeitswelt. Wir lehnen die Ausbeutung von Berufseinsteigern
                ab, genauso wie jede Form von Korruption. Seit unserer Gründung wurden wir übrigens immer wieder als »Great Place to Work«
                ausgezeichnet.
              </p>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Unsere Werte sind ausgezeichnet</h2>
              <p>
                Dass Werte für uns nicht nur Worte sind, leben wir seit der Gründung von Cofinpro. Und wir sind stolz darauf, mit unserem
                Engagement für große und kleine Organisationen, Hilfswerke und Initiativen schon einiges mitbewegt zu haben. Dafür, und für
                unsere täglich gelebten Werte als Arbeitgeber, wurden wir wiederholt ausgezeichnet.
              </p>
            </div>
          </div>
          <div className="row margin-60-top margin-xs-20-top">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="row">
                <div className="col-12 margin-20-bottom margin-xs-0-bottom">
                  <h3 className="h4 d-none d-md-block">AUSZEICHNUNGEN</h3>
                  <h3 className="h3 d-block d-md-none">AUSZEICHNUNGEN</h3>
                </div>
                {graphQlResultCofinpro.auszeichnungen.map((image, index) => (
                  <div key={index} className="col-6 margin-20-top">
                    <ImageWrapper sourceType={SourceTyp.Contentful} source={image} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-1 col-lg-2" />
            <div className="col-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 margin-20-bottom margin-xs-60-top margin-xs-0-bottom">
                  <h3 className="h4 d-none d-md-block">WIR UNTERSTÜTZEN</h3>
                  <h3 className="h3 d-block d-md-none">WIR UNTERSTÜTZEN</h3>
                </div>
                {graphQlResultCofinpro.unterstuetzen.map((image, index) => (
                  <div key={index} className="col-12">
                    <div className="row">
                      <div key={index} className="col-8 col-lg-6 margin-20-top">
                        <ImageWrapper sourceType={SourceTyp.Contentful} source={image} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12">
              <h2>Downloads</h2>
            </div>
          </div>
        </div>
        <DownloadPreviewTextAndImageLayout
          style={{ container: 'margin-40-top margin-xs-0-top' }}
          content={{ showButton: true }}
          downloads={downloads}
        />
      </div>
    );
  }
}

export default Startseite;

export const pageQuery = graphql`
  query cofinproQuery {
    contentfulBausteinCofinproFakten {
      id
      name
      untertitel
      titel
      fakt1Titel
      fakt1Text
      fakt1Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      fakt2Titel
      fakt2Text
      fakt2Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      fakt3Titel
      fakt3Text
      fakt3Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      fakt4Titel
      fakt4Text
      fakt4Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
    }
    iconVorteilLinksSharp: imageSharp(id: { regex: "/ZEiMMpHD0Ium86MUc6oi0/" }) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilMitteSharp: imageSharp(id: { regex: "/c14zZzUPkdQy4gMImWEWAMS/" }) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilRechtsSharp: imageSharp(id: { regex: "/c6jYnfcyIh2Q4Mm4YMiI822/" }) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    contentfulSeiteCofinpro {
      auszeichnungen {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      unterstuetzen {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
    }
    contentfulDownloadEinteilung(id: { regex: "/c73AnGMvKTKcYcw08iKYse/" }) {
      id
      titel
      downloads {
        id
        bild {
          id
          title
          description
          file {
            url
            fileName
            contentType
          }
        }
        beschriftungDesDownloads
        datei {
          id
        }
      }
    }
  }
`;
