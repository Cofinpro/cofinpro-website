import React from 'react'

import RelevanteLinks from 'components/relevanteLinks'

class ContentseiteMin extends React.Component {
  render() {
    return (
      <div>
        <div className="container padding-60-top padding-xs-20-top">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="h1">Contentseite Minimal</h1>
              <div className="margin-100-top margin-xs-80-top" />
              <p className="h4">
                {' '}
                Genda excerum solecusam, venim atur sit illibus anditat harum
                aligendae ratur sus ducid et odigniscilis dolori di seceper
                roriber iaspidundaes volent repedit fuga. Nam esti conse landi
                quiamus incillam, atur aliberr oreperio.
              </p>
              <div className="margin-100-top margin-xs-80-top" />
              <p className="bold-font d-md-block">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-12 col-md-2" />
            <div className="col-12 col-md-4">
              <RelevanteLinks
                title="relevante fokusthemen"
                relevanteLinks={[
                  { title: 'hallo1', url: 'sasa' },
                  { title: 'hallo2', url: 'sasa' },
                  { title: 'hallo3', url: 'sasa' },
                  { title: 'hallo4', url: 'sasa' },
                  { title: 'hallo5', url: 'sasa' },
                  { title: 'hallo6', url: 'sasa' },
                  { title: 'hallo7', url: 'sasa' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentseiteMin
