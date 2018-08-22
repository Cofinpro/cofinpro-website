import React from 'react'

class PlaceholderImage extends React.Component {
  render() {
    const { source, styleClasses, overlayElement } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <img
          src={
            'http://via.placeholder.com/' + source.width + 'x' + source.height
          }
          className={'img-fluid ' + styleClasses}
          alt="Responsive image"
        />
        <div className={'image-overlay-top-left ' + styleClasses}>
          {overlayElement}
        </div>
      </div>
    )
  }
}

export default PlaceholderImage
