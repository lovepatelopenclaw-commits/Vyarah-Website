import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "App & Product Development — Vyarah",
    description: "MVP and full-scale SaaS platform development using modern tech stacks like React, Next.js, and Supabase.",
    alternates: {
        canonical: "/services/app-development",
    },
};

export default function AppDevelopment() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software Development",
            "provider": {
                "@type": "Organization",
                "name": "Vyarah",
                "url": "https://vyarah.com"
            },
            "description": metadata.description,
            "url": "https://vyarah.com/services/app-development"
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
                    "name": "App Development"
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
                            Product & <span className="text-outline">App Development</span>
                        </h1>
                        <p className="section-desc">
                            From MVP to scale-ready platforms, we build software products that users love and investors fund.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
