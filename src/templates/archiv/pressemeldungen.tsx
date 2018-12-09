import React from 'react';
import { graphql } from 'gatsby';

import LayoutPressemeldungen from '../news-medien-uebersicht/LayoutPressemeldungen';
import NavigationBeratungsfelder from 'components/navigation/NavigationBeratungsfelder';
import HtmlHeader from 'components/HtmlHeader';
import PageIntroText from 'components/PageIntroText';
import { SharpImage } from 'models/SharpImage';
import { ArchivPathContext } from 'models/ArchivPathContext';

interface Props {
  data: {
    pressemeldungOneSharp: SharpImage;
    pressemeldungTwoSharp: SharpImage;
    pressemeldungThreeSharp: SharpImage;
    pressemeldungFourSharp: SharpImage;
    veroeffentlichungenOneSharp: SharpImage;
    veroeffentlichungenTwoSharp: SharpImage;
    veroeffentlichungenThreeSharp: SharpImage;
    veroeffentlichungenFourSharp: SharpImage;
  };
  pathContext: ArchivPathContext;
}

class PressemeldungArchivTemplate extends React.Component<Props> {
  render() {
    const name = this.props.pathContext.name;
    const input = this.props.pathContext.input;
    const siteDescription = this.props.pathContext.siteDescription;
    const sectionDescription = this.props.pathContext.sectionDescription;

    const firstSetOfImages = [
      this.props.data.pressemeldungOneSharp,
      this.props.data.pressemeldungTwoSharp,
      this.props.data.pressemeldungThreeSharp,
      this.props.data.pressemeldungFourSharp,
    ];

    const secondSetOfImages = [
      this.props.data.veroeffentlichungenOneSharp,
      this.props.data.veroeffentlichungenTwoSharp,
      this.props.data.veroeffentlichungenThreeSharp,
      this.props.data.veroeffentlichungenFourSharp,
    ];

    const seoTitel = `Pressemitteilungen Archiv - ${name}`;
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
            { text: 'Cofinpro', path: '/cofinpro' },
          ]}
          urlPrefix="news-medien/archiv/pressemitteilungen"
          description={'Aus welchem unserer Beratungsfelder möchten Sie Neuigkeiten erfahren? Wählen Sie selbst. '}
          styleClass={'margin-80-top margin-xs-40-top'}
        />

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="h2">{'Pressemitteilungen'}</h2>
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
              <LayoutPressemeldungen
                content={{
                  id: `pressemitteilungen-${index}`,
                  header: 'Pressemitteilungen',
                  images: index % 2 === 0 ? firstSetOfImages : secondSetOfImages,
                  description: sectionDescription,
                  elements: input[key],
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

export default PressemeldungArchivTemplate;

export const pageQuery = graphql`
  query pressemeldungenArchivQuery {
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
  }
`;
