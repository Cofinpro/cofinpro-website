import React from 'react'
import { findDOMNode } from 'react-dom'
import Link from 'gatsby-link'
import navigateTo from 'gatsby-link'
import PubSub from 'pubsub-js'

import StorageHelper from '../../utils/storageHelper'

import './style.scss'

import Kompetenzen from '../../../data/Kompetenzen'

class SiteNavi extends React.Component {
  componentDidMount() {
    $(document).on('click', '.navbar-collapse.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide')
      }
    })

    $(document).on('click', '#navbarCareerContent.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide')
      }
    })

    $('#perspectiveNavbarToggler').click(function() {
      $('#navbarSupportedContent').collapse('hide')
    })

    $('#menuNavbarToggler').click(function() {
      $('#navbarCareerContent').collapse('hide')
    })
  }

  savePerspective(perspective) {
    StorageHelper.saveInSessionStorage('perspective', perspective)
    this.setState({ perspective: perspective })
    PubSub.publish('perspectiveChange', perspective)
  }

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      perspective: StorageHelper.getFromSessionStorage('perspective'),
    }

    this.perspectives = []

    for (var i = 0; i < Kompetenzen.data.length; ++i) {
      this.perspectives.push(Kompetenzen.data[i].id)
    }
  }

  getPathPrefixPerspective() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (
      this.getPerspective() === undefined ||
      this.getPerspective().length === 0
    ) {
      return pathPrefix
    } else {
      return pathPrefix + '/' + this.getPerspective()
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
        return ''
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
      <div className="container">
        <a
          href="https://www.cofinpro.de"
          hidden={locationUpdate !== mainUrl ? true : false}
        >
          <img
            src={pathPrefix + '/img/cofinpro_logo.png'}
            className="cofinpro-logo-startseite"
          />
        </a>

        <nav
          id="cofinpro-nav-career"
          className="navbar"
          hidden={locationUpdate === mainUrl ? true : false}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            <a href="https://www.cofinpro.de" className="navbar-brand">
              <img
                src={pathPrefix + '/img/cofinpro_logo.png'}
                className="cofinpro-logo"
              />
            </a>
            <form className="form-inline">
              <span className="title-perspective text-secondary d-none d-md-inline navbar-text">
                {this.getPerspectiveTitle()}
              </span>
              <span className="title-perspective text-secondary d-inline d-md-none navbar-text mr-sm-2">
                DEINE KOMPETENZ
              </span>
              <button
                id="perspectiveNavbarToggler"
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCareerContent"
                aria-controls="navbarCareerContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <object
                  type="image/svg+xml"
                  data={pathPrefix + '/svg/icon_menu_perspektive_toggler.svg'}
                  className="logo"
                >
                  menu kompetenz toggler
                </object>
              </button>
            </form>
          </div>
        </nav>

        <nav
          id="cofinpro-nav"
          className={
            'navbar navbar-expand-lg ' +
            (locationUpdate === mainUrl ? 'on-main-site' : '')
          }
          hidden={locationUpdate === mainUrl ? true : false}
        >
          <span className="title-menu text-primary d-inline d-lg-none navbar-text mr-sm-2">
            MENÜ
          </span>
          <button
            id="menuNavbarToggler"
            hidden={locationUpdate === mainUrl ? true : false}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <object
              type="image/svg+xml"
              data={pathPrefix + '/svg/icon_menu_toggler.svg'}
              className="logo"
            >
              menu toggler
            </object>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            hidden={locationUpdate === mainUrl ? true : false}
          >
            <p className="d-block d-lg-none text-white">MENÜ</p>
            <ul
              className="navbar-nav mr-auto"
              hidden={locationUpdate === mainUrl ? true : false}
            >
              <li
                className={
                  location.pathname.match('/.*/landing')
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  to={this.getPathPrefixPerspective() + '/landing'}
                  className="nav-link"
                >
                  HOME
                </Link>
                <img
                  src={pathPrefix + '/img/nav-line.png'}
                  className="d-inline d-lg-inline nav-dotted-line"
                />
                <img
                  src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                  className="d-block d-lg-none nav-dotted-line-vertical"
                />
              </li>
              <li
                className={
                  location.pathname.match('/ueber-uns')
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to={pathPrefix + '/ueber-uns'} className="nav-link">
                  ÜBER UNS
                </Link>
                <img
                  src={pathPrefix + '/img/nav-line.png'}
                  className="d-inline d-lg-inline nav-dotted-line"
                />
                <img
                  src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                  className="d-block d-lg-none nav-dotted-line-vertical"
                />
              </li>
              <li
                className={
                  location.pathname.match('/.*/deine-karriere')
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  to={this.getPathPrefixPerspective() + '/deine-karriere'}
                  className="nav-link"
                >
                  DEINE KARRIERE
                </Link>
                <img
                  src={pathPrefix + '/img/nav-line.png'}
                  className="d-inline d-lg-inline nav-dotted-line"
                />
                <img
                  src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                  className="d-block d-lg-none nav-dotted-line-vertical"
                />
              </li>
              <li
                className={
                  location.pathname.match('/.*/deine-entwicklung')
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  to={this.getPathPrefixPerspective() + '/deine-entwicklung'}
                  className="nav-link"
                >
                  DEINE ENTWICKLUNG
                </Link>
                <img
                  src={pathPrefix + '/img/nav-line.png'}
                  className="d-inline d-lg-inline nav-dotted-line"
                />
                <img
                  src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                  className="d-block d-lg-none nav-dotted-line-vertical"
                />
              </li>
              <li
                className={
                  location.pathname.match('/.*/gehalt-beteiligung')
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  to={this.getPathPrefixPerspective() + '/gehalt-beteiligung'}
                  className="nav-link"
                >
                  GEHALT & BENEFITS
                </Link>
                <img
                  src={pathPrefix + '/img/nav-line.png'}
                  className="d-inline d-lg-inline nav-dotted-line"
                />
                <img
                  src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                  className="d-block d-lg-none nav-dotted-line-vertical"
                />
              </li>
              <li
                className={
                  location.pathname.match('/work-life')
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to={pathPrefix + '/work-life'} className="nav-link">
                  WORK & LIFE
                </Link>
                <img
                  src={pathPrefix + '/img/nav-line.png'}
                  className="d-inline d-lg-inline nav-dotted-line"
                />
                <img
                  src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                  className="d-block d-lg-none nav-dotted-line-vertical"
                />
              </li>
              <li
                className={
                  location.pathname.match('/jobs-bewerbung')
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to={pathPrefix + '/jobs-bewerbung'} className="nav-link">
                  JOBS & BEWERBUNG
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div
          className="collapse"
          id="navbarCareerContent"
          hidden={locationUpdate === mainUrl ? true : false}
        >
          <p className="d-block text-white h5 padding-sm-bottom">
            DEINE KOMPETENZ
          </p>
          <ul className="navbar-nav mr-auto text-dark">
            <li>
              <p className="h6">FACHBERATER</p>
            </li>
            <li
              className={
                StorageHelper.getFromSessionStorage('perspective').match(
                  'fachlicher-absolvent'
                )
                  ? 'nav-item h6 active'
                  : 'nav-item h6'
              }
            >
              <Link
                to={
                  location.pathname.slice(1).split('/').length > 0 &&
                  this.perspectives.indexOf(
                    location.pathname.slice(1).split('/')[urlFragmentPers]
                  ) > -1
                    ? 'fachlicher-absolvent/' +
                      location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                    : location.pathname
                }
                onClick={() => this.savePerspective('fachlicher-absolvent')}
                className="nav-link"
              >
                > Absolvent & Young Professional
              </Link>
            </li>
            <li
              className={
                StorageHelper.getFromSessionStorage('perspective').match(
                  'fachlicher-professional'
                )
                  ? 'nav-item h6 active'
                  : 'nav-item h6'
              }
            >
              <Link
                to={
                  location.pathname.slice(1).split('/').length > 0 &&
                  this.perspectives.indexOf(
                    location.pathname.slice(1).split('/')[urlFragmentPers]
                  ) > -1
                    ? 'fachlicher-professional/' +
                      location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                    : location.pathname
                }
                onClick={() => this.savePerspective('fachlicher-professional')}
                className="nav-link"
              >
                > Professional
              </Link>
            </li>
            <li>
              <span className="text-white h6">/</span>
            </li>
            <li>
              <p className="h6">TECHNOLOGISCHER BERATER</p>
            </li>
            <li
              className={
                StorageHelper.getFromSessionStorage('perspective').match(
                  'technologischer-absolvent'
                )
                  ? 'nav-item h6 active'
                  : 'nav-item h6'
              }
            >
              <Link
                to={
                  location.pathname.slice(1).split('/').length > 0 &&
                  this.perspectives.indexOf(
                    location.pathname.slice(1).split('/')[urlFragmentPers]
                  ) > -1
                    ? 'technologischer-absolvent/' +
                      location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                    : location.pathname
                }
                onClick={() =>
                  this.savePerspective('technologischer-absolvent')
                }
                className="nav-link"
              >
                > Absolvent & Young Professional
              </Link>
            </li>
            <li
              className={
                StorageHelper.getFromSessionStorage('perspective').match(
                  'technologischer-professional'
                )
                  ? 'nav-item h6 active'
                  : 'nav-item h6'
              }
            >
              <Link
                to={
                  location.pathname.slice(1).split('/').length > 0 &&
                  this.perspectives.indexOf(
                    location.pathname.slice(1).split('/')[urlFragmentPers]
                  ) > -1
                    ? 'technologischer-professional/' +
                      location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                    : location.pathname
                }
                onClick={() =>
                  this.savePerspective('technologischer-professional')
                }
                className="nav-link"
              >
                > Professional
              </Link>
            </li>
            <li>
              <span className="text-white h6">/</span>
            </li>
            <li
              className={
                StorageHelper.getFromSessionStorage('perspective').match(
                  'studenten'
                )
                  ? 'nav-item h6 active'
                  : 'nav-item h6'
              }
            >
              <Link
                to={
                  location.pathname.slice(1).split('/').length > 0 &&
                  this.perspectives.indexOf(
                    location.pathname.slice(1).split('/')[urlFragmentPers]
                  ) > -1
                    ? 'studenten/' +
                      location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                    : location.pathname
                }
                onClick={() => this.savePerspective('studenten')}
                className="nav-link"
              >
                STUDENTEN
              </Link>
            </li>
            <li>
              <span className="text-white h6">/</span>
            </li>
            <li
              className={
                StorageHelper.getFromSessionStorage('perspective').match(
                  'andere'
                )
                  ? 'nav-item h6 active'
                  : 'nav-item h6'
              }
            >
              <Link
                to={
                  location.pathname.slice(1).split('/').length > 0 &&
                  this.perspectives.indexOf(
                    location.pathname.slice(1).split('/')[urlFragmentPers]
                  ) > -1
                    ? 'andere/' +
                      location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                    : location.pathname
                }
                onClick={() => this.savePerspective('andere')}
                className="nav-link"
              >
                ANDERE EXPERTISE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SiteNavi
