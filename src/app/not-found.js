import Link from "next/link";

export const metadata = {
    title: "Page Not Found | Vyarah",
    description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
    return (
        <main className="not-found-shell">
            <div className="not-found-card">
                <h1 className="not-found-code">
                    4<span className="text-outline">0</span>4
                </h1>
                <p className="not-found-title">Page Not Found</p>
                <p className="not-found-copy">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="not-found-actions">
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
