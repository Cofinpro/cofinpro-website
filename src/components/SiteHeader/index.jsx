import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class SiteHeader extends React.Component {
  render() {
    const { title, imageFile, imageSmall, titleTag } = this.props

    var titleElement

    if (titleTag !== null && titleTag === 'h1') {
      titleElement = <h1 className="h1">{title}</h1>
    } else if (titleTag !== null && titleTag === 'h2') {
      titleElement = <h2 className="h1">{title}</h2>
    } else if (titleTag !== null && titleTag === 'h3') {
      titleElement = <h3 className="h1">{title}</h3>
    } else if (titleTag !== null && titleTag === 'h4') {
      titleElement = <h4 className="h1">{title}</h4>
    } else if (titleTag !== null && titleTag === 'h5') {
      titleElement = <h5 className="h1">{title}</h5>
    } else if (titleTag !== null && titleTag === 'h6') {
      titleElement = <h6 className="h1">{title}</h6>
    } else {
      titleElement = <h3 className="h1">{title}</h3>
    }

    return (
      <div className="container margin-md-bottom">
        <div className="row">
          <div className="col">
            <div className="title-box">
              <div className="col-11 col-md-9">{titleElement}</div>
              <div className="col-1 col-md-3" />
            </div>
          </div>
        </div>
        {imageSmall !== null ? (
          <div className="row">
            <div className="col">
              <ContentfulImage
                imageFile={imageFile}
                styleClasses="img-fluid d-none d-md-block"
              />
              <ContentfulImage
                imageFile={imageSmall}
                styleClasses="img-fluid d-block d-md-none"
              />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <ContentfulImage imageFile={imageFile} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default SiteHeader
