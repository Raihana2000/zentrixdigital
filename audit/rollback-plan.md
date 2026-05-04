# Rollback Plan

## Rollback basis
- **Checkpoint/commit**: `5eb734416f2f09a862b700ee579e8e02b32e5ada`
  (laatste commit vóór deze feature: "Update English text to sound more natural for small businesses")

## Bestanden met het hoogste risico
| Bestand | Risico | Rollback actie |
|---|---|---|
| `ServiceDetailPage.tsx` | MEDIUM — LeadForm zichtbaar op alle service pages | Revert file |
| `contact.tsx` | LOW — form submission logic | Revert file |
| `api-server/routes/contact.ts` | LOW — nieuw endpoint | Delete file + revert routes/index.ts |
| `SEOHead.tsx` | LOW — hreflang change | Revert file |

## Exacte rollback stappen (bij nood)

### Optie A — Volledige rollback via Replit checkpoint
1. Open Replit checkpoint history
2. Selecteer commit `5eb734416f2f09a862b700ee579e8e02b32e5ada`
3. Herstel naar dit checkpoint

### Optie B — Selectieve rollback per bestand
```bash
# Verwijder nieuwe bestanden
rm artifacts/zentrix-solutions/src/vite-env.d.ts
rm artifacts/zentrix-solutions/src/components/LeadForm.tsx
rm artifacts/api-server/src/routes/contact.ts

# Revert gewijzigde bestanden naar hun vorige staat via git
git checkout 5eb734416f2f09a862b700ee579e8e02b32e5ada -- \
  artifacts/zentrix-solutions/src/components/WhatsAppButton.tsx \
  artifacts/zentrix-solutions/src/components/SEOHead.tsx \
  artifacts/zentrix-solutions/src/components/ServiceDetailPage.tsx \
  artifacts/zentrix-solutions/src/pages/contact.tsx \
  artifacts/api-server/src/routes/index.ts \
  artifacts/api-server/package.json

# Reinstall without nodemailer
pnpm install
```

## Wat NIET geriskeerd is (geen rollback nodig voor)
- Routing (`App.tsx`) — niet aangeraakt
- Translations (`nl.ts`, `en.ts`) — niet aangeraakt
- `Navbar.tsx`, `Footer.tsx` — niet aangeraakt
- `sitemap.xml`, `robots.txt` — niet aangeraakt
- Alle bestaande SEO page files — niet aangeraakt
