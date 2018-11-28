import React from 'react';
import GatsbyLink from 'gatsby-link';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import { SharpImage } from 'models/SharpImage';

interface Props {
  styleClass: any;
  iconLeft: SharpImage;
  titleLeft: string;
  linkLeft: string;
  iconMiddle: SharpImage;
  titleMiddle: string;
  linkMiddle: string;
  iconRight: SharpImage;
  titleRight: string;
  linkRight: string;
}

class ThreeIconsWithLinks extends React.Component<Props> {
  render() {
    const { styleClass, iconLeft, titleLeft, linkLeft, iconMiddle, titleMiddle, linkMiddle, iconRight, titleRight, linkRight } = this.props;

    return (
      <div className={`container threeIconsWithLinks ${styleClass}`}>
        <div className="row text-center justify-content-center">
          <div className="col-6 col-md-4">
            <GatsbyLink to={linkLeft}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper source={iconLeft} sourceType={SourceTyp.Sharp} />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top bold-font">{titleLeft}</p>
                </div>
              </div>
            </GatsbyLink>
          </div>
          <div className="col-6 col-md-4">
            <GatsbyLink to={linkMiddle}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper source={iconMiddle} sourceType={SourceTyp.Sharp} />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top bold-font">{titleMiddle}</p>
                </div>
              </div>
            </GatsbyLink>
          </div>
          <div className="col-6 col-md-4 margin-xs-40-top">
            <GatsbyLink to={linkRight}>
              <div className="row justify-content-center">
                <div className="col-8 col-md-8 col-lg-6 text-center">
                  <ImageWrapper source={iconRight} sourceType={SourceTyp.Sharp} />
                </div>
                <div className="col-12 text-center">
                  <p className="h5 padding-sm-top text-dark margin-10-top bold-font">{titleRight}</p>
                </div>
              </div>
            </GatsbyLink>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeIconsWithLinks;
