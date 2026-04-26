import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "CRM systeem laten maken voor bedrijven",
  intro: "Zonder goed klantenbeheer verdwijnen leads en kansen in de chaos. ZentrixDigital bouwt op maat gemaakte CRM-systemen die uw salesproces structureren, klantrelaties versterken en uw omzet aantoonbaar verhogen.",
  benefitsTitle: "Voordelen van een maatwerk CRM systeem",
  benefits: [
    "Volledig overzicht van al uw klanten, leads en contactmomenten",
    "Meer omzet door betere opvolging van offertes en kansen",
    "Efficiënter werken — minder handmatige taken, meer focus op klanten",
    "Teamoverzicht: iedereen weet wat er speelt bij elke klant",
    "Automatische herinneringen en follow-up voor openstaande deals",
    "Schaalbaar systeem dat meegroeit met uw organisatie"
  ],
  includedTitle: "Wat bevat uw maatwerk CRM?",
  included: [
    "Klantendatabase op maat van uw branche en werkproces",
    "Lead- en kansenbeheer met statusoverzicht en prognose",
    "Contactgeschiedenis en notities per klant of project",
    "Offertemodule met automatische opvolgherinnering",
    "Dashboard met KPI's en rapportages op maat",
    "Gebruikersrollen en toegangsbeheer voor uw team"
  ],
  whoForTitle: "Voor welke bedrijven is een maatwerk CRM geschikt?",
  whoFor: [
    { title: "Salesdiensten en adviesbureaus", text: "Bedrijven met een actief salesproces die leads en klanten professioneel willen opvolgen en beheren." },
    { title: "Dienstverlenende bedrijven", text: "Organisaties met vaste klantrelaties die projecten, contracten en contactmomenten centraal willen beheren." },
    { title: "Groeiende MKB-bedrijven", text: "Bedrijven die Excel-overzichten willen vervangen door een gestructureerd systeem dat schaalt met de groei." },
    { title: "Teams met meerdere medewerkers", text: "Organisaties waarbij transparantie en samenwerking rond klantbeheer essentieel zijn voor succes." }
  ],
  processTitle: "Hoe verloopt de ontwikkeling?",
  process: [
    { title: "Analyse en ontwerp", text: "We brengen uw huidige werkproces in kaart, bepalen de vereisten en ontwerpen de structuur van uw CRM." },
    { title: "Bouw en integratie", text: "Wij bouwen uw maatwerk CRM en koppelen het aan uw bestaande tools zoals e-mail, agenda of boekhouding." },
    { title: "Training en oplevering", text: "We leveren op, trainen uw team en staan klaar voor aanpassingen en doorontwikkeling." }
  ],
  ctaTitle: "Meer grip op uw klanten en meer omzet?",
  ctaText: "Vraag een gratis demo aan en ontdek hoe een maatwerk CRM systeem uw bedrijf helpt groeien. Geen verplichtingen, wel concreet advies.",
  ctaButton: "Vraag een demo aan"
};

const SeoCRM = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="CRM systeem laten maken voor bedrijven | ZentrixDigital"
    metaDesc="CRM systeem laten maken op maat. Meer overzicht, meer omzet en efficiënter werken. ZentrixDigital bouwt klantbeheersystemen voor het MKB."
    canonical="https://www.zentrixdigital.eu/crm-systeem-laten-maken"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Vraag een demo aan"
    langToggle={{ label: "English version", href: "/en/crm-system-development" }}
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Boekingssysteem laten maken", href: "/boekingssysteem-laten-maken" },
      { label: "Bedrijfsprocessen automatiseren", href: "/bedrijfsprocessen-automatiseren" },
      { label: "Website laten maken voor bedrijven", href: "/website-laten-maken-bedrijven" },
      { label: "English: CRM System Development", href: "/en/crm-system-development" }
    ]}
  />
);

export default SeoCRM;
