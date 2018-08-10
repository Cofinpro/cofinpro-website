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

    const { url, header, subheader, color, icon } = this.props
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
              <p className="h4 d-none d-lg-block no-margin bold-font">
                {header}
              </p>
              <p className="h5 d-block d-lg-none no-margin bold-font">
                {header}
              </p>
              {subheader !== undefined && (
                <p className="text-sm-small">{subheader}</p>
              )}
            </div>
          }
        />
      </Link>
    )
  }
}

export default FokusthemaPreview
