import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const isDashboardPage = ['/creator-dashboard', '/organization-dashboard', '/project'].some(path => 
    location.pathname.startsWith(path)
  );

  const navItems = [
    { id: 'platform', label: 'Platform', path: '/platform' },
    { id: 'ai-front-desk', label: 'AI Front Desk', path: '/ai-front-desk' },
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'pricing', label: 'Pricing', path: '/pricing' },
    { id: 'about', label: 'About', path: '/about' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // Don't show navbar on dashboard pages (they have their own header)
  if (isDashboardPage) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">Creative Launch</h1>
                <p className="text-[10px] text-gray-600 tracking-widest uppercase">AI Platform</p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/waitlist')}
              className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.path)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all text-sm font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('/waitlist')}
                  className="w-full px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
