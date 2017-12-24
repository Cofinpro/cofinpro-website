import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import CarrerOffersCarousel from '../components/CarrerOffersCarousel'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'
import CarrerOfferCarouselBox from '../components/CarrerOfferCarouselBox'

import RichTextParserHelper from '../utils/richTextParserHelper'
import StorageHelper from '../utils/storageHelper'

class StellenanzeigeTemplate extends React.Component {

    render() {

        const { location } = this.props

        const stellenAnzeige = this.props.pathContext.stellenAnzeige
        const stellenAnzeigen = this.props.pathContext.stellenAnzeigen

        const pathPrefix = process.env.NODE_ENV === 'development'
            ? ''
            : __PATH_PREFIX__
        return (
            <div>

                <Helmet
                    title={stellenAnzeige.node.metaData.title}
                    meta={[
                        {
                            property: 'og:title',
                            content: `${stellenAnzeige.node.metaData.title}`
                        }, {
                            property: 'Keywords',
                            content: `${stellenAnzeige.node.metaData.keywords != null ? stellenAnzeige.node.metaData.keywords.keywords: ""}`
                        }, {
                            property: 'Description',
                            content: `${stellenAnzeige.node.metaData.description.description}`
                        }, {
                            property: 'og:description',
                            content: `${stellenAnzeige.node.metaData.description.description}`
                        }
                    ]} />

                <SiteHeader 
                    title={stellenAnzeige.node.ueberschriftGanzOben} 
                    imageFile={stellenAnzeige.node.bildStellenanzeige}
                    imageSmall={stellenAnzeige.node.bildStellenanzeige} />

                <div className="container padding-md-top-bottom">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 text-center">
                            <h3 className="text-primary">Wir wünschen uns einfach Dich!</h3>
                            <h2>{stellenAnzeige.node.titel}</h2>
                            <ContentfulMarkdownText text={stellenAnzeige.node.absatzEins.absatzEins} />
                        </div>
                    </div>
                </div>

                <div className="container padding-md-bottom">

                    <div className="row d-none d-md-block">
                        <div className="col">
                            <img src={pathPrefix + '/img/stellenangebot_icons.png'} className="img-fluid" />
                        </div>
                    </div>


                    <div className="row dd-block d-md-none">
                        <div className="col-4">
                            <img src={pathPrefix + '/img/1_teile_ideen_im_vetrauensvollen_umfeld.jpg'} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={pathPrefix + '/img/2_bewege_mit_uns_zeitgeistthemen.jpg'} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={pathPrefix + '/img/3_entwickle_dich_in_kompetenten_teams.jpg'} className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h3 className="h5">{stellenAnzeige.node.spaltenInfoTitelLinks}</h3>
                            <ContentfulMarkdownText text={stellenAnzeige.node.spaltenInfoBeschreibungLinksLang.spaltenInfoBeschreibungLinksLang} />
                        </div>
                        <div className="col-12 col-md-4">
                            <h3 className="h5">{stellenAnzeige.node.spaltenInfoTitelMitte}</h3>
                            <ContentfulMarkdownText text={stellenAnzeige.node.spaltenInfoBeschreibungMitte.spaltenInfoBeschreibungMitte} />
                        </div> 
                        <div className="col-12 col-md-4">
                            <h3 className="h5">{stellenAnzeige.node.spaltenInfoTitelRechts}</h3>
                            <ContentfulMarkdownText text={stellenAnzeige.node.spaltenInfoBeschreibungRechts.spaltenInfoBeschreibungRechts} />
                        </div>
                    </div>
                </div>

                <div className="container bg-orange-light padding-lg-top-bottom margin-lg-top-bottom">
                    <div className="row">
                        <div className="col text-center">
                            <p className="h5 w-75 d-none d-md-block mx-auto padding-sm-bottom">Dann bewirb Dich jetzt für Frankfurt, München, Berlin
                            oder einen von sechs weiteren deutschen Standorten unter 
                            <Link className="readmore" to={pathPrefix + "/jobs"}>
                                <span> Jobs </span>
                            </Link>
                             oder karriere@cofinpro.de. <br /> <br /> <span className="text-primary">Wir passen zu Deiner Wunschliste?</span> <br /> <br />Bei Fragen zu Deiner Bewerbung hat Fabienne Daum (Tel. +49 (0) 69 / 2 99 20 87 60)
                            ein offenes Ohr und unser Chatbot ein offenes Fenster für Dich.</p>
                            <p className="h5  w-100 d-block d-md-none mx-auto padding-sm-bottom">Dann bewirb Dich jetzt für Frankfurt, München, Berlin
                            oder einen von sechs weiteren deutschen Standorten unter 
                            <Link className="readmore" to={pathPrefix + "/jobs"}>
                                <span> Jobs </span>
                            </Link>
                            oder karriere@cofinpro.de. <br /> <br /> <span className="text-primary">Wir passen zu Deiner Wunschliste?</span> <br /> <br />Bei Fragen zu deiner Bewerbung hat Fabienne Daum (Tel. +49 (0) 69 / 2 99 20 87 60)
                            ein offenes Ohr und unser Chatbot ein offenes Fenster für dich.</p>
                            <a href={stellenAnzeige.node.uMantis.uMantis} target="_blank">
                                <span className="btn btn btn-outline-primary">JETZT BEWERBEN</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container padding-lg-top-bottom margin-lg-top-bottom">

                <CarrerOfferCarouselBox titel={"WEITERE JOBANZEIGEN"} stellenAnzeigen={stellenAnzeigen} buttonText={"MEHR JOBS ANZEIGEN"} blacklistedItem={stellenAnzeige.node.id} {...this.props} />          

                </div>
            </div>
        )
    }
}

export default StellenanzeigeTemplate