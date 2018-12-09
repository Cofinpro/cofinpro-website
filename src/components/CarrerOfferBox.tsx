import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'gatsby';
import PubSub from 'pubsub-js';

import StorageHelper from '../utils/storageHelper';

import './CarrerOfferBox.scss';

interface Props {
  anzeigen: any[];
}

interface State {
  perspektive: string;
}

class CarrerOfferBox extends React.Component<Props, State> {
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
    const { anzeigen } = this.props;

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    function handleViewJobOfferClick(jobTitle: string) {
      ReactGA.event({
        category: 'Navigation',
        action: 'View job offer',
        label: `User is navigating to job offer: ${jobTitle}`,
      });
    }

    let buckets = [];
    if (this.state.perspektive == null || this.state.perspektive.trim().length < 1) {
      buckets = anzeigen.map((x: any) => x.node);
    } else {
      buckets = anzeigen
        .filter((x: any) => x.node.zuordnungZuKompetenzen.some((y: any) => y.name === this.state.perspektive))
        .map((x: any) => x.node);
    }

    if (buckets.length > 0) {
      return (
        <div className="carrer-offer-box">
          {buckets.length > 0 &&
            buckets.map((anzeige, index) => {
              if (index < 3) {
                return (
                  <Link
                    to={`${pathPrefix}/karriere/stellenanzeige/${anzeige.url}`}
                    className="text-dark"
                    key={`anzeige-link-${index}`}
                    onClick={() => {
                      handleViewJobOfferClick(anzeige.titel);
                    }}
                  >
                    <div className="row padding-sm-top" key={`anzeige-row-${index}`}>
                      <div className="col-10 col-md-10 col-lg-10" key={`anzeige-col-${index}`}>
                        <div className="" key={`anzeige-padding-${index}`}>
                          <p className="no-margin-bottom text-left" key={`anzeige-text-${index}`}>
                            {anzeige.titel}
                          </p>
                        </div>
                      </div>
                      <div className="col-2 col-md-2 col-lg-2 align-self-center" key={`anzeige-col-arrow-${index}`}>
                        <div className="text-primary" key={`anzeige-arrow-box-${index}`}>
                          <span className="h4 text-primary font-weight-bold stellenanzeige-link" key={`anzeige-arrow-box-icon-${index}`}>
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
        </div>
      );
    }

    return (
      <a
        className="text-dark d-block padding-sm-bottom"
        target="_blank"
        rel="noopener"
        href="https://recruitingapp-2586.umantis.com/Vacancies/297/Application/CheckLogin/1?lang=ger"
      >
        <p className="no-margin-bottom text-left padding-sm-bottom">
          Dass wir hier aktuell keinen Job ausgeschrieben haben, bedeutet nicht, dass wir Dich nicht kennenlernen möchten.
        </p>
        <p className="text-primary no-margin-bottom d-flex justify-content-between">
          Schick uns gerne gleich Deine Initiativbewerbung! <span>></span>
        </p>
      </a>
    );
  }
}

export default CarrerOfferBox;
