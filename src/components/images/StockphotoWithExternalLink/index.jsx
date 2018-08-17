import React from 'react'

import { ImageWrapper, SOURCE_TYP_SHARP } from '../ImageWrapper'

class PreviewImageExternal extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { content, images, indexOfElelement } = this.props

    if (content.length > indexOfElelement) {
      return (
        <a
          className="text-dark"
          href={content[indexOfElelement].hrefLink}
          target="_blank"
          rel="noopener"
        >
          <ImageWrapper
            sourceType={SOURCE_TYP_SHARP}
            source={images[indexOfElelement]}
            overlayElement={
              <div className="text-underline">
                <p className="h4 d-none d-lg-block no-margin bold-font">
                  {content[indexOfElelement].header}
                </p>
                <p className="h5 d-block d-lg-none no-margin bold-font">
                  {content[indexOfElelement].header}
                </p>
                {content[indexOfElelement].subHeader !== undefined && (
                  <p className="text-sm-small">
                    {content[indexOfElelement].subHeader}
                  </p>
                )}
              </div>
            }
          />
        </a>
      )
    } else {
      return null
    }
  }
}

export default PreviewImageExternal
