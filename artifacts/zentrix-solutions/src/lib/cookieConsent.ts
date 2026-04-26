export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  timestamp: number;
  version: 1;
}

const STORAGE_KEY = 'zentrix_cookie_consent';

export function getCookieConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version === 1) return parsed as CookieConsent;
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  return consent;
}
