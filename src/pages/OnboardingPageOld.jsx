import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, User, Building2, Palette, Briefcase, 
  Sparkles, CheckCircle, ArrowLeft, Mail, Lock, UserPlus
} from 'lucide-react';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
  });

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
      icon: Briefcase,
      title: 'I\'m an Organization',
      description: 'Startups, brands, agencies, and enterprises looking to hire talent',
      color: 'from-blue-600 to-cyan-600',
      hover: 'hover:shadow-blue-500/25',
    },
  ];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setTimeout(() => setStep(2), 300);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate login/onboarding
    if (selectedRole === 'creator') {
      navigate('/creator-dashboard');
    } else {
      navigate('/organization-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold transition-all ${
                  step >= s
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-500'
                }`}
              >
                {step > s ? <CheckCircle className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-0.5 transition-all ${
                    step > s ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-purple-200 mb-6 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-mono text-gray-600">Welcome to Creative Launch</span>
                </motion.div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  How will you use Creative Launch?
                </h1>
                <p className="text-xl text-gray-600">
                  Select your role to personalize your experience
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {roles.map((role) => (
                  <motion.button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-2xl text-left transition-all hover:shadow-lg hover:border-purple-300 group shadow-sm`}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <role.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">{role.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{role.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-purple-400 font-mono text-sm font-semibold">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 sm:p-12 rounded-3xl max-w-2xl mx-auto shadow-sm">
                <div className="text-center mb-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    selectedRole === 'creator' ? 'from-purple-600 to-pink-600' : 'from-blue-600 to-cyan-600'
                  } flex items-center justify-center mx-auto mb-6`}>
                    {selectedRole === 'creator' ? <Palette className="w-8 h-8 text-white" /> : <Briefcase className="w-8 h-8 text-white" />}
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">
                    Create your account
                  </h2>
                  <p className="text-gray-600">
                    {selectedRole === 'creator' ? 'Join thousands of creators building their business' : 'Start hiring world-class creative talent'}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-mono font-semibold text-gray-500 mb-2">
                      FULL NAME
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-mono font-semibold text-gray-500 mb-2">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-mono font-semibold text-gray-500 mb-2">
                      PASSWORD
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                        placeholder="Create a strong password"
                        required
                      />
                    </div>
                  </div>

                  {selectedRole === 'organization' && (
                    <div>
                      <label className="block text-sm font-mono font-semibold text-gray-500 mb-2">
                        COMPANY NAME
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                          placeholder="Your company name"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-3"
                  >
                    <UserPlus className="w-5 h-5" />
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-12 rounded-3xl max-w-lg mx-auto shadow-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
                  Account Created!
                </h2>
                <p className="text-gray-600 mb-8">
                  Welcome to Creative Launch. Setting up your dashboard...
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
