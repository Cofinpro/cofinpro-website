import React from 'react';
import PubSub from 'pubsub-js';

import LinkButton from './buttons/LinkButton';
import CarrerOffersCarousel from './carousels/CarrerOffersCarousel';
import StorageHelper from '../utils/storageHelper';

interface Props {
  titel: string;
  stellenAnzeigen: any;
  buttonText: string;
  blacklistedItem?: any;
}

interface State {
  perspektive: string;
}

class CarrerOfferCarouselBox extends React.Component<Props, State> {
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

  subscriber(msg: any, data: any) {
    if (this.state.perspektive !== data) {
      this.setState({
        perspektive: data,
      });
    }
  }

  render() {
    const { titel, stellenAnzeigen, buttonText, blacklistedItem } = this.props;

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
            <LinkButton text={buttonText} path="/karriere/jobs" />
          </div>
        </div>
      </div>
    );
  }
}

export default CarrerOfferCarouselBox;
