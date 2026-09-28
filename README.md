# EchoGPT Landing Page

A modern, high-performance landing page designed to showcase the capabilities of EchoGPT and drive user adoption. This project was developed to fulfill the requirement for a Single-Page EchoGPT Website, demonstrating a complete user journey from value proposition to conversion.

# Open in Browser: 
Navigate to https://echogpt-landing-page.vercel.app to view the landing page.
##  Project Overview

This project is a single-page marketing website for EchoGPT, built with a dark-mode aesthetic and neon green accents. The landing page effectively communicates the product's value proposition: "The Fastest Way to Elevate Workflow with EchoGPT".

The landing page includes the following key sections:
*   **Hero Section:** A compelling headline, subheadline emphasizing unparalleled AI quality, a primary "Try EchoGPT Now" call-to-action (CTA), and an engaging 3D illustration of a robot using a futuristic interface.
*   **Why Choose EchoGPT:** Highlights core benefits such as "Lightning-Fast AI Processing," "Enterprise-Grade Security," and a "Seamless Dashboard UI," emphasizing speed, scalability, and precision. It also highlights performance benchmarks like "Transforming Customer Engagement at Scale" and "Unmatched Speed & Efficiency".
*   **AI Models:** Details the platform's multi-model capabilities, allowing users to "Switch Between World-Class AI Models Instantly," featuring integrations like GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro.
*   **Product Preview:** Provides a visual look at the EchoGPT dashboard in action, featuring tabs for "AI Dashboard," "Real-time Analytics," and "Plugin," along with a mockup of the Image Studio tool.
*   **Pricing:** Outlines transparent pricing plans ("Starter," "Pro," and "Enterprise") to help users choose the right fit for their team.
*   **FAQ:** An accordion-style section addressing common questions about features, pricing, security, and usage limits.
*   **Testimonials:** Features reviews from industry professionals (e.g., CTOs and Marketing Directors) highlighting the impact of EchoGPT on their operations and workflows.
*   **Call-to-Action (CTA):** A strong final prompt, "Ready to Supercharge Your Workflow with AI?", offering options to "Go to Web App" or "See All Ai Tool," and noting a 14-day free trial on Pro plans with no credit card required.




##  Technologies Used

Based on the project configuration, the following technologies were utilized:
*   **Framework:** Next.js (v16.3.6) with React (v19.2.8)
*   **Styling:** Tailwind CSS (v4) for responsive design and utility-first styling.
*   **UI Components & Libraries:**
    *   `shadcn/ui` and `@base-ui/react` for accessible and customizable UI components.
    *   `lucide-react` and `react-icons` for iconography.
*   **Animations:** `framer-motion` and `tw-animate-css` for smooth transitions and visual effects.
*   **Theming:** `next-themes` to support the dark-mode aesthetic.
*   **Language:** TypeScript for type safety.

##  Assumptions

*   **Static Content:** The content presented (testimonials, pricing details, FAQ answers) is assumed to be static for the purpose of this frontend demonstration.
*   **Routing:** While designed as a single-page experience, the navigation links (Features, AI Models, Pricing) are assumed to smoothly scroll to their respective sections on the page[cite: 2].
*   **API/Backend:** The "Sign In", "Get Started", and "Try EchoGPT Now" buttons are assumed to route to an external authentication or application portal, as no backend logic is included in this purely frontend assignment[cite: 2, 7].

##  Additional Features Implemented

*   **Responsive Grid System:** Employed Tailwind CSS to create a flexible and responsive layout, evident in the multi-column layout of the "Why Choose EchoGPT" and "Testimonials" sections[cite: 3, 9].
*   **Interactive UI Elements:** Implemented interactive components such as hover states on pricing cards, expandable FAQ accordions, and dynamic model selection cards[cite: 4, 7, 8].
*   **Modern Visual Design:** Consistently applied a dark theme with vibrant neon green accents to create a futuristic and high-tech brand identity[cite: 2, 3, 4, 5, 6, 7, 8, 9, 10].
*   **Performance Optimization:** Built with Next.js App Router and Tailwind v4 to ensure fast loading times and optimized rendering.

##  Setup Instructions

To run this landing page locally, follow these steps:

**1. Clone the repository:**
\`\`\`bash
git clone https://github.com/Sagor8187/echogpt-landing-page.git
\`\`\`
*(Note: Ensure this URL matches your actual repository)*

**2. Navigate to the project directory:**
\`\`\`bash
cd my-app
\`\`\`

**3. Install dependencies:**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

**4. Start the development server:**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`
