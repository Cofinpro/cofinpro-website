import React from 'react';
import Helmet from 'react-helmet';
import PubSub from 'pubsub-js';

import NewsPreview from 'components/NewsPreview';
import ToggleButton from 'components/buttons/ToggleButton';
import StorageHelper from 'utils/storageHelper';

import './pinnwand.scss';

interface Props {
  pageContext: {
    allNews: any[];
  };
}

interface State {
  perspektive: any;
}

class PinnwandTemplate extends React.Component<Props, State> {
  private readonly THRESHOLD = 8;
  private token: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      perspektive: StorageHelper.getFromSessionStorage('perspective'),
    };
  }

  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }

    return '';
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
    // TODO: slice directly oldNews and currentNews ;)
    const allNews = this.props.pageContext.allNews;
    const oldNewsExists = allNews.length > this.THRESHOLD;
    const threshold = this.THRESHOLD;

    let filteredNews = [];
    if (this.state.perspektive === null || this.state.perspektive.trim().length < 1) {
      filteredNews = allNews.map((x: any) => x.node);
    } else {
      filteredNews = allNews
        .filter((x: any) => x.node.zugeordnetePerspektivenKompetenz.some((y: any) => y.name === this.state.perspektive))
        .map((x: any) => x.node);
    }

    // tslint:disable-next-line:function-name
    function OldNews(props: any) {
      if (!props.oldNewsExists) {
        return null;
      }
      return (
        <div className="collapse" id="oldNewsContent">
          <div className="container">
            <div className="row">
              {props.allNews != null && props.allNews.length > 0
                ? props.allNews.map((edge: any, index: number) => {
                    if (index >= threshold) {
                      return (
                        <div className="col-12 col-md-6 margin-20-bottom" key={`news-column-old-${index}`}>
                          <NewsPreview
                            key={`news-NewsPreview-old-${index}`}
                            createdAt={edge.node.datumFuerDieAnzeige}
                            title={edge.node.ueberschrift}
                            description={edge.node.kurzeBeschreibung !== null ? edge.node.kurzeBeschreibung.kurzeBeschreibung : null}
                            newsId={edge.node.id}
                            imageFile={edge.node.titelbild}
                            imageFileSharp={edge.node.titelbildSharp}
                            url={edge.node.url}
                            {...props}
                          />
                        </div>
                      );
                    }

                    return null;
                  })
                : null}
            </div>
          </div>
        </div>
      );
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
              name: 'Description',
              content:
                'Hier findest Du Neues aus unserem Consulting, Fachartikel unserer Experten und alles, was wir unbedingt mit Dir teilen wollen.',
            },
            {
              property: 'og:title',
              content: 'News & Stories aus unserer Unternehmensberatung: Cofinpro',
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
              ? filteredNews.map((edge, index) => {
                  if (index < this.THRESHOLD) {
                    return (
                      <div className="col-12 col-md-6 margin-20-bottom" key={`news-column-${index}`}>
                        <NewsPreview
                          key={`news-NewsPreview-${index}`}
                          createdAt={edge.datumFuerDieAnzeige}
                          title={edge.ueberschrift}
                          description={edge.kurzeBeschreibung !== null ? edge.kurzeBeschreibung.kurzeBeschreibung : null}
                          // TODO: newsId={edge.id}
                          imageFile={edge.titelbild}
                          imageFileSharp={edge.titelbildSharp}
                          url={edge.url}
                          {...this.props}
                        />
                      </div>
                    );
                  }

                  return null;
                })
              : null}
          </div>
        </div>

        <OldNews oldNewsExists={oldNewsExists} allNews={filteredNews} {...this.props} />

        <div className={`container ${allNews.length <= this.THRESHOLD ? 'invisible' : ''}`}>
          <div className="row margin-md-top-bottom">
            <div className="col-12 text-center">
              <ToggleButton id="pinnwand" dataTarget={'oldNewsContent'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinnwandTemplate;
