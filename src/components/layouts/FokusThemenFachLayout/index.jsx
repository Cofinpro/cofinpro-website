import React from 'react'

import FokusthemaPreview from '../FokusthemenLayout/FokusthemaPreview'

class FokusThemenFachLayout extends React.Component {
  render() {
    const pathPrefix = process.env_ENV === 'development' ? '' : __PATH_PREFIX__

    const { header, text, fokusthemen } = this.props

    return (
      <div>
        {fokusthemen.length > 0 && (
          <div className="container">
            <div className="row margin-60-top margin-xs-20-top">
              <div className="col-md-5">
                <h3 className="h3">{text}</h3>
              </div>
              <div className="col-md-7" />
            </div>
            <div className="row ">
              <div className="col-md-6 margin-100-top margin-xs-40-top">
                {fokusthemen.length > 1 && (
                  <FokusthemaPreview
                    url={fokusthemen[0].url}
                    header={fokusthemen[0].uberschriftGanzOben}
                    subheader={fokusthemen[0].unterueberschrift}
                    color={'--orange-pink'}
                    icon={fokusthemen[0].icon}
                  />
                )}
                {fokusthemen.length > 4 && (
                  <div className="row margin-40-top margin-xs-20-top">
                    <div className="col-12 col-md-8">
                      <FokusthemaPreview
                        url={fokusthemen[1].url}
                        header={fokusthemen[1].uberschriftGanzOben}
                        subheader={fokusthemen[1].unterueberschrift}
                        color={'--pink-orange'}
                        icon={fokusthemen[1].icon}
                      />
                    </div>
                  </div>
                )}
                <div className="col-12 col-md-4" />
              </div>
              <div className="col-md-6">
                {fokusthemen.length > 2 && (
                  <div className="row margin-xs-20-top">
                    <div className="col-md-2" />
                    <div className="col-12 col-md-8">
                      <FokusthemaPreview
                        url={fokusthemen[2].url}
                        header={fokusthemen[2].uberschriftGanzOben}
                        subheader={fokusthemen[2].unterueberschrift}
                        color={'--grey-orange'}
                        icon={fokusthemen[2].icon}
                      />
                    </div>
                    <div className="col-md-2" />
                  </div>
                )}
                {fokusthemen.length > 3 && (
                  <div className="row margin-40-top margin-xs-20-top">
                    <div className="col-12">
                      <FokusthemaPreview
                        url={fokusthemen[3].url}
                        header={fokusthemen[3].uberschriftGanzOben}
                        subheader={fokusthemen[3].unterueberschrift}
                        color={'--blue-yellow'}
                        icon={fokusthemen[3].icon}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {fokusthemen.length > 5 && (
              <div className="row align-items-end negative-margin-40-top margin-xs-20-top">
                <div className="col-12 col-md-5">
                  {fokusthemen.length > 6 && (
                    <div className="row">
                      <div className="col-md-2" />
                      <div className="col-12 col-md-10">
                        <FokusthemaPreview
                          url={fokusthemen[4].url}
                          header={fokusthemen[4].uberschriftGanzOben}
                          subheader={fokusthemen[4].unterueberschrift}
                          color={'--yellow-blue'}
                          icon={fokusthemen[4].icon}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-md-7">
                  <div className="row margin-xs-20-top">
                    <div className="col-md-10">
                      <FokusthemaPreview
                        url={fokusthemen[5].url}
                        header={fokusthemen[5].uberschriftGanzOben}
                        subheader={fokusthemen[5].unterueberschrift}
                        color={'--grey-blue'}
                        icon={fokusthemen[5].icon}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-2" />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default FokusThemenFachLayout
