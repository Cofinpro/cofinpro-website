import React from 'react'
import Link from 'gatsby-link'

class LandingRedirect extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return <div />
  }
}

export default LandingRedirect
