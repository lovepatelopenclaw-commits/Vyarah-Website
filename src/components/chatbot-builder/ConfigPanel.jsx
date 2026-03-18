"use client";

import { useState } from "react";
import { DEFAULT_MODEL_BY_PROVIDER, PROVIDER_LIST, PROVIDERS } from "@/lib/aiProviders";

const roles = [
  "Sales Closer",
  "Lead Qualification Agent",
  "Customer Support Specialist",
  "Onboarding Guide",
  "Technical Product Expert",
  "Appointment Booking Assistant",
  "Real Estate Advisor",
  "Healthcare Front Desk Assistant",
  "Education Enrollment Counselor",
  "Recruitment Coordinator",
];

const tones = ["Confident", "Friendly", "Consultative", "Professional", "Persuasive"];

const knowledgePresets = [
  {
    title: "SaaS Demo",
    snippet: `Business profile:
- We provide AI automation and chatbot solutions for growing teams.
- Our clients want faster support, better lead capture, and less repetitive manual work.

Common questions:
- Setup time is typically short once goals and content are clear.
- The assistant can be branded and embedded into existing web pages.
- It can answer FAQs, qualify visitors, and route high-intent leads.`,
  },
  {
    title: "E-commerce",
    snippet: `Store knowledge:
- We sell curated products with delivery tracking and simple returns.
- Orders above a defined threshold qualify for free shipping.
- Customers often ask about size guidance, delivery times, exchanges, and promotions.

Sales notes:
- Recommend relevant products based on customer intent.
- Clarify shipping, return, and payment information with confidence.`,
  },
  {
    title: "Service Business",
    snippet: `Company information:
- We offer booked services and consultations for qualified prospects.
- Customers usually ask about pricing ranges, availability, turnaround times, and next steps.
- The assistant should capture intent and encourage a booking or callback where appropriate.`,
  },
];

const sectionOrder = ["identity", "behavior", "knowledge"];

