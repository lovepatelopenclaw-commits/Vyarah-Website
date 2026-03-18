import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FreeAuditForm from "@/components/FreeAuditForm";

export const metadata = {
    title: "Free Growth Audit — Vyarah",
    description: "Get a comprehensive, data-driven analysis of your digital presence. We identify where you are losing revenue and how AI automation can fix it. Free 15-page PDF report.",
    alternates: {
        canonical: "/free-audit",
    },
    openGraph: {
        title: "Free Growth Audit — Vyarah",
        description: "Get a free 15-page PDF audit of your digital presence. Find out where you are losing revenue and how AI automation can fix it.",
    },
};

export default function FreeAudit() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free Growth Audit",
            "description": metadata.description,
            "url": "https://vyarah.com/free-audit",
            "provider": {
                "@type": "Organization",
                "name": "Vyarah",
                "url": "https://vyarah.com"
            }
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
                    "name": "Free Growth Audit"
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
            <main className="section page-header" style={{ paddingTop: '100px', minHeight: '60vh', background: 'var(--sage)' }}>
                <div className="container">
                    <div className="contact-grid" style={{ alignItems: 'flex-start' }}>
                        <div className="contact-info reveal">
                            <span className="section-tag" style={{ background: 'var(--charcoal)', color: 'var(--white)' }}>Free Growth Audit</span>
                            <h1 className="section-title">
                                Stop Guessing. Start <span className="text-outline">Scaling.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                                Get a comprehensive, data-driven analysis of your current digital presence. We&apos;ll identify exactly where you are losing revenue and how AI automation can fix it.
                            </p>
                            
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>SEO & Technical Performance Analysis</strong>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>Conversion Rate Optimization Opportunities</strong>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>Automation & AI Integration Roadmap</strong>
                                </li>
                            </ul>
                            
                            <p style={{ color: 'var(--text-muted)' }}>
                                Includes a personalized 15-page PDF report delivered within 48 hours. No commitments required.
                            </p>
                        </div>
                        
                        <FreeAuditForm />
                    </div>
                </div>
            </main>
            <Footer />
            <ScrollReveal />
        </>
    );
}
