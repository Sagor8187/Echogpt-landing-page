"use client";

import { motion } from "framer-motion";

// Features data array containing icon, title, and description
const featuresList = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Lightning-Fast AI Processing",
    description: "Generate high-precision responses, automation tasks, and data insights in milliseconds with optimized server-side rendering.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    description: "Your data and user interactions are fully protected with advanced encryption standards, privacy controls, and secure authentication.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Seamless Dashboard UI",
    description: "Built with a clean, modern interface using Tailwind CSS and responsive grid systems to provide an ultimate user experience.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Multi-Model Integration",
    description: "Easily switch between top-tier AI models to get the best possible output for your content creation, coding, and analysis.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Real-Time Collaboration",
    description: "Empower your entire team to share ideas, track projects, and manage workflow efficiently without any latency.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Developer Friendly APIs",
    description: "Clean, well-documented code architecture built on Next.js and TypeScript, making custom integrations extremely smooth.",
  },
];

const Features = () => {
  return (
    <section 
      id="features" 
      className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#0B0F15] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#10a37f] dark:text-[#CEF144] font-bold">
            Powerful Capabilities
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Designed for Speed, Scalability, and Precision
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Discover why modern teams rely on EchoGPT to streamline daily tasks, boost productivity, and elevate overall workflow quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-[#151a23] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:border-[#CEF144]/30 transition-all duration-300 group"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#10a37f] dark:group-hover:text-[#CEF144] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;