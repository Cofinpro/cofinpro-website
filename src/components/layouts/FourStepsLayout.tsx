import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';

interface Props {
  subtitle: string;
  title: string;
  stepOneTitle: string;
  stepOneImage: any;
  stepOneText: string;
  stepTwoTitle: string;
  stepTwoImage: any;
  stepTwoText: string;
  stepThreeTitle: string;
  stepThreeImage: any;
  stepThreeText: string;
  stepFourTitle: string;
  stepFourImage: any;
  stepFourText: string;
  containerStyle: any;
}

class FourStepsLayout extends React.Component<Props> {
  render() {
    const {
      subtitle,
      title,
      stepOneTitle,
      stepOneImage,
      stepOneText,
      stepTwoTitle,
      stepTwoImage,
      stepTwoText,
      stepThreeTitle,
      stepThreeImage,
      stepThreeText,
      stepFourTitle,
      stepFourImage,
      stepFourText,
      containerStyle,
    } = this.props;

    return (
      <div className={`container ${containerStyle}`}>
        <div className="row">
          <div className="col">
            <h2 className="h6">{subtitle}</h2>
            <h3 className="h2 margin-40-bottom">{title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 d-none d-md-block">
            <div className="row">
              <div className="col-12 col-md-10 order-1">
                <div className="row d-flex align-items-center">
                  <div className="col-2">
                    <p className="display-3 text-info bold-font">1</p>
                  </div>

                  <div className="col-12 col-md-8">
                    <h4>{stepOneTitle}</h4>
                  </div>
                  <div className="col-12 col-md-2" />
                </div>
                <div className="row">
                  <div className="col-12 col-md-10">
                    <ImageWrapper source={stepOneImage} sourceType={SourceTyp.Contentful} styleClasses="img-fluid padding-sm-top-bottom" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>{stepOneText}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 order-2" />
              <div className="col-12 col-md-2 order-2" />
              <div className="col-12 col-md-10 order-3 justify-content-end">
                <div className="row d-none d-md-block filler-box-two">
                  <div className="col">
                    <p className="filler" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <p className="display-3 text-info bold-font">3</p>
                  </div>

                  <div className="col-12 col-md-8">
                    <h4>{stepThreeTitle}</h4>
                  </div>
                  <div className="col-12 col-md-2" />
                </div>
                <div className="row">
                  <div className="col-12 col-md-10">
                    <ImageWrapper
                      source={stepThreeImage}
                      sourceType={SourceTyp.Contentful}
                      styleClasses="img-fluid padding-sm-top-bottom"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>{stepThreeText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 d-none d-md-block">
            <div className="row">
              <div className="col-12 col-md-10 order-2">
                <div className="row d-none d-md-block filler-box">
                  <div className="col">
                    <p className="filler" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <p className="display-3 text-info bold-font">2</p>
                  </div>

                  <div className="col-12 col-md-8">
                    <h4>{stepTwoTitle}</h4>
                  </div>
                  <div className="col-12 col-md-2" />
                </div>
                <div className="row">
                  <div className="col-12 col-md-10">
                    <ImageWrapper source={stepTwoImage} sourceType={SourceTyp.Contentful} styleClasses="img-fluid padding-sm-top-bottom" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>{stepTwoText}</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-2 order-3" />
              <div className="col-12 col-md-2 order-3" />

              <div className="col-12 col-md-10 order-4">
                <div className="row d-none d-md-block filler-box-two">
                  <div className="col">
                    <p className="filler" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <p className="display-3 text-info bold-font">4</p>
                  </div>

                  <div className="col-12 col-md-8">
                    <h4>{stepFourTitle}</h4>
                  </div>
                  <div className="col-12 col-md-2" />
                </div>
                <div className="row">
                  <div className="col-12 col-md-10">
                    <ImageWrapper source={stepFourImage} sourceType={SourceTyp.Contentful} styleClasses="img-fluid padding-sm-top-bottom" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p>{stepFourText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 order-1 d-block d-md-none">
            <div className="row d-flex align-items-center">
              <div className="col-2">
                <p className="display-3 text-info bold-font">1</p>
              </div>

              <div className="col-10">
                <h4>{stepOneTitle}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ImageWrapper source={stepOneImage} sourceType={SourceTyp.Contentful} styleClasses="img-fluid padding-sm-top-bottom" />
                <p>{stepOneText}</p>
              </div>
            </div>
          </div>

          <div className="col-12 order-3 d-block d-md-none margin-60-top">
            <div className="row d-none d-md-block filler-box-two">
              <div className="col">
                <p className="filler" />
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <p className="display-3 text-info bold-font">3</p>
              </div>

              <div className="col-10">
                <h4>{stepThreeTitle}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ImageWrapper source={stepThreeImage} sourceType={SourceTyp.Contentful} styleClasses="img-fluid padding-sm-top-bottom" />
                <p>{stepThreeText}</p>
              </div>
            </div>
          </div>

          <div className="col-12 order-2 d-block d-md-none margin-60-top">
            <div className="row d-none d-md-block filler-box">
              <div className="col">
                <p className="filler" />
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <p className="display-3 text-info bold-font">2</p>
              </div>

              <div className="col-10">
                <h4>{stepTwoTitle}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ImageWrapper source={stepTwoImage} sourceType={SourceTyp.Contentful} styleClasses="img-fluid padding-sm-top-bottom" />
                <p>{stepTwoText}</p>
              </div>
            </div>
          </div>

          <div className="col-12 order-4 d-block d-md-none margin-60-top">
            <div className="row d-none d-md-block filler-box-two">
              <div className="col">
                <p className="filler" />
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <p className="display-3 text-info bold-font">4</p>
              </div>

              <div className="col-10">
                <h4>{stepFourTitle}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ImageWrapper source={stepFourImage} sourceType={SourceTyp.Contentful} styleClasses="img-fluid padding-sm-top-bottom" />
                <p>{stepFourText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourStepsLayout;
