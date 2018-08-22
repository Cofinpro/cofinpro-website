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
            <GatsbyLink to={linkLeft}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper
                    source={iconLeft}
                    sourceType={SOURCE_TYP_SHARP}
                  />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top">
                    {titleLeft}
                  </p>
                </div>
              </div>
            </GatsbyLink>
          </div>
          <div className="col-6 col-md-4">
            <GatsbyLink to={linkMiddle}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper
                    source={iconMiddle}
                    sourceType={SOURCE_TYP_SHARP}
                  />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top">
                    {titleMiddle}
                  </p>
                </div>
              </div>
            </GatsbyLink>
          </div>
          <div className="col-6 col-md-4 margin-xs-40-top">
            <GatsbyLink to={linkRight}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper
                    source={iconRight}
                    sourceType={SOURCE_TYP_SHARP}
                  />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top">
                    {titleRight}
                  </p>
                </div>
              </div>
            </GatsbyLink>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeIconsWithLinks
