import React from 'react'
import Link from 'gatsby-link'

import Menu from '../Menu'

import './style.scss'

class MainNavigation extends React.Component {
  componentDidMount() {
    $('#menu-main-mobile-toggle').click(function() {
      $('#mobile-main-menu').collapse('hide')
    })
  }

  render() {
    const { location, locationUpdate } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div
        className="main-navigation fixed-top"
        hidden={location.pathname.startsWith('/karriere')}
      >
        <div className="bg-white">
          <div className="d-block d-xl-none">
            <div className="container">
              <div className="row">
                <div className="col">
                  <nav>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <div>
                        <Link to="/">
                          <img
                            className="cofinpro-logo-startseite"
                            alt="Nächstes Bild"
                            src={pathPrefix + '/svg/logo_cofinpro.svg'}
                          />
                        </Link>
                      </div>
                      <div>
                        <form className="form-inline">
                          <span className="title-menu text-primary d-inline d-xl-none navbar-text mr-sm-2">
                            MENÜ
                          </span>
                          <div>
                            <button
                              id="menu-main-mobile-toggle"
                              className="navbar-toggler d-inline d-xl-none"
                              type="button"
                              data-toggle="collapse"
                              data-target="#mobile-main-menu"
                              aria-controls="mobile-main-menu"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              <img
                                alt="Menü Icon"
                                src={pathPrefix + '/svg/icon_menu_toggler.svg'}
                              />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block">
            <div className="container container-md-full-width">
              <div className="row">
                <div className="col">
                  <nav id="cofinpro-nav" className="navbar navbar-expand-xl">
                    <Menu
                      id="desktop-main-menu"
                      location={location}
                      locationUpdate={locationUpdate}
                      {...this.props}
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-xl-none">
          <Menu
            id="mobile-main-menu"
            location={location}
            locationUpdate={locationUpdate}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

export default MainNavigation
