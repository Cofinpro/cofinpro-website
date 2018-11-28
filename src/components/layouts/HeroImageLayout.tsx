import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';

import './HeroImageLayout.scss';

interface Props {
  title: string;
  imageFile?: any;
  imageSmall?: any;
  titleTag?: string;
  titleImage: string;
  titleImageSmall?: string;
  isOverlayActive?: boolean;
}

class HeroImageLayout extends React.Component<Props> {
  getTitleElement(titleTag: string | undefined, title: any) {
    if (titleTag === undefined) {
      return null;
    }

    switch (titleTag) {
      case 'h1':
        return <h1 className="h1">{title}</h1>;
      case 'h2':
        return <h2 className="h1">{title}</h2>;
      case 'h3':
        return <h3 className="h1">{title}</h3>;
      case 'h4':
        return <h4 className="h1">{title}</h4>;
      case 'h5':
        return <h5 className="h1">{title}</h5>;
      case 'h6':
        return <h6 className="h1">{title}</h6>;
      default:
        return <h3 className="h1">{title}</h3>;
    }
  }

  render() {
    const { title, imageFile, imageSmall, titleTag, titleImage, titleImageSmall, isOverlayActive } = this.props;

    let tempTitleElement;

    if (title.indexOf(' ') === -1) {
      tempTitleElement = title;
    } else if (title.split(' ').length === 2) {
      const twoWords = title.split(' ');

      tempTitleElement = (
        <span>
          {twoWords[0]} <br /> {twoWords[1]}
        </span>
      );
    } else {
      const s = title;

      let middle = Math.floor(s.length / 2);
      const before = s.lastIndexOf(' ', middle);
      const after = s.indexOf(' ', middle + 1);

      if (middle - before < after - middle) {
        middle = before;
      } else {
        middle = after;
      }

      const s1 = s.substr(0, middle);
      const s2 = s.substr(middle + 1);

      tempTitleElement = (
        <span>
          {s1} <br /> {s2}
        </span>
      );
    }

    const titleElement = this.getTitleElement(titleTag, tempTitleElement);

    return (
      <div className="hero-image">
        <div className="container">
          <div className="row hero-image__title-box">
            <div className="col-11 col-md-10 col-lg-9">{titleElement}</div>
            <div className="col-1 col-md-3" />
          </div>
        </div>
        <div className="container container-md-full-width">
          {imageSmall !== null ? (
            <div className="row no-margin">
              <div className="col-12 col-lg-10 offset-lg-1 no-padding">
                {titleImage !== undefined && titleImage !== null ? (
                  <div className="d-none d-md-block">
                    {isOverlayActive !== undefined && isOverlayActive ? <div className="hero-image__image-overlay-gradient" /> : null}
                    <ImageWrapper source={titleImage} sourceType={SourceTyp.Sharp} />
                  </div>
                ) : (
                  <ImageWrapper source={imageFile} sourceType={SourceTyp.Contentful} styleClasses="img-fluid d-none d-md-block" />
                )}
                {(titleImageSmall === undefined || titleImageSmall === null) && (titleImage !== undefined && titleImage !== null) ? (
                  <div className="d-block d-md-none">
                    {isOverlayActive !== undefined && isOverlayActive ? <div className="image-overlay-gradient" /> : null}
                    <ImageWrapper source={titleImage} sourceType={SourceTyp.Sharp} />
                  </div>
                ) : null}
                {titleImageSmall !== undefined && titleImageSmall !== null ? (
                  <div className="d-block d-md-none">
                    <ImageWrapper source={titleImageSmall} sourceType={SourceTyp.Sharp} />
                  </div>
                ) : null}
                {imageSmall !== undefined && imageSmall !== null ? (
                  <ImageWrapper source={imageSmall} sourceType={SourceTyp.Contentful} styleClasses="img-fluid d-block d-md-none" />
                ) : null}
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col">
                {titleImage !== undefined && titleImage !== null ? (
                  <ImageWrapper source={titleImage} sourceType={SourceTyp.Sharp} />
                ) : (
                  <ImageWrapper source={imageFile} sourceType={SourceTyp.Contentful} styleClasses="img-fluid d-block d-md-none" />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HeroImageLayout;
