import React from 'react';

import CarrerOfferPreview from './CarrerOfferPreview';
import CarrerOfferPreviewFallback from './CarrerOfferPreviewFallback';

import './JobContainerBox.scss';

interface Props {
  id: string;
  anzeigen: any[];
  boxTitle: string;
  filter: string[];
  boxStyle: any;
  additionalColumn: any;
  rowDefinition: any;
  borderStyleFallback: any;
}

interface State {
  isToggleOn: boolean;
}

class JobContainerBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      isToggleOn: false,
    };

    let tempIsToggleOn = false;
    const threshold = 3;
    if (props.anzeigen.length > threshold) {
      tempIsToggleOn = true;
    }

    this.state = {
      isToggleOn: tempIsToggleOn,
    };
  }

  componentDidMount() {
    const componentId = this.props.id;

    $('#stellenmarkt-box-' + componentId + '-collapse-area').collapse({
      toggle: false,
    });

    $('#button-' + componentId + '-collapse').click(() => {
      $('#stellenmarkt-box-' + componentId + '-collapse-area').collapse('toggle');

      if ($('#' + componentId + '>img.collapse-icon-down').hasClass('d-none')) {
        $('#' + componentId + '>img.collapse-icon-up').addClass('d-none');
        $('#' + componentId + '>img.collapse-icon-down').removeClass('d-none');
      } else if ($('#' + componentId + '>img.collapse-icon-up').hasClass('d-none')) {
        $('#' + componentId + '>img.collapse-icon-down').addClass('d-none');
        $('#' + componentId + '>img.collapse-icon-up').removeClass('d-none');
      }
    });
  }

  handleToggle() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { id, anzeigen, boxTitle, filter, boxStyle, additionalColumn, rowDefinition, borderStyleFallback } = this.props;

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    const bucket = anzeigen.filter(x => {
      return x.node.zuordnungZuKompetenzen.some((y: any) => {
        filter.some(y.name);
      });
    });

    if (bucket.length < 1) {
      return (
        <div className="container margin-60-top">
          <div className={rowDefinition}>
            {additionalColumn !== undefined ? additionalColumn : null}
            <div className="col-12 col-md-10 col-lg-8">
              <h3>{boxTitle}</h3>
              <div className="row">
                <div className="col-12 col-md-6 padding-sm-top-bottom">
                  <CarrerOfferPreviewFallback borderStyle={borderStyleFallback} {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container margin-60-top">
        <div className={rowDefinition}>
          {additionalColumn !== undefined ? additionalColumn : null}
          <div className="col-12 col-md-10 col-lg-8">
            <h3>{boxTitle}</h3>
            <div className="row d-flex-inline d-md-none">
              {bucket.length > 0 &&
                bucket.map((item, index) => {
                  const stellenAnzeige = item.node;

                  if (index < 3) {
                    return (
                      <div className="col-12 col-md-6 padding-sm-top-bottom" key={`column-${id}-${index}`}>
                        <CarrerOfferPreview
                          key={`arrerOfferPreview-${id}-${index}`}
                          title={stellenAnzeige.titel}
                          employmentType={stellenAnzeige.art}
                          expiration={stellenAnzeige.befristung}
                          locationEmployee={stellenAnzeige.ort}
                          anzeigeId={stellenAnzeige.url}
                          styleClass={boxStyle}
                          {...this.props}
                        />
                      </div>
                    );
                  }
                })}
              <div className="collapse" id={`stellenmarkt-box-${id}-collapse-area`}>
                {bucket.length > 0 &&
                  bucket.map((item, index) => {
                    const stellenAnzeige = item.node;

                    if (index >= 3) {
                      return (
                        <div className="col-12 col-md-6 padding-sm-top-bottom" key={`column-${id}-${index}`}>
                          <CarrerOfferPreview
                            key={`CarrerOfferPreview-${id}-${index}`}
                            title={stellenAnzeige.titel}
                            employmentType={stellenAnzeige.art}
                            expiration={stellenAnzeige.befristung}
                            locationEmployee={stellenAnzeige.ort}
                            anzeigeId={stellenAnzeige.url}
                            styleClass={boxStyle}
                            {...this.props}
                          />
                        </div>
                      );
                    }
                  })}
              </div>
              <div className="col-12 text-center">
                <button
                  id={`button-${id}-collapse`}
                  className="btn btn-light btn-transparent"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#stellenmarkt-box-${id}-collapse-area`}
                  aria-controls={`stellenmarkt-box-${id}-collapse-area`}
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img className="collapse-icon-down" alt="Mehr Jobs zeigen" src={`${pathPrefix}/svg/icon_arrow_dotted_down_orange.svg`} />
                  <img
                    className="d-none collapse-icon-up"
                    alt="Weniger Jobs zeigen"
                    src={`${pathPrefix}/svg/icon_arrow_dotted_up_orange.svg`}
                  />
                </button>
              </div>
            </div>

            <div className="row d-none d-md-flex">
              {bucket.length > 0
                ? bucket.map((item, index) => {
                    const stellenAnzeige = item.node;

                    return (
                      <div className="col-12 col-md-6 padding-sm-top-bottom" key={`column-${id}-${index}`}>
                        <CarrerOfferPreview
                          key={`CarrerOfferPreview-${id}-${index}`}
                          title={stellenAnzeige.titel}
                          employmentType={stellenAnzeige.art}
                          expiration={stellenAnzeige.befristung}
                          locationEmployee={stellenAnzeige.ort}
                          anzeigeId={stellenAnzeige.url}
                          styleClass={boxStyle}
                          {...this.props}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobContainerBox;
