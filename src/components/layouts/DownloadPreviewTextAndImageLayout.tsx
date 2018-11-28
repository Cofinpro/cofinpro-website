import React from 'react';

import { ImageWrapper, SourceTyp } from '../images/ImageWrapper';
import DownloadButton from '../buttons/DownloadButton';

interface Props {
  style: any;
  downloads: any[];
}

class DownloadPreviewTextAndImageLayout extends React.Component<Props> {
  render() {
    const { style, downloads } = this.props;

    if (downloads === undefined || downloads === null || downloads.length < 1) return null;

    return (
      <div className={`container ${style.container}`}>
        <div className="row">
          <div className="d-none d-md-block col-12">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-3">
                <ImageWrapper sourceType={SourceTyp.Contentful} source={downloads[0].image} styleClasses="download-image" />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
              <div className="col-12 col-md-5 col-lg-3">
                {downloads.length > 1 && (
                  <ImageWrapper sourceType={SourceTyp.Contentful} source={downloads[1].image} styleClasses="download-image" />
                )}
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
            </div>
          </div>
          <div className="col-12 margin-40-top margin-xs-20-top">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-3">
                <DownloadButton _href={downloads[0].href} text={downloads[0].title} />
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
              <div className="col-12 col-md-5 col-lg-3">
                {downloads.length > 1 && <DownloadButton _href={downloads[1].href} text={downloads[1].title} />}
              </div>
              <div className="col-12 col-md-1 col-lg-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadPreviewTextAndImageLayout;
