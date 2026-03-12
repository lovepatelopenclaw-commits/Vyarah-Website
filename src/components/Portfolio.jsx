import Link from "next/link";
import portfolioData from "@/data/portfolio";

export default function Portfolio() {
    return (
        <section className="section portfolio" id="portfolio">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Our Work</span>
                    <h2 className="section-title">
                        Projects That{" "}
                        <span className="text-outline">Speak</span> for Themselves
                    </h2>
                    <p className="section-desc">
                        A selection of projects we have built. Each one solves a real
                        business problem.
                    </p>
                </div>
                <div className="portfolio-grid">
                    {portfolioData.map((project) => (
                        <Link href={`/work/${project.slug}`} key={project.title} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div
                                className={`portfolio-card ${project.color} reveal`}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <span className="portfolio-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p style={{ flexGrow: 1 }}>{project.description}</p>
                                <div className="portfolio-tags">
                                    {project.tags.map((tag) => (
                                        <span className="portfolio-tag" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div style={{ marginTop: '1.5rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View full case study
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="portfolio-cta reveal">
                    <a href="#contact" className="btn btn-dark btn-lg">
                        Discuss Your Project
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
