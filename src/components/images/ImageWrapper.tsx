import React from 'react';

import ContentfulImage from './ContentfulImage';
import BootstrapImage from './BootstrapImage';
import SharpImage from './SharpImage';
import IconImage from './IconImage';
import PlaceholderImage from './PlaceholderImage';
import { SharpImageFluid as SharpImageModel } from 'models/SharpImageFluid';

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

interface PlaceholderImageModel {
  width: number;
  height: number;
}

interface Props {
  source: SharpImageModel | Image2 | PlaceholderImageModel | string;
  sourceType: SourceTyp;
  backgroundOverlay?: any;
  overlayElement?: any;
  styleClasses?: any;
  style?: any;
  showOverlay?: boolean; // TODO: Gibt es eigenlitch garnicht! Sollten wir löschen!
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
        return <IconImage {...this.props} />;
      // throw new Error('Brauchen wir IconImage noch? ja...');
      default:
        return null;
    }
  }
}

export default ImageWrapper;
