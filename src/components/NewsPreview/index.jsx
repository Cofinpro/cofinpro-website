import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulImage from '../ContentfulImage'

class NewsPreview extends React.Component {
  render() {
    const { createdAt, title, description, newsId, url } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <Link to={pathPrefix + '/pinnwand/' + url}>
          <ContentfulImage imageFile={this.props.imageFile} />
        </Link>
        <p className="news-content margin-20-top">
          <span className="news-date">{createdAt}</span>
          <br />
          <span className="news-title">
            <strong>{title}</strong>
          </span>
          <br />
        </p>
        <p className="news-text">
          {description.length > 200
            ? description.substring(0, 200) + '...'
            : description}
          &nbsp;<Link to={pathPrefix + '/pinnwand/' + url}>></Link>
        </p>
      </div>
    )
  }
}

export default NewsPreview
