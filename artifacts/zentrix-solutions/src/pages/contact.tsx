import React from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We will get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {t.contact.heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {t.contact.heroSubtitle}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="md:col-span-3 bg-card/30 p-8 rounded-2xl border border-border/50"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-white">{t.contact.form.name}</Label>
                    <Input id="name" required className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" data-testid="input-name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-white">{t.contact.form.email}</Label>
                    <Input id="email" type="email" required className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" data-testid="input-email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-white">{t.contact.form.phone}</Label>
                  <Input id="phone" type="tel" className="bg-background/50 border-border/50 focus-visible:ring-primary h-12" data-testid="input-phone" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-white">{t.contact.form.message}</Label>
                  <Textarea id="message" required className="bg-background/50 border-border/50 focus-visible:ring-primary min-h-[150px] resize-none" data-testid="input-message" />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto h-14 bg-primary hover:bg-primary/90 text-white rounded-xl text-lg mt-2" data-testid="btn-submit-contact">
                  {t.contact.form.send}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="md:col-span-2 flex flex-col gap-8"
            >
              <div className="bg-card/30 p-8 rounded-2xl border border-border/50 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-8">{t.contact.infoTitle}</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{t.contact.company}</p>
                      <p className="text-muted-foreground">{t.contact.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
