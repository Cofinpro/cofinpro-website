import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { ContentWithColumns } from 'models/ContentWithColumns';

interface Props {
  content: ContentWithColumns;
  isHeaderCentered: boolean;
}

class FourFactsLayout extends React.Component<Props> {
  render() {
    const { content, isHeaderCentered } = this.props;

    const headerCssClass = isHeaderCentered ? 'text-center' : '';

    return (
      <div className="container margin-100-top">
        <div className="row">
          <div className={`col ${headerCssClass}`}>
            <h2>{content.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row text-center">
              {content.columns.map((column, index) => {
                return (
                  <div className="col-6 col-md-3" key={`four-facts-column-${index}`}>
                    <ImageWrapper source={column.icon} sourceType={SourceTyp.Contentful} styleClasses="img-fluid img-md-padding" />
                    <p className="display-4 text-info bold-font">{column.title}</p>
                    <p className="p-font-large-md">{column.text}</p>
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

export default FourFactsLayout;
