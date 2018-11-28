import React from 'react';
import LinkButton from './buttons/LinkButton';

import './FooterNavigation.scss';

interface Props {
  backButtonPath: string;
}

class FooterNavigation extends React.Component<Props> {
  render() {
    const { backButtonPath } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row margin-100-top footer-navigation">
            <div className="col-3">
              <div className="justify-content-start">
                <LinkButton text="ZURÜCK" styleSpan="btn-lg btn-block padding-button" path={backButtonPath} />
              </div>
            </div>
            <div className="col-6" />
            <div className="col-3">
              <div className="justify-content-end">
                <LinkButton text="SHARE" styleSpan="btn-lg btn-block padding-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterNavigation;
