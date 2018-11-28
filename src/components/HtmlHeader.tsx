import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  dataFromCms?: any;
  direktData?: any;
}

class HtmlHeader extends React.Component<Props> {
  getCurrentUrl(): string {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }

    return '';
  }

  render() {
    const { dataFromCms, direktData } = this.props;

    let title;
    let description;
    let keywords;

    if (dataFromCms !== undefined) {
      title = dataFromCms.title;
      description = dataFromCms.description !== null ? dataFromCms.description.description : null;
      keywords = dataFromCms.keywords !== null ? dataFromCms.keywords.keywords : null;
    }

    if (direktData !== undefined) {
      title = direktData.title;
      description = direktData.description;
      keywords = direktData.keywords;
    }

    return (
      <div>
        <Helmet
          title={title}
          link={[
            {
              rel: 'canonical',
              href: this.getCurrentUrl(),
            },
          ]}
          meta={[
            {
              name: 'Description',
              content: `${description}`,
            },
            {
              property: 'og:title',
              content: `${title}`,
            },
            {
              name: 'keywords',
              content: `${keywords}`,
            },
            {
              property: 'og:description',
              content: `${description}`,
            },
          ]}
        />
      </div>
    );
  }
}

export default HtmlHeader;
