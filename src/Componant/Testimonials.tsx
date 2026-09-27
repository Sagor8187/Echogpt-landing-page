"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Testimonial Data
const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO",
    company: "TechNova Solutions",
    content: "EchoGPT completely transformed how our engineering team operates. The seamless switching between GPT-4o and Claude 3.5 Sonnet has accelerated our coding and debugging process by at least 40%.",
    rating: 5,
    avatarColor: "bg-blue-500",
  },
  {
    name: "David Chen",
    role: "Head of Operations",
    company: "Global Logistics Inc.",
    content: "We needed an AI solution that prioritized data security without compromising on speed. The Enterprise plan gave us exactly that. Automated workflows are now running flawlessly 24/7.",
    rating: 5,
    avatarColor: "bg-purple-500",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Creative Spark",
    content: "The custom fine-tuning feature is a game changer. We trained EchoGPT on our brand voice, and now it generates marketing copy, emails, and social posts that sound exactly like us. Highly recommended!",
    rating: 5,
    avatarColor: "bg-emerald-500",
  },
];

const Testimonials = () => {
  return (
    <section 
      id="testimonials" 
      className="relative w-full py-20 lg:py-28 bg-gray-50 dark:bg-[#070A0F] transition-colors duration-300 border-t border-gray-100 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#10a37f] dark:text-[#CEF144] font-bold">
            Customer Success
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Trusted by Innovative Teams
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            See how forward-thinking companies are leveraging EchoGPT to automate tasks, scale operations, and drive real business growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-[#151a23] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:border-[#CEF144]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <FaQuoteLeft className="w-8 h-8 text-[#10a37f]/20 dark:text-[#CEF144]/20 group-hover:text-[#10a37f]/40 dark:group-hover:text-[#CEF144]/40 transition-colors" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-white/10">
                {/* Placeholder Avatar with Initials */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner ${testimonial.avatarColor}`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {testimonial.role}, <span className="text-[#10a37f] dark:text-[#CEF144]">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;