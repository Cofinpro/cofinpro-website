import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

class SiteFooter extends React.Component {
  render() {
    const data = this.props.data

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { location, title, locationUpdate } = this.props

    var mainUrl = pathPrefix != null && pathPrefix.length > 2 ? pathPrefix : '/'

    function scrollToTop() {
      $('html,body').animate({ scrollTop: 0 }, 'slow')
    }

    function scrollToTop(e) {
      e.preventDefault()
      $('html,body').animate({ scrollTop: 0 }, 'slow')
    }

    if (locationUpdate === mainUrl) {
      return (
        <footer>
          <div className="container margin-20-top main">
            <div className="row">
              <div className="col-12 text-center">
                <Link to={pathPrefix + '/impressum'} className="text-dark">
                  IMPRESSUM
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )
    } else {
      return (
        <footer className="footer bg-brown text-white padding-md-top-bottom margin-120-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 align-self-end padding-sm-top-bottom">
                <p className="text-center text-md-left text-address">
                  COFINPRO AG
                  <br />
                  Untermainkai 27-28
                  <br />
                  60329 Frankfurt am Main
                  <br />
                  Tel: +49 (0) 69-2 99 20 87 60
                  <br />
                  E-Mail:{' '}
                  <a className="text-white" href="mailto:welcome@cofinpro.de">
                    welcome@cofinpro.de
                  </a>
                </p>
              </div>

              <div className="col-12 col-md-2 align-self-end padding-sm-top-bottom">
                <div className="text-center scroll-up-box">
                  <a
                    id="back-to-top"
                    className="d-block"
                    href="#"
                    onClick={scrollToTop}
                  >
                    <img
                      alt="Button zum nach oben scrollen"
                      src={pathPrefix + '/svg/icon_arrow_dotted_up.svg'}
                    />
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-5 align-self-end padding-sm-top-bottom">
                <div className="row">
                  <div className="col text-md-right right text-center">
                    <a
                      title="facebook"
                      target="_blank"
                      href="https://www.facebook.com/Cofinpro"
                      className="text-light"
                    >
                      <img
                        src={pathPrefix + '/img/icons/facebook_white.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      title="instagram"
                      target="_blank"
                      href="http://instagram.com/cofinpro_ag"
                      className="text-light"
                    >
                      <img
                        src={pathPrefix + '/img/icons/instagram_white.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      title="twitter"
                      target="_blank"
                      href="https://twitter.com/cofinpro_ag"
                      className="text-light"
                    >
                      <img
                        src={pathPrefix + '/img/icons/twitter_white.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      title="youtube"
                      target="_blank"
                      href="https://www.youtube.com/channel/UC7sM2sP8l2E60A4rZrA6ZTQ"
                      className="text-light"
                    >
                      <img
                        src={pathPrefix + '/img/icons/youtube_white.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      title="linkedin"
                      target="_blank"
                      href="https://www.linkedin.com/company/846504/"
                      className="text-light"
                    >
                      <img
                        src={pathPrefix + '/img/icons/linkedin_white.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      title="xing"
                      target="_blank"
                      href="https://www.xing.com/companies/cofinproag"
                      className="text-light"
                    >
                      <img
                        src={pathPrefix + '/img/icons/xing_white.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                  </div>
                </div>

                <div className="row padding-footer-links footer-pages-nav">
                  <div className="col">
                    <ul
                      id="nav-footer"
                      className="nav justify-content-center justify-content-md-end text-center text-md-right"
                    >
                      <li
                        className={
                          location.pathname.indexOf('/pinnwand') !== -1
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link
                          to={pathPrefix + '/pinnwand'}
                          className="nav-link text-white"
                        >
                          PINNWAND
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/kontakt'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link
                          to={pathPrefix + '/kontakt'}
                          className="nav-link text-white"
                        >
                          KONTAKT
                        </Link>
                      </li>
                      <li
                        className={
                          location.pathname === '/datenschutz'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <a
                          href="https://cofinpro.de/datenschutz/"
                          target="_blank"
                          className="nav-link text-white"
                        >
                          DATENSCHUTZ
                        </a>
                      </li>
                      <li
                        className={
                          location.pathname === '/agb'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <a
                          href="https://cofinpro.de/agb/"
                          target="_blank"
                          className="nav-link text-white"
                        >
                          AGB
                        </a>
                      </li>
                      <li
                        className={
                          location.pathname === '/impressum'
                            ? 'nav-item active'
                            : 'nav-item'
                        }
                      >
                        <Link
                          to={pathPrefix + '/impressum'}
                          className="nav-link text-white"
                        >
                          IMPRESSUM
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )
    }
  }
}

export default SiteFooter
