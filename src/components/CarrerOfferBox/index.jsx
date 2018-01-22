import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PubSub from 'pubsub-js'

import './style.scss'

import StorageHelper from '../../utils/storageHelper'

class CarrerOfferBox extends React.Component {
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
    const { anzeigen } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var buckets = []

    for (var i = 1; i < anzeigen.length; i++) {
      if (
        this.state.perspektive == null ||
        this.state.perspektive.trim().length < 1 ||
        anzeigen[i - 1].node.perspektiveLink.name === this.state.perspektive
      ) {
        buckets.push(anzeigen[i - 1])
      }
    }

    if (buckets.length > 0) {
      return (
        <div>
          {buckets.length > 0
            ? buckets.map((anzeige, i) => {
                if (i < 3) {
                  return (
                    <Link
                      to={pathPrefix + '/stellenanzeige/' + anzeige.node.url}
                      className="text-dark"
                      key={'anzeige-link-' + i}
                    >
                      <div
                        className="row padding-sm-top"
                        key={'anzeige-row-' + i}
                      >
                        <div
                          className="col-10 col-md-10 col-lg-10"
                          key={'anzeige-col-' + i}
                        >
                          <div className="" key={'anzeige-padding-' + i}>
                            <p
                              className="no-margin-bottom text-left"
                              key={'anzeige-text-' + i}
                            >
                              {anzeige.node.titel}
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-2 col-md-2 col-lg-2 align-self-center"
                          key={'anzeige-col-arrow-' + i}
                        >
                          <div
                            className="text-primary"
                            key={'anzeige-arrow-box-' + i}
                          >
                            <span
                              className="h4 text-primary font-weight-bold stellenanzeige-link"
                              key={'anzeige-arrow-box-icon-' + i}
                            >
                              >
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                }
              })
            : null}
        </div>
      )
    } else {
      return (
        <a
          className="text-dark d-block padding-sm-bottom"
          target="_blank"
          href="https://recruitingapp-2586.umantis.com/Vacancies/297/Application/CheckLogin/1?lang=ger"
        >
          <p className="no-margin-bottom text-left padding-sm-bottom">
            Zur Zeit haben wir leider keine freien Stellen, aber wir freuen uns
            über deine Initiativbewerbung!
          </p>
          <p className="text-primary no-margin-bottom d-flex justify-content-between">
            Jetzt initiativ bewerben <span>></span>
          </p>
        </a>
      )
    }
  }
}

export default CarrerOfferBox
