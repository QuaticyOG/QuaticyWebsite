import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Server, Sparkles, Zap, Shield, Users, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sidebarButtons = [
    { icon: Bot, label: 'Get Your Bot', href: createPageUrl('GetYourBot'), isPage: true },
    { icon: Server, label: 'Order a Server', href: createPageUrl('OrderServer'), isPage: true },
    { icon: Sparkles, label: 'View Services', href: '#services' },
  ];

  const services = [
    {
      title: 'Custom Discord Bots',
      description: 'Powerful, tailored automation built specifically for your community. From moderation to engagement tools, I create bots that work exactly how you need them.',
      icon: Bot,
      features: ['Custom Commands', 'Auto-Moderation', 'Music & Entertainment', 'API Integrations'],
      gradient: 'from-purple-500/20 to-blue-500/20',
      glowColor: 'purple',
    },
    {
      title: 'Professional Server Setup',
      description: 'Transform your Discord server into a polished, organized community hub. I handle channels, roles, permissions, and aesthetics.',
      icon: Server,
      features: ['Channel Architecture', 'Role Hierarchy', 'Custom Branding', 'Security Setup'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      glowColor: 'blue',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-900/10 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Fixed Left Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 shadow-2xl">
          <div className="flex flex-col gap-3">
            {sidebarButtons.map((button, index) => (
              <motion.div
                key={button.label}
                onClick={() => button.isPage ? window.location.href = button.href : document.querySelector(button.href)?.scrollIntoView({ behavior: 'smooth' })}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.08] hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl transition-all duration-300" />
                
                <div className="relative z-10 p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                  <button.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                
                <span className="relative z-10 text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {button.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.aside>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.05]"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Quaticy
          </span>
          <div className="flex gap-2">
            {sidebarButtons.map((button) => (
              <Link
                key={button.label}
                to={button.isPage ? button.href : undefined}
                href={!button.isPage ? button.href : undefined}
                className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] transition-all"
              >
                <button.icon className="w-5 h-5 text-purple-400" />
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 lg:pl-56 px-6 lg:px-12 pt-24 lg:pt-0">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              <Star className="w-4 h-4 fill-purple-400" />
              Premium Discord Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Custom Discord Bots
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              & Professional Server Setup
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            Built by <span className="text-purple-400 font-semibold">Quaticy</span> — tailored automation, 
            clean server design, and powerful features to help your community grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <Link to={createPageUrl('Portfolio')}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] font-semibold text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-20 pt-10 border-t border-white/[0.05]"
          >
            {[
              { value: '5+', label: 'Bots Delivered' },
              { value: '10+', label: 'Servers Setup' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                My Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything you need to build and grow your Discord community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                <div className="relative h-full bg-[#12121a] border border-white/[0.08] rounded-2xl p-8 hover:border-white/[0.15] transition-all duration-300 overflow-hidden">
                  {/* Card Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} border border-white/[0.08] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.glowColor === 'purple' ? 'text-purple-400' : 'text-blue-400'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <Zap className="w-4 h-4 text-purple-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
<Link to={service.title === 'Custom Discord Bots' ? createPageUrl('GetYourBot') : createPageUrl('OrderServer')} className="flex items-center gap-2 text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
  Learn More
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Choose Quaticy?
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: 'Secure & Reliable', desc: 'Built with security best practices and 99.9% uptime' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
              { icon: Users, title: 'Fast Support', desc: 'Dedicated to help you every step of the way' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 lg:py-32 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                What Clients Say
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Real feedback from real communities</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: 'BigBacon',
                avatar: 'https://cdn.discordapp.com/avatars/285551301591564288/a_618bbd87cf9844e3b3926d98ad4b80cf.gif?size=512',
                stars: 5,
                text: 'Quaticy built us a fully custom moderation bot in just 2 days. Super clean code, easy to use, and exactly what we asked for. Highly recommend!',
                tags: [
                  { label: 'Server Overlord', color: 'bg-purple-500/10 border-purple-500/20 text-purple-400' },
                  { label: 'Bot Overlord', color: 'bg-purple-500/10 border-purple-500/20 text-purple-400' },
                ],
                tagColor: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
                borderHover: 'hover:border-purple-500/20',
                avatarBorder: 'border-purple-500/30',
                bigClient: { label: 'betstrike.com', url: 'https://betstrike.com' },
              },
              {
                name: 'Maya K.',
                avatar: 'https://i.pravatar.cc/150?img=47',
                stars: 5,
                text: 'Our server went from a mess to a professional-looking hub overnight. The channel organization and role setup is perfect. 10/10 service.',
                tag: 'Server Overlord',
                tagColor: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
                borderHover: 'hover:border-purple-500/20',
                avatarBorder: 'border-purple-500/30',
              },
              {
                name: 'Jordan T.',
                avatar: 'https://i.pravatar.cc/150?img=32',
                stars: 4,
                text: 'Got the Bot Spark package just to test things out — blown away by the quality. Already upgrading to Overlord. Fast delivery and great communication.',
                tag: 'Bot Spark',
                tagColor: 'bg-green-500/10 border-green-500/20 text-green-400',
                borderHover: 'hover:border-green-500/20',
                avatarBorder: 'border-green-500/30',
              },
              {
                name: 'Sam D.',
                avatar: 'https://i.pravatar.cc/150?img=57',
                stars: 5,
                text: "Ticket system, leveling, reaction roles — all set up perfectly. Quaticy really knows Discord inside out. Our community loves the new server.",
                tag: 'Server Forge',
                tagColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
                borderHover: 'hover:border-blue-500/20',
                avatarBorder: 'border-blue-500/30',
              },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative bg-[#12121a] border border-white/[0.07] ${review.borderHover} rounded-2xl p-6 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className={`w-12 h-12 rounded-full object-cover border-2 ${review.avatarBorder}`}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold text-sm">{review.name}</p>
                      {review.bigClient && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 font-semibold uppercase tracking-wide">
                          ⭐ Big Client
                        </span>
                      )}
                    </div>
                    {review.bigClient && (
                      <a href={review.bigClient.url} target="_blank" rel="noopener noreferrer" className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors">
                        {review.bigClient.label}
                      </a>
                    )}
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s < review.stars ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-700 text-gray-700'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-1">
                    {(review.tags || [{ label: review.tag, color: review.tagColor }]).map((t) => (
                      <span key={t.label} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${t.color}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.05] py-8">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Quaticy
            </span>
            <p className="text-gray-500 text-sm">
              © 2026 Quaticy. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
