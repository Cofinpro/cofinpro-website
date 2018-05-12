import React from 'react'
import PropTypes from 'prop-types'

import ContentfulMarkdownText from '../../ContentfulMarkdownText'
import { ImageWrapper, SOURCE_TYP_SHARP } from '../../images/ImageWrapper'

class SubtitleTitelImageTextLayout extends React.Component {
  render() {
    const { content, style } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={style ? 'container ' + style.container : 'container'}>
        <div className={style ? 'row ' + style.rowOne : 'row'}>
          <div className="col-12 col-md-8">
            <h2 className="h6">{content.subtitle}</h2>
            <h3 className="h2">{content.title}</h3>
            <ImageWrapper
              source={content.image}
              sourceType={SOURCE_TYP_SHARP}
            />
          </div>
          <div className="col-12 col-md-1" />
        </div>
        <div className={style ? 'row ' + style.rowTwo : 'row'}>
          <div className="col-12 col-md-6 col-lg-5">
            <ContentfulMarkdownText text={content.text} {...this.props} />
          </div>
          <div className="col-12 col-md-3 col-lg-4" />
        </div>
      </div>
    )
  }
}

export default SubtitleTitelImageTextLayout

SubtitleTitelImageTextLayout.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
        contentType: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
  style: PropTypes.shape({
    container: PropTypes.string,
    rowOne: PropTypes.string,
    rowTwo: PropTypes.string,
  }),
}
