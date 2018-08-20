import React from 'react'
import Helmet from 'react-helmet'

class Datenschutz extends React.Component {
  getCurrentUrl() {
    if (typeof window !== 'undefined') {
      return window.location.href
    } else {
      return ''
    }
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div className="min-view-height">
        <Helmet
          title="Datenschutz - Cofinpro"
          link={[
            {
              rel: 'canonical',
              href: this.getCurrentUrl(),
            },
          ]}
          meta={[
            {
              name: 'Description',
              content:
                'Datenschutz Datenschutzerklärung Wir freuen uns über Ihr Interesse an unserem Unternehmen. Der Schutz Ihrer personenbezogenen Daten und Ihrer Privatsphäre bei…',
            },
            {
              property: 'og:title',
              content: 'Datenschutz - Cofinpro',
            },
            {
              property: 'og:description',
              content:
                'Datenschutz Datenschutzerklärung Wir freuen uns über Ihr Interesse an unserem Unternehmen. Der Schutz Ihrer personenbezogenen Daten und Ihrer Privatsphäre bei…',
            },
          ]}
        />

        <div className="container padding-20-top padding-xs-20-top">
          <div className="row">
            <div className="col">
              <h1 className="h1 margin-md-bottom">Datenschutz</h1>

              <h2 className="h2">Datenschutzerklärung</h2>

              <p>
                Wir freuen uns über Ihr Interesse an unserem Unternehmen. Der
                Schutz Ihrer personenbezogenen Daten und Ihrer Privatsphäre bei
                der Verarbeitung dieser Daten ist für uns ein wichtiges
                Anliegen. Deshalb möchten wir Sie gerne darüber informieren, wie
                Ihre persönlichen Daten bei uns verarbeitet und gespeichert
                werden.<br />
                Als datenschutzrechtlich verantwortliche Stelle klärt die
                Cofinpro AG (nachfolgend bezeichnet als „Anbieter“, „wir“ oder
                „uns“) mit dieser Datenschutzerklärung über Art, Umfang und
                Zweck der Erhebung und Verwendung von Daten innerhalb dieser
                Website und Onlineangebote auf.
              </p>

              <h2 className="h2">Personenbezogene Daten</h2>

              <p>
                Personenbezogene Daten sind nach § 3 I Bundesdatenschutzgesetz
                (BDSG) Einzelangaben über persönliche oder sachliche
                Verhältnisse einer bestimmten oder bestimmbaren natürlichen
                Person (Betroffener). Soweit auf unseren Seiten personenbezogene
                Daten (z.B. Name, Anschrift oder Email-Adressen) erhoben werden,
                erfolgt dies - soweit möglich - stets auf freiwilliger Basis.<br
                />
                Wir erheben, verarbeiten und nutzen die personenbezogenen Daten
                der Nutzer nur unter Einhaltung der einschlägigen
                Datenschutzbestimmungen. Das bedeutet, dass Ihre
                personenbezogenen Daten nur beim Vorliegen einer gesetzlichen
                Erlaubnis mit Ihrer Einwilligung verwendet werden. Soweit in den
                folgenden Abschnitten nicht anderweitig dargestellt, werden bei
                Nutzung unserer Webseiten grundsätzlich keine personenbezogenen
                Daten erhoben, verarbeitet oder genutzt.
              </p>

              <h2 className="h2">Daten bei der Kontaktaufnahme</h2>

              <p>
                Personenbezogene Daten, die Sie uns zum Zwecke der
                Kontaktaufnahme oder zur Zusendung von Dokumenten o.ä. an uns
                übermitteln, werden ausschließlich für diesen Zweck verwendet.
                Eine Mitteilung dieser Angaben erfolgt ausdrücklich auf
                freiwilliger Basis und nur mit Ihrer Einwilligung. Soweit es
                sich hierbei um Angaben zu Kommunikationskanälen (beispielsweise
                E-Mail-Adresse, Telefonnummer) handelt, willigen Sie außerdem
                ein, dass wir Sie ggf. auch über diesen Kommunikationskanal
                kontaktieren, um Ihr Anliegen zu beantworten. Ihre
                Einwilligungserklärungen können Sie selbstverständlich jederzeit
                für die Zukunft widerrufen. Bitte wenden Sie sich hierfür an
                unsere Datenschutzbeauftragte, deren Kontaktdaten Sie unten
                stehend finden. Die personenbezogenen Daten werden nach
                Zweckerfüllung gelöscht.
              </p>

              <h2 className="h2">Allgemeine Datenweitergabe</h2>

              <p>
                Werden uns personenbezogene Daten von Ihnen mitgeteilt, werden
                diese nur an Dritte weitergegeben, sofern dies zur Abwicklung
                des Vertragsverhältnisses erforderlich ist oder ein anderer
                Rechtsgrund diese Weitergabe legitimiert. Ihre personenbezogenen
                Daten werden nur solange gespeichert, wie dies für den
                vorgesehen Zweck der Datenerhebung erforderlich oder durch
                gesetzliche Bestimmungen wie Aufbewahrungsfristen notwendig ist.
              </p>

              <h2 className="h2">
                Einbindung von Diensten und Inhalten Dritter
              </h2>

              <p>
                Innerhalb dieses Onlineangebotes werden Inhalte Dritter, wie zum
                Beispiel Videos von YouTube, Kartenmaterial von Google Maps oder
                Grafiken von anderen Webseiten eingebunden.<br />
                Dies setzt immer voraus, dass die Anbieter dieser Inhalte
                (nachfolgend bezeichnet als „Dritt-Anbieter“) die IP-Adresse der
                Nutzer wahrnehmen. Denn ohne die IP-Adresse könnten sie die
                Inhalte nicht an den Browser des jeweiligen Nutzers senden. Die
                IP-Adresse ist damit für die Darstellung dieser Inhalte
                erforderlich.<br />
                Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige
                Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte
                verwenden. Jedoch haben wir keinen Einfluss darauf, falls die
                Dritt-Anbieter die IP-Adresse z.B. für statistische Zwecke
                speichern. Bitte entnehmen Sie hierzu die entsprechenden
                Datenschutzhinweise der jeweiligen Dritt-Anbieter.
              </p>

              <h2 className="h2">Newsletter</h2>

              <p>
                Sofern Sie uns Ihr gesondertes Einverständnis geben, senden wir
                Ihnen E-Mails-Newsletter mit werblichen Informationen zu.<br />
                Unsere Newsletter beinhalten Informationen zu unseren
                Leistungsangeboten, Aktionen, Veranstaltungen, Gewinnspielen,
                Jobangeboten, Beiträgen/Artikeln.<br />
                Nicht zu Newslettern gehören dagegen Nachrichten ohne werbliche
                Informationen, die im Rahmen unserer Vertrags- oder sonstiger
                Geschäftsbeziehung versendet werden. Dazu gehören z.B. der
                Versand von Servicemails mit technischen Hinweisen und
                Rückfragen zu Aufträgen, Veranstaltungen,
                Gewinnspielbenachrichtigungen oder vergleichbare Nachrichten.<br
                />
                Ihre Einwilligung zur Speicherung der Daten, der Email-Adresse
                sowie deren Nutzung zum Versand des Newsletters können Sie
                jederzeit widerrufen. Der Widerruf kann über einen Link in den
                Newslettern selbst, oder per Mitteilung an die unten stehenden
                Kontaktmöglichkeiten erfolgen.
              </p>

              <h2 className="h2">Zugriffsdaten/ Server-Logfiles</h2>

              <p>
                Wir erheben Daten über jeden Zugriff auf den Server (Logfiles).
                Zu den Zugriffsdaten gehören Name der abgerufenen Webseite,
                Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung
                über erfolgreichen Abruf, Browsertyp nebst Version, das
                Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
                Seite) und der anfragende Provider. Ein Personenbezug ist aus
                diesen Daten grundsätzlich nicht herstellbar, da die IP-Adresse
                nicht gespeichert bzw. anonymisiert wird.
              </p>

