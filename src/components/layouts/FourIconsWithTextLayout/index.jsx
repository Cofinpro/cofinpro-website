import React from 'react'
import PropTypes from 'prop-types'

import { ImageWrapper, SOURCE_TYP_CONTENTFUL } from '../../images/ImageWrapper'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'

class FourIconsWithTextLayout extends React.Component {
  render() {
    const { content } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row text-center">
              {content.columns.map((column, i) => {
                return (
                  <div
                    className="col-6 col-md-3"
                    key={'four-icons-column-' + i}
                  >
                    <ImageWrapper
                      source={column.icon}
                      sourceType={SOURCE_TYP_CONTENTFUL}
                      styleClasses="img-fluid img-md-padding"
                    />
                    <p className="p-font-large-md">{column.title}</p>
                    <ContentfulMarkdownText text={column.text} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FourIconsWithTextLayout

FourIconsWithTextLayout.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
        icon: PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
          file: PropTypes.shape({
            url: PropTypes.string,
            fileName: PropTypes.string,
            contentType: PropTypes.string,
          }),
        }),
      })
    ),
  }),
}
