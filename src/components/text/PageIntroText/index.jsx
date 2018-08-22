import React from 'react'

import ContentfulMarkdownText from '../../ContentfulMarkdownText'

class PageIntroText extends React.Component {
  render() {
    const { content, style } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={style !== undefined ? style.container : ''}>
        <ContentfulMarkdownText
          text={content.text}
          styleClasses="h4 normal-font d-none d-lg-block margin-20-top no-margin"
        />
        <ContentfulMarkdownText
          text={content.text}
          styleClasses="h5 normal-font d-none d-md-block d-lg-none margin-20-top no-margin"
        />
        <ContentfulMarkdownText
          text={content.text}
          styleClasses="d-block normal-font d-md-none margin-20-top no-margin"
        />
      </div>
    )
  }
}

export default PageIntroText
