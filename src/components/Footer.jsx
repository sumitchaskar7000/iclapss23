import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-28 pb-16 px-6 relative overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===================== TOP GRID ===================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">

          {/* ================= BRAND SECTION ================= */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/i-logo.svg"
                alt="Clapss logo"
                className="w-10 h-10"
              />
              <h2 className="text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent logo-wordmark">
                clapss
              </h2>
            </div>

            <p className="text-gray-500 leading-relaxed max-w-md mb-8">
              We build performance-driven digital ecosystems that help modern brands grow,
              scale, and dominate their industry through creative strategy and measurable results.
            </p>

            <div className="space-y-2 text-sm text-gray-400 mb-8">
              <p>
                Email: <a href="mailto:info@iclapss.com" className="hover:text-white transition">info@iclapss.com</a>
              </p>
              <p>
                Phone / WhatsApp: <a href="https://wa.me/917666519682" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">+91 7666519682</a>
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <Link to="#" className="hover:text-white transition duration-300">
                Facebook
              </Link>
              <Link to="#" className="hover:text-white transition duration-300">
                Instagram
              </Link>
              <Link to="#" className="hover:text-white transition duration-300">
                LinkedIn
              </Link>
              <Link to="#" className="hover:text-white transition duration-300">
                Twitter
              </Link>
            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-8 tracking-wide">
              Services
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/services/social-media" className="hover:text-white transition">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/paid-advertising" className="hover:text-white transition">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/search-engine-optimization" className="hover:text-white transition">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/content-marketing" className="hover:text-white transition">
                  Content Writing
                </Link>
              </li>
              <li>
                <Link to="/services/development" className="hover:text-white transition">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-8 tracking-wide">
              Company
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CTA SECTION ================= */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-8 tracking-wide">
              Let’s Build Something Great
            </h3>

            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Partner with iclapss to create impactful digital experiences
              that drive revenue and long-term growth.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>

        </div>

        {/* ===================== DIVIDER ===================== */}
        <div className="border-t border-white/10 pt-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} iclapss. All rights reserved.
            </div>

            <div className="flex gap-8 text-sm text-gray-500">
              <Link to="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
              <Link to="#" className="hover:text-white transition">
                Sitemap
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
