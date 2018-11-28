import React from 'react';

interface Props {
  source: any;
  styleClasses: any;
  overlayElement: any;
}

class BootstrapImage extends React.Component<Props> {
  render() {
    const { source, styleClasses, overlayElement } = this.props;

    return (
      <div className="position-relative">
        <img src={source} className={styleClasses == null ? 'img-fluid' : styleClasses} />
        {overlayElement !== undefined && <div className={'image-overlay-top-left'}>{overlayElement}</div>}
      </div>
    );
  }
}

export default BootstrapImage;
