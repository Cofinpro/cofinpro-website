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

    for (let i = 0; i < content.news.length; i++) {
      let perspektiven = [];

      for (let j = 0; j < content.news[i].node.zugeordnetePerspektivenKompetenz.length; ++j) {
        perspektiven.push(content.news[i].node.zugeordnetePerspektivenKompetenz[j].name);
      }

      if (
        this.state.perspektive === null ||
        this.state.perspektive.trim().length < 1 ||
        perspektiven.indexOf(this.state.perspektive) > -1
      ) {
        if (filteredNews.length < 2) {
          filteredNews.push(content.news[i]);
        }
      }
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
            ? filteredNews.map((news, index) => {
                return (
                  <div className="col-12 col-md-5" key={'news-column-' + index}>
                    <NewsPreview
                      key={'news-NewsPreview-' + index}
                      createdAt={news.node.datumFuerDieAnzeige}
                      title={news.node.ueberschrift}
                      description={news.node.kurzeBeschreibung !== null ? news.node.kurzeBeschreibung.kurzeBeschreibung : null}
                      newsId={news.node.id}
                      imageFile={news.node.titelbild}
                      imageFileSharp={news.node.titelbildSharp}
                      url={news.node.url}
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