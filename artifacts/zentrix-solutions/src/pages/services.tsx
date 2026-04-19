import React from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Code2, Database, TrendingUp, ShieldAlert } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const serviceIcons = [
    <Code2 className="w-10 h-10 text-primary" />,
    <Database className="w-10 h-10 text-primary" />,
    <ShieldAlert className="w-10 h-10 text-primary" />,
    <TrendingUp className="w-10 h-10 text-primary" />
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {t.services.heroTitle}
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            {t.services.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 container mx-auto max-w-5xl">
        <div className="flex flex-col gap-24">
          {Object.values(t.services.servicesList).map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full aspect-square max-w-sm rounded-3xl bg-card/30 border border-border/50 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 group-hover:scale-110 transition-transform duration-500">
                     {serviceIcons[idx]}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black/50 border-y border-border/30 mt-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Process</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {['Analysis', 'Strategy', 'Development', 'Launch'].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 text-primary font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t.services.ctaTitle}</h2>
        <Link href="/contact">
          <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]" data-testid="services-cta-btn">
            {t.services.ctaButton}
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
