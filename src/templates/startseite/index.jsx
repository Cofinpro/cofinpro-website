import React from 'react'

class StartseiteTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <p>Startseite</p>
      </div>
    )
  }
}

export default StartseiteTemplate
