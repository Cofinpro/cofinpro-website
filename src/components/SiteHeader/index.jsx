import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class SiteHeader extends React.Component {
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
      <div>
        <div className="container">
          <div className="row title-box">
            <div className="col-11 col-md-9 header-title">{titleElement}</div>
            <div className="col-1 col-md-3" />
          </div>
        </div>
        <div className="container container-md-full-width">
          {imageSmall !== null ? (
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1">
                {titleImage !== undefined && titleImage !== null ? (
                  <div className="d-none d-md-block">
                    {isOverlayActive !== undefined && isOverlayActive ? (
                      <div className="image-overlay-gradient" />
                    ) : null}
                    <Img sizes={titleImage.sizes} />
                  </div>
                ) : (
                  <ContentfulImage
                    imageFile={imageFile}
                    styleClasses="img-fluid d-none d-md-block"
                  />
                )}
                {titleImageSmall !== undefined && titleImageSmall !== null ? (
                  <div className="d-block d-md-none">
                    <Img
                      sizes={titleImageSmall.sizes}
                    />
                  </div>
                ) : (
                  <ContentfulImage
                    imageFile={imageSmall}
                    styleClasses="img-fluid d-block d-md-none"
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col">
                {titleImage !== undefined && titleImage !== null ? (
                  <Img sizes={titleImage.sizes} />
                ) : (
                  <ContentfulImage imageFile={imageFile} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SiteHeader
