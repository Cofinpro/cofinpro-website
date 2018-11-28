import React from 'react';

import ContentfulMarkdownText from '../ContentfulMarkdownText';
import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { ContentWithTwoImages } from 'models/ContentWithTwoImages';

interface Props {
  content: ContentWithTwoImages;
  style: {
    container: string;
  };
}

class SubtitleTitelTwoImagesTextLayout extends React.Component<Props> {
  render() {
    const { content, style } = this.props;

    return (
      <div className={style ? `container ${style.container}` : 'container'}>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            {content.subtitle !== undefined && <h2 className="h6">{content.subtitle}</h2>}
            <h3 className="h2">{content.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <ImageWrapper source={content.imageLeft} sourceType={SourceTyp.Sharp} />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-block d-md-none margin-20-top" />
            <ImageWrapper source={content.imageRight} sourceType={SourceTyp.Sharp} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 col-lg-5 offset-lg-1">
            <ContentfulMarkdownText text={content.text} styleClasses="margin-20-top" />
          </div>
        </div>
      </div>
    );
  }
}

export default SubtitleTitelTwoImagesTextLayout;
