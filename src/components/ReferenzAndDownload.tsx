import React from 'react';

import LinkButton from './buttons/LinkButton';

import './ReferenzAndDownload.scss';

interface Props {
  content: {
    right: {
      header: string;
      description: string;
      button: {
        text: string;
        path: string;
      };
    };
    left: {
      header: string;
      description: string;
      button: {
        text: string;
        path: string;
      };
    };
  };
  style?: any;
}

class ReferenzAndDownload extends React.Component<Props> {
  render() {
    const { content, style } = this.props;

    const stylingContainer = style !== undefined ? style.container : '';

    return (
      <div>
        <div className={`container ${stylingContainer}`}>
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6">
              <h2 className="h2">{content.right.header}</h2>
              <p>{content.right.description}</p>
              <div className="row">
                <div className="col-md-8">
                  <LinkButton
                    path={content.right.button.path}
                    text={content.right.button.text}
                    styleSpan="btn-lg btn-block padding-button margin-10-top"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-120-top margin-80-top-xs">
            <div className="col-md-6">
              <h2 className="h2">{content.left.header}</h2>
              <p>{content.left.description}</p>
              <div className="row">
                <div className="col-md-8">
                  <LinkButton
                    path={content.left.button.path}
                    text={content.left.button.text}
                    styleSpan="btn-lg btn-block padding-button margin-100-bottom margin-10-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReferenzAndDownload;
