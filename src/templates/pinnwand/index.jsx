import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import PubSub from 'pubsub-js'

import NewsPreview from '../../components/NewsPreview'
import HtmlHeader from '../../components/HtmlHeader'
import ToggleButton from '../../components/buttons/ToggleButton'

import StorageHelper from '../../utils/storageHelper'

import './style.scss'

class PinnwandTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.threshold = 8
    this.state = {
      perspektive: StorageHelper.getFromSessionStorage('perspective'),
    }
  }

  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
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
    const allNews = this.props.pathContext.allNews

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var oldNewsExists

    var threshold = this.threshold

    if (allNews.length > this.threshold) {
      oldNewsExists = true
    }

    var filteredNews = []

    for (var i = 0; i < allNews.length; i++) {
      var perspektiven = []

      for (
        var j = 0;
        j < allNews[i].node.zugeordnetePerspektivenKompetenz.length;
        ++j
      ) {
        perspektiven.push(
          allNews[i].node.zugeordnetePerspektivenKompetenz[j].name
        )
      }

      if (
        this.state.perspektive === null ||
        this.state.perspektive.trim().length < 1 ||
        perspektiven.indexOf(this.state.perspektive) > -1
      ) {
        filteredNews.push(allNews[i])
      }
    }

    function OldNews(props) {
      if (!props.oldNewsExists) {
        return null
      }
      return (
        <div className="collapse" id="oldNewsContent">
          <div className="container">
            <div className="row">
              {props.allNews != null && props.allNews.length > 0
                ? props.allNews.map((edge, i) => {
                    if (i >= threshold) {
                      return (
                        <div
                          className="col-12 col-md-6 margin-20-bottom"
                          key={'news-column-old-' + i}
                        >
                          <NewsPreview
                            key={'news-NewsPreview-old-' + i}
                            createdAt={edge.node.datumFuerDieAnzeige}
                            title={edge.node.ueberschrift}
                            description={
                              edge.node.kurzeBeschreibung.kurzeBeschreibung
                            }
                            newsId={edge.node.id}
                            imageFile={edge.node.titelbild}
                            imageFileSharp={edge.node.titelbildSharp}
                            url={edge.node.url}
                            {...props}
                          />
                        </div>
                      )
                    } else {
                      return null
                    }
                  })
                : null}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <Helmet
          title="News & Stories aus unserer Unternehmensberatung: Cofinpro"
          link={[
            {
              rel: 'canonical',
              href: this.getCurrentUrl(),
            },
          ]}
          meta={[
            {
              property: 'og:title',
              content:
                'News & Stories aus unserer Unternehmensberatung: Cofinpro',
            },
            {
              property: 'Description',
              content:
                'Hier findest Du Neues aus unserem Consulting, Fachartikel unserer Experten und alles, was wir unbedingt mit Dir teilen wollen.',
            },
            {
              property: 'og:description',
              content:
                'Hier findest Du Neues aus unserem Consulting, Fachartikel unserer Experten und alles, was wir unbedingt mit Dir teilen wollen.',
            },
          ]}
        />

        <div className="container padding-md-top">
          <div className="row">
            <div className="col-12">
              <h1 className="margin-40-bottom">Pinnwand</h1>
            </div>
          </div>

          <div className="row">
            {filteredNews != null && filteredNews.length > 0
              ? filteredNews.map((edge, i) => {
                  if (i < threshold) {
                    return (
                      <div
                        className="col-12 col-md-6 margin-20-bottom"
                        key={'news-column-' + i}
                      >
                        <NewsPreview
                          key={'news-NewsPreview-' + i}
                          createdAt={edge.node.datumFuerDieAnzeige}
                          title={edge.node.ueberschrift}
                          description={
                            edge.node.kurzeBeschreibung.kurzeBeschreibung
                          }
                          newsId={edge.node.id}
                          imageFile={edge.node.titelbild}
                          imageFileSharp={edge.node.titelbildSharp}
                          url={edge.node.url}
                          {...this.props}
                        />
                      </div>
                    )
                  } else {
                    return null
                  }
                })
              : null}
          </div>
        </div>

        <OldNews
          oldNewsExists={oldNewsExists}
          allNews={filteredNews}
          {...this.props}
        />

        <div
          className={
            'container ' + (allNews.length <= threshold ? 'invisible' : '')
          }
        >
          <div className="row margin-md-top-bottom">
            <div className="col-12 text-center">
              <ToggleButton id="pinnwand" dataTarget={'oldNewsContent'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PinnwandTemplate
