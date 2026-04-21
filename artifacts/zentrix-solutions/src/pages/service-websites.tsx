import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ServiceDetailPage from '@/components/ServiceDetailPage';

const ServiceWebsites = () => {
  const { t } = useTranslation();
  const data = t.servicePages.websites;
  return (
    <ServiceDetailPage
      data={data}
      pageTitle={`${data.h1} | ZentrixDigital`}
      backLabel={t.services.heroTitle}
      servicesLabel={t.services.heroTitle}
      contactLabel={t.home.ctaSecondary}
    />
  );
};

export default ServiceWebsites;
