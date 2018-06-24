import React from 'react'
import Link from 'gatsby-link'
import PubSub from 'pubsub-js'

import StorageHelper from '../../../utils/storageHelper'

import './style.scss'

import Kompetenzen from '../../../../data/Kompetenzen'

class MenuCareer extends React.Component {
  componentDidMount() {
    $(document).on('click', '.navbar-collapse.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide')
      }
    })

    $('#close-button-menu').click(function() {
      $('#navbarSupportedContent').collapse('hide')
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

  getPathPrefixPerspective() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (
      this.getPerspective() === undefined ||
      this.getPerspective().length === 0
    ) {
      return pathPrefix + '/'
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

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, locationUpdate } = this.props

    var mainUrl =
      pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/karriere'

    var menuItems = [
      {
        name: 'HOME',
        link: '/karriere' + this.getPathPrefixPerspective() + '/landing',
        pattern: '/karriere/.*/landing',
      },
      {
        name: 'ÜBER UNS',
        link: pathPrefix + '/karriere/ueber-uns',
        pattern: '/karriere/ueber-uns',
      },
      {
        name: 'DEINE KARRIERE',
        link: '/karriere' + this.getPathPrefixPerspective() + '/deine-karriere',
        pattern: '/karriere/.*/deine-karriere',
      },
      {
        name: 'DEINE ENTWICKLUNG',
        link:
          '/karriere' + this.getPathPrefixPerspective() + '/deine-entwicklung',
        pattern: '/karriere/.*/deine-entwicklung',
      },
      {
        name: 'GEHALT & BENEFITS',
        link:
          '/karriere' + this.getPathPrefixPerspective() + '/gehalt-beteiligung',
        pattern: '/karriere/.*/gehalt-beteiligung',
      },
      {
        name: 'WORK & LIFE',
        link: pathPrefix + '/karriere/work-life',
        pattern: '/karriere/work-life',
      },
      {
        name: 'JOBS & BEWERBUNG',
        link: pathPrefix + '/karriere/jobs-bewerbung',
        pattern: '/karriere/jobs-bewerbung',
      },
    ]

    return (
      <div
        className="collapse navbar-collapse main-navigation-bar"
        id="navbarSupportedContent"
        hidden={locationUpdate === mainUrl ? true : false}
      >
        <div>
          <a href="/" className="navbar-brand d-none d-lg-block">
            <img
              className="cofinpro-logo"
              alt="Nächstes Bild"
              src={pathPrefix + '/svg/karrierelogo.svg'}
            />
          </a>
        </div>
        <div className="d-block d-lg-none text-white margin-20-bottom">
          <p className="h5 bold-font d-inline">MENÜ</p>
          <button
            id="close-button-menu"
            type="button"
            className="close d-inline"
            aria-label="Close"
          >
            <img
              className="main-navigation-bar__img-close-button"
              alt="Menü schließen"
              src={pathPrefix + '/svg/icon_close.svg'}
            />
          </button>
        </div>
        <ul
          className="navbar-nav w-100 justify-content-end"
          hidden={locationUpdate === mainUrl ? true : false}
        >
          {menuItems.map(function(menuItem, i) {
            return (
              <li
                key={'navItemMenuCarrer-' + i}
                className={
                  location.pathname.match(menuItem.pattern)
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  key={'linkMenuCarrer-' + i}
                  to={menuItem.link}
                  className="nav-link"
                >
                  {menuItem.name}
                </Link>
                {i < menuItems.length - 1 && (
                  <div
                    key={'lineContainerMenuCarrer-' + i}
                    className="d-inline"
                  >
                    <img
                      key={'dottedLineMenuCarrer-' + i}
                      src={pathPrefix + '/img/nav-line.png'}
                      className="d-inline d-lg-inline main-navigation-bar__dotted-line-horizontal"
                    />
                    <img
                      key={'dottedLineVerticalMenuCarrer-' + i}
                      src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                      className="d-block d-lg-none main-navigation-bar__dotted-line-vertical"
                    />
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MenuCareer
