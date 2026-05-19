import { motion } from 'framer-motion';
import { Rocket, Mail, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { label: 'Platform', path: '/#platform' },
      { label: 'AI Front Desk', path: '/#ai-front-desk' },
      { label: 'Creator Dashboard', path: '/#dashboard' },
      { label: 'Pricing', path: '/#pricing' },
    ],
    company: [
      { label: 'About', path: '/#about' },
      { label: 'Blog', path: '/#blog' },
      { label: 'Careers', path: '/#careers' },
      { label: 'Contact', path: '/#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/#privacy' },
      { label: 'Terms of Service', path: '/#terms' },
      { label: 'Cookie Policy', path: '/#cookies' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@creativelaunch.com' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-gray-900">Creative Launch</h3>
                <p className="text-[10px] font-mono text-purple-600 tracking-widest uppercase">AI Platform</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Run your creative business like a studio. AI-powered platform that handles the admin so creators can create.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
              Stay in the loop
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest updates on AI-powered creative business tools and early access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all outline-none"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2026 Creative Launch. Built for creators.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 font-mono">v0.1.0 · preview</span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
