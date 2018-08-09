import React from 'react'
import Link from 'gatsby-link'

import ContentfulMarkdownText from '../../../ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_ICON_IMAGE,
} from '../../../images/ImageWrapper'

class FokusthemaPreview extends React.Component {
  render() {
    const pathPrefix = process.env_ENV === 'development' ? '' : __PATH_PREFIX__

    const { url, header, color, icon } = this.props
    return (
      <Link to={'/fokusthemen/thema/' + url}>
        <ImageWrapper
          sourceType={SOURCE_TYP_ICON_IMAGE}
          source={icon}
          style={{
            container: color,
          }}
          overlayElement={
            <div>
              <ContentfulMarkdownText
                text={'### ' + header}
                styleClasses="h4 d-none d-lg-block"
              />
              <ContentfulMarkdownText
                text={'### ' + header}
                styleClasses="h5 d-block d-lg-none"
              />
            </div>
          }
        />
      </Link>
    )
  }
}

export default FokusthemaPreview
