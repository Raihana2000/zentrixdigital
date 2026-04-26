import React, { useEffect, useState, useCallback } from 'react';
import { X, Shield, BarChart3, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { getCookieConsent, saveCookieConsent } from '@/lib/cookieConsent';

const TEXT = {
  nl: {
    bannerText: 'Wij gebruiken cookies om onze website goed te laten functioneren en om inzicht te krijgen in het gebruik. Kies jouw voorkeur.',
    acceptAll: 'Alles accepteren',
    reject: 'Weigeren',
    settings: 'Instellingen',
    modalTitle: 'Cookie-instellingen',
    modalSubtitle: 'Kies welke cookies je wilt toestaan. Noodzakelijke cookies kunnen niet worden uitgeschakeld.',
    necessary: 'Noodzakelijk',
    necessaryDesc: 'Essentieel voor het functioneren van de website. Altijd ingeschakeld.',
    analytics: 'Analytisch',
    analyticsDesc: 'Helpt ons begrijpen hoe bezoekers de website gebruiken, volledig anoniem.',
    alwaysOn: 'Altijd aan',
    save: 'Voorkeuren opslaan',
    privacyLabel: 'Privacybeleid',
    cookieLabel: 'Cookiebeleid',
    privacyHref: '/privacy',
    cookieHref: '/cookies',
  },
  en: {
    bannerText: 'We use cookies to ensure our website works properly and to understand how it is used. Choose your preference.',
    acceptAll: 'Accept all',
    reject: 'Reject',
    settings: 'Settings',
    modalTitle: 'Cookie settings',
    modalSubtitle: 'Choose which cookies you want to allow. Necessary cookies cannot be disabled.',
    necessary: 'Necessary',
    necessaryDesc: 'Essential for the website to function properly. Always enabled.',
    analytics: 'Analytics',
    analyticsDesc: 'Helps us understand how visitors use the website, fully anonymised.',
    alwaysOn: 'Always on',
    save: 'Save preferences',
    privacyLabel: 'Privacy policy',
    cookieLabel: 'Cookie policy',
    privacyHref: '/en/privacy',
    cookieHref: '/en/cookies',
  },
};

const CookieBanner: React.FC = () => {
  const { language } = useTranslation();
  const c = language === 'nl' ? TEXT.nl : TEXT.en;

  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const existing = getCookieConsent();
    if (existing !== null) return;
    const id = setTimeout(() => setBannerVisible(true), 350);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const handler = () => {
      const existing = getCookieConsent();
      setAnalyticsEnabled(existing ? existing.analytics : false);
      setBannerVisible(false);
      setModalVisible(true);
    };
    window.addEventListener('zentrix-open-cookie-settings', handler);
    return () => window.removeEventListener('zentrix-open-cookie-settings', handler);
  }, []);

  const acceptAll = useCallback(() => {
    saveCookieConsent(true);
    setBannerVisible(false);
  }, []);

  const rejectAll = useCallback(() => {
    saveCookieConsent(false);
    setBannerVisible(false);
  }, []);

  const openSettings = useCallback(() => {
    const existing = getCookieConsent();
    setAnalyticsEnabled(existing ? existing.analytics : false);
    setBannerVisible(false);
    setModalVisible(true);
  }, []);

  const savePreferences = useCallback(() => {
    saveCookieConsent(analyticsEnabled);
    setModalVisible(false);
  }, [analyticsEnabled]);

  const closeModal = useCallback(() => {
    setModalVisible(false);
    if (getCookieConsent() === null) setBannerVisible(true);
  }, []);

  if (!bannerVisible && !modalVisible) return null;

  return (
    <>
      {bannerVisible && (
        <div
          data-testid="cookie-banner"
          role="dialog"
          aria-label={c.modalTitle}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9990,
            padding: '0 16px 20px',
          }}
        >
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            borderRadius: '18px',
            border: '1px solid rgba(59,130,246,0.38)',
            background: '#0a0f1e',
            boxShadow: '0 -2px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.06)',
            padding: '22px 20px 20px',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', lineHeight: '1.6', marginBottom: '10px' }}>
              {c.bannerText}
            </p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '18px' }}>
              <Link href={c.privacyHref} style={{ color: 'rgba(96,165,250,0.75)', fontSize: '12px', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                {c.privacyLabel}
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '12px' }}>·</span>
              <Link href={c.cookieHref} style={{ color: 'rgba(96,165,250,0.75)', fontSize: '12px', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                {c.cookieLabel}
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={openSettings}
                data-testid="cookie-settings-btn"
                style={{ padding: '11px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.70)', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', minHeight: '44px', WebkitTapHighlightColor: 'transparent' }}
              >
                {c.settings}
              </button>
              <button
                onClick={rejectAll}
                data-testid="cookie-reject-btn"
                style={{ padding: '11px 18px', borderRadius: '999px', fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.70)', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', minHeight: '44px', WebkitTapHighlightColor: 'transparent' }}
              >
                {c.reject}
              </button>
              <button
                onClick={acceptAll}
                data-testid="cookie-accept-btn"
                style={{ padding: '11px 22px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg,#2563eb,#3b82f6)', border: 'none', boxShadow: '0 0 18px rgba(37,99,235,0.40)', cursor: 'pointer', minHeight: '44px', WebkitTapHighlightColor: 'transparent' }}
              >
                {c.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}

      {modalVisible && (
        <div
          data-testid="cookie-modal"
          role="dialog"
          aria-modal="true"
          aria-label={c.modalTitle}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9995,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '16px',
            background: 'rgba(0,0,0,0.74)',
          }}
        >
          <div style={{
            width: '100%',
            maxWidth: '440px',
            borderRadius: '18px',
            border: '1px solid rgba(59,130,246,0.32)',
            background: '#0d1120',
            boxShadow: '0 20px 80px rgba(0,0,0,0.7)',
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 16px', borderBottom: '1px solid rgba(59,130,246,0.10)' }}>
              <h2 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>{c.modalTitle}</h2>
              <button onClick={closeModal} aria-label="Sluiten" style={{ width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '12px', lineHeight: '1.6', margin: 0 }}>{c.modalSubtitle}</p>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <Shield size={18} style={{ color: 'rgba(96,165,250,0.8)', flexShrink: 0, marginTop: '1px' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#fff', fontSize: '13px', fontWeight: 600, margin: '0 0 3px' }}>{c.necessary}</p>
                  <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '11px', lineHeight: '1.55', margin: 0 }}>{c.necessaryDesc}</p>
                </div>
                <span style={{ color: 'rgba(96,165,250,0.65)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0, marginTop: '2px' }}>{c.alwaysOn}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <BarChart3 size={18} style={{ color: 'rgba(96,165,250,0.8)', flexShrink: 0, marginTop: '1px' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#fff', fontSize: '13px', fontWeight: 600, margin: '0 0 3px' }}>{c.analytics}</p>
                  <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '11px', lineHeight: '1.55', margin: 0 }}>{c.analyticsDesc}</p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsEnabled}
                  data-testid="analytics-toggle"
                  onClick={() => setAnalyticsEnabled(v => !v)}
                  style={{
                    flexShrink: 0,
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '40px',
                    height: '22px',
                    borderRadius: '999px',
                    background: analyticsEnabled ? '#2563eb' : 'rgba(255,255,255,0.12)',
                    padding: '0 2px',
                    transition: 'background 0.2s',
                    boxShadow: analyticsEnabled ? '0 0 10px rgba(37,99,235,0.4)' : 'none',
                  }}>
                    <span style={{
                      display: 'block',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#fff',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
                      transform: analyticsEnabled ? 'translateX(18px)' : 'translateX(0)',
                      transition: 'transform 0.2s',
                    }} />
                  </span>
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px 20px', borderTop: '1px solid rgba(59,130,246,0.10)', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Link href={c.privacyHref} onClick={closeModal} style={{ color: 'rgba(96,165,250,0.6)', fontSize: '11px', textDecoration: 'underline', textUnderlineOffset: '2px' }}>{c.privacyLabel}</Link>
                <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '11px' }}>·</span>
                <Link href={c.cookieHref} onClick={closeModal} style={{ color: 'rgba(96,165,250,0.6)', fontSize: '11px', textDecoration: 'underline', textUnderlineOffset: '2px' }}>{c.cookieLabel}</Link>
              </div>
              <button
                onClick={savePreferences}
                data-testid="cookie-save-btn"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '11px 22px', borderRadius: '999px', fontSize: '13px', fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg,#2563eb,#3b82f6)', border: 'none', boxShadow: '0 0 14px rgba(37,99,235,0.35)', cursor: 'pointer', minHeight: '44px', WebkitTapHighlightColor: 'transparent' }}
              >
                {c.save}
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
