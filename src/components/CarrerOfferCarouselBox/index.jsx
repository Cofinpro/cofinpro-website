import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PubSub from 'pubsub-js'

import CarrerOfferPreview from '../CarrerOfferPreview'
import LinkButton from '../buttons/LinkButton'

import CarrerOffersCarousel from '../CarrerOffersCarousel'

import StorageHelper from '../../utils/storageHelper'

class CarrerOfferCarouselBox extends React.Component {
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
    const {
      id,
      titel,
      stellenAnzeigen,
      buttonText,
      blacklistedItem,
    } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="row">
          <div className="col text-center">
            <p className="h3">{titel}</p>
          </div>
        </div>

        <div className="row">
          <div className="col d-block d-md-none">
            <CarrerOffersCarousel
              id="jobs_sm"
              itemPerSlideLimiter="1"
              itemsData={stellenAnzeigen}
              blacklistedItem={blacklistedItem}
              {...this.props}
            />
          </div>
          <div className="col d-none d-md-block d-lg-none">
            <CarrerOffersCarousel
              id="jobs_md"
              itemPerSlideLimiter="2"
              itemsData={stellenAnzeigen}
              blacklistedItem={blacklistedItem}
              {...this.props}
            />
          </div>
          <div className="col d-none d-lg-block">
            <CarrerOffersCarousel
              id="jobs_lg"
              itemPerSlideLimiter="3"
              itemsData={stellenAnzeigen}
              blacklistedItem={blacklistedItem}
              {...this.props}
            />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <LinkButton text={buttonText} path="/jobs" />
          </div>
        </div>
      </div>
    )
  }
}

export default CarrerOfferCarouselBox
