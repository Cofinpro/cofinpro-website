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

    const { id, location, locationUpdate } = this.props

    var mainUrl =
      pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/karriere'

    var menuItems = [
      {
        name: 'BERATUNGSFELDER',
        link: '/beratungsfelder',
        pattern: '/beratungsfelder.*',
      },
      {
        name: 'FOKUSTHEMEN',
        link: '/fokusthemen/managementberatung',
        pattern: '/fokusthemen.*',
      },
      {
        name: 'PROJEKTE',
        link: '/projekte/managementberatung',
        pattern: '/projekte.*',
      },
      {
        name: 'NEWS & MEDIEN',
        link: '/news-medien',
        pattern: '/news-medien.*',
      },
      {
        name: 'COFINPRO',
        link: '/cofinpro',
        pattern: '/cofinpro',
      },
    ]

    function hideMenu() {
      $('#' + id).collapse('hide')
    }

    return (
      <div className="collapse navbar-collapse main-navigation-bar" id={id}>
        <div>
          <Link to="/" className="navbar-brand d-none d-xl-block">
            <img
              className="cofinpro-logo-startseite"
              alt="Nächstes Bild"
              src={pathPrefix + '/svg/logo_cofinpro.svg'}
            />
          </Link>
        </div>
        <div className="d-block d-xl-none text-secondary margin-20-bottom">
          <p className="h5 d-inline">MENÜ</p>
          <button
            id="close-button-menu"
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
        <LinkButton text="KARRIERE" path="/karriere" {...this.props} />
      </div>
    )
  }
}

export default Menu
