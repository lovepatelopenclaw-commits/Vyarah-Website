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
            <section className="section bg-light">
                <div className="container">
                    <div className="service-details">
                        <h2>Scale-Ready SaaS & Web Applications</h2>
                        <p>Whether you're an ambitious startup racing to launch an MVP or an established enterprise needing a custom internal tool, our <strong>Product & App Development</strong> team builds solutions that scale gracefully. We specialize in building fast, secure, and modern web applications that handle complex business logic without compromising on user experience.</p>
                        
                        <h3>Our Product Engineering Expertise:</h3>
                        <ul>
                            <li><strong>Rapid MVP Development:</strong> Get your product to market fast. We use proven tech stacks (Next.js, Node.js, Supabase) to build your core features and validate your idea quickly.</li>
                            <li><strong>Full-Stack SaaS Platforms:</strong> End-to-end development including user authentication, multi-tenant architectures, Stripe billing integrations, and complex database design.</li>
                            <li><strong>Progressive Web Apps (PWAs):</strong> Deliver app-like experiences on the web with offline capabilities, push notifications, and lightning-fast transitions.</li>
                            <li><strong>API & Backend Systems:</strong> Robust, secure, and scalable API architectures that power your frontend applications and integrate seamlessly with third-party services.</li>
                        </ul>
                        
                        <div style={{ marginTop: '2rem' }}>
                            <a href="/#contact" className="btn btn-dark">Discuss Your App Idea</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
