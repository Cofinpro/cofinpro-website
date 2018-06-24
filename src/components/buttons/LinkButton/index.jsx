import React from 'react'
import Link from 'gatsby-link'

class LinkButton extends React.Component {
  render() {
    const { text, path, styleSpan, styleLink } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <Link className={'link-button ' + styleLink} to={pathPrefix + path}>
        <span className={'btn btn btn-outline-primary ' + styleSpan}>
          {text}
        </span>
      </Link>
    )
  }
}

export default LinkButton
