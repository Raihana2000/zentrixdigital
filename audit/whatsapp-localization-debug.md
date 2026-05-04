# WhatsApp Localization Debug

## Inventarisatie — alle WhatsApp-plaatsen

| Locatie | Type | Was hardcoded NL? | Status |
|---|---|---|---|
| `src/components/WhatsAppButton.tsx` | Floating knop (globaal) | ✅ ja (module-level const) | ✅ gefixd |
| `src/pages/contact.tsx` | WhatsApp CTA op /contact | ✅ ja (href hardcoded) | ✅ gefixd |
| `src/lib/whatsapp.ts` | Centrale helper | n.v.t. (nieuw) | ✅ correct |
| `src/components/Footer.tsx` | Geen WhatsApp-link | n.v.t. | n.v.t. |
| `src/components/Navbar.tsx` | Geen WhatsApp-link | n.v.t. | n.v.t. |
| `src/components/ServiceDetailPage.tsx` | Geen directe WA-link | n.v.t. | n.v.t. |
| `src/components/LeadForm.tsx` | Tekst "via WhatsApp" (label only) | n.v.t. | n.v.t. |
| SEO-pagina's (`seo-*.tsx`) | WhatsApp in bullets/content-tekst | n.v.t. | n.v.t. |

## Floating WhatsApp-knop — component path

```
App.tsx
└── TranslationProvider
    └── WouterRouter
        └── Router
            ├── Navbar
            ├── <Switch><Route> (page content)
            ├── Footer
            └── WhatsAppButton  ← floating knop, globaal
```

## Waar stond de hardcoded Nederlandse tekst?

### Vóór de fix — `WhatsAppButton.tsx` (regel 4)
```ts
// HARDCODED NL — altijd hetzelfde ongeacht taal
const WA_URL = `https://wa.me/31683284995?text=Goedendag,%20ik%20heb%20interesse...`;
```

### Vóór de fix — `contact.tsx` (regel 219)
```tsx
// HARDCODED NL + HARDCODED NUMMER
href="https://wa.me/31683284995?text=Goedendag,%20ik%20heb%20interesse..."
```

## Root cause analyse

De vorige fix (context-gebaseerd via `useTranslation`) was theoretisch correct maar had een **timing-issue**:

1. `WhatsAppButton` rendert direct bij route-change met de huidige `language` uit context
2. `ServiceDetailPage.useEffect` die `setLanguage('en')` aanroept, werkt asynchroon (na render)
3. Er bestaat een race-window: als de gebruiker de knop klikt vóórdat de effect heeft gefired, ziet hij de verkeerde taal

**Definitieve fix**: `WhatsAppButton` detecteert taal via `useLocation()` (Wouter) — synchroon, altijd correct bij render:
```tsx
const [location] = useLocation();
const { language } = useTranslation();
const effectiveLang = location.startsWith('/en') ? 'en' : language;
```

- Op `/en/*` routes → altijd `en`, geen timing-afhankelijkheid
- Op NL routes → `language` uit context (gezet door Navbar toggle)
