import React from 'react';
import Img from 'gatsby-image';

interface Style {
  container: string;
  border: string;
  overlay: string;
}

interface Props {
  source: any;
  style?: Style;
  styleClasses?: any;
  overlayElement?: any;
  backgroundOverlay?: any;
}

class SharpImage extends React.Component<Props> {
  render() {
    const { source, style, styleClasses, overlayElement, backgroundOverlay } = this.props;

    let styleT = {} as Style;
    if (typeof style !== 'undefined') {
      styleT = style;
    }

    return (
      <div className={`image-container ${styleT.container !== undefined ? styleT.container : ''}`}>
        <div className={`svg-image position-relative ${styleT.border}`}>
          <Img sizes={source.sizes} className={styleClasses} />
          {backgroundOverlay}
          {overlayElement !== undefined && <div className={`image-overlay-top-left ${styleT.overlay}`}>{overlayElement}</div>}
        </div>
      </div>
    );
  }
}

export default SharpImage;
