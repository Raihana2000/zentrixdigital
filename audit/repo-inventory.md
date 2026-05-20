# Repo Inventory — reldio Lead Upgrade

## Stack
- **Framework**: React 18 + Vite 6 + Wouter 3 (routing)
- **Styling**: Tailwind CSS v4 + custom CSS utilities (`.pc`, `.premium-input`, `.premium-textarea`, `.premium-label`)
- **Animation**: Framer Motion
- **Language**: TypeScript strict
- **Package manager**: pnpm workspace monorepo
- **i18n**: Custom `TranslationContext` → `nl.ts` / `en.ts`, `useTranslation()` hook
- **SEO**: `SEOHead` component (imperative DOM mutation via `useEffect`)
- **API server**: Express 5 on `/api/*`, pino logging, currently only `/api/healthz`
- **Build scripts**: `dev`, `build`, `serve`, `typecheck` (no lint, no test runner)

## Workspace packages
| Package | Path | Role |
|---|---|---|
| `@workspace/zentrix-solutions` | `artifacts/zentrix-solutions/` | Frontend SPA (Vite/React) |
| `@workspace/api-server` | `artifacts/api-server/` | Express API server |
| `@workspace/mockup-sandbox` | `artifacts/mockup-sandbox/` | Canvas preview server (unrelated) |

## File inventory

| Path/pattern | Role | Relevance | Change risk |
|---|---|---|---|
| `src/App.tsx` | All Wouter routes | LOW — no route changes needed | HIGH — protected |
| `src/components/Navbar.tsx` | Global nav + lang switcher | NONE | HIGH — protected |
| `src/components/Footer.tsx` | Global footer + popular links | NONE | HIGH — protected |
| `src/components/ServiceDetailPage.tsx` | Shared SEO page shell | HIGH — add LeadForm + hreflang | MEDIUM |
| `src/components/SEOHead.tsx` | Meta tag + hreflang management | HIGH — fix hreflang pairs | LOW |
| `src/components/WhatsAppButton.tsx` | Floating WhatsApp button | HIGH — use env var | LOW |
| `src/pages/contact.tsx` | Full contact page + form | MEDIUM — real submit | LOW |
| `src/translations/nl.ts` | NL translations | READ-ONLY — reuse existing keys | HIGH — protected |
| `src/translations/en.ts` | EN translations | READ-ONLY — reuse existing keys | HIGH — protected |
| `src/index.css` | Global + utility CSS | READ-ONLY — reuse classes | HIGH — protected |
| `src/context/TranslationContext.tsx` | i18n provider | NONE | HIGH — protected |
| `public/sitemap.xml` | Sitemap | NONE | MEDIUM |
| `public/robots.txt` | Robots | NONE | LOW |
| `api-server/src/routes/index.ts` | Route registry | HIGH — register contact | LOW |
| `api-server/src/routes/health.ts` | Health check | READ-ONLY reference | NONE |
| `api-server/src/app.ts` | Express app setup | NONE — no changes needed | MEDIUM |
| `api-server/package.json` | API server deps | HIGH — add nodemailer | LOW |
| `vite.config.ts` | Vite config | NONE | HIGH — protected |
| `pnpm-workspace.yaml` | Catalog + workspace | NONE | HIGH — protected |

## SEO setup
- `SEOHead.tsx` sets title, description, canonical, og:*, twitter:*, hreflang (currently both nl+en point to canonical — **bug**)
- `public/sitemap.xml` — manually maintained
- `public/robots.txt` — standard allow-all

## i18n setup
- Language stored in `TranslationContext` (`nl` | `en`)
- All text via `useTranslation()` → typed `t.*` object
- `contact.form.*` keys already exist for form field labels/placeholders
- NO new translation keys needed for this feature
