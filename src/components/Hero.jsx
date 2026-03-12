import siteConfig from "@/data/siteConfig";



export default function Hero() {
    return (
        <header className="hero" id="hero">
            <div className="dot-pattern"></div>
            <div className="container hero-grid">
                <div className="hero-content">
                    <div className="hero-badge reveal">
                        <span className="badge-dot"></span> NEW: AI Growth Systems 2.0
                    </div>
                    <h1 className="hero-title reveal">
                        We Don&apos;t Build Websites. We Build{" "}
                        <span className="text-outline">Revenue</span> Machines.
                    </h1>
                    <p className="hero-sub reveal">
                        AI-driven digital systems that automate your growth, multiply
                        conversions, and scale your revenue — on autopilot.
                    </p>
                    <div className="hero-ctas reveal">
                        <a href="#contact" className="btn btn-dark btn-lg">
                            Book Free Strategy Call
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
                        <a href="#results" className="btn btn-white">
                            See Our Results
                        </a>
                    </div>
                    <div className="hero-stats reveal">
                        {siteConfig.stats.map((stat) => (
                            <div className="stat-item" key={stat.label}>
                                <span className="stat-number">
                                    {stat.value}
                                </span>
                                <span className="stat-suffix">{stat.suffix}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero-visual reveal">
                    <div className="browser-mockup">
                        <div className="browser-header">
                            <span className="browser-dot red"></span>
                            <span className="browser-dot yellow"></span>
                            <span className="browser-dot green"></span>
                        </div>
                        <div className="browser-content">
                            <div className="mock-topbar">
                                <div className="mock-nav-pill"></div>
                                <div className="mock-nav-pill short"></div>
                                <div className="mock-nav-pill short"></div>
                            </div>
                            <div className="mock-dashboard">
                                <div className="mock-card sage">
                                    <div className="mock-label">Monthly Revenue</div>
                                    <div className="mock-value">₹24.7L</div>
                                    <div className="mock-chart">
                                        <div className="mock-bar" style={{ height: "35%" }}></div>
                                        <div className="mock-bar" style={{ height: "50%" }}></div>
                                        <div className="mock-bar" style={{ height: "42%" }}></div>
                                        <div className="mock-bar" style={{ height: "68%" }}></div>
                                        <div className="mock-bar" style={{ height: "85%" }}></div>
                                        <div className="mock-bar" style={{ height: "95%" }}></div>
                                    </div>
                                </div>
                                <div className="mock-card dark">
                                    <div className="mock-label light">AI Chatbot</div>
                                    <div className="mock-chat-lines">
                                        <div className="mock-line w70"></div>
                                        <div className="mock-line w50 right"></div>
                                        <div className="mock-line w60"></div>
                                    </div>
                                </div>
                                <div className="mock-card sage small">
                                    <div className="mock-label">Leads</div>
                                    <div className="mock-value sm">+189%</div>
                                </div>
                                <div className="mock-card sage small">
                                    <div className="mock-label">Conversion</div>
                                    <div className="mock-value sm">4.8x</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
