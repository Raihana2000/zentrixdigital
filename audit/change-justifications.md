# Change Justifications

## Structural changes that required deviation from "no-touch" defaults

### 1. `ServiceDetailPage.tsx` — Adding a new `<section>` block
**What changed**: A new section containing `<LeadForm>` is inserted above the final CTA.
**Why strictly necessary**: The feature scope explicitly requires a compact contactformulier on service pages. The only existing conversion path is a link to `/contact`. An inline form eliminates the extra navigation step, which is the core of the lead flow upgrade.
**Alternatives rejected**:
- *Modify existing CTA section*: Too invasive; changes the existing visual balance.
- *Add as modal*: Requires JavaScript state management across 20+ page instances; higher complexity.
- *Separate route*: Contradicts "no new routing" constraint.

### 2. `contact.tsx` — Adding `name` attributes to inputs
**What changed**: `name="name"`, `name="email"`, `name="phone"`, `name="message"` added to 4 inputs.
**Why strictly necessary**: `FormData` requires `name` attributes to capture values. Without this, the real fetch submission sends empty fields.
**Alternatives rejected**:
- *Controlled state (useState per field)*: More invasive; more lines; changes component structure.
- *refs*: Same invasiveness as controlled state without the benefit.

### 3. `SEOHead.tsx` — hreflang fix (optional props)
**What changed**: `hreflangNl` and `hreflangEn` optional props added; `setOrCreateHreflang` now uses them when provided.
**Why strictly necessary**: Current hreflang tags set both `nl` and `en` to the same canonical URL. This is an SEO error — Google ignores or penalises incorrect hreflang pairs. The feature spec includes "betere metadata voor servicepagina's".
**Alternatives rejected**:
- *Pass hreflang via canonical only*: Not possible since canonical is a single URL.
- *Hardcode in each page file*: Would require touching 20+ page files. More invasive.

### 4. `nodemailer` dependency in api-server
**What changed**: `nodemailer@^6.9.9` added to `dependencies`; `@types/nodemailer@^6.4.17` to `devDependencies`.
**Why strictly necessary**: The SECRETS_LIST includes SMTP_HOST/SMTP_USER/SMTP_PASS, implying SMTP is the intended mail transport. nodemailer is the de-facto standard Node.js SMTP library.
**Alternatives rejected**:
- *fetch to external mail API*: Would require an additional API key secret not in SECRETS_LIST.
- *Node built-in net module*: No SMTP support without implementing the protocol manually.
