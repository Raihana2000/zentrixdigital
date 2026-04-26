import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';

const TermsEN: React.FC = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title="Terms and Conditions — ZentrixDigital"
        description="Read the terms and conditions of ZentrixDigital."
        canonical="https://www.zentrixdigital.eu/en/terms-and-conditions"
      />
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">Terms and Conditions</h1>
          <div className="prose-zentrix">
            <p>These terms apply to all services provided by ZentrixDigital.</p>

            <h2>1. Services</h2>
            <p>ZentrixDigital provides websites, applications, and digital solutions.</p>

            <h2>2. Liability</h2>
            <p>We are not liable for indirect damages, data loss, or loss of revenue.</p>

            <h2>3. Payment</h2>
            <p>Services are delivered based on agreed pricing and terms.</p>

            <h2>4. Changes</h2>
            <p>We reserve the right to modify services and pricing.</p>

            <h2>5. Governing law</h2>
            <p>These terms are governed by Dutch law.</p>

            <h2>6. Contact</h2>
            <p><a href="mailto:info@zentrixdigital.eu">info@zentrixdigital.eu</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsEN;
