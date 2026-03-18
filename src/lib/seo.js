import siteConfig from "@/data/siteConfig";

const defaultKeywords = [
    "AI agency India",
    "digital growth agency",
    "AI automation services",
    "web development agency",
    "conversion rate optimization",
    "lead generation systems",
    "Next.js agency",
    "chatbot development",
    "growth systems",
];

export function absoluteUrl(path = "/") {
    if (!path || path === "/") {
        return siteConfig.url;
    }

    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }

    return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
    title,
    description = siteConfig.description,
    path = "/",
    keywords = [],
    type = "website",
}) {
    const url = absoluteUrl(path);

    return {
        title,
        description,
        keywords: [...new Set([...defaultKeywords, ...keywords])],
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            type,
            locale: "en_IN",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export function buildBreadcrumbSchema(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => {
            const listItem = {
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
            };

            if (item.path) {
                listItem.item = absoluteUrl(item.path);
            }

            return listItem;
        }),
    };
}

export function buildWebPageSchema({ name, description, path }) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        name,
        description,
        url: absoluteUrl(path),
        isPartOf: {
            "@id": `${siteConfig.url}/#website`,
        },
        about: {
            "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-IN",
    };
}

export function buildServiceSchema({ name, description, path, serviceType }) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name,
        serviceType,
        description,
        url: absoluteUrl(path),
        provider: {
            "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: ["IN", "US", "GB", "AU", "CA"],
    };
}
