import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

import CarouselControlPrevNext from '../bootstrap-custom/CarouselControlPrevNext'

class ImageCarouselV2 extends React.Component {
  render() {
    const { carouselId, contentfulImages, sharpImages, options } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (contentfulImages != null && contentfulImages.length > 0) {
      return (
        <div
          id={'carousel-' + carouselId}
          className={'carousel imageCarouselV2 ' + options}
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {sharpImages !== undefined && sharpImages !== null
              ? sharpImages.map((image, i) => {
                  return (
                    <div
                      className={'carousel-item' + (i == 0 ? ' active' : '')}
                      key={'carousel-item-' + i}
                    >
                      <Img
                        className="d-block w-100"
                        sizes={image.sizes}
                        key={'carousel-item-image-' + i}
                      />
                    </div>
                  )
                })
              : contentfulImages.map((image, i) => {
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
            <div className="d-block d-md-none">
              <CarouselControlPrevNext
                sliderId={'carousel-' + carouselId}
                version={2}
              />
            </div>
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

export default ImageCarouselV2
