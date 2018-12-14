// Create Pages TS
// https://gist.github.com/clarkdave/53cc050fa58d9a70418f8a76982dd6c8

const path = require('path');
var async = require('async')
var moment = require('moment')

const contentfulImageService = require('./server/contentfulImageService')
const pagePinnwand = require('./server/karriere/pagePinnwand')
const pagesNews = require('./server/karriere/pagesNews')
const pagesStellenanzeigen = require('./server/karriere/pagesStellenanzeigen')
const pageStellenmarkt = require('./server/karriere/pageStellenmarkt')
const pageDeineEntwicklung = require('./server/karriere/pageDeineEntwicklung')
const pagesDeineKarriere = require('./server/karriere/pagesDeineKarriere')
const pageJobBewerbung = require('./server/karriere/pageJobBewerbung')
const pagesGehaltBenefits = require('./server/karriere/pagesGehaltBenefits')
const pageLanding = require('./server/karriere/pageLanding')
const pageStartseiteKarriere = require('./server/karriere/pageStartseiteKarriere')
const pagesUeberUns = require('./server/karriere/pagesUeberUns')
const pageWorkLife = require('./server/karriere/pageWorkLife')
const pagesFokusthemen = require('./server/pagesFokusthemen')

const pageProjekte = require('./server/projekte')
const pageNewsMedien = require('./server/news-medien')

let globalGraphql = null
let globalCreatePage = null
let globalCreateRedirect = null
let globalBackgroundImages = []

let globalNews = []

