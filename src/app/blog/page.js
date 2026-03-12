import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogPosts from "@/data/blog";
import Link from "next/link";

export const metadata = {
    title: "Blog — Vyarah",
    description: "Insights on AI automation, digital growth, and scaling your business.",
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="section page-header">
                <div className="container" style={{paddingTop: '80px', minHeight: '60vh'}}>
                    <div className="section-header reveal">
                        <span className="section-tag">Insights & Growth</span>
                        <h1 className="section-title">The Vyarah <span className="text-outline">Blog</span></h1>
                        <p className="section-desc">Practical frameworks, AI implementation strategies, and insights on scaling modern service businesses.</p>
                    </div>
                    <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2rem' }}>
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                                <div className="blog-card reveal" style={{ 
                                    background: 'var(--surface)', 
                                    border: '1px solid var(--border)', 
                                    borderRadius: '16px', 
                                    padding: '2rem',
                                    height: '100%',
                                    transition: 'transform 0.2s ease',
                                    cursor: 'pointer'
                                }}>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                                        {post.date} • {post.author}
                                    </div>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>{post.title}</h2>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{post.excerpt}</p>
                                    <div style={{ marginTop: '1.5rem', fontWeight: 500, color: 'var(--sage)' }}>
                                        Read Article →
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
