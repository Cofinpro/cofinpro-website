import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

class CarrerOfferPreviewFallback extends React.Component {
  render() {
    var borderStyle = this.props.borderStyle

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="">
        <div className={'preview-fallback-box border-' + borderStyle}>
          <a
            className="text-dark d-block"
            target="_blank"
            href="https://recruitingapp-2586.umantis.com/Vacancies/297/Application/CheckLogin/1?lang=ger"
          >
            <p className="no-margin-bottom text-left padding-sm-bottom">
              Zur Zeit haben wir leider keine freien Stellen, aber wir freuen
              uns über deine Initiativbewerbung!
            </p>
            <p className="text-primary no-margin-bottom d-flex justify-content-between">
              Jetzt initiativ bewerben <span>></span>
            </p>
          </a>
        </div>
      </div>
    )
  }
}

export default CarrerOfferPreviewFallback
