import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, features, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(262,80%,60%,0.08)] transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}