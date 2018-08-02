import React from 'react'

import './filter.scss'

class FokusthemenFilter extends React.Component {
  render() {
    const { styleClass } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={'container ' + styleClass}>
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>FILTER</h4>
            <p>
              Commolorrorro que dolupta consedigeni nime exera sunt rest
              estenecti dolut que derspel ipiciminus restis diam nam est.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="row radio-button-group">
              <li className="radio-button">
                <input
                  className="radio-button__input"
                  type="radio"
                  id="management"
                  name="fokusthemen"
                  value="management"
                />
                <label className="radio-button__label" for="management">
                  Managementberatung
                </label>
                <div className="radio-button__check"> </div>
              </li>
              <li className="radio-button">
                <input
                  className="radio-button__input"
                  type="radio"
                  id="kredit"
                  name="fokusthemen"
                  value="kredit"
                />
                <label className="radio-button__label" for="kredit">
                  Fachberatung Kredit
                </label>
                <div className="radio-button__check" />
              </li>
              <li className="radio-button">
                <input
                  className="radio-button__input"
                  type="radio"
                  id="wertpapier"
                  name="fokusthemen"
                  value="wertpapier"
                />
                <label className="radio-button__label" for="wertpapier">
                  Fachberatung Wertpapier
                </label>
                <div className="radio-button__check" />
              </li>
              <li className="radio-button">
                <input
                  className="radio-button__input"
                  type="radio"
                  id="tech"
                  name="fokusthemen"
                  value="tech"
                />
                <label className="radio-button__label" for="tech">
                  Technologieberatung
                </label>
                <div className="radio-button__check" />
              </li>
              <li className="radio-button">
                <input
                  className="radio-button__input"
                  type="radio"
                  id="digi"
                  name="fokusthemen"
                  value="digi"
                />
                <label className="radio-button__label" for="digi">
                  Digitalisierung
                </label>
                <div className="radio-button__check" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default FokusthemenFilter
