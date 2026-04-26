declare global {
  interface Window {
    resetCookieConsent: () => void;
  }
}

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  timestamp: number;
  version: 1;
}

export const CONSENT_KEY = 'zentrix_cookie_consent';

export function getCookieConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === 1 && typeof parsed.analytics === 'boolean') {
      return parsed as CookieConsent;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveCookieConsent(analytics: boolean): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    timestamp: Date.now(),
    version: 1,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  return consent;
}

export function clearCookieConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
}

if (typeof window !== 'undefined') {
  window.resetCookieConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    location.reload();
  };
}
