import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import LinkButton from '../../components/buttons/LinkButton'

import './style.scss'

class FooterNavigation extends React.Component {
  render() {
    const data = this.props.data

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, title, locationUpdate } = this.props

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    return (
      <div>
        <div className="container">
          <div className="row margin-100-top footer-navigation">
            <div className="col-3">
              <div className="justify-content-start">
                <LinkButton
                  text="ZURÜCK"
                  styleSpan="btn-lg btn-block padding-button"
                />
              </div>
            </div>
            <div className="col-6" />
            <div className="col-3">
              <div className="justify-content-end">
                <LinkButton
                  text="SHARE"
                  styleSpan="btn-lg btn-block padding-button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterNavigation
