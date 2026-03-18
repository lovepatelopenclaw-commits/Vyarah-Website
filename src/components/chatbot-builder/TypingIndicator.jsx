export default function TypingIndicator() {
  return (
    <div className="chatbot-typing">
      <div className="chatbot-typing-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span>Assistant is thinking</span>
    </div>
  );
}
