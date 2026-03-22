import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TWITCH_CHANNEL = 'quaticy';

export default function TwitchSection() {
  const [isLive, setIsLive] = useState(null);

  useEffect(() => {
    const checkLive = async () => {
      try {
        const res = await fetch(`https://decapi.me/twitch/status/${TWITCH_CHANNEL}`);
        const text = await res.text();

        const lower = text.toLowerCase();

        // More reliable detection
        if (lower.includes("offline") || lower.includes("not live")) {
          setIsLive(false);
        } else if (text.length > 5) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }

      } catch (err) {
        console.error("Twitch check failed:", err);
        setIsLive(false);
      }
    };

    checkLive();

    // refresh every 60 seconds
    const interval = setInterval(checkLive, 60000);
    return () => clearInterval(interval);
  }, []);

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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Live Status
            </h2>
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isLive ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`}
            />
            <span className="text-sm text-muted-foreground">
              {isLive === null
                ? 'Checking...'
                : isLive
                ? 'Currently Live'
                : 'Offline'}
            </span>
          </div>

          {/* Stream or offline banner */}
          <div className="rounded-xl overflow-hidden border border-border bg-card aspect-video">
            {isLive ? (
              <iframe
                src={`https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=www.quaticy.com`}
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