let redirectList = [
  { f: `/landing`, t: `/karriere/landing` },
  { f: `/deine-entwicklung`, t: `/karriere` },
  { f: `/deine-karriere`, t: `/karriere` },
  { f: `/boxes/karrierestufen/`, t: `/karriere` },
  { f: `/gehalt-beteiligung`, t: `/karriere` },
  { f: `/undefined/landing`, t: `/karriere` },
  { f: `/undefined/deine-entwicklung`, t: `/karriere` },
  { f: `/undefined/deine-karriere`, t: `/karriere` },
  { f: `/undefined/gehalt-beteiligung`, t: `/karriere` },
  { f: `/stellenmarkt`, t: `/karriere/jobs` },
  { f: `/stellenprofil-informatiker`, t: `/karriere/jobs` },
  { f: `/job-empfehlung`, t: `/karriere/jobs` },
  { f: `/soziale-vielfalt-bei-cofinpro`, t: `/karriere/ueber-uns` },
  { f: `/bewerbung-einreichen`, t: `/karriere/jobs-bewerbung` },
  {
    f: `/weiterentwicklung`,
    t: `/karriere/fachlicher-professional/deine-entwicklung`,
  },
  {
    f: `/gehaltsmodel`,
    t: `/karriere/fachlicher-professional/gehalt-beteiligung`,
  },
  { f: `/impressum-karriere`, t: `/impressum` },
  { f: `/auszeichnungen`, t: `/karriere/ueber-uns` },
  { f: `/bewerbungsprozess`, t: `/karriere/jobs-bewerbung` },
  { f: `/zukuenftige-kollegen`, t: `/karriere/ueber-uns` },
  {
    f: `/laufbahnmodell`,
    t: `/karriere/fachlicher-professional/deine-karriere`,
  },
  { f: `/karriere/weiterentwicklung/`, t: `/karriere` },
  { f: `/karriere/gehaltsmodel/`, t: `/karriere` },
  { f: `/karriere/auszeichnungen/`, t: `/cofinpro` },
  { f: `/karriere/bewerbungsprozess/`, t: `/karriere/jobs-bewerbung` },
  { f: `/karriere/ueber-uns/`, t: `/karriere/ueber-uns` },
  { f: `/karriere/zukuenftige-kollegen/`, t: `/karriere` },
  { f: `/karriere/laufbahnmodell/`, t: `/karriere` },
  {
    f: `/pinnwand/news/c1qBrGQiKLKKoUkO8M4MUS2`,
    t: `/karriere/pinnwand/unsere-juniors-machen-wirbel`,
  },
  {
    f: `/pinnwand/news/c2k1rS1kO3K2E2MmkS4wWii`,
    t: `/karriere/pinnwand/cofinpro-wird-10-jahre`,
  },
  {
    f: `/pinnwand/news/c2nYki4Cr1mwGUUeIcAw8C0`,
    t: `/karriere/pinnwand/cofinpro-goes-green`,
  },

  {
    f: `/stellenanzeige/c2vFgUFEzCg28yCaQKGSA4a`,
    t: `/karriere/stellenanzeige/frontend-entwickler`,
  },
  {
    f: `/stellenanzeige/c6zlaBIuNS8gUIm04MIc8Ac`,
    t: `/karriere/stellenanzeige/product-owner-digitalisierung-kredit`,
  },
  {
    f: `/stellenanzeige/c1sToSlnE8Ew4UcEKYimim0`,
    t: `/karriere/stellenanzeige/full-stack-entwickler-net`,
  },
  {
    f: `/stellenanzeige/c3GAK33ebbOeawG0OEisa24`,
    t: `/karriere/stellenanzeige/business-analyst-asset-management`,
  },
  {
    f: `/stellenanzeige/c3MGMlnkBh6e6S6ucwkQi0K`,
    t: `/karriere/stellenanzeige/business-consultant-digitalisierung`,
  },
  {
    f: `/stellenanzeige/c7g8npKGI4ouOg0AIAO0CME`,
    t: `/karriere/stellenanzeige/full-stack-entwickler-java`,
  },
  {
    f: `/stellenanzeige/c2EuwRAeqJOyegOQyag4ei2`,
    t: `/karriere/stellenanzeige/backend-entwickler-java`,
  },
  {
    f: `/stellenanzeige/c5WYxyIHI1qm8g0WWqWcasO`,
    t: `/karriere/stellenanzeige/net-entwickler`,
  },
  {
    f: `/stellenanzeige/c2jhU8VFZCUiuG2CM0WmacS`,
    t: `/karriere/stellenanzeige/senior-net-entwickler`,
  },
  {
    f: `/stellenanzeige/c3NCJ4Z9Gs0G0Q0AgkkWy68`,
    t: `/karriere/stellenanzeige/senior-full-stack-entwickler-net`,
  },
  {
    f: `/stellenanzeige/c4b7VT1PZe8GsUQ0uQQUggk`,
    t: `/karriere/stellenanzeige/senior-frontend-entwickler`,
  },
  {
    f: `/stellenanzeige/c2yleEHNdnuoaIwC0M40ocu`,
    t: `/karriere/stellenanzeige/fachlicher-junior-consultant`,
  },
  {
    f: `/stellenanzeige/c5ZJFdhzI6kAaUWIscAC88w`,
    t: `/karriere/stellenanzeige/junior-entwickler-java`,
  },
  {
    f: `/stellenanzeige/c3N1YD3jqhyY0cU8OSY4eGw`,
    t: `/karriere/stellenanzeige/technologischer-projektmanager`,
  },
  {
    f: `/stellenanzeige/c1mkk5fyrqE20SeUiW6k6c2`,
    t: `/karriere/stellenanzeige/fachlicher-projektmanager`,
  },
  {
    f: `/stellenanzeige/c3sOs22uoFak2AYEm2Aku0K`,
    t: `/karriere/stellenanzeige/senior-backend-entwickler-java`,
  },
  {
    f: `/stellenanzeige/c3SbhE9XWJymaGY6Qoiiw28`,
    t: `/karriere/stellenanzeige/dhbw-student-wirtschaftsinformatik`,
  },
  {
    f: `/stellenanzeige/c9V2aXs3ZhmuuoU6qcU2qQ`,
    t: `/karriere/stellenanzeige/praktikant-in-der-fachberatung`,
  },
  {
    f: `/stellenanzeige/c1zo5P1wfFWAWkCmAmSaIMW`,
    t: `/karriere/stellenanzeige/praktikant-in-der-technologieberatung`,
  },
  {
    f: `/stellenanzeige/c58LL7defSg2QQMkaOgY4io`,
    t: `/karriere/stellenanzeige/business-consultant-regulatorik`,
  },
  {
    f: `/stellenanzeige/c2FpWqAm9eoCk8mk0IE4kWO`,
    t: `/karriere/stellenanzeige/senior-business-analyst-asset-management`,
  },
  {
    f: `/stellenanzeige/c71fE9gwc6s2QeA0Yu0iSkG`,
    t: `/karriere/stellenanzeige/senior-business-consultant-regulatorik`,
  },
  {
    f: `/stellenanzeige/c5x0SbBB8uQeQQgMCmkggya`,
    t: `/karriere/stellenanzeige/product-owner-digitalisierung-wertpapier`,
  },
  {
    f: `/stellenanzeige/c399Hy5QXviyEGsE6CyAUOQ`,
    t: `/karriere/stellenanzeige/senior-business-consultant-digitalisierung`,
  },
  {
    f: `/stellenanzeige/c4uMfmILAI88OCyAcgaU4KA`,
    t: `/karriere/stellenanzeige/business-consultant-kredit`,
  },
  {
    f: `/stellenanzeige/c1gJwJI7duy48Q44wKGwk6M`,
    t: `/karriere/stellenanzeige/berufsbegleitender-master-wirtschaftsinformatik-2`,
  },
  {
    f: `/stellenanzeige/c4KvtvJIC0o028IwEKWM6MI`,
    t: `/karriere/stellenanzeige/berufsbegleitender-master-wirtschaftsinformatik`,
  },
  {
    f: `/stellenanzeige/c5c9gI1bnU4ao2I0Qa2cmE2`,
    t: `/karriere/stellenanzeige/senior-business-consultant-kredit`,
  },
  {
    f: `/stellenanzeige/c1Bh0JRr77CkUgmAKWeoeqE`,
    t: `/karriere/stellenanzeige/senior-full-stack-entwickler-java`,
  },
  {
    f: `/stellenanzeige/c7gLvKKOllmAu0k6IQEkUeQ`,
    t: `/karriere/stellenanzeige/java-werkstudent`,
  },
  {
    f: `/stellenanzeige/c3MVkNHjZHyKI2Osie828QO`,
    t: `/karriere/stellenanzeige/software-architect-java`,
  },
  {
    f: `/stellenanzeige/bankfachlicher-managementberater`,
    t: `/karriere/stellenanzeige/managementberater`,
  },
  {
    f: `/stellenanzeige/technologischer-managementberater`,
    t: `/karriere/stellenanzeige/managementberater`,
  },
  {
    f: `/stellenanzeige/fachlicher-projektmanager`,
    t: `/karriere/stellenanzeige/projektmanager`,
  },
  {
    f: `/stellenanzeige/technologischer-projektmanager`,
    t: `/karriere/stellenanzeige/projektmanager`,
  },
  {
    f: `/stellenanzeige/technologischer-Managementberater-Vertrieblich`,
    t: `/karriere/stellenanzeige/managementberater-vertrieblich`,
  },
  {
    f: `/stellenanzeige/bankfachlicher-Managementberater-Vertrieblich`,
    t: `/karriere/stellenanzeige/managementberater-vertrieblich`,
  },
  {
    f: `/karriere/pdfs/magazin/1`,
    t: `/pdf/contentful/c2zH6J4puK0CsWiEOWM42OM.pdf`,
  },

  {
    f: `/cofinpro-verzeichnet-2015-zweistellige-wachstumsraten/`,
    t: `/pressemeldung/cofinpro-verzeichnet-2015-zweistellige-wachstumsraten`,
  },
  {
    f: `/neue-ezb-verordnung-zwingt-institute-zur-datensammlung-im-massenkreditgeschaeft/`,
    t: `/pressemeldung/neue-ezb-verordnung-zwingt-institute-zur-datensammlung-im-massenkreditgeschaeft`,
  },
  {
    f: `/ezb-projekt-europaeische-wertpapier-plattform-startet-mit-pannen/`,
    t: `/pressemeldung/ezb-projekt-europaeische-wertpapier-plattform-startet-mit-pannen`,
  },
  {
    f: `/baufinanzierung-neues-gesetz-verschaerft-protokollpflichten-fuer-immobilienkredite/`,
    t: `/pressemeldung/baufinanzierung-neues-gesetz-verschaerft-protokollpflichten-fuer-immobilienkredite`,
  },
  {
    f: `/cofinpro-zaehlt-erneut-zu-deutschlands-besten-arbeitgebern/`,
    t: `/pressemeldung/cofinpro-zaehlt-erneut-zu-deutschlands-besten-arbeitgebern`,
  },
  {
    f: `/5-jahre-banken-beratungsprotokoll-60-prozent-der-deutschen-sehen-keine-qualitaetsverbesserungen/`,
    t: `/pressemeldung/5-jahre-banken-beratungsprotokoll-60-prozent-der-deutschen-sehen-keine-qualitaetsverbesserungen`,
  },
  {
    f: `/dr-ulrich-meyer-wechselt-in-das-fuehrungsteam-von-cofinpro/`,
    t: `/pressemeldung/dr-ulrich-meyer-wechselt-in-das-fuehrungsteam-von-cofinpro`,
  },
  {
    f: `/risikokontrolle-regulierung-frisst-50-prozent-der-computerleistung-von-banken/`,
    t: `/pressemeldung/risikokontrolle-regulierung-frisst-50-prozent-der-computerleistung-von-banken`,
  },
  {
    f: `/studie-junge-bundesbuerger-schenken-paypal-mehr-vertrauen-als-privatbanken/`,
    t: `/pressemeldung/studie-junge-bundesbuerger-schenken-paypal-mehr-vertrauen-als-privatbanken`,
  },
  {
    f: `/news-verbraucher-sehen-bei-ampel-fuer-geldanlagen-rot/`,
    t: `/pressemeldung/news-verbraucher-sehen-bei-ampel-fuer-geldanlagen-rot`,
  },
  {
    f: `/eu-macht-jetzt-ernst-mifid-ii-regulierung-erfordert-neue-bankprodukte/`,
    t: `/pressemeldung/eu-macht-jetzt-ernst-mifid-ii-regulierung-erfordert-neue-bankprodukte`,
  },
  {
    f: `/wachstumskurs-beratungshaus-cofinpro-legt-um-30-prozent-zu/`,
    t: `/pressemeldung/wachstumskurs-beratungshaus-cofinpro-legt-um-30-prozent-zu`,
  },
  {
    f: `/news-ratenkredite-fuer-immer-mehr-banken-ein-zuschussgeschaeft/`,
    t: `/pressemeldung/news-ratenkredite-fuer-immer-mehr-banken-ein-zuschussgeschaeft`,
  },
  {
    f: `/stichtag-derivate-handel-wie-institute-die-neue-eu-meldepflicht-erfuellen/`,
    t: `/pressemeldung/stichtag-derivate-handel-wie-institute-die-neue-eu-meldepflicht-erfuellen`,
  },
  {
    f: `/vier-jahre-beratungsprotokoll-sechs-von-zehn-deutschen-stellen-banken-schlechtes-zeugnis-aus/`,
    t: `/pressemeldung/vier-jahre-beratungsprotokoll-sechs-von-zehn-deutschen-stellen-banken-schlechtes-zeugnis-aus`,
  },
  {
    f: `/banken-bei-verbraucherkrediten-zu-unflexibel/`,
    t: `/pressemeldung/banken-bei-verbraucherkrediten-zu-unflexibel`,
  },
  {
    f: `/studiejunge-kunden-halten-banken-fuer-serioes-aber-austauschbar/`,
    t: `/pressemeldung/studiejunge-kunden-halten-banken-fuer-serioes-aber-austauschbar`,
  },
  {
    f: `/umfrage-80-prozent-der-deutschen-begruessen-eu-anlegerschutz-2014/`,
    t: `/pressemeldung/umfrage-80-prozent-der-deutschen-begruessen-eu-anlegerschutz-2014`,
  },
  {
    f: `/umfrage-61-prozent-der-deutschen-durchkreuzen-googles-mobile-banking-plaene/`,
    t: `/news-medien/alle-beratungsfelder`,
  },
  {
    f: `/steuerflucht-fatca-initiativen-von-eu-und-g20-drohen-die-banken-als-internationale-finanzaemter-zu-ueberfordern/`,
    t: `/beratungsfelder/wertpapier`,
  },
  { f: `/cofinpro-und-kag-consulting-schliessen-sich-zusammen/`, t: `/` },
  {
    f: `/banken-verspielen-first-mover-chancen-im-neuen-eu-wertpapierhandel/`,
    t: `/beratungsfelder/wertpapier`,
  },
  {
    f: `/eu-plaene-94-prozent-der-deutschen-wollen-finanzberatung-kostenlos/`,
    t: `/pressemeldung/eu-plaene-94-prozent-der-deutschen-wollen-finanzberatung-kostenlos`,
  },
  {
    f: `/umfrage-deutsche-vom-gesetzlichen-beratungs-protokoll-der-banken-nicht-ueberzeugt/`,
    t: `/pressemeldung/umfrage-deutsche-vom-gesetzlichen-beratungs-protokoll-der-banken-nicht-ueberzeugt`,
  },
  {
    f: `/derivate-handel-eu-finanzaufsicht-bringt-deutsche-banken-ins-schleudern/`,
    t: `/pressemeldung/derivate-handel-eu-finanzaufsicht-bringt-deutsche-banken-ins-schleudern`,
  },
  {
    f: `/kredit-risiko-76-prozent-der-verbraucher-fordern-pflicht-protokoll-fuer-immobilien-darlehen/`,
    t: `/pressemeldung/kredit-risiko-76-prozent-der-verbraucher-fordern-pflicht-protokoll-fuer-immobilien-darlehen`,
  },
  {
    f: `/umfrage-47-prozent-der-deutschen-fuerchten-spekulationsblase-bei-immobilien/`,
    t: `/beratungsfelder/kredit`,
  },
  {
    f: `/us-steuergesetz-fatca-banken-laeuft-die-zeit-davon/`,
    t: `/beratungsfelder/wertpapier`,
  },
  {
    f: `/thesenpapier-blockchain-in-der-wertpapierabwicklung/`,
    t: `/pdf/contentful/c1EuOkCu86oUI0EW2mOGC8G.pdf`,
  },
  { f: `/finweb-barometer/`, t: `/news-medien/alle-beratungsfelder` },
  {
    f: `/blockchain-presse/`,
    t: `/pressemeldung/blockchain-zukunft-oder-ende-des-bankings`,
  },
  {
    f: `/studie-junge-kunden-und-akademiker-wechseln-zu-fintechs/`,
    t: `/pressemeldung/studie-junge-kunden-und-akademiker-wechseln-zu-fintechs`,
  },
  {
    f: `/gewissen-statt-gewinn78-prozent-der-18-bis-34-jaehrigen-wuenschen-sich-eine-nachhaltige-geldanlage/`,
    t: `/pressemeldung/gewissen-statt-gewinn78-prozent-der-18-bis-34-jaehrigen-wuenschen-sich-eine-nachhaltige-geldanlage`,
  },
  {
    f: `/baufinanzierung-banken-hadern-mit-der-vergabe-von-immobilienkrediten/`,
    t: `/pressemeldung/baufinanzierung-banken-hadern-mit-der-vergabe-von-immobilienkrediten`,
  },
  {
    f: `/verbraucherkredite-jeder-zweite-deutsche-von-hohen-kosten-ueberrascht/`,
    t: `/pressemeldung/verbraucherkredite-jeder-zweite-deutsche-von-hohen-kosten-ueberrascht`,
  },
  {
    f: `/konsumentenkredite-internet-portale-in-der-pole-position/`,
    t: `/pressemeldung/konsumentenkredite-internet-portale-in-der-pole-position`,
  },
  { f: `/gold-fuer-cofinpro/`, t: `/pressemeldung/gold-fuer-cofinpro` },
  {
    f: `/banken-verspielen-first-mover-chancen/`,
    t: `/pressemeldung/banken-verspielen-first-mover-chancen`,
  },
  { f: `/mifid-ii-umsetzung/`, t: `/pressemeldung/mifid-ii-umsetzung` },
  {
    f: `/finanzdienstleister-maschinelles-lernen-wird-die-branche-revolutionieren/`,
    t: `/pressemeldung/finanzdienstleister-maschinelles-lernen-wird-die-branche-revolutionieren`,
  },
  { f: `/finweb-barometer-2015/`, t: `/news-medien/alle-beratungsfelder` },
  { f: `/blockchain/`, t: `/fokusthemen/thema/blockchain` },
  {
    f: `/finweb-barometer-88-prozent-der-bundesbuerger-sind-offen-fuer-angebote-von-nichtbanken/`,
    t: `/pressemeldung/finweb-barometer-88-prozent-der-bundesbuerger-sind-offen-fuer-angebote-von-nichtbanken`,
  },
  {
    f: `/psd2-mehr-als-jede-zweite-bank-hat-bedrohungen-und-chancen-noch-nicht-erkannt/`,
    t: `/pressemeldung/psd2-mehr-als-jede-zweite-bank-hat-bedrohungen-und-chancen-noch-nicht-erkannt`,
  },
  {
    f: `/eu-richtlinie-psd2-eroeffnet-banken-neue-wege-in-der-bonitaetspruefung/`,
    t: `/pressemeldung/eu-richtlinie-psd2-eroeffnet-banken-neue-wege-in-der-bonitaetspruefung`,
  },
  {
    f: `/studie-eigene-organisation-bremst-banken-bei-digitalisierung-aus/`,
    t: `/pressemeldung/studie-eigene-organisation-bremst-banken-bei-digitalisierung-aus`,
  },
  {
    f: `/zweite-phase-der-digitalisierung-2018-wird-zur-nagelprobe-fuer-deutsche-banken/`,
    t: `/pressemeldung/zweite-phase-der-digitalisierung-2018-wird-zur-nagelprobe-fuer-deutsche-banken`,
  },
  {
    f: `/wettlauf-der-kreditportale-negativ-kreditzinsen-machen-banken-zum-verlierer/`,
    t: `/pressemeldung/wettlauf-der-kreditportale-negativ-kreditzinsen-machen-banken-zum-verlierer`,
  },
  {
    f: `/achtes-mal-in-folge-auszeichnung-cofinpro-attraktiver-arbeitgeber-deutschlands/`,
    t: `/pressemeldung/achtes-mal-in-folge-auszeichnung-cofinpro-attraktiver-arbeitgeber-deutschlands`,
  },
  {
    f: `/digitalisierung-im-kreditgeschaeft/`,
    t: `/pressemeldung/digitalisierung-im-kreditgeschaeft`,
  },
  {
    f: `/banken-wandel-auf-knopfdruck-bleibt-illusion/`,
    t: `/pressemeldung/banken-wandel-auf-knopfdruck-bleibt-illusion`,
  },

  {
    f: `/stellenanzeige/java-werkstudent`,
    t: `/karriere/stellenanzeige/java-werkstudent`,
  },
  {
    f: `/stellenanzeige/corporate-recruiter`,
    t: `/karriere/stellenanzeige/corporate-recruiter`,
  },
  {
    f: `/stellenanzeige/ux-ui-consultant`,
    t: `/karriere/stellenanzeige/ux-ui-consultant`,
  },
  {
    f: `/stellenanzeige/senior-big-data-entwickler`,
    t: `/karriere/stellenanzeige/senior-big-data-entwickler`,
  },
  {
    f: `/stellenanzeige/managementberater-vertrieblich`,
    t: `/karriere/stellenanzeige/managementberater-vertrieblich`,
  },
  {
    f: `/stellenanzeige/projektmanager`,
    t: `/karriere/stellenanzeige/projektmanager`,
  },
  {
    f: `/stellenanzeige/managementberater`,
    t: `/karriere/stellenanzeige/managementberater`,
  },
  {
    f: `/stellenanzeige/software-architect-java`,
    t: `/karriere/stellenanzeige/software-architect-java`,
  },
  {
    f: `/stellenanzeige/senior-full-stack-entwickler-java`,
    t: `/karriere/stellenanzeige/senior-full-stack-entwickler-java`,
  },
  {
    f: `/stellenanzeige/senior-business-consultant-kredit`,
    t: `/karriere/stellenanzeige/senior-business-consultant-kredit`,
  },
  {
    f: `/stellenanzeige/berufsbegleitender-master-wirtschaftsinformatik`,
    t: `/karriere/stellenanzeige/berufsbegleitender-master-wirtschaftsinformatik`,
  },
  {
    f: `/stellenanzeige/berufsbegleitender-master-wirtschaftsinformatik-2`,
    t: `/karriere/stellenanzeige/berufsbegleitender-master-wirtschaftsinformatik-2`,
  },
  {
    f: `/stellenanzeige/business-consultant-kredit`,
    t: `/karriere/stellenanzeige/business-consultant-kredit`,
  },
  {
    f: `/stellenanzeige/senior-business-consultant-digitalisierung`,
    t: `/karriere/stellenanzeige/senior-business-consultant-digitalisierung`,
  },
  {
    f: `/stellenanzeige/product-owner-digitalisierung-wertpapier`,
    t: `/karriere/stellenanzeige/product-owner-digitalisierung-wertpapier`,
  },
  {
    f: `/stellenanzeige/senior-business-consultant-regulatorik`,
    t: `/karriere/stellenanzeige/senior-business-consultant-regulatorik`,
  },
  {
    f: `/stellenanzeige/senior-business-analyst-asset-management`,
    t: `/karriere/stellenanzeige/senior-business-analyst-asset-management`,
  },
  {
    f: `/stellenanzeige/business-consultant-regulatorik`,
    t: `/karriere/stellenanzeige/business-consultant-regulatorik`,
  },
  {
    f: `/stellenanzeige/praktikant-in-der-technologieberatung`,
    t: `/karriere/stellenanzeige/praktikant-in-der-technologieberatung`,
  },
  {
    f: `/stellenanzeige/praktikant-in-der-fachberatung`,
    t: `/karriere/stellenanzeige/praktikant-in-der-fachberatung`,
  },
  {
    f: `/stellenanzeige/dhbw-student-wirtschaftsinformatik`,
    t: `/karriere/stellenanzeige/dhbw-student-wirtschaftsinformatik`,
  },
  {
    f: `/stellenanzeige/senior-backend-entwickler-java`,
    t: `/karriere/stellenanzeige/senior-backend-entwickler-java`,
  },
  {
    f: `/stellenanzeige/junior-entwickler-java`,
    t: `/karriere/stellenanzeige/junior-entwickler-java`,
  },
  {
    f: `/stellenanzeige/fachlicher-junior-consultant`,
    t: `/karriere/stellenanzeige/fachlicher-junior-consultant`,
  },
  {
    f: `/stellenanzeige/senior-frontend-entwickler`,
    t: `/karriere/stellenanzeige/senior-frontend-entwickler`,
  },
  {
    f: `/stellenanzeige/senior-full-stack-entwickler-net`,
    t: `/karriere/stellenanzeige/senior-full-stack-entwickler-net`,
  },
  {
    f: `/stellenanzeige/backend-entwickler-java`,
    t: `/karriere/stellenanzeige/backend-entwickler-java`,
  },
  {
    f: `/stellenanzeige/full-stack-entwickler-java`,
    t: `/karriere/stellenanzeige/full-stack-entwickler-java`,
  },
  {
    f: `/stellenanzeige/business-analyst-asset-management`,
    t: `/karriere/stellenanzeige/business-analyst-asset-management`,
  },
  {
    f: `/stellenanzeige/full-stack-entwickler-net`,
    t: `/karriere/stellenanzeige/full-stack-entwickler-net`,
  },
  {
    f: `/stellenanzeige/product-owner-digitalisierung-kredit`,
    t: `/karriere/stellenanzeige/product-owner-digitalisierung-kredit`,
  },
  {
    f: `/stellenanzeige/frontend-entwickler`,
    t: `/karriere/stellenanzeige/frontend-entwickler`,
  },
  {
    f: `/stellenanzeige/business-consultant-digitalisierung`,
    t: `/karriere/stellenanzeige/business-consultant-digitalisierung`,
  },
  { f: `/pinnwand`, t: `/karriere/pinnwand` },
  {
    f: `/pinnwand/cofinpro-blog-schluss-mit-langweiligen-reports`,
    t: `/karriere/pinnwand/cofinpro-blog-schluss-mit-langweiligen-reports`,
  },
  {
    f: `/pinnwand/cofinpro-blog-single-sign-on-mit-cordova-und-keycloak`,
    t: `/karriere/pinnwand/cofinpro-blog-single-sign-on-mit-cordova-und-keycloak`,
  },
  {
    f: `/pinnwand/cofinpro-podcast-devops-deliveryofthings`,
    t: `/karriere/pinnwand/cofinpro-podcast-devops-deliveryofthings`,
  },
  {
    f: `/pinnwand/cofinpro-podcast-startuplife`,
    t: `/karriere/pinnwand/cofinpro-podcast-startuplife`,
  },
  {
    f: `/pinnwand/cofinpro-blog-dcos`,
    t: `/karriere/pinnwand/cofinpro-blog-dcos`,
  },
  {
    f: `/pinnwand/cofinpro-toyota-aygo-stadtflitzer`,
    t: `/karriere/pinnwand/cofinpro-toyota-aygo-stadtflitzer`,
  },
  {
    f: `/pinnwand/cofinpro-mvc-java-podcast`,
    t: `/karriere/pinnwand/cofinpro-mvc-java-podcast`,
  },
  {
    f: `/pinnwand/cofinpro-strong-viking-lauf`,
    t: `/karriere/pinnwand/cofinpro-strong-viking-lauf`,
  },
  {
    f: `/pinnwand/cofinpro-blog-leanstartup`,
    t: `/karriere/pinnwand/cofinpro-blog-leanstartup`,
  },
  {
    f: `/pinnwand/cofinpro-blog-chatops`,
    t: `/karriere/pinnwand/cofinpro-blog-chatops`,
  },
  {
    f: `/pinnwand/cofinpro-nachhaltigkeits-aktion`,
    t: `/karriere/pinnwand/cofinpro-nachhaltigkeits-aktion`,
  },
  {
    f: `/pinnwand/cofinpro-coding-dojo-2018`,
    t: `/karriere/pinnwand/cofinpro-coding-dojo-2018`,
  },
  {
    f: `/pinnwand/cofinpro-diversity-tag`,
    t: `/karriere/pinnwand/cofinpro-diversity-tag`,
  },
  { f: `/pinnwand/podcast-d3js`, t: `/karriere/pinnwand/podcast-d3js` },
  {
    f: `/pinnwand/webjars-mit-maven`,
    t: `/karriere/pinnwand/webjars-mit-maven`,
  },
  {
    f: `/pinnwand/cofinpro-konaktiva-karrieremesse`,
    t: `/karriere/pinnwand/cofinpro-konaktiva-karrieremesse`,
  },
  {
    f: `/pinnwand/cofinpro-messe-warmup`,
    t: `/karriere/pinnwand/cofinpro-messe-warmup`,
  },
  {
    f: `/pinnwand/cofinpro-bester-arbeitgeber-consulting`,
    t: `/karriere/pinnwand/cofinpro-bester-arbeitgeber-consulting`,
  },
  {
    f: `/pinnwand/cofinpro-tech-podcast-news`,
    t: `/karriere/pinnwand/cofinpro-tech-podcast-news`,
  },
  {
    f: `/pinnwand/cofinpro-it-karrieretag`,
    t: `/karriere/pinnwand/cofinpro-it-karrieretag`,
  },
  {
    f: `/pinnwand/cofinpro-great-place-to-work`,
    t: `/karriere/pinnwand/cofinpro-great-place-to-work`,
  },
  { f: `/pinnwand/hello-j-unit-5`, t: `/karriere/pinnwand/hello-j-unit-5` },
  {
    f: `/pinnwand/cofinpro-karriere-messe`,
    t: `/karriere/pinnwand/cofinpro-karriere-messe`,
  },
  {
    f: `/pinnwand/unsere-young-professionals-machen-wirbel`,
    t: `/karriere/pinnwand/unsere-young-professionals-machen-wirbel`,
  },
  {
    f: `/pinnwand/cofinpro-wird-10-jahre`,
    t: `/karriere/pinnwand/cofinpro-wird-10-jahre`,
  },
  {
    f: `/pinnwand/cofinpro-goes-green`,
    t: `/karriere/pinnwand/cofinpro-goes-green`,
  },
  { f: `/jobs`, t: `/karriere/jobs` },
  { f: `/ueber-uns`, t: `/karriere/ueber-uns` },
  {
    f: `/fachlicher-absolvent/deine-karriere`,
    t: `/karriere/fachlicher-absolvent/deine-karriere`,
  },
  {
    f: `/technologischer-absolvent/deine-karriere`,
    t: `/karriere/technologischer-absolvent/deine-karriere`,
  },
  { f: `/studenten/deine-karriere`, t: `/karriere/studenten/deine-karriere` },
  {
    f: `/fachlicher-professional/deine-karriere`,
    t: `/karriere/fachlicher-professional/deine-karriere`,
  },
  { f: `/andere/deine-karriere`, t: `/karriere/andere/deine-karriere` },
  {
    f: `/technologischer-professional/deine-karriere`,
    t: `/karriere/technologischer-professional/deine-karriere`,
  },
  {
    f: `/fachlicher-absolvent/deine-entwicklung`,
    t: `/karriere/fachlicher-absolvent/deine-entwicklung`,
  },
  {
    f: `/studenten/deine-entwicklung`,
    t: `/karriere/studenten/deine-entwicklung`,
  },
  {
    f: `/technologischer-professional/deine-entwicklung`,
    t: `/karriere/technologischer-professional/deine-entwicklung`,
  },
  {
    f: `/technologischer-absolvent/deine-entwicklung`,
    t: `/karriere/technologischer-absolvent/deine-entwicklung`,
  },
  { f: `/andere/deine-entwicklung`, t: `/karriere/andere/deine-entwicklung` },
  {
    f: `/fachlicher-professional/deine-entwicklung`,
    t: `/karriere/fachlicher-professional/deine-entwicklung`,
  },
  {
    f: `/fachlicher-professional/landing`,
    t: `/karriere/fachlicher-professional/landing`,
  },
  { f: `/studenten/landing`, t: `/karriere/studenten/landing` },
  { f: `/andere/landing`, t: `/karriere/andere/landing` },
  {
    f: `/technologischer-absolvent/landing`,
    t: `/karriere/technologischer-absolvent/landing`,
  },
  {
    f: `/fachlicher-absolvent/landing`,
    t: `/karriere/fachlicher-absolvent/landing`,
  },
  {
    f: `/technologischer-professional/landing`,
    t: `/karriere/technologischer-professional/landing`,
  },
  {
    f: `/fachlicher-absolvent/gehalt-beteiligung`,
    t: `/karriere/fachlicher-absolvent/gehalt-beteiligung`,
  },
  { f: `/andere/gehalt-beteiligung`, t: `/karriere/andere/gehalt-beteiligung` },
  {
    f: `/studenten/gehalt-beteiligung`,
    t: `/karriere/studenten/gehalt-beteiligung`,
  },
  {
    f: `/fachlicher-professional/gehalt-beteiligung`,
    t: `/karriere/fachlicher-professional/gehalt-beteiligung`,
  },
  {
    f: `/technologischer-professional/gehalt-beteiligung`,
    t: `/karriere/technologischer-professional/gehalt-beteiligung`,
  },
  {
    f: `/technologischer-absolvent/gehalt-beteiligung`,
    t: `/karriere/technologischer-absolvent/gehalt-beteiligung`,
  },
  { f: `/work-life`, t: `/karriere/work-life` },
  { f: `/jobs-bewerbung`, t: `/karriere/jobs-bewerbung` },
  { f: `/technologie/`, t: `/karriere/technologie/` },
  {
    f: `/fin-web-barometer-digitales-banking-2018`,
    t: `/pdf/contentful/MmgKMzN7KoUkqGyEsiU2Y.pdf`,
  },
  {
    f: `/sparen-dank-target2-securities`,
    t: `/pdf/contentful/c6L2YBZVhW8cQE4gsIi2CGu.pdf`,
  },
  {
    f: `/expertenstudie-mifid-ii-2018`,
    t: `/pdf/contentful/c1aaVe6CDHkkc6uG4AKyu8q.pdf`,
  },
]

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
                             resolve: {
                               modules: [path.resolve(__dirname, 'src'), 'node_modules'],
                             },
                           });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  globalGraphql = graphql
  globalCreatePage = createPage
  globalCreateRedirect = createRedirect

  for (var { f: f, t: t } of redirectList) {
    createRedirect({
      fromPath: f,
      isPermanent: true,
      toPath: t,
    })
    // Uncomment next line to see loop in action during build
    console.log('\nRedirecting: from:' + f + ' - to:' + t)
    // or check .cache/redirects.json post-compile.
  }

  moment.locale('de')

  return new Promise((resolve, reject) => {
    async.waterfall(
      [
        async.apply(contentfulImageService.refreshImages, globalGraphql),
        getNews,
        getStockImages,
        createPages,
      ],
      () => {
        resolve()
        console.log('done')
      }
    )
  })
}

