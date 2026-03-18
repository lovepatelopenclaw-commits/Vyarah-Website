import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata = {
    title: "Services — Vyarah",
    description: "AI-powered automation, web development, product engineering, and growth systems.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Services — Vyarah",
        description: "AI-powered automation, web development, product engineering, and growth systems.",
    },
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main style={{paddingTop: '60px'}}>
                <Services />
            </main>
            <Footer />
        </>
    );
}
