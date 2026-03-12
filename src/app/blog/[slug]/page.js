import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogPosts from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
    if (!post) return { title: "Post Not Found — Vyarah" };

    return {
        title: `${post.title} — Vyarah Blog`,
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
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "datePublished": new Date(post.date).toISOString(),
        "publisher": {
            "@type": "Organization",
            "name": "Vyarah",
            "logo": {
                "@type": "ImageObject",
                "url": "https://vyarah.com/favicon.svg"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main className="section" style={{ paddingTop: '120px', minHeight: '60vh' }}>
                <article className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <Link href="/blog" style={{ color: 'var(--sage)', textDecoration: 'none', fontWeight: 500 }}>
                            ← Back to Blog
                        </Link>
                    </div>
                    
                    <header style={{ marginBottom: '3rem' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                            {post.date} • {post.author}
                        </div>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            {post.title}
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            {post.excerpt}
                        </p>
                    </header>
                    
                    <div className="blog-content" style={{ 
                        lineHeight: 1.8, 
                        color: 'var(--text-body)', 
                        fontSize: '1.1rem'
                    }}>
                        <ReactMarkdown
                            components={{
                                h2: ({node, ...props}) => <h2 style={{marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-dark)'}} {...props} />,
                                h3: ({node, ...props}) => <h3 style={{marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--text-dark)'}} {...props} />,
                                p: ({node, ...props}) => <p style={{marginBottom: '1.5rem'}} {...props} />,
                                ul: ({node, ...props}) => <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}} {...props} />,
                                li: ({node, ...props}) => <li style={{marginBottom: '0.5rem'}} {...props} />,
                                strong: ({node, ...props}) => <strong style={{color: 'var(--text-dark)', fontWeight: 600}} {...props} />
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
