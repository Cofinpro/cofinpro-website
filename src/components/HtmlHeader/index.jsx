import React from 'react'
import Helmet from 'react-helmet'

import './style.scss'

class HtmlHeader extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const { dataFromCms, direktData } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    let title
    let description
    let keywords

    if (dataFromCms !== undefined) {
      title = dataFromCms.title
      description =
        dataFromCms.description !== null
          ? dataFromCms.description.description
          : null
      keywords =
        dataFromCms.keywords !== null ? dataFromCms.keywords.keywords : null
    }

    if (direktData !== undefined) {
      title = direktData.title
      description = direktData.description
      keywords = direktData.keywords
    }

    return (
      <div>
        <Helmet
          title={title}
          link={[
            {
              rel: 'canonical',
              href: this.getCurrentUrl(),
            },
          ]}
          meta={[
            {
              name: 'Description',
              content: `${description}`,
            },
            {
              property: 'og:title',
              content: `${title}`,
            },
            {
              name: 'keywords',
              content: `${keywords}`,
            },
            {
              property: 'og:description',
              content: `${description}`,
            },
          ]}
        />
      </div>
    )
  }
}

export default HtmlHeader
