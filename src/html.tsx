import React from 'react';

// const apercuFontCssFile = require('!raw-loader!../static/css/apercu-regular.css');
// const otherCssCssFile = require('!raw-loader!../static/css/other.css');

// const jQueryJsFile = require('!raw-loader!../static/js/jquery-3.2.1.min.js');
// const popperJsFile = require('!raw-loader!../static/js/popper.min.js');
// const bootstrapJsFile = require('!raw-loader!../static/js/bootstrap.min.js');
// const apiAiJsFile = require('!raw-loader!../static/js/ApiAi.min.js');

interface Props {
  headComponents: any;
  body: any;
  postBodyComponents: any;
}

export default class HTML extends React.Component<Props> {
  renderCssFile(_cssFile: any, _id: string) {
    const innerHtmlCss = <style id={`css-${_id}`} dangerouslySetInnerHTML={{ __html: _cssFile }} />;
    return innerHtmlCss;
  }

  renderJsFile(_jsFile: any, _id: string) {
    const innerHtmlJs = <script id={`js-${_id}`} dangerouslySetInnerHTML={{ __html: _jsFile }} />;
    return innerHtmlJs;
  }

  render() {
    let stylesStr;
    if (process.env.NODE_ENV === 'production') {
      try {
        stylesStr = require('!raw-loader!../public/styles.css');
      } catch (e) {
        console.log(e);
      }
    }

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
    }

    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <html lang="de">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.headComponents}
          <link href={`${pathPrefix}/favicon/favicon.ico`} rel="icon" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="57x57" href={`${pathPrefix}/favicon/apple-icon-57x57.png`} />
          <link rel="apple-touch-icon" sizes="60x60" href={`${pathPrefix}/favicon/apple-icon-60x60.png`} />
          <link rel="apple-touch-icon" sizes="72x72" href={`${pathPrefix}/favicon/apple-icon-72x72.png`} />
          <link rel="apple-touch-icon" sizes="76x76" href={`${pathPrefix}/favicon/apple-icon-76x76.png`} />
          <link rel="apple-touch-icon" sizes="114x114" href={`${pathPrefix}/favicon/apple-icon-114x114.png`} />
          <link rel="apple-touch-icon" sizes="120x120" href={`${pathPrefix}/favicon/apple-icon-120x120.png`} />
          <link rel="apple-touch-icon" sizes="144x144" href={`${pathPrefix}/favicon/apple-icon-144x144.png`} />
          <link rel="apple-touch-icon" sizes="152x152" href={`${pathPrefix}/favicon/apple-icon-152x152.png`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`${pathPrefix}/favicon/apple-icon-180x180.png`} />
          <link rel="icon" type="image/png" sizes="192x192" href={`${pathPrefix}/favicon/android-icon-192x192.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${pathPrefix}/favicon/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="96x96" href={`${pathPrefix}/favicon/favicon-96x96.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${pathPrefix}/favicon/favicon-16x16.png`} />
          <link rel="manifest" href={`${pathPrefix}/favicon/manifest.json`} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          {css}
          {/* TODO: {this.renderCssFile(apercuFontCssFile, 'apercuFont')}
          {this.renderCssFile(otherCssCssFile, 'other')} */}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          {/* TODO: {this.renderJsFile(jQueryJsFile, 'jQuery')}
          {this.renderJsFile(popperJsFile, 'popper')}
          {this.renderJsFile(bootstrapJsFile, 'bootstrap')}
          {this.renderJsFile(apiAiJsFile, 'apiAi')} */}
        </body>
      </html>
    );
  }
}
