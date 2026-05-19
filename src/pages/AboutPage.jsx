import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Target, Lightbulb, Heart, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Users,
      title: 'Creator-First',
      description: 'Every decision we make starts with "How does this help creators succeed?"'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on tools that actually move the needle for creative businesses.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'Pushing boundaries with AI to solve real-world creative business challenges.'
    }
  ];

  const stats = [
    { value: '50,000+', label: 'Active Creators' },
    { value: '2,500+', label: 'Organizations' },
    { value: '$125M+', label: 'Platform Revenue' },
    { value: '98%', label: 'Satisfaction Rate' }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: '👩‍💼',
      description: 'Former creative director turned entrepreneur. Passionate about empowering creators.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: '👨‍💻',
      description: 'AI/ML expert with 15+ years building scalable platforms for creative industries.'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Design',
      image: '👩‍🎨',
      description: 'Award-winning designer focused on creating intuitive tools for creative professionals.'
    }
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
                <span className="text-sm font-mono text-gray-600">OUR STORY</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Built for creators,
                <br />
                <span className="text-gradient">by creators</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Creative Launch exists because talented creators should spend time creating — not managing admin, 
                chasing clients, or juggling scattered tools.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <button
                  onClick={() => navigate('/signup')}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center gap-3"
                >
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
                <div className="mb-6">
                  <Heart className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">The Problem We're Solving</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    As creatives ourselves, we experienced the pain firsthand. The constant juggling between creating amazing work and running the business side of things.
                  </p>
                  <p>
                    We spent countless hours answering emails, managing bookings, tracking projects, and trying to grow our client base — all while trying to stay creative.
                  </p>
                  <p>
                    That's when we realized: what if AI could handle all the business stuff, so we could focus on what we love?
                  </p>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <p className="text-purple-700 text-center font-medium">
                    "Creative Launch is the platform we wish we had when we started."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Creative Launch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
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
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Join the Creator Revolution
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of the community that's changing how creative businesses operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/signup')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
              >
                Start Free Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-900 font-mono font-semibold text-lg hover:bg-white transition-all"
              >
                Contact Us
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
