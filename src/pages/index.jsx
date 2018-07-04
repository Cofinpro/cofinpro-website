import React from 'react'

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
        <p>Startseite</p>
      </div>
    )
  }
}

export default Technologie
