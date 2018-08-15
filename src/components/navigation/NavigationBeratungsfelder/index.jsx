import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

class NavigationBeratungsfelder extends React.Component {
  render() {
    const { description, styleClass, urlPrefix } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const listItems = [
      { text: 'Management', path: 'managementberatung' },
      { text: 'Fachberatung Kredit', path: 'fachberatung-kredit' },
      { text: 'Fachberatung Wertpapier', path: 'fachberatung-wertpapier' },
      { text: 'Technologieberatung', path: 'technologieberatung' },
      { text: 'Digitalisierung', path: 'digitalisierung' },
    ].map((data, i) => (
      <div key={data.path} className="col-sm text-md-center filter-button">
        <p>
          <Link
            to={`${pathPrefix}/${urlPrefix}/${data.path}`}
            activeClassName="active"
          >
            {data.text}
          </Link>
        </p>
      </div>
    ))

    return (
      <div>
        <div className={'container filter ' + styleClass}>
          <div className="row">
            <div className="col-12 col-md-6">
              <h4>FILTER</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={'container'}>
          <div className="row d-none d-md-flex justify-content-center filter-button-group">
            {listItems}
          </div>
          <div className="row d-flex d-md-none justify-content-center">
            <div className="col-12">
              <div className="div filter-button-group">{listItems}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBeratungsfelder
