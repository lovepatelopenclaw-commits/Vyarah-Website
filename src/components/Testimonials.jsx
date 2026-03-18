import testimonialsData from "@/data/testimonials";

export default function Testimonials() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Vyarah Growth Systems",
        "review": testimonialsData.map((t) => ({
            "@type": "Review",
            "name": t.outcome,
            "reviewBody": t.description,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
            },
            "author": {
                "@type": "Person",
                "name": t.name,
            },
        })),
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
                        A few representative outcomes from recent web, AI, and automation projects.
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonialsData.map((t, i) => (
                        <article className="testimonial-card testimonial-card-simple reveal" key={i}>
                            <div className="testimonial-quote">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p>&quot;{t.description}&quot;</p>
                            </div>
                            <div className="testimonial-author testimonial-author-simple">
                                <div className="author-info author-info-centered">
                                    <h4 className="author-name">{t.name}</h4>
                                    <p className="author-company">{t.company}</p>
                                    <span className="testimonial-result">{t.outcome}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
