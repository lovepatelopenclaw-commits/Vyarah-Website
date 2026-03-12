"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import siteConfig from "@/data/siteConfig";

export default function FreeAudit() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // Reusing the contact API or you can create a specific endpoint
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
        <>
            <Navbar />
            <main className="section page-header" style={{ paddingTop: '100px', minHeight: '60vh', background: 'var(--sage)' }}>
                <div className="container">
                    <div className="contact-grid" style={{ alignItems: 'flex-start' }}>
                        <div className="contact-info reveal">
                            <span className="section-tag" style={{ background: 'var(--charcoal)', color: 'var(--white)' }}>Free Growth Audit</span>
                            <h1 className="section-title">
                                Stop Guessing. Start <span className="text-outline">Scaling.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                                Get a comprehensive, data-driven analysis of your current digital presence. We'll identify exactly where you are losing revenue and how AI automation can fix it.
                            </p>
                            
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>SEO & Technical Performance Analysis</strong>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>Conversion Rate Optimization Opportunities</strong>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <strong>Automation & AI Integration Roadmap</strong>
                                </li>
                            </ul>
                            
                            <p style={{ color: 'var(--text-muted)' }}>
                                Includes a personalized 15-page PDF report delivered within 48 hours. No commitments required.
                            </p>
                        </div>
                        
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
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