              <h2 className="h2">Allgemeine Aussagen zu Cookies</h2>

              <p>
                Bei einem Cookie handelt es sich um eine Textdatei, die beim
                Besuch einer Website oder beim Abruf eines Dienstes (wie z.B.
                eines Plugins) auf Ihrer Festplatte für eine bestimmte Dauer
                gespeichert wird. Besuchen Sie diese Webseite erneut, so teilt
                das Cookie dem Server mit, dass mit diesem PC schon einmal eine
                Verbindung bestanden hat sowie weitere im Cookie gespeicherte
                Daten wie z.B. eine eindeutige Cookie-ID. Der Server kann die
                hierdurch erhaltenen Informationen auf verschiedene Arten
                verwerten. Durch Cookies können beispielsweise
                Werbeeinblendungen gesteuert oder die Navigation auf einer
                Internetseite verbessert werden.<br />
                Wir verwenden auf unseren Webseiten Cookies, um die Darstellung
                zu optimieren und bestimmte Dienste - auch von Dritten, siehe
                spezielle Regel dazu unten - anbieten zu können. Sie können die
                Verwendung von Cookies durch Ihre Browsereinstellungen
                einschränken oder unterbinden. Bitte beachten Sie, dass Teile
                der Funktionalität der Webpage dann nicht mehr oder nur noch
                eingeschränkt zur Verfügung stehen.<br />
                Durch die Nutzung unserer Webseiten erklären Sie sich mit der
                Erhebung, Verarbeitung und Nutzung Ihrer Daten – auch durch die
                u.a. Dritt-Anbieter - in der jeweils beschriebenen Art und Weise
                und zu dem benannten Zweck einverstanden.<br />
                Sie können Cookies von einigen US-Unternehmen über die
                US-amerikanische Seite http://www.aboutads.info/choices/ oder
                die EU-Seite
                http://www.youronlinechoices.com/uk/your-ad-choices/ verwalten.
              </p>

