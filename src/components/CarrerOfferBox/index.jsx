import React from 'react'
import ReactGA from 'react-ga'
import Link from 'gatsby-link'
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

    function handleViewJobOfferClick(jobTitle) {
      ReactGA.event({
        category: 'Navigation',
        action: 'View job offer',
        label: 'User is navigating to job offer: ' + jobTitle,
      })
    }

    var buckets = []

    for (var i = 0; i < anzeigen.length; i++) {
      for (var j = 0; j < anzeigen[i].node.zuordnungZuKompetenzen.length; ++j) {
        if (
          this.state.perspektive == null ||
          this.state.perspektive.trim().length < 1 ||
          anzeigen[i].node.zuordnungZuKompetenzen[j].name ===
            this.state.perspektive
        ) {
          buckets.push(anzeigen[i])
        }
      }
    }

    if (buckets.length > 0) {
      return (
        <div className="carrer-offer-box">
          {buckets.length > 0 &&
            buckets.map((anzeige, i) => {
              if (i < 3) {
                return (
                  <Link
                    to={
                      pathPrefix +
                      '/karriere/stellenanzeige/' +
                      anzeige.node.url
                    }
                    className="text-dark"
                    key={'anzeige-link-' + i}
                    onClick={() => {
                      handleViewJobOfferClick(anzeige.node.titel)
                    }}
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
            })}
        </div>
      )
    } else {
      return (
        <a
          className="text-dark d-block padding-sm-bottom"
          target="_blank"
          rel="noopener"
          href="https://recruitingapp-2586.umantis.com/Vacancies/297/Application/CheckLogin/1?lang=ger"
        >
          <p className="no-margin-bottom text-left padding-sm-bottom">
            Dass wir hier aktuell keinen Job ausgeschrieben haben, bedeutet
            nicht, dass wir Dich nicht kennenlernen möchten.
          </p>
          <p className="text-primary no-margin-bottom d-flex justify-content-between">
            Schick uns gerne gleich Deine Initiativbewerbung! <span>></span>
          </p>
        </a>
      )
    }
  }
}

export default CarrerOfferBox
