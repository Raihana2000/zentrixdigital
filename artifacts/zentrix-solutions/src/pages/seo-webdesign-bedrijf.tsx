import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Professioneel webdesign bedrijf voor bedrijven die willen groeien",
  intro: "ZentrixDigital is het webdesign bedrijf dat verder denkt dan een mooie website. Wij combineren strategisch design, technische kwaliteit en conversie-optimalisatie — zodat uw website niet alleen indruk maakt, maar ook daadwerkelijk klanten en omzet oplevert.",
  benefitsTitle: "Waarom bedrijven kiezen voor ons webdesign",
  benefits: [
    "Design dat is gericht op conversie — niet alleen op esthetiek",
    "Elke keuze in uw website is doelgericht: kleur, tekst, structuur en navigatie",
    "SEO-geoptimaliseerd van de basis tot de details, voor hogere Google-posities",
    "Snelle laadtijden op desktop én mobiel — cruciaal voor ranking en conversie",
    "Volledig mobielvriendelijk — uw website werkt perfect op elk apparaat",
    "Professionele uitstraling die vertrouwen opbouwt bij nieuwe bezoekers"
  ],
  includedTitle: "Wat maakt ons webdesign anders?",
  included: [
    "Maatwerk design op basis van uw merk, doelgroep en concurrentieanalyse",
    "Duidelijke call-to-actions op elke pagina — zodat bezoekers actie ondernemen",
    "Geoptimaliseerde paginastructuur voor Google en gebruiksvriendelijkheid",
    "Geïntegreerde contactmogelijkheden: formulier, WhatsApp en telefoonknop",
    "A/B-testklaar opgebouwd voor toekomstige conversie-optimalisatie",
    "Uitbreidbaar met boekingssystemen, CRM-koppelingen en klantportalen"
  ],
  extrasTitle: "Waarom goed webdesign uw bedrijf laat groeien",
  extras: [
    "Eerste indruk: bezoekers oordelen binnen 0,05 seconden over uw website",
    "Vertrouwen: een professioneel design verhoogt direct de conversie",
    "Mobiel gebruik: 70%+ van uw bezoekers gebruikt een smartphone",
    "SEO: technisch correcte structuur verbetert uw Google-positie significant",
    "Snelheid: elke seconde vertraging kost u conversies en Google-ranking",
    "Duidelijkheid: bezoekers die begrijpen wat u doet, worden eerder klant"
  ],
  whoForTitle: "Voor welke bedrijven werken wij?",
  whoFor: [
    { title: "Groeiende MKB-bedrijven", text: "Bedrijven die de stap willen maken van een basiswebsite naar een professioneel platform dat actief bijdraagt aan groei en nieuwe klanten." },
    { title: "Dienstverlenende bedrijven", text: "Consultants, bureaus, coaches en adviseurs die hun expertise professioneel willen positioneren en meer hoogwaardige klanten willen aantrekken." },
    { title: "E-commerce en webshops", text: "Ondernemers die een conversiegericht online verkoopplatform willen bouwen dat bezoekers omzet in betalende klanten." },
    { title: "Bedrijven die rebranden", text: "Gevestigde bedrijven die hun bestaande website willen moderniseren en opnieuw aansluiting willen vinden met hun doelgroep en merkidentiteit." }
  ],
  processTitle: "Ons webdesign proces",
  process: [
    { title: "Strategie en analyse", text: "We beginnen met een gratis gesprek over uw doelen, uw doelgroep en uw concurrenten. Daarna leggen wij de basis voor een conversiegerichte website-strategie." },
    { title: "Design en ontwikkeling", text: "Uw website wordt ontworpen en gebouwd met aandacht voor elke detail — van typografie en kleur tot navigatie, laadtijd en mobiele gebruikservaring." },
    { title: "Lancering en groei", text: "Na lancering helpen wij u met verdere optimalisatie, betere Google-posities en uitbreidingen die uw bedrijfsgroei ondersteunen." }
  ],
  ctaTitle: "Wil uw bedrijf een website die écht werkt?",
  ctaText: "Neem contact op voor een gratis strategiegesprek. Wij analyseren uw huidige situatie, uw doelgroep en uw concurrenten — en presenteren een concreet plan voor uw nieuwe website. Geen verplichtingen.",
  ctaButton: "Gratis strategiegesprek aanvragen"
};

const SeoWebdesignBedrijf = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Webdesign bedrijf Nederland | ZentrixDigital"
    metaDesc="Professioneel webdesign bedrijf voor bedrijven die willen groeien. Moderne websites die klanten opleveren. Conversiegericht, SEO-geoptimaliseerd. Vanaf €700."
    canonical="https://www.zentrixdigital.eu/webdesign-bedrijf"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Gratis strategiegesprek aanvragen"
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Website laten maken Amsterdam", href: "/website-laten-maken-amsterdam" },
      { label: "Wat kost een website laten maken?", href: "/website-kosten" },
      { label: "Website laten maken voor bedrijven", href: "/website-voor-bedrijven" },
      { label: "Professionele website laten maken", href: "/websites" }
    ]}
  />
);

export default SeoWebdesignBedrijf;
