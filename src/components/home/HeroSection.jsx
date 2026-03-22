import React from 'react';
import { motion } from 'framer-motion';
import { Tv, PlayCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SKULL_IMG = 'https://media.base44.com/images/public/69beba365fff8eabc1a55cba/346071a58_generated_26392536.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Skull mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <img
            src="/img/homepagelogo.png"
            alt="My mascot"
            className="w-35 h-35 mx-auto rounded-2xl opacity-80 drop-shadow-[0_0_30px_hsl(262,80%,60%,0.3)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
        >
          Quaticy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground font-light tracking-wide"
        >
          Creator • Developer • Community Builder
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="https://twitch.tv/quaticy" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary/30 bg-primary/5 hover:bg-primary/10 text-foreground gap-2 rounded-full px-6">
              <Tv className="w-4 h-4 text-primary" /> Watch Live
            </Button>
          </a>
          <a href="https://youtube.com/@quaticy" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-accent/30 bg-accent/5 hover:bg-accent/10 text-foreground gap-2 rounded-full px-6">
              <PlayCircle className="w-4 h-4 text-accent" /> View Content
            </Button>
          </a>
          <a href="/services">
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 gap-2 rounded-full px-6">
              <Briefcase className="w-4 h-4" /> Services
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}