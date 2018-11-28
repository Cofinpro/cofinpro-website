import React from 'react';

import ContentfulMarkdownText from 'components/ContentfulMarkdownText';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  content: {
    text: string;
    orderText: string;
    orderPicture: string;
    image: SharpImage;
  };
  style: {
    container: string;
  };
}

class ContentMaxParagraph extends React.Component<Props> {
  render() {
    const { content, style } = this.props;

    return (
      <div className={`container ${style.container}`}>
        <div className="row">
          <div className={`col-12 col-md-6 ${content.orderText}`}>
            {content.text !== undefined && content.text !== null && <ContentfulMarkdownText text={content.text} />}
          </div>
          <div className={`col-12 col-md-6 ${content.orderPicture}`}>
            {content.image !== undefined &&
              content.image !== null && (
                <ImageWrapper sourceType={SourceTyp.Sharp} source={content.image} styleClasses="news-media-paragraph" />
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentMaxParagraph;
