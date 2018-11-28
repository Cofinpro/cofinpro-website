import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import ContentfulMarkdownText from '../ContentfulMarkdownText';
import ToggleButton from '../buttons/ToggleButton';
import { ContentWithImage } from 'models/ContentWithImage';

interface Props {
  id: string;
  content: ContentWithImage;
}

class ImageTitleCollapseTextLayout extends React.Component<Props> {
  render() {
    const { id, content } = this.props;

    return (
      <div>
        <ImageWrapper source={content.image} sourceType={SourceTyp.Sharp} styleClasses="margin-20-bottom" />
        <div className="row">
          <div className="col-9">
            <p className="h5">
              {content.title} <br />
            </p>
            <p className="h6">{content.subtitle}</p>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <ToggleButton id={id} dataTarget={`toggleMitgliedBeschreibung${id}`} style="align-self-start" />
          </div>
        </div>

        <div className="collapse" id={`toggleMitgliedBeschreibung${id}`}>
          <ContentfulMarkdownText text={content.text} />
        </div>
      </div>
    );
  }
}

export default ImageTitleCollapseTextLayout;
