import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import ContentfulImage from '../../images/ContentfulImage'

import './style.scss'

const SOURCE_TYP_CONTENTFUL = 'Contentful'
const SOURCE_TYP_SHARP = 'Sharp'
const SOURCE_TYP_BOOTSTRAP = 'Bootstrap'
const SOURCE_TYP_PLACEHOLDER = 'Placeholder'

class ImageWrapper extends React.Component {
  render() {
    const { source, sourceType, overlayElement, styleClasses } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (sourceType === SOURCE_TYP_CONTENTFUL) {
      return <ContentfulImage imageFile={source} styleClasses={styleClasses} />
    } else if (sourceType === SOURCE_TYP_SHARP) {
      return <Img sizes={source.sizes} className={styleClasses} />
    } else if (sourceType === SOURCE_TYP_BOOTSTRAP) {
      return (
        <img
          src={source}
          className={styleClasses == null ? 'img-fluid' : styleClasses}
        />
      )
    } else if (sourceType === SOURCE_TYP_PLACEHOLDER) {
      return (
        <div>
          <img
            src={
              'http://via.placeholder.com/' + source.width + 'x' + source.height
            }
            className={'img-fluid ' + styleClasses}
            alt="Responsive image"
          />
          <div className={'image-overlay-top-left ' + styleClasses}>
            {overlayElement}
          </div>
        </div>
      )
    }
  }
}

export default {
  ImageWrapper,
  SOURCE_TYP_CONTENTFUL,
  SOURCE_TYP_SHARP,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_PLACEHOLDER,
}

ImageWrapper.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
        contentType: PropTypes.string,
      }),
    }),
    PropTypes.shape({
      sizes: PropTypes.shape({
        aspectRatio: PropTypes.number,
        base64: PropTypes.string,
        sizes: PropTypes.string,
        src: PropTypes.string,
        srcSet: PropTypes.string,
      }),
    }),
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    PropTypes.string,
  ]),
  sourceType: PropTypes.oneOf([
    SOURCE_TYP_CONTENTFUL,
    SOURCE_TYP_SHARP,
    SOURCE_TYP_BOOTSTRAP,
    SOURCE_TYP_PLACEHOLDER,
  ]),
  overlayElement: PropTypes.any,
  styleClasses: PropTypes.string,
}
