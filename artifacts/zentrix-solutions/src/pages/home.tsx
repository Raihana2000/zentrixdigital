import React from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, LineChart, ShieldCheck, Zap, Target, Wrench, Building2, Rocket, Briefcase, Star } from 'lucide-react';
import logoPath from "@assets/ChatGPT_Image_19_apr_2026,_10_01_14_1776586282902.png";

const Home = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto flex flex-col items-center gap-8"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Zentrix Solutions</span>
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-tight">
            {t.home.heroTitle}
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {t.home.heroSubtitle}
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all rounded-full" data-testid="hero-btn-start">
                {t.home.startProject} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 border-border hover:bg-white/5 rounded-full" data-testid="hero-btn-check">
                {t.home.freeCheck}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-24 relative z-10 bg-black/50 border-y border-border/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.home.overviewTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.home.overviewText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.home.servicesTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 'websites', icon: <Code2 className="w-8 h-8 text-primary" />, ...t.home.services.websites },
            { id: 'apps', icon: <Cpu className="w-8 h-8 text-primary" />, ...t.home.services.apps },
            { id: 'maintenance', icon: <Wrench className="w-8 h-8 text-primary" />, ...t.home.services.maintenance },
            { id: 'growth', icon: <LineChart className="w-8 h-8 text-primary" />, ...t.home.services.growth }
          ].map((service, index) => (
            <Link key={service.id} href="/services">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-card/50 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.3)] cursor-pointer group">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 relative z-10 bg-black/50 border-y border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.home.whoWeHelpTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.home.whoWeHelp.local, icon: <Building2 className="w-6 h-6" /> },
              { title: t.home.whoWeHelp.startups, icon: <Rocket className="w-6 h-6" /> },
              { title: t.home.whoWeHelp.service, icon: <Briefcase className="w-6 h-6" /> },
              { title: t.home.whoWeHelp.brands, icon: <Target className="w-6 h-6" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-gradient-to-b from-card/80 to-transparent border border-border/50 text-center gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="text-muted-foreground">{item.icon}</div>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zentrix Section */}
      <section className="py-32 relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t.home.whyZentrixTitle}</h2>
            <div className="flex flex-col gap-6">
              {[
                t.home.whyZentrix.transparent,
                t.home.whyZentrix.noHidden,
                t.home.whyZentrix.professional,
                t.home.whyZentrix.focus
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-4 bg-card/30 p-4 rounded-lg border border-border/30">
                  <div className="min-w-10 min-h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-lg text-gray-200">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center relative p-8">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '4s' }} />
               <img src={logoPath} alt="Zentrix Mark" className="w-1/2 h-1/2 object-contain opacity-80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 relative z-10 bg-black/50 border-y border-border/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">{t.home.reviewsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-card/50 border-border/50 text-left">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-yellow-500 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="h-2 bg-muted/30 rounded w-full mb-3"></div>
                  <div className="h-2 bg-muted/30 rounded w-5/6 mb-6"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                    <div>
                      <div className="h-3 bg-muted/50 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-muted/30 rounded w-16"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-muted-foreground">{t.home.reviewsMore}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-b from-primary/20 to-transparent border border-primary/30 p-12 md:p-20 rounded-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t.home.ctaTitle}</h2>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]" data-testid="bottom-cta-btn">
              {t.home.ctaButton}
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
