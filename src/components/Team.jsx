const founderPoints = [
    "Direct strategy and delivery communication",
    "Web, automation, and AI execution under one roof",
    "Projects shaped around conversion and revenue impact",
];

const founderSignals = [
    { value: "24 hrs", label: "Typical first response" },
    { value: "Founder-led", label: "Planning and delivery" },
    { value: "Web + AI", label: "Single implementation partner" },
];

export default function Team() {
    return (
        <section className="section team" id="team">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Leadership</span>
                    <h2 className="section-title">
                        Meet the <span className="text-outline">Founder.</span>
                    </h2>
                    <p className="section-desc">
                        Vyarah is built around direct collaboration, clear thinking, and commercial execution.
                    </p>
                </div>
                <div className="team-grid">
                    <article className="team-spotlight reveal">
                        <div className="team-identity">
                            <span className="section-tag team-role-tag">Founder</span>
                            <h3 className="team-name">Love Patel</h3>
                            <p className="team-role">Founder & Lead Strategist</p>
                        </div>

                        <div className="team-content">
                            <p className="team-summary">
                                Love leads strategy across Vyarah projects, combining modern web
                                engineering, AI integration, and conversion thinking to help
                                businesses replace brochure sites with systems that move revenue.
                            </p>

                            <div className="team-points">
                                {founderPoints.map((point) => (
                                    <div className="team-point" key={point}>
                                        <span className="team-point-mark" aria-hidden="true"></span>
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="team-signal-row">
                                {founderSignals.map((signal) => (
                                    <div className="team-signal" key={signal.label}>
                                        <strong>{signal.value}</strong>
                                        <span>{signal.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
