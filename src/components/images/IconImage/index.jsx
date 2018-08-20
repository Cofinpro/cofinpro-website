import React from 'react'

import { ReactComponent as AnlegerschutzIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/anlegerschutz.svg'
import { ReactComponent as AuswahlverfahrenIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/auswahlverfahren.svg'
import { ReactComponent as BlockchainIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/blockchain.svg'
import { ReactComponent as BonitaetspruefungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/bonitaetspruefung.svg'
import { ReactComponent as DatagovernanceIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/datagovernance.svg'
import { ReactComponent as DigitalisierungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/digitalisierung.svg'
import { ReactComponent as KundenbindungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/kundenbindung.svg'
import { ReactComponent as KostenprogrammIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/kostenprogramm.svg'
import { ReactComponent as KundenorientiertIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/kundenorientiert.svg'
import { ReactComponent as MachinelearningIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/machinelearning.svg'
import { ReactComponent as ModernisierungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/modernisierung.svg'
import { ReactComponent as PlattformIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/plattform.svg'
import { ReactComponent as PortfolioIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/portfolio.svg'
import { ReactComponent as RegulierungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/regulierung.svg'
import { ReactComponent as RoadmapIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/roadmap.svg'
import { ReactComponent as SettlementIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/settlement.svg'
import { ReactComponent as SteuergesetzgebungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/steuergesetzgebung.svg'
import { ReactComponent as UnbundlingbanksIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/unbundlingbanks.svg'

class IconImage extends React.Component {
  componentDidMount() {
    $('.icon-image__icon-wrapper').each(function() {
      $(this)
        .find('path[stroke]')
        .attr('stroke', $(this).css('fill'))
      $(this)
        .find('rect[stroke]')
        .attr('stroke', $(this).css('fill'))
    })
  }

  render() {
    const { source, overlayElement, style } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var icon = <AnlegerschutzIcon />

    if (source === 'Anlegerschutz') {
      icon = <AnlegerschutzIcon />
    } else if (source === 'Auswahlverfahren') {
      icon = <AuswahlverfahrenIcon />
    } else if (source === 'Blockchain') {
      icon = <BlockchainIcon />
    } else if (source === 'Bonitaetspruefung') {
      icon = <BonitaetspruefungIcon />
    } else if (source === 'Datagovernance') {
      icon = <DatagovernanceIcon />
    } else if (source === 'Digitalisierung') {
      icon = <DigitalisierungIcon />
    } else if (source === 'Kostenprogramm') {
      icon = <KostenprogrammIcon />
    } else if (source === 'Kundenbindung') {
      icon = <KundenbindungIcon />
    } else if (source === 'Kundenorientiert') {
      icon = <KundenorientiertIcon />
    } else if (source === 'Machinelearning') {
      icon = <MachinelearningIcon />
    } else if (source === 'Modernisierung') {
      icon = <ModernisierungIcon />
    } else if (source === 'Plattform') {
      icon = <PlattformIcon />
    } else if (source === 'Portfolio') {
      icon = <PortfolioIcon />
    } else if (source === 'Regulierung') {
      icon = <RegulierungIcon />
    } else if (source === 'Roadmap') {
      icon = <RoadmapIcon />
    } else if (source === 'Settlement') {
      icon = <SettlementIcon />
    } else if (source === 'Steuergesetzgebung') {
      icon = <SteuergesetzgebungIcon />
    } else if (source === 'Unbundlingbanks') {
      icon = <UnbundlingbanksIcon />
    }

    return (
      <div className={'icon-image ' + style.container}>
        <div className={'icon-image__wrapper position-relative'}>
          <img src={'/img/filler_fokus.png'} className={'img-fluid'} />
          <div className={'icon-image__icon-wrapper'}>{icon}</div>
          <div
            className={'icon-image__overlay image-overlay-top-left text-dark'}
          >
            {overlayElement}
          </div>
        </div>
      </div>
    )
  }
}

export default IconImage
