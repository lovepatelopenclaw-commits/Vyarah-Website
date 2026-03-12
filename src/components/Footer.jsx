"use client";

import { useState } from "react";
import siteConfig from "@/data/siteConfig";

export default function Footer() {
    const [subStatus, setSubStatus] = useState("idle");

    const handleNewsletter = async (e) => {
        e.preventDefault();
        setSubStatus("sending");

        const email = new FormData(e.target).get("email");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setSubStatus("sent");
                e.target.reset();
                setTimeout(() => setSubStatus("idle"), 3000);
            } else {
                throw new Error("Failed");
            }
        } catch {
            setSubStatus("error");
            setTimeout(() => setSubStatus("idle"), 3000);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <span className="logo-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </span>
                            <span className="logo-text">
                                Vya<span className="logo-highlight">rah</span>
                            </span>
                        </a>
                        <p>
                            AI-powered digital growth systems that scale your business,
                            automate operations, and multiply revenue.
                        </p>
                        <div className="footer-contact-info">
                            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="footer-phone">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                {siteConfig.phone}
                            </a>
                            <a href={`mailto:${siteConfig.email}`} className="footer-email">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                {siteConfig.email}
                            </a>
                        </div>
                        {siteConfig.social?.linkedin && (
                            <div className="footer-social" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', transition: 'color 0.2s' }} aria-label="LinkedIn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {siteConfig.footerLinks.services.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            {siteConfig.footerLinks.company.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Stay Updated</h4>
                        <p className="footer-newsletter-text">
                            Get growth insights and AI trends.
                        </p>
                        <form className="footer-newsletter" onSubmit={handleNewsletter}>
                            <input
                                type="email"
                                name="email"
                                placeholder={
                                    subStatus === "sent" ? "Subscribed!" : "your@email.com"
                                }
                                required
                                disabled={subStatus === "sending" || subStatus === "sent"}
                            />
                            <button
                                type="submit"
                                className="btn btn-yellow"
                                disabled={subStatus === "sending"}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vyarah. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
