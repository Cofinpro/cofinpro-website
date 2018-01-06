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
                      styleClasses="d-block mx-auto social-media-image padding-sm-bottom"
                      key={'carousel-item-image-big-' + i}
                    />
                  </a>
                  <ContentfulMarkdownText
                    text={mediaPost.textDesPosts.textDesPosts}
                    styleClasses="d-block w-75 mx-auto"
                  />
                  <div className="text-center padding-sm-top">
                    <a
                      href="https://www.facebook.com/Cofinpro"
                      target="_blank"
                      title="facebook"
                    >
                      <img
                        src={pathPrefix + '/img/icons/facebook.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      href="http://instagram.com/cofinpro_ag"
                      target="_blank"
                      title="instagram"
                    >
                      <img
                        src={pathPrefix + '/img/icons/instagram.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      href="https://twitter.com/cofinpro_ag"
                      target="_blank"
                      title="twitter"
                    >
                      <img
                        src={pathPrefix + '/img/icons/twitter.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC7sM2sP8l2E60A4rZrA6ZTQ"
                      target="_blank"
                      title="you tube"
                    >
                      <img
                        src={pathPrefix + '/img/icons/youtube.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/846504/"
                      target="_blank"
                      title="linkedin"
                    >
                      <img
                        src={pathPrefix + '/img/icons/linkedin.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                    <a
                      href="https://www.xing.com/companies/cofinproag"
                      target="_blank"
                      title="xing"
                    >
                      <img
                        src={pathPrefix + '/img/icons/xing.png'}
                        className="social-media-icon-carousel"
                      />
                    </a>
                  </div>
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
