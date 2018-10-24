import React from 'react'

import { ImageWrapper, SOURCE_TYP_SHARP } from '../../images/ImageWrapper'

class ThreeIconsWithTitleAndTextLayout extends React.Component {
  render() {
    const {
      iconLeft,
      titleLeft,
      textLeft,
      iconMiddle,
      titleMiddle,
      textMiddle,
      iconRight,
      titleRight,
      textRight,
      containerStyle,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={'container ' + containerStyle}>
        <div className="row justify-content-center text-center padding-md-top-bottom">
          <div className="col-6 col-md-4">
            <ImageWrapper
              source={iconLeft}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ImageWrapper
              source={iconLeft}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom margin-20-top">{titleLeft}</h4>
            <p className="">{textLeft}</p>
          </div>
          <div className="col-6 col-md-4">
            <ImageWrapper
              source={iconMiddle}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ImageWrapper
              source={iconMiddle}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom margin-20-top">{titleMiddle}</h4>
            <p className="">{textMiddle}</p>
          </div>
          <div className="col-6 col-md-4">
            <ImageWrapper
              source={iconRight}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ImageWrapper
              source={iconRight}
              sourceType={SOURCE_TYP_SHARP}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom margin-20-top">{titleRight}</h4>
            <p className="">{textRight}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeIconsWithTitleAndTextLayout
