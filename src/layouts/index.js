import React from 'react'
import { Link, navigateTo } from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import SiteFooter from '../components/SiteFooter'
import ChatBot from '../components/ChatBot'
import emergence from 'emergence.js'

import StorageHelper from '../utils/storageHelper'

import './gatsrap.scss'
import 'animate.css/animate.css'

class Template extends React.Component {
  constructor(props) {
    super(props)

    this.perspectives = [
      'studenten',
      'technologischer-absolvent',
      'technologischer-professional',
      'fachlicher-absolvent',
      'fachlicher-professional',
      'andere',
    ]

    let perspectiveFromUrl

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

    if (
      props.location.pathname.slice(1).split('/').length > 0 &&
      this.perspectives.indexOf(
        props.location.pathname.slice(1).split('/')[urlFragmentPers]
      ) > -1
    ) {
      perspectiveFromUrl = props.location.pathname.slice(1).split('/')[
        urlFragmentPers
      ]
      StorageHelper.saveInSessionStorage(
        'perspective',
        props.location.pathname.slice(1).split('/')[urlFragmentPers]
      )
    } else {
      perspectiveFromUrl = ''
    }

    this.state = {
      perspective: perspectiveFromUrl,
      visible: perspectiveFromUrl.length === 0 ? false : true,
      locationUpdate: props.location.pathname,
    }

    /* Damit wir URL Ändeurngen mitbekommen und diese an die Navigation weitergeben können */
    this.props.history.listen((location, action) => {
      console.log('on route change')
      console.log('location:' + location.pathname)

      var urlFragmentPers = pathPrefix != null && pathPrefix.length > 2 ? 1 : 0

      if (
        location.pathname.slice(1).split('/').length > 0 &&
        this.perspectives.indexOf(
          location.pathname.slice(1).split('/')[urlFragmentPers]
        ) > -1
      ) {
        StorageHelper.saveInSessionStorage(
          'perspective',
          location.pathname.slice(1).split('/')[urlFragmentPers]
        )
      }

      if (
        this.state.locationUpdate !== location.pathname ||
        this.state.perspective !==
          StorageHelper.getFromSessionStorage('perspective')
      ) {
        this.setState({
          perspective: StorageHelper.getFromSessionStorage('perspective'),
          locationUpdate: location.pathname,
        })
      }
    })
  }

  componentDidMount() {
    /*ifif (StorageHelper.getFromSessionStorage('perspective').length <= 0) {
      navigateTo('wahl-der-perspektive');
    } */
  }

  componentDidUpdate() {
    emergence.init()
  }

  handlePerspectiveChange(newPerspective) {
    console.log('newPerspective:' + newPerspective)
  }

  render() {
    const { location, children } = this.props

    const handlePerspectiveChange = handlePerspectiveChange

    return (
      <div>
        <SiteNavi
          locationUpdate={this.state.locationUpdate}
          title={siteMetadata.title}
          {...this.props}
        />{' '}
        <main>
          {children({ ...this.props })}
        </main>
        <SiteFooter
          locationUpdate={this.state.locationUpdate}
          title={siteMetadata.title}
          {...this.props}
        />
      </div>
    )
  }
}

export default Template
