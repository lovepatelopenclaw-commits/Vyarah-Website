import testimonialsData from "@/data/testimonials";

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
        "review": testimonialsData.map(t => ({
            "@type": "Review",
            "name": t.outcome,
            "reviewBody": t.description,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "author": {
                "@type": "Person",
                "name": t.name
            }
        }))
    };

    return (
        <section className="section testimonials sage-section" id="testimonials">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Client Success</span>
                    <h2 className="section-title">
                        Real Results for{" "}
                        <span className="text-outline">Real Clients.</span>
                    </h2>
                    <p className="section-desc">
                        Don&apos;t just take our word for it. See how we&apos;ve helped businesses scale their growth and revenue.
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonialsData.map((t, i) => (
                        <div className="testimonial-card reveal" key={i}>
                            <div className="testimonial-quote">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.1, marginBottom: '1rem' }}>
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p>&quot;{t.description}&quot;</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4 className="author-name">{t.name}</h4>
                                    <p className="author-company">{t.company}</p>
                                    <span className="author-outcome badge-dot">{t.outcome}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
