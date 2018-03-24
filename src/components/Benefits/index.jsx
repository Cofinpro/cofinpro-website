import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import ContentfulImage from '../ContentfulImage'

class Benefits extends React.Component {
  render() {
    const { title, img1, text1, img2, text2, img3, text3 } = this.props
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
              imageFile={img1}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto"
            />
            <ContentfulImage
              imageFile={img1}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto"
            />
            <p className="padding-sm-top p-font-large-md">{text1}</p>
          </div>
          <div className="col-6 col-md-4">
            <ContentfulImage
              imageFile={img2}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto"
            />
            <ContentfulImage
              imageFile={img2}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto"
            />
            <p className="padding-sm-top p-font-large-md">{text2}</p>
          </div>
          <div className="col-6 col-md-4">
            <ContentfulImage
              imageFile={img3}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto"
            />
            <ContentfulImage
              imageFile={img3}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto"
            />
            <p className="padding-sm-top p-font-large-md">{text3}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Benefits
