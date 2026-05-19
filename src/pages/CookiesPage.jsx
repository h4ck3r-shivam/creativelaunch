import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cookie, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiesPage() {
  const navigate = useNavigate();

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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-600 mb-8">Last updated: March 15, 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-sm"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize 
                content and advertisements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Essential cookies for basic site functionality</li>
                <li>Performance cookies to analyze site usage</li>
                <li>Functional cookies to remember your preferences</li>
                <li>Marketing cookies for personalized advertising</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookies</h2>
              <p className="text-gray-700 mb-6">
                You can control and manage cookies through your browser settings. Please note that 
                disabling certain cookies may affect your experience on our site.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-6">
                We may use third-party services that place cookies on your device for analytics, 
                advertising, and social media integration purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our Cookie Policy, please contact us at privacy@creativelaunch.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
