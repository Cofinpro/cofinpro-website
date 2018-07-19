import React from 'react'

class BeratungsfelderTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <p>Beratungsfelder</p>
      </div>
    )
  }
}

export default BeratungsfelderTemplate
