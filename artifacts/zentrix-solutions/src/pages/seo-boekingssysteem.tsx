import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Boekingssysteem laten maken",
  intro: "Gemiste afspraken en handmatige planningschaos kosten u tijd en omzet. ZentrixDigital bouwt op maat gemaakte boekingssystemen die afspraken automatiseren, fouten elimineren en uw agenda 24/7 laten werken.",
  benefitsTitle: "Voordelen van een maatwerk boekingssysteem",
  benefits: [
    "Automatische afsprakenbeheer — klanten boeken direct online",
    "Minder fouten in uw planning door volledige automatisering",
    "Tijdsbesparing: geen handmatig telefoneren of e-mailen voor afspraken",
    "Automatische bevestiging en herinneringen voor klanten en medewerkers",
    "Realtime agenda-overzicht voor uw hele team",
    "Schaalbaar voor meerdere locaties, medewerkers of diensten"
  ],
  includedTitle: "Wat zit er in uw boekingssysteem?",
  included: [
    "Online boekingspagina volledig op maat van uw diensten",
    "Koppeling met uw bestaande agenda (Google Calendar, Outlook)",
    "Automatische bevestigings- en herinneringsmail of -SMS",
    "Betaalkoppeling voor eventuele vooruitbetaling of aanbetaling",
    "Dashboard met afspraken, beschikbaarheid en statistieken",
    "Gebruikersbeheer voor meerdere medewerkers of locaties"
  ],
  whoForTitle: "Voor welke branches is een boekingssysteem ideaal?",
  whoFor: [
    { title: "Zorgsector en therapiepraktijken", text: "Huisartsen, fysiotherapeuten en coaches die afspraken professioneel willen beheren zonder telefonische rompslomp." },
    { title: "Schoonheids- en wellnessbedrijven", text: "Kappers, nagelstudio's en wellness-centra die hun agenda 24/7 online willen laten vullen." },
    { title: "Trainings- en onderwijsinstellingen", text: "Sportscholen, rijscholen en cursusaanbieders die lesblokken en plekken automatisch willen beheren." },
    { title: "Verhuur en reserveringen", text: "Accommodaties, voertuigverhuurders en vergaderzaalverhuurders die reserveringen online willen stroomlijnen." }
  ],
  processTitle: "Hoe verloopt het traject?",
  process: [
    { title: "Analyse van uw planning", text: "We brengen uw huidige planning, diensten en klantstromen in kaart en bepalen samen de vereisten." },
    { title: "Bouw en integratie", text: "We bouwen uw boekingssysteem en koppelen het aan uw agenda, betaaloplossing en communicatietools." },
    { title: "Live en schalen", text: "Het systeem gaat live en begint direct afspraken te verwerken. Uitbreidingen zijn altijd mogelijk." }
  ],
  ctaTitle: "Start met automatisch afspraken ontvangen?",
  ctaText: "Vraag een gratis analyse aan en ontdek hoe een maatwerk boekingssysteem uw planning vereenvoudigt en meer boekingen oplevert.",
  ctaButton: "Start met automatiseren"
};

const SeoBoekingssysteem = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Boekingssysteem laten maken | ZentrixDigital"
    metaDesc="Boekingssysteem laten maken op maat. Automatische afspraken, minder fouten en meer tijd besparen. ZentrixDigital bouwt online reserveringssystemen."
    canonical="https://www.zentrixdigital.eu/boekingssysteem-laten-maken"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Start met automatiseren"
    langToggle={{ label: "English version", href: "/en/booking-system-development" }}
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "CRM systeem laten maken", href: "/crm-systeem-laten-maken" },
      { label: "Bedrijfsprocessen automatiseren", href: "/bedrijfsprocessen-automatiseren" },
      { label: "Maatwerk applicaties", href: "/applicaties" },
      { label: "English: Booking System Development", href: "/en/booking-system-development" }
    ]}
  />
);

export default SeoBoekingssysteem;
