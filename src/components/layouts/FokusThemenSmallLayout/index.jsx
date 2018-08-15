import React from 'react'

import FokusthemaPreview from '../FokusthemenLayout/FokusthemaPreview'

class FokusThemenSmallLayout extends React.Component {
  render() {
    const pathPrefix = process.env_ENV === 'development' ? '' : __PATH_PREFIX__

    const { header, text, fokusthemen } = this.props

    return (
      <div>
        <div className="container margin-120-top margin-xs-40-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2">{header}</h2>
              <p className="margin-20-top">{text}</p>
              {fokusthemen.length >= 2 && (
                <div className="margin-120-top margin-xs-40-top">
                  <FokusthemaPreview
                    url={fokusthemen[0].url}
                    header={fokusthemen[0].uberschriftGanzOben}
                    subheader={fokusthemen[0].unterueberschrift}
                    color={'--blue-yellow'}
                    icon={fokusthemen[0].icon}
                  />
                </div>
              )}
            </div>
            {fokusthemen.length >= 1 && (
              <div className="col-md-6 margin-xs-20-top">
                <FokusthemaPreview
                  url={fokusthemen[1].url}
                  header={fokusthemen[1].uberschriftGanzOben}
                  subheader={fokusthemen[1].unterueberschrift}
                  color={'--orange-pink'}
                  icon={fokusthemen[1].icon}
                />

                {fokusthemen.length >= 3 && (
                  <div className="row margin-20-top">
                    <div className="col-md-4" />
                    <div className="col-md-8 justify-content-end">
                      <FokusthemaPreview
                        url={fokusthemen[2].url}
                        header={fokusthemen[2].uberschriftGanzOben}
                        subheader={fokusthemen[2].unterueberschrift}
                        color={'--pink-orange'}
                        icon={fokusthemen[2].icon}
                      />
                    </div>
                  </div>
                )}
                {fokusthemen.length >= 4 && (
                  <div className="margin-40-top margin-xs-20-top">
                    <FokusthemaPreview
                      url={fokusthemen[4].url}
                      header={fokusthemen[4].uberschriftGanzOben}
                      subheader={fokusthemen[4].unterueberschrift}
                      color={'--grey-blue'}
                      icon={fokusthemen[4].icon}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default FokusThemenSmallLayout
