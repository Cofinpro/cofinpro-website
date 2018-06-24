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

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, locationUpdate } = this.props

    var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

    var mainUrl =
      pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/karriere'

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
          <li>FACHBERATER</li>
          <li
            className={
              StorageHelper.getFromSessionStorage('perspective').match(
                'fachlicher-absolvent'
              )
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link
              to={
                location.pathname.slice(1).split('/').length > 0 &&
                this.perspectives.indexOf(
                  location.pathname.slice(1).split('/')[urlFragmentPers]
                ) > -1
                  ? '/karriere' +
                    '/fachlicher-absolvent/' +
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
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link
              to={
                location.pathname.slice(1).split('/').length > 0 &&
                this.perspectives.indexOf(
                  location.pathname.slice(1).split('/')[urlFragmentPers]
                ) > -1
                  ? '/karriere' +
                    '/fachlicher-professional/' +
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
            <span className="text-white">/</span>
          </li>
          <li>TECHNOLOGISCHER BERATER</li>
          <li
            className={
              StorageHelper.getFromSessionStorage('perspective').match(
                'technologischer-absolvent'
              )
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link
              to={
                location.pathname.slice(1).split('/').length > 0 &&
                this.perspectives.indexOf(
                  location.pathname.slice(1).split('/')[urlFragmentPers]
                ) > -1
                  ? '/karriere' +
                    '/technologischer-absolvent/' +
                    location.pathname.slice(1).split('/')[urlFragmentPers + 1]
                  : location.pathname
              }
              onClick={() => this.savePerspective('technologischer-absolvent')}
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
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link
              to={
                location.pathname.slice(1).split('/').length > 0 &&
                this.perspectives.indexOf(
                  location.pathname.slice(1).split('/')[urlFragmentPers]
                ) > -1
                  ? '/karriere' +
                    '/technologischer-professional/' +
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
            <span className="text-white">/</span>
          </li>
          <li
            className={
              StorageHelper.getFromSessionStorage('perspective').match(
                'studenten'
              )
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link
              to={
                location.pathname.slice(1).split('/').length > 0 &&
                this.perspectives.indexOf(
                  location.pathname.slice(1).split('/')[urlFragmentPers]
                ) > -1
                  ? '/karriere' +
                    '/studenten/' +
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
            <span className="text-white">/</span>
          </li>
          <li
            className={
              StorageHelper.getFromSessionStorage('perspective').match('andere')
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <Link
              to={
                location.pathname.slice(1).split('/').length > 0 &&
                this.perspectives.indexOf(
                  location.pathname.slice(1).split('/')[urlFragmentPers]
                ) > -1
                  ? '/karriere' +
                    '/andere/' +
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
    )
  }
}

export default MenuCompetence
