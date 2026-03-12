const reasons = [
    {
        iconId: "brain",
        title: "AI-First Approach",
        desc: "Every solution is powered by intelligent automation — not manual band-aids.",
    },
    {
        iconId: "trending",
        title: "Revenue-Obsessed",
        desc: "Every decision is filtered through one question: does this increase revenue?",
    },
    {
        iconId: "zap",
        title: "Launch in Weeks",
        desc: "Battle-tested frameworks let us ship production-grade solutions fast.",
    },
    {
        iconId: "shield",
        title: "Enterprise Security",
        desc: "Bank-level encryption, GDPR compliance, and bulletproof architecture.",
    },
    {
        iconId: "users",
        title: "Dedicated Partner",
        desc: "You get a senior strategist, not a junior account manager.",
    },
    {
        iconId: "refresh",
        title: "Continuous Optimization",
        desc: "Our systems monitor, learn, and improve — compounding returns over time.",
    },
];

function WhyIcon({ iconId }) {
    const icons = {
        brain: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
                <line x1="9" y1="21" x2="15" y2="21" />
                <line x1="10" y1="24" x2="14" y2="24" />
            </svg>
        ),
        trending: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
        zap: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        shield: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        users: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        refresh: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
        ),
    };
    return icons[iconId] || null;
}

export default function WhyUs() {
    return (
        <section className="section why-us yellow-section" id="why-us">
            <div className="dot-pattern"></div>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Why Vyarah</span>
                    <h2 className="section-title">
                        Not Another Agency.{" "}
                        <span className="text-outline">A Growth</span> Partner.
                    </h2>
                    <p className="section-desc">
                        Most agencies build pretty pages. We engineer systems that drive
                        real business growth.
                    </p>
                </div>
                <div className="why-grid">
                    {reasons.map((r) => (
                        <div className="why-card reveal" key={r.title}>
                            <div className="why-icon-box">
                                <WhyIcon iconId={r.iconId} />
                            </div>
                            <h3>{r.title}</h3>
                            <p>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
