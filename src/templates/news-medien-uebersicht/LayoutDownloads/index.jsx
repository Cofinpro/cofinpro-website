import React from 'react'

import LinkButton from '../../../components/buttons/LinkButton'
import ToggleWithButton from '../../../components/buttons/ToggleWithButton'

import LayoutDownloadRow from '../LayoutDownloadRow'

import StockphotoWithExternalLink from '../../../components/images/StockphotoWithExternalLink'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class LayoutDownloads extends React.Component {
  createDataStructureForDownloadRow(_input) {
    let result = []

    for (let i = 0; i < _input.length; ++i) {
      result.push({
        id: _input[i].datei.id,
        name: _input[i].beschriftungDesDownloads,
      })
    }
    return result
  }

  createDataForPreviewImage(_input) {
    return {
      hrefLink: `/pdf/contentful/${_input.datei.id}.pdf`,
      header: _input.beschriftungDesDownloads,
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { content, style } = this.props

    let convertedDownloads = this.createDataStructureForDownloadRow(
      content.downloads
    )

    let firstTwoElements = []

    for (let i = 0; i < content.downloads.length; ++i) {
      if (i < 2) {
        firstTwoElements.push(
          this.createDataForPreviewImage(content.downloads[i])
        )
      }
    }

    return (
      <div className={'container'}>
        {content.downloads.length > 0 && (
          <div className={'row ' + style.row}>
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <StockphotoWithExternalLink
                    content={firstTwoElements}
                    images={content.images}
                    indexOfElelement={0}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              {content.downloads.length > 1 && (
                <div className="row margin-xs-20-top">
                  <div className="col-12 col-md-8">
                    <StockphotoWithExternalLink
                      content={firstTwoElements}
                      images={content.images}
                      indexOfElelement={1}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {convertedDownloads.length > 2 && (
          <LayoutDownloadRow
            downloads={convertedDownloads}
            startIndex={2}
            endIndex={3}
            style={{ row: 'margin-30-top margin-xs-10-top d-none d-md-flex' }}
          />
        )}
        {convertedDownloads.length > 1 && (
          <LayoutDownloadRow
            downloads={convertedDownloads}
            startIndex={1}
            endIndex={2}
            style={{ row: 'margin-30-top margin-xs-10-top d-flex d-md-none' }}
          />
        )}
        {convertedDownloads.length > 4 && (
          <div className="collapse" id={'more-md-' + content.id}>
            <LayoutDownloadRow
              downloads={convertedDownloads}
              startIndex={4}
              endIndex={999}
              style={{ row: 'd-none d-md-flex' }}
            />
          </div>
        )}
        {convertedDownloads.length > 3 && (
          <div className="collapse" id={'more-xs-' + content.id}>
            <LayoutDownloadRow
              downloads={convertedDownloads}
              startIndex={3}
              endIndex={999}
              style={{ row: 'd-flex d-md-none' }}
            />
          </div>
        )}
        {content.downloads.length === 0 && (
          <p className="margin-20-top margin-xs-0-top no-media-available-text">
            Keine Medien zu diesem Thema <br />in dieser Kategorie verfügbar
          </p>
        )}
        {(content.showButton || convertedDownloads.length > 3) && (
          <div className="row margin-40-top margin-xs-0-top">
            <div className="col-12 col-md-4 order-2 order-md-1">
              {content.showButton && (
                <LinkButton
                  styleSpan="w-md-unset w-100 margin-0-top margin-xs-20-top"
                  text={content.buttonText}
                  path={content.buttonLink}
                />
              )}
            </div>
            <div className="col-12 col-md-4 flex-box-content-center order-1 order-md-2">
              {convertedDownloads.length > 4 && (
                <ToggleWithButton
                  show={true}
                  dataTargetId={'more-md-' + content.id}
                  style={{
                    container: 'd-none d-md-flex',
                  }}
                />
              )}
              {convertedDownloads.length > 3 && (
                <ToggleWithButton
                  show={true}
                  dataTargetId={'more-xs-' + content.id}
                  style={{
                    container: 'd-flex d-md-none margin-20-top',
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LayoutDownloads
