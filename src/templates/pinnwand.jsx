import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import NewsPreview from '../components/NewsPreview'
import HtmlHeader from '../components/HtmlHeader'

class PinnwandTemplate extends React.Component {
  componentDidMount() {
    $('#oldNewsContent').collapse({ toggle: false })

    $('#button-pinnwand-collapse').click(function() {
      if ($('#button-pinnwand-collapse>i').hasClass('fa')) {
        $('#oldNewsContent').collapse('toggle')

        $('#button-pinnwand-collapse>i').toggleClass('fa-chevron-down')
        $('#button-pinnwand-collapse>i').toggleClass('fa-chevron-up')
      }

      if ($('#button-pinnwand-collapse>i').hasClass('material-icons')) {
        $('#oldNewsContent').collapse('toggle')

        $('#button-pinnwand-collapse>i').text(function(i, old) {
          return old == 'keyboard_arrow_down'
            ? 'keyboard_arrow_up'
            : 'keyboard_arrow_down'
        })
      }
    })
  }

  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  handleToggle() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }))
    console.log('handleToggle:' + this.state.isToggleOn)
  }

  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      isToggleOn: false,
    }
    this.threshold = 8

    var tempIsToggleOn = false

    if (props.pathContext.allNews.length > this.threshold) {
      tempIsToggleOn = true
    }

    this.state = {
      isToggleOn: tempIsToggleOn,
    }
    console.log(this.state.isToggleOn)
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
            {allNews != null && allNews.length > 0
              ? allNews.map((edge, i) => {
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
          allNews={allNews}
          {...this.props}
        />

        <div
          className={
            'container ' + (allNews.length <= threshold ? 'invisible' : '')
          }
        >
          <div className="row margin-md-top-bottom">
            <div className="col-12 text-center">
              <button
                id="button-pinnwand-collapse"
                className="btn btn-light text-white"
                type="button"
                data-toggle="collapse"
                data-target="#oldNewsContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i
                  className="fa fa-chevron-down text-primary"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PinnwandTemplate
