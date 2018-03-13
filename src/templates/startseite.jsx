import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import ContentfulImage from '../components/ContentfulImage'
import HtmlHeader from '../components/HtmlHeader'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'

import StorageHelper from '../utils/storageHelper'

class StartseiteTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  componentDidMount() {
    $('#links-tech').hide()
    $('#links-fach').hide()

    $('#desktop-links-tech').hide()
    $('#desktop-links-fach').hide()

    $('#desktop-wahl-fach').click(function() {
      $('#desktop-links-tech').hide()
      $('#desktop-links-fach').fadeIn(500)

      $('html, body').animate(
        {
          scrollTop: $('#desktop-links-fach').offset().top - 300,
        },
        600
      )
    })

    $('#desktop-wahl-tech').click(function() {
      $('#desktop-links-fach').hide()
      $('#desktop-links-tech').fadeIn(500)

      $('html, body').animate(
        {
          scrollTop: $('#desktop-links-tech').offset().top - 300,
        },
        600
      )
    })

    $('#img-wahl-tech').click(function() {
      $('#links-fach').hide()
      $('#links-tech').fadeIn(500)

      $('html, body').animate(
        {
          scrollTop: $('#links-tech').offset().top - 200,
        },
        600
      )
    })

    $('#img-wahl-fach').click(function() {
      $('#links-tech').hide()
      $('#links-fach').fadeIn(500)

      $('html, body').animate(
        {
          scrollTop: $('#links-fach').offset().top - 200,
        },
        600
      )
    })

    $('#navbarToggleExternalContent').collapse({ toggle: false })

    $('#button-startseite-collapse').click(function() {
      $('#navbarToggleExternalContent').collapse('toggle')

      if (
        $('#button-startseite-collapse>img.collapse-icon-down').hasClass(
          'd-none'
        )
      ) {
        $('#button-startseite-collapse>img.collapse-icon-up').addClass('d-none')
        $('#button-startseite-collapse>img.collapse-icon-down').removeClass(
          'd-none'
        )
      } else if (
        $('#button-startseite-collapse>img.collapse-icon-up').hasClass('d-none')
      ) {
        $('#button-startseite-collapse>img.collapse-icon-down').addClass(
          'd-none'
        )
        $('#button-startseite-collapse>img.collapse-icon-up').removeClass(
          'd-none'
        )
      }
    })

