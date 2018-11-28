import React from 'react';
import Img from 'gatsby-image';

import HeroImageLayout from 'components/layouts/HeroImageLayout';
import ContentfulMarkdownText from 'components/ContentfulMarkdownText';
import HtmlHeader from 'components/HtmlHeader';
import LinkButton from 'components/buttons/LinkButton';

interface Props {
  pathContext: any;
}

class NewsTemplate extends React.Component<Props> {
  render() {
    const news = this.props.pathContext.news.node;

    return (
      <div>
        <HtmlHeader dataFromCms={news.metaData} {...this.props} />

        <HeroImageLayout title={news.ueberschrift} imageFile={news.titelbild} titleImage={news.titelbildSharp} isOverlayActive={true} />

        <div className="container padding-sm-top-bottom">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <p className="margin-40-top">{news.datumFuerDieAnzeige}</p>
              <ContentfulMarkdownText text={news.absatz1 !== null ? news.absatz1.absatz1 : ''} {...this.props} />
              {news.newsBildSharp !== undefined && news.newsBildSharp !== null ? (
                <Img sizes={news.newsBildSharp.sizes} className="margin-20-bottom" />
              ) : null}
              <ContentfulMarkdownText text={news.absatz2 !== null ? news.absatz2.absatz2 : ''} {...this.props} />
              <LinkButton text="ZUR PINNWAND" path="/karriere/pinnwand" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsTemplate;
