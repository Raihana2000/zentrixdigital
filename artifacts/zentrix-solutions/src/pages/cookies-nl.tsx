import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';

const CookiesNL: React.FC = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title="Cookiebeleid — ZentrixDigital"
        description="Lees het cookiebeleid van ZentrixDigital. Wij leggen uit welke cookies wij gebruiken en hoe u uw voorkeuren kunt beheren."
        canonical="https://www.zentrixdigital.eu/cookies"
      />
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">Cookiebeleid</h1>
          <div className="prose-zentrix">
            <p>Wij gebruiken cookies om onze website goed te laten functioneren en inzicht te krijgen in het gebruik.</p>

            <h2>1. Wat zijn cookies?</h2>
            <p>Cookies zijn kleine tekstbestanden die op jouw apparaat worden opgeslagen wanneer je onze website bezoekt.</p>

            <h2>2. Welke cookies gebruiken wij?</h2>
            <ul>
              <li><strong>Functionele cookies</strong> — noodzakelijk voor de werking van de website. Altijd ingeschakeld.</li>
              <li><strong>Analytische cookies</strong> — voor anoniem inzicht in het gebruik van de website. Alleen met jouw toestemming.</li>
            </ul>

            <h2>3. Cookies beheren</h2>
            <p>Je kunt jouw cookievoorkeuren op elk moment aanpassen via de cookiebanner onderaan de pagina, of via de link "Cookie-instellingen" in de footer.</p>

            <h2>4. Cookies uitschakelen</h2>
            <p>Via de instellingen van jouw browser kun je cookies verwijderen of blokkeren. Houd er rekening mee dat het uitschakelen van cookies de functionaliteit van de website kan beïnvloeden.</p>

            <h2>5. Contact</h2>
            <p>Voor vragen over ons cookiebeleid kun je contact opnemen via: <a href="mailto:info@zentrixdigital.eu">info@zentrixdigital.eu</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesNL;
