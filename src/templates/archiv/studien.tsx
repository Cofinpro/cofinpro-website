import React from 'react';

import LayoutDownloads from '../news-medien-uebersicht/LayoutDownloads';
import NavigationBeratungsfelder from 'components/navigation/NavigationBeratungsfelder';
import HtmlHeader from 'components/HtmlHeader';
import PageIntroText from 'components/PageIntroText';
import { SharpImage } from 'models/SharpImage';
import { ArchivPathContext } from 'models/ArchivPathContext';

interface Props {
  data: {
    studienOneSharp: SharpImage;
    studienTwoSharp: SharpImage;
    whitepapersOneSharp: SharpImage;
    whitepapersTwoSharp: SharpImage;
  };
  pathContext: ArchivPathContext;
}

class StudienArchivTemplate extends React.Component<Props> {
  render() {
    const name = this.props.pathContext.name;
    const input = this.props.pathContext.input;
    const siteDescription = this.props.pathContext.siteDescription;
    const sectionDescription = this.props.pathContext.sectionDescription;

    const firstSetOfImages = [this.props.data.studienOneSharp, this.props.data.studienTwoSharp];

    const secondSetOfImages = [this.props.data.whitepapersOneSharp, this.props.data.whitepapersTwoSharp];

    const seoTitel = `Studien Archiv - ${name}`;
    const seoDescription = siteDescription;

    return (
      <div>
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
      </div>
    );
  }
}

export default StudienArchivTemplate;

export const pageQuery = graphql`
  query studienArchivQuery {
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
  }
`;