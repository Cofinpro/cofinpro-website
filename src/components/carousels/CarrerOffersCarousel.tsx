import React from 'react';
import PubSub from 'pubsub-js';

import CarrerOfferPreview from '../CarrerOfferPreview';
import CarrerOfferPreviewFallback from '../CarrerOfferPreviewFallback';
import CarouselControlPrevNext from '../CarouselControlPrevNext';
import StorageHelper from 'utils/storageHelper';

import './CarrerOffersCarousel';

interface Props {
  id: string;
  itemPerSlideLimiter: any;
  blacklistedItem: any;
  itemsData: any[];
  perspective?: string;
}

interface State {
  perspektive: any;
}

class CarrerOffersCarousel extends React.Component<Props, State> {
  private token: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      perspektive: StorageHelper.getFromSessionStorage('perspective'),
    };
  }

  componentWillMount() {
    this.token = PubSub.subscribe('perspectiveChange', this.subscriber.bind(this));
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  subscriber(data: any) {
    if (this.state.perspektive !== data) {
      this.setState({
        perspektive: data,
      });
    }
  }

  render() {
    const { id, itemPerSlideLimiter, blacklistedItem } = this.props;

    // tslint:disable-next-line:function-name
    function CarouselInner(props: Props) {
      const itemsData = props.itemsData;
      const perspective = props.perspective;

      const buckets = [];
      let tempBucket = [];

      // tslint:disable-next-line:no-increment-decrement
      for (let i = 0; i < itemsData.length; i++) {
        // tslint:disable-next-line:no-increment-decrement
        for (let j = 0; j < itemsData[i].node.zuordnungZuKompetenzen.length; ++j) {
          if (perspective == null || perspective.trim().length < 1 || itemsData[i].node.zuordnungZuKompetenzen[j].name === perspective) {
            if (blacklistedItem == null || blacklistedItem !== itemsData[i].node.id) {
              tempBucket.push(itemsData[i]);
            }
          }
        }

        if (
          (tempBucket.length > 0 && tempBucket.length % itemPerSlideLimiter === 0) ||
          (i + 1 === itemsData.length && tempBucket.length > 0)
        ) {
          buckets.push(tempBucket);
          tempBucket = [];
        }
      }

      if (buckets.length > 0) {
        return (
          <div id={`${id}_carouselCaptions`} className="carousel slide jobs-bewerbung-carousel" data-interval="false" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target={`#${id}_carouselCaptions`} data-slide-to="0" className="" />
              <li data-target={`#${id}_carouselCaptions`} data-slide-to="1" className="" />
              <li data-target={`#${id}_carouselCaptions`} data-slide-to="2" className="active" />
            </ol>

            <div className="carousel-inner">
              {buckets.map((innerBuckets, index) => {
                return (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="carousel-item-content row text-dark" key={index}>
                      {innerBuckets.map((dataItem, index2) => {
                        return (
                          <div className="col-12 col-md-6 col-lg-4" key={index + index2}>
                            <CarrerOfferPreview
                              title={dataItem.node.titel}
                              employmentType={dataItem.node.art}
                              expiration={dataItem.node.befristung}
                              locationEmployee={dataItem.node.ort}
                              anzeigeId={dataItem.node.url}
                              {...props}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <CarouselControlPrevNext sliderId={`${id}_carouselCaptions`} />
          </div>
        );
      }

      return (
        <div>
          <div className="row justify-content-center padding-sm-top padding-md-bottom">
            <div className="col-12 col-md-6 col-lg-4">
              <CarrerOfferPreviewFallback borderStyle="secondary" {...props} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <CarouselInner perspective={this.state.perspektive} {...this.props} />
      </div>
    );
  }
}

export default CarrerOffersCarousel;
