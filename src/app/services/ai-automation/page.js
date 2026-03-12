import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "AI Automation Services — Vyarah",
    description: "Eliminate manual work and scale revenue with AI chatbots, WhatsApp automation, and CRM logic built for ambitious businesses.",
    alternates: {
        canonical: "/services/ai-automation",
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
                "url": "https://vyarah.com"
            },
            "description": metadata.description,
            "url": "https://vyarah.com/services/ai-automation"
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://vyarah.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://vyarah.com/services"
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
            <Footer />
        </>
    );
}
