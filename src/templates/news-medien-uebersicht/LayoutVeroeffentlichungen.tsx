import React from 'react';

import LayoutDownloadAndLinkMixedRow from './LayoutDownloadAndLinkMixedRow';
import LinkButton from 'components/buttons/LinkButton';
import ToggleWithButton from 'components/buttons/ToggleWithButton';
import StockphotoWithExternalLink from 'components/images/StockphotoWithExternalLink';

interface Props {
  content: any;
  style: any;
}

class LayoutVeroeffentlichungen extends React.Component<Props> {
  createDataStructureForDataRow(input: any): any {
    return input.map((x: any) => {
      if (x.dataType === 'link') {
        return {
          id: x.id,
          to: x.urlDerVerffentlichung,
          name: x.ueberschrift,
          zweiterName: x.unterUeberschrift,
          type: 'link',
        };
      }
      if (x.dataType === 'file') {
        return {
          id: x.id,
          to: `/pdf/contentful/${x.pdfDatei.id}.pdf`,
          name: x.ueberschrift,
          type: 'file',
        };
      }
    });
  }

  createDataForPreviewImageByLink(input: any): any {
    return {
      hrefLink: input.urlDerVerffentlichung,
      header: input.ueberschrift,
      subHeader: input.unterUeberschrift,
    };
  }

  createDataForPreviewImageByFile(input: any): any {
    return {
      hrefLink: `/pdf/contentful/${input.pdfDatei.id}.pdf`,
      header: input.ueberschrift,
      subHeader: input.unterUeberschrift,
    };
  }

  render() {
    const { content, style } = this.props;

    const convertedDownloads = this.createDataStructureForDataRow(content.elements);

    const firstForElements = content.elements.slice(0, 3).map((x: any) => {
      if (x.dataType === 'file') {
        return this.createDataForPreviewImageByFile(x);
      }
      if (x.dataType === 'link') {
        return this.createDataForPreviewImageByLink(x);
      }
    });

    return (
      <div className="container">
        {firstForElements.length > 0 && (
          <div className={`row ${style.row}`}>
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <StockphotoWithExternalLink content={firstForElements} images={content.images} indexOfElelement={0} />
                </div>
              </div>
              {firstForElements.length > 2 && (
                <div className="row justify-content-center margin-40-top margin-xs-20-top d-none d-md-flex">
                  <div className="col-12 col-md-8">
                    <StockphotoWithExternalLink content={firstForElements} images={content.images} indexOfElelement={2} />
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 col-md-6">
              {firstForElements.length > 1 && (
                <div className="row justify-content-center margin-xs-20-top">
                  <div className="col-12 col-md-8">
                    <StockphotoWithExternalLink content={firstForElements} images={content.images} indexOfElelement={1} />
                  </div>
                </div>
              )}
              {firstForElements.length > 3 && (
                <div className="row margin-40-top margin-xs-20-top d-none d-md-flex">
                  <div className="col-12">
                    <StockphotoWithExternalLink content={firstForElements} images={content.images} indexOfElelement={3} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {convertedDownloads.length > 4 && (
          <LayoutDownloadAndLinkMixedRow
            elements={convertedDownloads}
            startIndex={4}
            endIndex={7}
            style={{ row: 'margin-40-top margin-xs-10-top d-none d-md-flex' }}
          />
        )}
        {convertedDownloads.length > 2 && (
          <LayoutDownloadAndLinkMixedRow
            elements={convertedDownloads}
            startIndex={2}
            endIndex={5}
            style={{ row: 'margin-40-top margin-xs-10-top d-flex d-md-none' }}
          />
        )}
        {convertedDownloads.length > 8 && (
          <div className="collapse" id={`more-md-${content.id}`}>
            <LayoutDownloadAndLinkMixedRow
              elements={convertedDownloads}
              startIndex={8}
              endIndex={999}
              style={{ row: 'd-none d-md-flex' }}
            />
          </div>
        )}
        {convertedDownloads.length > 6 && (
          <div className="collapse" id={`more-xs-${content.id}`}>
            <LayoutDownloadAndLinkMixedRow
              elements={convertedDownloads}
              startIndex={6}
              endIndex={999}
              style={{ row: 'd-flex d-md-none' }}
            />
          </div>
        )}
        {(content.showButton || convertedDownloads.length > 6) && (
          <div className="row margin-40-top margin-xs-0-top">
            <div className="col-12 col-md-4 order-2 order-md-1">
              {content.showButton && (
                <LinkButton
                  styleSpan="w-md-unset w-100 margin-0-top margin-xs-20-top"
                  text={content.buttonText}
                  path={content.buttonLink}
                />
              )}
            </div>
            <div className="col-12 col-md-4 flex-box-content-center order-1 order-md-2">
              {convertedDownloads.length > 8 && (
                <ToggleWithButton show={true} dataTargetId={`more-md-${content.id}`} style={{ container: 'd-none d-md-flex' }} />
              )}
              {convertedDownloads.length > 6 && (
                <ToggleWithButton
                  show={true}
                  dataTargetId={`more-xs-${content.id}`}
                  style={{ container: 'd-flex d-md-none margin-20-top' }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LayoutVeroeffentlichungen;
