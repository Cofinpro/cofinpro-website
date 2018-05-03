import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import ContentfulImage from '../ContentfulImage'
import ContentfulMarkdownText from '../ContentfulMarkdownText'

class ManagementBoardMitglied extends React.Component {
  render() {
    const { mitglied, postfixIdToggle } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <ContentfulImage
          imageFile={mitglied.bild}
          styleClasses="img-fluid margin-20-bottom"
        />
        <div className="row">
          <div className="col-8">
            <p className="h5">
              {mitglied.titel} <br />
              {mitglied.untertitel}
            </p>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <button
              id={'button-mb-collapse' + postfixIdToggle}
              className="btn btn-light text-white inline"
              type="button"
              data-toggle="collapse"
              data-target={'#toggleMitgliedBeschreibung' + postfixIdToggle}
              aria-controls={'#toggleMitgliedBeschreibung' + postfixIdToggle}
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
          id={'toggleMitgliedBeschreibung' + postfixIdToggle}
        >
          <ContentfulMarkdownText text={mitglied.beschreibung.beschreibung} />
        </div>
      </div>
    )
  }
}

export default ManagementBoardMitglied
