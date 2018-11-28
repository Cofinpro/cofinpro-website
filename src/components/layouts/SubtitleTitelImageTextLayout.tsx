import React from 'react';

import ContentfulMarkdownText from '../ContentfulMarkdownText';
import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { ContentWithImage } from 'models/ContentWithImage';

interface Props {
  content: ContentWithImage;
  style: {
    container: string;
    rowOne: string;
    rowTwo: string;
  };
}

class SubtitleTitelImageTextLayout extends React.Component<Props> {
  render() {
    const { content, style } = this.props;

    return (
      <div className={style ? `container ${style.container}` : 'container'}>
        <div className={style ? `row ${style.rowOne}` : 'row'}>
          <div className="col-12 col-md-8">
            <h2 className="h6">{content.subtitle}</h2>
            <h3 className="h2">{content.title}</h3>
            <ImageWrapper source={content.image} sourceType={SourceTyp.Sharp} />
          </div>
          <div className="col-12 col-md-1" />
        </div>
        <div className={style ? `row ${style.rowTwo}` : 'row'}>
          <div className="col-12 col-md-6 col-lg-5">
            <ContentfulMarkdownText text={content.text} {...this.props} />
          </div>
          <div className="col-12 col-md-3 col-lg-4" />
        </div>
      </div>
    );
  }
}

export default SubtitleTitelImageTextLayout;
