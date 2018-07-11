import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'
import ToggleButton from '../../components/buttons/ToggleButton'

import StorageHelper from '../../utils/storageHelper'

import './style.scss'

class StartseiteTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        $('#lottie').empty()
        $('#intro').remove()
        $('#introHeader').remove()
        resolve('resolved')
      }, 4000)
    })
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

    if (typeof localStorage !== 'undefined') {
      if (
        StorageHelper.getFromSessionStorage('introPlayed') === undefined ||
        StorageHelper.getFromSessionStorage('introPlayed').length === 0
      ) {
        const script2 = document.createElement('script')

        var rnd = Math.floor(Math.random() * 80000)

        script2.id = 'introHeader'
        script2.src = '/js/introHeader.js?r=' + rnd
        script2.async = false

        document.body.appendChild(script2)

        const script = document.createElement('script')

        script.id = 'intro'
        script.src = '/js/intro.js?r=' + rnd
        script.async = false

        document.body.appendChild(script)

        StorageHelper.saveInSessionStorage('introPlayed', 'true')

        this.resolveAfter2Seconds()
      } else {
        $('#lottie').empty()
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

        <div id="lottie" />

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
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveFachSharp.sizes
                          }
                          className="img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black link-style padding-sm-top-bottom">
                          FACHBERATER
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <div id="desktop-wahl-tech">
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveTechSharp.sizes
                          }
                          className="img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black link-style padding-sm-top-bottom">
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
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveStudentSharp
                              .sizes
                          }
                          className="img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black padding-sm-top-bottom">
                          STUDENT
                        </h3>
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
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveAndereSharp.sizes
                          }
                          className="img-consultant padding-sm-top-bottom"
                        />
                        <h3 className="h5 link-black padding-sm-top-bottom">
                          ANDERE EXPERTISE
                        </h3>
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
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveFachSharp.sizes
                          }
                          className="img-consultant margin-20-bottom"
                        />
                        <h3 className="h5 link-black">FACHBERATER</h3>
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
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveTechSharp.sizes
                          }
                          className="img-consultant margin-20-bottom"
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
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveStudentSharp
                              .sizes
                          }
                          className="img-consultant margin-20-bottom img-wahl-student"
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
                        <Img
                          sizes={
                            this.props.data.bildFuerPerspektiveAndereSharp.sizes
                          }
                          className="img-consultant margin-20-bottom img-wahl-andere"
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
              <ToggleButton
                id="startseite"
                dataTarget="collapse-startseite-seo"
              />
              <div
                className="collapse margin-20-top two-column-text"
                id="collapse-startseite-seo"
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
  query seiteStartseiteKarriereQuery(
    $id: String!
    $bildFuerPerspektiveFachId: String!
    $bildFuerPerspektiveTechId: String!
    $bildFuerPerspektiveStudentId: String!
    $bildFuerPerspektiveAndereId: String!
  ) {
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
    bildFuerPerspektiveFachSharp: imageSharp(
      id: { regex: $bildFuerPerspektiveFachId }
    ) {
      sizes(maxWidth: 1600, quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    bildFuerPerspektiveTechSharp: imageSharp(
      id: { regex: $bildFuerPerspektiveTechId }
    ) {
      sizes(maxWidth: 1600, quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    bildFuerPerspektiveStudentSharp: imageSharp(
      id: { regex: $bildFuerPerspektiveStudentId }
    ) {
      sizes(maxWidth: 1600, quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
    bildFuerPerspektiveAndereSharp: imageSharp(
      id: { regex: $bildFuerPerspektiveAndereId }
    ) {
      sizes(maxWidth: 1600, quality: 80) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
