import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, DollarSign, Users, Briefcase, Calendar, 
  FileText, MessageSquare, Settings, LogOut, Sparkles,
  BarChart3, PieChart, Activity, Target, ArrowUpRight,
  Clock, CheckCircle, AlertCircle, Play, Pause, Plus, Palette
} from 'lucide-react';
import { creators, aiRecommendations } from '../data/mockData';

export default function CreatorDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Safety check for creator data
  const creator = creators && creators.length > 0 ? creators[0] : null;
  
  // If no creator data, show error state
  if (!creator) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to load dashboard</h2>
          <p className="text-gray-600 mb-6">Creator data not found. Please try logging in again.</p>
          <button 
            onClick={() => navigate('/login')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', icon: BarChart3, label: 'Overview' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'style', icon: Sparkles, label: 'Style Graphing™' },
    { id: 'clients', icon: Users, label: 'Clients' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
  ];

  const quickStats = [
    { label: 'Total Revenue', value: '$125,000', change: '+12%', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Projects', value: '5', change: '+2', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
    { label: 'Total Clients', value: '18', change: '+3', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Avg. Project Value', value: '$3,676', change: '+8%', icon: TrendingUp, color: 'from-orange-500 to-red-500' },
  ];

  const recentProjects = [
    { id: 1, name: 'TechFlow Brand Identity', client: 'TechFlow Inc', status: 'In Progress', progress: 65, budget: 15000, deadline: '2024-03-15' },
    { id: 2, name: 'Eco Packaging Design', client: 'GreenBox', status: 'Review', progress: 90, budget: 8000, deadline: '2024-02-28' },
    { id: 3, name: 'App UI Redesign', client: 'PayFlow', status: 'In Progress', progress: 45, budget: 20000, deadline: '2024-04-01' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {creator?.avatar || '?'}
              </div>
              <div>
                <h1 className="font-display font-bold text-gray-900 text-lg">{creator?.name || 'Creator'}</h1>
                <p className="text-sm text-gray-600">{creator?.role || 'Creative Professional'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="p-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="flex items-center gap-1 text-green-400 text-sm font-mono font-semibold">
                      <ArrowUpRight className="w-4 h-4" />
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-display font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Portfolio Intelligence */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-sm p-6 rounded-2xl mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-gray-900">Portfolio Intelligence</h2>
                  <p className="text-sm text-gray-600">AI analyzes your work, finds your style, and matches ideal clients</p>
                </div>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6 hover:border-purple-400 transition-colors cursor-pointer bg-gray-50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Upload Your Portfolio</h3>
                <p className="text-sm text-gray-600 mb-4">Drag and drop images or click to browse</p>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-mono font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  Choose Files
                </button>
              </div>

              {/* AI Analysis Results */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Palette className="w-4 h-4 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">Style Analysis</h4>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Dominant style detected:</p>
                  <p className="text-sm font-semibold text-purple-700">Minimalist & Clean</p>
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Consistency</span>
                      <span className="text-purple-700 font-semibold">94%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600" style={{width: '94%'}} />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">Pricing Insights</h4>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Recommended rate:</p>
                  <p className="text-sm font-semibold text-blue-700">$85-120/hr</p>
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Market position</span>
                      <span className="text-blue-700 font-semibold">Premium</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" style={{width: '78%'}} />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                      <Target className="w-4 h-4 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">Ideal Clients</h4>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Best match industries:</p>
                  <p className="text-sm font-semibold text-green-700">Tech & Fashion</p>
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Match quality</span>
                      <span className="text-green-700 font-semibold">92%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-600" style={{width: '92%'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-sm p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-gray-900">AI Recommendations</h2>
                  <p className="text-sm text-gray-600">Personalized insights for your creative business</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {aiRecommendations.map((rec, index) => (
                  <motion.div
                    key={rec.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                      <span className="text-xs font-mono text-purple-700 bg-purple-100 px-2 py-1 rounded-full">
                        {rec.confidence}% match
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{rec.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-sm p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-gray-900">Recent Projects</h2>
                    <p className="text-sm text-gray-600">Track your active work</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-mono text-purple-600 hover:text-purple-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  New Project
                </button>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                        <p className="text-sm text-gray-600">{project.client}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        project.status === 'In Progress' 
                          ? 'bg-blue-500/10 text-blue-400' 
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500">Progress</span>
                          <span className="text-xs font-mono text-gray-900">{project.progress}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono text-gray-900">${project.budget.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">Budget</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'style' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Style Graphing™ Engine */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center animate-pulse-slow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900">Style Graphing™ Engine</h2>
                  <p className="text-sm text-gray-600">AI-powered analysis of your creative aesthetic identity</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <div className="aspect-square max-w-md mx-auto">
                  <div className="relative w-full h-full">
                    {/* Background circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[20, 40, 60, 80, 100].map((size) => (
                        <div
                          key={size}
                          className="absolute border border-gray-200 rounded-full"
                          style={{ width: `${size}%`, height: `${size}%` }}
                        />
                      ))}
                    </div>
                    
                    {/* Radar Chart Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      {/* Axis lines */}
                      <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="85" y2="30" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="85" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="50" y2="90" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="15" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                      <line x1="50" y1="50" x2="15" y2="30" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                      
                      {/* Data polygon */}
                      <motion.polygon
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        points="50,12 82,32 82,68 50,88 18,68 18,32"
                        fill="url(#gradient)"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                      />
                      
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#7c3aed" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Labels */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-xs font-mono text-gray-600">Minimalism</div>
                    <div className="absolute top-1/4 right-0 translate-x-2 text-xs font-mono text-gray-600">Boldness</div>
                    <div className="absolute bottom-1/4 right-0 translate-x-2 text-xs font-mono text-gray-600">Color Harmony</div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 text-xs font-mono text-gray-600">Innovation</div>
                    <div className="absolute bottom-1/4 left-0 -translate-x-2 text-xs font-mono text-gray-600">Consistency</div>
                    <div className="absolute top-1/4 left-0 -translate-x-2 text-xs font-mono text-gray-600">Originality</div>
                  </div>
                </div>

                {/* Style Metrics */}
                <div className="space-y-6">
                  {Object.entries(creator.styleGraph).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-mono text-gray-600 capitalize">{key}</span>
                        <span className="text-sm font-mono text-gray-900">{value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h3 className="font-display font-bold text-gray-900 mb-4">AI Style Analysis</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-gray-900">Primary Style</span>
                  </div>
                  <p className="text-gray-600 text-sm">Your work demonstrates a strong minimalist aesthetic with clean lines and bold typography. This style is currently trending in the tech and startup sectors.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Audience Match</span>
                  </div>
                  <p className="text-gray-600 text-sm">Your aesthetic resonates strongly with Gen Z and Millennial audiences in the technology and lifestyle sectors. Consider expanding into luxury brand partnerships.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900">Trend Prediction</span>
                  </div>
                  <p className="text-gray-600 text-sm">Based on current market trends, your style is projected to increase in demand by 23% over the next 6 months in the SaaS and fintech sectors.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold text-gray-900">All Projects</h2>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono text-sm font-semibold">
                  <Plus className="w-4 h-4" />
                  New Project
                </button>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{project.client}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {project.deadline}
                          </span>
                          <span className="text-sm text-gray-600">
                            <DollarSign className="w-4 h-4" />
                            ${project.budget.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        project.status === 'In Progress' 
                          ? 'bg-blue-500/10 text-blue-400' 
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'clients' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Client Management</h2>
              <div className="grid gap-4">
                {['TechFlow Inc', 'GreenBox Eco', 'PayFlow', 'Luxe Fashion'].map((client, index) => (
                  <motion.div
                    key={client}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                        {client.substring(0, 2)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{client}</h3>
                        <p className="text-sm text-gray-600">Active Client</p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h2 className="font-display text-2xl font-bold text-gray-900">Messages</h2>
              <div className="space-y-4">
                {[
                  { from: 'TechFlow Inc', message: 'Love the new logo concepts!', time: '2 hours ago', unread: true },
                  { from: 'GreenBox', message: 'Can we schedule a call?', time: '5 hours ago', unread: false },
                  { from: 'PayFlow', message: 'The UI redesign looks amazing', time: '1 day ago', unread: false },
                ].map((msg, index) => (
                  <motion.div
                    key={msg.from}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      msg.unread 
                        ? 'bg-purple-100 border-purple-300' 
                        : 'bg-gray-50 border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{msg.from}</h3>
                      <span className="text-xs text-gray-600">{msg.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{msg.message}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
