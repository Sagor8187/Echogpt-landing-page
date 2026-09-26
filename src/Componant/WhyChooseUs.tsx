"use client";

import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaCogs, FaHeadset } from "react-icons/fa";

// Why Choose Us list data using React Icons
const benefitsList = [
  {
    icon: <FaBolt className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" />,
    title: "Unmatched Speed & Efficiency",
    description: "Execute complex workflows and close orders instantly with optimized next-gen AI processing engines.",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" />,
    title: "Military-Grade Data Security",
    description: "Your business intelligence and customer interactions remain strictly confidential with end-to-end encryption.",
  },
  {
    icon: <FaCogs className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" />,
    title: "Custom AI Fine-Tuning",
    description: "Easily adapt models to match your specific brand voice, business logic, and operational requirements.",
  },
  {
    icon: <FaHeadset className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" />,
    title: "24/7 Dedicated Support",
    description: "Our expert technical team is always online to help you scale, integrate, and troubleshoot seamlessly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section 
      id="why-choose-us" 
      className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#0B0F15] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#10a37f] dark:text-[#CEF144] font-bold">
            Why Choose EchoGPT
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Built for Teams Who Demand Excellence
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            We combine cutting-edge artificial intelligence with an intuitive user experience to give your business an unfair competitive advantage.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Benefits List */}
          <div className="space-y-6">
            {benefitsList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-[#151a23] border border-gray-200 dark:border-white/10 hover:border-[#10a37f] dark:hover:border-[#CEF144]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#10a37f] dark:group-hover:text-[#CEF144] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Highlight Banner / Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-[#10a37f]/10 via-transparent to-green-600/10 dark:from-[#CEF144]/10 dark:via-[#151a23] dark:to-[#0B0F15] border border-gray-200 dark:border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#10a37f]/20 dark:bg-[#CEF144]/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#10a37f]/10 text-[#10a37f] dark:bg-[#CEF144]/20 dark:text-[#CEF144]">
                Performance Benchmark
              </span>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Transforming Customer Engagement at Scale
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Experience up to <span className="text-[#10a37f] dark:text-[#CEF144] font-bold">3x faster</span> order processing and automated workflows, saving hundreds of manual hours every month.
              </p>
            </div>

            {/* Stats Grid inside right card */}
            <div className="grid grid-cols-2 gap-6 pt-10 mt-10 border-t border-gray-200 dark:border-white/10 relative z-10">
              <div>
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white">99.9%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">System Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#10a37f] dark:text-[#CEF144]">10M+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Requests Processed</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;