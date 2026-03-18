import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolioData from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    absoluteUrl,
    buildBreadcrumbSchema,
    buildMetadata,
    buildWebPageSchema,
} from "@/lib/seo";

export async function generateStaticParams() {
    return portfolioData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        return { title: "Case Study Not Found | Vyarah" };
    }

    return buildMetadata({
        title: `${project.title} Case Study | Vyarah`,
        description: project.description,
        path: `/work/${project.slug}`,
        keywords: [
            `${project.category} case study`,
            "client results",
            "digital growth case study",
        ],
        type: "article",
    });
}

export default async function CaseStudy({ params }) {
    const resolvedParams = await params;
    const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    const pageTitle = `${project.title} Case Study | Vyarah`;
    const jsonLd = [
        {
            ...buildWebPageSchema({
                name: pageTitle,
                description: project.description,
                path: `/work/${project.slug}`,
            }),
            "@type": "Article",
            headline: project.title,
        },
        {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `${absoluteUrl(`/work/${project.slug}`)}#case-study`,
            name: project.title,
            description: project.description,
            url: absoluteUrl(`/work/${project.slug}`),
            creator: {
                "@id": `${absoluteUrl("/")}/#organization`,
            },
            about: project.tags,
        },
        buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/#portfolio" },
            { name: project.title, path: `/work/${project.slug}` },
        ]),
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="section">
                <article className="container article-shell">
                    <div className="article-back">
                        <Link href="/#portfolio" className="back-link">
                            ← Back to Portfolio
                        </Link>
                    </div>

                    <header className="article-header">
                        <span className="section-tag article-tag">{project.category}</span>
                        <h1 className="article-title article-title-wide">{project.title}</h1>
                        <p className="article-excerpt">{project.description}</p>
                    </header>

                    <div className="article-content case-study-content">
                        <div className="case-study-summary">
                            <h3 className="article-h3 case-study-summary-title">Client Overview</h3>
                            <p className="article-paragraph article-paragraph-tight">
                                <strong>{project.clientInfo}</strong>
                            </p>
                        </div>

                        <h2 className="article-h2">The Challenge</h2>
                        <p className="article-paragraph">{project.challenge}</p>

                        <h2 className="article-h2">Our Solution</h2>
                        <p className="article-paragraph">{project.solution}</p>

                        <h2 className="article-h2">The Results</h2>
                        <ul className="results-list">
                            {project.results.map((result, idx) => (
                                <li key={idx} className="results-list-item">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="var(--sage)"
                                        strokeWidth="2"
                                        className="results-list-icon"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>{result}</span>
                                </li>
                            ))}
                        </ul>

                        <blockquote className="case-study-quote">
                            &quot;{project.testimonial.text}&quot;
                            <footer className="case-study-quote-author">
                                {project.testimonial.author}
                            </footer>
                        </blockquote>
                    </div>

                    <div className="case-study-cta">
                        <h2 className="article-h2 case-study-cta-title">Ready for similar results?</h2>
                        <Link href="/free-audit" className="btn btn-dark btn-lg">
                            Get Your Free Growth Audit
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
