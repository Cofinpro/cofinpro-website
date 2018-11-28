import React from 'react';
import Img from 'gatsby-image';

import ContentfulMarkdownText from '../ContentfulMarkdownText';
import CarouselControlPrevNext from '../CarouselControlPrevNext';

interface Props {
  carouselId: string;
  mitglieder: any[];
  mbImagesSharp: any;
}

class ManagementBoardCarousel extends React.Component<Props> {
  render() {
    const { carouselId, mitglieder, mbImagesSharp } = this.props;

    if (mitglieder != null && mitglieder.length > 0) {
      return (
        <div id={`carousel-${carouselId}`} className="carousel slide mbCarousel" data-ride="carousel" data-interval="false">
          <div className="carousel-inner">
            {mitglieder.map((mitglied, index) => {
              return (
                <div className={`carousel-item ${index === 0 ? ' active' : ''}`} key={mitglied.id}>
                  <div>
                    <Img sizes={mbImagesSharp[`${mitglied.bild.id}.jpg`].sizes} className="margin-20-bottom" />
                    <div className="d-block d-md-none margin-20-bottom">
                      <CarouselControlPrevNext sliderId={`carousel-${carouselId}`} version={2} />
                    </div>
                    <p className="h5">
                      {mitglied.titel} <br />
                    </p>
                    <p className="h6">{mitglied.untertitel}</p>
                    <ContentfulMarkdownText text={mitglied.beschreibung.beschreibung} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="d-none d-md-block">
            <CarouselControlPrevNext sliderId={`carousel-${carouselId}`} />
          </div>
        </div>
      );
    }

    return null;
  }
}

export default ManagementBoardCarousel;
