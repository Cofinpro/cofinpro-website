import React from 'react'

import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
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
            <h4>{content.header}</h4>
            <ContentfulMarkdownText text={content.text} />
          </div>
          <div className={'col-12 col-md-6 ' + content.orderPicture}>
            <ImageWrapper
              sourceType={SOURCE_TYP_PLACEHOLDER}
              source={{
                width: 1200,
                height: 800,
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ContentMaxParagraph
