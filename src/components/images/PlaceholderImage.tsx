import React from 'react';

interface Props {
  source: any;
  styleClasses?: any;
  overlayElement?: any;
}

class PlaceholderImage extends React.Component<Props> {
  render() {
    const { source, styleClasses, overlayElement } = this.props;

    return (
      <div>
        <img
          src={`https://via.placeholder.com/${source.width}x${source.height}`}
          className={`img-fluid ${styleClasses}`}
          alt="Responsive image"
        />
        <div className={`image-overlay-top-left ${styleClasses}`}>{overlayElement}</div>
      </div>
    );
  }
}

export default PlaceholderImage;
