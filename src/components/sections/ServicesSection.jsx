import { memo } from 'react';
import ServiceCard from '@/components/cards/ServiceCard';
import StatsCard from '@/components/cards/StatsCard';
import { SERVICES } from '@/constants';

const ServicesSection = memo(() => (
  <section id="services" className="min-h-screen py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 text-white">What We Do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {SERVICES.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
      <StatsCard />
    </div>
  </section>
));

ServicesSection.displayName = 'ServicesSection';

export default ServicesSection;