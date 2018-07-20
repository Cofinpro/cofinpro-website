import React from 'react'

import ToggleButton from '../ToggleButton'

class MobileToggleWithButton extends React.Component {
  render() {
    const { text, path, show } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="d-block d-md-none col-12 col-md-4 order-1 order-md-2 text-center margin-10-bottom">
        <div
          style={{
            display: show ? 'block' : 'none',
          }}
        >
          <ToggleButton
            id="pinnwand"
            dataTarget={'more-fokusthemen'}
            showElemForMore="label-toggle-focusthemen-more"
            showElemForLess="label-toggle-focusthemen-less"
          />
          <div id="label-toggle-focusthemen-more">
            <p className="d-none d-md-block text-primary text-size-14">
              MEHR<br />ANZEIGEN
            </p>
            <p className="d-block d-md-none text-primary text-size-14">
              MEHR ANZEIGEN
            </p>
          </div>
          <div id="label-toggle-focusthemen-less" style={{ display: 'none' }}>
            <p className="d-none d-md-block text-primary text-size-14">
              WENIGER<br />ANZEIGEN
            </p>
            <p className="d-block d-md-none text-primary text-size-14">
              WENIGER ANZEIGEN
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MobileToggleWithButton
