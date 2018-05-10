import React from 'react'
import Img from 'gatsby-image'

import ContentfulMarkdownText from '../../ContentfulMarkdownText'
import ToggleButton from '../../buttons/ToggleButton'

class ImageTitleCollapseTextLayout extends React.Component {
  render() {
    const { id, title, subtitle, text, image } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <Img sizes={image.sizes} className="margin-20-bottom" />
        <div className="row">
          <div className="col-9">
            <p className="h5">
              {title} <br />
            </p>
            <p className="h6">{subtitle}</p>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <ToggleButton
              id={id}
              dataTarget={'toggleMitgliedBeschreibung' + id}
              style="align-self-start"
            />
          </div>
        </div>

        <div className="collapse" id={'toggleMitgliedBeschreibung' + id}>
          <ContentfulMarkdownText text={text} />
        </div>
      </div>
    )
  }
}

export default ImageTitleCollapseTextLayout
