import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website laten maken voor bedrijven die willen groeien",
  intro: "Als ondernemer wilt u niet zomaar een website — u wilt een digitaal platform dat actief bijdraagt aan de groei van uw bedrijf. ZentrixDigital bouwt professionele bedrijfswebsites die klanten aantrekken, vertrouwen opbouwen en structureel meer aanvragen genereren. Met slimme systemen en automatisering die uw bedrijf schaalbaarder maken.",
  benefitsTitle: "Wat een professionele bedrijfswebsite u oplevert",
  benefits: [
    "Meer aanvragen via Google — klanten vinden u op het moment dat zij zoeken",
    "24/7 bereikbaar — uw website werkt ook buiten kantooruren voor u",
    "Hogere conversie — meer bezoekers worden daadwerkelijk klant",
    "Professionele uitstraling die vertrouwen opbouwt en u onderscheidt van concurrenten",
    "Uitbreidbaar met boekingssystemen, CRM en automatisering voor meer efficiëntie",
    "Meetbaar resultaat — u ziet exact hoeveel aanvragen uw website genereert"
  ],
  includedTitle: "Wat zit er in uw bedrijfswebsite?",
  included: [
    "Strategisch maatwerk design gericht op uw doelgroep en concurrentieomgeving",
    "SEO-geoptimaliseerde pagina's voor betere positie in Google",
    "Diensten- en landingspagina's die bezoekers overtuigen en converteren",
    "Contactformulier, WhatsApp-koppeling en directe beloptie",
    "Volledig mobielvriendelijk en snel laden op alle apparaten",
    "Integratiemogelijkheden met boekingssystemen, CRM en klantportalen",
    "GDPR/AVG-conform met cookiebanner en privacybeleid"
  ],
  extrasTitle: "Slimme systemen die uw bedrijf laten groeien",
  extras: [
    "Boekingssysteem: klanten plannen zelf afspraken — u bespaart tijd en mist geen aanvraag",
    "CRM-koppeling: alle klantgegevens automatisch georganiseerd en toegankelijk",
    "WhatsApp-integratie: directe communicatie met potentiële klanten via een klik",
    "Automatische bevestigingsmails: professionele opvolging zonder handmatig werk",
    "Analytics-koppeling: inzicht in hoe bezoekers uw website gebruiken",
    "Groeipad: wij bouwen mee naarmate uw bedrijf groeit en schaalt"
  ],
  whoForTitle: "Voor welke bedrijven bouwen wij?",
  whoFor: [
    { title: "Dienstverlenende bedrijven", text: "Bureaus, consultants, adviseurs en specialisten die hun expertise online willen positioneren en hoogwaardige klanten willen aantrekken via een professionele website." },
    { title: "Lokale ondernemers en MKB", text: "Winkeliers, installateurs, kappers, horecaondernemers en andere lokale bedrijven die meer Amsterdamse of regionale klanten willen bereiken via Google." },
    { title: "Groeiende startups", text: "Startups die snel een professionele online aanwezigheid nodig hebben om investeerders, partners en klanten te overtuigen van hun propositie en potentie." },
    { title: "Bedrijven met verouderde website", text: "Gevestigde bedrijven waarvan de website niet meer aansluit bij de huidige uitstraling, doelgroep of marktvraag — en die klaar zijn voor een nieuwe start." }
  ],
  processTitle: "Zo werken wij samen",
  process: [
    { title: "Gratis strategiegesprek", text: "We leren uw bedrijf, uw doelgroep en uw doelen kennen. U ontvangt eerlijk advies over wat uw website moet kunnen en wat het realistisch kost." },
    { title: "Bouwen in 7 dagen", text: "Uw bedrijfswebsite wordt volledig op maat gebouwd — conversiebewust, SEO-klaar en uitbreidbaar met de systemen die uw bedrijf nodig heeft." },
    { title: "Live en groeiend", text: "Na lancering helpen wij u met verdere optimalisatie, betere Google-posities en uitbreidingen die meegroeien met uw bedrijf en ambities." }
  ],
  ctaTitle: "Wil uw bedrijf online groeien?",
  ctaText: "Vraag vandaag een gratis strategiegesprek aan. Wij bespreken wat uw bedrijf nodig heeft, wat het oplevert en hoe snel u live kunt gaan. Transparant, eerlijk en zonder verplichtingen.",
  ctaButton: "Gratis strategiegesprek aanvragen"
};

const SeoWebsiteVoorBedrijven = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website laten maken voor bedrijven | ZentrixDigital"
    metaDesc="Professionele website laten maken voor bedrijven die willen groeien. Meer klanten via slimme systemen en SEO. Vanaf €700, binnen 7 dagen live."
    canonical="https://www.zentrixdigital.eu/website-voor-bedrijven"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Gratis strategiegesprek aanvragen"
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Website laten maken Amsterdam", href: "/website-laten-maken-amsterdam" },
      { label: "Professioneel webdesign bedrijf", href: "/webdesign-bedrijf" },
      { label: "Wat kost een website laten maken?", href: "/website-kosten" },
      { label: "Website laten maken voor bedrijven", href: "/website-laten-maken-bedrijven" }
    ]}
  />
);

export default SeoWebsiteVoorBedrijven;
