import React from 'react'
import Link from 'gatsby-link'

import ToggleWithButton from '../../components/buttons/ToggleWithButton'

class RelevanteLinks extends React.Component {
  render() {
    const { relevanteLinks, title } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    if (
      relevanteLinks === undefined ||
      relevanteLinks === null ||
      relevanteLinks.length < 1
    ) {
      return null
    }

    console.log(relevanteLinks)

    return (
      <div>
        <div className="text-left margin-20-top">
          <p className="text-size-14">{title.toUpperCase()}</p>

          {relevanteLinks.slice(0, 3).map((link, index) => (
            <p key={index} className="text-size-18">
              <Link className="text-dark" to={pathPrefix + link.url}>
                {link.title}
              </Link>
            </p>
          ))}

          {relevanteLinks.length > 3 && (
            <div className="collapse" id={'more-relevanteLinks'}>
              {relevanteLinks !== undefined &&
                relevanteLinks.slice(3).map((link, index) => (
                  <p key={index} className="text-size-18">
                    <Link className="text-dark" to={pathPrefix + link.url}>
                      {link.title}
                    </Link>
                  </p>
                ))}
            </div>
          )}

          <div className="col-12 col-md-4 order-1 order-md-2 text-center margin-10-bottom">
            {relevanteLinks.length > 3 && (
              <ToggleWithButton
                show={true}
                dataTargetId={'more-relevanteLinks'}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default RelevanteLinks
