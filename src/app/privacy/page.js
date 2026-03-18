import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | Vyarah",
    description: "Vyarah privacy policy. How we collect, use, and protect your data.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main className="legal-page">
                <div className="container">
                    <h1 className="section-title">Privacy Policy</h1>
                    <p className="legal-updated">
                        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        When you submit our contact form, we collect your name, email address,
                        business type, and message. When you subscribe to our newsletter, we
                        collect your email address.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use your information to respond to inquiries, send our newsletter
                        (if subscribed), and improve our services. We do not sell your personal
                        data.
                    </p>

                    <h2>3. Data Storage</h2>
                    <p>
                        Your data is stored securely using industry-standard encryption.
                        We retain your data only as long as necessary to provide our services.
                    </p>

                    <h2>4. Your Rights</h2>
                    <p>
                        You may request access to, correction of, or deletion of your personal
                        data by contacting us at hello@vyarah.com.
                    </p>

                    <h2>5. Contact</h2>
                    <p>
                        For privacy-related inquiries, email us at hello@vyarah.com.
                    </p>

                    <div className="legal-back">
                        <Link href="/" className="btn btn-dark">← Back to Home</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
