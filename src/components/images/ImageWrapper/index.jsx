import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import ContentfulImage from '../../images/ContentfulImage'

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

import './style.scss'

const SOURCE_TYP_CONTENTFUL = 'Contentful'
const SOURCE_TYP_SHARP = 'Sharp'
const SOURCE_TYP_BOOTSTRAP = 'Bootstrap'
const SOURCE_TYP_PLACEHOLDER = 'Placeholder'
const SOURCE_TYP_ICON_IMAGE = 'Icon'

class ImageWrapper extends React.Component {
  componentDidMount() {}

  render() {
    function IconImage(props) {
      return (
        <div className={'icon-image ' + props.style.container}>
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

    function SharpImage(props) {
      var style = {}
      if (typeof props.style !== 'undefined') {
        style = props.style
      }

      return (
        <div
          className={
            'image-container ' + style.container !== undefined
              ? style.container
              : ''
          }
        >
          <div className={'svg-image position-relative ' + style.border}>
            <Img sizes={props.source.sizes} className={props.styleClasses} />
            {props.backgroundOverlay}
            {props.overlayElement !== undefined && (
              <div className={'image-overlay-top-left ' + style.overlay}>
                {props.overlayElement}
              </div>
            )}
          </div>
        </div>
      )
    }

    function BootstrapImage(props) {
      return (
        <img
          src={props.source}
          className={
            props.styleClasses == null ? 'img-fluid' : props.styleClasses
          }
        />
      )
    }

    function PlaceholderImage(props) {
      return (
        <div>
          <img
            src={
              'http://via.placeholder.com/' +
              props.source.width +
              'x' +
              props.source.height
            }
            className={'img-fluid ' + props.styleClasses}
            alt="Responsive image"
          />
          <div className={'image-overlay-top-left ' + props.styleClasses}>
            {overlayElement}
          </div>
        </div>
      )
    }

    const { source, sourceType, overlayElement, styleClasses } = this.props

    if (sourceType === SOURCE_TYP_CONTENTFUL) {
      return <ContentfulImage imageFile={source} styleClasses={styleClasses} />
    } else if (sourceType === SOURCE_TYP_SHARP) {
      return <SharpImage {...this.props} />
    } else if (sourceType === SOURCE_TYP_BOOTSTRAP) {
      return <BootstrapImage {...this.props} />
    } else if (sourceType === SOURCE_TYP_PLACEHOLDER) {
      return <PlaceholderImage {...this.props} />
    } else if (sourceType === SOURCE_TYP_ICON_IMAGE) {
      return <IconImage {...this.props} />
    }
  }
}

export default {
  ImageWrapper,
  SOURCE_TYP_CONTENTFUL,
  SOURCE_TYP_SHARP,
  SOURCE_TYP_BOOTSTRAP,
  SOURCE_TYP_PLACEHOLDER,
  SOURCE_TYP_ICON_IMAGE,
}

ImageWrapper.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
        fileName: PropTypes.string,
        contentType: PropTypes.string,
      }),
    }),
    PropTypes.shape({
      sizes: PropTypes.shape({
        aspectRatio: PropTypes.number,
        base64: PropTypes.string,
        sizes: PropTypes.string,
        src: PropTypes.string,
        srcSet: PropTypes.string,
      }),
    }),
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    PropTypes.string,
  ]),
  sourceType: PropTypes.oneOf([
    SOURCE_TYP_CONTENTFUL,
    SOURCE_TYP_SHARP,
    SOURCE_TYP_BOOTSTRAP,
    SOURCE_TYP_PLACEHOLDER,
    SOURCE_TYP_ICON_IMAGE,
  ]),
  backgroundOverlay: PropTypes.any,
  overlayElement: PropTypes.any,
  styleClasses: PropTypes.string,
}
