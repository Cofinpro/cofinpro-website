import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

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
              property: 'Keywords',
              content: `${dataFromCms.keywords.keywords}`,
            },
            {
              property: 'Description',
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
