import React from 'react'

import { ImageWrapper, SOURCE_TYP_SHARP } from '../../images/ImageWrapper'

import GatsbyLink from 'gatsby-link'

class ThreeIconsWithLinks extends React.Component {
  render() {
    const {
      styleClass,
      iconLeft,
      titleLeft,
      linkLeft,
      iconMiddle,
      titleMiddle,
      linkMiddle,
      iconRight,
      titleRight,
      linkRight,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={'container threeIconsWithLinks ' + styleClass}>
        <div className="row text-center">
          <div className="col-4">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <GatsbyLink to={linkLeft}>
                  <ImageWrapper
                    source={iconLeft}
                    sourceType={SOURCE_TYP_SHARP}
                  />
                  <p className="h5 padding-sm-top text-dark">{titleLeft}</p>
                </GatsbyLink>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <GatsbyLink to={linkMiddle}>
                  <ImageWrapper
                    source={iconMiddle}
                    sourceType={SOURCE_TYP_SHARP}
                  />
                  <p className="h5 padding-sm-top text-dark">{titleMiddle}</p>
                </GatsbyLink>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <GatsbyLink to={linkRight}>
                  <ImageWrapper
                    source={iconRight}
                    sourceType={SOURCE_TYP_SHARP}
                  />
                  <p className="h5 padding-sm-top text-dark">{titleRight}</p>
                </GatsbyLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeIconsWithLinks
