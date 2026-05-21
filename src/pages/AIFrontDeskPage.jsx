import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, MessageSquare, Clock, Shield, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AIFrontDeskPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Your AI assistant speaks in your brand voice and handles complex inquiries naturally.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a lead. Your AI front desk works around the clock, even while you sleep.'
    },
    {
      icon: Shield,
      title: 'Lead Qualification',
      description: 'Automatically qualifies leads based on your criteria and schedules qualified calls.'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Reduce response time from hours to seconds. Convert more leads with faster follow-up.'
    }
  ];

  const benefits = [
    '47% faster response times',
    '3x increase in qualified leads',
    '24/7 availability without burnout',
    'Consistent brand communication',
    'Automatic lead qualification'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          
          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-40 right-32 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute bottom-32 left-40 w-5 h-5 bg-pink-500/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <div className="absolute bottom-48 right-20 w-4 h-4 bg-purple-500/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
          <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-blue-500/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
          <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-pink-500/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-purple-200 mb-8 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-mono text-gray-600">AI-POWERED ASSISTANT</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Your AI Front Desk
                <br />
                <span className="text-gradient">Never Miss a Lead</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                A 24/7 conversational assistant that qualifies leads, answers FAQs, and books clients in your exact brand voice.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-3 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <button
                  onClick={() => navigate('/organization-dashboard')}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center gap-3"
                >
                  Try AI Front Desk
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Live Demo</h3>
                  <p className="text-gray-600">See how AI Front Desk handles customer inquiries</p>
                </div>

                {/* Two Chat Examples Side by Side */}
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Example 1: Skincare Brand Photographer */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-5 border-2 border-purple-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold shadow-md hover:shadow-lg transition-all"
                        >
                          💄 Skincare Brand
                        </motion.div>
                      </div>
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.4 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-md animate-pulse">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white rounded-xl p-3 max-w-[85%] shadow-sm border border-purple-100">
                            <p className="text-sm text-gray-900 font-medium">Hi! I'm here to help. What type of creative project are you looking for?</p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                          className="flex items-start gap-2 justify-end"
                        >
                          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-3 max-w-[85%] shadow-md hover:shadow-lg transition-all">
                            <p className="text-sm font-medium">Need a minimalist photographer for luxury skincare brand launch in London</p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6, duration: 0.4 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-md animate-pulse">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white rounded-xl p-3 max-w-[85%] shadow-sm border border-purple-100">
                            <p className="text-sm text-gray-900 font-semibold mb-2">Perfect! I found Sarah Mitchell - she shoots for British Vogue & Harrods:</p>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-200">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                  SM
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-gray-900">Sarah Mitchell</p>
                                  <p className="text-xs text-purple-600">Photographer • Notting Hill</p>
                                </div>
                              </div>
                              <div className="space-y-1.5">
                                <p className="text-sm text-purple-800 font-medium">💰 £120/hour</p>
                                <p className="text-sm text-purple-800 font-medium">🎯 98% match</p>
                                <p className="text-sm text-purple-800 font-medium">✨ British Vogue, Harrods, Burberry</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Example 2: Tattoo Artist */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 border-2 border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-4">
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6, duration: 0.3 }}
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold shadow-md hover:shadow-lg transition-all"
                        >
                          🎨 Tattoo Studio
                        </motion.div>
                      </div>
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-md animate-pulse">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white rounded-xl p-3 max-w-[85%] shadow-sm border border-blue-100">
                            <p className="text-sm text-gray-900 font-medium">Hi! I'm here to help. What type of creative project are you looking for?</p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6, duration: 0.4 }}
                          className="flex items-start gap-2 justify-end"
                        >
                          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-3 max-w-[85%] shadow-md hover:shadow-lg transition-all">
                            <p className="text-sm font-medium">Looking for a tattoo artist for my Bristol studio - specialising in British wildlife designs</p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7, duration: 0.4 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-md animate-pulse">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white rounded-xl p-3 max-w-[85%] shadow-sm border border-blue-100">
                            <p className="text-sm text-gray-900 font-semibold mb-2">Great match! Emma Wilson specialises in British countryside illustrations:</p>
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 border border-blue-200">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                  EW
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-gray-900">Emma Wilson</p>
                                  <p className="text-xs text-blue-600">Illustrator • Bristol</p>
                                </div>
                              </div>
                              <div className="space-y-1.5">
                                <p className="text-sm text-blue-800 font-medium">💰 £65/hour</p>
                                <p className="text-sm text-blue-800 font-medium">🎯 93% match</p>
                                <p className="text-sm text-blue-800 font-medium">✨ Bloomsbury, National Trust, Penguin</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <p className="text-sm text-purple-700 text-center">
                    <span className="font-semibold">Book a Demo:</span> Schedule a 15-minute call to see AI Front Desk in action
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Search Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              AI-Powered Creator Search
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Describe your ideal creator using natural language and let our AI find the perfect match
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* Example 1 - Video Editor for Documentary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-5 border-2 border-purple-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    🎬 Documentary
                  </motion.div>
                </div>
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="bg-white rounded-xl p-3 shadow-sm border border-purple-100"
                  >
                    <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">Search Query:</p>
                    <p className="text-sm text-gray-900 font-semibold leading-relaxed">"Need video editor for BBC Three documentary about Manchester's creative revival"</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-md animate-pulse">
                          JW
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">James Whitmore</p>
                          <p className="text-xs text-purple-600">Video Production • Manchester</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        91%
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600">💰</span>
                        <p className="text-sm text-purple-800 font-medium">£85/hour • MediaCityUK</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600">📺</span>
                        <p className="text-sm text-purple-800 font-medium">BBC Three, Manchester United FC</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600">🎥</span>
                        <p className="text-sm text-purple-800 font-medium">RED Komodo 6K, DaVinci Resolve</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Example 2 - UI/UX Designer for Fintech */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 border-2 border-blue-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    💻 Fintech
                  </motion.div>
                </div>
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="bg-white rounded-xl p-3 shadow-sm border border-blue-100"
                  >
                    <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">Search Query:</p>
                    <p className="text-sm text-gray-900 font-semibold leading-relaxed">"Need UI/UX designer with fintech experience to redesign business banking app for UK SMEs"</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-md animate-pulse">
                          DC
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">David Chen</p>
                          <p className="text-xs text-blue-600">UI/UX Designer • London</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        94%
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">💰</span>
                        <p className="text-sm text-blue-800 font-medium">£80/hour • Old Street Tech City</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">🏦</span>
                        <p className="text-sm text-blue-800 font-medium">Starling Bank, Monzo, NHS Digital</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">✅</span>
                        <p className="text-sm text-blue-800 font-medium">GDS Certified, WCAG 2.1 Expert</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/organization-dashboard')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center gap-3 mx-auto"
            >
              Try AI Search
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Automate Client Acquisition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lead qualification to booking, our AI handles the entire client journey so you can focus on creating.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <feature.icon className="w-8 h-8 text-purple-600 relative z-10" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Ready to Never Miss a Lead Again?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of creators who are automating their client acquisition with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/organization-dashboard')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/pricing')}
                className="px-8 py-4 rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-900 font-mono font-semibold text-lg hover:bg-white hover:shadow-lg transition-all"
              >
                View Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
