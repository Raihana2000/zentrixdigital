import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';

const KEY = 'zentrix_cookie_consent';

// ── Register global reset helper ──────────────────────────────────────────────
if (typeof window !== 'undefined') {
  (window as any).resetCookieConsent = () => {
    localStorage.removeItem(KEY);
    window.location.reload();
  };
}

// ── Lazy initializer: read localStorage synchronously on first render ─────────
function getInitialVisibility(): boolean {
  try {
    return localStorage.getItem(KEY) === null;
  } catch {
    return true;
  }
}

// ── Text ─────────────────────────────────────────────────────────────────────
const T = {
  nl: {
    text: 'Wij gebruiken cookies om onze website goed te laten werken en om de gebruikerservaring te verbeteren. Je kunt cookies accepteren of weigeren.',
    accept: 'Accepteren',
    reject: 'Weigeren',
    privacyHref: '/privacy',
    privacyLabel: 'Privacybeleid',
    cookieHref: '/cookies',
    cookieLabel: 'Cookiebeleid',
  },
  en: {
    text: 'We use cookies to keep our website working properly and to improve the user experience. You can accept or reject cookies.',
    accept: 'Accept',
    reject: 'Reject',
    privacyHref: '/en/privacy',
    privacyLabel: 'Privacy policy',
    cookieHref: '/en/cookies',
    cookieLabel: 'Cookie policy',
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
const CookieBanner: React.FC = () => {
  const { language } = useTranslation();
  const c = language === 'nl' ? T.nl : T.en;

  // Synchronous lazy init — no flash, no timing issues
  const [visible, setVisible] = useState<boolean>(getInitialVisibility);

  console.log('CookieBanner mounted');
  console.log('Cookie consent value:', localStorage.getItem(KEY));

  // Footer "Cookie-instellingen" button reopens banner
  useEffect(() => {
    const handler = () => {
      localStorage.removeItem(KEY);
      setVisible(true);
    };
    window.addEventListener('zentrix-open-cookie-settings', handler);
    return () => window.removeEventListener('zentrix-open-cookie-settings', handler);
  }, []);

  const accept = useCallback(() => {
    try { localStorage.setItem(KEY, 'accepted'); } catch { /* ignore */ }
    setVisible(false);
  }, []);

  const reject = useCallback(() => {
    try { localStorage.setItem(KEY, 'rejected'); } catch { /* ignore */ }
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      data-testid="cookie-banner"
      role="dialog"
      aria-label="Cookie-instellingen"
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '16px',
        right: '16px',
        zIndex: 999999,
        pointerEvents: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          background: '#0a0f1e',
          border: '1px solid rgba(59,130,246,0.45)',
          borderRadius: '18px',
          boxShadow: '0 8px 60px rgba(0,0,0,0.75), 0 0 0 1px rgba(59,130,246,0.08)',
          padding: '22px 22px 20px',
        }}
      >
        {/* Text */}
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '14px',
            lineHeight: '1.65',
            margin: '0 0 12px',
          }}
        >
          {c.text}
        </p>

        {/* Policy links */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
          <Link
            href={c.privacyHref}
            style={{
              color: 'rgba(96,165,250,0.80)',
              fontSize: '12px',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            }}
          >
            {c.privacyLabel}
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '12px' }}>·</span>
          <Link
            href={c.cookieHref}
            style={{
              color: 'rgba(96,165,250,0.80)',
              fontSize: '12px',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            }}
          >
            {c.cookieLabel}
          </Link>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={reject}
            data-testid="cookie-reject-btn"
            style={{
              padding: '12px 22px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.05)',
              cursor: 'pointer',
              minHeight: '48px',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {c.reject}
          </button>
          <button
            onClick={accept}
            data-testid="cookie-accept-btn"
            style={{
              padding: '12px 26px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#fff',
              border: 'none',
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              boxShadow: '0 0 20px rgba(37,99,235,0.45)',
              cursor: 'pointer',
              minHeight: '48px',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
