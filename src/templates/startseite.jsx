import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import ContentfulImage from '../components/ContentfulImage'
import HtmlHeader from '../components/HtmlHeader'

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
    $('#navbarToggleExternalContent').collapse({ toggle: false })

    $('#button-startseite-collapse').click(function() {
      if ($('#button-startseite-collapse>i').hasClass('fa')) {
        $('#navbarToggleExternalContent').collapse('toggle')

        $('#button-startseite-collapse>i').toggleClass('fa-chevron-down')
        $('#button-startseite-collapse>i').toggleClass('fa-chevron-up')
      }

      if ($('#button-startseite-collapse>i').hasClass('material-icons')) {
        $('#navbarToggleExternalContent').collapse('toggle')

        $('#button-startseite-collapse>i').text(function(i, old) {
          return old == 'keyboard_arrow_down'
            ? 'keyboard_arrow_up'
            : 'keyboard_arrow_down'
        })
      }
    })
  }

  render() {
    const graphQlResult = this.props.data.contentfulWahlDerKompetenz

    const site = get(this, 'props.data.site.siteMetadata')

    const { onClick, location } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <HtmlHeader dataFromCms={graphQlResult.metaData} {...this.props} />

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
                      <h2 className="subtitle-welcome h4 padding-sm-top d-none d-md-block">
                        {graphQlResult.untertitelDerSeite.untertitelDerSeite}
                      </h2>
                      <p className="h2 text-white padding-sm-top d-none d-md-block">
                        KOMPETENZEN
                      </p>

                      <h2 className="h4 subtitle-welcome padding-sm-top d-block d-md-none">
                        {graphQlResult.untertitelDerSeite.untertitelDerSeite}
                      </h2>
                      <p className="h4 text-white padding-sm-top d-block d-md-none">
                        KOMPETENZEN
                      </p>
                    </div>
                  </div>

                  <div className="row text-center">
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <ContentfulImage
                        imageFile={graphQlResult.bildFuerPerspektiveFach}
                        styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                      />
                      <h3 className="h6 link-black">FACHBERATER</h3>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <ContentfulImage
                        imageFile={graphQlResult.bildFuerPerspektiveTech}
                        styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                      />
                      <h3 className="h6 link-black">TECHNOLOGISCHER BERATER</h3>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <ContentfulImage
                        imageFile={graphQlResult.bildFuerPerspektiveStudent}
                        styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                      />
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
                        <h3 className="h6 link-black">> STUDENT</h3>
                      </Link>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <ContentfulImage
                        imageFile={graphQlResult.bildFuerPerspektiveAndere}
                        styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                      />
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
                        <h3 className="h6 link-black">> ANDERE EXPERTISE</h3>
                      </Link>
                    </div>
                  </div>

                  <div className="row text-center">
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <Link
                        className="text-dark"
                        to={pathPrefix + '/fachlicher-absolvent/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'fachlicher-absolvent'
                          )
                        }}
                      >
                        <h3 className="h6 link-black">
                          > Absolvent & Young Professional
                        </h3>
                      </Link>
                      <Link
                        className="text-dark"
                        to={pathPrefix + '/fachlicher-professional/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'fachlicher-professional'
                          )
                        }}
                      >
                        <h3 className="h6 link-black">> Professional</h3>
                      </Link>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <Link
                        className="text-dark"
                        to={pathPrefix + '/technologischer-absolvent/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'technologischer-absolvent'
                          )
                        }}
                      >
                        <h3 className="h6 link-black">
                          > Absolvent & Young Professional
                        </h3>
                      </Link>
                      <Link
                        className="text-dark"
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
                        <h3 className="h6 link-black">> Professional</h3>
                      </Link>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block" />
                    <div className="col-12 col-md-3 d-none d-md-block" />
                  </div>

                  <div className="row d-block d-md-none">
                    <div className="col-12">
                      <p className="h4">FACH-BERATER</p>
                      <p>
                        <Link
                          to={pathPrefix + '/fachlicher-absolvent/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'fachlicher-absolvent'
                            )
                          }}
                        >
                          <span className="h5">
                            > Absolvent & Young Professional
                          </span>
                        </Link>
                      </p>
                      <p>
                        <Link
                          to={pathPrefix + '/fachlicher-professional/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'fachlicher-professional'
                            )
                          }}
                        >
                          <span className="h5">> Professional</span>
                        </Link>
                      </p>
                      <p className="text-secondary h3">/</p>
                      <p className="h4">TECHNOLOGIE-BERATER</p>
                      <p>
                        <Link
                          to={pathPrefix + '/technologischer-absolvent/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'technologischer-absolvent'
                            )
                          }}
                        >
                          <span className="h5">
                            > Absolvent & Young Professional
                          </span>
                        </Link>
                      </p>
                      <p>
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
                          <span className="h5">> Professional</span>
                        </Link>
                      </p>
                      <p className="text-secondary h3">/</p>
                      <p>
                        <Link
                          to={pathPrefix + '/studenten/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'studenten'
                            )
                          }}
                        >
                          <span className="h4">STUDENTEN</span>
                        </Link>
                      </p>
                      <p className="text-secondary h3">/</p>
                      <p>
                        <Link
                          to={pathPrefix + '/andere/landing'}
                          onClick={() => {
                            StorageHelper.saveInSessionStorage(
                              'perspective',
                              'andere'
                            )
                          }}
                        >
                          <span className="h4">ANDERE EXPERTISEN</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row padding-lg-top-bottom">
            <div className="col-12">
              <div className="collapse" id="navbarToggleExternalContent">
                <p>{graphQlResult.seoTextFeld.seoTextFeld}</p>
              </div>
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
                <i
                  className="fa fa-chevron-down text-primary"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StartseiteTemplate

export const pageQuery = graphql`
  query wahlDerKompetenzQuery($id: String!) {
    contentfulWahlDerKompetenz(id: { eq: $id }) {
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
  }
`
