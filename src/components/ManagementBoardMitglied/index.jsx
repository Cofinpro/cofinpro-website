import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Img from 'gatsby-image'

import ContentfulMarkdownText from '../ContentfulMarkdownText'
import ToggleButton from '../buttons/ToggleButton'

class ManagementBoardMitglied extends React.Component {

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
            <ToggleButton id={index} dataTarget={"toggleMitgliedBeschreibung" + index} style="align-self-start"/>
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
