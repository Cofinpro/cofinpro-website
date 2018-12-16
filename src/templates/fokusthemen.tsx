import React from 'react';

import FokusthemenLayout from 'components/layouts/FokusthemenLayout';
import NavigationBeratungsfelder from 'components/navigation/NavigationBeratungsfelder';
import HtmlHeader from 'components/HtmlHeader';
import PageIntroText from 'components/PageIntroText';
import Layout from 'components/Layout';

interface Props {
  location: any;
  pageContext: {
    name: string;
    header: string;
    description: string;
    fokusthemen: any;
  };
}

class FokusthemenStartseite extends React.Component<Props> {
  render() {
    const name = this.props.pageContext.name;
    const header = this.props.pageContext.header;
    const description = this.props.pageContext.description;
    const fokusthemen = this.props.pageContext.fokusthemen;

    const seoTitel = `Fokusthemen - ${name}`;
    const seoDescription = `${seoTitel} - Hier finden Sie alle unsere aktuellen Fokusthemen auf einen Blick. Entdecken sie unsere Themenvielfalt.`;

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
            <div className="col-12 col-md-8 col-md-6">
              <h1 className="h1">Fokusthemen</h1>
              <PageIntroText
                content={{
                  text: 'Hier finden Sie unsere aktuellen Fokusthemen auf einen Blick. So viel vorweg: Die Vielfalt ist groß.',
                }}
              />
            </div>
          </div>
        </div>

        <NavigationBeratungsfelder
          links={[
            { text: 'Managementberatung', path: '/managementberatung' },
            { text: 'Fachberatung Kredit', path: '/fachberatung-kredit' },
            {
              text: 'Fachberatung Wertpapier',
              path: '/fachberatung-wertpapier',
            },
            { text: 'Technologieberatung', path: '/technologieberatung' },
            { text: 'Digitalisierung', path: '/digitalisierung' },
          ]}
          urlPrefix="fokusthemen"
          styleClass={'margin-80-top margin-xs-40-top'}
          description={'Aus welchem unserer Beratungsfelder möchten Sie Fokusthemen ansehen? Wählen Sie selbst.'}
        />

        <FokusthemenLayout
          header={header}
          description={description}
          fokusthemen={fokusthemen}
          showButton={false}
          style={{ container: 'margin-60-top' }}
        />
      </Layout>
    );
  }
}

export default FokusthemenStartseite;
