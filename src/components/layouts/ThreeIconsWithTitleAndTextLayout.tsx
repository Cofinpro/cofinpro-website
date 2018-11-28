import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  containerStyle: any;
  iconLeft: SharpImage;
  titleLeft: string;
  textLeft: string;
  iconMiddle: SharpImage;
  titleMiddle: string;
  textMiddle: string;
  iconRight: SharpImage;
  titleRight: string;
  textRight: string;
}

class ThreeIconsWithTitleAndTextLayout extends React.Component<Props> {
  render() {
    const {
      iconLeft,
      titleLeft,
      textLeft,
      iconMiddle,
      titleMiddle,
      textMiddle,
      iconRight,
      titleRight,
      textRight,
      containerStyle,
    } = this.props;

    return (
      <div className={`container ${containerStyle}`}>
        <div className="row justify-content-center text-center padding-md-top-bottom">
          <div className="col-6 col-md-4">
            <ImageWrapper
              source={iconLeft}
              sourceType={SourceTyp.Sharp}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ImageWrapper
              source={iconLeft}
              sourceType={SourceTyp.Sharp}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom margin-20-top">{titleLeft}</h4>
            <p className="">{textLeft}</p>
          </div>
          <div className="col-6 col-md-4">
            <ImageWrapper
              source={iconMiddle}
              sourceType={SourceTyp.Sharp}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ImageWrapper
              source={iconMiddle}
              sourceType={SourceTyp.Sharp}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom margin-20-top">{titleMiddle}</h4>
            <p className="">{textMiddle}</p>
          </div>
          <div className="col-6 col-md-4">
            <ImageWrapper
              source={iconRight}
              sourceType={SourceTyp.Sharp}
              styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-bottom"
            />
            <ImageWrapper
              source={iconRight}
              sourceType={SourceTyp.Sharp}
              styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-bottom"
            />
            <h4 className="p padding-sm-bottom margin-20-top">{titleRight}</h4>
            <p className="">{textRight}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeIconsWithTitleAndTextLayout;
