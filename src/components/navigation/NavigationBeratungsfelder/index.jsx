import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

class NavigationBeratungsfelder extends React.Component {
  render() {
    const { styleClass, urlPrefix } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const listItems = [
      { text: 'Management', path: 'management' },
      { text: 'Fachberatung Kredit', path: 'kredit' },
      { text: 'Fachberatung Wertpapier', path: 'wertpapier' },
      { text: 'Technologieberatung', path: 'technologie' },
      { text: 'Digitalisierung', path: 'digitalisierung' },
    ].map(data => (
      <div key={data.path} className="col-sm text-md-center filter-button">
        <p>
          <Link to={`${pathPrefix}/${urlPrefix}/${data.path}`}>
            {data.text}
          </Link>
        </p>
      </div>
    ))

    return (
      <div className={'container filter ' + styleClass}>
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>FILTER</h4>
            <p>
              Commolorrorro que dolupta consedigeni nime exera sunt rest
              estenecti dolut que derspel ipiciminus restis diam nam est.
            </p>
          </div>
        </div>
        <div className="row justify-content-center filter-button-group">
          {listItems}
        </div>
      </div>
    )
  }
}

export default NavigationBeratungsfelder
