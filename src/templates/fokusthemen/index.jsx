import React from 'react'

import FokusthemenLayout from '../../components/layouts/FokusthemenLayout'
import NavigationBeratungsfelder from '../../components/navigation/NavigationBeratungsfelder'

import HtmlHeader from '../../components/HtmlHeader'

import PageIntroText from '../../components/text/PageIntroText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class FokusthemenStartseite extends React.Component {
  render() {
    const name = this.props.pathContext.id
    const url = this.props.pathContext.path
    const header = this.props.pathContext.header
    const description = this.props.pathContext.description
    const fokusthemen = this.props.pathContext.fokusthemen

    let seoTitel = 'Fokusthemen - ' + name
    let seoDescription =
      seoTitel +
      ' - ' +
      'Hier finden Sie alle unsere aktuellen Fokusthemen auf einen Blick. Entdecken sie unsere Themenvielfalt.'

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
            <div className="col-12 col-md-8 col-md-6">
              <h1 className="h1">Fokusthemen</h1>
              <PageIntroText
                content={{
                  text:
                    'Hier finden Sie alle unsere aktuellen Fokusthemen auf einen Blick. Entdecken sie unsere Themenvielfalt.',
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
          styleClass="margin-80-top"
          description={
            'Aus welchem unserer Beratungsfelder möchten Sie Fokusthemen ansehen? Wählen Sie selbst.'
          }
        />

        <FokusthemenLayout
          header={header}
          description={description}
          fokusthemen={fokusthemen}
          showButton={false}
          style={{ container: 'margin-60-top' }}
        />
      </div>
    )
  }
}

export default FokusthemenStartseite
