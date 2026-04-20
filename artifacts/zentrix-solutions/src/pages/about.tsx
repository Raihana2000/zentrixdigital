import React from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, CheckCircle2, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const valuesIconMap = [
    <Shield className="w-8 h-8 text-primary" />,
    <Lightbulb className="w-8 h-8 text-primary" />,
    <CheckCircle2 className="w-8 h-8 text-primary" />,
    <Zap className="w-8 h-8 text-primary" />
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[118px]">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {t.about.heroTitle}
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            {t.about.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">{t.about.whoWeAreTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.whoWeAreText}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-card/50 p-8 rounded-2xl border border-border/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">{t.about.missionTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.missionText}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{t.about.valuesTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.values(t.about.values).map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-card/30 border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-8 flex flex-col gap-4">
                    <div className="p-3 bg-primary/10 w-fit rounded-xl">
                      {valuesIconMap[idx]}
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
