import React from 'react'
import Link from 'gatsby-link'

import ContentfulMarkdownText from '../../../components/ContentfulMarkdownText'

import {
  ImageWrapper,
  SOURCE_TYP_SHARP,
} from '../../../components/images/ImageWrapper'

class NewsMedienPreview extends React.Component {
  render() {
    const { content } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="row">
        <div className="col-12">
          <Link className="text-dark" to={`/${content.url}`}>
            <ImageWrapper
              sourceType={SOURCE_TYP_SHARP}
              source={content.image}
              overlayElement={
                <div className="text-underline">
                  <p className="h4 d-none d-lg-block no-margin bold-font">
                    {content.header}
                  </p>
                  <p className="h5 d-block d-lg-none no-margin bold-font">
                    {content.header}
                  </p>
                  {content.subheader !== undefined && (
                    <p className="text-sm-small">{content.subheader}</p>
                  )}
                </div>
              }
            />
          </Link>
        </div>
        <div className="col-12 margin-20-top">
          <p className="h5 bold-font">
            {content.date} - {content.publishedBy}
          </p>
        </div>
        <div className="col-12">
          <ContentfulMarkdownText text={content.intro} />
        </div>
      </div>
    )
  }
}

export default NewsMedienPreview
