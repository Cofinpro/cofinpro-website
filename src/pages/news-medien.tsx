import React from 'react';
import { graphql } from 'gatsby';

import LinkButton from 'components/buttons/LinkButton';
import ExternalLinkButton from 'components/buttons/ExternalLinkButton';
import HtmlHeader from 'components/HtmlHeader';
import PageIntroText from 'components/PageIntroText';
import PresseKontakt from 'components/PresseKontakt';
import { ImageWrapper, SourceTyp } from 'components/images/ImageWrapper';
import { SharpImage } from '../models/SharpImage';

interface Props {
  data: {
    newsImage: SharpImage;
    blogImage: SharpImage;
  };
}

class NewsMedienVerteiler extends React.Component<Props> {
  render() {
    const seoTitle = 'Unser Medienforum - Neues von Cofinpro - Unser Blog';
    const seoDescription =
      'Weil Zukunft unser Geschäft ist, tut sich bei uns ständig etwas, und natürlich wollen wir Sie daran teilhaben lassen. Wenn Sie erfahren möchten, welche Neuigkeiten unsere Experten haben, sind Sie hier ganz richtig.';

    return (
      <div>
        <HtmlHeader
          direktData={{
            title: seoTitle,
            description: seoDescription,
          }}
        />
        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <h1 className="h1">Unser Medienforum</h1>
              <PageIntroText
                content={{
                  text:
                    'Weil Zukunft unser Geschäft ist, tut sich bei uns ständig etwas, und natürlich wollen wir Sie daran teilhaben lassen. Wenn Sie erfahren möchten, welche Neuigkeiten unsere Experten haben, sind Sie hier ganz richtig.',
                }}
              />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.newsImage} />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="h2 margin-20-bottom margin-xs-20-top">Neues von Cofinpro</h2>
              <p>
                Hier finden Sie unsere sämtlichen Veröffentlichungen: von Publikationen in digitalen und analogen Fachmedien über
                Whitepaper, Studien und Thesenpapiere bis zu Pressemitteilungen und unserem Unternehmensfolder. Alles natürlich rund um
                unsere Fachberatung in den Bereichen Kredit und Wertpapier, unsere Management- und Technologieberatung.
              </p>
              <LinkButton styleSpan="w-100 w-md-unset margin-10-top" text="ZU DEN MEDIEN" path="/news-medien/alle-beratungsfelder" />
            </div>
          </div>
        </div>

        <div className="container margin-100-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h2 className="h2 margin-20-bottom margin-xs-20-top">Unser Tech-Blog</h2>
              <p>
                Was treiben unsere Technologieberater? Sehr viel, das ist schon mal klar. Hier erfahren Sie aus erster Hand, welche Themen
                uns derzeit beschäftigen und welche Lösungswege wir gehen. Dazu gehört auch unser eigener Podcast, für den sich unsere
                Experten regelmäßig ans Mikro setzen, um aktuelle Herausforderungen und Trendthemen zu diskutieren.
              </p>
              <ExternalLinkButton
                styleSpan="w-100 w-md-unset margin-10-top"
                text="ZUM BLOG"
                _target="_blank"
                _href="https://medium.com/cofinpro"
              />
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <ImageWrapper sourceType={SourceTyp.Sharp} source={this.props.data.blogImage} />
            </div>
          </div>
        </div>

        <div className="container margin-120-top margin-xs-80-top">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-6">
              <PresseKontakt />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsMedienVerteiler;

export const pageQuery = graphql`
  query newsMedienQuery {
    newsImage: imageSharp(id: { regex: "/news-medien-b3/" }) {
      fluid(quality: 100, maxWidth: 800, maxHeight: 460, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
    blogImage: imageSharp(id: { regex: "/news-medien-blog/" }) {
      fluid(quality: 100, maxWidth: 800, maxHeight: 460, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
