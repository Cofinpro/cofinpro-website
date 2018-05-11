import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import ThreeIconsWithTextLayout from '../../components/layouts/ThreeIconsWithTextLayout'
import SubtitleTitelImageTextLayout from '../../components/layouts/SubtitleTitelImageTextLayout'
import HeroImageLayout from '../../components/layouts/HeroImageLayout'

import SiteHeaderContent from '../../components/SiteHeaderContent'
import ContentfulImage from '../../components/ContentfulImage'
import HtmlHeader from '../../components/HtmlHeader'
import LinkButton from '../../components/buttons/LinkButton'

class Technologie extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    var titleImage = {
      id: 'c2gzFx5WIgEIoCc0AaWuQYk',
      title: 'entwicklung desktop',
      description: 'Entwicklungsmöglichkeiten Unternehmensberatung Consulting',
      file: {
        url:
          '//images.ctfassets.net/niza6hilizwt/2gzFx5WIgEIoCc0AaWuQYk/68c4c7d7e5b361669ee12de75e1215e2/entwicklung_desktop.jpg',
        fileName: 'entwicklung_desktop.jpg',
        contentType: 'image/jpeg',
      },
    }

    return (
      <div>
        <HeroImageLayout
          title="Lorem ipsum dolor sit amet."
          imageFile={titleImage}
        />

        <SiteHeaderContent
          title="Lorem ipsum dolor sit amet."
          subtitle="Lorem ipsum dolor sit amet."
          text1="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          text2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <SubtitleTitelImageTextLayout
                subtitle="PERSÖNLICHE GRENZEN UND MÖGLICHKEITEN TEST"
                title="Coding Dojo"
                image={null}
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
                containerStyle="margin-100-top"
                fullWidth={true}
                {...this.props}
              />
            </div>
            <div className="col-6">
              <SubtitleTitelImageTextLayout
                subtitle="PERSÖNLICHE GRENZEN UND MÖGLICHKEITEN TEST"
                title="Coding Dojo"
                image={null}
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
                containerStyle="margin-100-top"
                fullWidth={true}
                {...this.props}
              />
            </div>
            <div className="col-6">
              <SubtitleTitelImageTextLayout
                subtitle="PERSÖNLICHE GRENZEN UND MÖGLICHKEITEN TEST"
                title="Coding Dojo"
                image={null}
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
                containerStyle="margin-100-top"
                fullWidth={true}
                {...this.props}
              />
            </div>
            <div className="col-6">
              <SubtitleTitelImageTextLayout
                subtitle="PERSÖNLICHE GRENZEN UND MÖGLICHKEITEN TEST"
                title="Coding Dojo"
                image={null}
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
                containerStyle="margin-100-top"
                fullWidth={true}
                {...this.props}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Technologie
