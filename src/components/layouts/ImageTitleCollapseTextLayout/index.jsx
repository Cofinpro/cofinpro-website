import React from 'react'
import PropTypes from 'prop-types'

import { ImageWrapper, SOURCE_TYP_SHARP } from '../../images/ImageWrapper'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'
import ToggleButton from '../../buttons/ToggleButton'

class ImageTitleCollapseTextLayout extends React.Component {
  render() {
    const { id, content } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <ImageWrapper
          source={content.image}
          sourceType={SOURCE_TYP_SHARP}
          styleClasses="margin-20-bottom"
        />
        <div className="row">
          <div className="col-9">
            <p className="h5">
              {content.title} <br />
            </p>
            <p className="h6">{content.subtitle}</p>
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
          <ContentfulMarkdownText text={content.text} />
        </div>
      </div>
    )
  }
}

export default ImageTitleCollapseTextLayout

ImageTitleCollapseTextLayout.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
        contentType: PropTypes.string,
      }),
    }).isRequired,
  }).isRequired,
}
