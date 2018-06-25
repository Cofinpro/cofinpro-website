import React from 'react'

import './style.scss'

import ContentfulImage from '../../images/ContentfulImage'

import CarouselControlPrevNext from '../../bootstrap-custom/CarouselControlPrevNext'

class ImageCarousel extends React.Component {
  render() {
    const {
      carouselId,
      contentfulImages,
      options,
      specialNavigationOnMediaSm,
    } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (contentfulImages != null && contentfulImages.length > 0) {
      return (
        <div
          id={'carousel-' + carouselId}
          className={'carousel imageCarousel ' + options}
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {contentfulImages.map((image, i) => {
              return (
                <div
                  className={'carousel-item' + (i == 0 ? ' active' : '')}
                  key={'carousel-item-' + i}
                >
                  <ContentfulImage
                    imageFile={image}
                    styleClasses="d-block w-100"
                    key={'carousel-item-image-' + i}
                  />
                </div>
              )
            })}
          </div>
          <CarouselControlPrevNext sliderId={'carousel-' + carouselId} />
        </div>
      )
    } else {
      return null
    }
  }
}

export default ImageCarousel
