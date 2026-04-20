export type CaseIcon = "briefcase" | "chart" | "rocket" | "star";

export interface Case {
  title: string;
  description: string;
  status: string;
  icon: CaseIcon;
  visible: boolean;
}

/**
 * Voeg hier nieuwe cases toe om ze zichtbaar te maken op de website.
 * Zet `visible: false` om een case tijdelijk te verbergen zonder hem te verwijderen.
 *
 * Velden:
 *   title       — Naam van het project of de klant
 *   description — Korte omschrijving van het resultaat of de aanpak
 *   status      — Label boven de titel (bv. "Live", "Binnenkort", "In opbouw")
 *   icon        — Icoon: "briefcase" | "chart" | "rocket" | "star"
 *   visible     — true = tonen op de site, false = verborgen
 */
export const cases: Case[] = [
  {
    title: "Case study volgt binnenkort",
    description: "Een toekomstig voorbeeld van hoe een website of digitaal systeem is verbeterd.",
    status: "Binnenkort",
    icon: "briefcase",
    visible: true,
  },
  {
    title: "Klantresultaten volgen",
    description: "Hier tonen we straks concrete verbeteringen in zichtbaarheid, vertrouwen of conversie.",
    status: "In opbouw",
    icon: "briefcase",
    visible: true,
  },
  {
    title: "Project in opbouw",
    description: "Nieuwe samenwerkingen en resultaten worden hier later overzichtelijk toegevoegd.",
    status: "Later beschikbaar",
    icon: "briefcase",
    visible: true,
  },
];
