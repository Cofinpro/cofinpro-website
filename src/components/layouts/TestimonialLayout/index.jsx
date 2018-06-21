import React from 'react'

import './style.scss'

import CarouselControlPrevNext from '../../bootstrap-custom/CarouselControlPrevNext'

class TestimonialLayout extends React.Component {
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
        <div className="d-block d-md-none margin-20-bottom">
          <CarouselControlPrevNext
            sliderId={'carousel-' + carouselId}
            version={2}
          />
        </div>
      )
    } else {
      sliderIcons = null
    }

    var marginUnderVideo

    if (
      showCarouselSliderIcons !== undefined &&
      showCarouselSliderIcons === true
    ) {
      marginUnderVideo = ''
    } else {
      marginUnderVideo = 'margin-20-bottom'
    }

    return (
      <div>
        <h2 className="h6 margin-20-bottom">{title}</h2>
        <div
          className={
            'embed-responsive embed-responsive-16by9 ' + marginUnderVideo
          }
        >
          <iframe
            className="embed-responsive-item"
            title="Testimonial eines Mitarbeiters"
            src={videoUrl.replace('/watch?v=', '/embed/')}
            allowFullScreen
          />
        </div>
        {sliderIcons}
        <p className="h4">{text}</p>
        <p className="margin-10-top p-font-large-md">
          {author} - {authorTitle}
        </p>
      </div>
    )
  }
}

export default TestimonialLayout
