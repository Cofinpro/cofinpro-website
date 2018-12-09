import React from 'react';
import { Link } from 'gatsby';

import { ImageWrapper, SourceTyp } from './ImageWrapper';

interface Props {
  content: any;
  images: any;
  indexOfElelement: any;
}

class PreviewImageInternal extends React.Component<Props> {
  render() {
    const { content, images, indexOfElelement } = this.props;

    if (content.length > indexOfElelement) {
      return (
        <Link className="text-dark" to={content[indexOfElelement].to}>
          <ImageWrapper
            sourceType={SourceTyp.Sharp}
            source={images[indexOfElelement]}
            overlayElement={
              <div className="text-underline">
                <h3 className="h4 d-none d-lg-block no-margin bold-font">{content[indexOfElelement].header}</h3>
                <p className="h5 d-block d-lg-none no-margin bold-font">{content[indexOfElelement].header}</p>
                {content[indexOfElelement].subHeader !== undefined && (
                  <p className="text-sm-small">{content[indexOfElelement].subHeader}</p>
                )}
              </div>
            }
          />
        </Link>
      );
    }

    return null;
  }
}

export default PreviewImageInternal;
