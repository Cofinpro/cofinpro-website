import React from 'react'
import PropTypes from 'prop-types'

import ContentfulImage from '../../images/ContentfulImage'
import BootstrapImage from '../../images/BootstrapImage'
import SharpImage from '../../images/SharpImage'
import IconImage from '../../images/IconImage'
import PlaceholderImage from '../../images/PlaceholderImage'

import './style.scss'

const SOURCE_TYP_CONTENTFUL = 'Contentful'
const SOURCE_TYP_SHARP = 'Sharp'
const SOURCE_TYP_BOOTSTRAP = 'Bootstrap'
const SOURCE_TYP_PLACEHOLDER = 'Placeholder'
const SOURCE_TYP_ICON_IMAGE = 'Icon'

class ImageWrapper extends React.Component {
  render() {
    const { source, sourceType, overlayElement, styleClasses } = this.props

    if (sourceType === SOURCE_TYP_CONTENTFUL) {
      return <ContentfulImage imageFile={source} styleClasses={styleClasses} />
    } else if (sourceType === SOURCE_TYP_SHARP) {
      return <SharpImage {...this.props} />
    } else if (sourceType === SOURCE_TYP_BOOTSTRAP) {
      return <BootstrapImage {...this.props} />
    } else if (sourceType === SOURCE_TYP_PLACEHOLDER) {
      return <PlaceholderImage {...this.props} />
    } else if (sourceType === SOURCE_TYP_ICON_IMAGE) {
      return <IconImage {...this.props} />
    }
  }
}

export default {
  ImageWrapper,
  SOURCE_TYP_CONTENTFUL,
  SOURCE_TYP_SHARP,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_ICON_IMAGE,
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
    SOURCE_TYP_ICON_IMAGE,
  ]),
  backgroundOverlay: PropTypes.any,
  overlayElement: PropTypes.any,
  styleClasses: PropTypes.string,
}
