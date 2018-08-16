import React from 'react'

import DownloadButton from '../../../components/buttons/DownloadButton'
import LinkButtonV2 from '../../../components/buttons/LinkButtonV2'

class LayoutDownloadAndLinkMixedRow extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { elements, startIndex, endIndex, style } = this.props

    let counterOfValidElements = -1

    return (
      <div className={'row ' + style.row}>
        <div className="col-12">
          {elements.map((element, i) => {
            let titleOfLink = ''
            let titleOfLinkTwo = ''

            if (element.type === 'link') {
              titleOfLink = element.name
              if (
                element.zweiterName !== undefined &&
                element.zweiterName !== null
              ) {
                titleOfLink = titleOfLink + ' - ' + element.zweiterName
              }
            }
            if (elements.length !== i + 1 && elements[i + 1].type === 'link') {
              titleOfLinkTwo = elements[i + 1].name
              if (
                elements[i + 1].zweiterName !== undefined &&
                elements[i + 1].zweiterName !== null
              ) {
                titleOfLinkTwo =
                  titleOfLinkTwo + ' - ' + elements[i + 1].zweiterName
              }
            }

            if (startIndex <= i && i <= endIndex) {
              ++counterOfValidElements
              if (counterOfValidElements % 2 === 0) {
                return (
                  <div className="row" key={i}>
                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                      {element.type === 'file' && (
                        <DownloadButton
                          _href={element.to}
                          text={element.name}
                          styleContainer={''}
                        />
                      )}
                      {element.type === 'link' && (
                        <DownloadButton
                          _href={element.to}
                          text={titleOfLink}
                          styleContainer={''}
                        />
                      )}
                    </div>
                    <div className="col-12 d-none d-lg-block col-lg-2" />
                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                      {elements.length !== i + 1 &&
                        elements[i + 1].type === 'file' && (
                          <DownloadButton
                            _href={elements[i + 1].to}
                            text={elements[i + 1].name}
                            styleContainer={''}
                          />
                        )}
                      {elements.length !== i + 1 &&
                        elements[i + 1].type === 'link' && (
                          <DownloadButton
                            _href={elements[i + 1].to}
                            text={titleOfLinkTwo}
                            styleContainer={''}
                          />
                        )}
                    </div>
                    <div className="col-12 d-none d-lg-block col-lg-2" />
                  </div>
                )
              } else {
                return null
              }
            } else {
              return null
            }
          })}
        </div>
      </div>
    )
  }
}

export default LayoutDownloadAndLinkMixedRow
