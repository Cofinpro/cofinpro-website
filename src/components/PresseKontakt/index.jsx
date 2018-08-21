import React from 'react'

class PresseKontakt extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <h2 className="h2">Unser Pressekontakt</h2>
        <p>
          <span className="h5 bold-font">Cofinpro AG</span>
          <br />
          Fanina Karabelnik<br />
          Unternehmenskommunikation<br />
          +49 (0) 69 - 299 20 87 60<br />
          <a href="mailto:Marketing@cofinpro.de">Marketing@cofinpro.de</a>
        </p>
        <p>
          <span className="h5 bold-font">
            Thöring &amp; Stuhr Kommunikationsberatung
          </span>
          <br />
          Claudia Thöring<br />
          +49 (0) 40 - 207 69 69 82<br />
          <a href="mailto:Claudia.Thoering@corpnewsmedia.de">
            Claudia.Thoering@corpnewsmedia.de
          </a>
        </p>
      </div>
    )
  }
}

export default PresseKontakt
