import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class Testimonial extends React.Component {
  componentDidMount() {
    $('button.ytp-large-play-button.ytp-button').hide()
  }

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
      <div>
        <h2 className="h6">{title}</h2>
        <div className="embed-responsive embed-responsive-4by3">
          <iframe
            className="embed-responsive-item"
            src={videoUrl.replace('/watch?v=', '/embed/')}
          />
        </div>
        <p className="h4 padding-sm-top padding-sm-bottom">{text}</p>
        <p>
          {author} - {authorTitle}
        </p>
      </div>
    )
  }
}

export default Testimonial
