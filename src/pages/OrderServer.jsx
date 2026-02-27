import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Shield, Users, Settings, Star, ArrowRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import emailjs from '@emailjs/browser';

const features = [
  { icon: Server, title: 'Server Creation & Layout', desc: 'Every package includes full server creation with a clean layout, rules channel, and welcome message.' },
  { icon: Zap, title: 'Channel Setup', desc: 'Basic channel setup on Spark, advanced channel organization and categories on Forge & Overlord.' },
  { icon: Users, title: 'Roles & Reaction Roles', desc: 'Basic roles on Spark, with reaction roles and full permission tuning on Forge & Overlord.' },
  { icon: Shield, title: 'Moderation & Auto-Mod', desc: 'Moderation bot setup and auto-mod configuration included in Server Forge and Server Overlord.' },
  { icon: Settings, title: 'Ticket & Level Systems', desc: 'Ticket system, level system, full bot integrations, and server optimization — exclusive to Server Overlord.' },
  { icon: Star, title: 'Priority Support', desc: '1 revision on Spark, 2 on Forge, plus priority support and fast delivery on Server Overlord.' },
];

export default function OrderServer() {
  const [form, setForm] = useState({ name: '', discord: '', email: '', serverType: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        discord: form.discord,
        email: form.email,
        serverType: form.serverType,
        description: form.description,
        reply_to: form.email,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitted(true);
  } catch (err) {
    console.error("Email failed:", err);
    alert("Failed to send order. Check console.");
  }
};

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[128px]" />
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
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            UPDATE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Order a
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Custom Server
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell me your vision and I'll build a polished, organized server tailored to your community — from clean layouts to fully custom setups.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-center mb-10 text-white">What I Can Set Up</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/25 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-center mb-10 text-white">Pricing</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Basic */}
            <motion.div whileHover={{ y: -6 }} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-[#12121a] border border-white/[0.08] rounded-2xl p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block"></span>
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">Basic</span>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">$15</span>
                </div>
                <p className="text-sm text-green-300 font-semibold mb-1">⚡ Server Spark</p>
                <p className="text-xs text-gray-500 mb-6">A clean starter server to get your community going</p>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {['Server creation', 'Basic channel setup', 'Basic roles', 'Rules channel', 'Welcome message', 'Clean layout', '2-day delivery', '1 revision'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-green-400 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#order" className="block text-center py-3 rounded-xl border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition-all">
                  Order Now
                </a>
              </div>
            </motion.div>

            {/* Standard */}
            <motion.div whileHover={{ y: -6 }} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-lg opacity-60 transition-all duration-500" />
              <div className="relative h-full bg-[#12121a] border border-blue-500/30 rounded-2xl p-7 flex flex-col">
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-semibold uppercase tracking-widest">
                  Popular
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block"></span>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Standard</span>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">$39</span>
                </div>
                <p className="text-sm text-blue-300 font-semibold mb-1">🔥 Server Forge</p>
                <p className="text-xs text-gray-500 mb-6">A powerful, well-structured server built to grow</p>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {['Everything in Basic', 'Advanced channel organization', 'Moderation bot setup', 'Reaction roles', 'Auto-mod setup', 'Permission tuning', '3-day delivery', '2 revisions'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-blue-400 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#order" className="block text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-500/20">
                  Order Now
                </a>
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div whileHover={{ y: -6 }} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative h-full bg-[#12121a] border border-white/[0.08] rounded-2xl p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block"></span>
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">Premium</span>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">$79</span>
                </div>
                <p className="text-sm text-purple-300 font-semibold mb-1">👑 Server Overlord</p>
                <p className="text-xs text-gray-500 mb-6">The ultimate fully-custom Discord server</p>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {['Everything in Standard', 'Fully customized server design', 'Ticket system', 'Level system', 'Advanced permissions', 'Full bot integrations', 'Server optimization', 'Priority support', '5-day delivery'].map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-purple-400 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#order" className="block text-center py-3 rounded-xl border border-purple-500/30 text-purple-400 font-semibold text-sm hover:bg-purple-500/10 transition-all">
                  Order Now
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Order Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          id="order"
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl" />
            <div className="relative bg-[#12121a] border border-white/[0.08] rounded-3xl p-8 lg:p-10">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-2">Order Your Server</h2>
                  <p className="text-gray-400 text-sm mb-8">Fill in the details below and I'll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Discord Username</label>
                        <input
                          name="discord"
                          required
                          value={form.discord}
                          onChange={handleChange}
                          placeholder="username#0000"
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Server Package</label>
                      <select
                        name="serverType"
                        required
                        value={form.serverType}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm appearance-none"
                      >
                        <option value="" disabled className="bg-[#12121a]">Select a package...</option>
                        <option value="spark" className="bg-[#12121a]">⚡ Server Spark — $15</option>
                        <option value="forge" className="bg-[#12121a]">🔥 Server Forge — $39</option>
                        <option value="overlord" className="bg-[#12121a]">👑 Server Overlord — $79</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Describe Your Server</label>
                      <textarea
                        name="description"
                        required
                        rows={5}
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Tell me about your community, the theme, what channels you want, any specific features, etc..."
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Submit Order
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-green-500/10 border border-green-500/20 mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Order Received!</h3>
                  <p className="text-gray-400 mb-8">
                    Thanks for reaching out! I'll review your request and get back to you on Discord or email shortly.
                  </p>
                  <Link to={createPageUrl('Home')}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="px-8 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-all"
                    >
                      Back to Home
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
