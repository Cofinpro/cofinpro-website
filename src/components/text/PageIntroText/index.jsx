import React from 'react'

class PageIntroText extends React.Component {
  render() {
    const { content, style } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={style !== undefined ? style.container : ''}>
        <p className="h4 normal-font d-none d-lg-block margin-20-top no-margin">
          {content.text}
        </p>
        <p className="h5 normal-font d-none d-md-block d-lg-none margin-20-top no-margin">
          {content.text}
        </p>
        <p className="d-block normal-font d-md-none margin-20-top no-margin">
          {content.text}
        </p>
      </div>
    )
  }
}

export default PageIntroText
