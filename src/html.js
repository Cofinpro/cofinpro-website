import React from 'react'
import Helmet from 'react-helmet'

export default class HTML extends React.Component {
  renderFontStylesheet() {
    let apercuFontFile = require('!raw-loader!../static/css/apercu-regular.css')

    let apercuFontCss = (
      <style
        id="gatsby-apercu-font-css"
        dangerouslySetInnerHTML={{ __html: apercuFontFile }}
      />
    )
    return apercuFontCss
  }

  renderBotUiThemeCss() {
    let botuiThemeDefaultFile = require('!raw-loader!../static/css/botui-theme-default.css')

    let abotuiThemeDefaultCss = (
      <style
        id="gatsby-botui-theme-css"
        dangerouslySetInnerHTML={{ __html: botuiThemeDefaultFile }}
      />
    )
    return abotuiThemeDefaultCss
  }

  renderFontAwesomeCss() {
    let fontAwesomeFile = require('!raw-loader!../static/css/font-awesome.min.css')

    let fontAwesomeCss = (
      <style
        id="gatsby-font-awesome-css"
        dangerouslySetInnerHTML={{ __html: fontAwesomeFile }}
      />
    )
    return fontAwesomeCss
  }

  renderOtherCss() {
    let otherCssFile = require('!raw-loader!../static/css/other.css')

    let otherCssCss = (
      <style
        id="gatsby-other-css"
        dangerouslySetInnerHTML={{ __html: otherCssFile }}
      />
    )
    return otherCssCss
  }

  render() {
    const head = Helmet.rewind()

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <html lang="de">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link
            href={pathPrefix + '/favicon/favicon.ico'}
            rel="icon"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={pathPrefix + '/favicon/apple-icon-57x57.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={pathPrefix + '/favicon/apple-icon-60x60.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={pathPrefix + '/favicon/apple-icon-72x72.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={pathPrefix + '/favicon/apple-icon-76x76.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={pathPrefix + '/favicon/apple-icon-114x114.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={pathPrefix + '/favicon/apple-icon-120x120.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={pathPrefix + '/favicon/apple-icon-144x144.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={pathPrefix + '/favicon/apple-icon-152x152.png'}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={pathPrefix + '/favicon/apple-icon-180x180.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={pathPrefix + '/favicon/android-icon-192x192.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={pathPrefix + '/favicon/favicon-32x32.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={pathPrefix + '/favicon/favicon-96x96.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={pathPrefix + '/favicon/favicon-16x16.png'}
          />
          <link rel="manifest" href={pathPrefix + '/favicon/manifest.json'} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          {this.renderFontStylesheet()}
          {this.renderBotUiThemeCss()}
          {this.renderFontAwesomeCss()}
          {this.renderOtherCss()}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src={pathPrefix + '/js/jquery-3.2.1.min.js'} />
          <script src={pathPrefix + '/js/popper.min.js'} />
          <script src={pathPrefix + '/js/bootstrap.min.js'} />
          <script src={pathPrefix + '/js/ApiAi.min.js'} />
        </body>
      </html>
    )
  }
}
