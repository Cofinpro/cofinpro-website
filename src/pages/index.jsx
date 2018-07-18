import React from 'react'

import LinkButton from '../components/buttons/LinkButton'
import ToggleButton from '../components/buttons/ToggleButton'
import NewsPreviewV2 from '../components/NewsPreviewV2'
import ContentfulMarkdownText from '../components/ContentfulMarkdownText'
import FokusthemenPreview from '../components/layouts/FokusthemenPreview'

import {
  ImageWrapper,
  SOURCE_TYP_PLACEHOLDER,
} from '../components/images/ImageWrapper'

class Startseite extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    let cofinproNews = {
      data: {
        allContentfulSeiteNews: {
          edges: [
            {
              node: {
                id: 'c5x4I6JxbA4uW6KKMUOKQWG',
                zugeordnetePerspektivenKompetenz: [{ name: 'studenten' }],
                metaData: {
                  title: 'News: Cofinpro Karrieremagazin #1',
                  keywords: {
                    keywords:
                      'Karrieremagazin, Karriere, Magazin, Bewerbung, Worklife',
                  },
                  description: {
                    description:
                      'Tadaa!\n\nDie erste Ausgabe unseres Cofinpro Karrieremagazins liegt druckfrisch vor uns, riecht herrlich nach Zukunft und macht uns mächtig stolz.  \nWarum ein Magazin? Ach, wir mussten es einfach tun. Weil wir so viel mit Dir zu teilen haben und wollen, dass Du uns noch persönlicher kennenlernen kannst.',
                  },
                },
                parent: {
                  id: 'Seite - News',
                },
                url: 'cofinpro-karriere-magazin-nummer-eins',
                titel: 'Cofinpro Karrieremagazin #1 out now',
                titelbild: {
                  id: 'c3CIF9CwzNugugQSG4M86Gs',
                  title: 'Cofinpro Karrieremagazin',
                  description: 'Karriere Magazin',
                  file: {
                    url:
                      '//images.ctfassets.net/niza6hilizwt/3CIF9CwzNugugQSG4M86Gs/09f978d2adca640f5a8663c6017598d6/20180423-cofinpro-magazine15656_pinnwand.jpg',
                    fileName: '20180423-cofinpro-magazine15656_pinnwand.jpg',
                    contentType: 'image/jpeg',
                  },
                },
                datumFuerDieAnzeige: '2018-04-24',
                ueberschrift: 'Cofinpro Karrieremagazin #1 - out now!',
                kurzeBeschreibung: {
                  kurzeBeschreibung:
                    'Tadaa! Die erste Ausgabe unseres Cofinpro Karrieremagazins liegt druckfrisch vor uns, riecht herrlich nach Zukunft und macht uns mächtig stolz. Warum ein Magazin? Ach, wir mussten es einfach tun. Weil wir so viel mit Dir zu teilen haben und wollen, dass Du uns noch persönlicher kennenlernen kannst.',
                },
                absatz1: {
                  absatz1:
                    'Tadaa!\n\nDie erste Ausgabe unseres Cofinpro Karrieremagazins liegt druckfrisch vor uns, riecht herrlich nach Zukunft und macht uns mächtig stolz.  \nWarum ein Magazin? Ach, wir mussten es einfach tun. Weil wir so viel mit Dir zu teilen haben und wollen, dass Du uns noch persönlicher kennenlernen kannst.',
                },
                newsBild: {
                  id: 'c5tkoW65cekUIqI2IkYumsU',
                  title: 'Cofinpro Karrieremagazin Porsche',
                  description: 'Cofinpro Karrieremagazin Porsche Öko',
                  file: {
                    url:
                      '//images.ctfassets.net/niza6hilizwt/5tkoW65cekUIqI2IkYumsU/86d96d705ee4a7050c741f8b9b5ccf47/17-04-14-jetztmusik-ffm-hd-6860-8x5.jpg',
                    fileName: '17-04-14-jetztmusik-ffm-hd-6860-8x5.jpg',
                    contentType: 'image/jpeg',
                  },
                },
                absatz2: {
                  absatz2:
                    'Das erste Heft dreht sich um Work-Life-Balance (nein, wir fahren nicht alle Porsche), unsere Arbeit für die Zukunft der Finanzindustrie sowie viele Anekdoten aus unseren grandiosen Teams. Und natürlich findest Du darin auch alles, was es über Deine Karrierechancen bei Cofinpro zu erfahren gibt, genauso wie viele Infos rund um Deine Bewerbung.  \n[Hier](https://www.karriere.cofinpro.de/pdfs/magazin/1) kannst Du Dir das gute Stück downloaden.  \nUnd beim persönlichen Kennenlernen drücken wir Dir natürlich ein Exemplar in die Hand. Wir freuen uns auf Dein Feedback – und schon jetzt auf die zweite Ausgabe.',
                },
              },
            },
            {
              node: {
                id: 'c189mrz1bxcWQ62Cq2KO4ea',
                zugeordnetePerspektivenKompetenz: [{ name: 'studenten' }],
                metaData: {
                  title: 'News: Cofinpro auf der konaktiva Studentenmesse',
                  keywords: {
                    keywords:
                      'Karriere, Karrieretag, IT, Connecticum, Messen, Studenten',
                  },
                  description: {
                    description:
                      'Du wünschst Dir reinen Wein statt heißen Brei? Uns geht es genauso.\nDarum komm uns doch auf der »Konaktiva« Messe in Darmstadt besuchen. Hier können wir uns vom 15. bis 17. Mai 2018 kennenlernen, und Du kannst uns ausgiebig zu Deinen Karrieremöglichkeiten und vielen weiteren Themen rund um Cofinpro befragen.',
                  },
                },
                parent: {
                  id: 'Seite - News',
                },
                url: 'cofinpro-messe-warmup',
                titel: 'Cofinpro Messe Warmup',
                titelbild: {
                  id: 'eYPqsx9Kw0c02ComUguiI',
                  title: 'konaktiva karrieremesse summer warm up',
                  description: 'konaktiva karrieremesse summer warm up',
                  file: {
                    url:
                      '//images.ctfassets.net/niza6hilizwt/eYPqsx9Kw0c02ComUguiI/d0a5c40593da3512d333f30b56f13990/koantkiva_summer_warm_up_2018_Klammer_Yoga.jpg',
                    fileName: 'koantkiva_summer_warm_up_2018_Klammer_Yoga.jpg',
                    contentType: 'image/jpeg',
                  },
                },
                datumFuerDieAnzeige: '2018-04-12',
                ueberschrift: 'Cofinpro Messe-Workout',
                kurzeBeschreibung: {
                  kurzeBeschreibung:
                    'Beim diesjährigen kontaktiva summer warm up laufen wir uns schon mal für die gleichnamige Messe im Mai warm. In unserem Vortrag plaudern wir über die 10 wichtigsten Fragen beim ersten (Job)Date. Unsere Berater haben so Einiges hinter sich und zeigen in 10 Punkten auf, wie man mit einem zukünftigen Arbeitgeber warm wird und was dieser alles bieten kann.',
                },
                absatz1: {
                  absatz1:
                    'Beim diesjährigen [konaktiva summer warm up](https://www.konaktiva.tu-darmstadt.de/?page_id=86) laufen wir uns schon mal für die gleichnamige Messe im Mai warm.  \nIn unserem Vortrag plaudern wir über die 10 wichtigsten Fragen beim ersten (Job)Date.  \nUnsere Berater haben so Einiges hinter sich und zeigen in 10 Punkten auf, wie man mit einem zukünftigen Arbeitgeber warm wird und was dieser alles bieten kann.\n\nWann Du uns treffen kannst? 26. April 2018 von 11.30 – 12.30 Uhr  \nUnd wo? ULB Darmstadt, Vortragssaal, Gebäude S1 | 20\n',
                },
                newsBild: null,
                absatz2: null,
              },
            },
          ],
        },
      },
    }

    const fokusthemen = []

    for (let i = 0; i < 18; ++i) {
      fokusthemen.push('Fokusthema ' + i)
    }

    const testImageStyle = {
      height: '250px',
      width: '100%',
      display: 'block',
    }

    return (
      <div>
        <div className="container-fluid no-gutters">
          <div className="row">
            <div className="col-12">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 2000,
                  height: 800,
                }}
              />
            </div>
          </div>
        </div>

        <div className="container margin-80-top margin-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="h1">Headline</h1>
              <p>
                Wir verfolgen ein Beratungskonzept, das alle Elemente der
                Wertschöpfungskette von Unternehmen im Finanzsektor
                berücksichtigt: die Management-beratung, die Fachberatung
                speziell für Kredit und Wertpapier und schließlich die
                Technologieberatung für agile Architekturen.
              </p>
              <LinkButton
                styleLink="d-inline d-md-none"
                styleSpan="margin-20-bottom w-100"
                text="BERATUNGSFELDER ÜBERSICHT"
                path="/beratungsfelder"
              />
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text="MEHR ÜBER COFINPRO"
                path="/cofinpro"
              />
            </div>
          </div>
        </div>

        <div className="container margin-80-top d-none d-md-block">
          <div className="row text-center">
            <div className="col-4">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 59,
                  height: 65,
                }}
                styleClasses="padding-20"
              />
              <p className="h5">Managementberatung</p>
            </div>
            <div className="col-4">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 59,
                  height: 65,
                }}
                styleClasses="padding-20"
              />
              <p className="h5">Fachberatung</p>
            </div>
            <div className="col-4">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 59,
                  height: 65,
                }}
                styleClasses="padding-20"
              />
              <p className="h5">Technologieberatung</p>
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12">
              <h3 className="h2">News&Medien</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12" />
            {cofinproNews.data.allContentfulSeiteNews.edges.length > 0
              ? cofinproNews.data.allContentfulSeiteNews.edges.map(
                  (news, i) => {
                    let columnStyle = ''

                    if (i === 1) {
                      columnStyle = 'd-none d-md-block'
                    }

                    if (i < 2) {
                      return (
                        <div
                          className={'col-12 col-md-6 ' + columnStyle}
                          key={'news-column-' + i}
                        >
                          <NewsPreviewV2
                            key={'news-NewsPreview-' + i}
                            createdAt={news.node.datumFuerDieAnzeige}
                            title={news.node.ueberschrift}
                            description={
                              news.node.kurzeBeschreibung !== null
                                ? news.node.kurzeBeschreibung.kurzeBeschreibung
                                : null
                            }
                            newsId={news.node.id}
                            imageFile={news.node.titelbild}
                            imageFileSharp={news.node.titelbildSharp}
                            url={news.node.url}
                            {...this.props}
                          />
                        </div>
                      )
                    } else {
                      return null
                    }
                  }
                )
              : null}
            <div className="col-12 col-md-1" />
          </div>
          <div className="row">
            <div className="col-12 col-md-12">
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text="NEWS&MEDIEN ÜBERSICHT"
                path="/karriere/pinnwand"
                {...this.props}
              />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 d-flex">
              <div className="row">
                <div className="col-12">
                  <h2>Fokusthemen</h2>
                  <p>
                    Atatios culpa dolut a dolorep reculparumet alistibus mi,
                    volo blaccum alibus ex et, commolu ptatiam endit, simus ab
                    iumendenis et ommolorrorro que dolupta consedigeni nime
                    exera sunt rest estenecti dolut que derspel ipiciminus
                    restis diam nam est volest, te esequodi que voles de nim nos
                    quam et ut offici ulla accum facessus eos sinciis coreperia
                    con cus, tem quidelendit plit magnam, comnis dia sim nitae
                    netur sunti ommosam rem eos nulluptate vendam repudita
                    nonsequi cupta nus, ilia que porestis essitamet aspeditassus
                    et pa volorit atemporiant liquis molum int ea qui rae si re
                    cum fugia inulpa sum doluptatur, sit faccum qui rescid quid
                    quiditi num dolesto tatiumquis atatemporate ne cus quia
                    vendus dolupta sitatio.
                  </p>
                </div>
                <div className="col-12 d-none d-md-block align-self-end">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 1"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-6 d-none d-md-block">
              <div className="row">
                <div className="col-2" />
                <div className="col-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 2"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    styleClasses="margin-60-top margin-120-bottom"
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 3"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex d-md-none">
            {fokusthemen.map((item, i) => {
              if (i < 3) {
                return (
                  <div className="col-12" key={'fokusthema-mobile-' + i}>
                    <ImageWrapper
                      sourceType={SOURCE_TYP_PLACEHOLDER}
                      source={{
                        width: 1200,
                        height: 800,
                      }}
                      styleClasses="margin-20-top"
                      overlayElement={
                        <ContentfulMarkdownText
                          text={'### ' + item}
                          styleClasses="h4"
                        />
                      }
                    />
                  </div>
                )
              } else {
                return null
              }
            })}
            <div className="col-12">
              <p className="h3 margin-40-top">
                „tibusda volorum quiam, volenimus aut esti asseque velecatus.
                Fere reic tem seque dus eum rectur sit latemperovit quam sumendi
                nectibus.“
              </p>
            </div>
          </div>
          <div className="row d-none d-md-flex align-items-end negative-margin-80-top">
            <div className="col-1" />
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 4"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-2" />
                <div className="col-10">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 5"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
              <div className="row margin-40-top">
                <div className="col-10">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 6"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
                <div className="col-2" />
              </div>
            </div>
          </div>

          <div className="row d-none d-md-flex align-items-center margin-40-top">
            <div className="col-8">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 7"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-4">
              <p className="h3">
                „tibusda volorum quiam, volenimus aut esti asseque velecatus.
                Fere reic tem seque dus eum rectur sit latemperovit quam sumendi
                nectibus.“
              </p>
            </div>
          </div>
          <div className="row d-none d-md-flex align-items-center margin-40-top">
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 8"
                    styleClasses="h4"
                  />
                }
              />
            </div>
            <div className="col-6">
              <ImageWrapper
                sourceType={SOURCE_TYP_PLACEHOLDER}
                source={{
                  width: 1200,
                  height: 800,
                }}
                overlayElement={
                  <ContentfulMarkdownText
                    text="### Fokusthema 9"
                    styleClasses="h4"
                  />
                }
              />
              <div className="row margin-40-top">
                <div className="col-4" />
                <div className="col-8">
                  <ImageWrapper
                    sourceType={SOURCE_TYP_PLACEHOLDER}
                    source={{
                      width: 1200,
                      height: 800,
                    }}
                    overlayElement={
                      <ContentfulMarkdownText
                        text="### Fokusthema 10"
                        styleClasses="h4"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="collapse" id="more-fokusthemen">
                <FokusthemenPreview items={fokusthemen} />
              </div>
            </div>
          </div>
          <div className="row margin-40-top margin-xs-20-top">
            <div className="col-12 col-md-4 order-2 order-md-1">
              <LinkButton
                styleSpan="w-100 w-md-unset"
                text="FOKUSTHEMEN ÜBERSICHT"
                path="/fokusthemen"
              />
            </div>
            <div className="d-block d-md-none col-12 col-md-4 order-1 order-md-2 text-center margin-10-bottom">
              <div
                style={{
                  display: fokusthemen.length > 10 ? 'block' : 'none',
                }}
              >
                <ToggleButton
                  id="pinnwand"
                  dataTarget={'more-fokusthemen'}
                  showElemForMore="label-toggle-focusthemen-more"
                  showElemForLess="label-toggle-focusthemen-less"
                />
                <div id="label-toggle-focusthemen-more">
                  <p className="d-none d-md-block text-primary text-size-14">
                    MEHR<br />ANZEIGEN
                  </p>
                  <p className="d-block d-md-none text-primary text-size-14">
                    MEHR ANZEIGEN
                  </p>
                </div>
                <div
                  id="label-toggle-focusthemen-less"
                  style={{ display: 'none' }}
                >
                  <p className="d-none d-md-block text-primary text-size-14">
                    WENIGER<br />ANZEIGEN
                  </p>
                  <p className="d-block d-md-none text-primary text-size-14">
                    WENIGER ANZEIGEN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Startseite
