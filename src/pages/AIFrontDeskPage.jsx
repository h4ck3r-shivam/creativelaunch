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
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Example 1: Skincare Brand Photographer */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-center mb-3">
                      <span className="text-xs font-mono text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Skincare Brand</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-3 h-3 text-purple-600" />
                        </div>
                        <div className="bg-white rounded-lg p-2 max-w-[85%]">
                          <p className="text-xs text-gray-900">Hi! I'm here to help. What type of creative project are you looking for?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 justify-end">
                        <div className="bg-purple-600 text-white rounded-lg p-2 max-w-[85%]">
                          <p className="text-xs">Need a minimalist photographer for luxury skincare brand launch in London</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-3 h-3 text-purple-600" />
                        </div>
                        <div className="bg-white rounded-lg p-2 max-w-[85%]">
                          <p className="text-xs text-gray-900 mb-1">Perfect! I found Sarah Mitchell - she shoots for British Vogue & Harrods:</p>
                          <div className="bg-purple-50 rounded p-2 mt-1">
                            <p className="text-xs text-purple-700">• Notting Hill based</p>
                            <p className="text-xs text-purple-700">• £120/hour</p>
                            <p className="text-xs text-purple-700">• 98% match score</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Example 2: Tattoo Artist */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="text-center mb-3">
                      <span className="text-xs font-mono text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Tattoo Studio</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-3 h-3 text-blue-600" />
                        </div>
                        <div className="bg-white rounded-lg p-2 max-w-[85%]">
                          <p className="text-xs text-gray-900">Hi! I'm here to help. What type of creative project are you looking for?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 justify-end">
                        <div className="bg-blue-600 text-white rounded-lg p-2 max-w-[85%]">
                          <p className="text-xs">Looking for a tattoo artist for my Bristol studio - specialising in British wildlife designs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-3 h-3 text-blue-600" />
                        </div>
                        <div className="bg-white rounded-lg p-2 max-w-[85%]">
                          <p className="text-xs text-gray-900 mb-1">Great match! Emma Wilson specialises in British countryside illustrations:</p>
                          <div className="bg-blue-50 rounded p-2 mt-1">
                            <p className="text-xs text-blue-700">• Bristol based</p>
                            <p className="text-xs text-blue-700">• £65/hour</p>
                            <p className="text-xs text-blue-700">• 93% match score</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
              <button
                onClick={() => navigate('/organization-dashboard')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/pricing')}
                className="px-8 py-4 rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-900 font-mono font-semibold text-lg hover:bg-white transition-all"
              >
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
