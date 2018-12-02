import React from 'react';
import PubSub from 'pubsub-js';

import StorageHelper from '../utils/storageHelper';
import NewsPreview from './NewsPreview';
import LinkButton from './buttons/LinkButton';

interface Props {
  content: any;
}

interface State {
  perspektive: any;
}

class NewsPreviewNewest extends React.Component<Props, State> {
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
    const { content } = this.props;

    let filteredNews = [];

    if (this.state.perspektive === null || this.state.perspektive.trim().length < 1) {
      filteredNews = content.news.slice(0, 1).map((x: any) => x.node);
    } else {
      filteredNews = content.news
        .filter((x: any) => x.node.zugeordnetePerspektivenKompetenz.some((y: any) => y.name === this.state.perspektive))
        .slice(0, 1)
        .map((x: any) => x.node);
    }

    return (
      <div className="container margin-120-top">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            {content.untertitel !== null ? <h2 className="h6">{content.untertitel}</h2> : null}
            <h3 className="h2">{content.titel}</h3>
            {content.beschreibung !== null ? (
              <p className="margin-20-bottom d-block w-100 d-lg-none p-font-large-md">{content.beschreibung}</p>
            ) : null}
            {content.beschreibung !== null ? (
              <p className="margin-20-bottom d-none d-lg-block w-75 p-font-large-md">{content.beschreibung}</p>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-1" />
          {filteredNews.length > 0
            ? filteredNews.map((news: any, index: number) => {
                return (
                  <div className="col-12 col-md-5" key={`news-column-${index}`}>
                    <NewsPreview
                      key={`news-NewsPreview-${index}`}
                      createdAt={news.datumFuerDieAnzeige}
                      title={news.ueberschrift}
                      description={news.kurzeBeschreibung !== null ? news.kurzeBeschreibung.kurzeBeschreibung : null}
                      // TODO: newsId={news.id} *is not used*
                      imageFile={news.titelbild}
                      imageFileSharp={news.titelbildSharp}
                      url={news.url}
                      {...this.props}
                    />
                  </div>
                );
              })
            : null}
          <div className="col-12 col-md-1" />
        </div>
        <div className="row margin-40-top">
          <div className="col-12 col-md-10 mx-auto">
            <LinkButton text="ZUR PINNWAND" path="/karriere/pinnwand" {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPreviewNewest;
