import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Bedrijfsprocessen automatiseren",
  intro: "Handmatige processen kosten uw team kostbare tijd en introduceren onnodige fouten. ZentrixDigital automatiseert bedrijfsprocessen zodat uw organisatie sneller werkt, minder fouten maakt en probleemloos kan opschalen.",
  benefitsTitle: "Voordelen van procesautomatisering",
  benefits: [
    "Minder handmatig werk — uw team focust op wat écht telt",
    "Snellere doorlooptijden door automatische verwerking van taken",
    "Minder fouten door gestandaardiseerde en geautomatiseerde werkstromen",
    "Schaalbaarheid — meer volume verwerken zonder extra personeel",
    "Real-time inzicht in de status van processen en taken",
    "Naadloze koppeling van bestaande systemen en tools"
  ],
  includedTitle: "Wat kan er worden geautomatiseerd?",
  included: [
    "Offerte- en opdrachtverwerking — van aanvraag tot bevestiging",
    "Klant- en leverancierscommunicatie via e-mail en berichten",
    "Factuurverwerking, herinneringen en betalingsbeheer",
    "Rapportages en dashboards met automatische data-aggregatie",
    "Voorraadbeheer en inkoopprocessen",
    "Onboarding van nieuwe medewerkers of klanten"
  ],
  whoForTitle: "Voor welke organisaties is automatisering geschikt?",
  whoFor: [
    { title: "MKB-bedrijven met repetitieve processen", text: "Bedrijven die steeds dezelfde stappen herhalen en dit efficiënter willen organiseren zonder extra mensen." },
    { title: "Groeiende organisaties", text: "Bedrijven die opschalen maar niet lineair meer personeel willen aannemen voor administratieve taken." },
    { title: "E-commerce en webshops", text: "Online retailers die orders, voorraden, verzendingen en klantenservice willen automatiseren." },
    { title: "Dienstverlenende bedrijven", text: "Bureaus en servicebedrijven die hun project- en klantworkflow willen stroomlijnen voor meer capaciteit." }
  ],
  processTitle: "Hoe pakken wij automatisering aan?",
  process: [
    { title: "Procesanalyse", text: "We brengen uw huidige werkprocessen in kaart, identificeren knelpunten en ontwerpen de gewenste workflow." },
    { title: "Bouwen en integreren", text: "We automatiseren uw processen en koppelen alle relevante systemen — van CRM tot boekhouding." },
    { title: "Testen en opschalen", text: "We testen alles grondig, leveren op en schalen de automatisering mee als uw bedrijf groeit." }
  ],
  ctaTitle: "Klaar om tijd te besparen en sneller te groeien?",
  ctaText: "Vraag een gratis analyse aan en ontdek welke processen in uw bedrijf geautomatiseerd kunnen worden. Direct concreet, geen verplichtingen.",
  ctaButton: "Ontdek automatisering"
};

const SeoAutomatisering = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Bedrijfsprocessen automatiseren | ZentrixDigital"
    metaDesc="Bedrijfsprocessen automatiseren voor meer efficiëntie en minder fouten. ZentrixDigital bouwt workflow- en procesautomatisering voor het MKB. Gratis analyse."
    canonical="https://www.zentrixdigital.eu/bedrijfsprocessen-automatiseren"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Ontdek automatisering"
    langToggle={{ label: "English version", href: "/en/business-automation" }}
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "CRM systeem laten maken", href: "/crm-systeem-laten-maken" },
      { label: "Boekingssysteem laten maken", href: "/boekingssysteem-laten-maken" },
      { label: "Website laten maken voor bedrijven", href: "/website-laten-maken-bedrijven" },
      { label: "English: Business Automation", href: "/en/business-automation" }
    ]}
  />
);

export default SeoAutomatisering;
