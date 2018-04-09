import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

class ContentfulImage extends React.Component {
  render() {
    const { imageFile, styleClasses } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var filePath

    if (imageFile == null || imageFile.file == null) {
      return null
    } else {
      var fileEnding = imageFile.file.fileName.substring(
        imageFile.file.fileName.lastIndexOf('.'),
        imageFile.file.fileName.length
      )
      filePath = pathPrefix + '/img/contentful/' + imageFile.id + fileEnding

      return (
        <img
          src={filePath}
          className={styleClasses == null ? 'img-fluid' : styleClasses}
          alt={imageFile == null ? '' : imageFile.description}
        />
      )
    }
  }
}

export default ContentfulImage
