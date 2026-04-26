# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## ZentrixDigital Website (artifacts/zentrix-solutions)

React + Vite + Wouter + Tailwind + Framer Motion, bilingual NL/EN.

### SEO Landing Pages (added 2026-04-26)
10 new pages using the `ServiceDetailPage` component:
- `/website-laten-maken-zzp` — NL ZZP page
- `/en/website-for-freelancers` — EN freelancers
- `/website-laten-maken-bedrijven` — NL businesses
- `/en/website-for-businesses` — EN businesses
- `/crm-systeem-laten-maken` — NL CRM
- `/en/crm-system-development` — EN CRM
- `/boekingssysteem-laten-maken` — NL booking
- `/en/booking-system-development` — EN booking
- `/bedrijfsprocessen-automatiseren` — NL automation
- `/en/business-automation` — EN automation

Each page: language toggle, related links section, SEO meta, sitemap entry.
`ServiceDetailPage` extended with `relatedLinks` and `langToggle` props.
Footer: added "Oplossingen" (NL) and "Solutions" (EN) link columns.
Homepage + Services page: "Oplossingen" section added with internal links.
