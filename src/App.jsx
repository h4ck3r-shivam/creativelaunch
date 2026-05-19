import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import WaitlistPage from './pages/WaitlistPage'
import PlatformPage from './pages/PlatformPage'
import AIFrontDeskPage from './pages/AIFrontDeskPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import OnboardingPage from './pages/OnboardingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CreatorDashboard from './pages/CreatorDashboard'
import OrganizationDashboard from './pages/OrganizationDashboard'
import ProjectWorkspace from './pages/ProjectWorkspace'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/ai-front-desk" element={<AIFrontDeskPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/creator-dashboard" element={<CreatorDashboard />} />
        <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
        <Route path="/project/:id" element={<ProjectWorkspace />} />
      </Routes>
    </Router>
  )
}

export default App
