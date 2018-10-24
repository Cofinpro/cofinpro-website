import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

class LinkButton extends React.Component {
  render() {
    const { id, text, path, styleSpan, styleLink } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <Link
        id={id}
        className={'link-button ' + styleLink}
        to={pathPrefix + path}
      >
        <span className={'btn btn btn-outline-primary ' + styleSpan}>
          {text}
        </span>
      </Link>
    )
  }
}

export default LinkButton
