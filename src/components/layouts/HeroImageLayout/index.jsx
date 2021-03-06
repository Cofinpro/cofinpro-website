import React from 'react'

import './style.scss'

import {
  ImageWrapper,
  SOURCE_TYP_CONTENTFUL,
  SOURCE_TYP_SHARP,
} from '../../images/ImageWrapper'

class HeroImageLayout extends React.Component {
  render() {
    const {
      title,
      imageFile,
      imageSmall,
      titleTag,
      titleImage,
      titleImageSmall,
      isOverlayActive,
    } = this.props

    var titleElement

    var tempTitleElement

    if (title.indexOf(' ') === -1) {
      tempTitleElement = title
    } else if (title.split(' ').length == 2) {
      var twoWords = title.split(' ')

      tempTitleElement = (
        <span>
          {twoWords[0]} <br /> {twoWords[1]}
        </span>
      )
    } else {
      var s = title

      var middle = Math.floor(s.length / 2)
      var before = s.lastIndexOf(' ', middle)
      var after = s.indexOf(' ', middle + 1)

      if (middle - before < after - middle) {
        middle = before
      } else {
        middle = after
      }

      var s1 = s.substr(0, middle)
      var s2 = s.substr(middle + 1)

      tempTitleElement = (
        <span>
          {s1} <br /> {s2}
        </span>
      )
    }

    if (titleTag !== null && titleTag === 'h1') {
      titleElement = <h1 className="h1">{tempTitleElement}</h1>
    } else if (titleTag !== null && titleTag === 'h2') {
      titleElement = <h2 className="h1">{tempTitleElement}</h2>
    } else if (titleTag !== null && titleTag === 'h3') {
      titleElement = <h3 className="h1">{tempTitleElement}</h3>
    } else if (titleTag !== null && titleTag === 'h4') {
      titleElement = <h4 className="h1">{tempTitleElement}</h4>
    } else if (titleTag !== null && titleTag === 'h5') {
      titleElement = <h5 className="h1">{tempTitleElement}</h5>
    } else if (titleTag !== null && titleTag === 'h6') {
      titleElement = <h6 className="h1">{tempTitleElement}</h6>
    } else {
      titleElement = <h3 className="h1">{tempTitleElement}</h3>
    }

    return (
      <div className="hero-image">
        <div className="container">
          <div className="row hero-image__title-box">
            <div className="col-11 col-md-10 col-lg-9">{titleElement}</div>
            <div className="col-1 col-md-3" />
          </div>
        </div>
        <div className="container container-md-full-width">
          {imageSmall !== null ? (
            <div className="row no-margin">
              <div className="col-12 col-lg-10 offset-lg-1 no-padding">
                {titleImage !== undefined && titleImage !== null ? (
                  <div className="d-none d-md-block">
                    {isOverlayActive !== undefined && isOverlayActive ? (
                      <div className="hero-image__image-overlay-gradient" />
                    ) : null}
                    <ImageWrapper
                      source={titleImage}
                      sourceType={SOURCE_TYP_SHARP}
                    />
                  </div>
                ) : (
                  <ImageWrapper
                    source={imageFile}
                    sourceType={SOURCE_TYP_CONTENTFUL}
                    styleClasses="img-fluid d-none d-md-block"
                  />
                )}
                {(titleImageSmall === undefined || titleImageSmall === null) &&
                (titleImageSmall === undefined || titleImageSmall === null) &&
                (titleImage !== undefined && titleImage !== null) ? (
                  <div className="d-block d-md-none">
                    {isOverlayActive !== undefined && isOverlayActive ? (
                      <div className="image-overlay-gradient" />
                    ) : null}
                    <ImageWrapper
                      source={titleImage}
                      sourceType={SOURCE_TYP_SHARP}
                    />
                  </div>
                ) : null}
                {titleImageSmall !== undefined && titleImageSmall !== null ? (
                  <div className="d-block d-md-none">
                    <ImageWrapper
                      source={titleImageSmall}
                      sourceType={SOURCE_TYP_SHARP}
                    />
                  </div>
                ) : null}
                {imageSmall !== undefined && imageSmall !== null ? (
                  <ImageWrapper
                    source={imageSmall}
                    sourceType={SOURCE_TYP_CONTENTFUL}
                    styleClasses="img-fluid d-block d-md-none"
                  />
                ) : null}
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col">
                {titleImage !== undefined && titleImage !== null ? (
                  <ImageWrapper
                    source={titleImage}
                    sourceType={SOURCE_TYP_SHARP}
                  />
                ) : (
                  <ImageWrapper
                    source={imageFile}
                    sourceType={SOURCE_TYP_CONTENTFUL}
                    styleClasses="img-fluid d-block d-md-none"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default HeroImageLayout
