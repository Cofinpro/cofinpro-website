import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class TestimonialLarge extends React.Component {
  render() {
    const {
      title,
      image,
      text,
      author,
      authorTitle,
      videoUrl,
      imageFile,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="container padding-lg-top-bottom">
        <div className="row">
          <div className="col-12 col-md-1" />
          <div className="col-12 col-md-11">
            <p className="h6">{title}</p>
          </div>
        </div>
        <div className="row padding-sm-bottom">
          <div className="col-12 col-md-1" />
          <div className="col-12 col-md-5">
            <div className="embed-responsive embed-responsive-4by3">
              <iframe
                className="embed-responsive-item"
                src={videoUrl.replace('/watch?v=', '/embed/')}
              />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <p className="h4 padding-sm-bottom">{text}</p>
            <p>
              {author} - {authorTitle}
            </p>
          </div>
          <div className="col-12 col-md-1" />
        </div>
      </div>
    )
  }
}

export default TestimonialLarge
