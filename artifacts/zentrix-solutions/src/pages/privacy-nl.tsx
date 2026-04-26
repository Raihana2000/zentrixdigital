import React, { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';

const PrivacyNL: React.FC = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title="Privacybeleid — ZentrixDigital"
        description="Lees het privacybeleid van ZentrixDigital. Wij leggen uit welke gegevens wij verzamelen en hoe wij daarmee omgaan."
        canonical="https://www.zentrixdigital.eu/privacybeleid"
      />
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">Privacybeleid</h1>
          <div className="prose-zentrix">
            <p>Dit privacybeleid is van toepassing op de diensten van ZentrixDigital, opgericht door K. Hizi.</p>

            <h2>1. Welke gegevens verzamelen wij?</h2>
            <p>Wij kunnen de volgende gegevens verzamelen wanneer je contact met ons opneemt:</p>
            <ul>
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (optioneel)</li>
              <li>Inhoud van je bericht</li>
            </ul>

            <h2>2. Waarom verzamelen wij deze gegevens?</h2>
            <p>Wij gebruiken deze gegevens uitsluitend om:</p>
            <ul>
              <li>Contact met je op te nemen</li>
              <li>Onze diensten te leveren</li>
              <li>Vragen te beantwoorden</li>
            </ul>

            <h2>3. Delen van gegevens</h2>
            <p>Wij delen jouw gegevens niet met derden, tenzij dit noodzakelijk is voor onze dienstverlening of wettelijk verplicht is.</p>

            <h2>4. Bewaartermijn</h2>
            <p>Wij bewaren jouw gegevens niet langer dan nodig is om jouw verzoek af te handelen.</p>

            <h2>5. Jouw rechten</h2>
            <p>Je hebt het recht om:</p>
            <ul>
              <li>Inzage te vragen in jouw gegevens</li>
              <li>Correctie of verwijdering te verzoeken</li>
              <li>Bezwaar te maken tegen verwerking</li>
            </ul>

            <h2>6. Contact</h2>
            <p>Voor vragen kun je contact opnemen via: <a href="mailto:info@zentrixdigital.eu">info@zentrixdigital.eu</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyNL;
