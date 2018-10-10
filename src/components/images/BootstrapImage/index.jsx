import React from 'react'

class BootstrapImage extends React.Component {
  render() {
    const { source, styleClasses, overlayElement } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="position-relative">
        <img
          src={source}
          className={styleClasses == null ? 'img-fluid' : styleClasses}
        />
        {overlayElement !== undefined && (
          <div className={'image-overlay-top-left'}>{overlayElement}</div>
        )}
      </div>
    )
  }
}

export default BootstrapImage
