import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { ContentWithColumns } from 'models/ContentWithColumns';

interface Props {
  content: ContentWithColumns;
  isHeaderCentered: boolean;
}

class FourFactsSmallLayout extends React.Component<Props> {
  render() {
    const { content } = this.props;

    return (
      <div className="row text-center">
        {content.columns.map((column, index) => {
          return (
            <div className="col-6" key={`four-facts-column-${index}`}>
              <ImageWrapper source={column.icon} sourceType={SourceTyp.Contentful} styleClasses="img-fluid img-md-padding" />
              <p className="display-4 text-info bold-font">{column.title}</p>
              <p className="p-font-large-md">{column.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FourFactsSmallLayout;
