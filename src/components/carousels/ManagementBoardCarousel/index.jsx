import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import './style.scss'

import ContentfulImage from '../../ContentfulImage'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'
import CarouselControlPrevNext from '../../bootstrap-custom/CarouselControlPrevNext'

class ManagementBoardCarousel extends React.Component {
  render() {
    const { carouselId, mitglieder, mbImagesSharp } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__x

    if (mitglieder != null && mitglieder.length > 0) {
      return (
        <div
          id={'carousel-' + carouselId}
          className="carousel slide mbCarousel"
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
                    <Img
                      key={'carousel-inner-image' + i}
                      sizes={mbImagesSharp[mitglied.bild.id + '.jpg'].sizes}
                      className="margin-20-bottom"
                    />
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
                    <p key={'carousel-inner-title' + i} className="h5">
                      {mitglied.titel} <br />
                    </p>
                    <p key={'carousel-inner-subtitle' + i} className="h6">
                      {mitglied.untertitel}
                    </p>
                    <ContentfulMarkdownText
                      key={'carousel-inner-text' + i}
                      text={mitglied.beschreibung.beschreibung}
                    />
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
