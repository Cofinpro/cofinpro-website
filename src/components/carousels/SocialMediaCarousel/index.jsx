import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import './style.scss'

import ContentfulImage from '../../images/ContentfulImage'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'

import CarouselControlPrevNext from '../../bootstrap-custom/CarouselControlPrevNext'

class SocialMediaCarousel extends React.Component {
  render() {
    const { carouselId, socialMediaPosts, sharpImages } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (socialMediaPosts != null && socialMediaPosts.length > 0) {
      return (
        <div>
          <div
            id={'carousel-' + carouselId}
            className="carousel  socialMediaCarousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {socialMediaPosts.map((mediaPost, i) => {
                var imageSharp

                for (var j = 0; j < sharpImages.length; j++) {
                  if (
                    sharpImages[j].sizes.originalName.indexOf(
                      mediaPost.bildDesPosts.id
                    ) !== -1
                  ) {
                    console.log('true')
                    imageSharp = sharpImages[j]
                  }
                }

                return (
                  <div
                    className={
                      'text-center carousel-item' + (i == 0 ? ' active' : '')
                    }
                    key={'carousel-item-' + i + '-' + carouselId}
                  >
                    <a href={mediaPost.urlDesPosts.urlDesPosts} target="_blank">
                      <Img
                        sizes={imageSharp.sizes}
                        key={
                          'carousel-item-image-big-' +
                          i +
                          imageSharp.sizes.originalName
                        }
                      />
                    </a>
                    <ContentfulMarkdownText
                      text={mediaPost.textDesPosts.textDesPosts}
                      styleClasses="d-block w-75 mx-auto p-font-large-md"
                    />
                  </div>
                )
              })}
            </div>
            <CarouselControlPrevNext sliderId={'carousel-' + carouselId} />
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SocialMediaCarousel
