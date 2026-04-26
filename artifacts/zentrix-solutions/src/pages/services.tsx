import React, { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Code2, Cpu, Wrench, LineChart, ArrowRight, CheckCircle2,
  XCircle, TrendingUp, Users, Store, Briefcase, Scissors,
  MessageSquare, CalendarCheck, BarChart3, Zap
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const Services = () => {
  const { t, language } = useTranslation();
  const isNL = language === 'nl';

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const content = {
    nl: {
      heroBadge: 'Diensten',
      heroTitle: 'Professionele websites en systemen die klanten opleveren',
      heroSubtitle: 'Geen standaard websites. Wij bouwen digitale oplossingen die jouw bedrijf laten groeien — meer aanvragen, meer overzicht en meer omzet.',
      heroCta: 'Vraag gratis analyse aan',
      problemBadge: 'Het probleem',
      problemTitle: 'Waarom veel websites stilletjes klanten mislopen',
      problems: [
        { icon: XCircle, title: 'Geen conversie', text: 'Veel websites zien er goed uit, maar zetten bezoekers niet om naar aanvragen of klanten.' },
        { icon: XCircle, title: 'Geen duidelijke actie', text: 'Bezoekers weten niet wat ze moeten doen. Zonder sterke call-to-action klikken ze weg.' },
        { icon: XCircle, title: 'Stille omzetderving', text: 'Bedrijven verliezen potentiële klanten zonder het te weten — dag na dag.' },
        { icon: XCircle, title: 'Handmatig werk verspilt tijd', text: 'Repetitieve processen zonder automatisering kosten dagelijks waardevolle werktijd.' },
        { icon: XCircle, title: 'Zwakke online uitstraling', text: 'Een verouderde of onduidelijke website schaadt het vertrouwen vóór het eerste gesprek.' },
      ],
      solutionBadge: 'De oplossing',
      solutionTitle: 'Wij bouwen digitale oplossingen die écht werken',
      solutions: [
        'Conversiegerichte websites die bezoekers omzetten in klanten',
        'Maatwerk applicaties en portalen op maat van uw processen',
        'CRM systemen voor gestructureerd klantbeheer en meer omzet',
        'Boekingssystemen die 24/7 afspraken automatisch verwerken',
        'Bedrijfsautomatisering die handmatig werk elimineert',
        'SEO-klare digitale structuren voor betere vindbaarheid',
      ],
      cardsBadge: 'Onze diensten',
      cardsTitle: 'Wat wij voor u bouwen',
      cards: [
        {
          icon: Code2,
          title: 'Website laten maken',
          desc: 'Een professionele, conversiegerichte website die vertrouwen opbouwt en bezoekers omzet in klanten.',
          bullets: ['Op maat design', 'Volledig mobielvriendelijk', 'SEO-technisch sterk'],
          href: '/websites',
          cta: 'Meer over websites',
          solutionHref: '/website-laten-maken-bedrijven',
          solutionLabel: 'Voor bedrijven',
        },
        {
          icon: Cpu,
          title: 'Applicatie laten maken',
          desc: 'Maatwerk webapplicaties die uw processen automatiseren, klantportalen bieden en uw bedrijf efficiënter maken.',
          bullets: ['Klantportalen', 'Dashboards op maat', 'Koppelingen met bestaande tools'],
          href: '/applicaties',
          cta: 'Meer over applicaties',
          solutionHref: null,
          solutionLabel: null,
        },
        {
          icon: BarChart3,
          title: 'CRM systeem laten maken',
          desc: 'Klantenbeheer op maat: gestructureerd overzicht van leads, klanten en opvolging — zodat u niets mist.',
          bullets: ['Leads en klanten bijhouden', 'Automatische opvolging', 'Meer omzet en structuur'],
          href: '/crm-systeem-laten-maken',
          cta: 'Meer over CRM',
          solutionHref: '/crm-systeem-laten-maken',
          solutionLabel: 'Bekijk CRM dienst',
        },
        {
          icon: CalendarCheck,
          title: 'Boekingssysteem laten maken',
          desc: 'Laat klanten automatisch afspraken inplannen via uw website — 24/7, zonder telefoontjes.',
          bullets: ['Online afspraken plannen', 'Automatische bevestigingen', 'Minder handmatig werk'],
          href: '/boekingssysteem-laten-maken',
          cta: 'Meer over boekingssystemen',
          solutionHref: '/boekingssysteem-laten-maken',
          solutionLabel: 'Bekijk boekingsdienst',
        },
        {
          icon: Zap,
          title: 'Bedrijfsprocessen automatiseren',
          desc: 'Repetitieve taken automatiseren zodat u en uw team tijd besparen en zich focussen op wat echt telt.',
          bullets: ['Workflows automatiseren', 'Koppelingen tussen systemen', 'Tijd en kosten besparen'],
          href: '/bedrijfsprocessen-automatiseren',
          cta: 'Meer over automatisering',
          solutionHref: '/bedrijfsprocessen-automatiseren',
          solutionLabel: 'Bekijk automatisering',
        },
      ],
      resultsBadge: 'Resultaten',
      resultsTitle: 'Wat u kunt verwachten',
      results: [
        { icon: TrendingUp, label: 'Meer aanvragen', desc: 'Conversiegerichte opbouw trekt actief klanten aan' },
        { icon: BarChart3, label: 'Hogere conversie', desc: 'Bezoekers worden gemakkelijker klant' },
        { icon: Briefcase, label: 'Professionele uitstraling', desc: 'Direct vertrouwen bij iedere bezoeker' },
        { icon: Zap, label: 'Minder handmatig werk', desc: 'Automatisering bespaart dagelijks tijd' },
        { icon: LineChart, label: 'Meer overzicht', desc: 'Systemen die alles voor u bijhouden' },
      ],
      scenariosBadge: 'Voorbeeldscenario\'s',
      scenariosTitle: 'Hoe onze oplossingen kunnen helpen',
      scenariosNote: 'Dit zijn voorbeeldscenario\'s ter illustratie. Elke situatie is uniek — wij denken graag mee over uw specifieke uitdaging.',
      scenarios: [
        {
          icon: Store,
          sector: 'Makelaar',
          title: 'Betere websitestructuur',
          text: 'Een makelaar met duidelijke CTA\'s, snelle laadtijden en een goed gestructureerde website kan significant meer aanvragen ontvangen dan een verouderde site zonder duidelijke actieknoppen.',
        },
        {
          icon: Scissors,
          sector: 'Beauty salon',
          title: 'Online boekingssysteem',
          text: 'Een beauty salon met een online boekingssysteem kan klanten 24/7 afspraken laten inplannen — zonder telefoontjes, zonder wachttijden en met automatische bevestigingen.',
        },
        {
          icon: Briefcase,
          sector: 'Klein bedrijf',
          title: 'CRM voor klantopvolging',
          text: 'Een klein bedrijf dat klantinformatie nog handmatig bijhoudt kan met een eenvoudig CRM systeem leads beter opvolgen, niets vergeten en structureel meer omzet genereren.',
        },
      ],
      audienceBadge: 'Voor wie',
      audienceTitle: 'Voor wie is dit?',
      audience: [
        { icon: Store, label: 'Makelaars' },
        { icon: Briefcase, label: 'Advocaten' },
        { icon: Scissors, label: 'Beauty salons' },
        { icon: Users, label: 'ZZP\'ers' },
        { icon: MessageSquare, label: 'Kleine bedrijven' },
      ],
      internalBadge: 'Specifieke oplossingen',
      internalTitle: 'Specifieke oplossingen voor uw situatie',
      internalLinks: [
        { href: '/website-laten-maken-zzp', label: 'Website voor ZZP', desc: 'Professionele website voor zelfstandigen' },
        { href: '/website-laten-maken-bedrijven', label: 'Website voor bedrijven', desc: 'Converterend en vertrouwenwekkend' },
        { href: '/crm-systeem-laten-maken', label: 'CRM systeem laten maken', desc: 'Klantbeheer op maat' },
        { href: '/boekingssysteem-laten-maken', label: 'Boekingssysteem laten maken', desc: 'Automatisch afspraken plannen' },
        { href: '/bedrijfsprocessen-automatiseren', label: 'Bedrijfsprocessen automatiseren', desc: 'Workflows en tijdsbesparing' },
      ],
      ctaTitle: 'Stop met klanten mislopen.',
      ctaText: 'Vraag een gratis analyse aan en ontdek waar jouw website of proces sterker kan.',
      ctaButton: 'Vraag gratis analyse aan',
    },
    en: {
      heroBadge: 'Services',
      heroTitle: 'Professional websites and systems that generate customers',
      heroSubtitle: 'No generic websites. We build digital solutions that help your business grow — more inquiries, more structure and more revenue.',
      heroCta: 'Request free analysis',
      problemBadge: 'The problem',
      problemTitle: 'Why many websites quietly lose customers',
      problems: [
        { icon: XCircle, title: 'No conversion', text: 'Many websites look good but fail to turn visitors into inquiries or paying customers.' },
        { icon: XCircle, title: 'No clear action', text: 'Visitors don\'t know what to do next. Without a strong call-to-action, they leave.' },
        { icon: XCircle, title: 'Silent revenue loss', text: 'Businesses lose potential customers every day without knowing it.' },
        { icon: XCircle, title: 'Manual work wastes time', text: 'Repetitive processes without automation consume valuable work hours every day.' },
        { icon: XCircle, title: 'Weak online image', text: 'An outdated or unclear website damages trust before the first conversation even starts.' },
      ],
      solutionBadge: 'The solution',
      solutionTitle: 'We build digital solutions that actually work',
      solutions: [
        'Conversion-focused websites that turn visitors into customers',
        'Custom applications and portals tailored to your processes',
        'CRM systems for structured client management and more revenue',
        'Booking systems that process appointments automatically 24/7',
        'Business automation that eliminates manual work',
        'SEO-ready digital structures for better online visibility',
      ],
      cardsBadge: 'Our services',
      cardsTitle: 'What we build for you',
      cards: [
        {
          icon: Code2,
          title: 'Website Development',
          desc: 'A professional, conversion-focused website that builds trust and turns visitors into paying customers.',
          bullets: ['Custom design', 'Fully mobile-responsive', 'Technically strong SEO'],
          href: '/websites',
          cta: 'More about websites',
          solutionHref: '/en/website-for-businesses',
          solutionLabel: 'For businesses',
        },
        {
          icon: Cpu,
          title: 'Application Development',
          desc: 'Custom web applications that automate your processes, provide client portals, and make your business more efficient.',
          bullets: ['Client portals', 'Custom dashboards', 'Integrations with existing tools'],
          href: '/applicaties',
          cta: 'More about applications',
          solutionHref: null,
          solutionLabel: null,
        },
        {
          icon: BarChart3,
          title: 'CRM System Development',
          desc: 'Custom client management: structured overview of leads, customers, and follow-ups — so you never miss an opportunity.',
          bullets: ['Track leads and clients', 'Automatic follow-up', 'More revenue and structure'],
          href: '/en/crm-system-development',
          cta: 'More about CRM',
          solutionHref: '/en/crm-system-development',
          solutionLabel: 'View CRM service',
        },
        {
          icon: CalendarCheck,
          title: 'Booking System Development',
          desc: 'Let clients automatically book appointments through your website — 24/7, without phone calls.',
          bullets: ['Online appointment booking', 'Automatic confirmations', 'Less manual work'],
          href: '/en/booking-system-development',
          cta: 'More about booking systems',
          solutionHref: '/en/booking-system-development',
          solutionLabel: 'View booking service',
        },
        {
          icon: Zap,
          title: 'Business Automation',
          desc: 'Automate repetitive tasks so you and your team save time and focus on what truly matters.',
          bullets: ['Automate workflows', 'Connect systems', 'Save time and costs'],
          href: '/en/business-automation',
          cta: 'More about automation',
          solutionHref: '/en/business-automation',
          solutionLabel: 'View automation service',
        },
      ],
      resultsBadge: 'Results',
      resultsTitle: 'What you can expect',
      results: [
        { icon: TrendingUp, label: 'More inquiries', desc: 'Conversion-focused structure actively attracts customers' },
        { icon: BarChart3, label: 'Higher conversion', desc: 'Visitors become customers more easily' },
        { icon: Briefcase, label: 'Professional brand image', desc: 'Instant trust with every visitor' },
        { icon: Zap, label: 'Less manual work', desc: 'Automation saves time every day' },
        { icon: LineChart, label: 'More business overview', desc: 'Systems that track everything for you' },
      ],
      scenariosBadge: 'Example scenarios',
      scenariosTitle: 'How our solutions can help',
      scenariosNote: 'These are example scenarios for illustration purposes. Every situation is unique — we are happy to think along with you about your specific challenge.',
      scenarios: [
        {
          icon: Store,
          sector: 'Real estate agency',
          title: 'Better website structure',
          text: 'A real estate agency with clear CTAs, fast load times, and a well-structured website can receive significantly more inquiries than an outdated site with no clear action buttons.',
        },
        {
          icon: Scissors,
          sector: 'Beauty salon',
          title: 'Online booking system',
          text: 'A beauty salon with an online booking system can let clients book appointments 24/7 — no phone calls, no waiting, with automatic confirmations sent immediately.',
        },
        {
          icon: Briefcase,
          sector: 'Small business',
          title: 'CRM for client follow-up',
          text: 'A small business still tracking client information manually can use a simple CRM system to follow up on leads more effectively, forget nothing, and generate structurally more revenue.',
        },
      ],
      audienceBadge: 'Who it\'s for',
      audienceTitle: 'Who is this for?',
      audience: [
        { icon: Store, label: 'Real estate agencies' },
        { icon: Briefcase, label: 'Law firms' },
        { icon: Scissors, label: 'Beauty salons' },
        { icon: Users, label: 'Freelancers' },
        { icon: MessageSquare, label: 'Small businesses' },
      ],
      internalBadge: 'Specific solutions',
      internalTitle: 'Specific solutions for your situation',
      internalLinks: [
        { href: '/en/website-for-freelancers', label: 'Website for Freelancers', desc: 'Professional presence for independent professionals' },
        { href: '/en/website-for-businesses', label: 'Website for Businesses', desc: 'Converting and trust-building' },
        { href: '/en/crm-system-development', label: 'CRM System Development', desc: 'Custom client management' },
        { href: '/en/booking-system-development', label: 'Booking System Development', desc: 'Automated appointment scheduling' },
        { href: '/en/business-automation', label: 'Business Automation', desc: 'Workflows and time savings' },
      ],
      ctaTitle: 'Stop losing potential customers.',
      ctaText: 'Request a free analysis and discover where your website or process can perform better.',
      ctaButton: 'Request free analysis',
    },
  };

  const c = isNL ? content.nl : content.en;

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] page-top-pad">
      <SEOHead
        title={t.meta.servicesTitle}
        description={t.meta.servicesDesc}
        canonical="https://www.zentrixdigital.eu/services"
      />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 px-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_0%,rgba(37,99,235,0.11),transparent_60%)]" />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '72px 72px' }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
              {c.heroBadge}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.04] text-white mb-7"
            >
              {c.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#F5F7FF] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            >
              {c.heroSubtitle}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] hover:scale-[1.03] text-sm"
                data-testid="services-hero-cta"
              >
                {c.heroCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM SECTION ───────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#080d16]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-950/30 text-red-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/70 shrink-0" />
                {c.problemBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{c.problemTitle}</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.problems.map((p, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  className="flex items-start gap-3.5 p-5 rounded-2xl bg-gradient-to-b from-[#120d0d]/95 to-[#0d0808]/80 border border-red-500/[0.20] hover:border-red-400/[0.35] transition-all duration-300"
                >
                  <XCircle className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{p.title}</p>
                    <p className="text-xs text-white/60 leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SOLUTION SECTION ──────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
                {c.solutionBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{c.solutionTitle}</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {c.solutions.map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3.5 p-4 rounded-xl border border-blue-500/[0.20] bg-blue-950/10 hover:border-blue-400/[0.40] transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#080d16]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
                {c.cardsBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{c.cardsTitle}</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div key={i} variants={fadeUp}>
                    <Link href={card.href}>
                      <div
                        data-testid={`service-card-${i}`}
                        className="group h-full flex flex-col gap-5 p-6 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.55] shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(59,130,246,0.10)] hover:border-blue-400/[0.90] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.18)] transition-all duration-300 cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-xl bg-blue-600/[0.14] border border-blue-400/[0.30] flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/[0.70] transition-all duration-300">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                          <p className="text-xs text-white/70 leading-relaxed mb-4">{card.desc}</p>
                          <ul className="flex flex-col gap-1.5 mb-4">
                            {card.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-center gap-2 text-xs text-white/60">
                                <CheckCircle2 className="w-3 h-3 text-blue-500/50 shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-blue-400/70 text-xs font-bold uppercase tracking-widest group-hover:gap-2.5 group-hover:text-blue-300 transition-all duration-200">
                          {card.cta}
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── RESULTS SECTION ───────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
                {c.resultsBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{c.resultsTitle}</h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {c.results.map((r, i) => {
                const RIcon = r.icon;
                return (
                  <motion.div
                    key={i} variants={fadeUp}
                    className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.30] hover:border-blue-400/[0.60] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-600/[0.14] border border-blue-400/[0.25] flex items-center justify-center">
                      <RIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-sm font-bold text-white">{r.label}</p>
                    <p className="text-xs text-white/55 leading-relaxed">{r.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── EXAMPLE SCENARIOS ─────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#080d16]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
                {c.scenariosBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">{c.scenariosTitle}</h2>
              <p className="text-xs text-white/40 italic max-w-2xl">{c.scenariosNote}</p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {c.scenarios.map((s, i) => {
                const SIcon = s.icon;
                return (
                  <motion.div
                    key={i} variants={fadeUp}
                    className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 border border-blue-500/[0.35] hover:border-blue-400/[0.65] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/[0.14] border border-blue-400/[0.25] flex items-center justify-center shrink-0">
                        <SIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-xs font-bold text-blue-400/80 uppercase tracking-widest">{s.sector}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">{s.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{s.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── TARGET AUDIENCE ───────────────────────────────────── */}
      <section className="py-20 px-5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 text-blue-400/80 text-xs font-bold tracking-[0.18em] uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 shrink-0" />
                {c.audienceBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{c.audienceTitle}</h2>
            </motion.div>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
              {c.audience.map((a, i) => {
                const AIcon = a.icon;
                return (
                  <motion.div
                    key={i} variants={fadeUp}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-blue-500/[0.35] bg-gradient-to-r from-[#0d1525]/80 to-[#080d18]/60 hover:border-blue-400/[0.70] transition-all duration-200"
                  >
                    <AIcon className="w-4 h-4 text-blue-400/70" />
                    <span className="text-sm font-medium text-white/80">{a.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTERNAL LINKS ────────────────────────────────────── */}
      <section className="py-16 px-5 bg-[#080d16] border-t border-blue-500/[0.10]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-xs text-blue-400/70 uppercase tracking-widest font-semibold mb-3">
              {c.internalBadge}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-bold text-white mb-8 tracking-tight">
              {c.internalTitle}
            </motion.h2>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.internalLinks.map(({ href, label, desc }) => (
                <motion.div key={href} variants={fadeUp}>
                  <Link
                    href={href}
                    className="group flex flex-col gap-2 p-5 rounded-2xl border border-blue-500/[0.55] bg-gradient-to-b from-[#0d1525]/95 to-[#080d18]/80 hover:border-blue-400/[0.90] transition-all duration-300 h-full"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-200 flex items-center gap-1.5">
                      {label}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                    <span className="text-xs text-white/60 leading-relaxed">{desc}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-32 px-5 bg-[#060b13]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-blue-500/[0.50] p-7 sm:p-12 md:p-20 text-center"
            style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(37,99,235,0.12) 0%, rgba(11,11,11,0) 70%), linear-gradient(135deg, rgba(15,25,50,0.8) 0%, rgba(11,11,11,0.95) 100%)' }}
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-blue-600/10 blur-[100px] rounded-full" />
            <motion.h2 variants={fadeUp} className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
              {c.ctaTitle}
            </motion.h2>
            <motion.p variants={fadeUp} className="relative z-10 text-white/70 text-base leading-relaxed max-w-xl mx-auto mb-10">
              {c.ctaText}
            </motion.p>
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                data-testid="services-cta-btn"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] hover:scale-[1.03] text-sm"
              >
                {c.ctaButton}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
