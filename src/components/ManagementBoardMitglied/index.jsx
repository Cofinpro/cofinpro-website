import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import ContentfulMarkdownText from '../ContentfulMarkdownText'

class ManagementBoardMitglied extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
 }

  componentDidMount() {

    const postFix = this.props.index;

    $('#toggleMitgliedBeschreibung' + postFix).collapse({ toggle: false })

    $('#button-mb-collapse' + postFix).click(function() {
      $('#toggleMitgliedBeschreibung' + postFix).collapse('toggle')

      if (
        $('#button-mb-collapse' + postFix + '>img.collapse-icon-down').hasClass(
          'd-none'
        )
      ) {
        $('#button-mb-collapse' + postFix + '>img.collapse-icon-up').addClass('d-none')
        $('#button-mb-collapse' + postFix + '>img.collapse-icon-down').removeClass(
          'd-none'
        )
      } else if (
        $('#button-mb-collapse' + postFix + '>img.collapse-icon-up').hasClass('d-none')
      ) {
        $('#button-mb-collapse' + postFix + '>img.collapse-icon-down').addClass(
          'd-none'
        )
        $('#button-mb-collapse' + postFix + '>img.collapse-icon-up').removeClass(
          'd-none'
        )
      }
    })
  }

  render() {
    const { mitglied, index, imageMap } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <Img sizes={imageMap[mitglied.bild.id + ".jpg"].sizes} className="margin-20-bottom"/>
        <div className="row">
          <div className="col-8">
            <p className="h5">
              {mitglied.titel} <br />
              {mitglied.untertitel}
            </p>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <button
              id={'button-mb-collapse' + index}
              className="btn btn-light text-white align-self-start"
              type="button"
              data-toggle="collapse"
              data-target={'#toggleMitgliedBeschreibung' + index}
              aria-controls={'#toggleMitgliedBeschreibung' + index}
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

        <div
          className="collapse"
          id={'toggleMitgliedBeschreibung' + index}
        >
          <ContentfulMarkdownText text={mitglied.beschreibung.beschreibung} />
        </div>
      </div>
    )
  }
}

export default ManagementBoardMitglied
