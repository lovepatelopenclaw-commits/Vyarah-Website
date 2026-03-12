"use client";

import { useState } from "react";
import faqData from "@/data/faq";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="section faq yellow-section" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="dot-pattern"></div>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">FAQ</span>
                    <h2 className="section-title">
                        Questions? <span className="text-outline">Answered.</span>
                    </h2>
                </div>
                <div className="faq-list reveal">
                    {faqData.map((item, i) => (
                        <div
                            className={`faq-item${activeIndex === i ? " active" : ""}`}
                            key={i}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggle(i)}
                                aria-expanded={activeIndex === i}
                            >
                                {item.question}
                                <svg
                                    className="faq-chevron"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
