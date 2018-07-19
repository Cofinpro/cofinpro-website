import React from 'react'

import { ImageWrapper, SOURCE_TYP_SHARP } from '../../images/ImageWrapper'

class ThreeIconsWithLinks extends React.Component {
  render() {
    const {
      styleClass,
      iconLeft,
      titleLeft,
      iconMiddle,
      titleMiddle,
      iconRight,
      titleRight,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={'container d-none d-md-block ' + styleClass}>
        <div className="row text-center">
          <div className="col-4">
            <ImageWrapper
              source={iconLeft}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid w-50 mx-auto padding-20"
            />
            <p className="h5 padding-sm-top">{titleLeft}</p>
          </div>
          <div className="col-4">
            <ImageWrapper
              source={iconMiddle}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid w-50 mx-auto padding-20"
            />
            <p className="h5 padding-sm-top">{titleMiddle}</p>
          </div>
          <div className="col-4">
            <ImageWrapper
              source={iconRight}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid w-50 mx-auto padding-20"
            />
            <p className="h5 padding-sm-top">{titleRight}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeIconsWithLinks
