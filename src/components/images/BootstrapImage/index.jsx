import React from 'react'

class BootstrapImage extends React.Component {
  render() {
    const { source, styleClasses } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <img
        src={source}
        className={styleClasses == null ? 'img-fluid' : styleClasses}
      />
    )
  }
}

export default BootstrapImage
