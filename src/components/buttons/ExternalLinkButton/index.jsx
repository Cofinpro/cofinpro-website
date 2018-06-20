import React from 'react'

class ExternalLinkButton extends React.Component {
  render() {
    const { text, _href, _target, styleSpan, styleLink } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <a className={'link-button ' + styleLink} href={_href} rel="noopener">
        <span className={'btn btn-outline-primary ' + styleSpan}>{text}</span>
      </a>
    )
  }
}

export default ExternalLinkButton
