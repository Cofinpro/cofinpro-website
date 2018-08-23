import React from 'react'

class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const dataTarget = this.props.dataTarget
    const id = this.props.id

    const showElemForMore = this.props.showElemForMore
    const showElemForLess = this.props.showElemForLess

    $('#' + dataTarget).collapse({ toggle: false })

    $('#button-collapse-' + id).click(function() {
      $('#' + dataTarget).collapse('toggle')

      if (
        $('#button-collapse-' + id + '>img.collapse-icon-down').hasClass(
          'd-none'
        )
      ) {
        $('#button-collapse-' + id + '>img.collapse-icon-up').addClass('d-none')
        $('#button-collapse-' + id + '>img.collapse-icon-down').removeClass(
          'd-none'
        )
        if (showElemForMore !== undefined) {
          $('#' + showElemForMore).show()
        }
        if (showElemForLess !== undefined) {
          $('#' + showElemForLess).hide()
        }
      } else if (
        $('#button-collapse-' + id + '>img.collapse-icon-up').hasClass('d-none')
      ) {
        $('#button-collapse-' + id + '>img.collapse-icon-down').addClass(
          'd-none'
        )
        $('#button-collapse-' + id + '>img.collapse-icon-up').removeClass(
          'd-none'
        )
        if (showElemForMore !== undefined) {
          $('#' + showElemForMore).hide()
        }
        if (showElemForLess !== undefined) {
          $('#' + showElemForLess).show()
        }
      }
    })
  }

  render() {
    const {
      id,
      dataTarget,
      showElemForMore,
      showElemForLess,
      style,
    } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <button
        id={'button-collapse-' + id}
        className={'btn btn-link text-white ' + style}
        type="button"
        data-toggle="collapse"
        data-target={'#' + dataTarget}
        aria-controls={'' + dataTarget}
        aria-expanded="false"
        aria-label={'Toggle ' + id}
      >
        <img
          className="collapse-icon-down"
          alt="Mehr zeigen"
          src={pathPrefix + '/svg/icon_arrow_dotted_down_orange.svg'}
        />
        <img
          className="d-none collapse-icon-up"
          alt="Weniger zeigen"
          src={pathPrefix + '/svg/icon_arrow_dotted_up_orange.svg'}
        />
      </button>
    )
  }
}

export default ToggleButton
