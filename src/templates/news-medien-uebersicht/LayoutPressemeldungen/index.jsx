import React from 'react'
import Link from 'gatsby-link'

import LinkButton from '../../../components/buttons/LinkButton'
import ToggleWithButton from '../../../components/buttons/ToggleWithButton'

import LayoutLinkRow from '../LayoutLinkRow'
import PreviewImageInternal from '../PreviewImageInternal'

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

    const { content } = this.props

    console.log(content)

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
                  <PreviewImageInternal
                    content={firstForElements}
                    images={content.images}
                    indexOfElelement={0}
                  />
                </div>
              </div>
              {firstForElements.length > 1 && (
                <div className="row justify-content-center margin-40-top margin-xs-20-top">
                  <div className="col-12 col-md-8">
                    <PreviewImageInternal
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
                    <PreviewImageInternal
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
                    <PreviewImageInternal
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
            style={{ row: 'margin-30-top margin-xs-10-top' }}
          />
        )}
        {content.elements.length > 8 && (
          <div className="collapse" id={'more-' + content.id}>
            <LayoutLinkRow
              links={convertedLinks}
              startIndex={8}
              endIndex={999}
              style={{ row: '' }}
            />
          </div>
        )}
        {content.elements.length === 0 && (
          <p className="no-media-available-text">
            Keine Medien zu diesem Thema <br />in dieser Kategorie verfügbar
          </p>
        )}
        <div className="row margin-40-top margin-xs-0-top">
          <div className="col-12 col-md-4 order-2 order-md-1">
            <LinkButton
              styleSpan="w-md-unset w-100"
              text={content.buttonText}
              path="/beratungsfelder"
            />
          </div>
          <div className="col-12 col-md-4 align-items-center order-1 order-md-2">
            {content.elements.length > 8 && (
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

export default LayoutPressemeldungen
