import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who I Am</h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm Quaticy — a developer and creator focused on building custom Discord bots and clean, functional servers. I also create content and stream while working on projects and helping communities grow.
            </p>
            <p className="text-foreground/80">
              If you're looking for custom tools or a professional server setup, check out my services.
            </p>
          </div>

          <Link to="/services" className="inline-block mt-8">
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 gap-2 rounded-full px-6">
              View Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}