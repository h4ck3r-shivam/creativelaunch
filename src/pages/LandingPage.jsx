import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Rocket, Sparkles, TrendingUp, Users, Zap, Shield, 
  ArrowRight, Play, BarChart3, Target, Globe, 
  Palette, Video, Camera, PenTool, Music, Code
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  const navigate = useNavigate();
  const [activeCreator, setActiveCreator] = useState(0);

  const creatorTypes = [
    { icon: Palette, name: 'Graphic Designers', count: 'Coming Soon' },
    { icon: Video, name: 'Video Editors', count: 'Coming Soon' },
    { icon: Camera, name: 'Photographers', count: 'Coming Soon' },
    { icon: PenTool, name: 'Illustrators', count: 'Coming Soon' },
    { icon: Music, name: 'Musicians', count: 'Coming Soon' },
    { icon: Code, name: 'UI/UX Designers', count: 'Coming Soon' },
  ];

  const features = [
    {
      icon: Target,
      title: 'AI-Powered Matching',
      description: 'Our Style Graphing™ technology analyzes creative aesthetics to find perfect matches for your brand.',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate invoicing, scheduling, and project management with intelligent AI workflows.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights on creator performance, audience engagement, and ROI metrics.',
      color: 'from-cyan-500 to-green-500',
    },
    {
      icon: Shield,
      title: 'Secure Collaboration',
      description: 'End-to-end encrypted workspaces with smart contracts and automated payments.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { value: 'Beta', label: 'Version 0.1' },
    { value: '500+', label: 'Waitlist Spots' },
    { value: 'Q3 2026', label: 'Expected Launch' },
    { value: 'Early', label: 'Access Only' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Beta Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white mb-8 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm font-mono font-semibold">BETA PREVIEW v0.1</span>
            </motion.div>

            {/* Alpha/Beta Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-300 mb-4"
            >
              <span className="text-xs font-mono text-yellow-800">🚧 Under Development - Join the Waitlist</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              The Future of Creative
              <br />
              <span className="text-gradient">Work is Coming.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              We're building the AI-powered platform that will transform how creators and organizations collaborate. 
              Be among the first to experience it.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => navigate('/waitlist')}
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center gap-3"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Join Waitlist
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-900 font-mono font-semibold text-base sm:text-lg hover:bg-white transition-all flex items-center gap-3 shadow-sm">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Watch Preview
              </button>
            </motion.div>

            {/* Limited Spots Notice */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-sm text-gray-500"
            >
              🔥 Only 500 early access spots available
            </motion.p>

            {/* Creator Types Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-20"
            >
              <p className="text-sm font-mono text-gray-500 mb-6 tracking-widest uppercase">For All Creative Professionals</p>
              <div className="flex flex-wrap justify-center gap-4">
                {creatorTypes.map((type, index) => (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-xl border border-gray-200 px-6 py-4 rounded-xl hover:bg-white hover:border-purple-200 transition-all cursor-pointer group shadow-sm"
                    onMouseEnter={() => setActiveCreator(index)}
                  >
                    <type.icon className={`w-6 h-6 ${activeCreator === index ? 'text-purple-600' : 'text-gray-400'} group-hover:text-purple-600 transition-colors mb-2`} />
                    <p className="text-gray-900 font-semibold">{type.name}</p>
                    <p className="text-sm text-gray-500">{type.count}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Beta Stats Section */}
      <section className="relative py-16 border-y border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-mono mb-4">
              🚀 LAUNCH TIMELINE
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-gray-600 font-mono text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-mono mb-4">
              🎯 FEATURE PREVIEW
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We're Building
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A sneak peek at the AI-powered features coming to Creative Launch. 
              Join the waitlist to be the first to try them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-2xl hover:shadow-lg hover:border-purple-300 transition-all group shadow-sm"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Graphing Section */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-purple-100/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-mono text-purple-600 mb-4 tracking-widest uppercase">Style Graphing™ Technology</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                AI That Understands Creative Style
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our proprietary Style Graphing™ engine analyzes thousands of data points to understand 
                aesthetic identity, creative patterns, and brand compatibility.
              </p>
              <ul className="space-y-4">
                {[
                  'Visual style analysis across 50+ dimensions',
                  'Audience demographic matching',
                  'Trend prediction and recommendation',
                  'Brand compatibility scoring',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center animate-pulse-slow">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-900 font-display text-2xl font-bold mb-2">AI Analysis</p>
                    <p className="text-gray-600 font-mono text-sm">Processing creative patterns...</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl blur-2xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Creative Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join thousands of creators and organizations already using Creative Launch.
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="px-10 py-5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center gap-3 mx-auto"
            >
              <Rocket className="w-5 h-5" />
              Get Started Free
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

function Brain({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}
