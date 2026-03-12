"use client";

import { useState, useCallback } from "react";
import siteConfig from "@/data/siteConfig";

export default function ROICalculator() {
    const [revenue, setRevenue] = useState(500000);
    const [visitors, setVisitors] = useState(5000);
    const [convRate, setConvRate] = useState(2);

    const currentLeads = Math.round(visitors * (convRate / 100));
    const projectedLeads = Math.round(visitors * ((convRate * 2.5) / 100));
    const avgDealValue = revenue / Math.max(currentLeads, 1);
    const projectedRevenue = Math.round(projectedLeads * avgDealValue);
    const uplift = projectedRevenue - revenue;

    const formatINR = useCallback((num) => {
        if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)}Cr`;
        if (num >= 100000) return `₹${(num / 100000).toFixed(1)}L`;
        return `₹${num.toLocaleString("en-IN")}`;
    }, []);

    return (
        <section className="section roi-calculator" id="roi-calculator">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">ROI Calculator</span>
                    <h2 className="section-title">
                        See Your Potential{" "}
                        <span className="text-outline">Growth</span>
                    </h2>
                    <p className="section-desc">
                        Adjust the sliders to see how improving your conversion rate can
                        impact revenue.
                    </p>
                </div>
                <div className="roi-grid reveal">
                    <div className="roi-inputs">
                        <div className="roi-input-group">
                            <label>
                                Monthly Revenue
                                <span className="roi-value">{formatINR(revenue)}</span>
                            </label>
                            <input
                                type="range"
                                min="100000"
                                max="10000000"
                                step="100000"
                                value={revenue}
                                onChange={(e) => setRevenue(Number(e.target.value))}
                                className="roi-slider"
                            />
                            <div className="roi-range-labels">
                                <span>₹1L</span>
                                <span>₹1Cr</span>
                            </div>
                        </div>
                        <div className="roi-input-group">
                            <label>
                                Monthly Website Visitors
                                <span className="roi-value">{visitors.toLocaleString("en-IN")}</span>
                            </label>
                            <input
                                type="range"
                                min="500"
                                max="100000"
                                step="500"
                                value={visitors}
                                onChange={(e) => setVisitors(Number(e.target.value))}
                                className="roi-slider"
                            />
                            <div className="roi-range-labels">
                                <span>500</span>
                                <span>1,00,000</span>
                            </div>
                        </div>
                        <div className="roi-input-group">
                            <label>
                                Current Conversion Rate
                                <span className="roi-value">{convRate}%</span>
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="10"
                                step="0.5"
                                value={convRate}
                                onChange={(e) => setConvRate(Number(e.target.value))}
                                className="roi-slider"
                            />
                            <div className="roi-range-labels">
                                <span>0.5%</span>
                                <span>10%</span>
                            </div>
                        </div>
                    </div>
                    <div className="roi-results">
                        <div className="roi-comparison">
                            <div className="roi-bar-group">
                                <div className="roi-bar-label">Current</div>
                                <div className="roi-bar-container">
                                    <div
                                        className="roi-bar roi-bar-current"
                                        style={{
                                            width: `${Math.min((revenue / projectedRevenue) * 100, 100)}%`,
                                        }}
                                    ></div>
                                </div>
                                <div className="roi-bar-value">{formatINR(revenue)}</div>
                            </div>
                            <div className="roi-bar-group">
                                <div className="roi-bar-label">Projected</div>
                                <div className="roi-bar-container">
                                    <div
                                        className="roi-bar roi-bar-projected"
                                        style={{ width: "100%" }}
                                    ></div>
                                </div>
                                <div className="roi-bar-value roi-bar-value-projected">
                                    {formatINR(projectedRevenue)}
                                </div>
                            </div>
                        </div>
                        <div className="roi-summary">
                            <div className="roi-summary-item">
                                <span className="roi-summary-label">Current Leads / mo</span>
                                <span className="roi-summary-value">{currentLeads}</span>
                            </div>
                            <div className="roi-summary-item">
                                <span className="roi-summary-label">Projected Leads / mo</span>
                                <span className="roi-summary-value roi-highlight">
                                    {projectedLeads}
                                </span>
                            </div>
                            <div className="roi-summary-item roi-uplift">
                                <span className="roi-summary-label">Potential Uplift</span>
                                <span className="roi-summary-value roi-highlight">
                                    +{formatINR(uplift)}
                                </span>
                            </div>
                        </div>
                        <a
                            href={`${siteConfig.whatsapp}?text=Hi!%20I%20used%20your%20calculator.%20Help%20me%20add%20%E2%82%B9${formatINR(uplift).replace('₹', '')}%20in%20potential%20uplift.`}
                            className="btn btn-dark btn-lg btn-block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discuss this {formatINR(uplift)} ROI Strategy on WhatsApp
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
