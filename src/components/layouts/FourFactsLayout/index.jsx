import React from 'react'
import PropTypes from 'prop-types'

import { ImageWrapper, SOURCE_TYP_CONTENTFUL } from '../../images/ImageWrapper'
import ContentfulMarkdownText from '../../ContentfulMarkdownText'

class FourFactsLayout extends React.Component {
  render() {
    const { content, isHeaderCentered } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var headerCssClass = isHeaderCentered ? 'text-center' : ''

    return (
      <div className="container margin-100-top">
        <div className="row">
          <div className={'col ' + headerCssClass}>
            <h2>{content.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row text-center">
              {content.columns.map((column, i) => {
                return (
                  <div
                    className="col-6 col-md-3"
                    key={'four-facts-column-' + i}
                  >
                    <ImageWrapper
                      source={column.icon}
                      sourceType={SOURCE_TYP_CONTENTFUL}
                      styleClasses="img-fluid img-md-padding"
                    />
                    <p className="display-4 text-info bold-font">
                      {column.fact}
                    </p>
                    <p className="p-font-large-md">{column.text}</p>
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

export default FourFactsLayout

FourFactsLayout.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        fact: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        icon: PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
          file: PropTypes.shape({
            url: PropTypes.string,
            fileName: PropTypes.string,
            contentType: PropTypes.string,
          }),
        }).isRequired,
      })
    ),
  }),
  isHeaderCentered: PropTypes.bool.isRequired,
}