              <h2 className="h2">Google Analytics Webtracking</h2>

              <p>
                Diese Website benutzt Google Analytics, einen Webanalysedienst
                der Google Inc. („Google“). Google Analytics verwendet sog.
                „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
                werden und die eine Analyse der Benutzung der Website durch Sie
                ermöglichen. Die durch den Cookie erzeugten Informationen über
                Ihre Benutzung dieser Website werden in der Regel an einen
                Server von Google in den USA übertragen und dort gespeichert. Im
                Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite,
                wird Ihre IP-Adresse von Google jedoch innerhalb von
                Mitgliedstaaten der Europäischen Union oder in anderen
                Vertragsstaaten des Abkommens über den Europäischen
                Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
                volle IP-Adresse an einen Server von Google in den USA
                übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
                Website wird Google diese Informationen benutzen, um Ihre
                Nutzung der Website auszuwerten, um Reports über die
                Websiteaktivitäten zusammenzustellen und um weitere mit der
                Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
                Die im Rahmen von Google Analytics von Ihrem Browser
                übermittelte IP-Adresse wird nicht mit anderen Daten von Google
                zusammengeführt. Sie können die Speicherung der Cookies durch
                eine entsprechende Einstellung Ihrer Browser-Software
                verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
                Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
                vollumfänglich werden nutzen können. Sie können darüber hinaus
                die Erfassung der durch das Cookie erzeugten und auf Ihre
                Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
                Google sowie die Verarbeitung dieser Daten durch Google
                verhindern, indem sie das unter dem folgenden Link<br />
                (tools.google.com/dlpage/gaoptout?hl=de) verfügbare
                Browser-Plugin herunterladen und installieren.<br />
                Sie können die Erfassung durch Google Analytics verhindern,
                indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie
                gesetzt, das die zukünftige Erfassung Ihrer Daten beim Besuch
                dieser Website verhindert:<br />
                Google Analytics deaktivieren<br />
                Nähere Informationen zu Nutzungsbedingungen und Datenschutz
                finden Sie unterwww.google.com/analytics/terms/de.html bzw.
                unterwww.google.com/intl/de/analytics/privacyoverview.html. Wir
                weisen Sie darauf hin, dass auf dieser Webseite Google Analytics
                um den Code „gat._anonymizeIp();“ erweitert wurde, um eine
                anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu
                gewährleisten.
              </p>

              <h2 className="h2">
                Datenverarbeitung im Rahmen des Bewerbungsverfahrens
              </h2>

