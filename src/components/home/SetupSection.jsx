import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Mic, Keyboard, Cpu } from 'lucide-react';

const GEAR = [
  { icon: Cpu, label: 'PC', detail: 'ASUS ROG Strix GeForce RTX 4090 • AMD Ryzen 9 7950X3D • MSI MPG B650 EDGE • Corsair iCUE LINK H150i White • Corsair Vengeance RGB DDR5 6000MHz 64GB RAM • 2TB NVMe' },
  { icon: Mic, label: 'Microphone', detail: 'Røde NT-USB+' },
  { icon: Keyboard, label: 'Keyboard', detail: 'WOOTING 60HE+' },
  { icon: Monitor, label: 'Monitor', detail: 'Samsung Odyssey OLED G6' },
];

export default function SetupSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Setup</h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            I use a high-performance setup built for streaming, development, and content creation. Optimized for speed, clarity, and reliability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GEAR.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}