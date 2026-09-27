"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section 
      id="cta" 
      className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#0B0F15] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#10a37f] dark:bg-[#151a23] border border-transparent dark:border-white/10 shadow-2xl px-8 py-16 md:px-16 md:py-20 text-center flex flex-col items-center"
        >
          {/* Background Decorative Glow (Dark Mode only) */}
          <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#CEF144]/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Supercharge Your Workflow with AI?
            </h2>
            <p className="text-base md:text-lg text-emerald-100 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of innovative teams already using EchoGPT to automate tasks, generate insights, and scale operations effortlessly.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="https://echogpt-ecosystem-ui.vercel.app/" target="_blank" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-[#10a37f] dark:bg-[#CEF144] dark:text-[#0B0F15] px-10 py-4 rounded-xl text-base font-bold shadow-xl hover:bg-gray-50 dark:hover:bg-[#bce038] transition-colors"
                >
                  Go to Web App
                </motion.button>
              </Link>
              
              <Link href="https://echogpt-ecosystem-ui.vercel.app/store" target="_blank" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-10 py-4 rounded-xl text-base font-bold text-white border-2 border-white/30 hover:border-white dark:border-white/20 dark:hover:border-[#CEF144] dark:hover:text-[#CEF144] transition-colors"
                >
                  See All Ai Tool
                </motion.button>
              </Link>
            </div>
            
            {/* No Credit Card text */}
            <p className="text-sm text-emerald-200 dark:text-gray-500 pt-4">
              No credit card required. 14-day free trial on Pro plans.
            </p>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;