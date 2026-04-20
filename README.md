# ZentrixDigital — Website

Premium, meertalige website voor **ZentrixDigital**, een digitaal bureau uit Amsterdam dat websites, webapplicaties en maatwerk digitale oplossingen bouwt voor bedrijven in Nederland en Europa.

---

## Technologie

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **Framer Motion** (animaties)
- **Wouter** (routing)
- **shadcn/ui** (UI-componenten)
- **pnpm** (package manager / monorepo)

---

## Functies

- Volledig tweetalig: Nederlands (standaard) + Engels
- Dark theme met electric-blue accenten
- SEO-geoptimaliseerd: meta-tags, Open Graph, JSON-LD structured data
- Conversiegericht: CTA-secties, WhatsApp-integratie, contactformulier
- Responsief: desktop, tablet en mobiel
- Dynamisch case-beheersysteem via `src/data/cases.ts`

---

## Projectstructuur

```
artifacts/zentrix-solutions/
├── src/
│   ├── components/       # Navbar, Footer, WhatsAppButton, UI-componenten
│   ├── context/          # TranslationContext (taalwisseling)
│   ├── data/
│   │   └── cases.ts      # ← Cases/portfolio hier toevoegen
│   ├── pages/            # home, about, services, contact
│   └── translations/
│       ├── nl.ts          # Nederlandse teksten
│       └── en.ts          # Engelse teksten
├── index.html
└── vite.config.ts
```

---

## Lokaal starten

```bash
# Vereist: Node.js 18+ en pnpm
npm install -g pnpm

pnpm install
pnpm --filter @workspace/zentrix-solutions run dev
```

De site draait standaard op `http://localhost:5173`.

---

## Nieuwe case toevoegen

Bewerk uitsluitend `artifacts/zentrix-solutions/src/data/cases.ts`:

```ts
{
  title: "Klant: Bakkerij de Wilt",
  description: "Nieuwe website zorgde voor 40% meer contactaanvragen.",
  status: "Live",
  icon: "rocket",   // "briefcase" | "chart" | "rocket" | "star"
  visible: true,
}
```

---

## Contact

- **E-mail:** info@zentrixdigital.eu
- **Telefoon:** 06-83284995
- **Locatie:** Amsterdam, Nederland
