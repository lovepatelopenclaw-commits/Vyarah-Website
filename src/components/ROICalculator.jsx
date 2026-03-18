"use client";

import { useCallback, useState } from "react";
import siteConfig from "@/data/siteConfig";

const MAX_MONTHLY_REVENUE = 10000000;
const BAR_SCALE_MAX = 30000000;

export default function ROICalculator() {
    const [revenue, setRevenue] = useState(500000);
    const [visitors, setVisitors] = useState(5000);
    const [convRate, setConvRate] = useState(2);

    const currentLeads = Math.round(visitors * (convRate / 100));

    // Lower conversion rates have more optimization headroom, and higher traffic
    // tends to unlock bigger gains from UX and funnel improvements.
    const headroomFactor = Math.max(1.35, 2.7 - convRate * 0.22);
    const trafficFactor = 1 + Math.min(visitors / 100000, 1) * 0.25;
    const projectedConvRate = Number(
        Math.min(convRate * headroomFactor * trafficFactor, 12).toFixed(1)
    );

    const projectedLeads = Math.round(visitors * (projectedConvRate / 100));
    const avgDealValue = revenue / Math.max(currentLeads, 1);
    const projectedRevenue = Math.round(projectedLeads * avgDealValue);
    const uplift = projectedRevenue - revenue;

    const formatINR = useCallback((num) => {
        if (num >= 10000000) return `\u20b9${(num / 10000000).toFixed(1)}Cr`;
        if (num >= 100000) return `\u20b9${(num / 100000).toFixed(1)}L`;
        return `\u20b9${num.toLocaleString("en-IN")}`;
    }, []);

    const getBarWidth = useCallback((value) => {
        const normalizedValue = Math.max(value, 0) / BAR_SCALE_MAX;
        const scaledWidth = Math.sqrt(Math.min(normalizedValue, 1)) * 100;

        return `${Math.max(18, Math.min(scaledWidth, 100)).toFixed(1)}%`;
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
                                max={MAX_MONTHLY_REVENUE}
                                step="100000"
                                value={revenue}
                                onChange={(e) => setRevenue(Number(e.target.value))}
                                className="roi-slider"
                            />
                            <div className="roi-range-labels">
                                <span>\u20b91L</span>
                                <span>\u20b91Cr</span>
                            </div>
                        </div>
                        <div className="roi-input-group">
                            <label>
                                Monthly Website Visitors
                                <span className="roi-value">
                                    {visitors.toLocaleString("en-IN")}
                                </span>
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
                                        style={{ width: getBarWidth(revenue) }}
                                    ></div>
                                </div>
                                <div className="roi-bar-value">{formatINR(revenue)}</div>
                            </div>
                            <div className="roi-bar-group">
                                <div className="roi-bar-label">Projected</div>
                                <div className="roi-bar-container">
                                    <div
                                        className="roi-bar roi-bar-projected"
                                        style={{ width: getBarWidth(projectedRevenue) }}
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
                            <div className="roi-summary-item">
                                <span className="roi-summary-label">Projected Conv. Rate</span>
                                <span className="roi-summary-value roi-highlight">
                                    {projectedConvRate}%
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
                            href={`${siteConfig.whatsapp}?text=Hi!%20I%20used%20your%20calculator.%20Help%20me%20add%20${encodeURIComponent(formatINR(uplift).replace("+", ""))}%20in%20potential%20uplift.`}
                            className="btn btn-dark btn-lg btn-block roi-cta-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Discuss ROI Strategy on WhatsApp
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
