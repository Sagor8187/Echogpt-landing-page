"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { ModeToggle } from "./darktheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#features");
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Features", href: "#features" },
    { name: "AI Models", href: "#ai-models" },
    { name: "Product Preview", href: "#preview" },
    { name: "Pricing", href: "#pricing" },
  ];

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  const menuVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0B0F15]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-1" 
              href="/"
              onClick={() => setActiveLink("")}
            >
              <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Echo<span className="text-[#10a37f] dark:text-[#CEF144]">GPT</span>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {links.map((link) => {
              const isActive = activeLink === link.href;
              
              return (
                <Link 
                  href={link.href} 
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm transition-colors duration-300 relative group flex items-center ${
                    isActive 
                      ? "text-[#10a37f] font-bold dark:font-medium dark:text-[#CEF144]" 
                      : "text-gray-600 font-medium hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`} 
                >
                  {link.name}

                  {/* Active/Hover Underline */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 rounded-full bg-[#10a37f] dark:bg-[#CEF144] shadow-[0_0_4px_rgba(16,163,127,0.4)] dark:shadow-[0_0_8px_rgba(206,241,68,0.6)] ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-5">
            
            {/* Theme Toggle Button */}
            <ModeToggle />

            {/* Why Choose EchoGPT Button */}
            <Link 
              href="#why-choose-us" 
              onClick={() => setActiveLink("#why-choose-us")}
              className={`text-sm font-medium px-4 py-2 border rounded-md transition-all ${
                activeLink === "#why-choose-us" 
                  ? "bg-[#10a37f]/10 border-[#10a37f] text-[#10a37f] dark:bg-[#CEF144]/10 dark:text-[#CEF144] dark:border-[#CEF144]/30" 
                  : "text-gray-700 border-gray-300 hover:border-gray-900 hover:bg-gray-50 dark:text-white dark:border-white/20 dark:hover:border-[#CEF144] dark:hover:bg-white/5"
              }`}
            >
              Why Choose EchoGPT
            </Link>
            
            {/* Get Started Button */}
            <Link href="#cta">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#10a37f] text-white hover:bg-[#0e906f] dark:bg-[#CEF144] dark:text-[#0B0F15] px-6 py-2.5 rounded-md text-sm font-bold dark:hover:bg-[#bce038] transition-colors shadow-md"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-4">
            <ModeToggle />

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-[#CEF144] focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden bg-white dark:bg-[#0B0F15] border-b border-gray-200 dark:border-white/10 absolute w-full shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col">
              {links.map((link) => {
                const isActive = activeLink === link.href;

                return (
                  <Link 
                    href={link.href} 
                    key={link.name} 
                    onClick={() => handleLinkClick(link.href)} 
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                      isActive 
                        ? "bg-[#10a37f]/10 text-[#10a37f] border border-[#10a37f]/20 dark:bg-[#CEF144]/10 dark:text-[#CEF144] dark:border-[#CEF144]/20" 
                        : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="border-t border-gray-200 dark:border-white/10 my-3"></div>
              
              <div className="px-2 space-y-3 pt-2">
                <Link href="#why-choose-us" onClick={() => handleLinkClick("#why-choose-us")}>
                  <button className={`w-full px-5 py-3 rounded-md text-sm font-medium transition-colors border ${
                    activeLink === "#why-choose-us"
                      ? "bg-[#10a37f]/10 text-[#10a37f] border-[#10a37f]/30 dark:bg-[#CEF144]/10 dark:text-[#CEF144] dark:border-[#CEF144]/30"
                      : "text-gray-700 border-gray-300 hover:bg-gray-50 dark:text-white dark:border-white/20 dark:hover:bg-white/5"
                  }`}>
                    Why Choose EchoGPT
                  </button>
                </Link>
                
                <Link href="#cta" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#10a37f] text-white hover:bg-[#0e906f] dark:bg-[#CEF144] dark:text-[#0B0F15] px-5 py-3 rounded-md text-sm font-bold dark:hover:bg-[#bce038] transition-colors shadow-md">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;