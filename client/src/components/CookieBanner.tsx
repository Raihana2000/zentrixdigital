import { useEffect, useState } from "react";

const CONSENT_KEY = "zentrix_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const saveConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({
        choice,
        version: 1,
        date: new Date().toISOString(),
      }),
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[99999] rounded-2xl border border-white/10 bg-black/95 p-4 text-white shadow-2xl md:left-auto md:max-w-xl">
      <p className="text-sm leading-relaxed">
        Wij gebruiken cookies om onze website goed te laten werken en de
        gebruikerservaring te verbeteren. We plaatsen alleen analytische of
        marketingcookies na jouw toestemming.
      </p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          onClick={() => saveConsent("rejected")}
          className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
        >
          Weigeren
        </button>

        <button
          onClick={() => saveConsent("accepted")}
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500"
        >
          Accepteren
        </button>
      </div>
    </div>
  );
}
