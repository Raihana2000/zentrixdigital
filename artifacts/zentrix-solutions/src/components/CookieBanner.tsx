import React, { useEffect, useState, useCallback } from 'react';
import { X, Shield, BarChart3, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { getCookieConsent, saveCookieConsent } from '@/lib/cookieConsent';

const content = {
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
    privacyLink: 'Privacybeleid',
    cookieLink: 'Cookiebeleid',
    cookieSettingsLabel: 'Cookie-instellingen',
    privacyHref: '/privacybeleid',
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
    privacyLink: 'Privacy policy',
    cookieLink: 'Cookie policy',
    cookieSettingsLabel: 'Cookie settings',
    privacyHref: '/en/privacy-policy',
    cookieHref: '/en/cookies',
  },
};

const CookieBanner: React.FC = () => {
  const { language } = useTranslation();
  const c = language === 'nl' ? content.nl : content.en;

  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setBannerVisible(true), 400);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const handler = () => {
      setModalVisible(true);
      setBannerVisible(false);
      const consent = getCookieConsent();
      if (consent) setAnalyticsEnabled(consent.analytics);
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
    const consent = getCookieConsent();
    setAnalyticsEnabled(consent ? consent.analytics : false);
    setModalVisible(true);
    setBannerVisible(false);
  }, []);

  const savePreferences = useCallback(() => {
    saveCookieConsent(analyticsEnabled);
    setModalVisible(false);
  }, [analyticsEnabled]);

  const closeModal = useCallback(() => {
    if (getCookieConsent()) {
      setModalVisible(false);
    } else {
      setModalVisible(false);
      setBannerVisible(true);
    }
  }, []);

  return (
    <>
      {/* ── Cookie Banner ── */}
      {bannerVisible && (
        <div
          data-testid="cookie-banner"
          className="fixed bottom-0 left-0 right-0 z-[9000] px-4 pb-4 pointer-events-none"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 1rem)' }}
        >
          <div className="pointer-events-auto max-w-3xl mx-auto rounded-2xl border border-blue-500/[0.45] bg-[#0b0f1a]/95 backdrop-blur-md shadow-[0_-4px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(59,130,246,0.10)] p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-white/80 text-sm leading-relaxed">{c.bannerText}</p>
                <div className="flex items-center gap-3 mt-2">
                  <Link href={c.privacyHref} className="text-xs text-blue-400/70 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200">
                    {c.privacyLink}
                  </Link>
                  <span className="text-white/20 text-xs">·</span>
                  <Link href={c.cookieHref} className="text-xs text-blue-400/70 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200">
                    {c.cookieLink}
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={openSettings}
                  data-testid="cookie-settings-btn"
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white/70 border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.10] hover:text-white transition-all duration-200"
                >
                  {c.settings}
                </button>
                <button
                  onClick={rejectAll}
                  data-testid="cookie-reject-btn"
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white/70 border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.10] hover:text-white transition-all duration-200"
                >
                  {c.reject}
                </button>
                <button
                  onClick={acceptAll}
                  data-testid="cookie-accept-btn"
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_16px_rgba(37,99,235,0.35)] hover:shadow-[0_0_24px_rgba(37,99,235,0.5)] transition-all duration-200"
                >
                  {c.acceptAll}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Preferences Modal ── */}
      {modalVisible && (
        <div
          data-testid="cookie-modal"
          className="fixed inset-0 z-[9100] flex items-end sm:items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.70)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="w-full max-w-md rounded-2xl border border-blue-500/[0.40] bg-[#0d1120] shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-blue-500/[0.15]">
              <h2 className="text-base font-bold text-white tracking-tight">{c.modalTitle}</h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                aria-label="Sluiten"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-5 flex flex-col gap-4">
              <p className="text-xs text-white/50 leading-relaxed">{c.modalSubtitle}</p>

              {/* Necessary cookies */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <Shield className="w-5 h-5 text-blue-400/80 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white mb-1">{c.necessary}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{c.necessaryDesc}</p>
                </div>
                <span className="text-[10px] font-bold text-blue-400/70 uppercase tracking-wider mt-0.5 shrink-0">
                  {c.alwaysOn}
                </span>
              </div>

              {/* Analytics cookies */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                <BarChart3 className="w-5 h-5 text-blue-400/80 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white mb-1">{c.analytics}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{c.analyticsDesc}</p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsEnabled}
                  data-testid="analytics-toggle"
                  onClick={() => setAnalyticsEnabled(v => !v)}
                  className={`relative shrink-0 mt-0.5 w-10 h-5 rounded-full transition-all duration-200 focus:outline-none ${
                    analyticsEnabled
                      ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.45)]'
                      : 'bg-white/[0.12]'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                      analyticsEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Modal footer */}
            <div className="px-6 py-5 border-t border-blue-500/[0.15] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Link href={c.privacyHref} onClick={closeModal} className="text-xs text-blue-400/60 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200">
                  {c.privacyLink}
                </Link>
                <span className="text-white/20 text-xs">·</span>
                <Link href={c.cookieHref} onClick={closeModal} className="text-xs text-blue-400/60 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200">
                  {c.cookieLink}
                </Link>
              </div>
              <button
                onClick={savePreferences}
                data-testid="cookie-save-btn"
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_14px_rgba(37,99,235,0.35)] hover:shadow-[0_0_22px_rgba(37,99,235,0.5)] transition-all duration-200 flex items-center gap-1.5"
              >
                {c.save}
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
