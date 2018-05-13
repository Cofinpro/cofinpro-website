import React from 'react'
import Link from 'gatsby-link'

import CarrerOfferPreview from '../../CarrerOfferPreview'
import CarrerOfferPreviewFallback from '../../CarrerOfferPreviewFallback'

import './style.scss'

class JobContainerBox extends React.Component {
  constructor(props) {
    super(props)

    this.id = props.id

    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      isToggleOn: false,
    }
    this.threshold = 3

    var tempIsToggleOn = false

    if (props.anzeigen.length > this.threshold) {
      tempIsToggleOn = true
    }

    this.state = {
      isToggleOn: tempIsToggleOn,
    }
  }

  componentDidMount() {
    var componentId = this.id

    $('#stellenmarkt-box-' + componentId + '-collapse-area').collapse({
      toggle: false,
    })

    $('#button-' + componentId + '-collapse').click(function() {
      $('#stellenmarkt-box-' + componentId + '-collapse-area').collapse(
        'toggle'
      )

      if ($('#' + this.id + '>img.collapse-icon-down').hasClass('d-none')) {
        $('#' + this.id + '>img.collapse-icon-up').addClass('d-none')
        $('#' + this.id + '>img.collapse-icon-down').removeClass('d-none')
      } else if (
        $('#' + this.id + '>img.collapse-icon-up').hasClass('d-none')
      ) {
        $('#' + this.id + '>img.collapse-icon-down').addClass('d-none')
        $('#' + this.id + '>img.collapse-icon-up').removeClass('d-none')
      }
    })
  }

  handleToggle() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }))
  }

  render() {
    const {
      id,
      anzeigen,
      boxTitle,
      filter,
      boxStyle,
      additionalColumn,
      rowDefinition,
      borderStyleFallback,
    } = this.props

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var bucket = []

    for (var i = 0; i < anzeigen.length; ++i) {
      for (var j = 0; j < anzeigen[i].node.zuordnungZuKompetenzen.length; ++j) {
        if (
          filter.indexOf(anzeigen[i].node.zuordnungZuKompetenzen[j].name) > -1
        ) {
          bucket.push(anzeigen[i])
        }
      }
    }

    var indexToCollapse = 0

    if (bucket.length > 3) {
      indexToCollapse = 3
    }

    if (bucket.length < 1) {
      return (
        <div className="container margin-60-top">
          <div className={rowDefinition}>
            {additionalColumn !== undefined ? additionalColumn : null}
            <div className="col-12 col-md-10 col-lg-8">
              <h3>{boxTitle}</h3>
              <div className="row">
                <div className="col-12 col-md-6 padding-sm-top-bottom">
                  <CarrerOfferPreviewFallback
                    borderStyle={borderStyleFallback}
                    {...this.props}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="container margin-60-top">
        <div className={rowDefinition}>
          {additionalColumn !== undefined ? additionalColumn : null}
          <div className="col-12 col-md-10 col-lg-8">
            <h3>{boxTitle}</h3>
            <div className="row d-flex-inline d-md-none">
              {bucket.length > 0 &&
                bucket.map((item, i) => {
                  var stellenAnzeige = item.node

                  if (i < 3) {
                    return (
                      <div
                        className="col-12 col-md-6 padding-sm-top-bottom"
                        key={'column-' + id + '-' + i}
                      >
                        <CarrerOfferPreview
                          key={'CarrerOfferPreview-' + id + '-' + i}
                          title={stellenAnzeige.titel}
                          employmentType={stellenAnzeige.art}
                          expiration={stellenAnzeige.befristung}
                          locationEmployee={stellenAnzeige.ort}
                          anzeigeId={stellenAnzeige.url}
                          styleClass={boxStyle}
                          {...this.props}
                        />
                      </div>
                    )
                  }
                })}
              <div
                className="collapse"
                id={'stellenmarkt-box-' + id + '-collapse-area'}
              >
                {bucket.length > 0 &&
                  bucket.map((item, i) => {
                    var stellenAnzeige = item.node

                    if (i >= 3) {
                      return (
                        <div
                          className="col-12 col-md-6 padding-sm-top-bottom"
                          key={'column-' + id + '-' + i}
                        >
                          <CarrerOfferPreview
                            key={'CarrerOfferPreview-' + id + '-' + i}
                            title={stellenAnzeige.titel}
                            employmentType={stellenAnzeige.art}
                            expiration={stellenAnzeige.befristung}
                            locationEmployee={stellenAnzeige.ort}
                            anzeigeId={stellenAnzeige.url}
                            styleClass={boxStyle}
                            {...this.props}
                          />
                        </div>
                      )
                    }
                  })}
              </div>
              <div className="col-12 text-center">
                <button
                  id={'button-' + id + '-collapse'}
                  className="btn btn-light btn-transparent"
                  type="button"
                  data-toggle="collapse"
                  data-target={'#stellenmarkt-box-' + id + '-collapse-area'}
                  aria-controls={'stellenmarkt-box-' + id + '-collapse-area'}
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img
                    className="collapse-icon-down"
                    alt="Mehr Jobs zeigen"
                    src={pathPrefix + '/svg/icon_arrow_dotted_down_orange.svg'}
                  />
                  <img
                    className="d-none collapse-icon-up"
                    alt="Weniger Jobs zeigen"
                    src={pathPrefix + '/svg/icon_arrow_dotted_up_orange.svg'}
                  />
                </button>
              </div>
            </div>

            <div className="row d-none d-md-inline-flex">
              {bucket.length > 0
                ? bucket.map((item, i) => {
                    var stellenAnzeige = item.node

                    var columnWidth =
                      bucket.length === 1 ? 'col-md-12' : 'col-md-6'

                    return (
                      <div
                        className={
                          'col-12 ' + columnWidth + ' padding-sm-top-bottom'
                        }
                        key={'column-' + id + '-' + i}
                      >
                        <CarrerOfferPreview
                          key={'CarrerOfferPreview-' + id + '-' + i}
                          title={stellenAnzeige.titel}
                          employmentType={stellenAnzeige.art}
                          expiration={stellenAnzeige.befristung}
                          locationEmployee={stellenAnzeige.ort}
                          anzeigeId={stellenAnzeige.url}
                          styleClass={boxStyle}
                          {...this.props}
                        />
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobContainerBox
