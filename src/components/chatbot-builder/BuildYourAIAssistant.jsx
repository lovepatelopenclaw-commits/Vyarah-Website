"use client";

import { useEffect, useRef, useState } from "react";
import ChatPanel from "./ChatPanel";
import ConfigPanel from "./ConfigPanel";
import { DEFAULT_MODEL_BY_PROVIDER, DEFAULT_PROVIDER, PROVIDERS } from "@/lib/aiProviders";

const STORAGE_KEY = "vyarah-ai-builder-state";

const DEFAULT_CONFIG = {
  assistantName: "Growth Concierge",
  provider: DEFAULT_PROVIDER,
  apiKey: "",
  model: DEFAULT_MODEL_BY_PROVIDER[DEFAULT_PROVIDER],
  role: "Sales Closer",
  tone: "Confident",
  idealCustomer:
    "Founders and operations leaders exploring custom AI chatbots for lead capture, support, and onboarding.",
  primaryGoal:
    "Qualify the visitor, answer clearly, highlight business value, and guide them toward the next step.",
  instructions:
    "Keep replies crisp, commercial, and useful. Tie answers back to ROI, deployment speed, and how easy it is to customize the assistant.",
  knowledge: `Vyarah website knowledge base

Brand overview:
- Brand name: Vyarah
- Tagline: We Don't Build Websites. We Build Revenue Machines.
- Core positioning: AI-powered digital growth agency helping businesses scale revenue through high-converting websites, automation systems, and intelligent technology solutions.
- Main promise: combine strategy, engineering, automation, and conversion thinking to build systems that generate revenue, not just deliver design files.
- Audience fit: ambitious startups, service businesses, SaaS companies, ecommerce brands, and established businesses that want to automate and scale.
- Geography: based in India and serving global clients.

Primary outcomes Vyarah sells:
- More qualified leads
- Faster lead response times
- Better conversion rates
- Less manual operational work
- Better digital systems and customer journeys
- Stronger SEO, analytics, and measurement

Core services:
1. AI Automation Solutions
- AI chatbots and virtual assistants
- WhatsApp and messaging automation
- CRM and workflow automation
- Lead qualification systems
- Main benefit: eliminate manual work and keep sales or support conversations moving 24/7

2. Website and Funnel Development
- High-converting websites
- Sales landing pages
- Ecommerce stores
- Performance optimization
- Main benefit: every page is designed to convert, not just look polished

3. Product and App Development
- MVP development
- SaaS platforms
- Custom dashboards
- Mobile applications
- Main benefit: turn product ideas into scalable software systems

4. Growth Systems
- SEO optimization
- Analytics dashboards
- Conversion optimization
- Growth strategy
- Main benefit: turn traffic into measurable revenue with data-backed iteration

How Vyarah works:
- Step 1: Discovery and Strategy
- Step 2: Design and Architecture
- Step 3: Build and Automate
- Step 4: Launch and Optimize
- Framing: Vyarah positions growth as an ongoing system, not a one-time launch

Why clients choose Vyarah:
- AI-first approach
- Revenue-obsessed decision making
- Launch in weeks using battle-tested systems
- Strong engineering and security mindset
- Senior strategic partnership
- Continuous optimization after launch

Pricing guidance:
- Starter: INR 49,999 starting
- Best for: startups and small businesses that need a powerful digital presence
- Includes: high-converting website or landing page, mobile responsiveness, basic SEO, contact form integration, 2 revision rounds, 14-day delivery

- Growth: INR 1,49,999 starting
- Best for: businesses ready to automate and scale
- Includes: full website up to 10 pages, AI chatbot integration, CRM and email automation, advanced SEO and analytics, conversion optimization, unlimited revisions, 30-day delivery, 60-day post-launch support

- Enterprise: custom pricing
- Best for: full digital transformation, custom software, advanced automation, and ongoing optimization

Important pricing rule:
- Treat listed pricing as starting pricing.
- For exact pricing, recommend a quick discovery conversation because scope depends on pages, integrations, automation depth, and custom features.

Proof and case-study style outcomes:
- 30+ projects delivered
- 15+ happy clients
- 98% client satisfaction

Selected proof points:
- D2C ecommerce brand: lead conversion increased by 189% after Vyarah improved chatbot capture and website flow
- B2B SaaS startup: automated 40 hours of manual work per week with custom AI and workflow automation
- Local tech services company: ranked number 1 for local search in 3 months after SEO and performance improvements

Portfolio examples:
- Ecommerce Growth Engine: 3x checkout completion, 45% increase in average order value, sub-second load speeds, 120% increase in mobile conversion
- SaaS Analytics Dashboard: shipped in under 6 weeks, handled 5M+ daily API events, 300% increase in user engagement time
- AI Lead Qualification Bot: 200+ daily conversations handled automatically, 65% increase in sales team efficiency, 40% increase in booked appointments
- Healthcare Appointment Platform: 48% reduction in no-show rate, 30% reduction in admin workload, 98% patient satisfaction

FAQ guidance:
Q: How is Vyarah different from other agencies?
A: Vyarah does not focus on pretty pages alone. It builds revenue systems backed by data, automation, engineering, and ROI thinking.

Q: How long does a typical project take?
A: Starter projects usually launch in about 2 weeks. Growth projects often take 4 to 6 weeks. Enterprise projects are scoped individually.

Q: Does Vyarah work with startups only?
A: No. Vyarah works with both startups and established businesses, as long as they are serious about growth.

Q: What technologies does Vyarah use?
A: Common technologies include Next.js, React, Node.js, Python, Flutter, AWS, Vercel, OpenAI, LangChain, and custom integrations.

Q: Does Vyarah offer post-launch support?
A: Yes. Growth and Enterprise clients receive ongoing support, optimization, and strategic consultation.

Q: Can Vyarah integrate with existing tools?
A: Yes. CRM systems, payment gateways, marketing tools, APIs, and custom business systems can be integrated.

Free Growth Audit offer:
- Route: /free-audit
- Offer: free data-driven growth audit
- Includes: SEO and technical performance analysis, conversion opportunities, automation and AI roadmap
- Delivery promise: personalized 15-page PDF report within 48 hours
- Best CTA for unsure prospects: recommend the free audit if they want insight before committing to a build

Contact and conversion paths:
- Main CTA: Start Free Strategy Call
- WhatsApp CTA available
- Email: hello@vyarah.com
- Phone: +91 9510293768
- Website: https://www.vyarah.com
- Good next steps to suggest:
  - book a strategy call
  - request a free growth audit
  - describe their business and goals for a tailored recommendation

Blog and thought leadership context:
- Vyarah publishes content around AI chatbots, lead generation, schema markup, SEO, and revenue-focused website systems
- One article highlights a 189% increase in leads through AI chatbot implementation
- Another article explains why schema markup matters for search visibility and click-through rate

How this Vyarah AI Builder should be framed:
- This builder is a live demo for prospects
- Visitors can configure assistant name, role, tone, provider, model, instructions, and business knowledge
- The point of the demo is to help people experience how a custom chatbot could work for their own business before booking a project
- After testing, visitors can customize the setup further or contact Vyarah for a tailored implementation

Assistant behavior rules for this default setup:
- Sound like a smart Vyarah growth advisor, not a generic AI bot
- Be commercially aware, clear, and practical
- Connect answers to lead generation, automation, conversion, ROI, speed, and customer experience when relevant
- If someone asks what Vyarah should build for them, recommend the most relevant service mix instead of one vague answer
- If someone asks about budget, mention starting pricing and explain that final pricing depends on scope
- If someone asks about next steps, recommend a strategy call or free growth audit
- If information is missing, say that clearly and offer the best next step rather than inventing details`,
};

