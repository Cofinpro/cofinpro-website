import React from 'react';

import ContentfulMarkdownText from './ContentfulMarkdownText';

interface Props {
  title: string;
  subtitle: string;
  text1: string;
  text2: string;
  titleTag?: string;
  subtitleTag?: string;
}

class SiteHeaderContent extends React.Component<Props> {
  getTitleElement(titleTag: string | undefined, title: string) {
    if (titleTag === undefined) {
      return null;
    }

    switch (titleTag) {
      case 'h1':
        return <h1 className="h2 margin-sm-bottom">{title}</h1>;
      case 'h2':
        return <h2 className="h2 margin-sm-bottom">{title}</h2>;
      case 'h3':
        return <h3 className="h2 margin-sm-bottom">{title}</h3>;
      case 'h4':
        return <h4 className="h2 margin-sm-bottom">{title}</h4>;
      case 'h5':
        return <h5 className="h2 margin-sm-bottom">{title}</h5>;
      case 'h6':
        return <h6 className="h2 margin-sm-bottom">{title}</h6>;
      default:
        return <h2 className="h2 margin-sm-bottom">{title}</h2>;
    }
  }

  getSubTitleElement(subtitleTag: string | undefined, subtitle: string) {
    if (subtitleTag === undefined) {
      return null;
    }

    switch (subtitleTag) {
      case 'h1':
        return <h1 className="h6 normal-font">{subtitle}</h1>;
      case 'h2':
        return <h2 className="h6 normal-font">{subtitle}</h2>;
      case 'h3':
        return <h3 className="h6 normal-font">{subtitle}</h3>;
      case 'h4':
        return <h4 className="h6 normal-font">{subtitle}</h4>;
      case 'h5':
        return <h5 className="h6 normal-font">{subtitle}</h5>;
      case 'h6':
        return <h6 className="h6 normal-font">{subtitle}</h6>;
      default:
        return <h1 className="h6 normal-font">{subtitle}</h1>;
    }
  }

  render() {
    const { title, subtitle, text1, text2, titleTag, subtitleTag } = this.props;

    return (
      <div className="container margin-60-top">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            {this.getSubTitleElement(subtitleTag, subtitle)}
            {this.getTitleElement(titleTag, title)}
            <ContentfulMarkdownText styleClasses="p-font-large-lg" text={text1} />
            <ContentfulMarkdownText styleClasses="p-font-large-lg" text={text2} />
          </div>
        </div>
      </div>
    );
  }
}

export default SiteHeaderContent;
