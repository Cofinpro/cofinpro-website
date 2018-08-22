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
        <div className="row text-center justify-content-center">
          <div className="col-6 col-md-4">
            <div className="row justify-content-center">
              <div className="col-8 col-md-8 col-lg-6 text-center">
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
          <div className="col-6 col-md-4">
            <div className="row justify-content-center">
              <div className="col-8 col-md-8 col-lg-6 text-center">
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
          <div className="col-6 col-md-4 margin-xs-40-top">
            <div className="row justify-content-center">
              <div className="col-8 col-md-8 col-lg-6 text-center">
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
