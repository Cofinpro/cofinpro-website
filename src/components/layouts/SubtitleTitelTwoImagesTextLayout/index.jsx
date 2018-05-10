import React from 'react'
import Img from 'gatsby-image'

import ContentfulMarkdownText from '../../ContentfulMarkdownText'

class SubtitleTitelTwoImagesTextLayout extends React.Component {
  render() {
    const {
      subtitle,
      title,
      imageLeft,
      imageRight,
      text,
      containerStyle,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={'container ' + containerStyle}>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            {subtitle !== undefined ? <h2 className="h6">{subtitle}</h2> : null}
            <h3 className="h2">{title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <Img sizes={imageLeft != null ? imageLeft.sizes : null} />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-block d-md-none margin-20-top" />
            <Img sizes={imageRight != null ? imageRight.sizes : null} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 col-lg-5 offset-lg-1">
            <ContentfulMarkdownText text={text} styleClasses="margin-20-top" />
          </div>
        </div>
      </div>
    )
  }
}

export default SubtitleTitelTwoImagesTextLayout
