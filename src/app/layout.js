import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Clarity from "../components/Clarity";
import siteConfig from "@/data/siteConfig";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const homepageTitle =
  "Vyarah | AI-Powered Websites, Automation, and Growth Systems";
const homepageDescription =
  "Vyarah builds high-converting websites, AI automation systems, and growth engines that help ambitious brands increase leads, conversions, and revenue.";

export const metadata = {
  ...buildMetadata({
    title: homepageTitle,
    description: homepageDescription,
    path: "/",
    keywords: [
      "AI agency Ahmedabad",
      "web development India",
      "SEO agency India",
      "WhatsApp automation",
      "sales chatbot",
      "free growth audit",
    ],
  }),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Digital Agency",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/logo.png"),
      description: siteConfig.description,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "sales",
          areaServed: ["IN", "US", "GB", "AU", "CA"],
          availableLanguage: ["en"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      knowsAbout: [
        "AI automation",
        "Web development",
        "Conversion rate optimization",
        "Technical SEO",
        "Chatbot deployment",
        "Growth systems",
      ],
      sameAs: [siteConfig.social.linkedin].filter(Boolean),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: homepageTitle,
      description: homepageDescription,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      image: absoluteUrl("/logo.png"),
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      url: siteConfig.url,
      areaServed: ["IN", "US", "GB", "AU", "CA"],
      priceRange: "$$$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#homepage`,
      name: homepageTitle,
      description: homepageDescription,
      url: siteConfig.url,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ];

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RYY6ZM7LT1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RYY6ZM7LT1');
          `}
        </Script>
      </head>
      <body>
        <Clarity />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
