import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import HireForm from './HireForm';

export default function CommissionSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="commission" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Start a Project</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Tell me what you need and I'll build it for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 rounded-full px-8"
            >
              {showForm ? 'Close Form' : 'Hire Me'}
            </Button>
            <a href="https://discord.gg/pVWWBvn2" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary/30 bg-primary/5 hover:bg-primary/10 text-foreground gap-2 rounded-full px-6">
                <MessageCircle className="w-4 h-4 text-primary" /> Order via Discord
              </Button>
            </a>
          </div>

          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12"
            >
              <HireForm onClose={() => setShowForm(false)} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}