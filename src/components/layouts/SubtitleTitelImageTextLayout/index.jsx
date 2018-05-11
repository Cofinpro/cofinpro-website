import React from 'react'
import Img from 'gatsby-image'

import ContentfulMarkdownText from '../../ContentfulMarkdownText'

class SubtitleTitelImageTextLayout extends React.Component {
  render() {
    const {
      subtitle,
      title,
      image,
      text,
      containerStyle,
      rowOneStyle,
      rowTwoStyle,
      fullWidth,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var headerColumnWidth = ' col-md-8'
    var headerFillerColumnWidth = ' col-md-1'
    var textColumnWidth = ' col-md-6 col-lg-5'
    var textFillerColumnWidth = ' col-md-3 col-lg-4'

    if (fullWidth) {
      textColumnWidth = ''
      textFillerColumnWidth = ''
      headerColumnWidth = ''
      headerFillerColumnWidth = ''
    }

    var imagePlaceholderStyle = {
      height: '260px',
      width: '100%',
      display: 'block',
    }

    var imagePlaceholder = (
      <img
        class="card-img"
        data-src="holder.js/100px260/"
        alt="100%x260"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22366%22%20height%3D%22260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20366%20260%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1634ea09d1d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1634ea09d1d%22%3E%3Crect%20width%3D%22366%22%20height%3D%22260%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22136.9609375%22%20y%3D%22138.1%22%3E366x260%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        data-holder-rendered="true"
        style={imagePlaceholderStyle}
      />
    )

    return (
      <div className={'container ' + containerStyle}>
        <div className={'row ' + rowOneStyle}>
          <div className={'col-12 ' + headerColumnWidth}>
            <h2 className="h6">{subtitle}</h2>
            <h3 className="h2">{title}</h3>
            {image === undefined || image === null ? (
              imagePlaceholder
            ) : (
              <Img sizes={image.sizes} />
            )}
          </div>
          <div className={'col-12 ' + headerFillerColumnWidth} />
        </div>
        <div className={'row ' + rowTwoStyle}>
          <div className={'col-12' + textColumnWidth}>
            <ContentfulMarkdownText text={text} {...this.props} />
          </div>
          <div className={'col-12' + textFillerColumnWidth} />
        </div>
      </div>
    )
  }
}

export default SubtitleTitelImageTextLayout
