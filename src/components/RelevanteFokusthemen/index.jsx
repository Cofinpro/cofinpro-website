import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import LinkButton from '../../components/buttons/LinkButton'
import ToggleButton from '../../components/buttons/ToggleButton'
import './style.scss'

class RelevanteFokusthemen extends React.Component {
  render() {
    const data = this.props.data

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, title, locationUpdate } = this.props

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    return (
      <div>
        <div className="text-left margin-20-top">
          <p className="text-size-14">RELEVANTE FOKUSTHEMEN</p>

          <p className="text-left margin-20-top text-size-18">
            Kundenorientierte vertriebswege und digitale Antragsprozesse
          </p>
          <p className="text-left margin-40-top text-size-18">
            Automatisierung in Bonitätsprüfung und Sicherheitsbewertung
          </p>
          <p className="text-left margin-20-top text-size-18">
            Kundenbindung und Effizien in der Bestandsführung
          </p>
          <div className="col-12 col-md-4 order-1 order-md-2 text-center margin-10-bottom">
            <ToggleButton id="pinnwand" dataTarget={'more-fokusthemen'} />
            <p className="d-none d-md-block text-primary text-size-14">
              MEHR<br />ANZEIGEN
            </p>
            <p className="d-block d-md-none text-primary text-size-14">
              MEHR ANZEIGEN
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default RelevanteFokusthemen
