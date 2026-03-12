import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                        <p className="section-desc">Practical frameworks, AI implementation strategies, and insights on scaling modern service businesses. Coming soon.</p>
                    </div>
                    <div className="blog-grid" style={{textAlign: "center"}}>
                        <p style={{fontSize: "1.2rem", fontWeight: "600", color: "var(--charcoal)"}}>New articles arriving shortly.</p>
                        <div style={{marginTop: "2rem"}}>
                            <a href="/" className="btn btn-dark">← Back to Home</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