export default function BuildYourAIAssistant() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [messages, setMessages] = useState(() => createInitialMessages(DEFAULT_CONFIG));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSourceContext, setShowSourceContext] = useState(true);
  const [learning, setLearning] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [statusPill, setStatusPill] = useState("Preview updates live");
  const [focusSignal, setFocusSignal] = useState(0);
  const previewRef = useRef(null);

  useEffect(() => {
    const rawState = window.localStorage.getItem(STORAGE_KEY);

    if (!rawState) {
      return;
    }

    try {
      const parsedState = JSON.parse(rawState);

      if (parsedState?.config) {
        const normalizedConfig = normalizeConfig(parsedState.config);
        setConfig(normalizedConfig);
        setMessages(createInitialMessages(normalizedConfig));
      }

      if (typeof parsedState?.showSourceContext === "boolean") {
        setShowSourceContext(parsedState.showSourceContext);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setMessages((current) => {
      const nonSystemMessages = current.filter((message) => message.role !== "system");
      return [{ role: "system", content: buildSystemPrompt(config) }, ...nonSystemMessages];
    });

    setLearning(true);
    const timeout = setTimeout(() => setLearning(false), 1100);

    return () => clearTimeout(timeout);
  }, [config]);

  const handleConfigUpdate = (nextValue) => {
    setStatusPill("Preview updates live");
    setConfig(nextValue);
  };

  const handleSourceContextUpdate = (nextValue) => {
    setStatusPill("Preview updates live");
    setShowSourceContext(nextValue);
  };

  const handleSend = async (userMessage) => {
    if (!userMessage.trim() || loading) {
      return;
    }

    const latestUserMessage = {
      role: "user",
      content: userMessage.trim(),
    };
    const nextMessages = [
      ...messages.filter((message) => message.role !== "system"),
      latestUserMessage,
    ];

    setError("");
    setLoading(true);
    setMessages((current) => [...current, latestUserMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: config.provider,
          model: config.model,
          apiKey: config.apiKey,
          messages: [{ role: "system", content: buildSystemPrompt(config) }, ...nextMessages],
        }),
      });

      if (!response.ok) {
        const failure = await response.json().catch(() => null);
        throw new Error(failure?.error || `API error: ${response.status}`);
      }

      const data = await response.json();
      const aiReply = data.reply || "I could not generate a response just now. Please try again.";

      setMessages((current) => [...current, { role: "assistant", content: aiReply }]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending that message."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSetup = () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        config,
        showSourceContext,
      })
    );
    setStatusPill("Saved locally");
  };

  const handleResetDemo = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setConfig(DEFAULT_CONFIG);
    setShowSourceContext(true);
    setMessages(createInitialMessages(DEFAULT_CONFIG));
    setError("");
    setStatusPill("Reset to defaults");
    setIsMobileOpen(false);
  };

  const handleFinishSetup = () => {
    setStatusPill("Setup complete - ask your first question");
    setIsMobileOpen(false);
    setFocusSignal((current) => current + 1);

    requestAnimationFrame(() => {
      previewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const provider = PROVIDERS[config.provider];
  const modeLabel = config.apiKey.trim()
    ? "Using your own API key"
    : provider.demoModeSupported
      ? "Using demo mode"
      : "API key required";

  return (
    <section className="section chatbot-builder-shell">
      <div className="container">
        <div className="chatbot-builder-toolbar reveal">
          <div>
            <p className="chatbot-eyebrow">Interactive builder</p>
            <h2>Configure the bot, then test it live.</h2>
            <p className="chatbot-toolbar-copy">
              Update the setup on the left and watch the preview react instantly. The route
              stays inside the same Vyarah AI Builder experience instead of jumping into a second app.
            </p>
          </div>

          <div className="chatbot-builder-toolbar-actions">
            <button
              type="button"
              className="chatbot-button is-dark chatbot-mobile-menu-button"
              onClick={() => setIsMobileOpen(true)}
            >
              Open builder menu
            </button>
            <button type="button" className="chatbot-button is-secondary" onClick={handleSaveSetup}>
              Save setup
            </button>
            <button type="button" className="chatbot-button is-warm" onClick={handleResetDemo}>
              Reset demo
            </button>
            <span className="chatbot-status-pill">{statusPill}</span>
          </div>
        </div>

        <div className="chatbot-builder-layout">
          <div className="chatbot-builder-sidebar">
            <button
              type="button"
              aria-label="Close builder menu overlay"
              className={`chatbot-builder-overlay${isMobileOpen ? " is-open" : ""}`}
              onClick={() => setIsMobileOpen(false)}
            />
            <div className={`chatbot-builder-drawer${isMobileOpen ? " is-open" : ""}`}>
              <div className="chatbot-builder-sidebar-inner">
                <ConfigPanel
                  config={config}
                  setConfig={handleConfigUpdate}
                  showSourceContext={showSourceContext}
                  setShowSourceContext={handleSourceContextUpdate}
                  isMobileOpen={isMobileOpen}
                  setIsMobileOpen={setIsMobileOpen}
                  onFinishSetup={handleFinishSetup}
                />
              </div>
            </div>
          </div>

          <div className="chatbot-builder-preview" ref={previewRef}>
            <ChatPanel
              messages={messages}
              loading={loading}
              error={error}
              onSend={handleSend}
              showSourceContext={showSourceContext}
              learning={learning}
              assistantName={config.assistantName}
              role={config.role}
              tone={config.tone}
              modeLabel={modeLabel}
              focusSignal={focusSignal}
            />
            <p className="chatbot-builder-footnote">
              If demo mode is unavailable, use your own API key in the builder menu and keep
              testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function buildSystemPrompt(config) {
  return `You are "${config.assistantName}", a high-performing ${config.role}.

Brand behavior:
- Tone: ${config.tone}
- Ideal customer: ${config.idealCustomer}
- Primary goal: ${config.primaryGoal}

Operating instructions:
${config.instructions || "- None provided. Keep responses direct, helpful, and conversion-aware."}

Knowledge base:
${config.knowledge}

Response rules:
- Use the knowledge base as your main source of truth.
- Sound smart, commercial, and natural, never robotic.
- Give structured answers when useful, but stay concise.
- If the user is exploring a purchase, explain value clearly and propose a sensible next step.
- If a fact is missing from the knowledge base, be honest about that and avoid inventing details.
- Ask a clarifying question when it will improve the answer or qualification.`;
}

function createInitialMessages(config) {
  return [
    {
      role: "system",
      content: buildSystemPrompt(config),
    },
    {
      role: "assistant",
      content: `I am ${config.assistantName}. Tell me about your business or use case, and I will adapt the chatbot around it.`,
    },
  ];
}

function normalizeConfig(input = {}) {
  const provider =
    input.provider && DEFAULT_MODEL_BY_PROVIDER[input.provider]
      ? input.provider
      : DEFAULT_PROVIDER;

  return {
    ...DEFAULT_CONFIG,
    ...input,
    provider,
    model: input.model?.trim() || DEFAULT_MODEL_BY_PROVIDER[provider],
  };
}
