import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Server, ChevronLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import BetstrikeBot from '../img/Betstrike_Bot.png';
import BetstrikeServer from '../img/Betstrike_server.png';

const projects = [
  {
    type: 'bot',
    name: 'Betstrike Moderation',
    package: 'Bot Overlord',
    packageColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    description: 'A fully custom moderation and security bot built for a 2k+ member community. Features auto-mod, ticket system, leveling, and custom role management. (Still under development)',
    tags: ['Moderation', 'Tickets', 'Leveling', 'Auto-Mod'],
    image: BetstrikeBot,
  },
  {
    type: 'server',
    name: 'Betstrike Server',
    package: 'Server Overlord',
    url: 'https://discord.gg/betstrike',
    packageColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    description: 'A high-energy gambling community server built for 2k+ members, featuring cleanly organized channels, verified member roles, powerful bots, and a fully branded, engaging aesthetic.',
    tags: ['Automation', 'Branding', 'Roles', 'Bots'],
    image: BetstrikeServer,
  },
  {
    type: 'bot',
    name: 'EcoBot',
    package: 'Bot Forge',
    packageColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description: 'A versatile economy bot with a shop, currency system, leaderboard, and daily rewards — perfect for engagement-focused servers.',
    tags: ['Economy', 'Leaderboard', 'Shop', 'Rewards'],
    image: 'https://images.unsplash.com/photo-1622630998477-20aa696ef439?w=600&q=80',
  },
  {
    type: 'server',
    name: 'GameVault Community',
    package: 'Server Forge',
    packageColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description: 'A gaming community server featuring game-specific channels, rank roles, moderation bots, reaction roles, and a sleek dark theme.',
    tags: ['Gaming', 'Reaction Roles', 'Channels', 'Moderation'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80',
  },
  {
    type: 'bot',
    name: 'SparkBot',
    package: 'Bot Spark',
    packageColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    description: 'A lightweight starter bot with 3 custom commands, a moderation command, and clean embed responses — ideal for smaller growing servers.',
    tags: ['Commands', 'Embeds', 'Moderation'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    type: 'server',
    name: 'ArtisanSpace',
    package: 'Server Spark',
    packageColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    description: 'A clean, minimal art showcase server with organized gallery channels, artist roles, and a welcoming layout built for creative communities.',
    tags: ['Art', 'Gallery', 'Roles', 'Minimal'],
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&q=80',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Bots', value: 'bot' },
  { label: 'Servers', value: 'server' },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? projects : projects.filter(p => p.type === active);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            ✦ My Work
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">My</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of custom Discord bots and servers I've built for communities around the world.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                active === f.value
                  ? 'bg-purple-600/20 border-purple-500/40 text-purple-300'
                  : 'bg-white/[0.02] border-white/[0.07] text-gray-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {f.value === 'bot' && <Bot className="w-4 h-4" />}
              {f.value === 'server' && <Server className="w-4 h-4" />}
              {f.label}
            </button>
          ))}
        </motion.div>

{/* Grid */}
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filtered.map((project, i) => {
    const Card = (
      <motion.div
        key={project.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: i * 0.05 }}
        whileHover={{ y: -6, scale: project.url ? 1.02 : 1 }}
        className={`group relative bg-[#12121a] border border-white/[0.08] hover:border-purple-500/25 rounded-2xl overflow-hidden transition-all duration-300 ${
          project.url ? 'cursor-pointer' : ''
        }`}
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />

          {/* External link icon (only if clickable) */}
          {project.url && (
            <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-white/70" />
          )}

          {/* Type badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-xs text-gray-300 font-medium">
            {project.type === 'bot' ? (
              <Bot className="w-3.5 h-3.5 text-purple-400" />
            ) : (
              <Server className="w-3.5 h-3.5 text-blue-400" />
            )}
            {project.type === 'bot' ? 'Bot' : 'Server'}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-white font-bold text-lg leading-tight">
              {project.name}
            </h3>
            <span
              className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full border font-semibold uppercase tracking-wide ${project.packageColor}`}
            >
              {project.package}
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );

    // ✅ Only wrap with link if URL exists
    if (project.url) {
      return (
        <a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {Card}
        </a>
      );
    }

    return Card;
  })}
</div>
        </div>
      </div>
    </div>
  );
}



