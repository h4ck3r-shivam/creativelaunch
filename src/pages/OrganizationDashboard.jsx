import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Filter, Sparkles, TrendingUp, Users, Briefcase, 
  DollarSign, Calendar, Star, MapPin, ArrowRight, Heart,
  MessageSquare, Plus, Settings, LogOut, Sliders, Target, ArrowLeft
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { creators, organizations } from '../data/mockData';

export default function OrganizationDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  // Safety check for organization data
  const organization = organizations && organizations.length > 0 ? organizations[0] : null;
  
  // If no organization data, show error state
  if (!organization) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to load dashboard</h2>
          <p className="text-gray-600 mb-6">Organization data not found. Please try logging in again.</p>
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
    { id: 'discover', icon: Search, label: 'Discover Creators' },
    { id: 'projects', icon: Briefcase, label: 'Active Projects' },
    { id: 'saved', icon: Heart, label: 'Saved Creators' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
  ];

  const filters = [
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'video-editing', label: 'Video Editing' },
    { id: 'photography', label: 'Photography' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'minimalist', label: 'Minimalist Style' },
    { id: 'bold', label: 'Bold Style' },
    { id: 'cinematic', label: 'Cinematic' },
  ];

  const aiSearchExamples = [
    "Find a luxury minimalist food photographer for a Gen-Z skincare brand",
    "Video editor specializing in high-energy sports content",
    "UI/UX designer with fintech experience and dark mode expertise",
    "Brand identity designer for sustainable fashion startup",
  ];

  const handleFilterToggle = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredCreators = creators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.styleTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilters = selectedFilters.length === 0 || 
                          creator.styleTags.some(tag => 
                            selectedFilters.some(filter => tag.toLowerCase().includes(filter.toLowerCase()))
                          );
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                {organization.logo}
              </div>
              <div>
                <h1 className="font-display font-bold text-gray-900 text-lg">{organization.name}</h1>
                <p className="text-sm text-gray-600">{organization.industry}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/')}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                title="Back to Home"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="p-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all"
                title="Logout"
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
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'discover' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* AI Front Desk */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center animate-pulse-slow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900">AI Front Desk</h2>
                  <p className="text-sm text-gray-600">Your 24/7 creative assistant - handles inquiries and qualifies leads</p>
                </div>
              </div>

              {/* Two Chat Examples Side by Side */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Example 1: Skincare Brand Photographer */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-center mb-4">
                    <span className="text-xs font-mono text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Skincare Brand Example</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <p className="text-xs text-gray-900">Hi! I'm here to help. What type of creative project are you looking for?</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">AI Assistant</p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-purple-600 text-white rounded-lg p-3 max-w-[90%]">
                          <p className="text-xs">Need a minimalist photographer for luxury skincare brand launch in London</p>
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        FM
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <p className="text-xs text-gray-900 mb-2">Perfect! I found Sarah Mitchell - she shoots for British Vogue & Harrods:</p>
                          <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                  SM
                                </div>
                                <div>
                                  <p className="text-xs font-semibold text-gray-900">Sarah Mitchell</p>
                                  <p className="text-xs text-gray-600">Photographer • Notting Hill</p>
                                </div>
                              </div>
                              <span className="text-xs font-mono text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">98%</span>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-purple-700">• £120/hour</p>
                              <p className="text-xs text-purple-700">• British Vogue, Harrods, Burberry</p>
                              <p className="text-xs text-purple-700">• Available from January 2025</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">Would you like me to reach out to Sarah for you?</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">AI Assistant</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Example 2: Tattoo Artist */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-center mb-4">
                    <span className="text-xs font-mono text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Tattoo Studio Example</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <p className="text-xs text-gray-900">Hi! I'm here to help. What type of creative project are you looking for?</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">AI Assistant</p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[90%]">
                          <p className="text-xs">Looking for a tattoo artist for my Bristol studio - specialising in British wildlife designs</p>
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        TS
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <p className="text-xs text-gray-900 mb-2">Great match! Emma Wilson specialises in British countryside illustrations:</p>
                          <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                  EW
                                </div>
                                <div>
                                  <p className="text-xs font-semibold text-gray-900">Emma Wilson</p>
                                  <p className="text-xs text-gray-600">Illustrator • Bristol</p>
                                </div>
                              </div>
                              <span className="text-xs font-mono text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">93%</span>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs text-blue-700">• £65/hour</p>
                              <p className="text-xs text-blue-700">• Bloomsbury, National Trust, Penguin</p>
                              <p className="text-xs text-blue-700">• Watercolour & British countryside specialist</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">Would you like me to reach out to Emma for you?</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">AI Assistant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs text-gray-600 hover:text-gray-900 hover:border-purple-300 transition-all">
                  Find photographers
                </button>
                <button className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs text-gray-600 hover:text-gray-900 hover:border-purple-300 transition-all">
                  Find illustrators
                </button>
                <button className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs text-gray-600 hover:text-gray-900 hover:border-purple-300 transition-all">
                  Qualify leads
                </button>
                <button className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs text-gray-600 hover:text-gray-900 hover:border-purple-300 transition-all">
                  Schedule calls
                </button>
              </div>

              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask me anything about finding creators or managing projects..."
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* AI Search Section */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center animate-pulse-slow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900">AI-Powered Creator Search</h2>
                  <p className="text-sm text-gray-600">Describe your ideal creator using natural language</p>
                </div>
              </div>

              {/* Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try: 'Find a luxury minimalist food photographer for a Gen-Z skincare brand'"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
                />
              </div>

              {/* AI Search Examples - Side by Side */}
              <div className="grid md:grid-cols-2 gap-5 mb-6">
                {/* Example 1 - Video Editor for Documentary */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-5 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold shadow-md">
                      🎬 Documentary
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-purple-100">
                      <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">Search Query:</p>
                      <p className="text-sm text-gray-900 font-semibold leading-relaxed">"Need video editor for BBC Three documentary about Manchester's creative revival"</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
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
                    </div>
                  </div>
                </div>

                {/* Example 2 - UI/UX Designer for Fintech */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1.5 rounded-full text-xs font-mono font-semibold shadow-md">
                      💻 Fintech
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-blue-100">
                      <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">Search Query:</p>
                      <p className="text-sm text-gray-900 font-semibold leading-relaxed">"Need UI/UX designer with fintech experience to redesign business banking app for UK SMEs"</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
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
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sliders className="w-4 h-4 text-gray-400" />
                  <p className="text-sm font-mono text-gray-500 tracking-wider uppercase">Quick Filters</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => handleFilterToggle(filter.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedFilters.includes(filter.id)
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-purple-300'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Creator Results */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-bold text-gray-900">
                  {filteredCreators.length} Creators Found
                </h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900 transition-all">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCreators.map((creator, index) => (
                  <motion.div
                    key={creator.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden group hover:shadow-lg hover:border-purple-300 transition-all shadow-sm"
                  >
                    {/* Creator Header */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                            {creator.avatar}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-gray-900 text-lg">{creator.name}</h3>
                            <p className="text-sm text-gray-600">{creator.role}</p>
                          </div>
                        </div>
                        <button className="p-2 rounded-lg text-gray-600 hover:text-red-600 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-gray-900 font-semibold">{creator.rating}</span>
                          <span className="text-gray-600">({creator.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {creator.location}
                        </div>
                      </div>
                    </div>

                    {/* Style Tags */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {creator.styleTags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* AI Compatibility Score */}
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-mono text-gray-600">AI Compatibility</span>
                        </div>
                        <span className="text-2xl font-display font-bold text-gradient">{creator.compatibilityScore}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${creator.compatibilityScore}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                        />
                      </div>
                    </div>

                    {/* Pricing & Action */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-2xl font-display font-bold text-gray-900">${creator.hourlyRate}</p>
                          <p className="text-sm text-gray-600">per hour</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-gray-900 transition-all">
                            <MessageSquare className="w-5 h-5" />
                          </button>
                          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2">
                            Hire
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                <h2 className="font-display text-2xl font-bold text-gray-900">Active Projects</h2>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-mono text-sm font-semibold">
                  <Plus className="w-4 h-4" />
                  New Project
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Brand Identity Redesign', creator: 'Elena Rodriguez', progress: 65, budget: 15000, status: 'In Progress' },
                  { name: 'Product Photography', creator: 'Sofia Andersson', progress: 90, budget: 25000, status: 'Review' },
                  { name: 'App UI Overhaul', creator: 'James Okonkwo', progress: 45, budget: 20000, status: 'In Progress' },
                ].map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all cursor-pointer"
                    onClick={() => navigate(`/project/${index + 1}`)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                        <p className="text-sm text-gray-600">{project.creator}</p>
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
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"
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

        {activeTab === 'saved' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Saved Creators</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {creators.slice(0, 4).map((creator, index) => (
                  <motion.div
                    key={creator.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                      {creator.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                      <p className="text-sm text-gray-600">{creator.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-purple-600">{creator.compatibilityScore}%</span>
                      <button className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-all">
                        <Heart className="w-5 h-5 fill-red-600" />
                      </button>
                    </div>
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
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Messages</h2>
              <div className="space-y-4">
                {[
                  { from: 'Elena Rodriguez', message: 'Sent the initial brand concepts for review', time: '2 hours ago', unread: true },
                  { from: 'Sofia Andersson', message: 'Photography shoot scheduled for next week', time: '5 hours ago', unread: false },
                  { from: 'James Okonkwo', message: 'UI wireframes are ready for your feedback', time: '1 day ago', unread: false },
                ].map((msg, index) => (
                  <motion.div
                    key={msg.from}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      msg.unread 
                        ? 'bg-blue-100 border-blue-300' 
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
