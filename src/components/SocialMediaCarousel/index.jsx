import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'
import ContentfulMarkdownText from '../ContentfulMarkdownText'

class SocialMediaCarousel extends React.Component {
  render() {
    const { carouselId, socialMediaPosts } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (socialMediaPosts != null && socialMediaPosts.length > 0) {
      return (
        <div
          id={'carousel-' + carouselId}
          className="carousel slide socialMediaCarousel padding-md-top-bottom"
          data-ride="carousel"
        >
          <div className="carousel-inner margin-md-top-bottom">
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
          <a
            className="carousel-control-prev"
            href={'#carousel-' + carouselId}
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left text-dark" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next"
            href={'#carousel-' + carouselId}
            role="button"
            data-slide="next"
          >
            <i className="fa fa-chevron-right text-dark" aria-hidden="true" />
          </a>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SocialMediaCarousel
