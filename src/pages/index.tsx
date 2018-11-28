import React from 'react';

import LinkButton from 'components/buttons/LinkButton';
import ThreeIconsWithLinks from 'components/layouts/ThreeIconsWithLinks';
import PageIntroText from 'components/PageIntroText';
import FokusthemenLayout from 'components/layouts/FokusthemenLayout';
import NewsMedienPreview from 'components/NewsMedienPreview';
import HtmlHeader from 'components/HtmlHeader';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImage } from '../models/SharpImage';

class Media {
  public to: string = '';
  public linkType: string = '';
  public header: string = '';
  public subHeader: string = '';
  public date: any = undefined;
  public description: string = '';
  public publishedBy: string = ''; // TODO: is never set
}

class DownloadMedia extends Media {
  constructor(input: any) {
    super();
    this.to = `/pdf/contentful/${input.datei.id}.pdf`;
    this.linkType = 'external';
    this.header = input.beschriftungDesDownloads;
    this.date = input.datumDerVerffentlichung;
    this.description = input.beschreibung !== null ? input.beschreibung.beschreibung : null;
  }
}

class VeroeffentlichungMedia extends Media {
  constructor(input: any) {
    super();
    this.to = this.getUrl(input);
    this.linkType = 'external';
    this.header = input.ueberschrift;
    this.subHeader = input.unterUeberschrift;
    this.date = input.datumDerVerffentlichung;
    this.description = input.beschreibung !== null ? input.beschreibung.beschreibung : null;
  }

  private getUrl(input: any): string {
    if (!!input.urlDerVerffentlichung) {
      return input.urlDerVerffentlichung;
    }
    if (!!input.pdfDatei) {
      return `/pdf/contentful/${input.pdfDatei.id}.pdf`;
    }

    return '';
  }
}

class PressemeldungMedia extends Media {
  constructor(input: any) {
    super();
    this.to = `pressemitteilung/${input.urlDerSeite}`;
    this.linkType = 'internal';
    this.header = input.ueberschrift;
    this.subHeader = input.unteruebrschrift;
    this.date = input.verffentlichungsdatum;
    this.description = input.introText !== null ? input.introText.introText : null;
  }
}

interface Props {
  data: {
    allContentfulFokusthemaEinteilung: any;
    allContentfulMedienEinteilung: any;
    titelBildDesktopSharp: SharpImage;
    titelBildMobileSharp: SharpImage;
    iconVorteilLinksSharp: SharpImage;
    iconVorteilMitteSharp: SharpImage;
    iconVorteilRechtsSharp: SharpImage;
    newsMedienLinks: SharpImage;
    newsMedienRechts: SharpImage;
  };
}

class Startseite extends React.Component<Props> {
  getMedien(medienEinteilung: any): Media[] {
    let medien: any[] = [];

    if (medienEinteilung.startseiteVerlinkungZuDownloads !== null) {
      medien = [...medien, medienEinteilung.startseiteVerlinkungZuDownloads.map((x: any) => new DownloadMedia(x))];
    }

    if (medienEinteilung.startseiteVerlinkungZuVeroeffentlichungen !== null) {
      medien = [...medien, medienEinteilung.startseiteVerlinkungZuVeroeffentlichungen.map((x: any) => new VeroeffentlichungMedia(x))];
    }

    if (medienEinteilung.startseiteVerlinkungZuPressemeldungen !== null) {
      medien = [...medien, medienEinteilung.startseiteVerlinkungZuPressemeldungen.map((x: any) => new PressemeldungMedia(x))];
    }

    function medien_date_sort(a: any, b: any) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    return medien.sort(medien_date_sort);
  }

  render() {
    const focusThemsWrapper = this.props.data.allContentfulFokusthemaEinteilung.edges[0].node;
    const fokusthemen = focusThemsWrapper.fokusthemenStartseite.map((x: any) => x);

    const medienEinteilungWrapper = this.props.data.allContentfulMedienEinteilung.edges;
    const medienEinteilung = medienEinteilungWrapper.find((x: any) => x.node.id === 'A2YNdv1hwOCuGueqyCiMO').node;
    const medien = this.getMedien(medienEinteilung);

    const seoTitle = 'Cofinpro - Die Experten für Management-, Fach- und Technologieberatung';
    const seoDescription =
      'Wir sind die Management-, Fach- und Technologieberatung für Deutschlands führende Banken und Kapitalverwaltungsgesellschaften.';

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: seoTitle,
            description: seoDescription,
          }}
        />

        <div className="container negative-margin-30-top">
          <div className="row">
            <div className="col-12">
              <div className="d-none d-md-block">
                <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.titelBildDesktopSharp} />
              </div>
              <div className="d-block d-md-none">
                <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.titelBildMobileSharp} />
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-60-top margin-md-40-top margin-xs-10-top">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-8">
              <h1 className="h1">Hallo, hier ist Cofinpro</h1>
              <PageIntroText
                content={{
                  text:
                    'Wir sind die Management-, Fach- und Technologieberatung für Deutschlands führende Banken und Kapitalverwaltungsgesellschaften. Als Experten für Kredit und Wertpapier begleiten und navigieren wir unsere Kunden durch die Herausforderungen von Digitalisierung, neuen Marktanforderungen und Regulatorik.',
                }}
              />
              <LinkButton
                styleLink="d-inline d-md-none margin-10-top"
                styleSpan="w-100"
                text="BERATUNGSFELDER ÜBERSICHT"
                path="/beratungsfelder"
              />
              <LinkButton styleSpan="w-100 w-md-unset margin-10-top" text="MEHR ÜBER UNS" path="/cofinpro" />
            </div>
          </div>
        </div>

        <ThreeIconsWithLinks
          styleClass="d-none d-md-block margin-80-top"
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

        <div className="container margin-120-top margin-md-100-top margin-xs-80-top">
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
            <div className="col-12 col-md-6 margin-xs-20-top">
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
          <div className="row margin-20-top">
            <div className="col-12 col-md-12">
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text="MEDIENFORUM ÜBERSICHT"
                path="/news-medien/alle-beratungsfelder"
                {...this.props}
              />
            </div>
          </div>
        </div>

        <FokusthemenLayout
          header={'Unsere Fokusthemen'}
          description={
            'Hier möchten wir Ihnen einen Einblick in unser Leistungsspektrum geben, von der agilen Transformation oder dem Aufsatz von Effizienzsteigerungen über die Regulierung und Digitalisierung im Kredit- und Wertpapiergeschäft bis hin zum Design moderner Plattform-Architekturen und vielen Themen mehr.'
          }
          fokusthemen={fokusthemen}
          showButton={true}
          style={{
            container: 'margin-120-top margin-md-100-top margin-xs-80-top',
          }}
        />
      </div>
    );
  }
}

export default Startseite;

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
    titelBildDesktopSharp: imageSharp(id: { regex: "/Startseite-Titelbild-Desktop/" }) {
      sizes(quality: 80, maxWidth: 2000) {
        ...GatsbyImageSharpSizes
      }
    }
    titelBildMobileSharp: imageSharp(id: { regex: "/Startseite-Titelbild-Mobile/" }) {
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
`;
