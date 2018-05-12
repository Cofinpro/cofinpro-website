import React from 'react'
import PropTypes from 'prop-types'

import ContentfulMarkdownText from '../../ContentfulMarkdownText'
import { ImageWrapper, SOURCE_TYP_SHARP } from '../../images/ImageWrapper'

class SubtitleTitelTwoImagesTextLayout extends React.Component {
  render() {
    const { content, style } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={style ? 'container ' + style.container : 'container'}>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            {content.subtitle !== undefined ? (
              <h2 className="h6">{content.subtitle}</h2>
            ) : null}
            <h3 className="h2">{content.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <ImageWrapper
              source={content.imageLeft}
              sourceType={SOURCE_TYP_SHARP}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-block d-md-none margin-20-top" />
            <ImageWrapper
              source={content.imageRight}
              sourceType={SOURCE_TYP_SHARP}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 col-lg-5 offset-lg-1">
            <ContentfulMarkdownText
              text={content.text}
              styleClasses="margin-20-top"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SubtitleTitelTwoImagesTextLayout

SubtitleTitelTwoImagesTextLayout.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    text: PropTypes.string.isRequired,
    imageLeft: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
        contentType: PropTypes.string,
      }),
    }).isRequired,
    imageRight: PropTypes.shape({
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
  }),
}
