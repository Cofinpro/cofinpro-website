import React from 'react'
import PubSub from 'pubsub-js'

import './style.scss'

import CarrerOfferPreview from '../../CarrerOfferPreview'
import CarrerOfferPreviewFallback from '../../CarrerOfferPreviewFallback'

import CarouselControlPrevNext from '../../bootstrap-custom/CarouselControlPrevNext'

import StorageHelper from '../../../utils/storageHelper'

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

      for (var i = 0; i < itemsData.length; i++) {
        for (
          var j = 0;
          j < itemsData[i].node.zuordnungZuKompetenzen.length;
          ++j
        ) {
          if (
            perspective == null ||
            perspective.trim().length < 1 ||
            itemsData[i].node.zuordnungZuKompetenzen[j].name === perspective
          ) {
            if (
              blacklistedItem == null ||
              blacklistedItem !== itemsData[i].node.id
            ) {
              tempBucket.push(itemsData[i])
            }
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

      if (buckets.length > 0) {
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

            <div className="carousel-inner">
              {buckets.map((innerBuckets, i) => {
                return (
                  <div
                    className={'carousel-item ' + (i === 0 ? 'active' : '')}
                    key={i}
                  >
                    <div
                      className="carousel-item-content row text-dark"
                      key={i}
                    >
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
            <CarouselControlPrevNext sliderId={id + '_carouselCaptions'} />
          </div>
        )
      } else {
        return (
          <div>
            <div className="row justify-content-center padding-sm-top padding-md-bottom">
              <div className="col-12 col-md-6 col-lg-4">
                <CarrerOfferPreviewFallback
                  borderStyle="secondary"
                  {...props}
                />
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        <CarouselInner perspective={this.state.perspektive} {...this.props} />
      </div>
    )
  }
}

export default CarrerOffersCarousel
