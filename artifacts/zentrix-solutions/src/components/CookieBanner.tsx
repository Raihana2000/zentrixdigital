import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/hooks/useTranslation';

const KEY = 'zentrix_cookie_consent';

interface ConsentObject {
  necessary: true;
  analytics: boolean;
  timestamp: number;
  version: 1;
}

function hasValidConsent(): boolean {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;
    const parsed: ConsentObject = JSON.parse(raw);
    return (
      parsed !== null &&
      parsed.version === 1 &&
      parsed.necessary === true &&
      typeof parsed.analytics === 'boolean'
    );
  } catch {
    return false;
  }
}

function saveConsent(analytics: boolean): void {
  try {
    const obj: ConsentObject = {
      necessary: true,
      analytics,
      timestamp: Date.now(),
      version: 1,
    };
    localStorage.setItem(KEY, JSON.stringify(obj));
  } catch {
    // ignore storage errors
  }
}

if (typeof window !== 'undefined') {
  (window as any).resetCookieConsent = () => {
    localStorage.removeItem(KEY);
    window.location.reload();
  };
}

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

const CookieBanner: React.FC = () => {
  const { language } = useTranslation();
  const c = language === 'nl' ? T.nl : T.en;

  const [visible, setVisible] = useState<boolean>(() => !hasValidConsent());

  useEffect(() => {
    const handler = () => {
      localStorage.removeItem(KEY);
      setVisible(true);
    };
    window.addEventListener('zentrix-open-cookie-settings', handler);
    return () => window.removeEventListener('zentrix-open-cookie-settings', handler);
  }, []);

  const accept = useCallback(() => {
    saveConsent(true);
    setVisible(false);
  }, []);

  const reject = useCallback(() => {
    saveConsent(false);
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
