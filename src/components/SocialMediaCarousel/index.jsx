import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'
import ContentfulMarkdownText from '../ContentfulMarkdownText'

import CarouselControlPrevNext from '../bootstrap-custom/CarouselControlPrevNext'

class SocialMediaCarousel extends React.Component {
  render() {
    const { carouselId, socialMediaPosts } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (socialMediaPosts != null && socialMediaPosts.length > 0) {
      return (
        <div>
          <div
            id={'carousel-' + carouselId}
            className="carousel slide socialMediaCarousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {socialMediaPosts.map((mediaPost, i) => {
                return (
                  <div
                    className={
                      'text-center carousel-item' + (i == 0 ? ' active' : '')
                    }
                    key={'carousel-item-' + i}
                  >
                    <a href={mediaPost.urlDesPosts.urlDesPosts} target="_blank">
                      <ContentfulImage
                        imageFile={mediaPost.bildDesPosts}
                        styleClasses="img-fluid social-media-image padding-sm-bottom"
                        key={'carousel-item-image-big-' + i}
                      />
                    </a>
                    <ContentfulMarkdownText
                      text={mediaPost.textDesPosts.textDesPosts}
                      styleClasses="d-block w-75 mx-auto"
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
