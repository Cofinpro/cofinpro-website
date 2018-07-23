import React from 'react'

import LinkButton from '../../components/buttons/LinkButton'

import FourFactsSmallLayout from '../../components/layouts/FourFactsSmallLayout'
import DownloadPreviewTextAndImageLayout from '../../components/layouts/DownloadPreviewTextAndImageLayout'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class Startseite extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const graphQlResult = this.props.data.contentfulBausteinCofinproFakten

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Headline</h1>
              <p className="h4 bold-font d-none d-md-block">
                Wir beraten Deutschlands führende Finanzdienstleister entlang
                der gesamten Wertschöpfungskette. Cofinpro ist ein
                Beratungsunternehmen mit Fokus auf die Finanzindustrie.
              </p>
              <p className="d-block d-md-none">
                Wir beraten Deutschlands führende Finanzdienstleister entlang
                der gesamten Wertschöpfungskette. Cofinpro ist ein
                Beratungsunternehmen mit Fokus auf die Finanzindustrie.
              </p>
              <LinkButton
                styleLink="d-inline d-md-none"
                styleSpan="margin-20-bottom w-100"
                text="BERATUNGSFELDER ÜBERSICHT"
                path="/beratungsfelder"
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top d-none d-md-block">
          <div className="row text-center">
            <div className="col-4">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 59,
                  height: 65,
                }}
                styleClasses="padding-20"
              />
              <p className="h5">Managementberatung</p>
            </div>
            <div className="col-4">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 59,
                  height: 65,
                }}
                styleClasses="padding-20"
              />
              <p className="h5">Fachberatung</p>
            </div>
            <div className="col-4">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 59,
                  height: 65,
                }}
                styleClasses="padding-20"
              />
              <p className="h5">Technologieberatung</p>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="h2">Über uns</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 322,
                  height: 425,
                }}
              />
              <p className="margin-20-top h5 d-none d-md-block">
                Unsere Standorte
              </p>
              <p className="margin-20-top d-block d-md-none">
                Unsere Standorte
              </p>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <FourFactsSmallLayout
                content={{
                  title: graphQlResult.titel,
                  columns: [
                    {
                      fact: graphQlResult.fakt1Text,
                      text: graphQlResult.fakt1Titel,
                      icon: graphQlResult.fakt1Bild,
                    },
                    {
                      fact: graphQlResult.fakt2Text,
                      text: graphQlResult.fakt2Titel,
                      icon: graphQlResult.fakt2Bild,
                    },
                    {
                      fact: graphQlResult.fakt3Text,
                      text: graphQlResult.fakt3Titel,
                      icon: graphQlResult.fakt3Bild,
                    },
                    {
                      fact: graphQlResult.fakt4Text,
                      text: graphQlResult.fakt4Titel,
                      icon: graphQlResult.fakt4Bild,
                    },
                  ],
                }}
              />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <h2>Nachhaltigkeit</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <h5>Ökonomische Verantwortung</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <h5>Ökologische Verantwortung</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <h5>Soziale Verantwortung</h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="h2">Ausgezeichnete Werte</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="row margin-60-top margin-xs-20-top">
            <div className="col-12 col-md-4">
              <div className="row">
                <div className="col-12 margin-20-bottom margin-xs-0-bottom">
                  <h4>AUSZEICHNUNGEN</h4>
                </div>
                <div className="col-6 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 133,
                      height: 88,
                    }}
                  />
                </div>
                <div className="col-6 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 133,
                      height: 88,
                    }}
                  />
                </div>
                <div className="col-6 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 133,
                      height: 88,
                    }}
                  />
                </div>
                <div className="col-6 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 133,
                      height: 88,
                    }}
                  />
                </div>
                <div className="col-6 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 133,
                      height: 88,
                    }}
                  />
                </div>
                <div className="col-6 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 133,
                      height: 88,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 margin-20-bottom margin-xs-60-top margin-xs-0-bottom">
                  <h4>WIR UNTERSTÜTZEN</h4>
                </div>
                <div className="col-12 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 162,
                      height: 64,
                    }}
                  />
                </div>
                <div className="col-12 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 162,
                      height: 64,
                    }}
                  />
                </div>
                <div className="col-12 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 162,
                      height: 64,
                    }}
                  />
                </div>
                <div className="col-12 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 162,
                      height: 64,
                    }}
                  />
                </div>
                <div className="col-12 margin-20-top">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 162,
                      height: 64,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12">
              <h2>Downloads</h2>
            </div>
          </div>
        </div>
        <DownloadPreviewTextAndImageLayout
          style={{ container: 'margin-40-top margin-xs-0-top' }}
        />
      </div>
    )
  }
}

export default Startseite

export const pageQuery = graphql`
  query cofinproQuery {
    contentfulBausteinCofinproFakten {
      id
      name
      untertitel
      titel
      fakt1Titel
      fakt1Text
      fakt1Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      fakt2Titel
      fakt2Text
      fakt2Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      fakt3Titel
      fakt3Text
      fakt3Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
      fakt4Titel
      fakt4Text
      fakt4Bild {
        id
        title
        description
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`
