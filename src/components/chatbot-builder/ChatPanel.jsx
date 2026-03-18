"use client";

import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const quickPrompts = [
  "How would this chatbot help my website convert more leads?",
  "Can you give me a support-focused setup example?",
  "What knowledge should I upload first?",
];

export default function ChatPanel({
  messages,
  loading,
  error,
  onSend,
  showSourceContext,
  learning,
  assistantName,
  role,
  tone,
  modeLabel,
  focusSignal,
}) {
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, learning]);

  useEffect(() => {
    if (!focusSignal) {
      return;
    }

    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 180);

    return () => clearTimeout(timeout);
  }, [focusSignal]);

  const submitMessage = (event) => {
    event.preventDefault();

    if (!input.trim() || loading) {
      return;
    }

    onSend(input.trim());
    setInput("");
  };

  return (
    <div className="chatbot-chat-shell">
      <div className="chatbot-preview-card">
        <div className="chatbot-preview-top">
          <div>
            <p className="chatbot-eyebrow">Live preview</p>
            <h2>{assistantName}</h2>
          </div>
          <div className="chatbot-preview-lights" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="chatbot-preview-grid">
          <div className="chatbot-mini-card">
            <span>Role</span>
            <strong>{role}</strong>
          </div>
          <div className="chatbot-mini-card">
            <span>Tone</span>
            <strong>{tone}</strong>
          </div>
          <div className="chatbot-mini-card">
            <span>Mode</span>
            <strong>{modeLabel}</strong>
          </div>
        </div>

        <div className="chatbot-quick-prompts">
          <div className="chatbot-quick-prompts-head">
            <span>Quick prompts</span>
            <span>Click to test the setup fast</span>
          </div>
          <div className="chatbot-quick-grid">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="chatbot-chip-button"
                onClick={() => onSend(prompt)}
                disabled={loading}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="chatbot-thread-shell">
        <div className="chatbot-thread-head">
          <strong>Conversation</strong>
          <span>Demo your knowledge + personality</span>
        </div>

        <div className="chatbot-thread">
          {messages
            .filter((message) => message.role !== "system")
            .map((message, index) => (
              <MessageBubble
                key={`${message.role}-${index}`}
                role={message.role}
                content={message.content}
                showSourceContext={showSourceContext && message.role === "assistant"}
              />
            ))}

          {loading ? <TypingIndicator /> : null}

          {learning ? (
            <div className="chatbot-learning-pill">Refreshing assistant knowledge...</div>
          ) : null}

          <div ref={chatEndRef} />
        </div>

        {error ? <div className="chatbot-error-banner">{error}</div> : null}

        <form className="chatbot-input-form" onSubmit={submitMessage}>
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Ask about pricing, setup, support, branding, or FAQs..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={loading}
          />
          <button type="submit" className="chatbot-button" disabled={loading}>
            Send
          </button>
        </form>

        <p className="chatbot-thread-note">
          Best for showing prospects how their own business context changes the assistant instantly.
        </p>
      </div>
    </div>
  );
}
