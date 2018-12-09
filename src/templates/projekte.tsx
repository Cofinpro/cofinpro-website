import React from 'react';
import { Link } from 'gatsby';

import ContentfulMarkdownText from 'components/ContentfulMarkdownText';
import ToggleWithButton from 'components/buttons/ToggleWithButton';
import NavigationBeratungsfelder from 'components/navigation/NavigationBeratungsfelder';
import PageIntroText from 'components/PageIntroText';
import HtmlHeader from 'components/HtmlHeader';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';

interface Props {
  pathContext: {
    title: string;
    description: string;
    projects: any[];
    stockImages: any[];
  };
}

interface LayoutProps {
  projects: any[];
  images: any[];
  imageIndexOffset: number;
  style: {
    container: string;
  };
}

class ProjekteUebersicht extends React.Component<Props> {
  render() {
    // tslint:disable-next-line:function-name
    function Layout(props: LayoutProps) {
      return (
        <div className={`container ${props.style.container}`}>
          {props.projects.map((item, index) => {
            if (index % 2 === 0) {
              let firstColumnWidth;
              let secondColumnWidth;
              let rowAlignment;

              if (bigSmallSwitch) {
                secondColumnWidth = 'col-md-12';
                firstColumnWidth = 'col-md-8';
                rowAlignment = 'align-items-end margin-xs-0-top';
                if (projects.length !== index + 1) {
                  rowAlignment += ' negative-margin-80-top negative-margin-md-40-top';
                } else {
                  rowAlignment += ' margin-40-top';
                }

                bigSmallSwitch = false;
              } else {
                firstColumnWidth = 'col-md-12';
                secondColumnWidth = 'col-md-8';
                rowAlignment = 'align-items-start margin-40-top margin-xs-0-top';
                bigSmallSwitch = true;
              }

              return (
                <div key={index} className={`row ${rowAlignment}`}>
                  <div className="col-12 col-md-6">
                    <div className="row margin-xs-20-top justify-content-center">
                      <div className={`col-12 ${firstColumnWidth}`}>
                        <Link className="d-block text-dark" to={`/projekte/${item.urlDerSeite}`}>
                          <ImageWrapper
                            sourceType={SourceTyp.Bootstrap}
                            source={props.images[props.imageIndexOffset + index]}
                            overlayElement={
                              <div>
                                <ContentfulMarkdownText text={`## ${item.ueberschrift}`} styleClasses="h4 text-md-1rem" />
                                {item.unterueberschrift !== undefined && (
                                  <ContentfulMarkdownText text={` ${item.unterueberschrift}`} styleClasses="h5 text-md-1rem" />
                                )}
                              </div>
                            }
                            showOverlay={true}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {props.projects.length !== index + 1 && (
                    <div className="col-12 col-md-6">
                      <div className="row margin-xs-20-top justify-content-center">
                        <div className={`col-12 ${secondColumnWidth}`}>
                          <Link className="d-block text-dark" to={`/projekte/${props.projects[index + 1].urlDerSeite}`}>
                            <ImageWrapper
                              sourceType={SourceTyp.Bootstrap}
                              source={backgroundImages[index + 1]}
                              overlayElement={
                                <div>
                                  <ContentfulMarkdownText
                                    text={`## ${props.projects[index + 1].ueberschrift}`}
                                    styleClasses="h4 text-md-1rem"
                                  />
                                  {props.projects[index + 1].unterueberschrift !== undefined && (
                                    <ContentfulMarkdownText
                                      text={` ${props.projects[index + 1].unterueberschrift}`}
                                      styleClasses="h5 text-md-1rem"
                                    />
                                  )}
                                </div>
                              }
                              showOverlay={true}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      );
    }

    let bigSmallSwitch = false;

    const title = this.props.pathContext.title;
    const description = this.props.pathContext.description;
    const projects = this.props.pathContext.projects;
    const backgroundImages = this.props.pathContext.stockImages;

    const firstShowProjects = projects.slice(0, 8);
    const moreProjects = projects.slice(8, 16);

    const seoTitel = title;
    const seoDescription = description;

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: seoTitel,
            description: seoDescription,
          }}
        />
        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <h1 className="h1">{title}</h1>
              <PageIntroText content={{ text: description }} />
            </div>
            <div className="col-12 col-md-6" />
          </div>
        </div>

        <NavigationBeratungsfelder
          links={[
            { text: 'Managementberatung', path: '/managementberatung' },
            { text: 'Fachberatung Kredit', path: '/fachberatung-kredit' },
            {
              text: 'Fachberatung Wertpapier',
              path: '/fachberatung-wertpapier',
            },
            { text: 'Technologieberatung', path: '/technologieberatung' },
            { text: 'Digitalisierung', path: '/digitalisierung' },
          ]}
          urlPrefix="projekte"
          styleClass={'margin-80-top margin-xs-40-top'}
          description={'Aus welchem unserer Beratungsfelder möchten Sie Projekte ansehen? Wählen Sie selbst.'}
        />

        <Layout projects={firstShowProjects} images={backgroundImages} imageIndexOffset={0} style={{ container: 'margin-60-top' }} />

        <div className="collapse" id="collapse-more-projects">
          <Layout projects={moreProjects} images={backgroundImages} imageIndexOffset={7} style={{ container: '' }} />
        </div>
        {moreProjects.length > 0 && (
          <div className="container margin-40-top">
            <div className="row justify-content-center">
              <ToggleWithButton dataTargetId={'collapse-more-projects'} show={true} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjekteUebersicht;
