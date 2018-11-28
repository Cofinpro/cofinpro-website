import React from 'react';

import CarouselControlPrevNext from '../CarouselControlPrevNext';

import './TestimonialLayout.scss';

interface Props {
  title?: string;
  text: string;
  author: string;
  authorTitle: string;
  videoUrl: string;
  showCarouselSliderIcons?: boolean;
  carouselId: string;
}

class TestimonialLayout extends React.Component<Props> {
  componentDidMount() {
    $('button.ytp-large-play-button.ytp-button').hide();
  }

  render() {
    const { title, text, author, authorTitle, videoUrl, showCarouselSliderIcons, carouselId } = this.props;

    let sliderIcons;
    if (showCarouselSliderIcons !== undefined && showCarouselSliderIcons === true) {
      sliderIcons = (
        <div className="d-block d-md-none margin-20-bottom">
          <CarouselControlPrevNext sliderId={`carousel-${carouselId}`} version={2} />
        </div>
      );
    } else {
      sliderIcons = null;
    }

    let marginUnderVideo;
    if (showCarouselSliderIcons !== undefined && showCarouselSliderIcons === true) {
      marginUnderVideo = '';
    } else {
      marginUnderVideo = 'margin-20-bottom';
    }

    return (
      <div>
        <h2 className="h6 margin-20-bottom">{title}</h2>
        <div className={`embed-responsive embed-responsive-16by9 ${marginUnderVideo}`}>
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
    );
  }
}

export default TestimonialLayout;
