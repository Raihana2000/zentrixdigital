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
 *   status      — Label boven de titel (bv. "Live", "Afgerond")
 *   icon        — Icoon: "briefcase" | "chart" | "rocket" | "star"
 *   visible     — true = tonen op de site, false = verborgen
 */
export const cases: Case[] = [];
