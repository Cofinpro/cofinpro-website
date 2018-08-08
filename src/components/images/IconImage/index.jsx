import React from 'react'

import { ReactComponent as AnlegerschutzIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/anlegerschutz.svg'
import { ReactComponent as BlockchainIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/blockchain.svg'
import { ReactComponent as BonitaetspruefungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/bonitaetspruefung.svg'
import { ReactComponent as DatagovernanceIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/datagovernance.svg'
import { ReactComponent as DigitalisierungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/digitalisierung.svg'
import { ReactComponent as KundenbindungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/kundenbindung.svg'
import { ReactComponent as KundenorientiertIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/kundenorientiert.svg'
import { ReactComponent as MachinelearningIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/machinelearning.svg'
import { ReactComponent as PortfolioIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/portfolio.svg'
import { ReactComponent as RegulierungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/regulierung.svg'
import { ReactComponent as SettlementIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/settlement.svg'
import { ReactComponent as SteuergesetzgebungIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/steuergesetzgebung.svg'
import { ReactComponent as UnbundlingbanksIcon } from '../../../../static/svg/Fokusthemen_Trendthemen/schwarz/unbundlingbanks.svg'

class IconImage extends React.Component {
  render() {
    const { overlayElement, style } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className={'icon-image ' + style.container}>
        <div className={'icon-image__wrapper position-relative'}>
          <img src={'/img/filler_fokus.png'} className={'img-fluid'} />
          <div className={'icon-image__icon-wrapper'}>
            <AnlegerschutzIcon />
          </div>
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
