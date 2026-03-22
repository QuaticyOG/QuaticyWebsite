import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TWITCH_CHANNEL = 'quaticy';


export default function TwitchSection() {
  // For a real implementation, you'd check the Twitch API.
  // For now, we provide a toggle to demo both states.
  const [isLive, setIsLive] = useState(false);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Live Status</h2>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-6">
            <span className={`w-2.5 h-2.5 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <span className="text-sm text-muted-foreground">
              {isLive ? 'Currently Live' : 'Offline'}
            </span>
          </div>

          {/* Stream or offline banner */}
          <div className="rounded-xl overflow-hidden border border-border bg-card aspect-video">
            {isLive ? (
            <iframe
              src={`https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=localhost`}
              className="w-full h-full"
              allowFullScreen
              title="Twitch Stream"
            />
            ) : (
              <img
                src="/img/offline.png"
                alt="Quaticy Offline Banner"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
