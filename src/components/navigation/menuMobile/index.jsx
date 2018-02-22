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

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { onClick, location, title, locationUpdate } = this.props

    var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    var items = [
      ['HOME', this.getPathPrefixPerspective() + '/landing', '/.*/landing'],
      ['ÜBER UNS', pathPrefix + '/ueber-uns', '/ueber-uns'],
      [
        'DEINE KARRIERE',
        this.getPathPrefixPerspective() + '/deine-karriere',
        '/.*/deine-karriere',
      ],
      [
        'DEINE ENTWICKLUNG',
        this.getPathPrefixPerspective() + '/deine-entwicklung',
        '/.*/deine-entwicklung',
      ],
      [
        'GEHALT & BENEFITS',
        this.getPathPrefixPerspective() + '/gehalt-beteiligung',
        '/.*/gehalt-beteiligung',
      ],
    ]

    return (
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
    )
  }
}

export default SiteNavi
