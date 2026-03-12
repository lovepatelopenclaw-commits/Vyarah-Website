import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Web Development Services — Vyarah",
    description: "High-converting websites and funnels engineered for Next.js performance and maximum conversions.",
    alternates: {
        canonical: "/services/web-development",
    },
};

export default function WebDevelopment() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development",
            "provider": {
                "@type": "Organization",
                "name": "Vyarah",
                "url": "https://vyarah.com"
            },
            "description": metadata.description,
            "url": "https://vyarah.com/services/web-development"
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
                    "name": "Web Development"
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
                            Engineered for <span className="text-outline">Revenue</span>
                        </h1>
                        <p className="section-desc">
                            Revenue-focused websites and funnels engineered for conversions, not vanity metrics. Every pixel earns its place.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
