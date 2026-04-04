import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'BigBacon',
    role: 'Marketing @ Pokewin.com',
    rating: 5,
    text: 'Quaticy is an awesome Discord developer! He builds everything we need quickly and perfectly. He always helps with any request, big or small. Super friendly and very reliable. I give him 5 bacons!',
  },
  {
    name: 'motha',
    role: 'Owner @ Pokewin.com',
    rating: 5,
    text: 'Quaticy did a really good job with the server. Everything is insanely clean and well put together — it’s organized in a way that makes it easy to navigate without feeling cluttered. The structure is solid, and you can tell a lot of thought went into how everything is laid out. Even the bot is actually useful, which a lot of servers don’t get right. Overall, it just feels polished and well-built.',
  },
  {
    name: 'Emad',
    role: 'Head of Community @ Betstrike.com',
    rating: 5,
    text: 'Quaticy is an amazing developer who delivers quick and produces great products always!',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-border'}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Client Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{review.name}</h3>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
