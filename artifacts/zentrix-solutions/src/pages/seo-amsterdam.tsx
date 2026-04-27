import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website laten maken in Amsterdam die klanten oplevert",
  intro: "Een professionele website laten maken in Amsterdam is de slimste investering die u als ondernemer kunt doen. ZentrixDigital bouwt moderne, snelle en conversiegerichte websites voor bedrijven in Amsterdam en heel Nederland — websites die niet alleen mooi ogen, maar ook daadwerkelijk klanten opleveren.",
  benefitsTitle: "Waarom bedrijven in Amsterdam kiezen voor ZentrixDigital",
  benefits: [
    "Lokale expertise: wij begrijpen de Amsterdamse markt en uw doelgroep",
    "Websites die gemiddeld 3× meer aanvragen genereren dan standaard templates",
    "Gevonden worden in Google op zoektermen die uw doelklanten gebruiken",
    "Volledig mobielvriendelijk — meer dan 70% van bezoekers komt via smartphone",
    "Snelle laadtijden voor betere Google-ranking en meer conversie",
    "Binnen 7 dagen live — zodat u snel kunt beginnen met meer klanten ontvangen",
    "Geen verborgen kosten: transparante prijs vanaf €700"
  ],
  includedTitle: "Wat zit er in uw Amsterdamse bedrijfswebsite?",
  included: [
    "Maatwerk design dat aansluit bij uw merk en doelgroep",
    "SEO-geoptimaliseerde pagina-structuur voor betere vindbaarheid",
    "Contactformulier, WhatsApp-koppeling en directe belknop",
    "Google Maps-integratie voor lokale zichtbaarheid in Amsterdam",
    "Volledige mobiel-responsiviteit — werkt perfect op elk apparaat",
    "Technische SEO: sitemaps, robots.txt, metatags en laadtijdoptimalisatie",
    "GDPR/AVG-conforme privacyinstellingen en cookiebanner"
  ],
  extrasTitle: "Waarom veel Amsterdamse websites geen klanten opleveren",
  extras: [
    "Geen duidelijke call-to-action — bezoekers weten niet wat ze moeten doen",
    "Langzame laadtijd — Google straft dit af én bezoekers haken af",
    "Niet geoptimaliseerd voor mobiel — de helft van uw bezoekers is weg",
    "Onduidelijke boodschap — uw unieke waarde is niet zichtbaar voor bezoekers",
    "Geen lokale SEO — u wordt niet gevonden in Google Maps en lokale zoekopdrachten",
    "Slechte structuur — Google begrijpt uw pagina niet en rankt u lager"
  ],
  whoForTitle: "Voor welke Amsterdamse bedrijven bouwen wij?",
  whoFor: [
    { title: "MKB-bedrijven in Amsterdam", text: "Van startende ondernemers tot gevestigde bedrijven — wij bouwen websites die uw Amsterdamse klanten overtuigen en meer aanvragen genereren." },
    { title: "Zelfstandige professionals (ZZP)", text: "Als zzp'er in Amsterdam heeft u een website nodig die uw expertise toont en vertrouwen opbouwt bij potentiële opdrachtgevers." },
    { title: "Lokale dienstverleners", text: "Kappers, installateurs, coaches, therapeuten en andere dienstverleners die lokaal gevonden willen worden via Google en meer afspraken willen ontvangen." },
    { title: "Horecaondernemers", text: "Restaurants, cafés en food-concepten die online reserveringen, meer bezoekers en een sterke Amsterdamse aanwezigheid willen opbouwen." }
  ],
  processTitle: "Hoe wij werken",
  process: [
    { title: "Gratis strategiegesprek", text: "We bespreken uw doelen, uw Amsterdamse doelgroep en wat uw website moet bereiken. Geen verplichtingen, wel concreet en eerlijk advies." },
    { title: "Ontwerp & bouw binnen 7 dagen", text: "Wij bouwen uw website volledig op maat — conversiebewust, SEO-geoptimaliseerd en gericht op de Amsterdamse markt. Binnen één week live." },
    { title: "Live en groeiend", text: "Uw website gaat live en begint direct voor u te werken. Wij begeleiden u daarna bij verdere groei, uitbreidingen en betere Google-posities." }
  ],
  ctaTitle: "Klaar voor een website die klanten oplevert in Amsterdam?",
  ctaText: "Vraag vandaag nog een gratis strategiegesprek aan. Wij vertellen u eerlijk wat uw website kan opleveren, wat het kost en hoe snel u online kunt zijn. Geen verplichtingen.",
  ctaButton: "Gratis strategiegesprek aanvragen"
};

const SeoAmsterdam = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website laten maken Amsterdam | ZentrixDigital"
    metaDesc="Professionele website laten maken in Amsterdam? Snel, modern en gericht op klanten. Vanaf €700, binnen 7 dagen live. Vraag gratis strategiegesprek aan."
    canonical="https://www.zentrixdigital.eu/website-laten-maken-amsterdam"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Gratis strategiegesprek aanvragen"
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Wat kost een website laten maken?", href: "/website-kosten" },
      { label: "Website laten maken voor bedrijven", href: "/website-voor-bedrijven" },
      { label: "Professioneel webdesign bedrijf", href: "/webdesign-bedrijf" },
      { label: "Website voor ZZP", href: "/website-laten-maken-zzp" }
    ]}
  />
);

export default SeoAmsterdam;
