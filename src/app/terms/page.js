import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Terms of Service — Vyarah",
    description: "Vyarah terms of service for our digital agency services.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="legal-page">
                <div className="container">
                    <h1 className="section-title">Terms of Service</h1>
                    <p className="legal-updated">
                        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>

                    <h2>1. Services</h2>
                    <p>
                        Vyarah provides AI-powered digital solutions including website
                        development, automation systems, and growth strategy consulting. All
                        deliverables are outlined in individual project proposals.
                    </p>

                    <h2>2. Payment Terms</h2>
                    <p>
                        Payment terms, schedules, and refund policies are defined in
                        individual project agreements. Standard projects require a 50% deposit
                        to begin work.
                    </p>

                    <h2>3. Intellectual Property</h2>
                    <p>
                        Upon full payment, clients receive full ownership of all custom
                        deliverables. Third-party licenses remain governed by their respective
                        terms.
                    </p>

                    <h2>4. Limitation of Liability</h2>
                    <p>
                        Vyarah&apos;s total liability for any claim shall not exceed the
                        total fees paid for the specific project giving rise to the claim.
                    </p>

                    <h2>5. Contact</h2>
                    <p>
                        For questions about these terms, contact us at
                        hello@vyarah.com.
                    </p>

                    <div className="legal-back">
                        <a href="/" className="btn btn-dark">← Back to Home</a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
