import React from 'react';
import Link from 'gatsby-link';

import ContentfulMarkdownText from '../ContentfulMarkdownText';

interface Props {
  links: {
    text: string;
    path: string;
  }[];
  description: string;
  styleClass: any;
  urlPrefix: string;
}

class NavigationBeratungsfelder extends React.Component<Props> {
  render() {
    const { links, description, styleClass, urlPrefix } = this.props;
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    const listItems = links.map(link => (
      <div key={link.path} className="col-sm text-lg-center filter-button d-flex justify-content-center align-items-center">
        <p className="beratungsfelder-text text-size-14">
          <Link to={`${pathPrefix}/${urlPrefix}${link.path}`} activeClassName="active">
            {link.text}
          </Link>
        </p>
      </div>
    ));

    return (
      <div>
        <div className={`container filter ${styleClass}`}>
          <div className="row">
            <div className="col-12">
              <ContentfulMarkdownText text={description.toUpperCase()} />
            </div>
          </div>
        </div>
        <div className={'container'}>
          <div className="row d-none d-lg-flex justify-content-center filter-button-group">{listItems}</div>
          <div className="row d-flex d-lg-none">
            <div className="col-12 col-md-8 col-lg-12">
              <div className="div filter-button-group">{listItems}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBeratungsfelder;
