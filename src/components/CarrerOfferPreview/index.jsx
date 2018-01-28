import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

class CarrerOfferPreview extends React.Component {
  render() {
    const {
      title,
      employmentType,
      expiration,
      locationEmployee,
      anzeigeId,
      location,
      styleClass,
    } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const additionalStyleClass = styleClass !== null ? styleClass : ''

    return (
      <div className={'carrerOfferPreview ' + additionalStyleClass}>
        <div className="padding-20">
          <Link
            to={pathPrefix + '/stellenanzeige/' + anzeigeId}
            className="text-dark"
          >
            <div>
              <p className="text-left font-weight-bold">
                {title.length > 72 ? title.substring(0, 72) + '...' : title}
              </p>
              <p className="no-margin-bottom">
                Art: {employmentType}
                <br />
                Befristung: {expiration}
                <br />
                Ort: {locationEmployee}
              </p>
            </div>
            <div className="col-12 text-right">
              <span className="h4 text-primary font-weight-bold stellenanzeige-link">
                >
              </span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default CarrerOfferPreview
