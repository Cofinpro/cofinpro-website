import React from 'react';

import ContentfulImage from './ContentfulImage';
import BootstrapImage from './BootstrapImage';
import SharpImage from './SharpImage';
import PlaceholderImage from './PlaceholderImage';
import { SharpImage as SharpImageModel } from 'models/SharpImage';

import './ImageWrapper.scss';

export enum SourceTyp {
  'Contentful',
  'Sharp',
  'Bootstrap',
  'Placeholder',
  'Icon',
}

interface Image2 {
  sizes: {
    aspectRatio: number;
    base64: string;
    sizes: string;
    src: string;
    srcSet: string;
  };
}

interface Image3 {
  width: number;
  height: number;
}

interface Props {
  source: SharpImageModel | Image2 | Image3 | string;
  sourceType: SourceTyp;
  backgroundOverlay?: any;
  overlayElement?: any;
  styleClasses?: any;
  style?: any;
}

export class ImageWrapper extends React.Component<Props> {
  render() {
    const { source, sourceType, styleClasses } = this.props;

    switch (sourceType) {
      case SourceTyp.Contentful:
        return <ContentfulImage imageFile={source} styleClasses={styleClasses} />;
      case SourceTyp.Sharp:
        return <SharpImage {...this.props} />;
      case SourceTyp.Bootstrap:
        return <BootstrapImage {...this.props} />;
      case SourceTyp.Placeholder:
        return <PlaceholderImage {...this.props} />;
      case SourceTyp.Icon:
        // tslint:disable-next-line:prettier
        // return <IconImage {...this.props} />;
        throw new Error('Brauchen wir IconImage noch?');
      default:
        return null;
    }
  }
}

export default ImageWrapper;
