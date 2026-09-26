"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  // Framer Motion Animation Variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      aria-labelledby="hero-heading" 
      className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-[#0B0F15] transition-colors duration-300"
    >
      {/* Background Subtle Glow Effect - Adjusts for Light/Dark mode */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-3/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#10a37f]/10 dark:bg-[#CEF144]/15 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content - Left Side */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Badge / Pill */}
            <motion.div  className="inline-block px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm font-medium text-gray-600 dark:text-gray-300">
              <span className="text-[#10a37f] dark:text-[#CEF144] font-bold">New:</span> The ultimate AI automation quality
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              id="hero-heading"
            
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight"
            >
              The Fastest Way to <br className="hidden md:block" />
              Elevate Workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10a37f] to-green-600 dark:from-[#CEF144] dark:to-[#a7c92b]">EchoGPT</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
            
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
            >
              Experience unparalleled AI quality. EchoGPT is built for modern teams to automate operations, close deals faster, and generate high-precision outcomes with unmatched speed and reliability.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
             
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link href="#get-started" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#10a37f] text-white hover:bg-[#0e906f] dark:bg-[#CEF144] dark:text-[#0B0F15] dark:hover:bg-[#bce038] px-8 py-3.5 rounded-md text-base font-bold shadow-lg transition-colors"
                >
                  Start for Free
                </motion.button>
              </Link>
              
              <Link href="#demo" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3.5 rounded-md text-base font-bold text-gray-800 border-2 border-gray-300 hover:border-gray-900 dark:text-white dark:border-white/20 dark:hover:border-[#CEF144] dark:hover:text-[#CEF144] transition-colors"
                >
                  Book a Demo
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
          
          </motion.div>

          {/* Visual Element - Right Side */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
           <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#10a37f]/20 to-transparent dark:from-[#CEF144]/15 dark:to-transparent rounded-3xl transform rotate-3"></div>
              
              {/* Main Container Box */}
              <div className="absolute inset-0 bg-gray-950 dark:bg-gray-950 rounded-3xl shadow-xl border border-gray-200 dark:border-white/10 overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                
                {/* SVG / Image perfectly stretched to fill the container */}
                <img 
                  src="/ecogpts.svg" 
                  alt="EchoGPT Illustration" 
                  className="w-full h-full object-cover rounded-3xl" 
                />

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;