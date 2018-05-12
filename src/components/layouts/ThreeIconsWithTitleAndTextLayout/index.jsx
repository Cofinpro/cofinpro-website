import React from 'react'

import ContentfulImage from '../../images/ContentfulImage'

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
            <ContentfulImage
              imageFile={iconLeft}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ContentfulImage
              imageFile={iconLeft}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom">{titleLeft}</h4>
            <p className="">{textLeft}</p>
          </div>
          <div className="col-6 col-md-4">
            <ContentfulImage
              imageFile={iconMiddle}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ContentfulImage
              imageFile={iconMiddle}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom">{titleMiddle}</h4>
            <p className="">{textMiddle}</p>
          </div>
          <div className="col-6 col-md-4">
            <ContentfulImage
              imageFile={iconRight}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ContentfulImage
              imageFile={iconRight}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom">{titleRight}</h4>
            <p className="">{textRight}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeIconsWithTitleAndTextLayout
