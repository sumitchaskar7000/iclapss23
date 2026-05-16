import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Banner from "/images/team.png";


/* =============================
   ANIMATION SYSTEM
============================= */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

/* =============================
   DATA
============================= */

const challengesData = [
  {
    title: "Marketing subscription confusion",
    short: "I don't understand how it works.",
    description:
      "You get a full-stack team — SEO, PPC, design, strategy — under one monthly plan focused purely on results."
  },
  {
    title: "Freelancers vs Agencies",
    short: "Why switch to subscription?",
    description:
      "Subscription ensures one unified strategy, better cost efficiency, and full transparency."
  },
  {
    title: "Past bad experience",
    short: "It was slow and expensive.",
    description:
      "We deliver performance-driven execution backed by measurable KPIs."
  },
  {
    title: "Lack of transparency",
    short: "I don't know what I'm paying for.",
    description:
      "You get clear dashboards, weekly calls, and measurable reporting."
  },
  {
    title: "Disconnected marketing",
    short: "SEO, ads, content feel separate.",
    description:
      "We align all channels under one strategic framework."
  },
  {
    title: "Need flexibility",
    short: "What if priorities change?",
    description:
      "Shift priorities anytime. No lock-in contracts."
  }
];
const benefits = [
  {
    title: "Full Coverage",
    subtitle: "Every channel, one team",
    color: "text-blue-400",
    description:
      "Instead of managing separate agencies for SEO, PPC, content, and design, you get a unified team that collaborates internally. Everyone works toward your business results — not isolated KPIs — so strategy, execution, and outcomes stay fully connected."
  },
  {
    title: "Unified Strategy",
    subtitle: "No more disconnected efforts.",
    color: "text-purple-400",
    description:
      "We build a single, cohesive plan across channels — so your campaigns support each other, your messaging stays consistent, and every move drives toward one business outcome."
  },
  {
    title: "Clarity & Control",
    subtitle: "You always know what's happening — and why.",
    color: "text-pink-400",
    description:
      "Clear reporting, transparent communication, and measurable performance. You’re never left wondering where your budget went."
  },
  {
    title: "Time Efficiency",
    subtitle: "You get a team — without managing one.",
    color: "text-orange-400",
    description:
      "No hiring. No onboarding. No coordination chaos. Just a ready-to-perform team aligned to your business goals."
  }
];
const services = [
  {
    title: "SEO Optimization",
    desc: "Increase rankings and organic traffic."
  },
  {
    title: "Performance Marketing",
    desc: "High-converting paid campaigns."
  },
  {
    title: "Social Media Growth",
    desc: "Brand visibility & engagement."
  },
  {
    title: "Web Development",
    desc: "High-performance websites."
  }
];
const steps = [
  {
    number: "01",
    title: "Meet Your Marketing Expert",
    description:
      "A single point of contact — fully aligned with your business. You’ll be matched with a dedicated strategist who understands your industry, goals, and challenges. They lead your roadmap, brief the team, and make sure everything runs toward real outcomes."
  },
  {
    number: "02",
    title: "Build a Custom Plan",
    description:
      "A flexible monthly strategy — built around your goals. Together, we prioritize tasks, channels, and focus areas. You get a curated team of SEO, PPC, content, and design pros working under one integrated strategy."
  },
  {
    number: "03",
    title: "Custom Strategy",
    description:
      "We design a data-driven plan tailored to scale. Based on your goals and audit findings, we build a high-performance roadmap to drive fast results and set you up for long-term impact."
  },
  {
    number: "04",
    title: "Activate Your Hours",
    description:
      "Use your time where it drives the most impact. Every month, your bank of hours turns into deliverables: campaigns, creatives, content, audits, and optimizations. Need a push on one channel? We shift instantly."
  },
  {
    number: "05",
    title: "Focus on Results",
    description:
      "We show exactly what’s working — and why. You get clear, ongoing reports tied to your business goals — not vanity metrics. Every campaign adjustment is tracked, explained, and optimized in real time."
  }
];
/* =============================
   COMPONENT
============================= */

