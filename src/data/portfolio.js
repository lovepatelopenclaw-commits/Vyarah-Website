const portfolioData = [
    {
        title: "E-Commerce Growth Engine",
        slug: "ecommerce-growth-engine",
        category: "Web Development",
        description: "Built a high-converting Shopify-to-custom migration with AI-powered product recommendations, automated email flows, and a 3x improvement in checkout completion rates.",
        tags: ["Next.js", "Stripe", "AI", "Node.js"],
        color: "card-sage",
        clientInfo: "Leading D2C E-commerce Brand",
        challenge: "The client was experiencing a 78% cart abandonment rate on their existing Shopify store due to slow load times and a generic, unoptimized user journey. They needed a custom solution that could handle high traffic spikes and provide personalized product recommendations.",
        solution: "We migrated their frontend to a lightning-fast custom Next.js application, integrating directly with a Headless ecommerce backend. We implemented an AI recommendation engine built on user browsing patterns and integrated advanced cart recovery email sequences.",
        results: [
            "3x improvement in checkout completion rate",
            "45% increase in average order value via AI upselling",
            "Page load speeds reduced from 4.2s to sub-second",
            "120% increase in mobile conversion rates"
        ],
        testimonial: {
            text: "Vyarah didn't just build us a faster website; they built a revenue machine. The ROI from the AI recommendations alone paid for the project in the first two months.",
            author: "Chief Marketing Officer"
        }
    },
    {
        title: "SaaS Analytics Dashboard",
        slug: "saas-analytics-dashboard",
        category: "Product Development",
        description: "Designed and developed a real-time analytics platform for a B2B SaaS startup. Interactive charts, role-based access, and automated PDF reporting — shipped in under 6 weeks.",
        tags: ["React", "Python", "PostgreSQL", "AWS"],
        color: "card-yellow",
        clientInfo: "B2B Financial Tech Startup",
        challenge: "The client's users were overwhelmed by raw data exports. They needed a beautiful, interactive dashboard that could process millions of data points in real-time and automatically generate executive summaries.",
        solution: "We engineered a robust React frontend powered by a highly optimized Python backend. We used advanced caching strategies and WebSockets to deliver real-time data visualization securely, along with a custom PDF generation service.",
        results: [
            "Shipped to production in under 6 weeks",
            "Handle processing of 5M+ daily API events",
            "Zero downtime during peak reporting periods",
            "User engagement time increased by 300%"
        ],
        testimonial: {
            text: "They understood our complex data requirements perfectly and delivered a dashboard that our enterprise clients absolutely love.",
            author: "Founder & CEO"
        }
    },
    {
        title: "AI Lead Qualification Bot",
        slug: "ai-lead-qualification-bot",
        category: "AI Automation",
        description: "Deployed a WhatsApp + website chatbot that qualifies leads, books calls, and syncs with the client's CRM. Handles 200+ conversations daily without human intervention.",
        tags: ["OpenAI", "LangChain", "Node.js", "WhatsApp API"],
        color: "card-dark",
        clientInfo: "National Real Estate Brokerage",
        challenge: "The sales team was wasting hours acting on unqualified leads, while high-intent prospects were slipping away because they couldn't get support outside of business hours.",
        solution: "We developed a context-aware conversational AI agent integrated directly with WhatsApp and their website. The bot asks qualifying questions, answers complex queries based on their property database, and seamlessly hands off qualified leads (or books appointments) directly in their CRM.",
        results: [
            "Handles 200+ daily conversations autonomously",
            "Sales team efficiency increased by 65%",
            "Lead response time reduced to 2 seconds 24/7",
            "40% increase in actual booked appointments"
        ],
        testimonial: {
            text: "It's like having our best sales rep working 24/7. It filters the noise and only brings us people ready to buy.",
            author: "VP of Sales"
        }
    },
    {
        title: "Healthcare Appointment Platform",
        slug: "healthcare-appointment-platform",
        category: "App Development",
        description: "Built a full-stack appointment booking system for a clinic chain. Patient portal, doctor scheduling, SMS reminders, and payment integration — all in one platform.",
        tags: ["Flutter", "Firebase", "Razorpay", "Node.js"],
        color: "card-sage",
        clientInfo: "Multi-Location Clinic Network",
        challenge: "The clinic was using three different disjointed systems for booking, patient records, and payments, leading to administrative chaos and a poor patient experience.",
        solution: "We developed a unified cross-platform mobile application utilizing Flutter and Node.js. It features a secure patient portal, real-time doctor availability calendars, automated SMS/WhatsApp reminders, and a frictionless payment gateway.",
        results: [
            "No-show rate reduced by 48%",
            "Administrative workload reduced by 30%",
            "Processed ₹1.2Cr+ in secure online payments",
            "98% patient satisfaction rating on the new app"
        ],
        testimonial: {
            text: "This platform transformed our operations. Patients love the convenience, and our staff finally has a system that actually works.",
            author: "Operations Director"
        }
    }
];

export default portfolioData;
