import React from 'react'
import { findDOMNode } from 'react-dom'
import Link from 'gatsby-link'
import navigateTo from 'gatsby-link'
import PubSub from 'pubsub-js'

import StorageHelper from '../../../utils/storageHelper'

import MenuCareer from '../MenuCareer'
import MenuCompetence from '../MenuCompetence'

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
    const { onClick, location, title, locationUpdate } = this.props

    var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    return (
      <div className="fixed-top">
        <div className="bg-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <a
                  href="https://www.cofinpro.de"
                  hidden={locationUpdate !== mainUrl ? true : false}
                >
                  <img
                    className="cofinpro-logo-startseite"
                    alt="Nächstes Bild"
                    src={pathPrefix + '/svg/logo_cofinpro.svg'}
                  />
                </a>

                <nav
                  id="cofinpro-nav-career"
                  className="navbar"
                  hidden={locationUpdate === mainUrl ? true : false}
                >
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div>
                      <a
                        className="text-muted d-none d-lg-inline"
                        href="https://www.cofinpro.de"
                      >
                        &lt;- Zur Hauptseite
                      </a>
                      <a
                        href="https://www.cofinpro.de"
                        className="navbar-brand d-inline d-lg-none"
                      >
                        <img
                          className="cofinpro-logo"
                          alt="Nächstes Bild"
                          src={pathPrefix + '/svg/logo_cofinpro.svg'}
                        />
                      </a>
                    </div>

                    <div />

                    <div>
                      <form className="form-inline">
                        {/*<span className="title-perspective text-secondary d-none d-md-inline navbar-text">
                  {this.getPerspectiveTitle()}
                </span>*/}
                        <span className="title-perspective text-secondary d-inline navbar-text mr-sm-2">
                          {this.getPerspectiveTitle()}
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
                        <span className="title-menu text-primary d-inline d-lg-none navbar-text mr-sm-2">
                          MENÜ
                        </span>
                        <button
                          id="menuNavbarToggler"
                          hidden={locationUpdate === mainUrl ? true : false}
                          className="navbar-toggler d-inline d-lg-none"
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
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-md-full-width ">
          <div className="row">
            <div className="col">
              <nav
                id="cofinpro-nav"
                className={
                  'navbar navbar-expand-lg ' +
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
            <div className="col-12 col-lg-6 offset-lg-6">
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
