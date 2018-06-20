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
          <div className="fallback-text-container">
            <a
              className="text-dark d-block"
              rel="noopener"
              target="_blank"
              href="https://recruitingapp-2586.umantis.com/Vacancies/297/Application/CheckLogin/1?lang=ger"
            >
              <p className="no-margin-bottom text-left padding-sm-bottom">
                Dass wir hier aktuell keinen Job ausgeschrieben haben, bedeutet
                nicht, dass wir Dich nicht kennenlernen möchten.
              </p>
              <p className="text-primary no-margin-bottom d-flex justify-content-between">
                Schick uns gerne gleich Deine Initiativbewerbung! <span>></span>
              </p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default CarrerOfferPreviewFallback
