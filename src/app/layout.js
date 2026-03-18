import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Clarity from "../components/Clarity";

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
  title: "Vyarah – We Build Revenue Machines",
  description:
    "Vyarah is an AI-powered digital agency building automation systems, high-converting websites and intelligent tech solutions for startups ready to scale.",
  keywords:
    "AI agency, digital growth, automation, web development, SaaS, chatbots, CRM, lead generation, conversion optimization",
  metadataBase: new URL("https://www.vyarah.com"),
  openGraph: {
    title: "Vyarah — AI-Powered Digital Growth Agency",
    description:
      "We build revenue machines, not websites. AI-powered digital systems that scale your business on autopilot.",
    type: "website",
    url: "https://www.vyarah.com",
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
      "@id": "https://www.vyarah.com/#organization",
      "name": "Vyarah",
      "url": "https://www.vyarah.com",
      "logo": "https://www.vyarah.com/logo.png",
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
      "@id": "https://www.vyarah.com/#website",
      "url": "https://www.vyarah.com",
      "name": "Vyarah — AI-Powered Digital Growth Agency",
      "description": "We build revenue machines, not websites. AI-powered digital systems that scale your business.",
      "publisher": {
        "@id": "https://www.vyarah.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.vyarah.com/#localbusiness",
      "name": "Vyarah",
      "image": "https://www.vyarah.com/logo.png",
      "telephone": "+91 9510293768",
      "email": "hello@vyarah.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "url": "https://www.vyarah.com",
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
