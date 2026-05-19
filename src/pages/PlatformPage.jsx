import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, BarChart3, Brain, Calendar, Users, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PlatformPage() {
  const navigate = useNavigate();

  const modules = [
    {
      id: 'ai-front-desk',
      title: 'AI Front Desk',
      description: 'Conversational assistant that qualifies leads and books clients in your tone of voice.',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      path: '/organization-dashboard'
    },
    {
      id: 'creator-dashboard',
      title: 'Creator Dashboard',
      description: 'Premium command center for revenue, projects and clients.',
      icon: BarChart3,
      color: 'from-blue-600 to-cyan-600',
      path: '/creator-dashboard'
    },
    {
      id: 'portfolio-intelligence',
      title: 'Portfolio Intelligence',
      description: 'AI style graphing, pricing and ideal-client matching.',
      icon: Sparkles,
      color: 'from-purple-600 to-blue-600',
      path: '/creator-dashboard'
    },
    {
      id: 'smart-booking',
      title: 'Smart Booking',
      description: 'Availability, packages, deposits and confirmations on autopilot.',
      icon: Calendar,
      color: 'from-green-600 to-teal-600',
      path: '/project/1'
    },
    {
      id: 'team-workspace',
      title: 'Team Workspace',
      description: 'Run your micro-studio with shared kanban and project workflows.',
      icon: Users,
      color: 'from-orange-600 to-red-600',
      path: '/project/1'
    },
    {
      id: 'growth-analytics',
      title: 'Growth Analytics',
      description: 'Revenue, retention and conversion intelligence.',
      icon: TrendingUp,
      color: 'from-indigo-600 to-purple-600',
      path: '/creator-dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />
      
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
            One ecosystem.
            <br />
            Every workflow.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Six interconnected modules that make running a creative business feel as good as making the work.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <button
              onClick={() => navigate('/waitlist')}
              className="px-8 py-4 rounded-lg bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Join the waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => navigate(module.path)}
              >
                <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 hover:border-gray-300 transition-all h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <button className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Open demo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