    if (typeof localStorage !== 'undefined') {
      if (
        StorageHelper.getFromSessionStorage('introPlayed') === undefined ||
        StorageHelper.getFromSessionStorage('introPlayed').length === 0
      ) {
        const pathPrefix =
          process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

        const script2 = document.createElement('script')

        script2.src = pathPrefix + '/js/introHeader.js'
        script2.async = false

        document.body.appendChild(script2)

        const script = document.createElement('script')

        script.src = pathPrefix + '/js/intro.js'
        script.async = false

        document.body.appendChild(script)

        StorageHelper.saveInSessionStorage('introPlayed', 'true')
      } else {
        $('#lottie').hide()
      }
    }
    //$('#lottie').hide()
  }

  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const graphQlResult = this.props.data.contentfulSeiteStartseiteKarriere

    const site = get(this, 'props.data.site.siteMetadata')

    const { onClick, location } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <Helmet
          title={graphQlResult.metaData.title}
          link={[
            {
              rel: 'canonical',
              href: this.getCurrentUrl(),
            },
          ]}
          meta={[
            {
              property: 'og:title',
              content: `${graphQlResult.metaData.title}`,
            },
            {
              property: 'Keywords',
              content: `${graphQlResult.metaData.keywords.keywords}`,
            },
            {
              property: 'Description',
              content: `${graphQlResult.metaData.description.description}`,
            },
            {
              property: 'og:description',
              content: `${graphQlResult.metaData.description.description}`,
            },
          ]}
        />

        <div id="lottie" className="d-none d-md-block" />

        <div className="container margin-lg-top-bottom">
          <div className="row padding-sm-bottom">
            <div className="col-12">
              <h1 className="h2">{graphQlResult.titelDerSeite}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="perspective-box">
                <div className="">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="h4 normal-font subtitle-welcome padding-sm-top d-none d-md-block">
                        {graphQlResult.untertitelDerSeite.untertitelDerSeite}
                      </h2>
                      <h2 className="h4 normal-font subtitle-welcome padding-sm-top d-block d-md-none">
                        {graphQlResult.untertitelDerSeite.untertitelDerSeite}
                      </h2>
                    </div>
                  </div>

                  <div className="row text-center">
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <div id="desktop-wahl-fach">
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveFach}
                          styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black link-style">
                          FACHBERATER
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <div id="desktop-wahl-tech">
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveTech}
                          styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black link-style">
                          TECHNOLOGISCHER BERATER
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <Link
                        className="text-dark"
                        to={pathPrefix + '/studenten/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'studenten'
                          )
                        }}
                      >
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveStudent}
                          styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black">STUDENT</h3>
                      </Link>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <Link
                        className="text-dark"
                        to={pathPrefix + '/andere/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'andere'
                          )
                        }}
                      >
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveAndere}
                          styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black">ANDERE EXPERTISE</h3>
                      </Link>
                    </div>
                  </div>

                  <div className="row text-center margin-10-top">
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <div id="desktop-links-fach">
                        <Link
                          className=""
                          to={pathPrefix + '/fachlicher-absolvent/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'fachlicher-absolvent'
                            )
                          }}
                        >
                          <h3 className="h5">
                            > Absolvent & Young Professional
                          </h3>
                        </Link>
                        <p> oder </p>
                        <Link
                          className=""
                          to={pathPrefix + '/fachlicher-professional/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'fachlicher-professional'
                            )
                          }}
                        >
                          <h3 className="h5">> Professional</h3>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <div id="desktop-links-tech">
                        <Link
                          className=""
                          to={pathPrefix + '/technologischer-absolvent/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'technologischer-absolvent'
                            )
                          }}
                        >
                          <h3 className="h5">
                            > Absolvent & Young Professional
                          </h3>
                        </Link>
                        <p> oder </p>
                        <Link
                          className=""
                          to={
                            pathPrefix + '/technologischer-professional/landing'
                          }
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'technologischer-professional'
                            )
                          }}
                        >
                          <h3 className="h5">> Professional</h3>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block" />
                    <div className="col-12 col-md-3 d-none d-md-block" />
                  </div>

                  <div className="row d-flex-inline d-md-none margin-20-bottom">
                    <div className="col-6 text-center">
                      <div id="img-wahl-fach">
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveFach}
                          styleClasses="img-fluid img-consultant margin-20-bottom"
                        />
                        <h3 className="h5 link-black">FACH-BERATER</h3>
                      </div>
                      <div id="links-fach">
                        <Link
                          to={pathPrefix + '/fachlicher-absolvent/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'fachlicher-absolvent'
                            )
                          }}
                        >
                          <h3 className="h5 link-black">
                            > Absolvent & Young Professional
                          </h3>
                        </Link>
                        <Link
                          to={pathPrefix + '/fachlicher-professional/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'fachlicher-professional'
                            )
                          }}
                        >
                          <h3 className="h5 link-black">> Professional</h3>
                        </Link>
                      </div>
                    </div>
                    <div className="col-6 text-center">
                      <div id="img-wahl-tech">
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveTech}
                          styleClasses="img-fluid img-consultant margin-20-bottom"
                        />
                        <h3 className="h5 link-black">TECHNOLOGIE-BERATER</h3>
                      </div>
                      <div id="links-tech">
                        <Link
                          to={pathPrefix + '/technologischer-absolvent/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'technologischer-absolvent'
                            )
                          }}
                        >
                          <h3 className="h5 link-black">
                            > Absolvent & Young Professional
                          </h3>
                        </Link>
                        <Link
                          to={
                            pathPrefix + '/technologischer-professional/landing'
                          }
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'technologischer-professional'
                            )
                          }}
                        >
                          <h3 className="h5 link-black">> Professional</h3>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="row d-flex-inline d-md-none">
                    <div className="col-6 text-center">
                      <Link
                        className="text-dark"
                        to={pathPrefix + '/studenten/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'studenten'
                          )
                        }}
                      >
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveStudent}
                          styleClasses="img-fluid img-consultant margin-20-bottom img-wahl-student"
                        />
                        <h3 className="h5">STUDENT</h3>
                      </Link>
                    </div>
                    <div className="col-6 text-center">
                      <Link
                        className="text-dark"
                        to={pathPrefix + '/andere/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'andere'
                          )
                        }}
                      >
                        <ContentfulImage
                          imageFile={graphQlResult.bildFuerPerspektiveAndere}
                          styleClasses="img-fluid img-consultant margin-20-bottom img-wahl-andere"
                        />
                        <h3 className="h5">ANDERE EXPERTISE</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row padding-lg-top-bottom">
            <div className="col-12">
              <button
                id="button-startseite-collapse"
                className="btn btn-light text-white"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  className="collapse-icon-down"
                  alt="Mehr Jobs zeigen"
                  src={pathPrefix + '/svg/icon_arrow_dotted_down_orange.svg'}
                />
                <img
                  className="d-none collapse-icon-up"
                  alt="Weniger Jobs zeigen"
                  src={pathPrefix + '/svg/icon_arrow_dotted_up_orange.svg'}
                />
              </button>
              <div
                className="collapse margin-20-top two-column-text"
                id="navbarToggleExternalContent"
              >
                <ContentfulMarkdownText
                  text={graphQlResult.seoTextFeld.seoTextFeld}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartseiteTemplate

export const pageQuery = graphql`
  query seiteStartseiteKarriereQuery($id: String!) {
    contentfulSeiteStartseiteKarriere(id: { eq: $id }) {
      id
      metaData {
        id
        title
        keywords {
          keywords
        }
        description {
          description
        }
      }
      titelDerSeite
      untertitelDerSeite {
        untertitelDerSeite
      }
      bildFuerPerspektiveFach {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildFachProfessionalSmartphone {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildFachAbsolventSmartphone {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildFuerPerspektiveTech {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildTechnologieProfessionalSmartphone {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildTechnologieAbsolventSmartphone {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildFuerPerspektiveStudent {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      bildFuerPerspektiveAndere {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      seoTextFeld {
        seoTextFeld
      }
    }
  }
`
