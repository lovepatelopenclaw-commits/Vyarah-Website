import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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

export const metadata = {
  title: "Vyarah — AI-Powered Digital Growth Agency | Scale Revenue with Intelligent Systems",
  description:
    "Vyarah is an AI-powered digital growth agency helping businesses scale revenue through high-converting websites, automation systems, and intelligent technology solutions.",
  keywords:
    "AI agency, digital growth, automation, web development, SaaS, chatbots, CRM, lead generation, conversion optimization",
  metadataBase: new URL("https://vyarah.com"),
  openGraph: {
    title: "Vyarah — AI-Powered Digital Growth Agency",
    description:
      "We build revenue machines, not websites. AI-powered digital systems that scale your business on autopilot.",
    type: "website",
    url: "https://vyarah.com",
    siteName: "Vyarah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyarah — AI-Powered Digital Growth Agency",
    description:
      "We build revenue machines, not websites. AI-powered digital systems that scale your business on autopilot.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en-IN': '/',
      'en-US': '/',
      'x-default': '/'
    }
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vyarah.com/#organization",
      "name": "Vyarah",
      "url": "https://vyarah.com",
      "logo": "https://vyarah.com/favicon.svg",
      "description": "Vyarah is an AI-powered digital growth agency helping businesses scale revenue through high-converting websites, automation systems, and intelligent technology solutions.",
      "telephone": "+91 9510293768",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 9510293768",
          "contactType": "customer support",
          "areaServed": ["IN", "US", "GB", "AU", "CA"],
          "availableLanguage": ["en"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://linkedin.com/company/vyarah"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://vyarah.com/#website",
      "url": "https://vyarah.com",
      "name": "Vyarah — AI-Powered Digital Growth Agency",
      "description": "We built revenue machines, not websites. AI-powered digital systems that scale your business.",
      "publisher": {
        "@id": "https://vyarah.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://vyarah.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://vyarah.com/#localbusiness",
      "name": "Vyarah",
      "image": "https://vyarah.com/favicon.svg",
      "telephone": "+91 9510293768",
      "email": "hello@vyarah.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "url": "https://vyarah.com",
      "priceRange": "$$$$"
    }
  ];

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Analytics */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
