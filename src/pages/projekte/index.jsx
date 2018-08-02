import React from 'react'

import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class ProjekteUebersicht extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var projects = ['test 1', 'test 2', 'test 3', 'test 4', 'test 5', 'test 6', 'test 7', 'test 8']

    var bigSmallSwitch = false

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
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-60-top">
          {projects.map(function(item, i) {
            if (i % 2 === 0) {
              var firstColumnWidth
              var secondColumnWidth
              var rowAlignment

              if (bigSmallSwitch) {
                secondColumnWidth = 'col-md-12'
                firstColumnWidth = 'col-md-8'
                rowAlignment = 'align-items-end margin-xs-0-top'
                if (projects.length !== i + 1) {
                  rowAlignment += ' negative-margin-80-top'
                } else {
                  rowAlignment += ' margin-40-top'
                }

                bigSmallSwitch = false
              } else {
                firstColumnWidth = 'col-md-12'
                secondColumnWidth = 'col-md-8'
                rowAlignment = 'align-items-start margin-40-top margin-xs-0-top'
                bigSmallSwitch = true
              }

              return (
                <div key={i} className={'row ' + rowAlignment}>
                  <div className="col-12 col-md-6">
                    <div className="row margin-xs-20-top justify-content-center">
                      <div className={'col-12 ' + firstColumnWidth}>
                        <ImageWrapper
                          sourceType={SOURCE_TYP_PLACEHOLDER}
                          source={{
                            width: 1200,
                            height: 800,
                          }}
                          overlayElement={
                            <div>
                              <ContentfulMarkdownText
                                text={'### Headline Projekt ' + i}
                                styleClasses="h4"
                              />
                              <ContentfulMarkdownText
                                text={' Subheadline Projekt ' + i}
                                styleClasses="h5"
                              />
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {projects.length !== i + 1 && (
                    <div className="col-12 col-md-6">
                      <div className="row margin-xs-20-top justify-content-center">
                        <div className={'col-12 ' + secondColumnWidth}>
                          <ImageWrapper
                            sourceType={SOURCE_TYP_PLACEHOLDER}
                            source={{
                              width: 1200,
                              height: 800,
                            }}
                            overlayElement={
                              <div>
                                <ContentfulMarkdownText
                                  text={'### Headline Projekt ' + (i + 1)}
                                  styleClasses="h4"
                                />
                                <ContentfulMarkdownText
                                  text={' Subheadline Projekt ' + (i + 1)}
                                  styleClasses="h5"
                                />
                              </div>
                            }
                          />
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
