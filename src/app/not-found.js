import Link from "next/link";

export const metadata = {
    title: "Page Not Found — Vyarah",
    description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: "var(--bg)",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    maxWidth: "480px",
                    border: "2px solid var(--border)",
                    padding: "3rem 2rem",
                    boxShadow: "var(--shadow-lg) var(--shadow-color)",
                    background: "var(--white)",
                }}
            >
                <h1
                    style={{
                        fontSize: "5rem",
                        fontFamily: "var(--font-heading)",
                        lineHeight: 1,
                        marginBottom: "0.5rem",
                    }}
                >
                    4<span className="text-outline">0</span>4
                </h1>
                <p
                    style={{
                        fontSize: "1.25rem",
                        fontFamily: "var(--font-heading)",
                        marginBottom: "0.5rem",
                    }}
                >
                    Page Not Found
                </p>
                <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/" className="btn btn-dark">
                        Back to Home
                    </Link>
                    <Link href="/#contact" className="btn btn-yellow">
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}
