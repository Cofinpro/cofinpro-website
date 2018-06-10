import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PubSub from 'pubsub-js'

import StorageHelper from '../../utils/storageHelper'
import NewsPreview from '../NewsPreview'
import LinkButton from '../buttons/LinkButton'

class NewsPreviewNewest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      perspektive: StorageHelper.getFromSessionStorage('perspective'),
    }
  }

  componentWillMount() {
    this.token = PubSub.subscribe(
      'perspectiveChange',
      this.subscriber.bind(this)
    )
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  subscriber(msg, data) {
    if (this.state.perspektive !== data) {
      this.setState({
        perspektive: data,
      })
    }
  }

  render() {
    const { content, style } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="container margin-120-top">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <h2 className="h6">{content.untertitel}</h2>
            <h3 className="h2">{content.titel}</h3>
            <p className="margin-20-bottom d-block w-100 d-lg-none p-font-large-md">
              {content.beschreibung}
            </p>
            <p className="margin-20-bottom d-none d-lg-block w-75 p-font-large-md">
              {content.beschreibung}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-1" />
          {content.news.length > 0
            ? content.news.map((news, i) => {
                return (
                  <div className="col-12 col-md-5" key={'news-column-' + i}>
                    <NewsPreview
                      key={'news-NewsPreview-' + i}
                      createdAt={news.node.datumFuerDieAnzeige}
                      title={news.node.ueberschrift}
                      description={
                        news.node.kurzeBeschreibung.kurzeBeschreibung
                      }
                      newsId={news.node.id}
                      imageFile={news.node.titelbild}
                      imageFileSharp={news.node.titelbildSharp}
                      url={news.node.url}
                      {...this.props}
                    />
                  </div>
                )
              })
            : null}
          <div className="col-12 col-md-1" />
        </div>
        <div className="row margin-40-top">
          <div className="col-12 col-md-10 mx-auto">
            <LinkButton text="ZUR PINNWAND" path="/pinnwand" {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

export default NewsPreviewNewest
