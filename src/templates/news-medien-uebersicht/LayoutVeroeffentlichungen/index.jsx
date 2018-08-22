import React from 'react'

import LinkButton from '../../../components/buttons/LinkButton'
import ToggleWithButton from '../../../components/buttons/ToggleWithButton'

import LayoutDownloadAndLinkMixedRow from '../LayoutDownloadAndLinkMixedRow'
import StockphotoWithExternalLink from '../../../components/images/StockphotoWithExternalLink'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class LayoutVeroeffentlichungen extends React.Component {
  createDataStructureForDataRow(_input) {
    let result = []

    for (let i = 0; i < _input.length; ++i) {
      if (_input[i].dataType === 'link') {
        result.push({
          id: _input[i].id,
          to: _input[i].urlDerVerffentlichung,
          name: _input[i].ueberschrift,
          zweiterName: _input[i].unterUeberschrift,
          type: 'link',
        })
      }
      if (_input[i].dataType === 'file') {
        result.push({
          id: _input[i].id,
          to: `/pdf/contentful/${_input[i].pdfDatei.id}.pdf`,
          name: _input[i].ueberschrift,
          type: 'file',
        })
      }
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

    const { content, style } = this.props

    let convertedDownloads = this.createDataStructureForDataRow(
      content.elements
    )

    let firstForElements = []

    for (let i = 0; i < content.elements.length; ++i) {
      if (i < 4) {
        if (content.elements[i].dataType === 'file') {
          firstForElements.push(
            this.createDataForPreviewImageByFile(content.elements[i])
          )
        } else if (content.elements[i].dataType === 'link') {
          firstForElements.push(
            this.createDataForPreviewImageByLink(content.elements[i])
          )
        }
      }
    }

    return (
      <div className="container">
        {firstForElements.length > 0 && (
          <div className={'row ' + style.row}>
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <StockphotoWithExternalLink
                    content={firstForElements}
                    images={content.images}
                    indexOfElelement={0}
                  />
                </div>
              </div>
              {firstForElements.length > 2 && (
                <div className="row justify-content-center margin-40-top margin-xs-20-top d-none d-md-flex">
                  <div className="col-12 col-md-8">
                    <StockphotoWithExternalLink
                      content={firstForElements}
                      images={content.images}
                      indexOfElelement={2}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 col-md-6">
              {firstForElements.length > 1 && (
                <div className="row justify-content-center margin-xs-20-top">
                  <div className="col-12 col-md-8">
                    <StockphotoWithExternalLink
                      content={firstForElements}
                      images={content.images}
                      indexOfElelement={1}
                    />
                  </div>
                </div>
              )}
              {firstForElements.length > 3 && (
                <div className="row margin-40-top margin-xs-20-top d-none d-md-flex">
                  <div className="col-12">
                    <StockphotoWithExternalLink
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
        {convertedDownloads.length > 4 && (
          <LayoutDownloadAndLinkMixedRow
            elements={convertedDownloads}
            startIndex={4}
            endIndex={7}
            style={{ row: 'margin-40-top margin-xs-10-top d-none d-md-flex' }}
          />
        )}
        {convertedDownloads.length > 2 && (
          <LayoutDownloadAndLinkMixedRow
            elements={convertedDownloads}
            startIndex={2}
            endIndex={5}
            style={{ row: 'margin-40-top margin-xs-10-top d-flex d-md-none' }}
          />
        )}
        {convertedDownloads.length > 8 && (
          <div className="collapse" id={'more-md-' + content.id}>
            <LayoutDownloadAndLinkMixedRow
              elements={convertedDownloads}
              startIndex={8}
              endIndex={999}
              style={{ row: 'd-none d-md-flex' }}
            />
          </div>
        )}
        {convertedDownloads.length > 6 && (
          <div className="collapse" id={'more-xs-' + content.id}>
            <LayoutDownloadAndLinkMixedRow
              elements={convertedDownloads}
              startIndex={6}
              endIndex={999}
              style={{ row: 'd-flex d-md-none' }}
            />
          </div>
        )}
        {content.elements.length === 0 && (
          <p className="margin-20-top no-media-available-text">
            Keine Medien zu diesem Thema <br />in dieser Kategorie verfügbar
          </p>
        )}
        {(content.showButton || convertedDownloads.length > 6) && (
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
              {convertedDownloads.length > 8 && (
                <ToggleWithButton
                  show={true}
                  dataTargetId={'more-md-' + content.id}
                  style={{ container: 'd-none d-md-flex' }}
                />
              )}
              {convertedDownloads.length > 6 && (
                <ToggleWithButton
                  show={true}
                  dataTargetId={'more-xs-' + content.id}
                  style={{ container: 'd-flex d-md-none margin-20-top' }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LayoutVeroeffentlichungen
