import React from 'react'
import { MarkdownPreview } from 'react-marked-markdown'

import './style.scss'

class ContentfulMarkdownText extends React.Component {
  render() {
    const { text, styleClasses } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return <MarkdownPreview className={styleClasses} value={text} />
  }
}

export default ContentfulMarkdownText
