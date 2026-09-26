"use client";

import { motion } from "framer-motion";
import { 
  SiOpenaigym, 
  SiGoogle, 
  SiMeta, 
  SiAnthropic, 
  SiMistralai, 
  SiCodacy ,
SiXdotorg
  
} from "react-icons/si";
import { FaRobot, FaMicrochip, FaBrain } from "react-icons/fa";

// Array of 10 AI Models with React Icons
const aiModelsList = [
  {
    name: "GPT-4o",
    provider: "OpenAI",
    description: "High-intelligence flagship model for complex reasoning, multimodal tasks, and rapid coding.",
    icon: <SiOpenaigym className="w-7 h-7 text-emerald-500" />,
    badge: "Most Popular",
  },
  {
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    description: "Exceptional capabilities in nuanced writing, complex coding, and contextual analysis.",
    icon: <SiAnthropic className="w-7 h-7 text-amber-500" />,
    badge: "Top Rated",
  },
  {
    name: "Gemini 1.5 Pro",
    provider: "Google AI",
    description: "Massive context window handling huge documents, video analysis, and multi-step logic.",
    icon: <SiGoogle className="w-7 h-7 text-blue-500" />,
    badge: "Advanced",
  },
  {
    name: "Llama 3.1 405B",
    provider: "Meta",
    description: "State-of-the-art open-weights model delivering robust enterprise performance and scalability.",
    icon: <SiMeta className="w-7 h-7 text-blue-600" />,
    badge: "Open Weights",
  },
  {
    name: "Mistral Large 2",
    provider: "Mistral AI",
    description: "Top-tier reasoning model optimized for multilingual tasks, code generation, and strict logic.",
    icon: <SiMistralai className="w-7 h-7 text-orange-500" />,
    badge: "Multilingual",
  },
  {
    name: "Command R+",
    provider: "Cohere",
    description: "Specialized conversational model built for enterprise RAG workflows and tool use.",
    icon: <SiCodacy  className="w-7 h-7 text-teal-500" />,
    badge: "Enterprise",
  },
  {
    name: "Grok 2",
    provider: "xAI",
    description: "Cutting-edge creative model with real-time knowledge integration and deep reasoning.",
    icon: <SiXdotorg className="w-7 h-7 text-gray-200" />,
    badge: "Real-Time",
  },
  {
    name: "DeepSeek V3",
    provider: "DeepSeek",
    description: "Ultra-efficient architecture providing lightning-fast code synthesis and advanced math problem-solving.",
    icon: <FaMicrochip className="w-7 h-7 text-indigo-400" />,
    badge: "Fast & Cheap",
  },
  {
    name: "Qwen 2.5 Max",
    provider: "Alibaba",
    description: "Powerful general-purpose intelligence excelling in coding, mathematics, and instruction-following.",
    icon: <FaBrain className="w-7 h-7 text-purple-400" />,
    badge: "High Performance",
  },

];

const AIModels = () => {
  return (
    <section 
      id="ai-models" 
      className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#0B0F15] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#10a37f] dark:text-[#CEF144] font-bold">
            Multi-Model Powerhouse
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Switch Between World-Class AI Models Instantly
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            EchoGPT integrates seamlessly with the industry&apos;s leading intelligence providers, giving you the flexibility to choose the perfect model for every task.
          </p>
        </div>

        {/* AI Models Grid (10 Models) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiModelsList.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-[#151a23] p-7 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:border-[#CEF144]/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {model.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-200/70 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                    {model.badge}
                  </span>
                </div>

                {/* Model Name & Provider */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#10a37f] dark:group-hover:text-[#CEF144] transition-colors">
                  {model.name}
                </h3>
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-3">
                  Provider: {model.provider}
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
              </div>

              {/* Action Link / Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/5 flex items-center justify-between text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#10a37f] dark:group-hover:text-[#CEF144] transition-colors">
                <span>Explore Model</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIModels;