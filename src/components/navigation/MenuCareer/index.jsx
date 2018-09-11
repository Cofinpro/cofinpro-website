import React from 'react'
import Link from 'gatsby-link'
import PubSub from 'pubsub-js'

import LinkButton from '../../buttons/LinkButton'

import StorageHelper from '../../../utils/storageHelper'

import './style.scss'

import Kompetenzen from '../../../../data/Kompetenzen'

import NavbarLinks from '../NavbarLinks'

class MenuCareer extends React.Component {
  componentDidMount() {
    $(document).on('click', '.navbar-collapse.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide')
      }
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

    function hideMenu() {
      $('#navbarSupportedContent').collapse('hide')
    }

    return (
      <div
        className="collapse navbar-collapse main-navigation-bar"
        id="navbarSupportedContent"
      >
        <div>
          <Link
            to={
              location.pathname.startsWith('/karriere')
                ? '/karriere' + this.getPathPrefixPerspective() + '/landing'
                : '/'
            }
            className="navbar-brand d-none d-xl-block"
          >
            {location.pathname.startsWith('/karriere') === false ? (
              <img
                className="cofinpro-logo-startseite"
                alt="Nächstes Bild"
                src={pathPrefix + '/svg/logo_cofinpro.svg'}
              />
            ) : (
              <img
                className="cofinpro-logo-startseite"
                alt="Nächstes Bild"
                src={pathPrefix + '/svg/karrierelogo.svg'}
              />
            )}
          </Link>
        </div>
        <div className="d-block d-xl-none text-secondary margin-20-bottom">
          <p className="h5 d-inline">MENÜ</p>
          <button
            type="button"
            className="close d-inline"
            aria-label="Close"
            onClick={hideMenu}
          >
            <img
              className="main-navigation-bar__img-close-button"
              alt="Menü schließen"
              src={pathPrefix + '/svg/icon_close_blue.svg'}
            />
          </button>
        </div>
        <NavbarLinks
          location={location}
          locationUpdate={locationUpdate}
          menuItems={menuItems}
        />
        <LinkButton
          text="HAUPTSEITE"
          path="/"
          styleLink={'d-inline d-xl-none'}
          {...this.props}
        />
      </div>
    )
  }
}

export default MenuCareer
