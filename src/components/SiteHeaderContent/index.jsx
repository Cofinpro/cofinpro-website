import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './style.scss'

import ContentfulMarkdownText from '../ContentfulMarkdownText'

class SiteHeaderContent extends React.Component {
  render() {
    const { title, subtitle, text1, text2, titleTag, subtitleTag } = this.props

    var titleElement

    if (titleTag !== null && titleTag === 'h1') {
      titleElement = <h1 className="h2">{title}</h1>
    } else if (titleTag !== null && titleTag === 'h2') {
      titleElement = <h2 className="h2">{title}</h2>
    } else if (titleTag !== null && titleTag === 'h3') {
      titleElement = <h3 className="h2">{title}</h3>
    } else if (titleTag !== null && titleTag === 'h4') {
      titleElement = <h4 className="h2">{title}</h4>
    } else if (titleTag !== null && titleTag === 'h5') {
      titleElement = <h5 className="h2">{title}</h5>
    } else if (titleTag !== null && titleTag === 'h6') {
      titleElement = <h6 className="h2">{title}</h6>
    } else {
      titleElement = <h3 className="h2">{title}</h3>
    }

    var subTitleElement

    if (subtitleTag !== null && subtitleTag === 'h1') {
      subTitleElement = <h1 className="h6">{subtitle}</h1>
    } else if (subtitleTag !== null && subtitleTag === 'h2') {
      subTitleElement = <h2 className="h6">{subtitle}</h2>
    } else if (subtitleTag !== null && subtitleTag === 'h3') {
      subTitleElement = <h3 className="h6">{subtitle}</h3>
    } else if (subtitleTag !== null && subtitleTag === 'h4') {
      subTitleElement = <h4 className="h6">{subtitle}</h4>
    } else if (subtitleTag !== null && subtitleTag === 'h5') {
      subTitleElement = <h5 className="h6">{subtitle}</h5>
    } else if (subtitleTag !== null && subtitleTag === 'h6') {
      subTitleElement = <h6 className="h6">{subtitle}</h6>
    } else {
      subTitleElement = <h1 className="h6">{subtitle}</h1>
    }

    return (
      <div className="container padding-md-top-bottom">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            {titleElement}
            {subTitleElement}
            <ContentfulMarkdownText text={text1} />
            <ContentfulMarkdownText text={text2} />
          </div>
        </div>
      </div>
    )
  }
}

export default SiteHeaderContent
