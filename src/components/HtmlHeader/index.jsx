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
    const { dataFromCms } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <Helmet
          title={dataFromCms.title}
          link={[
            {
              rel: 'canonical',
              href: this.getCurrentUrl(),
            },
          ]}
          meta={[
            {
              property: 'og:title',
              content: `${dataFromCms.title}`,
            },
            {
              name: 'keywords',
              content: `${dataFromCms.keywords.keywords}`,
            },
            {
              name: 'description',
              content: `${
                dataFromCms.description !== null
                  ? dataFromCms.description.description
                  : null
              }`,
            },
            {
              property: 'og:description',
              content: `${
                dataFromCms.description !== null
                  ? dataFromCms.description.description
                  : null
              }`,
            },
          ]}
        />
      </div>
    )
  }
}

export default HtmlHeader
