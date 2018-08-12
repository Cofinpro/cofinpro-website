import React from 'react'

import LinkButton from '../../../components/buttons/LinkButton'
import ToggleWithButton from '../../../components/buttons/ToggleWithButton'

import LayoutDownloadRow from '../LayoutDownloadRow'

import PreviewImageExternal from '../PreviewImageExternal'

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
      <div className={'container ' + style.container}>
        <div className="row">
          <div className="col-12">
            <h3 className="h4 margin-40-bottom margin-xs-20-bottom">
              {content.header}
            </h3>
          </div>
        </div>
        {content.downloads.length > 0 && (
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <PreviewImageExternal
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
                    <PreviewImageExternal
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
            style={{ row: 'margin-30-top margin-xs-10-top' }}
          />
        )}
        {convertedDownloads.length > 4 && (
          <div className="collapse" id={'more-' + content.id}>
            <LayoutDownloadRow
              downloads={convertedDownloads}
              startIndex={4}
              endIndex={999}
              style={{ row: '' }}
            />
          </div>
        )}
        {content.downloads.length === 0 && (
          <p className="no-media-available-text">
            Keine Medien zu diesem Thema <br />in dieser Kategorie verfügbar
          </p>
        )}
        <div className="row margin-40-top margin-xs-0-top">
          <div className="col-12 col-md-4 order-2 order-md-1">
            <LinkButton
              styleSpan="w-md-unset w-100 margin-20-top"
              text={content.buttonText}
              path="/beratungsfelder"
            />
          </div>
          <div className="col-12 col-md-4 flex-box-content-center order-1 order-md-2">
            {content.downloads.length > 4 && (
              <ToggleWithButton
                show={true}
                dataTargetId={'more-' + content.id}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LayoutDownloads
