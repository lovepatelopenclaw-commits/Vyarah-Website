import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogPosts from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
    if (!post) return { title: "Post Not Found | Vyarah" };

    return {
        title: `${post.title} | Vyarah Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        author: {
            "@type": "Organization",
            name: post.author,
        },
        datePublished: new Date(post.date).toISOString(),
        publisher: {
            "@type": "Organization",
            name: "Vyarah",
            logo: {
                "@type": "ImageObject",
                url: "https://www.vyarah.com/logo.png",
            },
        },
    };

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
                        <Link href="/blog" className="back-link">
                            ← Back to Blog
                        </Link>
                    </div>

                    <header className="article-header">
                        <div className="article-meta">
                            {post.date} <span aria-hidden="true">•</span> {post.author}
                        </div>
                        <h1 className="article-title">{post.title}</h1>
                        <p className="article-excerpt">{post.excerpt}</p>
                    </header>

                    <div className="article-content">
                        <ReactMarkdown
                            components={{
                                h2: ({ node, ...props }) => <h2 className="article-h2" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="article-h3" {...props} />,
                                p: ({ node, ...props }) => <p className="article-paragraph" {...props} />,
                                ul: ({ node, ...props }) => <ul className="article-list" {...props} />,
                                li: ({ node, ...props }) => <li className="article-list-item" {...props} />,
                                strong: ({ node, ...props }) => <strong className="article-strong" {...props} />,
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
