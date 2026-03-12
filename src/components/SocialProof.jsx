"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

const proofMessages = [
    { city: "Mumbai", action: "inquired about web development" },
    { city: "Bangalore", action: "booked a strategy call" },
    { city: "Delhi", action: "started a Growth plan" },
    { city: "Hyderabad", action: "requested an AI automation quote" },
    { city: "Pune", action: "signed up for the newsletter" },
    { city: "Chennai", action: "inquired about app development" },
    { city: "Ahmedabad", action: "requested a free audit" },
    { city: "Jaipur", action: "booked a strategy call" },
];

export default function SocialProof() {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dismissed, setDismissed] = useState(false);

    // Stable time-ago values per message index
    const timeAgos = useMemo(
        () => proofMessages.map((_, i) => (i * 7 + 3) % 15 + 2),
        []
    );

    const showNext = useCallback(() => {
        if (dismissed) return;
        setCurrentIndex((prev) => (prev + 1) % proofMessages.length);
        setShow(true);
        setTimeout(() => setShow(false), 4000);
    }, [dismissed]);

    useEffect(() => {
        if (dismissed) return;

        // First toast after 8 seconds
        const initial = setTimeout(() => {
            setShow(true);
            setTimeout(() => setShow(false), 4000);
        }, 8000);

        // Subsequent toasts every 12 seconds
        const interval = setInterval(showNext, 12000);

        return () => {
            clearTimeout(initial);
            clearInterval(interval);
        };
    }, [dismissed, showNext]);

    if (dismissed) return null;

    const msg = proofMessages[currentIndex];
    const timeAgo = timeAgos[currentIndex];

    return (
        <div className={`social-proof-toast${show ? " visible" : ""}`}>
            <div className="social-proof-content">
                <div className="social-proof-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </div>
                <div className="social-proof-text">
                    <p>
                        <strong>Someone from {msg.city}</strong> {msg.action}
                    </p>
                    <span className="social-proof-time">{timeAgo} minutes ago</span>
                </div>
                <button
                    className="social-proof-close"
                    onClick={() => setDismissed(true)}
                    aria-label="Dismiss notifications"
                >
                    ×
                </button>
            </div>
        </div>
    );
}
