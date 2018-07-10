import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import logo from '../../../static/svg/arrowdown.svg'

class DownloadLinksBottom extends React.Component {
  render() {
    const data = this.props.data

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, title, locationUpdate } = this.props

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              Mifid II Umsetzung <br /> Folgen der MiFID II Umsetzung <br />Das
              Ändert sich für Bankkunden
            </div>
            <div className="col-2">Test</div>

            <div className="col-4">
              Mifid II Umsetzung <br /> Folgen der MiFID II Umsetzung <br />Das
              Ändert sich für Bankkunden
            </div>
            <div className="col-2">Test</div>
          </div>
        </div>
      </div>
    )
  }
}

export default DownloadLinksBottom
