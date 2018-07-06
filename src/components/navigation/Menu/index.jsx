import React from 'react'
import Link from 'gatsby-link'
import PubSub from 'pubsub-js'

import './style.scss'

import StorageHelper from '../../../utils/storageHelper'
import Kompetenzen from '../../../../data/Kompetenzen'

import LinkButton from '../../buttons/LinkButton'

import NavbarLinks from '../NavbarLinks'

class Menu extends React.Component {
  componentDidMount() {
    $(document).on('click', '.navbar-collapse.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide')
      }
    })

    $('#close-button-menu').click(function() {
      $('#navbar-main-content').collapse('hide')
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
        name: 'BERATUNGSFELDER',
        link: '/beratungsfelder',
        pattern: '/beratungsfelder/.*',
      },
      {
        name: 'FOKUSTHEMEN',
        link: '/fokusthemen',
        pattern: '/fokusthemen',
      },
      {
        name: 'PROJEKTE',
        link: '/projekte',
        pattern: '/projekte/.*',
      },
      {
        name: 'NEWS & MEDIEN',
        link: '/news-medien',
        pattern: '/news-medien/.*',
      },
      {
        name: 'COFINPRO',
        link: '/cofinpro',
        pattern: '/cofinpro',
      },
    ]

    return (
      <div
        className="collapse navbar-collapse main-navigation-bar"
        id="navbar-main-content"
      >
        <div>
          <a href="/" className="navbar-brand d-none d-lg-block">
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
          </a>
        </div>
        <div className="d-block d-lg-none text-secondary margin-20-bottom">
          <p className="h5 d-inline">MENÜ</p>
          <button
            id="close-button-menu"
            type="button"
            className="close d-inline"
            aria-label="Close"
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
          styleLink=" navigation-to-krarriere"
          text="KARRIERE"
          path="/karriere"
          {...this.props}
        />
      </div>
    )
  }
}

export default Menu
