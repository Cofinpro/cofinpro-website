import React from 'react';
import { Link } from 'gatsby';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  styleClass: any;
  iconLeft: any;
  titleLeft: string;
  linkLeft: string;
  iconMiddle: any;
  titleMiddle: string;
  linkMiddle: string;
  iconRight: any;
  titleRight: string;
  linkRight: string;
  sourceTyp: SourceTyp;
}

class ThreeIconsWithLinks extends React.Component<Props> {
  render() {
    const {
      styleClass,
      iconLeft,
      titleLeft,
      linkLeft,
      iconMiddle,
      titleMiddle,
      linkMiddle,
      iconRight,
      titleRight,
      linkRight,
      sourceTyp,
    } = this.props;

    return (
      <div className={`container threeIconsWithLinks ${styleClass}`}>
        <div className="row text-center justify-content-center">
          <div className="col-6 col-md-4">
            <Link to={linkLeft}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper source={iconLeft} sourceType={sourceTyp} />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top bold-font">{titleLeft}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link to={linkMiddle}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper source={iconMiddle} sourceType={sourceTyp} />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top bold-font">{titleMiddle}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-4 margin-xs-40-top">
            <Link to={linkRight}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper source={iconRight} sourceType={sourceTyp} />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top bold-font">{titleRight}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeIconsWithLinks;
