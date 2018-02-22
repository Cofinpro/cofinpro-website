import React from 'react'
import Link from 'gatsby-link'
import PubSub from 'pubsub-js'

import StorageHelper from '../../../utils/storageHelper'

import './style.scss'

import Kompetenzen from '../../../../data/Kompetenzen'

class MenuCareer extends React.Component {

  componentDidMount() {

    $(document).on('click', '.navbar-collapse.show', function (e) {
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

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, locationUpdate } = this.props

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    var menuItems = [
      {
        name: 'HOME',
        link: this.getPathPrefixPerspective() + '/landing',
        pattern: '/.*/landing'
      },
      {
        name: 'ÜBER UNS',
        link: pathPrefix + '/ueber-uns',
        pattern: '/ueber-uns'
      },
      {
        name: 'DEINE KARRIERE',
        link: this.getPathPrefixPerspective() + '/deine-karriere',
        pattern: '/.*/deine-karriere',
      },
      {
        name: 'DEINE ENTWICKLUNG',
        link: this.getPathPrefixPerspective() + '/deine-entwicklung',
        pattern: '/.*/deine-entwicklung',
      },
      {
        name: 'GEHALT & BENEFITS',
        link: this.getPathPrefixPerspective() + '/gehalt-beteiligung',
        pattern: '/.*/gehalt-beteiligung',
      },
      {
        name: 'WORK & LIFE',
        link: pathPrefix + '/work-life',
        pattern: '/work-life',
      },
      {
        name: 'JOBS & BEWERBUNG',
        link: pathPrefix + '/jobs-bewerbung',
        pattern: '/jobs-bewerbung',
      },
    ]

    return (
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        hidden={locationUpdate === mainUrl ? true : false}
      >
        <div className="d-block d-lg-none text-white margin-20-bottom">
          <p className="d-inline h5">MENÜ</p>
          <button id="close-button-menu" type="button" className="close d-inline" aria-label="Close">
            <img
              className="close-button-img"
              alt="Menü schließen"
              src={pathPrefix + '/svg/icon_close.svg'}
            />
          </button>
        </div>
        <ul
          className="navbar-nav mr-auto"
          hidden={locationUpdate === mainUrl ? true : false}
        >
          {menuItems.map(function (menuItem, i) {
            return (
              <li
                key={"navItemMenuCarrer-" + i}
                className={
                  location.pathname.match(menuItem.pattern)
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  key={"linkMenuCarrer-" + i}
                  to={menuItem.link}
                  className="nav-link"
                >
                  {menuItem.name}
                </Link>
                {i < menuItems.length - 1 &&
                  <div key={"lineContainerMenuCarrer-" + i} className="d-inline">
                    <img
                      key={"dottedLineMenuCarrer-" + i}
                      src={pathPrefix + '/img/nav-line.png'}
                      className="d-inline d-lg-inline nav-dotted-line"
                    />
                    <img
                      key={"dottedLineVerticalMenuCarrer-" + i}
                      src={pathPrefix + '/img/icon_dotted_line_vertical.png'}
                      className="d-block d-lg-none nav-dotted-line-vertical"
                    />
                  </div>
                }
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default MenuCareer
