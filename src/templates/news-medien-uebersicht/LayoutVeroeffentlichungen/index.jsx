import React from 'react'
import Link from 'gatsby-link'

import LinkButton from '../../../components/buttons/LinkButton'
import ToggleWithButton from '../../../components/buttons/ToggleWithButton'

import LayoutDownloadRow from '../LayoutDownloadRow'
import PreviewImageExternal from '../PreviewImageExternal'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class LayoutVeroeffentlichungen extends React.Component {
  createDataStructureForDownloadRow(_input) {
    let result = []

    for (let i = 0; i < _input.length; ++i) {
      result.push({
        id: _input[i].pdfDatei.id,
        name: _input[i].ueberschrift,
      })
    }
    return result
  }

  createDataForPreviewImageByLink(_input) {
    return {
      hrefLink: _input.urlDerVerffentlichung,
      header: _input.ueberschrift,
      subHeader: _input.unterUeberschrift,
    }
  }

  createDataForPreviewImageByFile(_input) {
    return {
      hrefLink: `/pdf/contentful/${_input.pdfDatei.id}.pdf`,
      header: _input.ueberschrift,
      subHeader: _input.unterUeberschrift,
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { content } = this.props

    let convertedDownloads = this.createDataStructureForDownloadRow(
      content.elements.downloads
    )

    let numberOfDownloadsUsedInPreviewImages = 0
    let numberOfLinksUsedInPreviewImages = 0

    let firstForElements = []

    for (let i = 0; i < content.elements.all.length; ++i) {
      if (i < 4) {
        if (content.elements.all[i].dataType === 'file') {
          ++numberOfDownloadsUsedInPreviewImages

          firstForElements.push(
            this.createDataForPreviewImageByFile(content.elements.all[i])
          )
        } else if (content.elements.all[i].dataType === 'link') {
          ++numberOfLinksUsedInPreviewImages

          firstForElements.push(
            this.createDataForPreviewImageByLink(content.elements.all[i])
          )
        }
      }
    }

    let downloadsLeft =
      convertedDownloads.length - numberOfDownloadsUsedInPreviewImages

    return (
      <div className="container margin-100-top margin-xs-80-top">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="h2">{content.header}</h2>
            <p>{content.description}</p>
          </div>
          <div className="col-12 col-md-6" />
        </div>
        {firstForElements.length > 0 && (
          <div className="row margin-60-top margin-xs-0-top">
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <PreviewImageExternal
                    content={firstForElements}
                    images={content.images}
                    indexOfElelement={0}
                  />
                </div>
              </div>
              {firstForElements.length > 1 && (
                <div className="row justify-content-center margin-40-top margin-xs-20-top">
                  <div className="col-12 col-md-8">
                    <PreviewImageExternal
                      content={firstForElements}
                      images={content.images}
                      indexOfElelement={1}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 col-md-6">
              {firstForElements.length > 2 && (
                <div className="row justify-content-center margin-xs-20-top d-none d-md-block">
                  <div className="col-12 col-md-8">
                    <PreviewImageExternal
                      content={firstForElements}
                      images={content.images}
                      indexOfElelement={2}
                    />
                  </div>
                </div>
              )}
              {firstForElements.length > 3 && (
                <div className="row margin-40-top margin-xs-20-top d-none d-md-block">
                  <div className="col-12">
                    <PreviewImageExternal
                      content={firstForElements}
                      images={content.images}
                      indexOfElelement={3}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {downloadsLeft > 0 && (
          <LayoutDownloadRow
            downloads={convertedDownloads}
            startIndex={numberOfDownloadsUsedInPreviewImages}
            endIndex={numberOfDownloadsUsedInPreviewImages + 3}
            style={{ row: 'margin-30-top margin-xs-10-top' }}
          />
        )}
        {downloadsLeft > 4 && (
          <div className="collapse" id={'more-' + content.id}>
            <LayoutDownloadRow
              downloads={convertedDownloads}
              startIndex={numberOfDownloadsUsedInPreviewImages + 4}
              endIndex={999}
              style={{ row: '' }}
            />
          </div>
        )}
        {content.elements.all.length === 0 && (
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
            {downloadsLeft > 4 && (
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

export default LayoutVeroeffentlichungen
