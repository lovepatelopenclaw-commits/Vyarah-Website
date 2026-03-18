"use client";

import { useState } from "react";
import siteConfig from "@/data/siteConfig";

export default function FreeAuditForm() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({...data, source: "Free Audit"}),
            });

            if (res.ok) {
                setStatus("sent");
                e.target.reset();
            } else {
                throw new Error("Failed");
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <div className="contact-form reveal" style={{ background: 'var(--white)' }}>
            {status === "sent" ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="2" style={{ margin: '0 auto 1.5rem' }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <h3 style={{ marginBottom: '1rem' }}>Audit Requested Successfully</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Our team is reviewing your details. We will email your custom PDF report within 48 hours.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Request Your Free Audit</h3>
                    
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Work Email</label>
                        <input type="email" id="email" name="email" placeholder="john@company.com" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="website">Website URL</label>
                        <input type="url" id="website" name="website" placeholder="https://yourwebsite.com" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="revenue">Current Monthly Revenue Range</label>
                        <select id="revenue" name="revenue" required defaultValue="">
                            <option value="" disabled>Select range</option>
                            <option value="Under ₹1L">Under ₹1L / month</option>
                            <option value="₹1L - ₹5L">₹1L - ₹5L / month</option>
                            <option value="₹5L - ₹20L">₹5L - ₹20L / month</option>
                            <option value="Over ₹20L">Over ₹20L / month</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="goal">Primary Growth Goal</label>
                        <select id="goal" name="goal" required defaultValue="">
                            <option value="" disabled>Select goal</option>
                            <option value="More Traffic/Leads">Generate more traffic & leads</option>
                            <option value="Higher Conversion Rate">Improve conversion rates</option>
                            <option value="Automate Operations">Automate operations & save time</option>
                            <option value="App Development">Launch a new app/product</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-dark btn-block btn-lg ${status === "error" ? " btn-error" : ""}`}
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Submitting..." : status === "error" ? "Error — Try Again" : "Get My Free PDF Audit"}
                    </button>
                </form>
            )}
        </div>
    );
}