              <p>
                Diese Datenschutzinformationen gelten für alle persönlichen
                Daten, die Sie uns in Ihrer Bewerbung online, schriftlich oder
                auf anderem Wege mitteilen sowie alle daraus ableitbaren
                Informationen.<br />
                Im Rahmen des Bewerbungsverfahrens werden persönliche Daten nur
                dann gespeichert, wenn Sie uns diese von sich aus im Rahmen
                einer Bewerbung angeben.<br />
                Wenn Sie sich für den Weg der Online-Bewerbung über unsere
                Unternehmens-Website entscheiden und Ihnen keine aktuell zu
                besetzende Stelle angeboten werden kann, werden, Ihr
                Einverständnis vorausgesetzt, Ihre Angaben in unserem
                Bewerbermanagementsystem bei Bedarf für längstens 12 Monate
                gespeichert, damit wir auch zu einem späteren Zeitpunkt nochmals
                mit Ihnen Kontakt aufnehmen können. Wenn Sie uns diesbezüglich
                Ihr Einverständnis nicht erteilt haben, werden Ihre Daten nur
                zum Zwecke der Bewerbung auf eine konkrete Stelle verarbeitet
                und nach der Besetzung der Stelle gelöscht.<br />
                Bei schriftlichen Bewerbungen werden Ihre Daten in unser
                Bewerbermanagementsystem eingegeben. Ihre Dokumente werden bei
                Bedarf eingescannt und damit in ein Dateiformat gebracht. Sie
                erhalten anschließend Ihre Original-Unterlagen zurück, um den
                Verwaltungsaufwand zu erleichtern.<br />
                Ihre Daten werden ausschließlich für den internen
                Stellenabgleich und für anonymisierte Statistiken verwendet.
                Wenn Sie sich initiativ bewerben oder Ihre Daten in unseren
                Bewerberpool aufgenommen wurden, wird Ihre Bewerbung für zu
                besetzende Stellen der gesamten Cofinpro AG berücksichtigt.
                Darüber hinaus ist die Weitergabe dieser Daten an Dritte
                ausgeschlossen.<br />
                Übermittlungen personenbezogener Daten an staatliche
                Einrichtungen und Behörden erfolgen nur im Rahmen zwingender
                nationaler Rechtsvorschriften. Unsere Mitarbeiter sind von uns
                zur Vertraulichkeit verpflichtet.<br />
                Wenn Sie Fragen hinsichtlich der Verarbeitung Ihrer
                Bewerberdaten haben oder Sie Ihre persönlichen Daten aus der
                Bewerberdatenbank entfernt wissen möchten, können Sie sich über
                die E-Mail-Adresse karriere@cofinpro.de mit der Betreffzeile
                „Datenschutz“ an unseren Datenschutzbeauftragten wenden, der
                Ihnen auch im Falle von Auskunftsersuchen, Anregungen oder
                Beschwerden zur Verfügung steht.
              </p>

              <h2 className="h2">
                Widerrufs- und Widerspruchsrecht sowie Recht auf Auskunft,
                Berichtigung, Löschung und Sperrung
              </h2>

              <p>
                Einwilligungen zur Erhebung, Verarbeitung und Nutzung von
                personenbezogenen Daten können Sie jederzeit ohne Angabe von
                Gründen widerrufen. Darüber hinaus haben Sie ein Recht auf
                Auskunft über die zu ihrer Person verarbeiteten Daten sowie auf
                Berichtigung, Löschung und Sperrung der über Sie gespeicherten
                Daten. Stehen der Löschung gesetzliche Speicherfristen entgegen,
                wird eine Sperrung der Daten vorgenommen. Wenden Sie sich bitte
                hierzu schriftlich an die folgende Adresse:
              </p>

              <p>
                <strong>Postalisch an:</strong>
                <br />
                Cofinpro AG<br />
                Abteilung Datenschutz<br />
                Untermainkai 27-28<br />
                D-60329 Frankfurt am Main
              </p>
              <p>
                <strong>oder per E-Mail:</strong>
                <br />
                <a href="mailto:datenschutz@cofinpro.de">
                  datenschutz@cofinpro.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Datenschutz
