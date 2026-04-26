import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Website laten maken voor bedrijven",
  intro: "Een professionele website voor bedrijven is meer dan een visitekaartje — het is uw beste verkoper. ZentrixDigital bouwt bedrijfswebsites die vertrouwen opwekken, leads genereren en meegroeien met uw organisatie.",
  benefitsTitle: "Voordelen van een professionele bedrijfswebsite",
  benefits: [
    "Betere vindbaarheid in Google — meer bezoekers, meer klanten",
    "Professionele uitstraling die aansluit bij uw marktpositie",
    "Hogere conversie — meer bezoekers worden daadwerkelijk klant",
    "Altijd bereikbaar — ook buiten kantooruren leads ontvangen",
    "Schaalbaar platform dat meegroeit met uw bedrijf",
    "Uitbreidbaar met klantportaal, boekingen en automatisering"
  ],
  includedTitle: "Wat zit er in uw bedrijfswebsite?",
  included: [
    "Maatwerk design passend bij uw huisstijl en branche",
    "Volledig responsive — geoptimaliseerd voor mobiel en desktop",
    "Heldere pagina-structuur gericht op conversie",
    "Contactpagina met formulier, telefonische en WhatsApp-koppeling",
    "SEO-ready structuur voor betere Google-vindbaarheid",
    "Snelle laadtijden en veilige technische basis"
  ],
  whoForTitle: "Voor welke bedrijven werken wij?",
  whoFor: [
    { title: "Kleine en middelgrote bedrijven", text: "Bedrijven die online serieus genomen willen worden en nieuwe klanten via internet willen aantrekken." },
    { title: "Dienstverlenende organisaties", text: "Adviesbureaus, bureaus en servicebedrijven die hun expertise professioneel willen presenteren." },
    { title: "Lokale ondernemers", text: "Winkels, horecabedrijven en lokale dienstverleners die lokaal gevonden willen worden via Google." },
    { title: "Startende bedrijven", text: "Startups en nieuwe ondernemingen die van begin af aan een professionele online aanwezigheid willen opbouwen." }
  ],
  processTitle: "Hoe werken wij?",
  process: [
    { title: "Gratis analyse", text: "We analyseren uw huidige situatie, bespreken uw doelen en stellen een passend plan op — zonder verplichtingen." },
    { title: "Design & ontwikkeling", text: "Wij ontwerpen en bouwen uw bedrijfswebsite volledig op maat, gericht op uw doelgroep en bedrijfsdoelen." },
    { title: "Live & optimaliseren", text: "Na livegang monitoren we de resultaten en optimaliseren we waar nodig voor maximale groei." }
  ],
  ctaTitle: "Meer klanten via uw bedrijfswebsite?",
  ctaText: "Vraag een gratis analyse aan en ontdek wat een professionele bedrijfswebsite voor uw onderneming kan betekenen. Direct eerlijk advies, geen verplichtingen.",
  ctaButton: "Gratis analyse aanvragen"
};

const SeoBedrijven = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Website laten maken voor bedrijven | ZentrixDigital"
    metaDesc="Laat een professionele website maken voor je bedrijf. ZentrixDigital bouwt moderne websites die vertrouwen, leads en groei ondersteunen. Gratis analyse."
    canonical="https://www.zentrixdigital.eu/website-laten-maken-bedrijven"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Gratis analyse aanvragen"
    langToggle={{ label: "English version", href: "/en/website-for-businesses" }}
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Website laten maken voor ZZP", href: "/website-laten-maken-zzp" },
      { label: "CRM systeem laten maken", href: "/crm-systeem-laten-maken" },
      { label: "Bedrijfsprocessen automatiseren", href: "/bedrijfsprocessen-automatiseren" },
      { label: "English: Website for Businesses", href: "/en/website-for-businesses" }
    ]}
  />
);

export default SeoBedrijven;
