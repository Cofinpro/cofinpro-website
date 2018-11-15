# cofinpro-website

[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/Cofinpro/cofinpro-website)

## Wo liegen die Builds die auf den Webseiten verwendet werden?

Die Webseiten werden auf https://www.netlify.com/ gehostet. Einloggen kann man sich unter https://app.netlify.com/.

Im ersten Menü nach dem Login, sieht man welche Seiten derzeit bei netlify betrieben werden.

* www.karriere.cofinpro.de (Produktion-Umgebung)
* www.dev.cofinpro.de (Test-Umgebung)
* www.karriere-cofinpro.de (Alte Domain, wird nur zur Weiterletiung auf karriere.cofinpro.de verwendet)

Der Grund warum die Webseite bei netlify gehostet wird und nicht bei 1und1 ist die Möglichkeit automatisch oder manuell neue Builds mit npm zu starten.

## Wie werden neue Builds bei Netlify getriggered?

www.karriere.cofinpro.de wird durch einen GIT PUSH im master getriggered.
www.dev.cofinpro.de wird durch einen GIT PUSH im branch dev getriggered und durch Änderungen im CMS (Contentful).

## Redirects - Konfiguration und bestehende Redirects

Die Redirects befinden sich in der Datei _redirects unter /static.

## Was liegt wo im Projekt?

### Bilder

Bilder finden sich unter static/img.

Im img Ordner selbst liegen die statischen Bilder der Webseite. Der Ordner contentful beinhaltet alle Bilder die aus dem CMS stammen. Diese wurden beim bauen der Seite per "gatsby  build" heruntergeladen und in diesem Ordner gespeichert.

## CSS Styling Konventions

Wir arbeiten nach BEM: http://getbem.com/naming/

## Wie starte ich einen Dev Server zum testen bzw. Seite anschauen

In die Console folgenden Befehl eingeben:

$ gatsby develop

Anschließend ist die Webseite unter localhost:8000 aufrufbar.

[Doku](https://www.gatsbyjs.org/docs/)

## Was liegt wo?

* **static** - Bilder, CSS-Dateien, externe JavaScript Bibliotheken, Icons, Fonts, Robots.txt, Redirect-Config Dateien
* **src** - Die eigentlichen React Files
  * **components** - Sammlung von React Komponenten die in den einzelnen Seiten verwendet werden.
  * **layouts** - Wir haben derzeit nur 1 Layout, enthält den Header, Footer und Chatbot, da diese auf jeder Seite zu sehen sind.
  * **pages** - Seiten bei denen wir über den Build Prozess nichts verändern müssen.
  * **templates** - Schablonen für einzelne Seiten die im Build Prozess verwendet werden um unsere Seite zu erzeugen.
  * **utils** - Eigene JavaScript Hilfsklassen.

## Wichtige Dateien

* **.babelrc** - Konfigurationsdatei für Babel. Erklärung zu Babel: Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in old browsers or environments.
* **.eslintrc** - Konfigurationsdatei für ESLint. Erklärung zu ESLint: ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
* **.gitignore** - Dateien, die nicht versioniert werden sollen, können in die .gitignore Datei aufgenommen werden.
* **.nvmrc** - Konfigurationsdatei für Netlify. Gibt die Node Version an die zum bauen der Seite verwendet werden soll. [Doku Build Settings Netlify](https://www.netlify.com/docs/build-settings/)
* **.prettierrc** - Konfigurationsdatei für Prettier. Erklärung zu Prettier: Prettier is an opinionated code formatter with support for: JavaScript, including ES2017, JSX, Flow, TypeScript, CSS, Less, and SCSS, JSON, GraphQL, Markdown, including GFM. It removes all original styling* and ensures that all outputted code conforms to a consistent style. [Doku](https://prettier.io/docs/en/index.html)
* **.textlintrc** - Konfigurationsdatei für Textlint. Erklärung zu Textlint: textlint is an open source text linting utility written in JavaScript. It is hard to lint natural language texts, but we try to resolve this issue by pluggable approach.
* **.travis.yml** - Konfigurationsdatei für Travis CI. Erklärung Travis CI: Travis CI provides a default build environment and a default set of steps for each programming language. You can customize any step in this process in .travis.yml. Travis CI uses .travis.yml file in the root of your repository to learn about your project and how you want your builds to be executed. [Doku](https://docs.travis-ci.com/user/customizing-the-build)
* **gatsby-config.js** - Konfigurationsdatei für Gatsby.js. Erklärung: Site configuration options for a Gatsby site are placed in a file at the root of the project folder called gatsby-config.js. [Doku](https://www.gatsbyjs.org/docs/gatsby-config/)
* **gatsby-node.js** - Erzeugt einige der Unterseiten der Homepage [Doku](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)
* **package-lock.json** - Lockfile. Erklärung: This file describes an exact, and more importantly reproducible node_modules tree. Once it's present, any future installation will base its work off this file, instead of recalculating dependency versions off package.json. [Doku](https://docs.npmjs.com/files/package-locks)
* **package.json** - Konfigurationsdatei für NPM. Erklärung: All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project. [Doku](https://docs.npmjs.com/files/package.json)
* **runtime.txt** - Konfigurationsdatei für Netlify. Gibt die Python Version an die zum bauen der Seite verwendet werden soll. [Doku Build Settings Netlify](https://www.netlify.com/docs/build-settings/)

## Performance Optimierungen

### Inline CSS

Jede CSS Datei wird inline eingebunden.

### Controlling Font Performance with font-display

[Siehe](https://developers.google.com/web/updates/2016/02/font-display)

### Opens External Anchors Using rel="noopener"

Bei target="_blank" bitte immer rel="noopener" verwenden. [Siehe](https://developers.google.com/web/tools/lighthouse/audits/noopener)

### HTTP/2

Wurde einmal eingestellt muss nicht weiter beachtet werden. [Siehe](https://developers.google.com/web/fundamentals/performance/http2/)

# Entwicklungsumgebung

Empfohlen wird den Visual Studio Code mit folgenden Plugins zu verwenden:

* ESLint
* Bracket Pair Colorizer
* Beautify
* Prettier - Code formatter
* HTML Snippets
* HTML CSS Support

# Github

## Erstellen eines neuen Branches

`git checkout -b BRANCHNAME dev-main-website`