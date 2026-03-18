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
                <div className="container page-shell">
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
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card-link">
                                <article className="blog-card reveal">
                                    <div className="blog-card-meta">
                                        {post.date} <span aria-hidden="true">•</span> {post.author}
                                    </div>
                                    <h2 className="blog-card-title">{post.title}</h2>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <div className="blog-card-cta">
                                        Read Article <span aria-hidden="true">→</span>
                                    </div>
                                </article>
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
