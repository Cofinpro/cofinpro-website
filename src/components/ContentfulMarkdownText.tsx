import React from 'react';
import { MarkdownPreview } from 'react-marked-markdown';

interface Props {
  text: string;
  styleClasses?: string;
}

class ContentfulMarkdownText extends React.Component<Props> {
  render() {
    const { text, styleClasses } = this.props;

    return <MarkdownPreview className={styleClasses} value={text} />;
  }
}

export default ContentfulMarkdownText;
