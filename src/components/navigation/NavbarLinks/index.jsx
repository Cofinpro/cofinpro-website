import React from 'react'
import Link from 'gatsby-link'

class NavbarLinks extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, locationUpdate, menuItems } = this.props

    var mainUrl =
      pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/karriere'

    return (
      <ul
        className="navbar-nav w-100 justify-content-end"
        hidden={locationUpdate === mainUrl ? true : false}
      >
        {menuItems.map(function(menuItem, i) {
          return (
            <li
              key={'navigation-list-item-' + i}
              className={
                location.pathname.match(menuItem.pattern)
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to={menuItem.link} className="nav-link">
                {menuItem.name}
              </Link>
              {i < menuItems.length - 1 && (
                <div key={'lineContainerMenuCarrer-' + i} className="d-inline">
                  <img
                    key={'dottedLineMenuCarrer-' + i}
                    src={pathPrefix + '/img/nav-line.png'}
                    className="d-inline d-lg-inline main-navigation-bar__dotted-line-horizontal"
                  />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavbarLinks
