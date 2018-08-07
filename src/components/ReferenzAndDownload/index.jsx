import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import LinkButton from '../../components/buttons/LinkButton'

import './style.scss'

class ReferenzAndDownload extends React.Component {
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
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2 className="h2"> Referenzprojekte </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <div className="row">
                <div className="col-md-8">
                  <LinkButton
                    text="ALLE PROJEKTE ZUM FOKUSTHEMA"
                    styleSpan="btn-lg btn-block padding-button margin-10-top"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-120-top margin-xs-100">
            <div className="col-md-6">
              <h2 className="h2"> Medien </h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <div className="row">
                <div className="col-md-8">
                  <LinkButton
                    text="ALLE MEDIEN ANZEIGEN"
                    styleSpan="btn-lg btn-block padding-button margin-100-bottom margin-10-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReferenzAndDownload
