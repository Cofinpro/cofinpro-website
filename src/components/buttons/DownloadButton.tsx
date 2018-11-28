import React from 'react';

import ContentfulMarkdownText from '../ContentfulMarkdownText';

import './DownloadButton.scss';

interface Props {
  text: string;
  _href: string;
  styleContainer?: string;
}

class DownloadButton extends React.Component<Props> {
  render() {
    const { text, _href, styleContainer } = this.props;

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <a href={_href !== undefined ? _href : '#'} target="_blank" rel="noopener" className={`download-button ${styleContainer}`}>
        <img alt="Download" src={`${pathPrefix}/svg/download arrow.svg`} />
        <ContentfulMarkdownText text={text} styleClasses="download-button__text h5 bold-font no-margin margin-20-left" />
      </a>
    );
  }
}

export default DownloadButton;
