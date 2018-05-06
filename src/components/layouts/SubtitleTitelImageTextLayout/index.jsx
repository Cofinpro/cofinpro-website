import React from 'react'
import Img from 'gatsby-image'

import ContentfulMarkdownText from '../../ContentfulMarkdownText'

class SubtitleTitelImageTextLayout extends React.Component {
  render() {
    const { subtitle, title, image, text, containerStyle, rowOneStyle, rowTwoStyle} = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={"container " + containerStyle}>
        <div className={"row " + rowOneStyle}>
          <div className="col-12 col-md-8">
            <h2 className="h6">{subtitle}</h2>
            <h3 className="h2">{title}</h3>
            <Img sizes={image.sizes} />
          </div>
          <div className="col-12 col-md-1" />
        </div>
        <div className={"row " + rowTwoStyle}>
          <div className="col-12 col-md-6 col-lg-5">
            <ContentfulMarkdownText text={text} {...this.props} />
          </div>
          <div className="col-12 col-md-3 col-lg-4" />
        </div>
      </div>
    )
  }
}

export default SubtitleTitelImageTextLayout
