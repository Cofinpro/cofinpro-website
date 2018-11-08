import React from 'react'

import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class ContentMaxParagraph extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { content, style } = this.props

    return (
      <div className={'container ' + style.container}>
        <div className="row">
          <div className={'col-12 col-md-6 ' + content.orderText}>
            {content.text !== undefined &&
              content.text !== null && (
                <ContentfulMarkdownText text={content.text} />
              )}
          </div>
          <div className={'col-12 col-md-6 ' + content.orderPicture}>
            {content.image !== undefined &&
              content.image !== null && (
                <ImageWrapper
                  sourceType={SOURCE_TYP_SHARP}
                  source={content.image}
                  styleClasses="news-media-paragraph"
                />
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default ContentMaxParagraph
