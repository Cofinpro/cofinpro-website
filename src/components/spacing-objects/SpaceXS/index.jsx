import React from 'react'

import './style.scss'

class SpaceXS extends React.Component {
  render() {
    const { addClass } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return <div className={'space-xs ' + addClass} />
  }
}

export default SpaceXS
