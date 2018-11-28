import React from 'react';
import Link from 'gatsby-link';

import ContentfulMarkdownText from '../ContentfulMarkdownText';

import './LinkButtonV2.scss';

interface Props {
  text: string;
  path: string;
  child: any;
  styleContainer?: string;
}

class LinkButtonV2 extends React.Component<Props> {
  render() {
    const { text, path, child, styleContainer } = this.props;

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <Link to={path !== undefined ? path : '#'} className={`link-button-v2 ${styleContainer}`}>
        <img alt="Link Icon" src={`${pathPrefix}/svg/icon_arrow_dotted_right.svg`} className="link-icon-arrow-right" />
        <div className="d-flex flex-column">
          <ContentfulMarkdownText text={text} styleClasses="link-button-v2__text h5 bold-font no-margin margin-20-left" />
          {child}
        </div>
      </Link>
    );
  }
}

export default LinkButtonV2;
