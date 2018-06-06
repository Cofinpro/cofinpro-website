# cofinpro-website

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

# Bilder

Bilder finden sich unter static/img.

Im img Ordner selbst liegen die statischen Bilder der Webseite. Der Ordner contentful beinhaltet alle Bilder die aus dem CMS stammen. Diese wurden beim bauen der Seite per "gatsby  build" heruntergeladen und in diesem Ordner gespeichert. 

## CSS Styling Konventions

Wir arbeiten nach BEM: http://getbem.com/naming/