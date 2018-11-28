import React from 'react';

import LayoutLinkRow from './LayoutLinkRow';
import LinkButton from 'components/buttons/LinkButton';
import ToggleWithButton from 'components/buttons/ToggleWithButton';
import StockphotoWithInternalLink from 'components/images/StockphotoWithInternalLink';

const DATE_OPTIONS = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

interface Props {
  content: any;
  style: any;
}

class LayoutPressemeldungen extends React.Component<Props> {
  createDataStructureForLinkRow(input: any): any {
    return input.map((x: any) => {
      return {
        to: `/pressemitteilung/${x.urlDerSeite}`,
        nameTeil1: x.ueberschrift,
        nameTeil2: x.unteruebrschrift,
        datum: new Date(x.verffentlichungsdatum).toLocaleDateString('de-DE', DATE_OPTIONS),
      };
    });
  }

  createDataForPreviewImage(input: any): any {
    return {
      to: `/pressemitteilung/${input.urlDerSeite}`,
      header: input.ueberschrift,
      subHeader: new Date(input.verffentlichungsdatum).toLocaleDateString('de-DE', DATE_OPTIONS),
    };
  }

  render() {
    const { content, style } = this.props;

    const convertedLinks = this.createDataStructureForLinkRow(content.elements);
    const firstForElements = content.elements.slice(0, 3).map((x: any) => this.createDataForPreviewImage(x));

    return (
      <div className="container">
        {firstForElements.length > 0 && (
          <div className={`row ${style.row}`}>
            <div className="col-12 col-md-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <StockphotoWithInternalLink content={firstForElements} images={content.images} indexOfElelement={0} />
                </div>
              </div>
              {firstForElements.length > 2 && (
                <div className="row justify-content-center margin-40-top margin-xs-20-top d-none d-md-flex">
                  <div className="col-12 col-md-8">
                    <StockphotoWithInternalLink content={firstForElements} images={content.images} indexOfElelement={2} />
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 col-md-6">
              {firstForElements.length > 1 && (
                <div className="row justify-content-center margin-xs-20-top">
                  <div className="col-12 col-md-8">
                    <StockphotoWithInternalLink content={firstForElements} images={content.images} indexOfElelement={1} />
                  </div>
                </div>
              )}
              {firstForElements.length > 3 && (
                <div className="row margin-40-top margin-xs-20-top d-none d-md-flex">
                  <div className="col-12">
                    <StockphotoWithInternalLink content={firstForElements} images={content.images} indexOfElelement={3} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {content.elements.length > 4 && (
          <LayoutLinkRow
            links={convertedLinks}
            startIndex={4}
            endIndex={7}
            style={{ row: 'margin-40-top margin-xs-10-top d-none d-md-flex' }}
          />
        )}
        {content.elements.length > 2 && (
          <LayoutLinkRow
            links={convertedLinks}
            startIndex={2}
            endIndex={5}
            style={{ row: 'margin-40-top margin-xs-10-top d-flex d-md-none' }}
          />
        )}
        {content.elements.length > 8 && (
          <div className="collapse" id={`more-md-${content.id}`}>
            <LayoutLinkRow links={convertedLinks} startIndex={8} endIndex={999} style={{ row: 'd-none d-md-flex' }} />
          </div>
        )}
        {content.elements.length > 6 && (
          <div className="collapse" id={`more-xs-${content.id}`}>
            <LayoutLinkRow links={convertedLinks} startIndex={6} endIndex={999} style={{ row: 'd-flex d-md-none' }} />
          </div>
        )}
        {(content.showButton || content.elements.length > 6) && (
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
            <div className="col-12 col-md-4 flex-box-content-center order-md-2">
              {content.elements.length > 8 && (
                <ToggleWithButton show={true} dataTargetId={`more-md-${content.id}`} style={{ container: 'd-none d-md-flex' }} />
              )}
              {content.elements.length > 6 && (
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

export default LayoutPressemeldungen;
