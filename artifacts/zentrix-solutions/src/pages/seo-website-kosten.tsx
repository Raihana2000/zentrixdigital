import React from 'react';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const data = {
  h1: "Wat kost een website laten maken in 2026?",
  intro: "De kosten voor een website laten maken variëren sterk — van een paar honderd euro voor een eenvoudige website tot tienduizenden euro's voor een complex platform. In deze pagina geven wij u een eerlijk en transparant overzicht van de prijzen, factoren en wat u kunt verwachten bij ZentrixDigital.",
  benefitsTitle: "Wat bepaalt de kosten van een website?",
  benefits: [
    "Omvang: een one-pager kost minder dan een website met 10+ pagina's en subpagina's",
    "Maatwerk versus template: maatwerk design kost meer, maar levert meer conversie op",
    "Functionaliteiten: formulieren, boekingssystemen en koppelingen verhogen de prijs",
    "SEO-optimalisatie: een SEO-klare website vraagt meer werk maar levert meer op",
    "Contentschrijven: professionele teksten kosten meer, maar verbeteren conversie sterk",
    "Onderhoud en hosting: doorlopende kosten naast de eenmalige bouwprijs"
  ],
  includedTitle: "Onze prijsoverzicht (2026)",
  included: [
    "Eenvoudige website (1–5 pagina's): vanaf €700 — ideaal voor ZZP en starters",
    "Professionele bedrijfswebsite (5–10 pagina's): vanaf €1.200 — inclusief SEO en design",
    "Website met boekingssysteem of CRM-koppeling: vanaf €2.000 — voor groeiende bedrijven",
    "Uitgebreid bedrijfsplatform (10+ pagina's + systemen): vanaf €3.500",
    "E-commerce / webshop: vanaf €2.500 — inclusief productpagina's en betaalintegratie",
    "Maatwerk applicaties en klantportalen: op aanvraag — afhankelijk van specificaties"
  ],
  extrasTitle: "Goedkope website versus professionele investering",
  extras: [
    "Een €200 Wix-website trekt zelden klanten aan — het ontbreekt aan strategie, SEO en conversie",
    "Een te dure bureau vraagt €15.000 voor iets dat ZentrixDigital bouwt voor €1.500",
    "De prijs is niet wat telt — de ROI telt: wat levert uw website op per maand?",
    "Een goede website verdient zichzelf terug binnen 1–3 maanden via extra klanten",
    "Wij werken transparant: u weet vooraf exact wat het kost en wat u krijgt",
    "Geen verborgen kosten: alle afspraken staan vast in een heldere offerte"
  ],
  whoForTitle: "Voor wie is welk budget geschikt?",
  whoFor: [
    { title: "Starter of ZZP (€700–€1.200)", text: "Een professionele website met heldere boodschap, contactmogelijkheden en basisoptimalisatie voor Google. Snel online, betaalbaar en effectief." },
    { title: "MKB-bedrijf (€1.200–€2.500)", text: "Een uitgebreidere website met meerdere diensten- en landingspagina's, SEO-optimalisatie, integraties en een sterker conversiefocus." },
    { title: "Groeiend bedrijf (€2.500–€5.000)", text: "Een complete online aanwezigheid met systemen, koppelingen, klantportalen of boekingsfunctionaliteit — gericht op schaalbaarheid en omzetgroei." },
    { title: "Maatwerk platform (€5.000+)", text: "Complexe platforms, e-commerce oplossingen, CRM-systemen en maatwerk applicaties die uw bedrijfsprocessen volledig digitaliseren en automatiseren." }
  ],
  processTitle: "Wat krijgt u bij ZentrixDigital?",
  process: [
    { title: "Transparante offerte", text: "Na een gratis gesprek ontvangt u een heldere offerte met exacte prijs, scope en opleverdatum — zonder verrassingen achteraf." },
    { title: "Maatwerk voor uw budget", text: "Wij denken mee over hoe u het meeste uit uw budget kunt halen. Soms is een slimme one-pager effectiever dan een duur platform." },
    { title: "Investering met rendement", text: "Onze websites zijn gebouwd om klanten te genereren. Wij leveren geen mooie plaatjes, maar conversiegerichte websites die uw bedrijf laten groeien." }
  ],
  ctaTitle: "Wilt u weten wat een website kost voor uw situatie?",
  ctaText: "Vraag een gratis offerte aan. Wij bespreken uw wensen, situatie en budget — en geven u een eerlijk advies en een concrete prijs. Geen verplichtingen, geen verborgen kosten.",
  ctaButton: "Gratis offerte aanvragen"
};

const SeoWebsiteKosten = () => (
  <ServiceDetailPage
    data={data}
    pageTitle="Wat kost een website laten maken? | ZentrixDigital"
    metaDesc="Wat kost een website laten maken in 2026? Eerlijk overzicht van prijzen en factoren. Vanaf €700 tot maatwerk platforms. Gratis offerte aanvragen."
    canonical="https://www.zentrixdigital.eu/website-kosten"
    backLabel="Terug naar diensten"
    servicesLabel="Bekijk alle diensten"
    contactLabel="Gratis offerte aanvragen"
    relatedTitle="Gerelateerde pagina's"
    relatedLinks={[
      { label: "Website laten maken Amsterdam", href: "/website-laten-maken-amsterdam" },
      { label: "Professioneel webdesign bedrijf", href: "/webdesign-bedrijf" },
      { label: "Website laten maken voor bedrijven", href: "/website-voor-bedrijven" },
      { label: "Website voor ZZP", href: "/website-laten-maken-zzp" }
    ]}
  />
);

export default SeoWebsiteKosten;
