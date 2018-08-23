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
                    className="d-none d-xl-inline main-navigation-bar__dotted-line-horizontal"
                  />
                </div>
              )}
              {menuItem.children !== undefined &&
              menuItem.children.length > 0 ? (
                <ul className="d-flex d-xl-none nav-item-child">
                  {menuItem.children.map(function(menuChild, i) {
                    return (
                      <li
                        key={'navigation-list-child-item-' + i}
                        className={
                          location.pathname.match(menuChild.pattern)
                            ? 'nav-item margin-20-left active'
                            : 'nav-item margin-20-left'
                        }
                      >
                        <Link to={menuChild.link} className="nav-link">
                          {menuChild.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NavbarLinks
