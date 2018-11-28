import React from 'react';

import ContentfulImage from '../images/ContentfulImage';
import CarouselControlPrevNext from '../CarouselControlPrevNext';

interface Props {
  carouselId: string;
  contentfulImages: any;
  options: any;
}

class ImageCarousel extends React.Component<Props> {
  render() {
    const { carouselId, contentfulImages, options } = this.props;

    if (contentfulImages !== null && contentfulImages.length > 0) {
      return (
        <div id={`carousel-${carouselId}`} className={`carousel imageCarousel ${options}`} data-ride="carousel">
          <div className="carousel-inner">
            {contentfulImages.map((image: any, index: number) => {
              return (
                <div className={`carousel-item ${index === 0 ? ' active' : ''}`} key={`carousel-item-${index}`}>
                  <ContentfulImage imageFile={image} styleClasses="d-block w-100" key={`carousel-item-image-${index}`} />
                </div>
              );
            })}
          </div>
          <CarouselControlPrevNext sliderId={`carousel-${carouselId}`} />
        </div>
      );
    }

    return null;
  }
}

export default ImageCarousel;
