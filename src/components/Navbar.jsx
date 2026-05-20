import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Rocket, Sparkles, LogIn, UserPlus } from 'lucide-react';
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
    { id: 'home', label: 'Home', path: '/' },
    { id: 'platform', label: 'Platform', path: '/platform' },
    { id: 'ai-front-desk', label: 'AI Front Desk', path: '/ai-front-desk' },
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => handleNavClick('/')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center glow-purple">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg text-gray-900">Creative Launch</h1>
              <p className="text-[10px] font-mono text-purple-600 tracking-widest uppercase">AI Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {isHomePage && (
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className="px-4 py-2 rounded-lg text-sm font-mono font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthPage ? (
              <button
                onClick={() => handleNavClick('/')}
                className="px-5 py-2.5 rounded-lg text-gray-600 text-sm font-mono font-medium hover:text-gray-900 transition-all"
              >
                Back to Home
              </button>
            ) : isHomePage ? (
              <>
                <button
                  onClick={() => handleNavClick('/login')}
                  className="px-5 py-2.5 rounded-lg text-gray-600 text-sm font-mono font-medium hover:text-gray-900 transition-all flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
                <button
                  onClick={() => handleNavClick('/signup')}
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-mono font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavClick('/login')}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-mono font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Get Started
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg"
        >
          <div className="px-4 py-3 space-y-1">
            {isHomePage && navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className="w-full px-4 py-2.5 rounded-lg text-sm font-mono font-medium text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all"
              >
                {item.label}
              </button>
            ))}
            
            <div className="border-t border-gray-100 my-2 pt-2">
              {isAuthPage ? (
                <button
                  onClick={() => handleNavClick('/')}
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-mono font-medium text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all"
                >
                  Back to Home
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleNavClick('/login')}
                    className="w-full px-4 py-2.5 rounded-lg text-sm font-mono font-medium text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all flex items-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </button>
                  <button
                    onClick={() => handleNavClick('/signup')}
                    className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-mono font-semibold flex items-center gap-2 mt-1"
                  >
                    <UserPlus className="w-4 h-4" />
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
