const valuePoints = [
  {
    title: "Shape It Fast",
    description:
      "Set the assistant name, tone, role, model, and business context in the guided Vyarah AI Builder.",
  },
  {
    title: "Test It Live",
    description:
      "Watch the Vyarah AI preview change instantly, then ask real sales, support, and onboarding questions.",
  },
  {
    title: "Make It Yours",
    description:
      "Start with the default Vyarah AI Builder setup, then adapt the chatbot around your own business goals.",
  },
];

const previewPrompts = [
  "How could this chatbot qualify leads for my website?",
  "What would you build for a SaaS startup?",
  "Should I start with a free audit or a strategy call?",
];

export default function ChatbotDemoPromo() {
  return (
    <section className="section chatbot-home-promo" id="chatbot-demo">
      <div className="dot-pattern"></div>
      <div className="container chatbot-home-grid">
        <div className="chatbot-home-copy reveal">
          <span className="section-tag">Try Vyarah AI Builder Chatbot Demo</span>
          <h2 className="section-title">
            See the <span className="text-outline">Vyarah AI Builder</span> chatbot builder in
            action before you launch it.
          </h2>
          <p className="section-desc">
            Explore the Vyarah AI Builder chatbot builder prospects use to test a
            branded AI assistant live. Configure the setup, try conversations
            instantly, and see how the experience can be shaped around your business.
          </p>

          <div className="chatbot-home-points">
            {valuePoints.map((point) => (
              <article className="chatbot-home-point" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>

          <div className="chatbot-home-actions">
            <a href="/build-your-chatbot" className="btn btn-dark btn-lg">
              Open Vyarah AI Builder
            </a>
            <a href="/build-your-chatbot" className="btn btn-white">
              See Chatbot Builder in Action
            </a>
          </div>
        </div>

        <div className="chatbot-home-visual reveal">
          <div className="chatbot-home-browser">
            <div className="chatbot-home-browser-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="chatbot-home-browser-body">
              <div className="chatbot-home-side">
                <div className="chatbot-home-side-card">
                  <span>01</span>
                  <strong>Identity</strong>
                  <p>Assistant name, provider, tone, and setup mode.</p>
                </div>
                <div className="chatbot-home-side-card">
                  <span>02</span>
                  <strong>Behavior</strong>
                  <p>Role, customer fit, goals, and response instructions.</p>
                </div>
                <div className="chatbot-home-side-card is-active">
                  <span>03</span>
                  <strong>Knowledge</strong>
                  <p>Start with Vyarah context, then swap in your own business details.</p>
                </div>
              </div>

              <div className="chatbot-home-chat">
                <div className="chatbot-home-chat-head">
                  <div>
                    <p>Live preview</p>
                    <h3>Growth Concierge</h3>
                  </div>
                  <div className="chatbot-home-mode">Using demo mode</div>
                </div>

                <div className="chatbot-home-prompt-list">
                  {previewPrompts.map((prompt) => (
                    <div className="chatbot-home-prompt" key={prompt}>
                      {prompt}
                    </div>
                  ))}
                </div>

                <div className="chatbot-home-thread">
                  <div className="chatbot-home-bubble">
                    I can help with lead capture, chatbot strategy, automation planning, and
                    next-step recommendations for your business.
                  </div>
                  <div className="chatbot-home-input">
                    <span>Ask about pricing, setup, use cases, or ROI...</span>
                    <button type="button">Try it</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
