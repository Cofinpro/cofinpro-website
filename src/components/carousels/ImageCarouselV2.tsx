import React from 'react';
import Img from 'gatsby-image';

import ContentfulImage from '../images/ContentfulImage';
import CarouselControlPrevNext from '../CarouselControlPrevNext';

import './ImageCarousel.scss';

interface Props {
  carouselId: string;
  contentfulImages: any;
  sharpImages?: any;
  options: any;
}

class ImageCarouselV2 extends React.Component<Props> {
  render() {
    const { carouselId, contentfulImages, sharpImages, options } = this.props;

    if (contentfulImages != null && contentfulImages.length > 0) {
      return (
        <div id={`carousel-${carouselId}`} className={`carousel imageCarouselV2 ${options}`} data-ride="carousel">
          <div className="carousel-inner">
            {sharpImages !== undefined && sharpImages !== null
              ? sharpImages.map((image: any, index: number) => {
                  return (
                    <div className={`carousel-item ${index === 0 ? ' active' : ''}`} key={`carousel-item-${index}`}>
                      <Img className="d-block w-100" fluid={image.sizes} key={`carousel-item-image-${index}`} />
                    </div>
                  );
                })
              : contentfulImages.map((image: any, index: number) => {
                  return (
                    <div className={`carousel-item ${index === 0 ? ' active' : ''}`} key={`carousel-item-${index}`}>
                      <ContentfulImage imageFile={image} styleClasses="d-block w-100" key={`carousel-item-image-${index}`} />
                    </div>
                  );
                })}
            <div className="d-block d-md-none">
              <CarouselControlPrevNext sliderId={`carousel-${carouselId}`} version={2} />
            </div>
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

export default ImageCarouselV2;
