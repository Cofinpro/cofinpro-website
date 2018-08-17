import React from 'react'
import Link from 'gatsby-link'

import LinkButton from '../../../components/buttons/LinkButton'
import ToggleWithButton from '../../../components/buttons/ToggleWithButton'

import LayoutLinkRow from '../LayoutLinkRow'

import StockphotoWithInternalLink from '../../../components/images/StockphotoWithInternalLink'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class LayoutPressemeldungen extends React.Component {
  createDataStructureForLinkRow(_input) {
    let result = []

    for (let i = 0; i < _input.length; ++i) {
      result.push({
        to: '/pressemeldung/' + _input[i].urlDerSeite,
        nameTeil1: _input[i].ueberschrift,
        nameTeil2: _input[i].unteruebrschrift,
      })
    }
    return result
  }

  createDataForPreviewImage(_input) {
    return {
      to: '/pressemeldung/' + _input.urlDerSeite,
      header: _input.ueberschrift,
      subHeader: _input.unteruebrschrift,
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { content, style } = this.props

    let convertedLinks = this.createDataStructureForLinkRow(content.elements)

    let firstForElements = []

    for (let i = 0; i < content.elements.length; ++i) {
      if (i < 4) {
        firstForElements.push(
          this.createDataForPreviewImage(content.elements[i])
        )
      }
    }

    return (
      <div className="container">
        {firstForElements.length > 0 && (
          <div className={'row ' + style.row}>
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <StockphotoWithInternalLink
                    content={firstForElements}
                    images={content.images}
                    indexOfElelement={0}
                  />
                </div>
              </div>
              {firstForElements.length > 2 && (
                <div className="row justify-content-center margin-40-top margin-xs-20-top d-none d-md-block">
                  <div className="col-12 col-md-8">
                    <StockphotoWithInternalLink
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
                    <StockphotoWithInternalLink
                      content={firstForElements}
                      images={content.images}
                      indexOfElelement={1}
                    />
                  </div>
                </div>
              )}
              {firstForElements.length > 3 && (
                <div className="row margin-40-top margin-xs-20-top d-none d-md-block">
                  <div className="col-12">
                    <StockphotoWithInternalLink
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
        {content.elements.length > 4 && (
          <LayoutLinkRow
            links={convertedLinks}
            startIndex={4}
            endIndex={7}
            style={{ row: 'margin-30-top margin-xs-10-top d-none d-md-flex' }}
          />
        )}
        {content.elements.length > 2 && (
          <LayoutLinkRow
            links={convertedLinks}
            startIndex={2}
            endIndex={5}
            style={{ row: 'margin-30-top margin-xs-10-top d-flex d-md-none' }}
          />
        )}
        {content.elements.length > 8 && (
          <div className="collapse" id={'more-md-' + content.id}>
            <LayoutLinkRow
              links={convertedLinks}
              startIndex={8}
              endIndex={999}
              style={{ row: 'd-none d-md-flex' }}
            />
          </div>
        )}
        {content.elements.length > 6 && (
          <div className="collapse" id={'more-xs-' + content.id}>
            <LayoutLinkRow
              links={convertedLinks}
              startIndex={6}
              endIndex={999}
              style={{ row: 'd-flex d-md-none' }}
            />
          </div>
        )}
        {content.elements.length === 0 && (
          <p className="no-media-available-text">
            Keine Medien zu diesem Thema <br />in dieser Kategorie verfügbar
          </p>
        )}
        {(content.showButton || content.elements.length > 6) && (
          <div className="row margin-40-top margin-xs-0-top">
            <div className="col-12 col-md-4 order-2 order-md-1">
              {content.showButton && (
                <LinkButton
                  styleSpan="w-md-unset w-100 margin-20-top"
                  text={content.buttonText}
                  path={content.buttonLink}
                />
              )}
            </div>
            <div className="col-12 col-md-4 flex-box-content-center order-md-2">
              {content.elements.length > 8 && (
                <ToggleWithButton
                  show={true}
                  dataTargetId={'more-md-' + content.id}
                  style={{ container: 'd-none d-md-flex' }}
                />
              )}
              {content.elements.length > 6 && (
                <ToggleWithButton
                  show={true}
                  dataTargetId={'more-xs-' + content.id}
                  style={{ container: 'd-flex d-md-none' }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LayoutPressemeldungen
