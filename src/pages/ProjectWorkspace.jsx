import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MessageSquare, FileText, Calendar, Clock, 
  CheckCircle, Circle, AlertCircle, Send, Paperclip, 
  Download, Share2, MoreVertical, Play, Pause, Users,
  DollarSign, Target, TrendingUp, Sparkles
} from 'lucide-react';
import { projects } from '../data/mockData';

export default function ProjectWorkspace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [message, setMessage] = useState('');
  
  const project = projects.find(p => p.id === parseInt(id)) || projects[0];

  const tabs = [
    { id: 'overview', icon: Target, label: 'Overview' },
    { id: 'timeline', icon: Calendar, label: 'Timeline' },
    { id: 'deliverables', icon: FileText, label: 'Deliverables' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/organization-dashboard')}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="font-display font-bold text-gray-900 text-lg">{project.title}</h1>
                <p className="text-sm text-gray-600">{project.client} × {project.creator}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-8 p-4 rounded-xl border ${
            project.status === 'In Progress'
              ? 'bg-blue-500/10 border-blue-500/30'
              : 'bg-yellow-500/10 border-yellow-500/30'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.status === 'In Progress' ? (
                <Play className="w-5 h-5 text-blue-400" />
              ) : (
                <Clock className="w-5 h-5 text-yellow-400" />
              )}
              <div>
                <p className="font-semibold text-gray-900">Status: {project.status}</p>
                <p className="text-sm text-gray-600">Deadline: {project.deadline}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-display font-bold text-gray-900">{project.progress}%</p>
              <p className="text-sm text-gray-600">Complete</p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
            />
          </div>
        </motion.div>

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

        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {/* Main Overview */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recent Activity */}
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
                  <h2 className="font-display text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {project.messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-3 rounded-lg ${
                          msg.sender === 'creator' ? 'bg-purple-100' : 'bg-blue-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-gray-900">
                            {msg.sender === 'creator' ? project.creator : project.client}
                          </span>
                          <span className="text-xs text-gray-600">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-700">{msg.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Team */}
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
                  <h3 className="font-display font-bold text-gray-900 mb-4">Team</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {project.creator.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{project.creator}</p>
                        <p className="text-xs text-gray-600">Creator</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                        {project.client.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{project.client}</p>
                        <p className="text-xs text-gray-600">Client</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smart Booking */}
                <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-gray-900">Smart Booking</h3>
                  </div>
                  
                  {/* Next Meeting */}
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900 text-sm">Design Review</p>
                      <span className="text-xs font-mono text-purple-700 bg-purple-100 px-2 py-1 rounded-full">Today</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">with {project.client}</p>
                    <p className="text-xs text-gray-500">2:00 PM - 3:00 PM EST</p>
                  </div>

                  {/* Availability Status */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-green-50 border border-green-200 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">Available</span>
                    </div>
                    <span className="text-xs font-mono text-green-700">3 slots</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <button className="w-full p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-mono font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule Meeting
                    </button>
                    <button className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Project Timeline</h2>
                <div className="space-y-6">
                  {project.milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative pl-8 pb-6 border-l-2 border-gray-200 last:pb-0"
                    >
                      <div className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${
                        milestone.completed
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`} />
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                          <p className="text-sm text-gray-600">{milestone.date}</p>
                        </div>
                        {milestone.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-mono ${
                        milestone.completed
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {milestone.completed ? 'Completed' : 'Pending'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'deliverables' && (
            <motion.div
              key="deliverables"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Deliverables</h2>
                <div className="space-y-4">
                  {project.deliverables.map((deliverable, index) => (
                    <motion.div
                      key={deliverable.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {deliverable.status === 'completed' ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : deliverable.status === 'in-progress' ? (
                            <Play className="w-5 h-5 text-blue-500" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                          <div>
                            <h3 className="font-semibold text-gray-900">{deliverable.name}</h3>
                            <p className="text-sm text-gray-600 capitalize">{deliverable.status.replace('-', ' ')}</p>
                          </div>
                        </div>
                        <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">
                          <Download className="w-5 h-5" />
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
              key="messages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-3 gap-6"
            >
              {/* Messages List */}
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Messages</h2>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {project.messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-xl ${
                        msg.sender === 'creator' 
                          ? 'bg-purple-100 border border-purple-200 ml-8' 
                          : 'bg-blue-100 border border-blue-200 mr-8'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-gray-900">
                          {msg.sender === 'creator' ? project.creator : project.client}
                        </span>
                        <span className="text-xs text-gray-600">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{msg.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-sm h-fit">
                <h3 className="font-display font-bold text-gray-900 mb-4">Send Message</h3>
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full h-32 p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none resize-none"
                  />
                  <div className="flex items-center gap-2">
                    <button type="button" className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
