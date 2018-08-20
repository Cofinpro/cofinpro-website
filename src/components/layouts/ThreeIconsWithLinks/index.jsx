import React from 'react'

import { ImageWrapper, SOURCE_TYP_SHARP } from '../../images/ImageWrapper'

import GatsbyLink from 'gatsby-link'

import './style.scss'

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
      <div
        className={
          'container d-none d-md-block threeIconsWithLinks ' + styleClass
        }
      >
        <div className="row text-center">
          <div className="col-4">
            <GatsbyLink to={linkLeft}>
              <ImageWrapper
                source={iconLeft}
                sourceType={SOURCE_TYP_SHARP}
                styleClasses="padding-20 icons"
              />
            </GatsbyLink>
            <p className="h5 padding-sm-top">{titleLeft}</p>
          </div>
          <div className="col-4">
            <GatsbyLink to={linkMiddle}>
              <ImageWrapper
                source={iconMiddle}
                sourceType={SOURCE_TYP_SHARP}
                styleClasses="padding-20 icons"
              />
            </GatsbyLink>
            <p className="h5 padding-sm-top">{titleMiddle}</p>
          </div>
          <div className="col-4">
            <GatsbyLink to={linkRight}>
              <ImageWrapper
                source={iconRight}
                sourceType={SOURCE_TYP_SHARP}
                styleClasses="padding-20 icons"
              />
            </GatsbyLink>
            <p className="h5 padding-sm-top">{titleRight}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeIconsWithLinks
