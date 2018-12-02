import React from 'react';

import HtmlHeader from 'components/HtmlHeader';

import ReferenzAndDownload from 'components/ReferenzAndDownload';
import ContentfulMarkdownText from 'components/ContentfulMarkdownText';
import StockphotoWithExternalLink from 'components/images/StockphotoWithExternalLink';
import PageIntroText from 'components/PageIntroText';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';

interface Link {
  title: string;
  url: string;
  urlNewsUndMedien: string;
  urlProjekte: string;
}

interface Medien {
  hrefLink: string;
  header: string;
  subHeader: string;
}

interface Props {
  data: {
    contentfulFokusthema: any;
    stockImageOne: any;
    stockImageTwo: any;
    stockImageThree: any;
    stockImageFour: any;
  };
}

class FokusthemenDetailTeamplate extends React.Component<Props> {
  render() {
    const graphQlResult = this.props.data.contentfulFokusthema;

    const linksAndNamesForRevelantLinks: Link[] = graphQlResult.relevanteBeratungsfelder.map((beratungsfeld: string) => {
      switch (beratungsfeld) {
        case 'Managementberatung':
          return {
            title: beratungsfeld,
            url: '/beratungsfelder/management',
            urlNewsUndMedien: '/news-medien/managementberatung',
            urlProjekte: '/projekte/managementberatung',
          } as Link;
        case 'Kreditgeschäft':
          return {
            title: beratungsfeld,
            url: '/beratungsfelder/kredit',
            urlNewsUndMedien: '/news-medien/fachberatung-kredit',
            urlProjekte: '/projekte/fachberatung-kredit',
          } as Link;
        case 'Wertpapiergeschäft':
          return {
            title: beratungsfeld,
            url: '/beratungsfelder/wertpapier',
            urlNewsUndMedien: '/news-medien/fachberatung-wertpapier',
            urlProjekte: '/projekte/fachberatung-wertpapier',
          } as Link;
        case 'Technologieberatung':
          return {
            title: beratungsfeld,
            url: '/beratungsfelder/technologie',
            urlNewsUndMedien: '/news-medien/technologieberatung',
            urlProjekte: '/projekte/technologieberatung',
          } as Link;
        default:
          return;
      }
    });

    const srcOficonTopLeft = `/img/icons/fokusthema/${graphQlResult.icon.toLowerCase()}-color.png`;

    const stockImages = [
      this.props.data.stockImageOne,
      this.props.data.stockImageTwo,
      this.props.data.stockImageThree,
      this.props.data.stockImageFour,
    ];

    let medien: Medien[] = [];

    if (graphQlResult.verlinkteDownloads) {
      const downloadMedien = graphQlResult.verlinkteDownloads.map((download: any) => {
        if (download.datei !== null) {
          return {
            hrefLink: `/pdf/contentful/${download.datei.id}.pdf`,
            header: download.beschriftungDesDownloads,
          } as Medien;
        }
      });

      medien = [...medien, downloadMedien];
    }

    if (graphQlResult.verlinkteVeroeffentlichungen) {
      const veroeffentlichungenMedien = graphQlResult.verlinkteVeroeffentlichungen.map((veroeffentlichung: any) => {
        if (veroeffentlichung.urlDerVerffentlichung) {
          return {
            hrefLink: veroeffentlichung.urlDerVerffentlichung,
            header: veroeffentlichung.ueberschrift,
            subHeader: veroeffentlichung.unterUeberschrift,
          } as Medien;
        }
        if (veroeffentlichung.pdfDatei) {
          return {
            hrefLink: `/pdf/contentful/${veroeffentlichung.pdfDatei.id}.pdf`,
            header: veroeffentlichung.ueberschrift,
            subHeader: veroeffentlichung.unterUeberschrift,
          } as Medien;
        }

        medien = [...medien, veroeffentlichungenMedien];
      });
    }

    if (graphQlResult.verlinktePressemeldungen) {
      const pressemeldungenMedien = graphQlResult.verlinktePressemeldungen.map((pressemeldung: any) => {
        return {
          hrefLink: `/pressemitteilung/${pressemeldung.urlDerSeite}`,
          header: pressemeldung.ueberschrift,
          subHeader: pressemeldung.unteruebrschrift,
        } as Medien;
      });

      medien = [...medien, pressemeldungenMedien];
    }

    const seoTitel = graphQlResult.uberschriftGanzOben;
    const seoDescription = !!graphQlResult.headline ? graphQlResult.headline.headline : seoTitel;

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: `Fokusthema: ${seoTitel}`,
            description: seoDescription,
          }}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="row d-flex d-md-none">
                <div className="col-6 col-sm-4 col-md-4">
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={srcOficonTopLeft} />
                </div>
                <div className="col-6 col-md-7" />
              </div>
              <div className="row margin-xs-20-top">
                <div className="col-12">
                  <h1 className="h1">{graphQlResult.uberschriftGanzOben}</h1>
                  <PageIntroText content={{ text: graphQlResult.headline.headline }} />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-1 d-block d-lg-none" />
            <div className="col-12 col-md-3 col-lg-5">
              <div className="row d-none d-md-flex justify-content-end">
                <div className="col-12 col-md-12 col-lg-6">
                  <ImageWrapper sourceType={SourceTyp.Bootstrap} source={srcOficonTopLeft} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Die Herausforderung</h2>
              <div className="blue-bullet">
                {graphQlResult.herausforderung !== undefined && graphQlResult.herausforderung !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.herausforderung.herausforderung} />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-40-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 offset-md-6 col-md-6 margin-xs-40-top">
              <h2 className="h2">Unser Lösungsansatz</h2>
              <div className="blue-bullet">
                {graphQlResult.loesungsansatz !== undefined && graphQlResult.loesungsansatz !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.loesungsansatz.loesungsansatz} />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-40-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6 margin-xs-20-top">
              <h2 className="h2">Ihr Nutzen</h2>
              <div className="blue-bullet">
                {graphQlResult.nutzen !== undefined && graphQlResult.nutzen !== null ? (
                  <ContentfulMarkdownText text={graphQlResult.nutzen.nutzen} />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {medien.length > 0 && (
          <div className="container margin-120-top margin-xs-80-top">
            <div className="row d-md-flex">
              <div className="col-12 col-md-6">
                <StockphotoWithExternalLink content={medien} images={stockImages} indexOfElelement={0} />
                <div className="row justify-content-center margin-40-top margin-xs-20-top">
                  <div className="col-12 col-md-8">
                    <StockphotoWithExternalLink content={medien} images={stockImages} indexOfElelement={2} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 margin-xs-20-top">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-12">
                    <StockphotoWithExternalLink content={medien} images={stockImages} indexOfElelement={1} />
                  </div>
                </div>
                <div className="margin-40-top margin-xs-20-top">
                  <StockphotoWithExternalLink content={medien} images={stockImages} indexOfElelement={3} />
                </div>
              </div>
            </div>
          </div>
        )}
        {graphQlResult.videoYoutubeUrl !== undefined &&
          graphQlResult.videoYoutubeUrl !== null && (
            <div className="container margin-120-top margin-xs-80-top">
              <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1 margin-xs-20-top">
                  <h2 className="h2">{graphQlResult.videoUeberschrift}</h2>
                  <ContentfulMarkdownText
                    text={graphQlResult.videoBeschreibung !== undefined ? graphQlResult.videoBeschreibung.videoBeschreibung : null}
                  />
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      title="Digitale Transformation bei Cofinpro"
                      src={graphQlResult.videoYoutubeUrl.replace('/watch?v=', '/embed/')}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        {linksAndNamesForRevelantLinks.slice(0, 1).map((link, i) => (
          <ReferenzAndDownload
            key={i}
            style={{ container: 'margin-120-top margin-xs-80-top' }}
            content={{
              right: {
                header: 'Referenzprojekte',
                description: `Welche Projekte haben wir im Umfeld unserer Fokusthemen bereits gemeistert und was war das Kundenziel? Welche Schritte waren nötig, welchen Beitrag konnten wir leisten und welchen Nutzen haben wir bewirkt? Hier erfahren Sie es anhand einer Auswahl zum Thema ${
                  graphQlResult.uberschriftGanzOben
                }.`,
                button: {
                  text: 'ALLE REFERENZEN',
                  path: link.urlProjekte,
                },
              },
              left: {
                header: 'Medien',
                description: `Wissen soll man teilen. Unsere Einschätzungen rund um spannende Fragen für Fachmedien aufzuschreiben oder in Form von Pressemitteilungen kundzutun, das lassen wir uns nicht nehmen. Hier finden Sie sämtliche Veröffentlichungen zum Thema ${
                  graphQlResult.uberschriftGanzOben
                }.`,
                button: {
                  text: 'ALLE PUBLIKATIONEN',
                  path: link.urlNewsUndMedien,
                },
              },
            }}
          />
        ))}
      </div>
    );
  }
}

export default FokusthemenDetailTeamplate;

export const pageQuery = graphql`
  query fokusthemaQuery($id: String!) {
    contentfulFokusthema(id: { eq: $id }) {
      id
      url
      icon
      uberschriftGanzOben
      headline {
        headline
      }
      herausforderung {
        herausforderung
      }
      loesungsansatz {
        loesungsansatz
      }
      nutzen {
        nutzen
      }
      relevanteBeratungsfelder
      verlinkteVeroeffentlichungen {
        id
        ueberschrift
        unterUeberschrift
        urlDerVerffentlichung
        pdfDatei {
          id
          title
          description
        }
      }
      verlinktePressemeldungen {
        id
        ueberschrift
        unteruebrschrift
        urlDerSeite
      }
      verlinkteDownloads {
        id
        beschriftungDesDownloads
        datei {
          id
          title
          description
        }
      }
      videoUeberschrift
      videoBeschreibung {
        videoBeschreibung
      }
      videoYoutubeUrl
    }
    stockImageOne: imageSharp(id: { regex: "/fokusthema-stockbild-b24-/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageTwo: imageSharp(id: { regex: "/fokusthema-stockbild-b14-/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageThree: imageSharp(id: { regex: "/fokusthema-stockbild-a26-/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    stockImageFour: imageSharp(id: { regex: "/fokusthema-stockbild-b2-/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 492, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
