import React from 'react';

import './CarrerOfferPreviewFallback.scss';

interface Props {
  borderStyle: string;
}

class CarrerOfferPreviewFallback extends React.Component<Props> {
  render() {
    const borderStyle = this.props.borderStyle;

    return (
      <div>
        <div className={`preview-fallback-box border-${borderStyle}`}>
          <div className="fallback-text-container">
            <a
              className="text-dark d-block"
              target="_blank"
              rel="noopener"
              href="https://recruitingapp-2586.umantis.com/Vacancies/297/Application/CheckLogin/1?lang=ger"
            >
              <p className="no-margin-bottom text-left padding-sm-bottom">
                Dass wir hier aktuell keinen Job ausgeschrieben haben, bedeutet nicht, dass wir Dich nicht kennenlernen möchten.
              </p>
              <p className="text-primary no-margin-bottom d-flex justify-content-between">
                Schick uns gerne gleich Deine Initiativbewerbung! <span>></span>
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CarrerOfferPreviewFallback;
