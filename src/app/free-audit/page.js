import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FreeAuditForm from "@/components/FreeAuditForm";
import {
    buildBreadcrumbSchema,
    buildMetadata,
    buildServiceSchema,
    buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Free Growth Audit | Vyarah",
    description:
        "Request a free growth audit from Vyarah and get a tailored review of your website, SEO, conversion bottlenecks, and automation opportunities.",
    path: "/free-audit",
    keywords: [
        "free website audit",
        "free SEO audit India",
        "conversion audit",
        "automation roadmap",
    ],
});

export default function FreeAudit() {
    const jsonLd = [
        buildWebPageSchema({
            name: metadata.title,
            description: metadata.description,
            path: "/free-audit",
        }),
        buildServiceSchema({
            name: "Free Growth Audit",
            serviceType: "Website and Growth Audit",
            description: metadata.description,
            path: "/free-audit",
        }),
        {
            "@context": "https://schema.org",
            "@type": "Offer",
            name: "Free Growth Audit",
            price: "0",
            priceCurrency: "INR",
            url: "https://www.vyarah.com/free-audit",
            availability: "https://schema.org/InStock",
        },
        buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Free Growth Audit", path: "/free-audit" },
        ]),
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main
                className="section page-header"
                style={{
                    paddingTop: "100px",
                    minHeight: "60vh",
                    background: "var(--sage)",
                }}
            >
                <div className="container">
                    <div className="contact-grid" style={{ alignItems: "flex-start" }}>
                        <div className="contact-info reveal">
                            <span
                                className="section-tag"
                                style={{
                                    background: "var(--charcoal)",
                                    color: "var(--white)",
                                }}
                            >
                                Free Growth Audit
                            </span>
                            <h1 className="section-title">
                                Stop Guessing. Start{" "}
                                <span className="text-outline">Scaling.</span>
                            </h1>
                            <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
                                Get a comprehensive, data-driven analysis of your current
                                digital presence. We&apos;ll identify exactly where you are
                                losing revenue and how AI automation can fix it.
                            </p>

                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: "0 0 2rem 0",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                }}
                            >
                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>SEO & Technical Performance Analysis</strong>
                                </li>
                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>
                                        Conversion Rate Optimization Opportunities
                                    </strong>
                                </li>
                                <li
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>Automation & AI Integration Roadmap</strong>
                                </li>
                            </ul>

                            <p style={{ color: "var(--text-muted)" }}>
                                Includes a personalized 15-page PDF report delivered
                                within 48 hours. No commitments required.
                            </p>
                        </div>

                        <FreeAuditForm />
                    </div>
                </div>
            </main>
            <Footer />
            <ScrollReveal />
        </>
    );
}
