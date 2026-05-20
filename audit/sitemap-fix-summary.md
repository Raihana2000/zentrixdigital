# Sitemap Fix Summary — reldio

## Waar staat sitemap.xml?

**Bron**: `artifacts/zentrix-solutions/public/sitemap.xml`
**Dist copy**: `artifacts/zentrix-solutions/dist/public/sitemap.xml`

De Vite-config (`artifacts/zentrix-solutions/vite.config.ts`) bevat een custom `serveStaticFilesPlugin` die `/sitemap.xml` en `/robots.txt` rechtstreeks uit `public/` serveert met de juiste content-type — zowel in dev (`configureServer`) als in preview (`configurePreviewServer`). Geen server-side generatie, geen React app-shell betrokken.

## Wat is aangepast

| Probleem | Vóór | Na |
|---|---|---|
| Trailing slashes inconsistent | Regels 1–98: trailing slash ✅, regels 100–138: geen trailing slash | Alle niet-homepage URLs: zonder trailing slash |
| Ontbrekende `<lastmod>` | `/website-voor-bedrijven` had geen `<lastmod>` | `2026-04-26` toegevoegd |
| Dubbele URL-stijl gemengd | Ongeordend, inconsistent | Netjes gegroepeerd per sectie |
| Volgorde | Willekeurig | NL kern → NL diensten → NL SEO → NL juridisch → EN SEO → EN juridisch |

**Trailing slash strategie**:
- Homepage: `https://www.reldio.eu/` — MET slash (Google-best-practice voor roots)
- Alle overige routes: ZONDER trailing slash

**Geen URL's verwijderd of toegevoegd** — alle 34 URLs waren al aanwezig, enkel genormaliseerd.

## Aantal URL's

**34 URL's totaal**

| Sectie | Aantal |
|---|---|
| NL kernpagina's (/, about, services, contact, concepts) | 5 |
| NL diensten (websites, applicaties, onderhoud, digitale-groei) | 4 |
| NL SEO-landingspagina's | 10 |
| NL juridisch (privacy, cookies, terms) | 3 |
| EN SEO-landingspagina's | 9 |
| EN juridisch | 3 |
| **Totaal** | **34** |

## robots.txt

Staat op `/robots.txt`, inhoud correct:
```
User-agent: *
Allow: /
Sitemap: https://www.reldio.eu/sitemap.xml
```
Geen wijziging nodig.

## Hoe is gecontroleerd dat er geen HTML/div/script in zit

Validatiescript: `scripts/validate-sitemap.mjs` (geen externe dependencies, pure Node.js fs + regex)

Controles die het script uitvoert:
- `<?xml` aanwezig als eerste token
- `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` aanwezig
- Geen `<html`, `<div`, `<script`, `<body`, `<head`
- Alle `<loc>` beginnen met `https://www.reldio.eu`
- Geen trailing slashes op niet-homepage URLs
- Elke `<url>` heeft een `<lastmod>`
- Alle `<lastmod>` zijn geldig ISO-datumformaat `YYYY-MM-DD`

**Uitkomst**: ✅ All checks passed — sitemap is valid. (34/34/34 url/loc/lastmod entries)

## Response headers live endpoint

```
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8
Cache-Control: public, max-age=3600
```

Geen `text/html`, geen app-shell — pure XML. ✅

## Build / verificatie uitgevoerd

```
node scripts/validate-sitemap.mjs         → ✅ All checks passed (34 URLs)
pnpm --filter @workspace/zentrix-solutions exec tsc --noEmit  → ✅ 0 errors
curl -sI http://localhost:80/sitemap.xml  → ✅ Content-Type: application/xml; charset=utf-8
curl -s http://localhost:80/sitemap.xml | head -5  → ✅ begint met <?xml
```

## Wat je daarna handmatig in Google Search Console moet doen

1. Ga naar **Google Search Console** → jouw property `https://www.reldio.eu`
2. Klik in het linkermenu op **Sitemaps**
3. Verwijder de oude sitemap-vermelding als die er al staat (klik op de drie puntjes → Verwijderen)
4. Voer in het invoerveld in: `sitemap.xml` en klik **Verzenden**
5. Google zal de sitemap ophalen — status moet binnen enkele minuten/uren op **Geslaagd** staan
6. Controleer na 1–2 dagen of de URL's als **Geïndexeerd** of **Ontdekt** worden vermeld onder **Pagina's**

> **Tip**: als Google Search Console nog steeds "Kan niet ophalen" geeft na het opnieuw indienen, gebruik dan de URL-inspectietool op `https://www.reldio.eu/sitemap.xml` om te bevestigen dat Google de live URL als XML ziet.
