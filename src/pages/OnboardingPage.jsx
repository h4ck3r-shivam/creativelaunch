import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, User, Building2, Palette, Briefcase, 
  Sparkles, CheckCircle, ArrowLeft, LogIn, UserPlus
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'creator',
      icon: Palette,
      title: 'I\'m a Creator',
      description: 'Graphic designers, photographers, video editors, and creative professionals',
      color: 'from-purple-600 to-pink-600',
      hover: 'hover:shadow-purple-500/25',
    },
    {
      id: 'organization',
      icon: Building2,
      title: 'Find my Fit',
      description: 'Companies, agencies, and businesses looking for creative talent',
      color: 'from-blue-600 to-cyan-600',
      hover: 'hover:shadow-blue-500/25',
    },
  ];

  const features = [
    { icon: Sparkles, title: 'AI-Powered Matching', description: 'Smart algorithm connects you with the perfect opportunities' },
    { icon: Briefcase, title: 'Project Management', description: 'Streamlined workflows and collaboration tools' },
    { icon: CheckCircle, title: 'Verified Profiles', description: 'Trust and quality built into every connection' },
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setTimeout(() => {
      if (role === 'creator') {
        navigate('/creator-dashboard');
      } else {
        navigate('/organization-dashboard');
      }
    }, 500);
  };

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
                <span className="text-sm font-mono text-gray-600">JOIN 50,000+ CREATORS</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Launch Your Creative
                <br />
                <span className="text-gradient">Career Today</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Connect with world-class opportunities, showcase your portfolio, and grow your creative business with AI-powered tools.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-4 mb-12"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Login/Signup Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => navigate('/login')}
                  className="px-6 py-3 rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-900 font-mono font-semibold hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Role Selection */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Get Started</h2>
                  <p className="text-gray-600">Choose your path to join Creative Launch</p>
                </div>

                <div className="space-y-4">
                  {roles.map((role) => (
                    <motion.button
                      key={role.id}
                      onClick={() => handleRoleSelect(role.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full p-6 rounded-2xl border-2 transition-all ${
                        selectedRole === role.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}>
                          <role.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-display text-lg font-bold text-gray-900 mb-1">
                            {role.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    <span className="font-semibold">Quick Start:</span> Select your role to explore the platform, or create an account to unlock all features.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
