import React from 'react'

export default class HTML extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link
            rel="stylesheet"
            href={pathPrefix + '/css/font-awesome.min.css'}
          />
          <link
            rel="stylesheet"
            href={pathPrefix + '/css/apercu-regular.css'}
          />
          <link
            rel="stylesheet"
            href={pathPrefix + '/css/botui-theme-default.css'}
          />
          <link rel="stylesheet" href={pathPrefix + '/css/other.css'} />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src={pathPrefix + '/js/jquery-3.2.1.min.js'} />
          <script src={pathPrefix + '/js/popper.min.js'} />
          <script src={pathPrefix + '/js/bootstrap.min.js'} />
        </body>
      </html>
    )
  }
}
