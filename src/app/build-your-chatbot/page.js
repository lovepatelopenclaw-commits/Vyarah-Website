import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BuildYourAIAssistant from "@/components/chatbot-builder/BuildYourAIAssistant";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Build Your Own Chatbot | Vyarah",
  description:
    "Configure a branded AI chatbot live inside the Vyarah builder and test tone, provider, knowledge, and deployment options before launch.",
  path: "/build-your-chatbot",
  keywords: [
    "chatbot builder demo",
    "AI chatbot development",
    "OpenAI chatbot India",
    "sales assistant demo",
  ],
});

export default function BuildYourChatbotPage() {
  const jsonLd = [
    buildWebPageSchema({
      name: metadata.title,
      description: metadata.description,
      path: "/build-your-chatbot",
    }),
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${absoluteUrl("/build-your-chatbot")}#app`,
      name: "Vyarah Chatbot Builder Demo",
      description: metadata.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: absoluteUrl("/build-your-chatbot"),
      creator: {
        "@id": `${absoluteUrl("/")}/#organization`,
      },
    },
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Build Your Own Chatbot", path: "/build-your-chatbot" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="chatbot-builder-page">
        <section className="section chatbot-builder-hero">
          <div className="dot-pattern"></div>
          <div className="container chatbot-builder-hero-grid">
            <div className="chatbot-builder-hero-copy reveal">
              <span className="section-tag">Build Your Own Chatbot</span>
              <h1 className="section-title">
                Configure a Vyarah-style assistant and{" "}
                <span className="text-outline">test</span> it live.
              </h1>
              <p className="section-desc">
                This is a same-site builder experience for prospects who want to
                see how a chatbot would behave with their own tone, role,
                knowledge base, and provider setup before booking a project.
              </p>
              <div className="chatbot-builder-hero-badges">
                <span>4 providers</span>
                <span>3-step setup</span>
                <span>Live chat preview</span>
                <span>Mobile builder menu</span>
              </div>
              <div className="chatbot-builder-hero-actions">
                <a href="#chatbot-builder" className="btn btn-dark btn-lg">
                  Try Chatbot Demo
                </a>
                <Link href="/#contact" className="btn btn-white">
                  Book Strategy Call
                </Link>
              </div>
            </div>

            <aside className="chatbot-builder-proof reveal">
              <div className="chatbot-builder-proof-card">
                <p className="chatbot-eyebrow">What this route shows</p>
                <h2>Make the concept tangible in minutes.</h2>
                <ul className="chatbot-builder-proof-list">
                  <li>
                    Adjust assistant identity, behavior, and knowledge without
                    leaving the page.
                  </li>
                  <li>
                    Switch between OpenRouter, OpenAI, Groq, and Together from
                    one native Vyarah AI builder.
                  </li>
                  <li>
                    Keep demo mode server-side so internal provider keys never
                    reach the browser.
                  </li>
                </ul>
                <div className="chatbot-builder-proof-note">
                  Shared demo mode is available on supported setups. If it is
                  unavailable, use your own API key in the builder menu.
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div id="chatbot-builder">
          <BuildYourAIAssistant />
        </div>

        <section className="section chatbot-builder-closing">
          <div className="container">
            <div className="chatbot-builder-closing-card reveal">
              <div>
                <span className="section-tag tag-dark">Next Step</span>
                <h2 className="section-title">
                  Want this customized for your{" "}
                  <span className="text-outline">business</span>?
                </h2>
                <p className="section-desc">
                  We can turn the demo into a branded chatbot for lead capture,
                  support, onboarding, or internal knowledge workflows and plug
                  it into the rest of your Vyarah growth stack.
                </p>
              </div>
              <div className="chatbot-builder-closing-actions">
                <Link href="/#contact" className="btn btn-dark">
                  Start Free Strategy Call
                </Link>
                <Link href="/free-audit" className="btn btn-white">
                  Request Free Audit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
