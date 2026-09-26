"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Preview tabs data
const previewTabs = [
  { id: "dashboard", label: "AI Dashboard", image: "/dashboard.png" },
  { id: "analytics", label: "Real-time Analytics", image: "/analyzer.png" },
  { id: "store", label: "Plugin", image: "/store.png" },
 
];

const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Find current active image based on tab
  const currentImage = previewTabs.find((tab) => tab.id === activeTab)?.image || "/ecogpt.png";

  return (
    <section 
      id="preview" 
      className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#0B0F15] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[#10a37f] dark:text-[#CEF144] font-bold">
            Product Preview
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Take a Closer Look at EchoGPT in Action
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Explore our sleek, high-performance dashboard and intuitive interfaces designed to maximize your productivity.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {previewTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#10a37f] text-white dark:bg-[#CEF144] dark:text-[#0B0F15] shadow-lg shadow-[#10a37f]/20 dark:shadow-[#CEF144]/15 scale-105"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Screenshot Frame Container */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto rounded-3xl p-3 bg-gray-100 dark:bg-[#151a23] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Browser Top Bar Simulation */}
          <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#0B0F15] rounded-t-2xl mb-3 border-b border-gray-200 dark:border-white/5">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">
              https://echogpt.app/{activeTab}
            </div>
            <div className="w-10"></div>
          </div>

          {/* Screenshot Image Area */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black">
            <Image 
              src={currentImage} 
              alt={`EchoGPT ${activeTab} screenshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductPreview;