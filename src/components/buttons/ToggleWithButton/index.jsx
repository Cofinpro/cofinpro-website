import React from 'react'

import ToggleButton from '../ToggleButton'

class ToggleWithButton extends React.Component {
  render() {
    const { text, path, dataTargetId, show, style } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    let rowStyle = style !== undefined ? style.container : ''

    return (
      <div className={'text-center margin-10-bottom ' + rowStyle}>
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
            innerButtonContent={
              <div className="button-label">
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
            }
          />
        </div>
      </div>
    )
  }
}

export default ToggleWithButton
