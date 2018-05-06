import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import ContentfulImage from '../../ContentfulImage'

class ThreeIconsWithText extends React.Component {
  render() {
    const {
      title,
      iconLeft,
      textLeft,
      iconMiddle,
      textMiddle,
      iconRight,
      textRight,
    } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="container text-center margin-100-top">
        <div className="row padding-md-bottom">
          <div className="col">
            <h2 className="h4">{title}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <ContentfulImage
              imageFile={iconLeft}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto"
            />
            <ContentfulImage
              imageFile={iconLeft}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto"
            />
            <p className="padding-sm-top p-font-large-md">{textLeft}</p>
          </div>
          <div className="col-6 col-md-4">
            <ContentfulImage
              imageFile={iconMiddle}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto"
            />
            <ContentfulImage
              imageFile={iconMiddle}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto"
            />
            <p className="padding-sm-top p-font-large-md">{textMiddle}</p>
          </div>
          <div className="col-6 col-md-4">
            <ContentfulImage
              imageFile={iconRight}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto"
            />
            <ContentfulImage
              imageFile={iconRight}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto"
            />
            <p className="padding-sm-top p-font-large-md">{textRight}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ThreeIconsWithText
