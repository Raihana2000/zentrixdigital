import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';

const TermsNL: React.FC = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title="Algemene Voorwaarden — reldio"
        description="Lees de algemene voorwaarden van reldio."
        canonical="https://www.reldio.eu/algemene-voorwaarden"
      />
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">Algemene Voorwaarden</h1>
          <div className="prose-zentrix">
            <p>Deze voorwaarden zijn van toepassing op alle diensten van reldio.</p>

            <h2>1. Diensten</h2>
            <p>reldio levert websites, applicaties en digitale oplossingen.</p>

            <h2>2. Aansprakelijkheid</h2>
            <p>Wij zijn niet aansprakelijk voor indirecte schade, verlies van gegevens of gemiste inkomsten.</p>

            <h2>3. Betaling</h2>
            <p>Diensten worden geleverd op basis van vooraf afgesproken tarieven en voorwaarden.</p>

            <h2>4. Wijzigingen</h2>
            <p>Wij behouden het recht om diensten en prijzen te wijzigen.</p>

            <h2>5. Toepasselijk recht</h2>
            <p>Op deze voorwaarden is Nederlands recht van toepassing.</p>

            <h2>6. Contact</h2>
            <p><a href="mailto:info@reldio.eu">info@reldio.eu</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsNL;
