import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import blogPosts from "@/data/blog";
import { absoluteUrl, buildMetadata, buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Vyarah Blog | AI Automation, SEO, and Growth Insights",
    description:
        "Read Vyarah insights on AI automation, technical SEO, conversion strategy, and the systems that help modern businesses scale revenue.",
    path: "/blog",
    keywords: [
        "AI automation blog",
        "SEO insights India",
        "conversion optimization blog",
        "growth systems content",
    ],
});

export default function BlogPage() {
    const jsonLd = [
        {
            ...buildWebPageSchema({
                name: metadata.title,
                description: metadata.description,
                path: "/blog",
            }),
            "@type": "CollectionPage",
        },
        {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${absoluteUrl("/blog")}#blog`,
            name: "Vyarah Blog",
            description: metadata.description,
            url: absoluteUrl("/blog"),
            publisher: {
                "@id": `${absoluteUrl("/")}/#organization`,
            },
            blogPost: blogPosts.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                url: absoluteUrl(`/blog/${post.slug}`),
                datePublished: new Date(post.date).toISOString(),
                author: {
                    "@type": "Organization",
                    name: post.author,
                },
            })),
        },
        buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
        ]),
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="section page-header">
                <div className="container" style={{ paddingTop: "80px", minHeight: "60vh" }}>
                    <div className="section-header reveal">
                        <span className="section-tag">Insights & Growth</span>
                        <h1 className="section-title">
                            The Vyarah <span className="text-outline">Blog</span>
                        </h1>
                        <p className="section-desc">
                            Practical frameworks, AI implementation strategies, and
                            insights on scaling modern service businesses.
                        </p>
                    </div>
                    <div
                        className="blog-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {blogPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.slug}
                                style={{
                                    display: "block",
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <div
                                    className="blog-card reveal"
                                    style={{
                                        background: "var(--surface)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "16px",
                                        padding: "2rem",
                                        height: "100%",
                                        transition: "transform 0.2s ease",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "var(--text-muted)",
                                            fontSize: "0.875rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {post.date} • {post.author}
                                    </div>
                                    <h2
                                        style={{
                                            fontSize: "1.5rem",
                                            marginBottom: "1rem",
                                            color: "var(--text-dark)",
                                        }}
                                    >
                                        {post.title}
                                    </h2>
                                    <p
                                        style={{
                                            color: "var(--text-muted)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {post.excerpt}
                                    </p>
                                    <div
                                        style={{
                                            marginTop: "1.5rem",
                                            fontWeight: 500,
                                            color: "var(--sage)",
                                        }}
                                    >
                                        Read Article {"->"}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <ScrollReveal />
        </>
    );
}
