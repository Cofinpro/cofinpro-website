import React from 'react';

import DownloadButton from 'components/buttons/DownloadButton';

interface Props {
  downloads: any[];
  startIndex: number;
  endIndex: number;
  style: any;
}

class LayoutDownloadRow extends React.Component<Props> {
  render() {
    const { downloads, startIndex, endIndex, style } = this.props;

    let counterOfValidDownloads = -1;

    return (
      <div className={`row ${style.row}`}>
        <div className="col-12">
          {downloads.map((download, i) => {
            if (startIndex <= i && i <= endIndex) {
              // tslint:disable-next-line:no-increment-decrement
              ++counterOfValidDownloads;
              if (counterOfValidDownloads % 2 === 0) {
                return (
                  <div className="row" key={i}>
                    <div className="col-12 col-md-6 col-lg-4">
                      <DownloadButton _href={`/pdf/contentful/${download.id}.pdf`} text={download.name} styleContainer={''} />
                    </div>
                    <div className="col-12 d-none d-lg-block col-lg-2" />
                    <div className="col-12 col-md-6 col-lg-4">
                      {downloads.length !== i + 1 && (
                        <DownloadButton
                          _href={`/pdf/contentful/${downloads[i + 1].id}.pdf`}
                          text={downloads[i + 1].name}
                          styleContainer={''}
                        />
                      )}
                    </div>
                    <div className="col-12 d-none d-lg-block col-lg-2" />
                  </div>
                );
              }

              return null;
            }

            return null;
          })}
        </div>
      </div>
    );
  }
}

export default LayoutDownloadRow;