export default function ConfigPanel({
  config,
  setConfig,
  showSourceContext,
  setShowSourceContext,
  isMobileOpen,
  setIsMobileOpen,
  onFinishSetup,
}) {
  const [activeSection, setActiveSection] = useState("identity");
  const activeSectionIndex = sectionOrder.indexOf(activeSection);
  const previousSection = activeSectionIndex > 0 ? sectionOrder[activeSectionIndex - 1] : null;
  const nextSection =
    activeSectionIndex < sectionOrder.length - 1 ? sectionOrder[activeSectionIndex + 1] : null;

  const sectionMeta = [
    {
      key: "identity",
      step: "01",
      title: "Identity",
      summary: `${config.assistantName} / ${config.tone}`,
    },
    {
      key: "behavior",
      step: "02",
      title: "Behavior",
      summary: config.role,
    },
    {
      key: "knowledge",
      step: "03",
      title: "Knowledge",
      summary: `${countKnowledgeLines(config.knowledge)} lines loaded`,
    },
  ];

  const handleFieldChange = (field, value) => {
    setConfig((current) => {
      if (field === "provider" && PROVIDERS[value]) {
        return {
          ...current,
          provider: value,
          model: DEFAULT_MODEL_BY_PROVIDER[value],
        };
      }

      return {
        ...current,
        [field]: value,
      };
    });
  };

  const appendKnowledgePreset = (snippet) => {
    setConfig((current) => ({
      ...current,
      knowledge: current.knowledge.trim()
        ? `${current.knowledge.trim()}\n\n${snippet}`
        : snippet,
    }));
    setActiveSection("knowledge");
  };

  const provider = PROVIDERS[config.provider];

  return (
    <div className="chatbot-builder-panel">
      <div className="chatbot-builder-panel-head">
        <div>
          <p className="chatbot-eyebrow">Chatbot setup</p>
          <h2>Builder menu</h2>
          <p>
            Configure one layer at a time so the preview stays easy to understand on desktop
            and mobile.
          </p>
        </div>
        <div className="chatbot-builder-head-actions">
          <span className="chatbot-mode-pill">Demo-aware</span>
          <button
            type="button"
            className={`chatbot-button is-secondary is-mobile-only${
              isMobileOpen ? "" : " is-hidden"
            }`}
            onClick={() => setIsMobileOpen(false)}
          >
            Close
          </button>
        </div>
      </div>

      <div className="chatbot-builder-panel-layout">
        <nav className="chatbot-step-nav" aria-label="Builder steps">
          {sectionMeta.map((section) => (
            <button
              key={section.key}
              type="button"
              className={`chatbot-step-button${
                activeSection === section.key ? " is-active" : ""
              }`}
              onClick={() => setActiveSection(section.key)}
            >
              <span>{section.step}</span>
              <strong>{section.title}</strong>
              <small>{section.summary}</small>
            </button>
          ))}
        </nav>

        <div className="chatbot-builder-panel-body">
          <div className="chatbot-mini-grid">
            <div className="chatbot-mini-card">
              <span>Assistant</span>
              <strong>{config.assistantName}</strong>
            </div>
            <div className="chatbot-mini-card">
              <span>Role</span>
              <strong>{config.role}</strong>
            </div>
            <div className="chatbot-mini-card">
              <span>Knowledge</span>
              <strong>{countKnowledgeLines(config.knowledge)} lines</strong>
            </div>
          </div>

          {activeSection === "identity" ? (
            <WorkspaceSection
              step="01"
              title="Identity"
              description="Control the visible inputs that shape the assistant preview immediately."
            >
              <Field label="Assistant name">
                <input
                  type="text"
                  className="chatbot-input"
                  value={config.assistantName}
                  onChange={(event) => handleFieldChange("assistantName", event.target.value)}
                  placeholder="AI Concierge"
                />
              </Field>

              <div className="chatbot-grid-two">
                <Field label="Provider">
                  <select
                    className="chatbot-input"
                    value={config.provider}
                    onChange={(event) => handleFieldChange("provider", event.target.value)}
                  >
                    {PROVIDER_LIST.map((providerOption) => (
                      <option key={providerOption.id} value={providerOption.id}>
                        {providerOption.label}
                      </option>
                    ))}
                  </select>
                  <p className="chatbot-helper-text">{provider.description}</p>
                  <p className="chatbot-provider-note">
                    {provider.demoModeSupported
                      ? "Demo mode is available for this provider."
                      : "This provider requires the visitor's own API key."}
                  </p>
                </Field>

                <Field label="Tone">
                  <select
                    className="chatbot-input"
                    value={config.tone}
                    onChange={(event) => handleFieldChange("tone", event.target.value)}
                  >
                    {tones.map((tone) => (
                      <option key={tone} value={tone}>
                        {tone}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Model ID">
                <input
                  type="text"
                  className="chatbot-input"
                  value={config.model}
                  onChange={(event) => handleFieldChange("model", event.target.value)}
                  placeholder="Enter any model supported by this provider"
                />
                <div className="chatbot-chip-grid">
                  {provider.modelSuggestions.map((model) => (
                    <button
                      key={model}
                      type="button"
                      className="chatbot-chip-button"
                      onClick={() => handleFieldChange("model", model)}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Your API key (optional)">
                <input
                  type="password"
                  className="chatbot-input"
                  value={config.apiKey}
                  onChange={(event) => handleFieldChange("apiKey", event.target.value)}
                  placeholder={
                    provider.demoModeSupported
                      ? "Leave blank to use the demo key if available"
                      : "Required for this provider"
                  }
                />
                <p className="chatbot-helper-text">
                  {provider.demoModeSupported
                    ? "Leave this blank to use the server-side demo key when available. Add your own key for better reliability."
                    : "Shared demo mode is not available here, so the visitor must add their own API key."}
                </p>
              </Field>
            </WorkspaceSection>
          ) : null}

          {activeSection === "behavior" ? (
            <WorkspaceSection
              step="02"
              title="Behavior"
              description="Define who the assistant serves and what it should optimize for."
            >
              <Field label="Role">
                <select
                  className="chatbot-input"
                  value={config.role}
                  onChange={(event) => handleFieldChange("role", event.target.value)}
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Ideal customer">
                <textarea
                  className="chatbot-input chatbot-textarea"
                  value={config.idealCustomer}
                  onChange={(event) => handleFieldChange("idealCustomer", event.target.value)}
                  placeholder="Describe the visitor this assistant should handle best"
                />
              </Field>

              <Field label="Primary goal">
                <textarea
                  className="chatbot-input chatbot-textarea"
                  value={config.primaryGoal}
                  onChange={(event) => handleFieldChange("primaryGoal", event.target.value)}
                  placeholder="What should success look like for the chatbot?"
                />
              </Field>

              <Field label="Custom instructions">
                <textarea
                  className="chatbot-input chatbot-textarea is-tall"
                  value={config.instructions}
                  onChange={(event) => handleFieldChange("instructions", event.target.value)}
                  placeholder="Add guidance for tone, qualification, escalation, or messaging priorities"
                />
              </Field>
            </WorkspaceSection>
          ) : null}

          {activeSection === "knowledge" ? (
            <WorkspaceSection
              step="03"
              title="Knowledge"
              description="Load the business facts the chatbot should rely on during live testing."
            >
              <Field label="Knowledge base">
                <textarea
                  className="chatbot-input chatbot-textarea is-xl"
                  value={config.knowledge}
                  onChange={(event) => handleFieldChange("knowledge", event.target.value)}
                  placeholder="Paste company info, FAQs, pricing notes, docs, policies, or onboarding steps"
                />
              </Field>

              <div className="chatbot-preset-box">
                <div className="chatbot-preset-head">
                  <span>Starter blocks</span>
                  <span>Drop in an example faster</span>
                </div>
                <div className="chatbot-preset-grid">
                  {knowledgePresets.map((preset) => (
                    <button
                      key={preset.title}
                      type="button"
                      className="chatbot-button"
                      onClick={() => appendKnowledgePreset(preset.snippet)}
                    >
                      {preset.title}
                    </button>
                  ))}
                </div>
              </div>

              <label className="chatbot-toggle">
                <input
                  type="checkbox"
                  checked={showSourceContext}
                  onChange={() => setShowSourceContext((current) => !current)}
                />
                <span>Show context under assistant replies</span>
              </label>
            </WorkspaceSection>
          ) : null}

          <div className="chatbot-step-footer">
            <span>
              Step {activeSectionIndex + 1} of {sectionOrder.length}
            </span>
            <div className="chatbot-step-actions">
              <button
                type="button"
                className="chatbot-button is-secondary"
                onClick={() => previousSection && setActiveSection(previousSection)}
                disabled={!previousSection}
              >
                Previous
              </button>
              <button
                type="button"
                className="chatbot-button"
                onClick={() => {
                  if (nextSection) {
                    setActiveSection(nextSection);
                    return;
                  }

                  onFinishSetup?.();
                  setIsMobileOpen(false);
                }}
              >
                {nextSection ? "Next step" : "Finish"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkspaceSection({ step, title, description, children }) {
  return (
    <section className="chatbot-workspace">
      <div className="chatbot-workspace-head">
        <span>{step}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="chatbot-field-stack">{children}</div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="chatbot-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function countKnowledgeLines(knowledge) {
  return knowledge
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean).length;
}