const Home = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleFlip = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };




  return (
    <div className="home-page bg-black text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pt-24">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              All your marketing needs{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                in one single monthly subscription
              </span>
            </h1>

            <p className="mt-8 text-gray-400 text-lg">
              Crystal-clear billing. Full creative team. Measurable results.
            </p>

            <button className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition-all">
              Book a Demo
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                alt="Marketing Team"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CHALLENGES SECTION ================= */}

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-5xl font-semibold mb-6">
              Challenges Our Clients Faced
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Before Working With Us
              </span>
            </h2>

            <p className="text-gray-400 text-lg">
              Hover to flip and see the full details.
            </p>
          </motion.div>

          {/* FLIP CARDS GRID */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {challengesData.map((item, index) => {
              const isFlipped = flippedIndex === index;

              return (
                <div
                  key={index}
                  className="perspective"
                  onMouseEnter={() => setFlippedIndex(index)}
                  onMouseLeave={() => setFlippedIndex(null)}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-72 transition-transform duration-700"
                    style={{
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="text-4xl text-zinc-600 mb-6">“</div>
                      <h3 className="text-lg font-semibold mb-4">
                        {item.short}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {item.title}
                      </p>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden"
                      }}
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        Solution
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* ================= HEADING ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
              Why Subscription-Based Digital
              <br />
              Marketing Works Better
              <br />
              Than Traditional Agencies?
            </h2>
          </motion.div>

          {/* ================= 4 COLUMN GRID ================= */}

          <div className="grid md:grid-cols-4 border-l border-zinc-800">

            {benefits.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="relative border-r border-zinc-800 px-8 py-20 min-h-[420px] cursor-pointer transition-all duration-500"
                >
                  {/* TITLE */}
                  <motion.h3
                    animate={{ y: isActive ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-semibold mb-4"
                  >
                    {item.title}
                  </motion.h3>

                  {/* SUBTITLE */}
                  <p className={`mb-6 font-medium ${item.color}`}>
                    {item.subtitle}
                  </p>

                  {/* QUOTE ICON */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl text-zinc-600 mb-4"
                  >
                    “
                  </motion.div>

                  {/* DESCRIPTION */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    {item.description}
                  </motion.div>

                  {/* HOVER GLOW EFFECT */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      background: isActive
                        ? "linear-gradient(180deg, rgba(255,255,255,0.05), transparent)"
                        : "transparent"
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              );
            })}

          </div>
        </div>
      </section>



      <section className="w-full bg-black text-white py-20">
        <div className="max-w-6xl mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Your Full Subscription-Based Team
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            An estimated schedule of specialists' working hours under the
            ₹12,800/month rate is outlined
          </p>
        </div>

        {/* Full Width Image */}
        <div className="w-full">
          <img
            src={Banner}
            alt="Full Width Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-16">
            Our Services
          </h2>

          <div className="relative h-64 flex items-center justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full max-w-md bg-zinc-900 rounded-2xl p-10 border border-zinc-800"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {services[index].title}
                </h3>
                <p className="text-gray-400">
                  {services[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* ARROWS */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-800 transition"
            >
              →
            </button>
          </div>

          {/* VIEW ALL BUTTON */}
          <div className="mt-12">
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:scale-105 transition"
            >
              View All Services
            </button>
          </div>

        </div>
      </section>
      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Our Subscription-Based Digital Workflow —
              <br />
              Strategy That Scales, Built to Maximize ROI at Every Stage
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              One Process. Every Channel. Fully Managed. We don’t just manage tasks —
              we run your entire digital engine. Our subscription brings together
              strategy, execution, and analytics under one system — built to
              eliminate chaos and drive real results.
            </p>
          </motion.div>

          {/* ================= STEPS ================= */}
          <div className="space-y-16">

            {steps.map((step, index) => (
              <div key={index} className="border-t border-zinc-800 pt-12">

                <div className="grid md:grid-cols-3 gap-10 items-start">

                  {/* NUMBER */}
                  <div className="text-zinc-500 text-xl font-light">
                    {step.number}
                  </div>

                  {/* TITLE + ICON */}
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-blue-500 flex items-center justify-center text-blue-400">
                      ●
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {step.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-10">
              Ready to grow your business with iClapss?
            </h2>

            <p className="text-gray-300 mb-8 font-medium">
              Let’s discuss how we can help you scale with:
            </p>

            <ul className="space-y-4 text-gray-400 text-lg">
              <li>• Tech Website Building & Performance Optimization</li>
              <li>• Mobile App Building & Product Launch Support</li>
              <li>• SEO Optimization & Organic Traffic Scaling</li>
              <li>• Performance Marketing (Google & Meta Ads)</li>
              <li>• Full-Service Digital Marketing Strategy</li>
              <li>• Content Writing & Creative Production</li>
              <li>• Funnel Building & Lead Generation</li>
              <li>• Analytics, Tracking & ROI Optimization</li>
            </ul>

            <p className="text-gray-500 mt-10 text-sm">
              iClapss delivers a unified marketing system — strategy, execution,
              and measurable results under one powerful subscription.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl p-10 text-black shadow-2xl">
            <h3 className="text-2xl font-semibold mb-8">
              Book a strategy call with iClapss
            </h3>

            <form className="space-y-6">

              <div>
                <label className="text-sm text-gray-600">
                  First Name*
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Work Email*
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+91"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  What services are you interested in?
                </label>
                <textarea
                  rows="3"
                  placeholder="SEO, Ads, Website Development, Social Media..."
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-105 transition"
              >
                Book a Free Consultation
              </button>

              <p className="text-xs text-gray-500 mt-4">
                By submitting this form, you agree to receive communication from iClapss regarding your inquiry.
              </p>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
