import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  User, Building2, Mail, Lock, Eye, EyeOff, 
  ArrowRight, Sparkles, ArrowLeft, LogIn
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { demoUsers } from '../data/mockData';

export default function LoginPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('creator');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [selectedDemo, setSelectedDemo] = useState(null);

  const handleDemoLogin = (user) => {
    setFormData({
      email: user.email,
      password: user.password,
    });
    setSelectedDemo(user);
    
    // Auto-login with demo account after a brief delay to show selection
    setTimeout(() => {
      if (demoUsers.creators.find(u => u.email === user.email)) {
        navigate('/creator-dashboard');
      } else if (demoUsers.organizations.find(u => u.email === user.email)) {
        navigate('/organization-dashboard');
      }
    }, 300);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    try {
      // Check creator accounts
      const creator = demoUsers.creators.find(
        user => user.email === formData.email && user.password === formData.password
      );
      
      if (creator) {
        navigate('/creator-dashboard');
        return;
      }
      
      // Check organization accounts
      const organization = demoUsers.organizations.find(
        user => user.email === formData.email && user.password === formData.password
      );
      
      if (organization) {
        navigate('/organization-dashboard');
        return;
      }
      
      // Invalid credentials - show error
      alert('Invalid credentials. Click a demo account below to auto-login.');
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />

      <div className="flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-6xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <LogIn className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-display text-2xl font-bold text-gray-900">Welcome Back</h1>
                  <p className="text-sm text-gray-600">Login to your Creative Launch account</p>
                </div>
              </div>

              {/* User Type Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab('creator')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-sm font-medium transition-all ${
                    activeTab === 'creator'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <User className="w-4 h-4" />
                  Creator
                </button>
                <button
                  onClick={() => setActiveTab('organization')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-sm font-medium transition-all ${
                    activeTab === 'organization'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  Organization
                </button>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-12 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <LogIn className="w-5 h-5" />
                  Login
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => navigate('/signup')}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Demo Accounts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center animate-pulse-slow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-gray-900">Demo Accounts</h2>
                  <p className="text-sm text-gray-600">Click any account to auto-fill login</p>
                </div>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'creator' ? (
                    <motion.div
                      key="creators"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-3"
                    >
                      {demoUsers.creators.map((creator, index) => (
                        <motion.button
                          key={creator.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleDemoLogin(creator)}
                          className={`w-full p-4 rounded-xl border transition-all text-left ${
                            selectedDemo?.id === creator.id
                              ? 'bg-purple-50 border-purple-300'
                              : 'bg-gray-50 border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                              {creator.avatar}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                              <p className="text-sm text-gray-600">{creator.role}</p>
                              <p className="text-xs text-gray-500 font-mono">{creator.email}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-gray-900">${creator.hourlyRate}/hr</p>
                              <p className="text-xs text-gray-500">⭐ {creator.rating}</p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="organizations"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-3"
                    >
                      {demoUsers.organizations.map((org, index) => (
                        <motion.button
                          key={org.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleDemoLogin(org)}
                          className={`w-full p-4 rounded-xl border transition-all text-left ${
                            selectedDemo?.id === org.id
                              ? 'bg-blue-50 border-blue-300'
                              : 'bg-gray-50 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                              {org.logo}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{org.name}</h3>
                              <p className="text-sm text-gray-600">{org.industry}</p>
                              <p className="text-xs text-gray-500 font-mono">{org.email}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-semibold text-gray-900">{org.size}</p>
                              <p className="text-xs text-gray-500">{org.activeProjects} projects</p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-2">🔐 Demo Credentials</p>
                <p className="text-xs text-gray-600">
                  All demo accounts use password: <span className="font-mono bg-gray-200 px-2 py-1 rounded">demo123</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
}
