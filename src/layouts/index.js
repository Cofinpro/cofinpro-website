import React from 'react'
import { siteMetadata } from '../../gatsby-config'

import ChatBot from '../components/ChatBot'
import emergence from 'emergence.js'
import CookieBanner from 'react-cookie-banner'

import StorageHelper from '../utils/storageHelper'

import './gatsrap.scss'
import 'animate.css/animate.css'

import MainNavigation from '../components/navigation/MainNavigation'
import NavigationCareer from '../components/navigation/NavigationCareer'
import SiteFooter from '../components/SiteFooter'

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

    const styles = {
      banner: {
        fontFamily: 'Source Sans Pro',
        height: 57,
        background:
          'rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 50% no-repeat',
        backgroundSize: '30px 30px',
        backgroundColor: '',
        fontSize: '15px',
        fontWeight: 600,
      },
      button: {
        border: '1px solid white',
        borderRadius: 4,
        height: 32,
        lineHeight: '32px',
        background: 'transparent',
        color: 'white',
        fontSize: '14px',
        fontWeight: 600,
        opacity: 1,
        right: 20,
        marginTop: -18,
      },
      message: {
        display: 'block',
        padding: '9px 67px',
        lineHeight: 1.3,
        textAlign: 'left',
        marginRight: 244,
        color: 'white',
      },
      link: {
        textDecoration: 'none',
        fontWeight: 'bold',
      },
    }

    const message = (
      <span>
        Cofinpro.de benutzt Cookies, um seinen Besuchern das beste Webseiten -
        Erlebnis zu ermöglichen. <br /> Weiterführende Informationen erhalten
        Sie in der{' '}
        <a href="https://cofinpro.de/datenschutz/"> Datenschutzerklärung </a>{' '}
      </span>
    )

    return (
      <div>
        <header>
          <MainNavigation
            location={location}
            locationUpdate={this.state.locationUpdate}
            {...this.props}
          />{' '}
          <NavigationCareer
            locationUpdate={this.state.locationUpdate}
            {...this.props}
          />{' '}
        </header>{' '}
        <main>
          {' '}
          {children({
            ...this.props,
          })}{' '}
        </main>{' '}
        <SiteFooter
          locationUpdate={this.state.locationUpdate}
          title={siteMetadata.title}
          {...this.props}
        />{' '}
        <ChatBot locationUpdate={this.state.locationUpdate} {...this.props} />{' '}
        {/*<CookieBanner
                  className="cofinpro-cookie-banner"
                  styles={styles}
                  message={message}
                  buttonMessage="Ich habe verstanden!"
                  dismissOnScroll={false}
                  cookie="cofinpro-user-has-accepted-cookies"
                />*/}{' '}
      </div>
    )
  }
}

export default Template
