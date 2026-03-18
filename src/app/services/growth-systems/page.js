import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Growth Systems & SEO — Vyarah",
    description: "Data-driven SEO strategies, conversion rate optimization, and programmatic growth engines for compounding returns.",
    alternates: {
        canonical: "/services/growth-systems",
    },
    openGraph: {
        title: "Growth Systems & SEO — Vyarah",
        description: "Data-driven SEO strategies, conversion rate optimization, and programmatic growth engines for compounding returns.",
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
            <section className="section bg-light">
                <div className="container">
                    <div className="service-details">
                        <h2>Predictable Growth Through Engineering & SEO</h2>
                        <p>Growth isn't magic; it's math and engineering. Our <strong>Growth Systems & SEO</strong> services move away from traditional "spray and pray" marketing. Instead, we build programmatic growth engines combining deep technical SEO, structured data, and relentless A/B testing to ensure compounding returns on your digital investment.</p>
                        
                        <h3>How We Engineer Growth:</h3>
                        <ul>
                            <li><strong>Technical & Programmatic SEO:</strong> Beyond keywords. We fix core web vitals, implement dynamic JSON-LD schema (Organization, LocalBusiness, FAQ), and build scalable page architectures that dominate search results.</li>
                            <li><strong>Conversion Rate Optimization (CRO):</strong> We analyze user behavior, eliminate friction points, and run data-driven experiments to maximize the percentage of visitors who become paying customers.</li>
                            <li><strong>Lead Generation Funnels:</strong> Designing and deploying integrated funnels—from high-intent lead magnets (like ROI calculators or free audits) to automated email nurture sequences.</li>
                            <li><strong>Analytics & Attribution:</strong> Clear visibility into what works. We set up robust tracking architectures so you know exactly which initiatives are driving revenue.</li>
                        </ul>
                        
                        <div style={{ marginTop: '2rem' }}>
                            <a href="/#contact" className="btn btn-dark">Audit Your Current Growth</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
