import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import PubSub from 'pubsub-js'

import './style.scss'

import CarrerOfferPreview from '../CarrerOfferPreview'

import StorageHelper from '../../utils/storageHelper'

class CarrerOffersCarousel extends React.Component {
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
      itemPerSlideLimiter,
      itemsData,
      perspective,
      location,
      blacklistedItem,
    } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    function CarouselInner(props) {
      var itemsData = props.itemsData
      var perspective = props.perspective

      var buckets = []
      var tempBucket = []

      for (var i = 1; i < itemsData.length; i++) {
        if (
          perspective == null ||
          perspective.trim().length < 1 ||
          itemsData[i - 1].node.perspektiveLink.name === perspective
        ) {
          if (
            blacklistedItem == null ||
            blacklistedItem !== itemsData[i - 1].node.id
          ) {
            tempBucket.push(itemsData[i - 1])
          }
        }

        if (
          (tempBucket.length > 0 &&
            tempBucket.length % itemPerSlideLimiter === 0) ||
          (i + 1 === itemsData.length && tempBucket.length > 0)
        ) {
          buckets.push(tempBucket)
          tempBucket = []
        }
      }
      console.log(buckets)

      return (
        <div className="carousel-inner">
          {buckets.map((innerBuckets, i) => {
            return (
              <div
                className={'carousel-item ' + (i === 0 ? 'active' : '')}
                key={i}
              >
                <div className="carousel-item-content row text-dark" key={i}>
                  {innerBuckets.map((dataItem, j) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4" key={i + j}>
                        <CarrerOfferPreview
                          title={dataItem.node.titel}
                          employmentType={dataItem.node.art}
                          expiration={dataItem.node.befristung}
                          locationEmployee={dataItem.node.ort}
                          anzeigeId={dataItem.node.url}
                          {...props}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <div
        id={id + '_carouselCaptions'}
        className="carousel slide jobs-bewerbung-carousel"
        data-interval="false"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target={'#' + id + '_carouselCaptions'}
            data-slide-to="0"
            className=""
          />
          <li
            data-target={'#' + id + '_carouselCaptions'}
            data-slide-to="1"
            className=""
          />
          <li
            data-target={'#' + id + '_carouselCaptions'}
            data-slide-to="2"
            className="active"
          />
        </ol>

        <CarouselInner perspective={this.state.perspektive} {...this.props} />

        <a
          className="carousel-control-prev"
          href={'#' + id + '_carouselCaptions'}
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left text-primary" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={'#' + id + '_carouselCaptions'}
          role="button"
          data-slide="next"
        >
          <i className="fa fa-chevron-right text-primary" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default CarrerOffersCarousel
