import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Server, Cog } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/services/ServiceCard';
import ReviewsSection from '@/components/services/ReviewsSection';
import CommissionSection from '@/components/services/CommissionSection';

const SERVICES = [
  {
    icon: Bot,
    title: 'Discord Bots',
    features: ['Custom commands', 'Automation workflows', 'Moderation systems', 'Event handlers & logging'],
  },
  {
    icon: Server,
    title: 'Server Setup',
    features: ['Clean layouts', 'Role systems & permissions', 'Channel structure', 'Onboarding flow'],
  },
  {
    icon: Cog,
    title: 'Custom Features',
    features: ['API integrations', 'Unique systems', 'Advanced requests', 'Full project scoping'],
  },
];

export default function Services() {
  useEffect(() => {
    // Handle hash scroll on mount
    if (window.location.hash === '#commission') {
      setTimeout(() => {
        document.getElementById('commission')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Services
          </h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Custom-built solutions for your Discord community
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} features={s.features} delay={i * 0.15} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* Commission */}
      <CommissionSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quaticy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}