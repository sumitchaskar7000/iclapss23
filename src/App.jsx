import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import SEOManager from './components/SEOManager'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Industries from './pages/Industries'
import Success from './pages/Success'
import People from './pages/People'
import Pricing from './pages/Pricing'

// services subpages
import SocialMedia from './pages/services/social-media'
import SearchEngineOptimization from './pages/services/search-engine-optimization'
import ContentMarketing from './pages/services/content-marketing'
import ConversionRateOptimization from './pages/services/conversion-rate-optimization'
import EmailMarketingAutomation from './pages/services/email-marketing-automation'
import DataAndAnalytics from './pages/services/data-and-analytics'
import CommunityManagement from './pages/services/community-management'
import PaidAdvertising from './pages/services/paid-advertising'
import InfluencerMarketing from './pages/services/influencer-marketing'
import DigitalDesign from './pages/services/digital-design'
import Development from './pages/services/development'
import StrategicPublicRelations from './pages/services/strategic-public-relations'
import StrategyAndConsulting from './pages/services/strategy-and-consulting'

// blog subpages
import Guides from './pages/blog/guides'
import Strategies from './pages/blog/strategies'
import Ratings from './pages/blog/ratings'
import OurAuthors from './pages/blog/our-authors'
import EditorialStandards from './pages/blog/editorial-standards'

// company subpages
import AboutUs from './pages/company/about-us'
import AffiliateProgram from './pages/company/affiliate-program'
import RewardsAndRecognition from './pages/company/rewards-and-recognition'
import Partners from './pages/company/partners'
import Careers from './pages/company/careers'
import Events from './pages/company/events'
import Contacts from './pages/company/contacts'


function App() {
  return (
    <Router>
      <SEOManager />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/success" element={<Success />} />
            <Route path="/people" element={<People />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* services subpages */}
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/search-engine-optimization" element={<SearchEngineOptimization />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/conversion-rate-optimization" element={<ConversionRateOptimization />} />
            <Route path="/services/email-marketing-automation" element={<EmailMarketingAutomation />} />
            <Route path="/services/data-and-analytics" element={<DataAndAnalytics />} />
            <Route path="/services/community-management" element={<CommunityManagement />} />
            <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/services/digital-design" element={<DigitalDesign />} />
            <Route path="/services/development" element={<Development />} />
            <Route path="/services/strategic-public-relations" element={<StrategicPublicRelations />} />
            <Route path="/services/strategy-and-consulting" element={<StrategyAndConsulting />} />

            {/* blog subpages */}
            <Route path="/blog/guides" element={<Guides />} />
            <Route path="/blog/strategies" element={<Strategies />} />
            <Route path="/blog/ratings" element={<Ratings />} />
            <Route path="/blog/our-authors" element={<OurAuthors />} />
            <Route path="/blog/editorial-standards" element={<EditorialStandards />} />

            {/* company subpages */}
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/affiliate-program" element={<AffiliateProgram />} />
            <Route path="/company/rewards-and-recognition" element={<RewardsAndRecognition />} />
            <Route path="/company/partners" element={<Partners />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/events" element={<Events />} />
            <Route path="/company/contacts" element={<Contacts />} />

          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
