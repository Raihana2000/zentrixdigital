# Relevant Files — Lead Upgrade Feature

## Files to CREATE
| File | Reason |
|---|---|
| `artifacts/zentrix-solutions/src/components/LeadForm.tsx` | Compact inline contact form for service pages |
| `artifacts/zentrix-solutions/src/vite-env.d.ts` | TypeScript type declarations for VITE_* env vars |
| `artifacts/api-server/src/routes/contact.ts` | POST /api/contact endpoint with SMTP dispatch |

## Files to MODIFY
| File | Change | Risk |
|---|---|---|
| `artifacts/zentrix-solutions/src/components/WhatsAppButton.tsx` | Use `VITE_WHATSAPP_NUMBER` env var with fallback | VERY LOW |
| `artifacts/zentrix-solutions/src/components/SEOHead.tsx` | Add optional `hreflangNl`/`hreflangEn` props | LOW |
| `artifacts/zentrix-solutions/src/components/ServiceDetailPage.tsx` | Embed `<LeadForm>`, pass computed hreflang to SEOHead | LOW |
| `artifacts/zentrix-solutions/src/pages/contact.tsx` | Real fetch submission + add `name` attrs to inputs | LOW |
| `artifacts/api-server/src/routes/index.ts` | Register contactRouter | VERY LOW |
| `artifacts/api-server/package.json` | Add `nodemailer` + `@types/nodemailer` | LOW |

## Protected zones — explicitly NOT touched
| Zone | Files | Reason |
|---|---|---|
| Routing | `App.tsx`, `vite.config.ts` | No new routes needed |
| i18n structure | `TranslationContext.tsx`, `nl.ts`, `en.ts` | Reuse existing keys only |
| Global layout | `Navbar.tsx`, `Footer.tsx` | Out of feature scope |
| Design tokens | `index.css` (global vars) | Reuse existing utility classes |
| SEO canonical/sitemap | `sitemap.xml`, `robots.txt` | No new pages created |
| Package manager | `pnpm-workspace.yaml`, lockfile | pnpm stays, no catalog change |
| Existing slugs | All existing route paths | Preserved exactly |

## Risk per zone
| Zone | Risk level | Mitigation |
|---|---|---|
| `ServiceDetailPage.tsx` | MEDIUM | LeadForm added as optional section; existing layout untouched |
| `SEOHead.tsx` | LOW | New props are optional; fallback = current behaviour |
| `contact.tsx` | LOW | Only `handleSubmit` and `name` attrs changed; UI/layout untouched |
| API server | LOW | Graceful degradation if SMTP not configured |
| `WhatsAppButton.tsx` | VERY LOW | Env var with hardcoded fallback |
