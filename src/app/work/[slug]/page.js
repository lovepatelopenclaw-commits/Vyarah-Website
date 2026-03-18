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
            <main className="section" style={{ paddingTop: "120px", minHeight: "60vh" }}>
                <article className="container" style={{ maxWidth: "800px" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <Link
                            href="/#portfolio"
                            style={{
                                color: "var(--sage)",
                                textDecoration: "none",
                                fontWeight: 500,
                            }}
                        >
                            {"<- Back to Portfolio"}
                        </Link>
                    </div>

                    <header style={{ marginBottom: "4rem" }}>
                        <span
                            className="section-tag"
                            style={{ marginBottom: "1.5rem", display: "inline-block" }}
                        >
                            {project.category}
                        </span>
                        <h1
                            style={{
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                lineHeight: 1.1,
                                marginBottom: "1.5rem",
                                color: "var(--text-dark)",
                            }}
                        >
                            {project.title}
                        </h1>
                        <p
                            style={{
                                fontSize: "1.25rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.6,
                            }}
                        >
                            {project.description}
                        </p>
                    </header>

                    <div
                        className="case-study-content"
                        style={{
                            lineHeight: 1.8,
                            color: "var(--text-body)",
                            fontSize: "1.1rem",
                        }}
                    >
                        <div
                            style={{
                                background: "var(--surface)",
                                padding: "2rem",
                                borderRadius: "16px",
                                marginBottom: "3rem",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <h3
                                style={{
                                    marginTop: 0,
                                    color: "var(--charcoal)",
                                    fontSize: "1.2rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                Client Overview
                            </h3>
                            <p style={{ margin: 0 }}>
                                <strong>{project.clientInfo}</strong>
                            </p>
                        </div>

                        <h2
                            style={{
                                marginTop: "3rem",
                                marginBottom: "1.5rem",
                                color: "var(--text-dark)",
                            }}
                        >
                            The Challenge
                        </h2>
                        <p style={{ marginBottom: "2rem" }}>{project.challenge}</p>

                        <h2
                            style={{
                                marginTop: "3rem",
                                marginBottom: "1.5rem",
                                color: "var(--text-dark)",
                            }}
                        >
                            Our Solution
                        </h2>
                        <p style={{ marginBottom: "3rem" }}>{project.solution}</p>

                        <h2
                            style={{
                                marginTop: "3rem",
                                marginBottom: "1.5rem",
                                color: "var(--text-dark)",
                            }}
                        >
                            The Results
                        </h2>
                        <ul
                            className="results-list"
                            style={{
                                listStyle: "none",
                                padding: 0,
                                marginBottom: "4rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            {project.results.map((result, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "1rem",
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="var(--sage)"
                                        strokeWidth="2"
                                        style={{ flexShrink: 0, marginTop: "4px" }}
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span style={{ fontWeight: 500 }}>{result}</span>
                                </li>
                            ))}
                        </ul>

                        <blockquote
                            style={{
                                borderLeft: "4px solid var(--sage)",
                                paddingLeft: "1.5rem",
                                margin: "4rem 0",
                                fontStyle: "italic",
                                fontSize: "1.25rem",
                                color: "var(--charcoal)",
                            }}
                        >
                            &quot;{project.testimonial.text}&quot;
                            <footer
                                style={{
                                    marginTop: "1rem",
                                    fontSize: "1rem",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    color: "var(--text-muted)",
                                }}
                            >
                                - {project.testimonial.author}
                            </footer>
                        </blockquote>
                    </div>

                    <div
                        style={{
                            marginTop: "4rem",
                            borderTop: "1px solid var(--border)",
                            paddingTop: "3rem",
                            textAlign: "center",
                        }}
                    >
                        <h2 style={{ marginBottom: "1.5rem", color: "var(--text-dark)" }}>
                            Ready for similar results?
                        </h2>
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
