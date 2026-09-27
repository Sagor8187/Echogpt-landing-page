"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects exploring AI capabilities.",
    price: "$0",
    duration: "/month",
    features: [
      "Access to EchoGPT Core V1",
      "Up to 1,000 requests per month",
      "Standard response speed",
      "Community support",
      "Basic API access",
    ],
    buttonText: "Get Started Free",
    isPopular: false,
  },
  {
    name: "Pro",
    description: "Ideal for growing teams and professionals needing advanced AI tools.",
    price: "$29",
    duration: "/month",
    features: [
      "Access to GPT-4o & Claude 3.5 Sonnet",
      "Unlimited requests",
      "Lightning-fast response speed",
      "Priority 24/7 email support",
      "Advanced API & Webhooks",
      "Custom AI fine-tuning",
    ],
    buttonText: "Upgrade to Pro",
    isPopular: true, // This will highlight the card
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large-scale organizations with complex workflows.",
    price: "Custom",
    duration: "",
    features: [
      "Access to all premium AI models",
      "Dedicated account manager",
      "Custom deployment options",
      "99.9% Uptime SLA guarantee",
      "Enterprise-grade security",
      "Unlimited team members",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section 
      id="pricing" 
      className="relative w-full py-20 lg:py-28 bg-gray-50 dark:bg-[#070A0F] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#10a37f] dark:text-[#CEF144] font-bold">
            Transparent Pricing
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Choose the Perfect Plan for Your Team
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Whether you&apos;re an independent developer or a global enterprise, we have a plan designed to scale with your success.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.isPopular 
                  ? "bg-white dark:bg-[#0B0F15] border-2 border-[#10a37f] dark:border-[#CEF144] shadow-2xl shadow-[#10a37f]/10 dark:shadow-[#CEF144]/10 lg:-translate-y-4 lg:scale-105 z-10" 
                  : "bg-white dark:bg-[#151a23] border border-gray-200 dark:border-white/10 shadow-sm mt-0"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#10a37f] dark:bg-[#CEF144] text-white dark:text-[#0B0F15] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6 flex items-baseline text-gray-900 dark:text-white">
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                {plan.duration && (
                  <span className="text-gray-500 dark:text-gray-400 ml-1 font-medium">
                    {plan.duration}
                  </span>
                )}
              </div>

              {/* Call to Action Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-colors mb-8 ${
                  plan.isPopular
                    ? "bg-[#10a37f] text-white hover:bg-[#0e906f] dark:bg-[#CEF144] dark:text-[#0B0F15] dark:hover:bg-[#bce038]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 border border-transparent dark:border-white/10"
                }`}
              >
                {plan.buttonText}
              </motion.button>

              {/* Features List */}
              <div className="flex-1 space-y-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className={`w-4 h-4 mt-1 mr-3 flex-shrink-0 ${
                        plan.isPopular ? "text-[#10a37f] dark:text-[#CEF144]" : "text-gray-400 dark:text-gray-500"
                      }`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;