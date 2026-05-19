import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Run your creative business
            <br />
            like a studio.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Creative Launch is your AI-powered creative business co-pilot that handles bookings, 
            leads, projects and analytics — so creators spend their time creating, not chasing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => navigate('/waitlist')}
              className="px-8 py-4 rounded-lg bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Join the waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/platform')}
              className="px-8 py-4 rounded-lg border border-gray-300 text-gray-900 text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Explore the platform
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Built for every kind of creator */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-16"
          >
            Built for every kind of creator
          </motion.h2>
        </div>
      </section>

      {/* Creating is the easy part */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Creating is the easy part. Running the business breaks creators.
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">73%</div>
                <p className="text-gray-600">of creators spend more time on admin than craft</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">47%</div>
                <p className="text-gray-600">leads lost daily to slow inquiry replies</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">3.2x</div>
                <p className="text-gray-600">longer to scale without business systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* One platform. Every creative workflow. */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              One platform. Every creative workflow.
            </h2>
            <p className="text-xl text-gray-600">
              Modular, AI-native and beautifully designed. Use what you need, ignore the rest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Front Desk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate('/ai-front-desk')}
            >
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Front Desk</h3>
                <p className="text-gray-600 mb-4">
                  A 24/7 assistant that qualifies leads, answers FAQs, and books clients in your voice.
                </p>
                <button className="text-gray-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Creator Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => navigate('/dashboard')}
            >
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creator Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Earnings, projects, leads and bookings — one premium command center.
                </p>
                <button className="text-gray-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Portfolio Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group cursor-pointer"
              onClick={() => navigate('/portfolio-intelligence')}
            >
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  AI analyzes your work, finds your style, prices it, and matches ideal clients.
                </p>
                <button className="text-gray-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Smart Booking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group cursor-pointer"
              onClick={() => navigate('/booking')}
            >
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Booking</h3>
                <p className="text-gray-600 mb-4">
                  Availability, packages, deposits and confirmations on autopilot.
                </p>
                <button className="text-gray-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Team Workspace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group cursor-pointer"
              onClick={() => navigate('/team')}
            >
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team Workspace</h3>
                <p className="text-gray-600 mb-4">
                  Run your micro-studio with kanban, milestones and collaborative reviews.
                </p>
                <button className="text-gray-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Growth Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="group cursor-pointer"
              onClick={() => navigate('/analytics')}
            >
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Revenue, retention, and conversion metrics that actually move the needle.
                </p>
                <button className="text-gray-900 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built for creators section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built for creators, by someone who understands the chaos.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Creative Launch exists because talented creators should spend time creating — not managing admin, 
              chasing clients, or juggling scattered tools.
            </p>
            <button
              onClick={() => navigate('/about')}
              className="text-gray-900 font-medium flex items-center gap-2 mx-auto hover:gap-3 transition-all"
            >
              Read the full story
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20 space-y-8"
          >
            <div className="text-left p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-900 mb-4 italic">
                "It feels like having a manager, agent and assistant — all running quietly in the background."
              </p>
              <p className="text-sm text-gray-600">— Sarah Chen, Photographer</p>
            </div>
            <div className="text-left p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-900 mb-4 italic">
                "I booked 14 sessions in my first month using the AI front desk. I haven't replied to a DM since."
              </p>
              <p className="text-sm text-gray-600">— Marcus Rodriguez, Video Editor</p>
            </div>
            <div className="text-left p-6 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-900 mb-4 italic">
                "Finally a tool that doesn't feel like Salesforce. It actually understands creative work."
              </p>
              <p className="text-sm text-gray-600">— Emma Thompson, Designer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your craft deserves infrastructure.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be among the first creators to run their studio on Creative Launch.
            </p>
            <button
              onClick={() => navigate('/waitlist')}
              className="px-8 py-4 rounded-lg bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto"
            >
              Join the waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
