import React from 'react'
import Link from 'gatsby-link'
import ReactGA from 'react-ga'

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

    function handleViewJobOfferClick(jobTitle) {
      ReactGA.event({
        category: 'Navigation',
        action: 'View job offer',
        label: 'User is navigating to job offer: ' + jobTitle,
      })
    }

    return (
      <div
        className={'carrerOfferPreview border-img-blue ' + additionalStyleClass}
      >
        <Link
          to={pathPrefix + '/karriere/stellenanzeige/' + anzeigeId}
          className="text-dark"
          onClick={() => handleViewJobOfferClick(title)}
        >
          <div className="padding-20">
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
          </div>
        </Link>
      </div>
    )
  }
}

export default CarrerOfferPreview
