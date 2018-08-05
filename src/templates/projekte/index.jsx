import React from 'react'
import Link from 'gatsby-link'

import RelevanteFokusthemen from '../../components/RelevanteFokusthemen'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class ProjekteUebersicht extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var bigSmallSwitch = false

    var id = this.props.pathContext.id
    var title = this.props.pathContext.title
    var description = this.props.pathContext.description
    var projects = this.props.pathContext.projects

    var backgroundImages = []

    backgroundImages.push(this.props.data.architektur1ImageSharp)
    backgroundImages.push(this.props.data.architektur2ImageSharp)

    backgroundImages.push(this.props.data.licht46ImageSharp)
    backgroundImages.push(this.props.data.licht2ImageSharp)

    backgroundImages.push(this.props.data.architektur4ImageSharp)
    backgroundImages.push(this.props.data.architektur6ImageSharp)

    backgroundImages.push(this.props.data.licht31ImageSharp)
    backgroundImages.push(this.props.data.licht22ImageSharp)

    backgroundImages.push(this.props.data.architektur7ImageSharp)
    backgroundImages.push(this.props.data.architektur9ImageSharp)

    backgroundImages.push(this.props.data.licht3ImageSharp)
    backgroundImages.push(this.props.data.licht4ImageSharp)

    backgroundImages.push(this.props.data.architektur10ImageSharp)
    backgroundImages.push(this.props.data.architektur11ImageSharp)

    backgroundImages.push(this.props.data.licht41ImageSharp)
    backgroundImages.push(this.props.data.licht42ImageSharp)

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="h1">{title}</h1>
              <p className="h4 bold-font d-none d-md-block">{description}</p>
              <p className="d-block d-md-none">{description}</p>
            </div>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-4">
              <RelevanteFokusthemen />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-60-top">
          {projects.map(function(item, i) {
            if (i % 2 === 0) {
              var firstColumnWidth
              var secondColumnWidth
              var rowAlignment
              var backgroundColorLeft
              var backgroundColorRight

              if (bigSmallSwitch) {
                secondColumnWidth = 'col-md-12'
                firstColumnWidth = 'col-md-8'
                rowAlignment = 'align-items-end margin-xs-0-top'
                if (projects.length !== i + 1) {
                  rowAlignment +=
                    ' negative-margin-80-top negative-margin-md-40-top'
                } else {
                  rowAlignment += ' margin-40-top'
                }
                backgroundColorLeft = '--pink'
                backgroundColorRight = '--brown'

                bigSmallSwitch = false
              } else {
                firstColumnWidth = 'col-md-12'
                secondColumnWidth = 'col-md-8'
                rowAlignment = 'align-items-start margin-40-top margin-xs-0-top'
                backgroundColorLeft = '--brown'
                backgroundColorRight = '--pink'
                bigSmallSwitch = true
              }

              return (
                <div key={i} className={'row ' + rowAlignment}>
                  <div className="col-12 col-md-6">
                    <div className="row margin-xs-20-top justify-content-center">
                      <div className={'col-12 ' + firstColumnWidth}>
                        <Link
                          className="d-block text-dark"
                          to={
                            '/projekte/' +
                            item.kategorieInDerDasProjektFllt.toLowerCase() +
                            '/' +
                            item.urlDerSeite
                          }
                        >
                          <ImageWrapper
                            sourceType={SOURCE_TYP_SHARP}
                            source={backgroundImages[i]}
                            backgroundOverlay={
                              <div
                                className={
                                  'image-overlay-background image-overlay-background' +
                                  backgroundColorLeft
                                }
                              />
                            }
                            overlayElement={
                              <div>
                                <ContentfulMarkdownText
                                  text={'### ' + item.ueberschrift}
                                  styleClasses="h4"
                                />
                                <ContentfulMarkdownText
                                  text={' ' + item.unterueberschrift}
                                  styleClasses="h5 text-md-normal"
                                />
                              </div>
                            }
                            showOverlay={true}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {projects.length !== i + 1 && (
                    <div className="col-12 col-md-6">
                      <div className="row margin-xs-20-top justify-content-center">
                        <div className={'col-12 ' + secondColumnWidth}>
                          <Link
                            className="d-block text-dark"
                            to={
                              '/projekte/' +
                              item.kategorieInDerDasProjektFllt.toLowerCase() +
                              '/' +
                              item.urlDerSeite
                            }
                          >
                            <ImageWrapper
                              sourceType={SOURCE_TYP_SHARP}
                              source={backgroundImages[i + 1]}
                              backgroundOverlay={
                                <div
                                  className={
                                    'image-overlay-background image-overlay-background' +
                                    backgroundColorRight
                                  }
                                />
                              }
                              overlayElement={
                                <div>
                                  <ContentfulMarkdownText
                                    text={'### ' + projects[i + 1].ueberschrift}
                                    styleClasses="h4"
                                  />
                                  <ContentfulMarkdownText
                                    text={
                                      ' ' + projects[i + 1].unterueberschrift
                                    }
                                    styleClasses="h5 text-md-normal"
                                  />
                                </div>
                              }
                              showOverlay={true}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    )
  }
}

export default ProjekteUebersicht

export const pageQuery = graphql`
  query projekteQuery {
    architektur1ImageSharp: imageSharp(id: { regex: "/stock_architektur_1/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    architektur2ImageSharp: imageSharp(id: { regex: "/stock_architektur_2/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    architektur4ImageSharp: imageSharp(id: { regex: "/stock_architektur_4/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    architektur6ImageSharp: imageSharp(id: { regex: "/stock_architektur_6/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    architektur7ImageSharp: imageSharp(id: { regex: "/stock_architektur_7/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    architektur9ImageSharp: imageSharp(id: { regex: "/stock_architektur_9/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    architektur10ImageSharp: imageSharp(
      id: { regex: "/stock_architektur_10/" }
    ) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    architektur11ImageSharp: imageSharp(
      id: { regex: "/stock_architektur_11/" }
    ) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht46ImageSharp: imageSharp(id: { regex: "/stock_licht_46/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht2ImageSharp: imageSharp(id: { regex: "/stock_licht_2/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht3ImageSharp: imageSharp(id: { regex: "/stock_licht_3/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht4ImageSharp: imageSharp(id: { regex: "/stock_licht_4/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht41ImageSharp: imageSharp(id: { regex: "/stock_licht_41/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht42ImageSharp: imageSharp(id: { regex: "/stock_licht_42/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht31ImageSharp: imageSharp(id: { regex: "/stock_licht_31/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
    licht22ImageSharp: imageSharp(id: { regex: "/stock_licht_22/" }) {
      sizes(quality: 100, maxWidth: 800, maxHeight: 500, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
