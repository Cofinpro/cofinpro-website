import React from 'react';
import { Link } from 'gatsby';

import { ImageWrapper, SourceTyp } from './images/ImageWrapper';

interface Props {
  content: {
    header: string;
    subHeader: string;
    image: any;
    url: string;
    linkType: string;
    date: any;
    publishedBy: string;
    intro: any;
  };
}

class NewsMedienPreview extends React.Component<Props> {
  render() {
    const { content } = this.props;

    const DATE_OPTIONS = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };

    // tslint:disable-next-line:function-name
    function InnerContent(props: Props) {
      return (
        <ImageWrapper
          sourceType={SourceTyp.Sharp}
          source={props.content.image}
          overlayElement={
            <div className="text-underline">
              <h3 className="h4 d-none d-lg-block no-margin bold-font">{props.content.header}</h3>
              <p className="h5 d-block d-lg-none no-margin bold-font">{props.content.header}</p>
              {props.content.subHeader !== undefined && <p className="text-sm-small">{props.content.subHeader}</p>}
            </div>
          }
        />
      );
    }

    return (
      <div className="row">
        <div className="col-12">
          {content.linkType === 'external' && (
            <a className="text-dark" href={content.url} target="_blank" rel="noopener">
              <InnerContent content={content} />
            </a>
          )}
          {content.linkType === 'internal' && (
            <Link className="text-dark" to={content.url}>
              <InnerContent content={content} />
            </Link>
          )}
        </div>
        <div className="col-12 margin-20-top">
          <p className="h5 bold-font">
            {new Date(content.date).toLocaleDateString('de-DE', DATE_OPTIONS)}
            {content.publishedBy !== undefined && content.publishedBy !== null && <span> - {content.publishedBy}</span>}
          </p>
        </div>
        <div className="col-12">
          <Link to={content.url} className="text-dark">
            {content.intro}
            {'... '}
          </Link>
          <Link to={content.url}>></Link>
        </div>
      </div>
    );
  }
}

export default NewsMedienPreview;
