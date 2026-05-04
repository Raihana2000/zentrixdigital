# Change Plan — Minimal Diff Strategy

## Objective
Add a working inline lead form + WhatsApp env var + hreflang fix to all service pages, without touching routing, i18n structure, design tokens, header/footer, or existing slugs.

## Changes

### 1. `vite-env.d.ts` (NEW — 10 lines)
**Goal**: TypeScript types for two new `VITE_*` env vars.
**Files**: `artifacts/zentrix-solutions/src/vite-env.d.ts`
**Why minimal**: Without this, `import.meta.env.VITE_*` causes TS errors. No alternative.
**Impact**: None on styling/routing/i18n.

### 2. `WhatsAppButton.tsx` (MODIFY — 2 lines changed)
**Goal**: Use `VITE_WHATSAPP_NUMBER` env var; fall back to current hardcoded value.
**Files**: `artifacts/zentrix-solutions/src/components/WhatsAppButton.tsx`
**Why minimal**: One const line changes. Current hardcoded value becomes the fallback — zero UX change if env var is not set.
**Impact**: None on styling/routing/i18n.

### 3. `SEOHead.tsx` (MODIFY — +8 lines)
**Goal**: Fix hreflang: when NL and EN pages exist, each should point to its own canonical, not both to the same URL.
**Files**: `artifacts/zentrix-solutions/src/components/SEOHead.tsx`
**Why minimal**: Two optional props (`hreflangNl`, `hreflangEn`) added with `canonical` as fallback — existing callers break nothing.
**Why structurally necessary**: Google Search Console flags duplicate hreflang. Both nl/en currently pointing to the same URL is an SEO error.
**Impact**: None on styling/routing/i18n. Existing pages without langToggle behaviour unchanged.

### 4. `LeadForm.tsx` (NEW — ~80 lines)
**Goal**: Compact inline form for service pages. Reuses existing CSS utility classes (`.premium-input`, `.premium-textarea`, `.premium-label`, `.pc`). POSTs to `VITE_CONTACT_FORM_ENDPOINT ?? '/api/contact'`. Inline success/error state (no toast).
**Files**: `artifacts/zentrix-solutions/src/components/LeadForm.tsx`
**Why minimal**: New file — zero risk to existing components. Reuses all existing styles, no new CSS.
**Impact**: None on routing/i18n. Reuses `t.contact.form.*` keys.

### 5. `ServiceDetailPage.tsx` (MODIFY — +20 lines)
**Goal**: (a) Import + embed `<LeadForm>` as a new section above the final CTA block. (b) Compute hreflang URLs from `canonical` + `langToggle` and pass to `<SEOHead>`.
**Files**: `artifacts/zentrix-solutions/src/components/ServiceDetailPage.tsx`
**Why minimal**: LeadForm added as a standalone `<section>` — does not restructure any existing sections. The hreflang computation is 4 lines inside the component body.
**Impact**: Adds one visual section to all ~20 service pages. Styling consistent with existing aesthetic.

### 6. `contact.tsx` (MODIFY — ~15 lines changed)
**Goal**: Replace mock `setTimeout` with real `fetch` to `/api/contact`. Add `name` attributes to form inputs (required for FormData).
**Files**: `artifacts/zentrix-solutions/src/pages/contact.tsx`
**Why minimal**: Only `handleSubmit` body + 4 input `name` attributes change. All UI, labels, layout untouched.
**Impact**: None on styling/routing/i18n.

### 7. `api-server/src/routes/contact.ts` (NEW — ~50 lines)
**Goal**: POST `/api/contact` — validates body, sends email via nodemailer if SMTP env vars present, returns 200. Graceful degradation: if SMTP not configured, logs warning and still returns 200 so frontend UX is never blocked.
**Files**: `artifacts/api-server/src/routes/contact.ts`
**Why minimal**: New file. Does not touch health route or app setup.
**Impact**: None on frontend routing.

### 8. `api-server/src/routes/index.ts` (MODIFY — 3 lines)
**Goal**: Register contactRouter under `/api`.
**Files**: `artifacts/api-server/src/routes/index.ts`
**Why minimal**: One import + one `router.use` line.

### 9. `api-server/package.json` (MODIFY — +2 deps)
**Goal**: Add `nodemailer` (runtime) + `@types/nodemailer` (devDep) for SMTP email dispatch.
**Why no alternative**: No alternative email package avoids SMTP. nodemailer is the de-facto standard.
**Impact**: New packages only in api-server. Frontend unaffected.

## Execution order
1. Create `vite-env.d.ts`, `LeadForm.tsx`, `contact.ts` API route  
2. Modify `WhatsAppButton.tsx`, `SEOHead.tsx`, `ServiceDetailPage.tsx`, `contact.tsx`, `routes/index.ts`, `api-server/package.json`
3. `pnpm install --frozen-lockfile=false` to add nodemailer
4. `typecheck` on both packages
5. Restart workflows, verify HTTP 200 on service pages + `/api/contact`
