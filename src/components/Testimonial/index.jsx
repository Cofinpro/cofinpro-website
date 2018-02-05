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
      showCarouselSliderIcons,
      carouselId,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var sliderIcons

    if (
      showCarouselSliderIcons !== undefined &&
      showCarouselSliderIcons === true
    ) {
      sliderIcons = (
        <div className="d-block d-md-none">
          <a
            className="carousel-control-prev-under-picture margin-md-right"
            href={'#carousel-' + carouselId}
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left text-dark" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next-under-picture"
            href={'#carousel-' + carouselId}
            role="button"
            data-slide="next"
          >
            <i className="fa fa-chevron-right text-dark" aria-hidden="true" />
          </a>
        </div>
      )
    } else {
      sliderIcons = null
    }

    return (
      <div>
        <h2 className="h6 margin-20-bottom">{title}</h2>
        <div className="embed-responsive embed-responsive-16by9 margin-20-bottom">
          <iframe
            className="embed-responsive-item"
            src={videoUrl.replace('/watch?v=', '/embed/')}
          />
        </div>
        {sliderIcons}
        <p className="h4">{text}</p>
        <p className="margin-10-top">
          {author} - {authorTitle}
        </p>
      </div>
    )
  }
}

export default Testimonial
