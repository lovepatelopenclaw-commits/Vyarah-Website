import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Web Development Services — Vyarah",
    description: "High-converting websites and funnels engineered for Next.js performance and maximum conversions.",
    alternates: {
        canonical: "/services/web-development",
    },
    openGraph: {
        title: "Web Development Services — Vyarah",
        description: "High-converting websites and funnels engineered for Next.js performance and maximum conversions.",
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
                "url": "https://www.vyarah.com"
            },
            "description": metadata.description,
            "url": "https://www.vyarah.com/services/web-development"
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
            <section className="section bg-light">
                <div className="container">
                    <div className="service-details">
                        <h2>Beyond Brochure Websites: Building Revenue Machines</h2>
                        <p>Most agencies build "brochure websites" that look pretty but fail to generate leads. We take a different approach. Every website we develop is treated as a <strong>High-Performance Revenue Machine</strong>. Using modern frameworks like Next.js, we ensure your site is blazing fast, SEO-optimized out of the box, and structured specifically to guide visitors toward booking a call or making a purchase.</p>
                        
                        <h3>Our Web Development Capabilities:</h3>
                        <ul>
                            <li><strong>Next.js & React Performance:</strong> Sub-second load times that keep visitors engaged and boost your Google rankings.</li>
                            <li><strong>Conversion Rate Optimization (CRO):</strong> Data-backed UX/UI design that prioritizes clear calls-to-action, trust indicators, and frictionless user journeys.</li>
                            <li><strong>Custom Funnel Engineering:</strong> Multi-step lead capture flows, dynamic pricing calculators, and interactive elements that qualify prospects before they ever speak to your sales team.</li>
                            <li><strong>Headless CMS Integrations:</strong> Empower your marketing team to publish content instantly without breaking the design, using Sanity, Contentful, or custom Supabase backends.</li>
                        </ul>
                        
                        <div style={{ marginTop: '2rem' }}>
                            <a href="/#contact" className="btn btn-dark">Start Building Your Revenue Machine</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
