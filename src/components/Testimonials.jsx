import guaranteesData from "@/data/testimonials";

function GuaranteeIcon({ iconId }) {
    const icons = {
        clock: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        target: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        key: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
        ),
    };
    return icons[iconId] || null;
}

export default function Testimonials() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Vyarah Digital Growth Services",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "24"
        },
        "review": guaranteesData.map(g => ({
            "@type": "Review",
            "name": g.title,
            "reviewBody": g.description,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "author": {
                "@type": "Organization",
                "name": "Vyarah Client"
            }
        }))
    };

    return (
        <section className="section testimonials sage-section" id="guarantees">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Our Promise</span>
                    <h2 className="section-title">
                        What We{" "}
                        <span className="text-outline">Deliver.</span>
                    </h2>
                    <p className="section-desc">
                        No fluff, no empty promises. Here is what you can count on when you work with us.
                    </p>
                </div>
                <div className="testimonials-grid">
                    {guaranteesData.map((g) => (
                        <div className="testimonial-card reveal" key={g.title}>
                            <div className="guarantee-icon">
                                <GuaranteeIcon iconId={g.iconId} />
                            </div>
                            <h3 className="guarantee-title">{g.title}</h3>
                            <p>{g.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
