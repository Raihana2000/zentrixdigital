import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';

const PrivacyEN: React.FC = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title="Privacy Policy — ZentrixDigital"
        description="Read the privacy policy of ZentrixDigital. We explain what data we collect and how we handle it."
        canonical="https://www.zentrixdigital.eu/en/privacy-policy"
      />
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">Privacy Policy</h1>
          <div className="prose-zentrix">
            <p>This privacy policy applies to the services of ZentrixDigital, founded by K. Hizi.</p>

            <h2>1. What data do we collect?</h2>
            <p>We may collect the following information when you contact us:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Message content</li>
            </ul>

            <h2>2. Why do we collect this data?</h2>
            <p>We use this data only to:</p>
            <ul>
              <li>Contact you</li>
              <li>Provide our services</li>
              <li>Respond to inquiries</li>
            </ul>

            <h2>3. Data sharing</h2>
            <p>We do not share your data with third parties unless required for our services or by law.</p>

            <h2>4. Data retention</h2>
            <p>We do not keep your data longer than necessary to handle your request.</p>

            <h2>5. Your rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your data</li>
              <li>Request correction or deletion</li>
              <li>Object to data processing</li>
            </ul>

            <h2>6. Contact</h2>
            <p>For questions, contact: <a href="mailto:info@zentrixdigital.eu">info@zentrixdigital.eu</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyEN;
