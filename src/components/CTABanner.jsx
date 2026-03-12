export default function CTABanner() {
    return (
        <section className="cta-banner cta-dark">
            <div className="dot-pattern"></div>
            <div className="container cta-content reveal">
                <h2>
                    Ready to Turn Your Business Into a{" "}
                    <span className="text-yellow">Growth Machine?</span>
                </h2>
                <p>
                    Book a free 30-minute strategy call. No pitch decks. No sales
                    pressure. Just a candid conversation about how AI and automation can
                    10x your business.
                </p>
                <div className="cta-buttons">
                    <a href="#contact" className="btn btn-yellow btn-lg">
                        Book Free Strategy Call
                    </a>
                    <a href="/free-audit" className="btn btn-white">
                        Request Free Audit
                    </a>
                </div>
            </div>
        </section>
    );
}
