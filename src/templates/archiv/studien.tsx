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
    studienOneSharp: SharpImage;
    studienTwoSharp: SharpImage;
    whitepapersOneSharp: SharpImage;
    whitepapersTwoSharp: SharpImage;
  };
  pageContext: ArchivpageContext;
}

class StudienArchivTemplate extends React.Component<Props> {
  render() {
    const name = this.props.pageContext.name;
    const input = this.props.pageContext.input;
    const siteDescription = this.props.pageContext.siteDescription;
    const sectionDescription = this.props.pageContext.sectionDescription;

    const firstSetOfImages = [this.props.data.studienOneSharp, this.props.data.studienTwoSharp];

    const secondSetOfImages = [this.props.data.whitepapersOneSharp, this.props.data.whitepapersTwoSharp];

    const seoTitel = `Studien Archiv - ${name}`;
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
          urlPrefix="news-medien/archiv/studien"
          description={'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren? Wählen Sie selbst. '}
          styleClass={'margin-80-top margin-xs-40-top'}
        />

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">{'STUDIEN'}</h2>
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
                  id: `STUDIEN-${index}`,
                  header: 'STUDIEN',
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

export default StudienArchivTemplate;

export const pageQuery = graphql`
  query studienArchivQuery {
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
  }
`;
