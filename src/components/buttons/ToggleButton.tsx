import React from 'react';

interface Props {
  id: string;
  dataTarget: any;
  showElemForMore?: string;
  showElemForLess?: string;
  innerButtonContent?: any;
  style?: any;
}

class ToggleButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const dataTarget = this.props.dataTarget;
    const id = this.props.id;

    const showElemForMore = this.props.showElemForMore;
    const showElemForLess = this.props.showElemForLess;

    const dataTargetElement = $(`#${dataTarget}`);
    const collapseButtonElement = $(`#button-collapse-${id}`);
    const collapseDownElement = collapseButtonElement.find('img.collapse-icon-down');
    const collapseUpElement = collapseButtonElement.find('img.collapse-icon-up');
    const showMoreElement = $(`#${showElemForMore}`);
    const showLessElement = $(`#${showElemForLess}`);

    dataTargetElement.collapse({ toggle: false });

    collapseButtonElement.click(() => {
      dataTargetElement.collapse('toggle');

      if (collapseDownElement.hasClass('d-none')) {
        collapseUpElement.addClass('d-none');
        collapseDownElement.removeClass('d-none');
        if (showElemForMore !== undefined) {
          showMoreElement.show();
        }
        if (showElemForLess !== undefined) {
          showLessElement.hide();
        }
      } else if (collapseUpElement.hasClass('d-none')) {
        collapseDownElement.addClass('d-none');
        collapseUpElement.removeClass('d-none');
        if (showElemForMore !== undefined) {
          showMoreElement.hide();
        }
        if (showElemForLess !== undefined) {
          showLessElement.show();
        }
      }
    });
  }

  render() {
    const { id, dataTarget, style, innerButtonContent } = this.props;

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <button
        id={`button-collapse-${id}`}
        className={`btn btn-link text-white ${style}`}
        type="button"
        data-toggle="collapse"
        data-target={`#${dataTarget}`}
        aria-controls={`${dataTarget}`}
        aria-expanded="false"
        aria-label={`Toggle ${id}`}
      >
        <img className="collapse-icon-down" alt="Mehr zeigen" src={`${pathPrefix}/svg/icon_arrow_dotted_down_orange.svg`} />
        <img className="d-none collapse-icon-up" alt="Weniger zeigen" src={`${pathPrefix}/svg/icon_arrow_dotted_up_orange.svg`} />
        {innerButtonContent}
      </button>
    );
  }
}

export default ToggleButton;
