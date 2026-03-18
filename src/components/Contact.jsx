"use client";

import { useState } from "react";
import siteConfig from "@/data/siteConfig";

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("sent");
                e.target.reset();
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                throw new Error("Failed to send");
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info reveal">
                        <span className="section-tag">Let&apos;s Talk</span>
                        <h2 className="section-title">
                            Start Your Growth{" "}
                            <span className="text-outline">Today</span>
                        </h2>
                        <p>
                            Fill out the form and our team will get back to you within
                            24 hours with a custom growth roadmap.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </span>
                                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </span>
                                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                                    {siteConfig.phone}
                                </a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </span>
                                <span>{siteConfig.location}</span>
                            </div>
                        </div>
                        <div className="contact-quick-actions">
                            <a
                                href={siteConfig.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-dark btn-block quick-action-btn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                            <a
                                href={siteConfig.whatsapp + "?text=Hi%2C%20I%27d%20like%20to%20book%20a%20strategy%20call"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-yellow btn-block quick-action-btn"
                                title="Book a strategy call"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                Book a Strategy Call
                            </a>
                        </div>
                    </div>
                    <form className="contact-form reveal" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@company.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="business">Business Type</label>
                            <select id="business" name="business" required defaultValue="">
                                <option value="" disabled>
                                    Select your business type
                                </option>
                                <option value="startup">Startup</option>
                                <option value="ecommerce">E-Commerce</option>
                                <option value="saas">SaaS / Tech</option>
                                <option value="service">Service Business</option>
                                <option value="coaching">Coaching / Consulting</option>
                                <option value="local">Local Business</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">
                                What&apos;s your biggest growth challenge?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Tell us about your business goals..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-dark btn-block btn-lg${status === "sent" ? " btn-success" : ""}${status === "error" ? " btn-error" : ""}`}
                            disabled={status === "sending"}
                        >
                            {status === "sending" && "Sending..."}
                            {status === "sent" && (
                                <>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    Message Sent!
                                </>
                            )}
                            {status === "error" && "Error — Try Again"}
                            {status === "idle" && (
                                <>
                                    Send Message
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </>
                            )}
                        </button>
                        <p className="form-note">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle", marginRight: 4 }}>
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            Your data is secure. We never spam.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
