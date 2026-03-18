import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import {
    absoluteUrl,
    buildBreadcrumbSchema,
    buildMetadata,
    buildWebPageSchema,
} from "@/lib/seo";

const servicesList = [
    {
        name: "AI Automation",
        path: "/services/ai-automation",
        description:
            "Deploy AI chatbots, WhatsApp automation, and CRM workflows that qualify leads and reduce manual work.",
    },
    {
        name: "Web Development",
        path: "/services/web-development",
        description:
            "Build high-converting Next.js websites, funnels, and landing pages designed for growth.",
    },
    {
        name: "App Development",
        path: "/services/app-development",
        description:
            "Launch MVPs and scale-ready products with modern full-stack engineering.",
    },
    {
        name: "Growth Systems",
        path: "/services/growth-systems",
        description:
            "Combine SEO, CRO, analytics, and lead generation systems into one compounding growth engine.",
    },
];

export const metadata = buildMetadata({
    title: "Vyarah Services | AI Automation, Web Development, and Growth Systems",
    description:
        "Explore Vyarah services across AI automation, web development, product engineering, and growth systems built to drive measurable business results.",
    path: "/services",
    keywords: [
        "AI automation services India",
        "Next.js development agency",
        "product engineering services",
        "SEO and CRO services",
    ],
});

export default function ServicesPage() {
    const jsonLd = [
        {
            ...buildWebPageSchema({
                name: metadata.title,
                description: metadata.description,
                path: "/services",
            }),
            "@type": "CollectionPage",
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${absoluteUrl("/services")}#services`,
            name: "Vyarah Services",
            itemListElement: servicesList.map((service, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(service.path),
                name: service.name,
                description: service.description,
            })),
        },
        buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
        ]),
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main style={{ paddingTop: "60px" }}>
                <Services />
            </main>
            <Footer />
        </>
    );
}
