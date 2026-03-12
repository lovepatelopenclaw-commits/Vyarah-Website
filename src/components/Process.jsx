const steps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description:
            "We deep-dive into your business, competitors, and market to craft a custom growth blueprint.",
        glow: "sage-glow",
    },
    {
        number: "02",
        title: "Design & Architecture",
        description:
            "High-converting designs and system flows, validated by data and optimized for your audience.",
        glow: "yellow-glow",
    },
    {
        number: "03",
        title: "Build & Automate",
        description:
            "We engineer your digital systems with cutting-edge technology, integrating AI automation at scale.",
        glow: "white-glow",
    },
    {
        number: "04",
        title: "Launch & Optimize",
        description:
            "We launch, monitor, and continuously optimize — real growth is an ongoing system.",
        glow: "sage-glow",
    },
];

export default function Process() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How We Supercharge Your Digital Growth",
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "url": "https://vyarah.com/#process",
            "name": step.title,
            "text": step.description,
            "position": index + 1
        }))
    };

    return (
        <section className="section process dark-section" id="process">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag tag-dark">How We Work</span>
                    <h2 className="section-title light">
                        From Strategy to <span className="text-yellow">Scale</span> in 4
                        Steps
                    </h2>
                    <p className="section-desc light">
                        A proven framework that eliminates guesswork and maximizes ROI from
                        day one.
                    </p>
                </div>
                <div className="process-grid">
                    {steps.map((step, i) => (
                        <div key={step.number} style={{ display: "contents" }}>
                            {i > 0 && <div className="process-connector"></div>}
                            <div className="process-step reveal">
                                <div className={`step-circle ${step.glow}`}>{step.number}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
