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
                      <h3 className="h5 link-black">FACHBERATER</h3>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block">
                      <ContentfulImage
                        imageFile={graphQlResult.bildFuerPerspektiveTech}
                        styleClasses="img-fluid img-consultant padding-sm-top-bottom"
                      />
                      <h3 className="h5 link-black">TECHNOLOGISCHER BERATER</h3>
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
                        <h3 className="h5 link-black">> STUDENT</h3>
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
                        <h3 className="h5 link-black">> ANDERE EXPERTISE</h3>
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
                        <h3 className="h5 link-black">
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
                        <h3 className="h5 link-black">> Professional</h3>
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
                        <h3 className="h5 link-black">
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
                        <h3 className="h5 link-black">> Professional</h3>
                      </Link>
                    </div>
                    <div className="col-12 col-md-3 d-none d-md-block" />
                    <div className="col-12 col-md-3 d-none d-md-block" />
                  </div>

                  <div className="row d-block d-md-none">
                    <div className="col-12">
                      <p className="h4">FACH-BERATER</p>
                    </div>
                  </div>

                  <div className="row d-md-none">
                    <div className="col-6 text-center">
                      <Link
                        to={pathPrefix + '/fachlicher-professional/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'fachlicher-professional'
                          )
                        }}
                      >
                        <ContentfulImage
                          imageFile={
                            graphQlResult.bildFachProfessionalSmartphone
                          }
                          styleClasses="img-fluid img-consultant"
                        />
                      </Link>
                    </div>
                    <div className="col-6 text-center">
                      <div className="d-block margin-60-top">
                        <p className="filler" />
                      </div>
                      <Link
                        to={pathPrefix + '/fachlicher-absolvent/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'fachlicher-absolvent'
                          )
                        }}
                      >
                        <ContentfulImage
                          imageFile={graphQlResult.bildFachAbsolventSmartphone}
                          styleClasses="img-fluid img-consultant"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="row d-block d-md-none margin-40-top">
                    <div className="col-12">
                      <p className="h4">TECHNOLOGIE-BERATER</p>
                    </div>
                  </div>

                  <div className="row d-md-none">
                    <div className="col-6 text-center">
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
                        <ContentfulImage
                          imageFile={
                            graphQlResult.bildTechnologieProfessionalSmartphone
                          }
                          styleClasses="img-fluid img-consultant"
                        />
                      </Link>
                    </div>
                    <div className="col-6 text-center">
                      <div className="d-block margin-60-top">
                        <p className="filler" />
                      </div>
                      <Link
                        to={pathPrefix + '/technologischer-absolvent/landing'}
                        onClick={() => {
                          StorageHelper.saveInSessionStorage(
                            'perspective',
                            'technologischer-absolvent'
                          )
                        }}
                      >
                        <ContentfulImage
                          imageFile={
                            graphQlResult.bildTechnologieAbsolventSmartphone
                          }
                          styleClasses="img-fluid img-consultant"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="row d-md-none margin-40-top">
                    <div className="col-6">
                      <p className="h4">STUDENT</p>
                      <Link
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
                          styleClasses="img-fluid img-consultant"
                        />
                      </Link>
                    </div>
                    <div className="col-6">
                      <div className="d-block margin-60-top">
                        <p className="filler" />
                      </div>
                      <p className="h4">ANDERE EXPERTISE</p>
                      <Link
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
                          styleClasses="img-fluid img-consultant"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row padding-lg-top-bottom">
            <div className="col-12">
              <div className="collapse" id="navbarToggleExternalContent">
                <ContentfulMarkdownText
                  text={graphQlResult.seoTextFeld.seoTextFeld}
                />
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
/* 

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


*/
