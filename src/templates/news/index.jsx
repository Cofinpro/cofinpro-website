import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import SiteHeader from '../../components/SiteHeader'
import SiteHeaderContent from '../../components/SiteHeaderContent'
import ContentfulImage from '../../components/ContentfulImage'
import ContentfulMarkdownText from '../../components/ContentfulMarkdownText'
import HtmlHeader from '../../components/HtmlHeader'
import LinkButton from '../../components/buttons/LinkButton'

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

        <SiteHeader
          title={news.ueberschrift}
          imageFile={news.titelbild}
          titleImage={news.titelbildSharp}
          isOverlayActive={true}
        />

        <div className="container padding-sm-top-bottom">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <p className="margin-40-top">{news.datumFuerDieAnzeige}</p>
              <h2>{news.ueberschrift}</h2>
              <ContentfulMarkdownText
                text={news.absatz1 !== null ? news.absatz1.absatz1 : ''}
                {...this.props}
              />
              <ContentfulImage
                imageFile={news.newsBild}
                styleClasses="img-fluid margin-20-bottom"
              />
              <ContentfulMarkdownText
                text={news.absatz2 !== null ? news.absatz2.absatz2 : ''}
                {...this.props}
              />
              <LinkButton text="ZUR PINNWAND" path="/pinnwand" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsTemplate
