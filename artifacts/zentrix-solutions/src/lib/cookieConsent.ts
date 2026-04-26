declare global {
  interface Window {
    resetCookieConsent: () => void;
  }
}

export const CONSENT_KEY = 'zentrix_cookie_consent';

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  timestamp: number;
  version: 1;
}

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

export function saveCookieConsent(analytics: boolean): void {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      necessary: true,
      analytics,
      timestamp: Date.now(),
      version: 1,
    }));
  } catch {
    // ignore
  }
}

export function clearCookieConsent(): void {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignore
  }
}

if (typeof window !== 'undefined') {
  window.resetCookieConsent = function () {
    localStorage.removeItem(CONSENT_KEY);
    location.reload();
  };
}
