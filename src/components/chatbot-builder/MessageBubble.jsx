export default function MessageBubble({ role, content, showSourceContext = false }) {
  const isUser = role === "user";

  return (
    <div className={`chatbot-message-row${isUser ? " is-user" : ""}`}>
      <article className={`chatbot-message${isUser ? " is-user" : ""}`}>
        <div className="chatbot-message-label">{isUser ? "Visitor" : "Assistant"}</div>
        <div className="chatbot-message-copy">{content}</div>
        {showSourceContext ? (
          <div className="chatbot-message-context">Using configured knowledge base</div>
        ) : null}
      </article>
    </div>
  );
}
