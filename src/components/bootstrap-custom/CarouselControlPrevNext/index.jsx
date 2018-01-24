import React from 'react'

import './style.scss'

class CarouselControlPrevNext extends React.Component {
  render() {
    const { sliderId } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <a
          className="carousel-control-prev"
          href={'#' + sliderId}
          role="button"
          data-slide="prev"
        >
          <img
            alt="Vorheriges Bild"
            src={pathPrefix + '/svg/icon_arrow_dotted_left.svg'}
          />
        </a>
        <a
          className="carousel-control-next"
          href={'#' + sliderId}
          role="button"
          data-slide="next"
        >
          <img
            alt="Nächstes Bild"
            src={pathPrefix + '/svg/icon_arrow_dotted_right.svg'}
          />
        </a>
      </div>
    )
  }
}

export default CarouselControlPrevNext
