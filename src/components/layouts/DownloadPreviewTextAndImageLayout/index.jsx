import React from 'react'

import { ImageWrapper, SOURCE_TYP_CONTENTFUL } from '../../images/ImageWrapper'

import LinkButton from '../../buttons/LinkButton'
import DownloadButton from '../../buttons/DownloadButton'

class DownloadPreviewTextAndImageLayout extends React.Component {
  render() {
    const { content, style, downloads } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (downloads === undefined || downloads === null || downloads.length < 1)
      return null

    return (
      <div className={'container ' + style.container}>
        <div className="row">
          <div className="d-none d-md-block col-12">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-3">
                <ImageWrapper
                  sourceType={SOURCE_TYP_CONTENTFUL}
                  source={downloads[0].image}
                  styleClasses="download-image"
                />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
              <div className="col-12 col-md-5 col-lg-3">
                {downloads.length > 1 && (
                  <ImageWrapper
                    sourceType={SOURCE_TYP_CONTENTFUL}
                    source={downloads[1].image}
                    styleClasses="download-image"
                  />
                )}
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
            </div>
          </div>
          <div className="col-12 margin-40-top margin-xs-20-top">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-3">
                <DownloadButton
                  _href={downloads[0].href}
                  text={downloads[0].title}
                />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
              <div className="col-12 col-md-5 col-lg-3">
                {downloads.length > 1 && (
                  <DownloadButton
                    _href={downloads[1].href}
                    text={downloads[1].title}
                  />
                )}
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DownloadPreviewTextAndImageLayout
