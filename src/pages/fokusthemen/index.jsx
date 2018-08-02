import React from 'react'

import ToggleButton from '../../components/buttons/ToggleButton'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'
import FokusthemenPreview from '../../components/layouts/FokusthemenPreview'
import FokusthemenFilter from './filter'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../../components/images/ImageWrapper'

class FokusthemenStartseite extends React.Component {
  render() {
    const fokusthemen = []

    for (let i = 0; i < 18; ++i) {
      fokusthemen.push('Fokusthema ' + i)
    }

    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="h1">Fokusthemen</h1>
              <p className="h4 margin-20-top d-md-block d-none">
                Hier finden Sie alle unsere aktuellen Fokusthemen auf einen
                Blick. Entdecken sie unsere Themenvielfalt.
              </p>
              <p className="d-md-none">
                Hier finden Sie alle unsere aktuellen Fokusthemen auf einen
                Blick. Entdecken sie unsere Themenvielfalt.
              </p>
            </div>
          </div>
        </div>

        <FokusthemenFilter styleClass="margin-80-top" />

        <div className="container margin-60-top">
          <div className="row">
            <div className="col-12 col-md-6 d-flex">
              <div className="row">
                <div className="col-12">
                  <h2>Headline</h2>
                  <p>
                    Atatios culpa dolut a dolorep reculparumet alistibus mi,
                    volo blaccum alibus ex et, commolu ptatiam endit, simus ab
                    iumendenis et ommolorrorro que dolupta consedigeni nime
                    exera sunt rest estenecti dolut que derspel ipiciminus
                    restis diam nam est volest, te esequodi que voles de nim nos
                    quam et ut offici ulla accum facessus eos sinciis coreperia
                    con cus, tem quidelendit plit magnam, comnis dia sim nitae
                    netur sunti ommosam rem eos nulluptate vendam repudita
                    nonsequi cupta nus, ilia que porestis essitamet aspeditassus
                    et pa volorit atemporiant liquis molum int ea qui rae si re
                    cum fugia inulpa sum doluptatur, sit faccum qui rescid quid
                    quiditi num dolesto tatiumquis atatemporate ne cus quia
                    vendus dolupta sitatio.
                  </p>
                </div>
                <div className="col-12 d-none d-md-block align-self-end">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 1"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-6 d-none d-md-block">
              <div className="row">
                <div className="col-2" />
                <div className="col-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 2"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    styleClasses="margin-60-top margin-120-bottom"
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 3"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex d-md-none">
            {fokusthemen.map((item, i) => {
              if (i < 3) {
                return (
                  <div className="col-12" key={'fokusthema-mobile-' + i}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_PLACEHOLDER}
                      source={{
                        width: 1200,
                        height: 800,
                      }}
                      styleClasses="margin-20-top"
                      overlayElement={
                        <ContentfulMarkdownText
                          text={'### ' + item}
                          styleClasses="h4"
                        />
                      }
                    />
                  </div>
                )
              } else {
                return null
              }
            })}
            <div className="col-12">
              <p className="h3 margin-40-top">
                „tibusda volorum quiam, volenimus aut esti asseque velecatus.
                Fere reic tem seque dus eum rectur sit latemperovit quam sumendi
                nectibus.“
              </p>
            </div>
          </div>
          <div className="row d-none d-md-flex align-items-end negative-margin-80-top">
            <div className="col-1" />
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 4"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-2" />
                <div className="col-10">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 5"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row margin-40-top">
                <div className="col-10">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 6"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
                <div className="col-2" />
              </div>
            </div>
          </div>

          <div className="row d-none d-md-flex align-items-center margin-40-top">
            <div className="col-8">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 7"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-4">
              <p className="h3">
                „tibusda volorum quiam, volenimus aut esti asseque velecatus.
                Fere reic tem seque dus eum rectur sit latemperovit quam sumendi
                nectibus.“
              </p>
            </div>
          </div>
          <div className="row d-none d-md-flex align-items-center margin-40-top">
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 8"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 9"
                    styleClasses="h4"
                  />
                }
              />
              <div className="row margin-40-top">
                <div className="col-4" />
                <div className="col-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 10"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="collapse" id="more-fokusthemen">
                <FokusthemenPreview items={fokusthemen} />
              </div>
            </div>
          </div>
          <div className="row margin-40-top margin-xs-20-top">
            <div className="d-block d-md-none col-12 col-md-4 order-1 order-md-2 text-center margin-10-bottom">
              <div
                style={{
                  display: fokusthemen.length > 10 ? 'block' : 'none',
                }}
              >
                <ToggleButton
                  id="pinnwand"
                  dataTarget={'more-fokusthemen'}
                  showElemForMore="label-toggle-focusthemen-more"
                  showElemForLess="label-toggle-focusthemen-less"
                />
                <div id="label-toggle-focusthemen-more">
                  <p className="d-none d-md-block text-primary text-size-14">
                    MEHR<br />ANZEIGEN
                  </p>
                  <p className="d-block d-md-none text-primary text-size-14">
                    MEHR ANZEIGEN
                  </p>
                </div>
                <div
                  id="label-toggle-focusthemen-less"
                  style={{ display: 'none' }}
                >
                  <p className="d-none d-md-block text-primary text-size-14">
                    WENIGER<br />ANZEIGEN
                  </p>
                  <p className="d-block d-md-none text-primary text-size-14">
                    WENIGER ANZEIGEN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FokusthemenStartseite

export const pageQuery = graphql`
  query StartseiteQuery {
    iconVorteilLinksSharp: imageSharp(
      id: { regex: "/ZEiMMpHD0Ium86MUc6oi0/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilMitteSharp: imageSharp(
      id: { regex: "/c14zZzUPkdQy4gMImWEWAMS/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
    iconVorteilRechtsSharp: imageSharp(
      id: { regex: "/c6jYnfcyIh2Q4Mm4YMiI822/" }
    ) {
      sizes(quality: 60) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
