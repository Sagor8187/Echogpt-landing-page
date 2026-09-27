"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#070A0F] pt-16 pb-8 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <Link 
              className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-1" 
              href="/"
            >
              <svg className="w-6 h-6 text-[#10a37f] dark:text-[#CEF144]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Echo<span className="text-[#10a37f] dark:text-[#CEF144]">GPT</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              The ultimate AI automation platform for modern teams. Execute complex workflows, generate high-precision responses, and scale operations instantly.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-5">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Discord" className="text-gray-400 hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#features" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Features</Link></li>
              <li><Link href="#ai-models" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">AI Models</Link></li>
              <li><Link href="#pricing" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Contact Sales</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">Security</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section: Copyright & Status */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} EchoGPT Inc. All rights reserved.
          </p>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10a37f] dark:bg-[#CEF144] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10a37f] dark:bg-[#CEF144]"></span>
            </span>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              All systems operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;