import React from 'react'

import HeroImageLayout from '../../components/layouts/HeroImageLayout'

import SiteHeaderContent from '../../components/SiteHeaderContent'
import LinkButton from '../../components/buttons/LinkButton'

import ToggleButton from '../../components/buttons/LinkButton'

import DownloadLinksBottom from '../../components/DownloadLinksBottom'

class BeratungsfelderTemplate extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src="http://via.placeholder.com/1024x584"
                alt="placeholder"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <img
                src="http://via.placeholder.com/128x132"
                alt="placeholder"
                className="img-fluid margin-20-bottom margin-20-top"
              />
              <h1>Kreditgeschäft</h1>
              <h2 className="margin-20-top">
                Fachberatung im<br />Kreditgeschäft
              </h2>
              <h4 className="margin-40-top">
                Cofinpro setzt mit Ihnen überzeugende Lösungen <br />
                für das Kreditgeschäft von Morgen um.
              </h4>
            </div>

            <div className="col-4">
              <div className="text-left margin-20-top">
                <h5>
                  {' '}
                  Relevante Fokusthemen <br />{' '}
                </h5>

                <h4 className="text-left margin-20-top">
                  Kundenorientierte vertriebswege <br />
                  und digitale Antragsprozesse
                </h4>
                <h4 className="text-left margin-20-top">
                  Automatisierung in<br />
                  Bonitätsprüfung und<br />
                  Sicherheitsbewertung <br />
                </h4>
                <h4 className="text-left margin-20-top">
                  Kundenbindung und Effizien<br />
                  in der Bestandsführung
                </h4>
                <ToggleButton />
              </div>
            </div>
          </div>
          <div className="row margin-120-top">
            <div className="col-6">
              <h2>
                LOREM IPSUM dolor <br />
                sit amet lorem ipsum
              </h2>
              <p className="text-left margin-20-top">
                {' '}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="row margin-120-top">
            <div className="col-12">
              <h2 className="text-primary text-center">Kreditprozess</h2>
              <img
                src="http://via.placeholder.com/937x90"
                alt="placeholder"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="row margin-100-top">
            <div className="col-6" />
            <div className="col-6">
              <h2>
                LOREM IPSUM dolor <br />
                sit amet lorem ipsum
              </h2>
              <p className="text-left margin-20-top">
                {' '}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <p className="text-left margin-20-top">
                {' '}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="row margin-60-top">
            <div className="col-6">
              <h2>
                Mit besonderer Expertise und<br />
                Praxiserfahrung berät Cofinpro<br />
                Sie in den Themen:
              </h2>
              <img
                src="http://via.placeholder.com/448x267"
                alt="placeholder"
                className="img-responsive margin-100-top"
              />
              <img
                src="http://via.placeholder.com/288x172"
                alt="placeholder"
                className="img-responsive margin-40-top"
              />
            </div>
            <div className="col-6 margin-140-top">
              <img
                src="http://via.placeholder.com/288x172"
                alt="placeholder"
                className="mx-auto d-block"
              />
              <img
                src="http://via.placeholder.com/448x267"
                alt="placeholder"
                className="mx-auto d-block margin-40-top"
              />
            </div>
          </div>
          <div className="margin-100-top">
            <DownloadLinksBottom />
          </div>
        </div>
      </div>
    )
  }
}

export default BeratungsfelderTemplate
