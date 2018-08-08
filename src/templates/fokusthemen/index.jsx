import React from 'react'

import FokusthemenLayout from '../../components/layouts/FokusthemenLayout'
import NavigationBeratungsfelder from '../../components/navigation/NavigationBeratungsfelder'

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

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="h1">Fokusthemen</h1>
              <p className="h4 margin-20-top d-md-block d-none">
                Hier finden Sie alle unsere aktuellen Fokusthemen auf einen
                Blick. Entdecken sie unsere Themenvielfalt.
              </p>
              <p className="d-md-none">
                Hier finden Sie alle unsere aktuellen Fokusthemen auf einen
                Blick. Entdecken sie unsere Themenvielfalt.
              </p>
            </div>
          </div>
        </div>

        <NavigationBeratungsfelder
          urlPrefix="fokusthemen"
          styleClass="margin-60-top"
        />

        <FokusthemenLayout
          header={header}
          description={description}
          fokusthemen={fokusthemen}
          style={{ container: 'margin-60-top' }}
        />
      </div>
    )
  }
}

export default FokusthemenStartseite
