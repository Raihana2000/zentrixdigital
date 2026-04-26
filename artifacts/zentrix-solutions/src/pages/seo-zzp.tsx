import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website laten maken voor ZZP",
  intro: "Als zzp'er is uw website uw belangrijkste verkooptool. ZentrixDigital bouwt professionele websites voor zelfstandigen die klanten overtuigen, vertrouwen opbouwen en 24/7 voor u werken — volledig op maat en conversiebewust.",
  benefitsTitle: "Voordelen van een professionele zzp-website",
  benefits: [
    "Gevonden worden op Google met de juiste zoekwoorden voor uw vakgebied",
    "Direct vertrouwen opbouwen bij nieuwe klanten — ook zonder referenties",
    "Professionele uitstraling die past bij uw branche en doelgroep",
    "Altijd bereikbaar — uw website werkt ook buiten kantooruren",
    "Meer aanvragen zonder dure advertenties of tussenpersonen",
    "Uitbreidbaar met WhatsApp-koppeling, boekingen en contactformulieren"
  ],
  includedTitle: "Wat zit er in uw zzp-website?",
  included: [
    "Professioneel maatwerk design passend bij uw vakgebied",
    "Volledig mobiel-vriendelijk — werkt op elk apparaat",
    "Contactpagina met formulier, WhatsApp en telefonische koppeling",
    "Basisoptimalisatie voor Google (SEO-ready structuur)",
    "Snelle laadtijden en stabiele technische basis",
    "Duidelijke call-to-actions die bezoekers omzetten in klanten"
  ],
  whoForTitle: "Voor welke zzp'ers werken wij?",
  whoFor: [
    { title: "Consultants en adviseurs", text: "Positioneer uw expertise professioneel en genereer meer aanvragen via een website die uw kennis etaleert." },
    { title: "Creatieve professionals", text: "Fotografen, ontwerpers en schrijvers die hun portfolio professioneel willen presenteren en opdrachten willen aantrekken." },
    { title: "Coaches en therapeuten", text: "Bouw vertrouwen op bij potentiële klanten en vul uw agenda met boekingen via een heldere, professionele website." },
    { title: "Technische zzp'ers", text: "Installateurs, klusjesmannen en IT-specialisten die lokaal gevonden willen worden en directe aanvragen willen ontvangen." }
  ],
  processTitle: "Zo werken wij",
  process: [
    { title: "Gratis analyse", text: "We bespreken uw doelen, doelgroep en wat uw website moet bereiken. Geen verplichtingen, wel eerlijk advies." },
    { title: "Ontwerp & bouw", text: "Wij bouwen uw website volledig op maat — passend bij uw uitstraling en gericht op meer aanvragen." },
    { title: "Live & groeien", text: "Uw website gaat live en u kunt direct klanten ontvangen. Wij staan klaar voor verdere groei en uitbreidingen." }
  ],
  ctaTitle: "Klaar voor een website die klanten oplevert?",
  ctaText: "Vraag een gratis analyse aan en ontdek wat een professionele website voor zzp voor u kan betekenen. Geen verplichtingen, wel eerlijk advies.",
  ctaButton: "Gratis analyse aanvragen"
};

const SeoZZP = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website laten maken ZZP | ZentrixDigital"
    metaDesc="Professionele website laten maken voor zzp'ers. Meer klanten, betere uitstraling en een website die vertrouwen opbouwt. Gratis analyse aanvragen."
    canonical="https://www.zentrixdigital.eu/website-laten-maken-zzp"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Gratis analyse aanvragen"
    langToggle={{ label: "English version", href: "/en/website-for-freelancers" }}
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Website laten maken voor bedrijven", href: "/website-laten-maken-bedrijven" },
      { label: "Professionele website laten maken", href: "/websites" },
      { label: "English: Website for Freelancers", href: "/en/website-for-freelancers" },
      { label: "Maatwerk applicaties", href: "/applicaties" }
    ]}
  />
);

export default SeoZZP;
