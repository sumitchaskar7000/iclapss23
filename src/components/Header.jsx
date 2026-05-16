import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownAnim = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  const servicesLeft = [
    "Social Media",
    "Search Engine Optimization",
    "Content Marketing",
    "Conversion Rate Optimization",
    "Email Marketing & Automation",
    "Data & Analytics",
    "Community Management"
  ];

  const servicesRight = [
    "Paid Advertising",
    "Influencer Marketing",
    "Digital Design",
    "Development",
    "Strategic Public Relations",
    "Strategy & Consulting"
  ];

  const blogItems = [
    "Guides",
    "Strategies",
    "Ratings",
    "Our Authors",
    "Editorial Standards"
  ];

  const companyItems = [
    "About Us",
    "Affiliate Program",
    "Rewards And Recognition",
    "Marketing And Technology Partners",
    "Careers",
    "Events",
    "Contacts"
  ];

  const slugify = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_10px_40px_rgba(2,6,23,0.12)] px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 mt-4 sm:mt-6 flex items-center justify-between relative">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-sm xl:text-base font-medium text-gray-700 hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setActive("services")}
              onMouseLeave={() => setActive(null)}
            >
              <button className="flex items-center gap-1 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-700 transition-colors whitespace-nowrap">
                Our Services <ChevronDown size={16} className="text-gray-500" />
              </button>

              <AnimatePresence>
                {active === "services" && (
                  <motion.div
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute top-11 left-1/2 -translate-x-1/2 w-[820px] xl:w-[920px] rounded-2xl bg-white shadow-2xl border border-gray-100 flex overflow-hidden"
                  >
                    <div className="w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Services
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Tailored solutions to grow your business and achieve your goals.
                      </p>
                      <Link
                        to="/services"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group"
                        onClick={() => setActive(null)}
                      >
                        View all Services
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>

                    <div className="w-2/3 p-8 grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        {servicesLeft.map((item, i) => (
                          <Link
                            key={i}
                            to={`/services/${slugify(item)}`}
                            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setActive(null)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {servicesRight.map((item, i) => (
                          <Link
                            key={i}
                            to={`/services/${slugify(item)}`}
                            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setActive(null)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className="text-sm xl:text-base font-medium text-gray-700 hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              Industries
            </Link>

            {/* BLOG - Left Side Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActive("blog")}
              onMouseLeave={() => setActive(null)}
            >
              <button className="flex items-center gap-1 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-700 transition-colors whitespace-nowrap">
                Blog <ChevronDown size={16} className="text-gray-500" />
              </button>

              <AnimatePresence>
                {active === "blog" && (
                  <motion.div
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute top-11 right-0 w-[600px] rounded-2xl bg-white shadow-2xl border border-gray-100 flex overflow-hidden"
                  >
                    <div className="w-1/2 p-8 space-y-3">
                      {blogItems.map((item, i) => (
                        <Link
                          key={i}
                          to={`/blog/${slugify(item)}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setActive(null)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ICLAPSS Insights
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Access in-depth guides, cutting-edge strategies and insider insights.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* COMPANY - Left Side Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActive("company")}
              onMouseLeave={() => setActive(null)}
            >
              <button className="flex items-center gap-1 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-700 transition-colors whitespace-nowrap">
                Company <ChevronDown size={16} className="text-gray-500" />
              </button>

              <AnimatePresence>
                {active === "company" && (
                  <motion.div
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="absolute top-11 right-0 w-[700px] rounded-2xl bg-white shadow-2xl border border-gray-100 flex overflow-hidden"
                  >
                    <div className="w-1/2 p-8 space-y-3">
                      {companyItems.map((item, i) => (
                        <Link
                          key={i}
                          to={`/company/${slugify(item)}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setActive(null)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                    <div className="w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Company
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our strength lies in our people. We foster creativity and collaboration.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 xl:px-7 py-2.5 rounded-xl font-semibold text-sm xl:text-base hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Book Intro Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 mt-2 mx-4 sm:mx-6 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-4 space-y-1">

              {/* Mobile Services Section - expanded for mobile users */}
              <div className="border-b border-gray-100 pb-2">
                <div className="px-4 py-3 text-gray-700 rounded-lg">
                  <div className="font-medium mb-2">Our Services</div>
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="space-y-2">
                      {servicesLeft.map((item, i) => (
                        <Link
                          key={i}
                          to={`/services/${slugify(item)}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {servicesRight.map((item, i) => (
                        <Link
                          key={i}
                          to={`/services/${slugify(item)}`}
                          className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/services"
                    className="block text-sm text-blue-600 font-medium px-2 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View all Services →
                  </Link>
                </div>
              </div>

              {/* Regular Mobile Links */}
              <Link
                to="/"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/portfolio"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>

              <Link
                to="/blog"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/about"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>

              {/* Mobile Blog Section - expanded */}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <div className="px-4 py-3">
                  <div className="font-medium mb-2">Blog</div>
                  <div className="p-2 space-y-2">
                    {blogItems.map((item, i) => (
                      <Link
                        key={i}
                        to={`/blog/${slugify(item)}`}
                        className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Company Section - expanded */}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <div className="px-4 py-3">
                  <div className="font-medium mb-2">Company</div>
                  <div className="p-2 space-y-2">
                    {companyItems.map((item, i) => (
                      <Link
                        key={i}
                        to={`/company/${slugify(item)}`}
                        className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="flex justify-center mb-3">
                  <ThemeToggle />
                </div>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Intro Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
