import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import ContentfulMarkdownText from '../ContentfulMarkdownText';
import { ContentWithColumns } from 'models/ContentWithColumns';

interface Props {
  content: ContentWithColumns;
  isHeaderCentered: boolean;
}

class FourIconsWithTextLayout extends React.Component<Props> {
  render() {
    const { content } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row text-center">
              {content.columns.map((column, index) => {
                return (
                  <div className="col-6 col-md-3" key={`four-icons-column-${index}`}>
                    <ImageWrapper source={column.icon} sourceType={SourceTyp.Contentful} styleClasses="img-fluid img-md-padding" />
                    <p className="p-font-large-md">{column.title}</p>
                    <ContentfulMarkdownText text={column.text} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourIconsWithTextLayout;
