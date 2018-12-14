import React from 'react';

import $ from 'jquery';

import AnlegerschutzIcon from "!svg-react-loader!../images/svg-icons/fokusthemen/anlegerschutz.svg?name=AnlegerschutzIcon";
import AuswahlverfahrenIcon from "!svg-react-loader!../images/svg-icons/fokusthemen/auswahlverfahren.svg";
import BlockchainIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/blockchain.svg';
import BonitaetspruefungIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/bonitaetspruefung.svg';
import DatagovernanceIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/datagovernance.svg';
import DigitalisierungIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/digitalisierung.svg';
import DigitaleTransformationIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/digitaletransformation.svg';
import KundenbindungIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/kundenbindung.svg';
import KostenprogrammIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/kostenprogramm.svg';
import KundenorientiertIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/kundenorientiert.svg';
import MachinelearningIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/machinelearning.svg';
import ModernisierungIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/modernisierung.svg';
import PlattformIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/plattform.svg';
import PortfolioIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/portfolio.svg';
import RegulierungIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/regulierung.svg';
import RoadmapIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/roadmap.svg';
import SettlementIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/settlement.svg';
import SteuergesetzgebungIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/steuergesetzgebung.svg';
import UnbundlingbanksIcon from '!svg-react-loader!../images/svg-icons/fokusthemen/unbundlingbanks.svg';

export class IconImage extends React.Component {

  componentDidMount() {
    $('.icon-image__icon-wrapper').each(function() {
      $(this)
        .find('path[stroke]')
        .attr('stroke', $(this).css('fill'));
      $(this)
        .find('rect[stroke]')
        .attr('stroke', $(this).css('fill'));
      $(this).find('rect').css('stroke', $(this).css('fill'))
    });
  }

  render() {
    const { source, overlayElement, style } = this.props;

    var icon = <AnlegerschutzIcon />

    if (source === 'Anlegerschutz') {
      icon = <AnlegerschutzIcon />;
    } else if (source === 'Auswahlverfahren') {
      icon = <AuswahlverfahrenIcon />;
    } else if (source === 'Blockchain') {
      icon = <BlockchainIcon />;
    } else if (source === 'Bonitaetspruefung') {
      icon = <BonitaetspruefungIcon />;
    } else if (source === 'Datagovernance') {
      icon = <DatagovernanceIcon />;
    } else if (source === 'Digitalisierung') {
      icon = <DigitalisierungIcon />;
    } else if (source === 'Digitale-Transformation') {
      icon = <DigitaleTransformationIcon />;
    } else if (source === 'Kostenprogramm') {
      icon = <KostenprogrammIcon />;
    } else if (source === 'Kundenbindung') {
      icon = <KundenbindungIcon />;
    } else if (source === 'Kundenorientiert') {
      icon = <KundenorientiertIcon />;
    } else if (source === 'Machinelearning') {
      icon = <MachinelearningIcon />;
    } else if (source === 'Modernisierung') {
      icon = <ModernisierungIcon />;
    } else if (source === 'Plattform') {
      icon = <PlattformIcon />;
    } else if (source === 'Portfolio') {
      icon = <PortfolioIcon />;
    } else if (source === 'Regulierung') {
      icon = <RegulierungIcon />;
    } else if (source === 'Roadmap') {
      icon = <RoadmapIcon />;
    } else if (source === 'Settlement') {
      icon = <SettlementIcon />;
    } else if (source === 'Steuergesetzgebung') {
      icon = <SteuergesetzgebungIcon />;
    } else if (source === 'Unbundlingbanks') {
      icon = <UnbundlingbanksIcon />;
    }

    return (
      <div className={'icon-image ' + style.container}>
        <div className={'icon-image__wrapper position-relative'}>
          <img src={'/img/filler_fokus.png'} className={'img-fluid'} alt="" />
          <div className={'icon-image__icon-wrapper'}>{icon}</div>
          <div className={'icon-image__overlay image-overlay-top-left text-dark'}>{overlayElement}</div>
        </div>
      </div>
    );
  }
}

export default IconImage;
