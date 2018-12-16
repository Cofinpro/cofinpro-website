import React from 'react';
import { graphql } from 'gatsby';

import LayoutDownloads from '../news-medien-uebersicht/LayoutDownloads';
import NavigationBeratungsfelder from 'components/navigation/NavigationBeratungsfelder';
import HtmlHeader from 'components/HtmlHeader';
import PageIntroText from 'components/PageIntroText';
import { SharpImage } from 'models/SharpImage';
import { ArchivpageContext } from 'models/ArchivPathContext';
import Layout from 'components/Layout';

interface Props {
  location: any;
  data: {
    thesenpapierOneSharp: SharpImage;
    thesenpapierTwoSharp: SharpImage;
    loesungsskizzenOneSharp: SharpImage;
    loesungsskizzenTwoSharp: SharpImage;
  };
  pageContext: ArchivpageContext;
}

class ThesenpapiereArchivTemplate extends React.Component<Props> {
  render() {
    const name = this.props.pageContext.name;
    const input = this.props.pageContext.input;
    const siteDescription = this.props.pageContext.siteDescription;
    const sectionDescription = this.props.pageContext.sectionDescription;

    const firstSetOfImages = [this.props.data.thesenpapierOneSharp, this.props.data.thesenpapierTwoSharp];

    const secondSetOfImages = [this.props.data.loesungsskizzenOneSharp, this.props.data.loesungsskizzenTwoSharp];

    const seoTitel = `Thesenpapiere Archiv - ${name}`;
    const seoDescription = siteDescription;

    return (
      <Layout {...this.props}>
        <HtmlHeader
          direktData={{
            title: seoTitel,
            description: seoDescription,
          }}
        />
        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Medien-Archiv</h1>
              <PageIntroText
                content={{
                  text: siteDescription,
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
          ]}
          urlPrefix="news-medien/archiv/thesenpapiere"
          description={'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren? Wählen Sie selbst. '}
          styleClass={'margin-80-top margin-xs-40-top'}
        />

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">{'THESENPAPIERE'}</h2>
              <p>{sectionDescription}</p>
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>

        {Object.keys(input).length === 0 && (
          <div className="container margin-40-top margin-xs-20-top">
            <div className="row">
              <div className="col-12">
                <p className="no-media-available-text">Es sind keine Medien zu diesem Thema in dieser Kategorie verfügbar</p>
              </div>
            </div>
          </div>
        )}
        {Object.keys(input).map((key, index) => {
          const spacingTop = index === 0 ? 'margin-60-top' : 'margin-120-top';

          return (
            <div key={index}>
              <div className={`container ${spacingTop}`}>
                <div className="row">
                  <div className="col-12">
                    <p className="h2">{key.replace('year-', '')}</p>
                  </div>
                </div>
              </div>
              <LayoutDownloads
                content={{
                  id: `THESENPAPIERE-${index}`,
                  header: 'THESENPAPIERE',
                  images: index % 2 === 0 ? firstSetOfImages : secondSetOfImages,
                  description: sectionDescription,
                  downloads: input[key],
                  showButton: false,
                }}
                style={{
                  row: 'margin-20-top margin-xs-0-top',
                }}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default ThesenpapiereArchivTemplate;

export const pageQuery = graphql`
  query thesenpapiereArchivQuery {
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
  }
`;
