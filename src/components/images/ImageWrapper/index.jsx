import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import ContentfulImage from '../../images/ContentfulImage'

import './style.scss'

const SOURCE_TYP_CONTENTFUL = 'Contentful'
const SOURCE_TYP_SHARP = 'Sharp'
const SOURCE_TYP_BOOTSTRAP = 'Bootstrap'
const SOURCE_TYP_PLACEHOLDER = 'Placeholder'
const SOURCE_TYP_ICON_IMAGE = 'Icon'

class ImageWrapper extends React.Component {
  render() {
    function IconImage(props) {
      let styleOverlay = ''

      if (props.style !== undefined && props.style.overlay !== undefined) {
        styleOverlay = props.style.overlay
      }

      let styleBackgroundImage = ''

      if (
        props.style !== undefined &&
        props.style.backgroundImage !== undefined
      ) {
        styleBackgroundImage = props.style.backgroundImage
      }

      return (
        <div>
          <img
            src={'/img/filler_fokus.png'}
            className={'img-fluid ' + styleBackgroundImage}
          />
          <img src={props.source} className="icon-image" />
          <div className={'image-overlay-top-left ' + styleOverlay}>
            {overlayElement}
          </div>
        </div>
      )
    }

    function BootstrapImage(props) {
      return (
        <img
          src={props.source}
          className={
            props.styleClasses == null ? 'img-fluid' : props.styleClasses
          }
        />
      )
    }

    function PlaceholderImage(props) {
      return (
        <div>
          <img
            src={
              'http://via.placeholder.com/' +
              props.source.width +
              'x' +
              props.source.height
            }
            className={'img-fluid ' + props.styleClasses}
            alt="Responsive image"
          />
          <div className={'image-overlay-top-left ' + props.styleClasses}>
            {overlayElement}
          </div>
        </div>
      )
    }

    const { source, sourceType, overlayElement, styleClasses } = this.props

    if (sourceType === SOURCE_TYP_CONTENTFUL) {
      return <ContentfulImage imageFile={source} styleClasses={styleClasses} />
    } else if (sourceType === SOURCE_TYP_SHARP) {
      return <Img sizes={source.sizes} className={styleClasses} />
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
  overlayElement: PropTypes.any,
  styleClasses: PropTypes.string,
}
