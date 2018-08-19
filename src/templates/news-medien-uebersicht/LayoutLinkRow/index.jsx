import React from 'react'

import LinkButtonV2 from '../../../components/buttons/LinkButtonV2'

class LayoutLinkRow extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    const { links, startIndex, endIndex, style } = this.props

    let counterOfValidLinks = -1

    return (
      <div className={'row ' + style.row}>
        <div className="col-12">
          {links.map((link, i) => {
            let titleOfLink = link.nameTeil1
            if (link.nameTeil2 !== undefined && link.nameTeil2 !== null) {
              titleOfLink = titleOfLink + ' - ' + link.nameTeil2
            }
            let titleOfLinkTwo = ''

            if (links.length !== i + 1) {
              titleOfLinkTwo = links[i + 1].nameTeil1
              if (
                links[i + 1].nameTeil2 !== undefined &&
                links[i + 1].nameTeil2 !== null
              ) {
                titleOfLinkTwo = titleOfLinkTwo + ' - ' + links[i + 1].nameTeil2
              }
            }

            if (startIndex <= i && i <= endIndex) {
              ++counterOfValidLinks
              if (counterOfValidLinks % 2 === 0) {
                return (
                  <div className="row" key={i}>
                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                      <LinkButtonV2 path={link.to} text={titleOfLink} />
                    </div>
                    <div className="col-12 d-none d-lg-flex col-lg-2" />
                    <div className="col-12 col-md-6 col-lg-4 d-flex">
                      {links.length !== i + 1 && (
                        <LinkButtonV2
                          path={links[i + 1].to}
                          text={titleOfLinkTwo}
                        />
                      )}
                    </div>
                    <div className="col-12 d-none d-lg-flex col-lg-2" />
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

export default LayoutLinkRow
