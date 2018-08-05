import React from 'react'
import Link from 'gatsby-link'

import StorageHelper from '../../../utils/storageHelper'

import MenuCareer from '../MenuCareer'
import MenuCompetence from '../MenuCompetence'

import LinkButton from '../../buttons/LinkButton'

import './style.scss'

import Kompetenzen from '../../../../data/Kompetenzen'

class NavigationCareer extends React.Component {
  componentDidMount() {
    $('#perspectiveNavbarToggler').click(function() {
      $('#navbarSupportedContent').collapse('hide')
    })

    $('#menuNavbarToggler').click(function() {
      $('#nav-menu-competence').collapse('hide')
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      perspective: StorageHelper.getFromSessionStorage('perspective'),
    }

    this.perspectives = []

    for (var i = 0; i < Kompetenzen.data.length; ++i) {
      this.perspectives.push(Kompetenzen.data[i].id)
    }
  }

  getPerspective() {
    if (typeof localStorage !== 'undefined') {
      if (StorageHelper.getFromSessionStorage('perspective').length > 0) {
        return '' + StorageHelper.getFromSessionStorage('perspective')
      } else {
        return ''
      }
    }
  }

  getPerspectiveTitle() {
    if (typeof localStorage !== 'undefined') {
      if (StorageHelper.getFromSessionStorage('perspective').length > 0) {
        let perspective = StorageHelper.getFromSessionStorage('perspective')

        for (var i = 0; i < Kompetenzen.data.length; ++i) {
          if (Kompetenzen.data[i].id === perspective) {
            let partTwo =
              Kompetenzen.data[i].navTitel.trim().length > 0
                ? ' > ' + Kompetenzen.data[i].navTitel
                : ''
            return Kompetenzen.data[i].navCategory + partTwo
          }
        }

        return '' + StorageHelper.getFromSessionStorage('perspective')
      } else {
        return 'Kompetenz wählen'
      }
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const { location, locationUpdate } = this.props

    var mainUrl =
      pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/karriere'

    return (
      <div
        className="career-navigation fixed-top"
        hidden={location.pathname.startsWith('/karriere') === false}
      >
        <div className="bg-white">
          <div className="bg-white mobile-navigation-bar">
            <div className="container">
              <div className="row">
                <div className="col">
                  <Link
                    to="/karriere"
                    hidden={locationUpdate !== mainUrl ? true : false}
                  >
                    <img
                      className={
                        locationUpdate !== mainUrl
                          ? 'cofinpro-logo-startseite '
                          : 'cofinpro-logo-startseite cofinpro-logo-startseite--withSpace'
                      }
                      alt="Nächstes Bild"
                      src={pathPrefix + '/svg/karrierelogo.svg'}
                    />
                  </Link>

                  <nav
                    id="cofinpro-nav-career"
                    className="navbar"
                    hidden={locationUpdate === mainUrl ? true : false}
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <div>
                        <Link
                          to="/karriere"
                          className="navbar-brand d-inline d-xl-none"
                        >
                          <img
                            className="cofinpro-logo"
                            alt="Nächstes Bild"
                            src={pathPrefix + '/svg/karrierelogo.svg'}
                          />
                        </Link>
                      </div>

                      <div />

                      <div>
                        <form className="form-inline">
                          <div className="d-inline">
                            <span className="title-perspective text-secondary navbar-text mr-sm-2 d-none d-xl-inline">
                              {this.getPerspectiveTitle()}
                            </span>
                            <span className="title-perspective text-secondary navbar-text mr-sm-2 d-inline d-xl-none">
                              KOMPETENZ
                            </span>
                            <button
                              id="perspectiveNavbarToggler"
                              className="navbar-toggler"
                              type="button"
                              data-toggle="collapse"
                              data-target="#nav-menu-competence"
                              aria-controls="nav-menu-competence"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              <img
                                alt="Menü Icon"
                                src={
                                  pathPrefix +
                                  '/svg/icon_menu_perspektive_toggler.svg'
                                }
                              />
                            </button>
                            <LinkButton
                              text="HAUPTSEITE"
                              path="/"
                              styleLink={'d-none d-xl-inline'}
                              styleSpan={'btn-sm margin-20-left'}
                              {...this.props}
                            />
                          </div>
                          <span className="title-menu text-primary d-inline d-xl-none navbar-text mr-sm-2">
                            MENÜ
                          </span>
                          <div>
                            <button
                              id="menuNavbarToggler"
                              hidden={locationUpdate === mainUrl ? true : false}
                              className="navbar-toggler d-inline d-xl-none"
                              type="button"
                              data-toggle="collapse"
                              data-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent"
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
          <div className="bg-white">
            <div className="container container-md-full-width bg-white">
              <div className="row">
                <div className="col">
                  <nav
                    id="cofinpro-nav"
                    className={
                      'navbar navbar-expand-xl ' +
                      (locationUpdate === mainUrl ? 'on-main-site' : '')
                    }
                    hidden={locationUpdate === mainUrl ? true : false}
                  >
                    <MenuCareer
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
        <div className="container container-md-full-width">
          <div className="row">
            <div className="col-12 col-xl-6 offset-xl-6">
              <MenuCompetence
                location={location}
                locationUpdate={locationUpdate}
                {...this.props}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationCareer
