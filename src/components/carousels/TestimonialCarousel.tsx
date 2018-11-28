import React from 'react';

import TestimonialLayout from '../layouts/TestimonialLayout';
import CarouselControlPrevNext from '../CarouselControlPrevNext';

import './TestimonialCarousel.scss';

interface Props {
  carouselId: string;
  testimonials: any;
}

class TestimonialCarousel extends React.Component<Props> {
  render() {
    const { carouselId, testimonials } = this.props;

    if (testimonials != null && testimonials.length > 0) {
      return (
        <div id={`carousel-${carouselId}`} className="carousel slide testimonialCarousel" data-ride="carousel" data-interval="false">
          <div className="carousel-inner">
            {testimonials.map((testimonial: any, index: number) => {
              return (
                <div className={`carousel-item ${index === 0 ? ' active' : ''}`} key={`carousel-item-t-${index}`}>
                  <TestimonialLayout
                    key={`carousel-item-testimonial-${index}`}
                    text={testimonial.zitat.zitat}
                    author={testimonial.autor}
                    authorTitle={testimonial.autorTitel}
                    videoUrl={testimonial.linkVonYouTubeVideo}
                    // TODO: imageFile={testimonial.bildTestimonial} *is not used*
                    showCarouselSliderIcons={true}
                    carouselId={carouselId}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-none d-md-block">
            <CarouselControlPrevNext sliderId={`carousel-${carouselId}`} />
          </div>
        </div>
      );
    }

    return null;
  }
}

export default TestimonialCarousel;
