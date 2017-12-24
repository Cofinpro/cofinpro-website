import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'
import Testimonial from '../Testimonial'

class TestimonialCarousel extends React.Component {
    render() {
        const {
            carouselId,
            testimonials
        } = this.props

        const pathPrefix = process.env.NODE_ENV === 'development'
            ? ''
            : __PATH_PREFIX__ 

        if (testimonials != null && testimonials.length > 0) {
            return (
                <div id={"carousel-" + carouselId} className="carousel slide testimonialCarousel" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner margin-md-top-bottom">
                        {testimonials.map((testimonial, i) => {
                            return (
                                <div className={"carousel-item" + (i == 0 ? " active" : "")} key={"carousel-item-t-" + i}>
                                    <Testimonial
                                        key={"carousel-item-testimonial-" + i}
                                        text={testimonial.zitat.zitat}
                                        author={testimonial.autor}
                                        authorTitle={testimonial.autorTitel}
                                        videoUrl={testimonial.linkVonYouTubeVideo}
                                        imageFile={testimonial.bildTestimonial} />
                                </div>
                            )
                        })}
                    </div>
                    <a className="carousel-control-prev" href={"#carousel-" + carouselId} role="button" data-slide="prev">
                        <i className="fa fa-chevron-left text-dark" aria-hidden="true"></i>
                    </a>
                    <a className="carousel-control-next" href={"#carousel-" + carouselId} role="button" data-slide="next">
                        <i className="fa fa-chevron-right text-dark" aria-hidden="true"></i>
                    </a>
                </div>
            )
        } else {
            return null;
        }

    }
}

export default TestimonialCarousel
