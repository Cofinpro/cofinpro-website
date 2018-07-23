import React from 'react'

import ToggleButton from '../ToggleButton'

class MobileToggleWithButton extends React.Component {
  render() {
    const { text, path, dataTargetId, show } = this.props

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
            id={'toggle-button-' + dataTargetId}
            dataTarget={dataTargetId}
            showElemForMore={'label-toggle-' + dataTargetId + '-more'}
            showElemForLess={'label-toggle-' + dataTargetId + '-less'}
          />
          <div id={'label-toggle-' + dataTargetId + '-more'}>
            <p className="d-none d-md-block text-primary text-size-14">
              MEHR<br />ANZEIGEN
            </p>
            <p className="d-block d-md-none text-primary text-size-14">
              MEHR ANZEIGEN
            </p>
          </div>
          <div
            id={'label-toggle-' + dataTargetId + '-less'}
            style={{ display: 'none' }}
          >
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
