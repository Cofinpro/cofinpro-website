import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  title: string;
  iconLeft: SharpImage;
  textLeft: string;
  iconMiddle: SharpImage;
  textMiddle: string;
  iconRight: SharpImage;
  textRight: string;
}

class ThreeIconsWithTextLayout extends React.Component<Props> {
  render() {
    const { title, iconLeft, textLeft, iconMiddle, textMiddle, iconRight, textRight } = this.props;

    return (
      <div className="container text-center margin-100-top">
        <div className="row padding-md-bottom">
          <div className="col">
            <h2 className="h4">{title}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <ImageWrapper source={iconLeft} sourceType={SourceTyp.Sharp} styleClasses="img-fluid d-block d-md-none w-100 mx-auto" />
            <ImageWrapper source={iconLeft} sourceType={SourceTyp.Sharp} styleClasses="img-fluid d-none d-md-block w-50 mx-auto" />
            <p className="padding-sm-top p-font-large-md">{textLeft}</p>
          </div>
          <div className="col-6 col-md-4">
            <ImageWrapper source={iconMiddle} sourceType={SourceTyp.Sharp} styleClasses="img-fluid d-block d-md-none w-100 mx-auto" />
            <ImageWrapper source={iconMiddle} sourceType={SourceTyp.Sharp} styleClasses="img-fluid d-none d-md-block w-50 mx-auto" />
            <p className="padding-sm-top p-font-large-md">{textMiddle}</p>
          </div>
          <div className="col-6 col-md-4">
            <ImageWrapper source={iconRight} sourceType={SourceTyp.Sharp} styleClasses="img-fluid d-block d-md-none w-100 mx-auto" />
            <ImageWrapper source={iconRight} sourceType={SourceTyp.Sharp} styleClasses="img-fluid d-none d-md-block w-50 mx-auto" />
            <p className="padding-sm-top p-font-large-md">{textRight}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeIconsWithTextLayout;
