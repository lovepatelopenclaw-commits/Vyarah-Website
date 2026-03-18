import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "AI Automation Services — Vyarah",
    description: "Eliminate manual work and scale revenue with AI chatbots, WhatsApp automation, and CRM logic built for ambitious businesses.",
    alternates: {
        canonical: "/services/ai-automation",
    },
    openGraph: {
        title: "AI Automation Services — Vyarah",
        description: "Eliminate manual work and scale revenue with AI chatbots, WhatsApp automation, and CRM logic built for ambitious businesses.",
    },
};

export default function AIAutomation() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Automation",
            "provider": {
                "@type": "Organization",
                "name": "Vyarah",
                "url": "https://www.vyarah.com"
            },
            "description": metadata.description,
            "url": "https://www.vyarah.com/services/ai-automation"
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.vyarah.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.vyarah.com/services"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "AI Automation"
                }
            ]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="section page-header" style={{ paddingTop: '100px', minHeight: '60vh' }}>
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-tag">Service</span>
                        <h1 className="section-title">
                            AI Automation <span className="text-outline">Systems</span>
                        </h1>
                        <p className="section-desc">
                            Deploy intelligent agents that handle interactions, qualify leads, and streamline operations around the clock. Your revenue machine, automated.
                        </p>
                    </div>
                </div>
            </main>
            <section className="section bg-light">
                <div className="container">
                    <div className="service-details">
                        <h2>Why AI Automation is Non-Negotiable for Growth</h2>
                        <p>In today&apos;s fast-paced digital landscape, responding to leads manually or managing repetitive tasks is costing you revenue. Our <strong>AI Automation Services</strong> are designed to completely engineer how your business operates. From intelligent chatbots that provide 24/7 customer support to seamless Zapier workflows that connect your CRM, email, and sales pipelines — we build systems that work while you sleep.</p>
                        
                        <h3>Key Automation Solutions We Implement:</h3>
                        <ul>
                            <li><strong>AI Chatbots & Conversational Agents:</strong> Deploy Next.js and LangChain-powered chatbots that understand context, answer FAQs, and qualify leads on autopilot.</li>
                            <li><strong>WhatsApp Business Automation:</strong> Connect directly with your customers where they are. Automate booking flows, delivery updates, and promotional broadcasts.</li>
                            <li><strong>CRM & Pipeline Sync:</strong> No more manual data entry. We integrate HubSpot, Salesforce, or custom databases with your web forms to ensure zero lead leakage.</li>
                            <li><strong>Custom AI Workflows:</strong> Using tools like Zapier and Make.com, we orchestrate complex logic that triggers emails, generates documents, and updates team dashboards instantly.</li>
                        </ul>
                        
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link href="/#contact" className="btn btn-dark">Discuss Your Automation Needs</Link>
                            <Link href="/build-your-chatbot" className="btn btn-white">Try Chatbot Demo</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
