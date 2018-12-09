import React from 'react';
import { graphql } from 'gatsby';

import LayoutDownloads from './LayoutDownloads';
import LayoutVeroeffentlichungen from './LayoutVeroeffentlichungen';
import LayoutPressemeldungen from './LayoutPressemeldungen';
import DownloadPreviewTextAndImageLayout from 'components/layouts/DownloadPreviewTextAndImageLayout';
import NavigationBeratungsfelder from 'components/navigation/NavigationBeratungsfelder';
import HtmlHeader from 'components/HtmlHeader';
import PageIntroText from 'components/PageIntroText';
import PresseKontakt from 'components/PresseKontakt';

import './NewsMedienUebersicht.scss';

interface PageContext {
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
  pageContext: PageContext;
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

    const pageContext: PageContext = this.props.pageContext;
    const innerContent = pageContext.content;

    const seoTitle = `Neues von Cofinpro - ${pageContext.name}`;
    const seoDescription = pageContext.siteHeader;

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
                  text: pageContext.siteHeader,
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

        {pageContext.input.veroeffentlichungen.all.length > 0 && (
          <div className="container margin-80-top">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="h2">{'Fachpublikationen'}</h2>
                <p>{pageContext.professionalPublications}</p>
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
            description: pageContext.professionalPublications,
            elements: pageContext.input.veroeffentlichungen.all,
            buttonText: pageContext.buttonTextProfessionalPublications,
            buttonLink: innerContent.buttonVeroeffentlichungenLink,
            showButton: pageContext.input.veroeffentlichungen.all.length > 0,
          }}
          style={{
            row: 'margin-50-top margin-xs-0-top',
          }}
        />

        {pageContext.input.pressemeldungen.current.length > 0 && (
          <div className="container margin-100-top margin-xs-80-top">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="h2">{'Pressemitteilungen'}</h2>
                <p>{pageContext.pressReleases}</p>
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
            description: pageContext.pressReleases,
            elements: pageContext.input.pressemeldungen.current,
            buttonText: pageContext.buttonTextPressRelease,
            buttonLink: innerContent.buttonPressemeldungenLink,
            showButton: pageContext.input.pressemeldungen.current.length > 0,
          }}
          style={{
            row: 'margin-50-top margin-xs-0-top',
          }}
        />
        {(pageContext.input.whitepapers.current.length > 0 ||
          pageContext.input.studien.current.length > 0 ||
          pageContext.input.thesenpapiere.current.length > 0 ||
          pageContext.input.loesungsskizzen.current.length > 0) && (
          <div className="container margin-120-top margin-xs-80-top">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="h2">Medien</h2>
                <p className="no-margin">{pageContext.medien}</p>
              </div>
              <div className="col-12 col-md-6" />
            </div>
          </div>
        )}
        {pageContext.input.studien.current.length > 0 && (
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
            downloads: pageContext.input.studien.current,
            buttonText: pageContext.buttonTextStudien,
            buttonLink: innerContent.buttonStudienLink,
            showButton: pageContext.input.studien.current.length > 0,
          }}
          style={{
            row: 'margin-20-top margin-xs-0-top',
          }}
        />

        {pageContext.input.thesenpapiere.current.length > 0 && (
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
            downloads: pageContext.input.thesenpapiere.current,
            buttonText: pageContext.buttonTextThesen,
            buttonLink: innerContent.buttonThesenpapiereLink,
            showButton: pageContext.input.thesenpapiere.current.length > 0,
          }}
          style={{
            row: 'margin-20-top margin-xs-0-top',
          }}
        />

        {pageContext.input.whitepapers.current.length > 0 && (
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
            downloads: pageContext.input.whitepapers.current,
            buttonText: pageContext.buttonTextWhitePaper,
            buttonLink: innerContent.buttonWhitepaperLink,
            showButton: pageContext.input.whitepapers.current.length > 0,
          }}
          style={{
            row: 'margin-20-top margin-xs-0-top',
          }}
        />

        {pageContext.input.loesungsskizzen.current.length > 0 && (
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
            downloads: pageContext.input.loesungsskizzen.current,
            buttonText: pageContext.buttonTextLösung,
            buttonLink: innerContent.buttonLoesungLink,
            showButton: pageContext.input.loesungsskizzen.current.length > 0,
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
          // TODO: content={{ showButton: false }}
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
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    veroeffentlichungenTwoSharp: imageSharp(id: { regex: "/medien-veroeffentlichungen-a29/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    veroeffentlichungenThreeSharp: imageSharp(id: { regex: "/medien-veroeffentlichungen-a16/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    veroeffentlichungenFourSharp: imageSharp(id: { regex: "/medien-veroeffentlichungen-a1/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    pressemeldungOneSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b50/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    pressemeldungTwoSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b3/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    pressemeldungThreeSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b2/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    pressemeldungFourSharp: imageSharp(id: { regex: "/medien-pressemeldungen-b39/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    studienOneSharp: imageSharp(id: { regex: "/medien-studien-a42/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    studienTwoSharp: imageSharp(id: { regex: "/medien-studien-a7/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    thesenpapierOneSharp: imageSharp(id: { regex: "/medien-thesenpapiere-a26/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    thesenpapierTwoSharp: imageSharp(id: { regex: "/medien-thesenpapiere-a6/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    whitepapersOneSharp: imageSharp(id: { regex: "/medien-whitepapers-b8/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    whitepapersTwoSharp: imageSharp(id: { regex: "/medien-whitepapers-b31/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    loesungsskizzenOneSharp: imageSharp(id: { regex: "/medien-loesungsskizzen-b32/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    loesungsskizzenTwoSharp: imageSharp(id: { regex: "/medien-loesungsskizzen-b26/" }) {
      fluid(quality: 100, maxWidth: 1000, maxHeight: 595, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
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
