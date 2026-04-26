import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';

const CookiesEN: React.FC = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title="Cookie Policy — ZentrixDigital"
        description="Read the cookie policy of ZentrixDigital. We explain which cookies we use and how you can manage your preferences."
        canonical="https://www.zentrixdigital.eu/en/cookies"
      />
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">Cookie Policy</h1>
          <div className="prose-zentrix">
            <p>We use cookies to ensure our website works properly and to understand how it is used.</p>

            <h2>1. What are cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit our website.</p>

            <h2>2. Which cookies do we use?</h2>
            <ul>
              <li><strong>Functional cookies</strong> — necessary for the website to work correctly. Always enabled.</li>
              <li><strong>Analytics cookies</strong> — for anonymous insight into website usage. Only with your consent.</li>
            </ul>

            <h2>3. Managing cookies</h2>
            <p>You can adjust your cookie preferences at any time via the cookie banner at the bottom of the page, or through the "Cookie settings" link in the footer.</p>

            <h2>4. Disabling cookies</h2>
            <p>You can delete or block cookies through your browser settings. Please note that disabling cookies may affect the functionality of the website.</p>

            <h2>5. Contact</h2>
            <p>For questions about our cookie policy, contact us at: <a href="mailto:info@zentrixdigital.eu">info@zentrixdigital.eu</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesEN;
