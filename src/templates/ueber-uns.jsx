import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Facts from '../components/Facts'
import SiteHeader from '../components/SiteHeader'
import SiteHeaderContent from '../components/SiteHeaderContent'
import ImageCarousel from '../components/ImageCarousel'
import ContentfulImage from '../components/ContentfulImage'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'
import TestimonialCarousel from '../components/TestimonialCarousel'

class UeberUnsTemplate extends React.Component {

    render() {

        const graphQlResult = this.props.data.contentfulUeberUns

        const pathPrefix =
            process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
        return (
            <div>

                <Helmet
                    title={graphQlResult.metaData.title}
                    meta={[
                        {
                            property: 'og:title',
                            content: `${graphQlResult.metaData.title}`
                        }, {
                            property: 'Keywords',
                            content: `${graphQlResult.metaData.keywords.keywords}`
                        }, {
                            property: 'Description',
                            content: `${graphQlResult.metaData.description.description}`
                        }, {
                            property: 'og:description',
                            content: `${graphQlResult.metaData.description.description}`
                        }
                    ]} />

                <SiteHeader
                    title={graphQlResult.hauptueberschrift}
                    imageFile={graphQlResult.titelbild} 
                    imageSmall={graphQlResult.titelbildKlein} />

                <SiteHeaderContent
                    title={graphQlResult.beschreibungTitel}
                    subtitle={graphQlResult.beschreibungUntertitel}
                    text1={graphQlResult.beschreibungAbsatz1 ? graphQlResult.beschreibungAbsatz1.beschreibungAbsatz1 : null}
                    text2={null} />

                <div className="container padding-sm-top-bottom">

                    <div className="row text-center">
                        <div className="col-12 col-md-2">

                        </div>
                        <div className="col-12 col-md-8">
                            <p className="h5">{graphQlResult.ueberschriftVon3SpaltenTop}</p>
                        </div>
                        <div className="col-12 col-md-2">

                        </div>
                    </div>

                    <div className="row justify-content-center text-center padding-md-top-bottom">
                        <div className="col-6 col-md-4">
                            <ContentfulImage imageFile={graphQlResult.spaltenTopBildLinks} styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-top-bottom" />
                            <ContentfulImage imageFile={graphQlResult.spaltenTopBildLinks} styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-top-bottom" />
                            <h4 className="h5 d-inline padding-sm-bottom">{graphQlResult.spaltenTopTitelLinks}<br/></h4>
                            <p className="d-inline">{graphQlResult.spaltenTopTextLinks.spaltenTopTextLinks}</p>
                        </div>
                        <div className="col-6 col-md-4">
                            <ContentfulImage imageFile={graphQlResult.spaltenTopBildMitte} styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-top-bottom" />
                            <ContentfulImage imageFile={graphQlResult.spaltenTopBildMitte} styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-top-bottom" />
                            <h4 className="h5 d-inline padding-sm-bottom">{graphQlResult.spaltenTopTitelMitte}<br/></h4>
                            <p className="d-inline">{graphQlResult.spaltenTopTextMitte.spaltenTopTextMitte}</p>
                        </div>
                        <div className="col-6 col-md-4">
                            <ContentfulImage imageFile={graphQlResult.spaltenTopBildRechts} styleClasses="img-fluid d-block d-md-none w-100 mx-auto padding-sm-top-bottom" />
                            <ContentfulImage imageFile={graphQlResult.spaltenTopBildRechts} styleClasses="img-fluid d-none d-md-block w-50 mx-auto padding-sm-top-bottom" />
                            <h4 className="h5 d-inline padding-sm-bottom">{graphQlResult.spaltenTopTitelRechts}<br/></h4>
                            <p className="d-inline">{graphQlResult.spaltenTopTextRechts.spaltenTopTextRechts}</p>
                        </div>
                    </div>

                    <div className="row text-center padding-sm-top-bottom">
                        <div className="col-12 col-md-2">

                        </div>
                        <div className="col-12 col-md-8">
                            <p>{graphQlResult.spaltenTopTextUnten.spaltenTopTextUnten}</p>
                        </div>
                        <div className="col-12 col-md-2">

                        </div>
                    </div>

                </div>

                <div className="container padding-lg-top-bottom">

                    <div className="row">

                        <div className="col-12 col-md-6 d-none d-md-block">
                            <div className="row justify-content-end">

                                <div className="col-12 col-lg-10 order-1">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="h6">{graphQlResult.ersteTextboxUntertitel}</h2>
                                            <h3 className="h2">{graphQlResult.ersteTextboxTitel}</h3>
                                            <ContentfulMarkdownText text={graphQlResult.ersteTextboxInhalt.ersteTextboxInhalt} {...this.props}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">

                                <div className="col-12 col-lg-10 order-3">
                                    <div className="row d-none d-md-block filler-box-two">
                                        <div className="col-12">
                                            <p className="filler"></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <h2 className="h6">{graphQlResult.dritteTextboxUntertitel}</h2>
                                            <h3 className="h2">{graphQlResult.dritteTextboxTitel}</h3>
                                            <ContentfulMarkdownText text={graphQlResult.dritteTextboxInhalt.dritteTextboxInhalt} {...this.props}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-none d-md-block">
                            <div className="row">

                                <div className="col-12 order-2">
                                    <div className="row d-none d-md-block filler-box justify-content-end">
                                        <div className="col-12 col-lg-10">
                                            <p className="filler"></p>
                                        </div>
                                    </div>

                                    <div className="row justify-content-end">
                                        <div className="col-12 col-lg-10">
                                            <h2 className="h6">{graphQlResult.zweiteTextboxUntertitel}</h2>
                                            <h3 className="h2">{graphQlResult.zweiteTextboxTitel}</h3>
                                            <ContentfulMarkdownText text={graphQlResult.zweiteTextboxInhalt.zweiteTextboxInhalt} {...this.props}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 order-1 d-block d-md-none padding-md-top-bottom">

                            <div className="row">
                                <div className="col-12">
                                    <h2 className="h6">{graphQlResult.ersteTextboxUntertitel}</h2>
                                    <h3 className="h2">{graphQlResult.ersteTextboxTitel}</h3>
                                    <ContentfulMarkdownText text={graphQlResult.ersteTextboxInhalt.ersteTextboxInhalt} {...this.props} />
                                </div>
                            </div>

                        </div>

                        <div className="col-12 order-3 d-block d-md-none padding-md-top-bottom">

                            <div className="row d-none d-md-block filler-box-two">
                                <div className="col">
                                    <p className="filler"></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <h2 className="h6">{graphQlResult.dritteTextboxUntertitel}</h2>
                                    <h3 className="h2">{graphQlResult.dritteTextboxTitel}</h3>
                                    <ContentfulMarkdownText text={graphQlResult.dritteTextboxInhalt.dritteTextboxInhalt} {...this.props}/>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 order-2 d-block d-md-none padding-md-top-bottom">
                            <div className="row d-none d-md-block filler-box">
                                <div className="col">
                                    <p className="filler"></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <h2 className="h6">{graphQlResult.zweiteTextboxUntertitel}</h2>
                                    <h3 className="h2">{graphQlResult.zweiteTextboxTitel}</h3>
                                    <ContentfulMarkdownText text={graphQlResult.zweiteTextboxInhalt.zweiteTextboxInhalt} {...this.props} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-1">
                        </div>
                        <div className="col-12 col-md-8">
                            <h2 className="h6">{graphQlResult.raeumlichkeitenUntertitel}</h2>
                            <h3 className="h2 padding-sm-bottom">{graphQlResult.raeumlichkeitenTitel}</h3>
                            <div id="carouselCaptionsArbeitsplatz" className="carousel slide" data-ride="carousel" data-interval="false">
                                <div className="carousel-inner">
                                    {graphQlResult.raeumlichkeitenBilder.map((bild, i) => {
                                        return (
                                            <div className={"text-center carousel-item" + (i == 0 ? " active" : "")} key={"carousel-item-" + i}>
                                                <ContentfulImage imageFile={bild} styleClasses="d-block w-100 padding-sm-bottom" key={"carousel-item-image-small-" + i} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <a className="carousel-control-prev" href="#carouselCaptionsArbeitsplatz" role="button" data-slide="prev">
                                    <i className="fa fa-chevron-left text-primary" aria-hidden="true"></i>
                                </a>
                                <a className="carousel-control-next" href="#carouselCaptionsArbeitsplatz" role="button" data-slide="next">
                                    <i className="fa fa-chevron-right text-primary" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row padding-sm-top-bottom">
                        <div className="col-12 col-md-1">
                        </div>
                        <div className="col-12 col-md-8">
                            <ContentfulMarkdownText text={graphQlResult.raeumlichkeitenBeschreibung.raeumlichkeitenBeschreibung} {...this.props} />
                        </div>
                    </div>
                </div>

                <div className="container padding-sm-top-bottom d-block d-md-none">
                    <div className="row">
                        <div className="col">
                            <h2 className="h6">{graphQlResult.kollegenUntertitel}</h2>
                            <h3 className="h2">{graphQlResult.kollegenTitel}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"> 
                            <TestimonialCarousel carouselId="testimonialc" testimonials={graphQlResult.testimonialsVonUeberUns} /> 
                        </div>
                    </div>
                </div>


                <div className="container padding-lg-top-bottom d-none d-md-block">
                    <div className="row">
                        <div className="col">
                            <h2 className="h6">{graphQlResult.kollegenUntertitel}</h2>
                            <h3 className="h2">{graphQlResult.kollegenTitel}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 padding-sm-top-bottom">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={graphQlResult.videoLink1.replace("/watch?v=", "/embed/")}></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="h4">{graphQlResult.kollegenZitat.kollegenZitat}</p>
                            <p>{graphQlResult.kollegenAuthorZitat}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 padding-sm-top-bottom">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={graphQlResult.videoLink2.replace("/watch?v=", "/embed/")}></iframe>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 padding-sm-top-bottom">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={graphQlResult.videoLink3.replace("/watch?v=", "/embed/")}></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">

                        </div>
                        <div className="col-12 col-md-6 padding-sm-top-bottom">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={graphQlResult.videoLink4.replace("/watch?v=", "/embed/")}></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container padding-md-top-bottom">
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-8">
                            <h2 className="h6">{graphQlResult.projekteUntertitel}</h2>
                            <h3 className="h2">{graphQlResult.projekteTitel}</h3>
                            <ContentfulImage imageFile={graphQlResult.projekteBild} styleClasses="img-fluid padding-sm-top-bottom" />
                        </div>
                        <div className="col-12 col-md-1">
                        </div>
                    </div>
                    <div className="row justify-content-end padding-sm-top-bottom">
                        <div className="col-12 col-md-8">
                            <ContentfulMarkdownText text={graphQlResult.projekteBeschreibung.projekteBeschreibung} {...this.props}/>
                        </div>
                        <div className="col-12 col-md-1">
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>{graphQlResult.faktenCofinpro.titel}</h2>
                        </div>
                    </div>
                </div>

                <Facts
                    fakt1Titel={graphQlResult.faktenCofinpro.fakt1Titel}
                    fakt1Text={graphQlResult.faktenCofinpro.fakt1Text}
                    fakt1Image={graphQlResult.faktenCofinpro.fakt1Bild}
                    fakt2Titel={graphQlResult.faktenCofinpro.fakt2Titel}
                    fakt2Text={graphQlResult.faktenCofinpro.fakt2Text}
                    fakt2Image={graphQlResult.faktenCofinpro.fakt2Bild}
                    fakt3Titel={graphQlResult.faktenCofinpro.fakt3Titel}
                    fakt3Text={graphQlResult.faktenCofinpro.fakt3Text}
                    fakt3Image={graphQlResult.faktenCofinpro.fakt3Bild}
                    fakt4Titel={graphQlResult.faktenCofinpro.fakt4Titel}
                    fakt4Text={graphQlResult.faktenCofinpro.fakt4Text}
                    fakt4Image={graphQlResult.faktenCofinpro.fakt4Bild} />

                <div className="container padding-md-top-bottom">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 text-center">
                            <ContentfulImage imageFile={graphQlResult.standorte} styleClasses="img-fluid img-md-padding" />
                            <p>Unsere Standorte</p>
                        </div>
                        <div className="col-12 col-md-2">
                                <p className="padding-md-top-bottom"></p>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-12 col-md-9 col-lg-8 mx-auto align-self-center">
                                    <ImageCarousel carouselId="auszeichnungen" contentfulImages={graphQlResult.auszeichnungenBilder} />
                                    <p className="text-center padding-md-top">Unsere Auszeichnungen</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-1">
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

export default UeberUnsTemplate

export const pageQuery = graphql`
query ueberUnsQuery($id: String!) {
    contentfulUeberUns(id: { eq: $id }) {
        id
        metaData {
          title
          keywords {
            keywords
          }
          description {
            description
          }
        }
        parent {
          id
        }
        titel
        hauptueberschrift
        titelbild {
            id
            title
            description
            file {
                url
                fileName
                contentType
            }
        }
        titelbildKlein {
            id
            title
            description
            file {
              url
              fileName
              contentType
            }
          }
        beschreibungUntertitel
        beschreibungTitel
        beschreibungAbsatz1 {
          beschreibungAbsatz1
        }
        beschreibungAbsatz2 {
          beschreibungAbsatz2
        }
        ueberschriftVon3SpaltenTop
        spaltenTopTitelLinks
        spaltenTopTextLinks {
            spaltenTopTextLinks
        }
        spaltenTopBildLinks {
            id
            title
            description
            file {
              url
              fileName
              contentType
            }
          }
        spaltenTopTitelMitte
        spaltenTopTextMitte {
            spaltenTopTextMitte
        }
        spaltenTopBildMitte {
            id
            title
            description
            file {
              url
              fileName
              contentType
            }
          }
        spaltenTopTitelRechts
        spaltenTopTextRechts {
            spaltenTopTextRechts
        }
        spaltenTopBildRechts {
            id
            title
            description
            file {
              url
              fileName
              contentType
            }
          }
        spaltenTopTextUnten {
            spaltenTopTextUnten
        }
        ersteTextboxUntertitel
        ersteTextboxTitel
        ersteTextboxInhalt {
          ersteTextboxInhalt
        }
        zweiteTextboxUntertitel
        zweiteTextboxTitel
        zweiteTextboxInhalt {
          zweiteTextboxInhalt
        }
        dritteTextboxUntertitel
        dritteTextboxTitel
        dritteTextboxInhalt {
          dritteTextboxInhalt
        }
        raeumlichkeitenUntertitel
        raeumlichkeitenTitel
        raeumlichkeitenBilder {
            id
            title
            description
            file {
                url
                fileName
                contentType
            }
        }
        raeumlichkeitenBeschreibung {
            raeumlichkeitenBeschreibung
        }
        kollegenUntertitel
        kollegenTitel
        kollegenZitat {
          kollegenZitat
        }
        videoLink1
        videoLink2
        videoLink3
        videoLink4
        testimonialsVonUeberUns {
            titel
            ueberschrift
            zitat {
              zitat
            }
            bildTestimonial {
              id
              title
              description
              file {
                url
                fileName
                contentType
              }
            }
            linkVonYouTubeVideo
            autor
            autorTitel
            buttonText
        }
        kollegenAuthorZitat
        projekteUntertitel
        projekteTitel
        projekteBild {
            id
            title
            description
            file {
                url
                fileName
                contentType
            }
        }
        projekteBeschreibung {
            projekteBeschreibung
        }
        faktenCofinpro {
            name
            untertitel
            titel
            fakt1Titel
            fakt1Text
            fakt1Bild {
                id
                title
                description
                file {
                    url
                    fileName
                    contentType
                }
            }
            fakt2Titel
            fakt2Text
            fakt2Bild {
                id
                title
                description
                file {
                    url
                    fileName
                    contentType
                }
            }
            fakt3Titel
            fakt3Text
            fakt3Bild {
                id
                title
                description
                file {
                    url
                    fileName
                    contentType
                }
            }
            fakt4Titel
            fakt4Text
            fakt4Bild {
                id
                title
                description
                file {
                    url
                    fileName
                    contentType
                }
            }
          }
        auszeichnungenBilder {
            id
            title
            description
            file {
                url
                fileName
                contentType
            }
        }
        standorte {
            id
            title
            description
            file {
                url
                fileName
                contentType
            }
        }
      }
}
`