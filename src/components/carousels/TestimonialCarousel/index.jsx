import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../../images/ContentfulImage'
import TestimonialLayout from '../../layouts/TestimonialLayout'
import CarouselControlPrevNext from '../../bootstrap-custom/CarouselControlPrevNext'

class TestimonialCarousel extends React.Component {
  render() {
    const { carouselId, testimonials } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (testimonials != null && testimonials.length > 0) {
      return (
        <div
          id={'carousel-' + carouselId}
          className="carousel slide testimonialCarousel"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, i) => {
              return (
                <div
                  className={'carousel-item' + (i == 0 ? ' active' : '')}
                  key={'carousel-item-t-' + i}
                >
                  <TestimonialLayout
                    key={'carousel-item-testimonial-' + i}
                    text={testimonial.zitat.zitat}
                    author={testimonial.autor}
                    authorTitle={testimonial.autorTitel}
                    videoUrl={testimonial.linkVonYouTubeVideo}
                    imageFile={testimonial.bildTestimonial}
                    showCarouselSliderIcons={true}
                    carouselId={carouselId}
                  />
                </div>
              )
            })}
          </div>
          <div className="d-none d-md-block">
            <CarouselControlPrevNext sliderId={'carousel-' + carouselId} />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default TestimonialCarousel
