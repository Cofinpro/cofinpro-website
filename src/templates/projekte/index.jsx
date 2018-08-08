import React from 'react'
import Link from 'gatsby-link'

import RelevanteFokusthemen from '../../components/RelevanteFokusthemen'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import ToggleWithButton from '../../components/buttons/ToggleWithButton'

import NavigationBeratungsfelder from '../../components/navigation/NavigationBeratungsfelder'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_SHARP,
} from '../../components/images/ImageWrapper'

class ProjekteUebersicht extends React.Component {
  render() {
    function Layout(props) {
      return (
        <div className={'container ' + props.style.container}>
          {props.projects.map(function(item, i) {
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
                  {props.projects.length !== i + 1 && (
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
                                    text={
                                      '### ' +
                                      props.projects[i + 1].ueberschrift
                                    }
                                    styleClasses="h4"
                                  />
                                  <ContentfulMarkdownText
                                    text={
                                      ' ' +
                                      props.projects[i + 1].unterueberschrift
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
      )
    }

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var bigSmallSwitch = false

    var id = this.props.pathContext.id
    var title = this.props.pathContext.title
    var description = this.props.pathContext.description
    var projects = this.props.pathContext.projects
    var backgroundImages = this.props.pathContext.stockImages

    var firstShowProjects = []
    var moreProjects = []

    for (let i = 0; i < projects.length; ++i) {
      if (i < 8) {
        firstShowProjects.push(projects[i])
      } else if (i >= 8 && i < 16) {
        moreProjects.push(projects[i])
      }
    }

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

        <NavigationBeratungsfelder
          urlPrefix="projekte"
          styleClass="margin-80-top"
        />

        <Layout
          projects={firstShowProjects}
          style={{ container: 'margin-100-top margin-xs-60-top' }}
        />

        <div className="collapse" id="collapse-more-projects">
          <Layout projects={moreProjects} style={{ container: '' }} />
        </div>

        <div className="container margin-40-top">
          <div className="row justify-content-center">
            <ToggleWithButton
              dataTargetId={'collapse-more-projects'}
              show={true}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjekteUebersicht