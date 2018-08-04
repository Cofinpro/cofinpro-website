import React from 'react'
import Link from 'gatsby-link'

import './filter.scss'

class FokusthemenFilter extends React.Component {
  render() {
    const { styleClass } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const listItems = [
      { text: 'Management', path: 'management' },
      { text: 'Fachberatung Kredit', path: 'kredit' },
      { text: 'Fachberatung Wertpapier', path: 'wertpapier' },
      { text: 'Technologieberatung', path: 'technologie' },
      { text: 'Digitalisierung', path: 'digitalisierung' },
    ].map(data => (
      <div key={data.path} className="col-sm filter-button">
        <Link to={pathPrefix + data.path}>{data.text}</Link>
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
        <div className="row filter-button-group">{listItems}</div>
      </div>
    )
  }
}

export default FokusthemenFilter
