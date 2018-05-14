import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import './style.scss'

import ContentfulImage from '../../images/ContentfulImage'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'
import CarouselControlPrevNext from '../../bootstrap-custom/CarouselControlPrevNext'

class ManagementBoardCarousel extends React.Component {
  render() {
    const { carouselId, mitglieder, mbImagesSharp } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

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
                  key={'carousel-item-t-' + mitglied.id}
                >
                  <div>
                    <Img
                      sizes={mbImagesSharp[mitglied.bild.id + '.jpg'].sizes}
                      className="margin-20-bottom"
                    />
                    <div className="d-block d-md-none margin-20-bottom">
                      <CarouselControlPrevNext
                        sliderId={'carousel-' + carouselId}
                        version={2}
                      />
                    </div>
                    <p className="h5">
                      {mitglied.titel} <br />
                    </p>
                    <p className="h6">{mitglied.untertitel}</p>
                    <ContentfulMarkdownText
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
