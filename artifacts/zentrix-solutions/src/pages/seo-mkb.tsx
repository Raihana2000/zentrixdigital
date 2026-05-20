import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website voor MKB laten maken",
  intro: "Als MKB-bedrijf heeft u meer nodig dan alleen een mooie website. Uw website moet vertrouwen opbouwen, duidelijk maken wat u aanbiedt en bezoekers snel naar contact, offerte of aanvraag begeleiden. reldio bouwt professionele websites voor MKB-bedrijven die online serieuzer willen overkomen en makkelijker aanvragen willen ontvangen.",
  benefitsTitle: "Waarom een sterke website belangrijk is voor MKB-bedrijven",
  benefits: [
    "Betere vindbaarheid in Google — meer relevante bezoekers, meer aanvragen",
    "Professionele uitstraling die direct vertrouwen wekt bij nieuwe klanten",
    "Conversiegerichte opbouw die bezoekers begeleidt naar contact of offerte",
    "Altijd bereikbaar — ook buiten kantooruren leads ontvangen via formulier of WhatsApp",
    "Schaalbaar platform dat meegroeit met uw MKB-bedrijf",
    "Uitbreidbaar met CRM, klantportaal, dashboard of boekingssysteem"
  ],
  includedTitle: "Wat wij bouwen voor MKB-bedrijven",
  included: [
    "Maatwerk design passend bij uw huisstijl, branche en doelgroep",
    "Volledig mobielvriendelijk — perfect op smartphone, tablet en desktop",
    "Heldere pagina-structuur gericht op contactaanvragen en conversie",
    "Contactpagina met formulier, WhatsApp-koppeling en telefonische bereikbaarheid",
    "SEO-technische basisstructuur voor betere vindbaarheid in Google",
    "Snelle laadtijden en veilige technische basis"
  ],
  examplesTitle: "Van website naar online systeem",
  examples: [
    "Klantportalen waar klanten inloggen, documenten inzien en opdrachten beheren",
    "Online boekingssystemen voor afspraken, diensten of consultaties",
    "Dashboards met overzicht van klanten, data of bedrijfsprocessen",
    "Intakeformulieren met automatische verwerking en directe e-mailkoppeling",
    "WhatsApp-koppelingen en geautomatiseerde berichtensystemen",
    "CRM-koppelingen en integraties met boekhoudsoftware of externe tools"
  ],
  whoForTitle: "Voor welke MKB-bedrijven is dit geschikt?",
  whoFor: [
    { title: "Administratie- en adviesbureaus", text: "Bureaus die professioneel overkomen willen, meer aanvragen willen ontvangen en hun diensten helder willen communiceren." },
    { title: "Uitzendbureaus en recruiters", text: "Bedrijven die vacatures tonen, kandidaten aantrekken en werkgevers overtuigen via een sterk online platform." },
    { title: "Makelaars en financieel dienstverleners", text: "Professionals waarbij vertrouwen en uitstraling doorslaggevend zijn voor het binnenhalen van nieuwe klanten." },
    { title: "Groeiende MKB-bedrijven", text: "Organisaties die meer nodig hebben dan een standaard website en willen schalen met slimme online systemen." }
  ],
  processTitle: "Zo gaan wij te werk",
  process: [
    { title: "Gratis analyse", text: "Wij analyseren uw huidige online aanwezigheid, bespreken uw doelen en geven eerlijk advies — zonder verplichtingen." },
    { title: "Ontwerp & opbouw", text: "Wij bouwen uw MKB-website op maat — passend bij uw branche, doelgroep en gewenste uitstraling." },
    { title: "Live & uitbreiden", text: "Na livegang begeleiden wij u bij verdere groei: van extra functies tot slimme systemen die uw bedrijf efficiënter maken." }
  ],
  ctaTitle: "Website voor uw MKB-bedrijf laten maken?",
  ctaText: "Vraag vrijblijvend een gratis websiteanalyse aan en ontdek hoe een professionele MKB-website uw online aanwezigheid versterkt en meer aanvragen oplevert. Wij zijn gevestigd in Amsterdam en werken voor MKB-bedrijven in heel Nederland.",
  ctaButton: "Gratis analyse aanvragen"
};

const SeoMKB = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website voor MKB laten maken | reldio Amsterdam"
    metaDesc="Laat een professionele website voor uw MKB-bedrijf maken door reldio. Moderne websites met SEO-basis, WhatsApp, formulieren en uitbreidbare systemen."
    canonical="https://www.reldio.eu/website-voor-mkb"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Gratis analyse aanvragen"
    langToggle={{ label: "English version", href: "/en/website-for-smes" }}
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Website laten maken voor bedrijven", href: "/website-laten-maken-bedrijven" },
      { label: "Website laten maken voor ZZP", href: "/website-laten-maken-zzp" },
      { label: "CRM systeem laten maken", href: "/crm-systeem-laten-maken" },
      { label: "Maatwerk applicaties", href: "/applicaties" }
    ]}
  />
);

export default SeoMKB;
