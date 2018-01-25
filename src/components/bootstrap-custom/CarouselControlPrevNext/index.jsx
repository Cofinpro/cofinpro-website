import React from 'react'

import './style.scss'

class CarouselControlPrevNext extends React.Component {
  render() {
    const { sliderId, version } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var cssClassNext
    var cssClassPrev

    if (version !== null && version === 2) {
      cssClassNext = 'carousel-control-next-under-picture'
      cssClassPrev = 'carousel-control-prev-under-picture margin-md-right'
    } else {
      cssClassNext = 'carousel-control-next'
      cssClassPrev = 'carousel-control-prev'
    }

    return (
      <div>
        <a
          className={cssClassPrev}
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
          className={cssClassNext}
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
