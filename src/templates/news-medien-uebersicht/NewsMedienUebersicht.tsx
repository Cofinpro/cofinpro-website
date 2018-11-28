import React from 'react';

import LayoutDownloads from './LayoutDownloads';
import LayoutVeroeffentlichungen from './LayoutVeroeffentlichungen';
import LayoutPressemeldungen from './LayoutPressemeldungen';
import DownloadPreviewTextAndImageLayout from 'components/layouts/DownloadPreviewTextAndImageLayout';
import NavigationBeratungsfelder from 'components/navigation/NavigationBeratungsfelder';
import HtmlHeader from 'components/HtmlHeader';
import PageIntroText from 'components/PageIntroText';
import PresseKontakt from 'components/PresseKontakt';

import './NewsMedienUebersicht.scss';

interface PathContext {
  name: string;
  input: any;
  siteHeader: string;
  professionalPublications: any[];
  buttonTextProfessionalPublications: any[];
  pressReleases: any[];
  medien: any[];
  buttonTextPressRelease: string;
  buttonTextStudien: string;
  buttonTextThesen: string;
  buttonTextWhitePaper: string;
  buttonTextLösung: string;
  content: any;
}

interface Props {
  pathContext: PathContext;
  data: any;
}

class NewsMedienUebersichtTemplate extends React.Component<Props> {
  render() {
    const graphQlResultDownloads = this.props.data.contentfulDownloadEinteilung.downloads;

    const downloads = graphQlResultDownloads.map((download: any) => {
      return {
        href: `/pdf/contentful/${download.datei.id}.pdf`,
        title: download.beschriftungDesDownloads,
        image: download.bild,
      };
    });

    const pathContext: PathContext = this.props.pathContext;
    const innerContent = pathContext.content;

    const seoTitle = `Neues von Cofinpro - ${pathContext.name}`;
    const seoDescription = pathContext.siteHeader;

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
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Neues von Cofinpro</h1>
              <PageIntroText
                content={{
                  text: pathContext.siteHeader,
                }}
              />
            </div>
          </div>
        </div>

        <NavigationBeratungsfelder
          links={[
            {
              text: 'Alle Beratungsfelder',
              path: '/alle-beratungsfelder',
            },
            { text: 'Managementberatung', path: '/managementberatung' },
            { text: 'Fachberatung Kredit', path: '/fachberatung-kredit' },
            {
              text: 'Fachberatung Wertpapier',
              path: '/fachberatung-wertpapier',
            },
            { text: 'Technologieberatung', path: '/technologieberatung' },
            { text: 'Digitalisierung', path: '/digitalisierung' },
            { text: 'Cofinpro', path: '/cofinpro' },
          ]}
          urlPrefix="news-medien"
          description={'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren? Wählen Sie selbst. '}
          styleClass={'margin-80-top margin-xs-40-top'}
        />

        {pathContext.input.veroeffentlichungen.all.length > 0 && (
          <div className="container margin-80-top">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="h2">{'Fachpublikationen'}</h2>
                <p>{pathContext.professionalPublications}</p>
              </div>
              <div className="col-12 col-md-6" />
            </div>
          </div>
        )}
        <LayoutVeroeffentlichungen
          content={{
            id: 'fachpublikationen',
            header: 'Fachpublikationen',
            images: [
              this.props.data.veroeffentlichungenOneSharp,
              this.props.data.veroeffentlichungenTwoSharp,
              this.props.data.veroeffentlichungenThreeSharp,
              this.props.data.veroeffentlichungenFourSharp,
            ],
            description: pathContext.professionalPublications,
            elements: pathContext.input.veroeffentlichungen.all,
            buttonText: pathContext.buttonTextProfessionalPublications,
            buttonLink: innerContent.buttonVeroeffentlichungenLink,
            showButton: pathContext.input.veroeffentlichungen.all.length > 0,
          }}
          style={{
            row: 'margin-50-top margin-xs-0-top',
          }}
        />

        {pathContext.input.pressemeldungen.current.length > 0 && (
          <div className="container margin-100-top margin-xs-80-top">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="h2">{'Pressemitteilungen'}</h2>
                <p>{pathContext.pressReleases}</p>
              </div>
              <div className="col-12 col-md-6" />
            </div>
          </div>
        )}
        <LayoutPressemeldungen
          content={{
            id: 'pressemitteilungen',
            header: 'Pressemitteilungen',
            images: [
              this.props.data.pressemeldungOneSharp,
              this.props.data.pressemeldungTwoSharp,
              this.props.data.pressemeldungThreeSharp,
              this.props.data.pressemeldungFourSharp,
            ],
            description: pathContext.pressReleases,
            elements: pathContext.input.pressemeldungen.current,
            buttonText: pathContext.buttonTextPressRelease,
            buttonLink: innerContent.buttonPressemeldungenLink,
            showButton: pathContext.input.pressemeldungen.current.length > 0,
          }}
          style={{
            row: 'margin-50-top margin-xs-0-top',
          }}
        />
        {(pathContext.input.whitepapers.current.length > 0 ||
          pathContext.input.studien.current.length > 0 ||
          pathContext.input.thesenpapiere.current.length > 0 ||
          pathContext.input.loesungsskizzen.current.length > 0) && (
          <div className="container margin-120-top margin-xs-80-top">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="h2">Medien</h2>
                <p className="no-margin">{pathContext.medien}</p>
              </div>
              <div className="col-12 col-md-6" />
            </div>
          </div>
        )}
        {pathContext.input.studien.current.length > 0 && (
          <div className={'container margin-60-top margin-xs-60-top'}>
            <div className="row">
              <div className="col-12">
                <h3 className="h4 margin-xs-20-bottom">STUDIEN</h3>
              </div>
            </div>
          </div>
        )}
        <LayoutDownloads
          content={{
            id: 'STUDIEN',
            header: 'STUDIEN',
            images: [this.props.data.studienOneSharp, this.props.data.studienTwoSharp],
            downloads: pathContext.input.studien.current,
            buttonText: pathContext.buttonTextStudien,
            buttonLink: innerContent.buttonStudienLink,
            showButton: pathContext.input.studien.current.length > 0,
          }}
          style={{
            row: 'margin-20-top margin-xs-0-top',
          }}
        />

        {pathContext.input.thesenpapiere.current.length > 0 && (
          <div className={'container margin-60-top margin-xs-60-top'}>
            <div className="row">
              <div className="col-12">
                <h3 className="h4 margin-xs-20-bottom">THESENPAPIERE</h3>
              </div>
            </div>
          </div>
        )}
        <LayoutDownloads
          content={{
            id: 'THESENPAPIERE',
            header: 'THESENPAPIERE',
            images: [this.props.data.thesenpapierOneSharp, this.props.data.thesenpapierTwoSharp],
            downloads: pathContext.input.thesenpapiere.current,
            buttonText: pathContext.buttonTextThesen,
            buttonLink: innerContent.buttonThesenpapiereLink,
            showButton: pathContext.input.thesenpapiere.current.length > 0,
          }}
          style={{
            row: 'margin-20-top margin-xs-0-top',
          }}
        />

        {pathContext.input.whitepapers.current.length > 0 && (
          <div className={'container margin-60-top margin-xs-60-top'}>
            <div className="row">
              <div className="col-12">
                <h3 className="h4 margin-xs-20-bottom">WHITEPAPERS</h3>
              </div>
            </div>
          </div>
        )}
        <LayoutDownloads
          content={{
            id: 'WHITEPAPERS',
            header: 'WHITEPAPERS',
            images: [this.props.data.whitepapersOneSharp, this.props.data.whitepapersTwoSharp],
            downloads: pathContext.input.whitepapers.current,
            buttonText: pathContext.buttonTextWhitePaper,
            buttonLink: innerContent.buttonWhitepaperLink,
            showButton: pathContext.input.whitepapers.current.length > 0,
          }}
          style={{
            row: 'margin-20-top margin-xs-0-top',
          }}
        />

        {pathContext.input.loesungsskizzen.current.length > 0 && (
          <div className={'container margin-60-top margin-xs-60-top'}>
            <div className="row">
              <div className="col-12">
                <h3 className="h4 margin-xs-20-bottom">LÖSUNGSSKIZZEN</h3>
              </div>
            </div>
          </div>
        )}
        <LayoutDownloads
          content={{
            id: 'LOESUNGSSKIZZEN',
            header: 'LÖSUNGSSKIZZEN',
            images: [this.props.data.loesungsskizzenOneSharp, this.props.data.loesungsskizzenTwoSharp],
            downloads: pathContext.input.loesungsskizzen.current,
            buttonText: pathContext.buttonTextLösung,
            buttonLink: innerContent.buttonLoesungLink,
            showButton: pathContext.input.loesungsskizzen.current.length > 0,
          }}
          style={{
            row: 'margin-20-top margin-xs-0-top',
          }}
        />

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">Wir über uns</h2>
              <p className="no-margin">
                Was das Angebot von Cofinpro ausmacht, was wir konkret tun und was wir mit unserer Arbeit bewirken, erfahren Sie im
                Unternehmensfolder. In unserem Cofinpro Karrieremagazin können Sie nachlesen, was uns als Arbeitgeber ausmacht und welche
                Karrieremöglichkeiten wir bieten (nämlich sehr viele).
              </p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>
        <DownloadPreviewTextAndImageLayout
          style={{ container: 'margin-40-top margin-xs-0-top' }}
          content={{ showButton: false }}
          downloads={downloads}
        />
        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 ">
              <PresseKontakt />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsMedienUebersichtTemplate;

export const pageQuery = graphql`
  query newsMediaOverviewQuery {
    veroeffentlichungenOneSharp: imageSharp(id: { regex: "/medien-veroeffentlichungen-a14/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenTwoSharp: imageSharp(id: { regex: "/medien-veroeffentlichungen-a29/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenThreeSharp: imageSharp(id: { regex: "/medien-veroeffentlichungen-a16/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    veroeffentlichungenFourSharp: imageSharp(id: { regex: "/medien-veroeffentlichungen-a1/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungOneSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b50/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungTwoSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b3/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungThreeSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b2/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    pressemeldungFourSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b39/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    studienOneSharp: imageSharp(id: { regex: "/medien-studien-a42/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    studienTwoSharp: imageSharp(id: { regex: "/medien-studien-a7/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    thesenpapierOneSharp: imageSharp(id: { regex: "/medien-thesenpapiere-a26/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    thesenpapierTwoSharp: imageSharp(id: { regex: "/medien-thesenpapiere-a6/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    whitepapersOneSharp: imageSharp(id: { regex: "/medien-whitepapers-b8/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    whitepapersTwoSharp: imageSharp(id: { regex: "/medien-whitepapers-b31/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    loesungsskizzenOneSharp: imageSharp(id: { regex: "/medien-loesungsskizzen-b32/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    loesungsskizzenTwoSharp: imageSharp(id: { regex: "/medien-loesungsskizzen-b26/" }) {
      sizes(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
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
