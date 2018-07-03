import React from 'react'
import Link from 'gatsby-link'
import PubSub from 'pubsub-js'

import StorageHelper from '../../../utils/storageHelper'

import './style.scss'

import Kompetenzen from '../../../../data/Kompetenzen'

class MenuCompetence extends React.Component {
  componentDidMount() {
    $(document).on('click', '#nav-menu-competence.show', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide')
      }
    })

    $('#close-button-menu-competence').click(function() {
      $('#nav-menu-competence').collapse('hide')
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

  getLocalPerspective() {
    return this.perspectives
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, locationUpdate } = this.props

    var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

    var mainUrl =
      pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/karriere'

    var menuItems = [
      {
        text: 'FACHBERATER',
        type: 'header',
      },
      {
        text: '> Absolvent & Young Professional',
        path: '/karriere/fachlicher-absolvent/',
        perspective: 'fachlicher-absolvent',
        type: 'link',
      },
      {
        text: '> Professional',
        path: '/karriere/fachlicher-professional/',
        perspective: 'fachlicher-professional',
        type: 'link',
      },
      {
        type: 'space',
      },
      {
        text: 'TECHNOLOGISCHER BERATER',
        type: 'header',
      },
      {
        text: '> Absolvent & Young Professional',
        path: '/karriere/technologischer-absolvent/',
        perspective: 'technologischer-absolvent',
        type: 'link',
      },
      {
        text: '> Professional',
        path: '/karriere/technologischer-professional/',
        perspective: 'technologischer-professional',
        type: 'link',
      },
      {
        type: 'space',
      },
      {
        text: 'STUDENTEN',
        path: '/karriere/studenten/',
        perspective: 'studenten',
        type: 'link',
      },
      {
        type: 'space',
      },
      {
        text: 'ANDERE EXPERTISE',
        path: '/karriere/andere/',
        perspective: 'andere',
        type: 'link',
      },
    ]

    console.log(location.pathname.slice(1).split('/'))
    console.log('/karriere/andere/' + location.pathname.slice(1).split('/')[2])

    return (
      <div
        className="collapse"
        id="nav-menu-competence"
        hidden={locationUpdate === mainUrl ? true : false}
      >
        <div className="d-block text-white margin-20-bottom">
          <p className="h5 bold-font d-inline">DEINE KOMPETENZ</p>
          <button
            id="close-button-menu-competence"
            type="button"
            className="close d-inline"
            aria-label="Close"
          >
            <img
              className="close-button-img"
              alt="Menü schließen"
              src={pathPrefix + '/svg/icon_close.svg'}
            />
          </button>
        </div>
        <ul className="navbar-nav mr-auto text-dark">
          {menuItems.map((menuItem, i) => {
            if (menuItem.type === 'header') {
              return <li key={'menu-item-' + i}>{menuItem.text}</li>
            } else if (menuItem.type === 'space') {
              return (
                <li key={'menu-item-' + i}>
                  <span className="text-white">/</span>
                </li>
              )
            } else {
              return (
                <li
                  key={'menu-item-' + i}
                  className={
                    StorageHelper.getFromSessionStorage('perspective').match(
                      menuItem.perspective
                    )
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link
                    to={
                      location.pathname.slice(1).split('/').length > 2 &&
                      this.perspectives.indexOf(
                        location.pathname.slice(1).split('/')[1]
                      ) > -1
                        ? menuItem.path +
                          location.pathname.slice(1).split('/')[2]
                        : location.pathname
                    }
                    onClick={() => this.savePerspective(menuItem.perspective)}
                    className="nav-link"
                  >
                    {menuItem.text}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default MenuCompetence
