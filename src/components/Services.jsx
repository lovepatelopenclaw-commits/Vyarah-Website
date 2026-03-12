import servicesData from "@/data/services";

function ServiceIcon({ iconId }) {
    const icons = {
        automation: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        web: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
        ),
        app: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        growth: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="10" />
                <line x1="18" y1="20" x2="18" y2="4" />
                <line x1="6" y1="20" x2="6" y2="16" />
            </svg>
        ),
    };
    return icons[iconId] || null;
}

export default function Services() {
    return (
        <section className="section services" id="services">
            <div className="dot-pattern"></div>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">What We Build</span>
                    <h2 className="section-title">
                        Intelligent Solutions That{" "}
                        <span className="text-outline">Drive</span> Growth
                    </h2>
                    <p className="section-desc">
                        We combine AI, automation, and engineering to build systems
                        that generate revenue while you sleep.
                    </p>
                </div>
                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div className="service-card reveal" key={service.title}>
                            <div className="service-icon-box">
                                <ServiceIcon iconId={service.iconId} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-list">
                                {service.features.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                            <a href={service.href} className="service-link">
                                Get Started
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
