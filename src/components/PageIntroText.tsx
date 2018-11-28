import React from 'react';

import ContentfulMarkdownText from './ContentfulMarkdownText';

interface Props {
  content: {
    text: string;
  };
  style?: {
    container: string;
  };
}

class PageIntroText extends React.Component<Props> {
  render() {
    const { content, style } = this.props;

    return (
      <div className={style !== undefined ? style.container : ''}>
        <ContentfulMarkdownText text={content.text} styleClasses="h4 normal-font d-none d-lg-block margin-20-top no-margin" />
        <ContentfulMarkdownText text={content.text} styleClasses="h5 normal-font d-none d-md-block d-lg-none margin-20-top no-margin" />
        <ContentfulMarkdownText text={content.text} styleClasses="d-block normal-font d-md-none margin-20-top no-margin" />
      </div>
    );
  }
}

export default PageIntroText;
