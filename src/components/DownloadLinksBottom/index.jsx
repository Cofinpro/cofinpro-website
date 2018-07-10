import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import LinkButton from '../../components/buttons/LinkButton'

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
          <div className="row margin-60-top">
            <h2> Downloads </h2>
          </div>
          <div className="row">
            <div className="col-4">
              <p className="margin-10-top">
                Mifid II Umsetzung <br /> Folgen der MiFID II Umsetzung <br />Das
                Ändert sich für Bankkunden
              </p>
              <br />
              <p className="margin-10-top">
                Mifid II Umsetzung <br /> Folgen der MiFID II Umsetzung <br />Das
                Ändert sich für Bankkunden
              </p>
            </div>
            <div className="col-2" />
            <div className="col-4">
              <p className="margin-10-top">
                Mifid II Umsetzung <br /> Folgen der MiFID II Umsetzung <br />Das
                Ändert sich für Bankkunden
              </p>
              <br />
              <p className="margin-10-top">
                Mifid II Umsetzung <br /> Folgen der MiFID II Umsetzung <br />Das
                Ändert sich für Bankkunden
              </p>
            </div>
            <div className="col-2" />
          </div>
          <div className="row">
            <div className="col-3">
              <LinkButton
                text="ZU DEN MEDIEN"
                styleSpan="btn-lg btn-block padding-button margin-20-bottom margin-20-top"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DownloadLinksBottom