function createPages(callback) {
  var asyncTasks = []

  asyncTasks.push(
    async.apply(
      pagesStellenanzeigen.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(pagePinnwand.create, globalCreatePage, globalNews)
  )
  asyncTasks.push(async.apply(pagesNews.create, globalCreatePage, globalNews))
  asyncTasks.push(
    async.apply(pageStellenmarkt.create, globalGraphql, globalCreatePage)
  )
  // TODO: asyncTasks.push(
  //   async.apply(pagesUeberUns.create, globalGraphql, globalCreatePage)
  // )
  asyncTasks.push(
    async.apply(
      pagesDeineKarriere.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(
      pageDeineEntwicklung.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(
      pageLanding.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect,
      globalNews
    )
  )
  asyncTasks.push(
    async.apply(
      pagesGehaltBenefits.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )
  asyncTasks.push(
    async.apply(pageWorkLife.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pageJobBewerbung.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(pageStartseiteKarriere.create, globalGraphql, globalCreatePage)
  )
  asyncTasks.push(
    async.apply(
      pagesFokusthemen.create,
      globalGraphql,
      globalCreatePage,
      globalCreateRedirect
    )
  )

  asyncTasks.push(
    async.apply(
      pageProjekte.create,
      globalGraphql,
      globalCreatePage,
      globalBackgroundImages
    )
  )

  asyncTasks.push(
    async.apply(
      pageNewsMedien.create,
      globalGraphql,
      globalCreatePage,
      globalBackgroundImages
    )
  )

  async.waterfall(asyncTasks, function() {
    // All tasks are done now
    callback()
  })
}

function createSharpImage(graphql, sharpParameter, originalImg, callback) {
  if (originalImg === undefined || originalImg === null) {
    callback(null, null)
  } else {
    graphql(
      `
        {
        resultImage: imageSharp(id: { regex: "/` +
        originalImg.id +
        `/" }) {
                              fluid(` +
        sharpParameter +
        `) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
                          }
                      }
                  }
              `
    ).then(result => {
      callback(null, result.data.resultImage)
    })
  }
}

function getStockImages(callback) {
  globalGraphql(`
    {
      architektur1ImageSharp: imageSharp(id: { regex: "/stock_architektur_1/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      architektur2ImageSharp: imageSharp(id: { regex: "/stock_architektur_2/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      architektur4ImageSharp: imageSharp(id: { regex: "/stock_architektur_4/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      architektur6ImageSharp: imageSharp(id: { regex: "/stock_architektur_6/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      architektur7ImageSharp: imageSharp(id: { regex: "/stock_architektur_7/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      architektur9ImageSharp: imageSharp(id: { regex: "/stock_architektur_9/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      architektur10ImageSharp: imageSharp(
        id: { regex: "/stock_architektur_10/" }
      ) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      architektur11ImageSharp: imageSharp(
        id: { regex: "/stock_architektur_11/" }
      ) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht46ImageSharp: imageSharp(id: { regex: "/stock_licht_46/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht2ImageSharp: imageSharp(id: { regex: "/stock_licht_2/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht3ImageSharp: imageSharp(id: { regex: "/stock_licht_3/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht4ImageSharp: imageSharp(id: { regex: "/stock_licht_4/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht41ImageSharp: imageSharp(id: { regex: "/stock_licht_41/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht42ImageSharp: imageSharp(id: { regex: "/stock_licht_42/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht31ImageSharp: imageSharp(id: { regex: "/stock_licht_31/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
      licht22ImageSharp: imageSharp(id: { regex: "/stock_licht_22/" }) {
        fluid(quality: 100, maxWidth: 1600, maxHeight: 1000, cropFocus: CENTER) {
          src
          srcSet
          srcWebp
          srcSetWebp
          originalImg
          originalName
          base64
          aspectRatio
          sizes
        }
      }
    }
`).then(result => {
    globalBackgroundImages.length = 0

    globalBackgroundImages.push(result.data.architektur1ImageSharp)
    globalBackgroundImages.push(result.data.architektur2ImageSharp)

    globalBackgroundImages.push(result.data.licht46ImageSharp)
    globalBackgroundImages.push(result.data.licht2ImageSharp)

    globalBackgroundImages.push(result.data.architektur4ImageSharp)
    globalBackgroundImages.push(result.data.architektur6ImageSharp)

    globalBackgroundImages.push(result.data.licht31ImageSharp)
    globalBackgroundImages.push(result.data.licht22ImageSharp)

    globalBackgroundImages.push(result.data.architektur7ImageSharp)
    globalBackgroundImages.push(result.data.architektur9ImageSharp)

    globalBackgroundImages.push(result.data.licht3ImageSharp)
    globalBackgroundImages.push(result.data.licht4ImageSharp)

    globalBackgroundImages.push(result.data.architektur10ImageSharp)
    globalBackgroundImages.push(result.data.architektur11ImageSharp)

    globalBackgroundImages.push(result.data.licht41ImageSharp)
    globalBackgroundImages.push(result.data.licht42ImageSharp)

    callback(null)
  })
}

function getNews(callback) {
  globalGraphql(`
      {
        allContentfulSeiteNews(
          sort: { fields: [datumFuerDieAnzeige], order: DESC }
        ) {
          edges {
            node {
              id
              metaData {
                title
                keywords {
                  keywords
                }
                description {
                  description
                }
              }
              parent {
                id
              }
              url
              zugeordnetePerspektivenKompetenz  {
                name
              }
              titel
              titelbild {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              datumFuerDieAnzeige
              ueberschrift
              kurzeBeschreibung {
                kurzeBeschreibung
              }
              absatz1 {
                absatz1
              }
              newsBild {
                id
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              absatz2 {
                absatz2
              }
            }
          }
        }
      }
    `).then(result => {
    globalNews = result.data.allContentfulSeiteNews.edges

    globalNews.forEach(function(object, index) {
      if (object.node.datumFuerDieAnzeige != null) {
        object.node.datumFuerDieAnzeige = moment(
          object.node.datumFuerDieAnzeige,
          'YYYY-MM-DD'
        ).format('L')
      }
    })

    var itemsProcessed = 0

    globalNews.forEach((item, index, array) => {
      console.log('creating sharp images for news:' + item.node.titel)

      async.parallel(
        {
          titelBild: async.apply(
            createSharpImage,
            globalGraphql,
            'maxWidth: 2000, maxHeight: 1250, quality: 60, cropFocus: CENTER',
            item.node.titelbild
          ),
          newsBild: async.apply(
            createSharpImage,
            globalGraphql,
            'maxWidth: 1800, quality: 60',
            item.node.newsBild
          ),
        },
        function(err, results) {
          itemsProcessed++

          item.node.titelbildSharp = results.titelBild
          item.node.newsBildSharp = results.newsBild

          if (itemsProcessed === globalNews.length) {
            console.log('finished sharp images for all news.')

            callback(null)
          }
        }
      )
    })
  })
}

