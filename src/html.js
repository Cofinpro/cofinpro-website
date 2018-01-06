import React from 'react'
import Helmet from 'react-helmet'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    const head = Helmet.rewind()
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
          <link
            href={pathPrefix + '/favicon/favicon.ico'}
            rel="icon"
            type="image/x-icon"
          />
          <link
            rel="stylesheet"
            href={pathPrefix + '/css/font-awesome.min.css'}
          />
          <link
            rel="stylesheet"
            href={pathPrefix + '/css/apercu-regular.css'}
          />
          <link rel="stylesheet" href={pathPrefix + '/css/material.css'} />
          <link rel="stylesheet" href={pathPrefix + '/css/botui.min.css'} />
          <link
            rel="stylesheet"
            href={pathPrefix + '/css/botui-theme-default.css'}
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
          <script src="https://cdn.jsdelivr.net/vue/2.0.5/vue.min.js" />
          <script src="https://unpkg.com/botui/build/botui.js" />
          <script src={pathPrefix + '/js/ApiAi.min.js'} />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="//code.jquery.com/jquery-3.2.1.min.js" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" />
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" />
          <script src={pathPrefix + '/js/navbarToggle.js'} />
          <script src={pathPrefix + '/js/backToTop.js'} />
          <script src={pathPrefix + '/js/toggleHelper.js'} />
        </body>
      </html>
    )
  }
}
