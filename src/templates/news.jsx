import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import ContentfulImage from '../components/ContentfulImage'
import HtmlHeader from '../components/HtmlHeader'

class NewsTemplate extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const news = this.props.pathContext.news.node

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <HtmlHeader dataFromCms={news.metaData} {...this.props} />

        <SiteHeader title="Pinnwand" imageFile={news.titelbild} />

        <div className="container padding-md-top-bottom">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <p>{news.datumFuerDieAnzeige}</p>
              <h2>{news.ueberschrift}</h2>
              <ContentfulMarkdownText
                text={news.absatz1 !== null ? news.absatz1.absatz1 : ''}
                {...this.props}
              />
              <ContentfulImage
                imageFile={news.newsBild}
                styleClasses="img-fluid padding-sm-top-bottom"
              />
              <ContentfulMarkdownText
                text={news.absatz2 !== null ? news.absatz2.absatz2 : ''}
                {...this.props}
              />
              <Link to={pathPrefix + '/pinnwand'}>
                <span className="btn btn btn-outline-primary">
                  ZUR PINNWAND
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsTemplate
