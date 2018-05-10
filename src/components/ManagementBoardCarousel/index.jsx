import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'
import Testimonial from '../Testimonial'
import CarouselControlPrevNext from '../bootstrap-custom/CarouselControlPrevNext'

class ManagementBoardCarousel extends React.Component {
  render() {
    const { mitglieder, carouselId } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__x

    if (mitglieder != null && mitglieder.length > 0) {
      return (
        <div
          id={'carousel-' + carouselId}
          className="carousel slide testimonialCarousel"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner">
            {mitglieder.map((mitglied, i) => {
              return (
                <div
                  className={'carousel-item' + (i == 0 ? ' active' : '')}
                  key={'carousel-item-t-' + i}
                >
                  <div key={'carousel-wrapper-t-' + i}>
                    <p key={'carousel-p-t-' + i}>
                      <ContentfulImage
                        imageFile={mitglied.bild}
                        styleClasses="img-fluid margin-20-bottom"
                      />
                    </p>
                    <div
                      key={'carousel-control-wraper-t-' + i}
                      className="d-block d-md-none margin-20-bottom"
                    >
                      <CarouselControlPrevNext
                        key={'carousel-controll-t-' + i}
                        sliderId={'carousel-' + carouselId}
                        version={2}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
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

export default ManagementBoardCarousel
