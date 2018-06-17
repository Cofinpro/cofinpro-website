import React from 'react'

import './gatsrap.scss'

class TestIndex extends React.Component {
  render() {

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="container margin-100-top">
          <div className="row">
            <div className="col-12">
              <h1>Hello world</h1>
              <p>TEST TEST TEST</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TestIndex
