import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Growth Systems & SEO — Vyarah",
    description: "Data-driven SEO strategies, conversion rate optimization, and programmatic growth engines for compounding returns.",
    alternates: {
        canonical: "/services/growth-systems",
    },
};

export default function GrowthSystems() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SEO and Growth Marketing",
            "provider": {
                "@type": "Organization",
                "name": "Vyarah",
                "url": "https://vyarah.com"
            },
            "description": metadata.description,
            "url": "https://vyarah.com/services/growth-systems"
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
                    "name": "Growth Systems"
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
                            Data-Driven <span className="text-outline">Growth</span>
                        </h1>
                        <p className="section-desc">
                            Data-driven growth engines that compound over time. Turn traffic into revenue with precision optimization.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
