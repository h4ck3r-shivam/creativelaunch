export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Creative Launch</h3>
                <p className="text-[10px] text-gray-600 tracking-widest uppercase">AI Platform</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              The AI-powered business platform for creators. Turn your craft into a scalable studio.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="/platform" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Platform
                </a>
              </li>
              <li>
                <a href="/ai-front-desk" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  AI Front Desk
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/waitlist" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
