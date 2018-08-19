import React from 'react'

import { ImageWrapper, SOURCE_TYP_PLACEHOLDER } from '../../images/ImageWrapper'

import LinkButton from '../../buttons/LinkButton'
import DownloadButton from '../../buttons/DownloadButton'

class DownloadPreviewTextAndImageLayout extends React.Component {
  render() {
    const { content, style } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={'container ' + style.container}>
        <div className="row">
          <div className="d-none d-md-block col-12">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-3">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 210,
                    height: 287,
                  }}
                />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
              <div className="col-12 col-md-5 col-lg-3">
                <ImageWrapper
                  sourceType={SOURCE_TYP_PLACEHOLDER}
                  source={{
                    width: 210,
                    height: 287,
                  }}
                />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
            </div>
          </div>
          <div className="col-12 margin-40-top margin-xs-20-top">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-3">
                <DownloadButton
                  text={'Karrieremagazin Ausgabe #1  \n Schubidu statt Mimimi'}
                />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
              <div className="col-12 col-md-5 col-lg-3">
                <DownloadButton
                  text={'Karrieremagazin Ausgabe #1  \n Schubidu statt Mimimi'}
                />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
            </div>
          </div>
        </div>
        {content.showButton && (
          <div className="row margin-20-top">
            <div className="col-12 col-md-3">
              <LinkButton
                text="ZU DEN MEDIEN"
                path="/karriere/ueber-uns"
                styleLink="d-none d-md-inline"
                {...this.props}
              />
              <LinkButton
                text="ZU DEN MEDIEN"
                path="/karriere/ueber-uns"
                styleLink="d-inline d-md-none"
                styleSpan="w-100"
                {...this.props}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default DownloadPreviewTextAndImageLayout
