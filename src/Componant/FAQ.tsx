"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

// FAQ Data
const faqs = [
  {
    question: "What is EchoGPT and who is it for?",
    answer: "EchoGPT is an advanced AI automation platform designed for modern teams, developers, and enterprises. It helps you automate workflows, generate high-quality content, and process data instantly by leveraging top-tier AI models.",
  },
  {
    question: "Can I switch between different AI models?",
    answer: "Yes, absolutely! EchoGPT acts as a multi-model powerhouse. You can seamlessly switch between GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and our proprietary EchoGPT Core V1 based on your specific task requirements.",
  },
  {
    question: "Is my business data and privacy secure?",
    answer: "Security is our top priority. All interactions and data processed through EchoGPT are secured with military-grade, end-to-end encryption. We do not use your proprietary enterprise data to train public models.",
  },
  {
    question: "Do I need coding skills to use EchoGPT?",
    answer: "Not at all. EchoGPT comes with a highly intuitive, user-friendly dashboard that anyone can use. However, for developers, we also provide robust APIs and Webhooks for custom integrations.",
  },
  {
    question: "What happens if I exceed my monthly request limit?",
    answer: "If you are on the Starter plan, you will be notified when you reach 80% and 100% of your limit. You can easily upgrade to the Pro plan for unlimited requests, or wait until your cycle resets the following month.",
  },
  {
    question: "Do you offer custom pricing for large organizations?",
    answer: "Yes, our Enterprise plan is tailored specifically for large-scale operations. It includes dedicated account management, custom deployment options, and SLA guarantees. Contact our sales team for a custom quote.",
  },
];

const FAQ = () => {
  // State to track which FAQ is currently open
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#0B0F15] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#10a37f] dark:text-[#CEF144] font-bold">
            Got Questions?
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about EchoGPT&apos;s features, pricing, and security.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-gray-50 border-[#10a37f]/30 dark:bg-[#151a23] dark:border-[#CEF144]/30 shadow-md" 
                    : "bg-white border-gray-200 hover:border-[#10a37f]/50 dark:bg-[#0B0F15] dark:border-white/10 dark:hover:border-[#CEF144]/50"
                }`}
              >
                {/* FAQ Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`text-base md:text-lg  transition-colors ${
                    isOpen ? "text-[#10a37f] dark:text-[#CEF144]" : "text-gray-900 dark:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ml-4 ${
                      isOpen ? "text-[#10a37f] dark:text-[#CEF144]" : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* FAQ Answer Content (Animated) */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;