const problemItems = [
    "Manual lead follow-up — prospects go cold",
    "Generic websites that don't convert",
    "Disconnected tools and wasted ad spend",
    "Scaling means hiring more people",
    "No data-driven decisions",
];

const solutionItems = [
    "AI chatbots qualifying & booking leads 24/7",
    "Revenue-engineered funnels that convert",
    "Unified automation stack — zero waste",
    "Scale with systems, not headcount",
    "Real-time analytics driving every decision",
];

export default function ProblemSolution() {
    return (
        <section className="section pvs">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Why Most Businesses Struggle</span>
                    <h2 className="section-title">
                        The Old Way vs.{" "}
                        <span className="text-outline">The Vyarah</span> Way
                    </h2>
                </div>
                <div className="pvs-grid">
                    <div className="pvs-card problem reveal">
                        <h3>
                            <svg className="pvs-icon pvs-icon-problem" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            Without Vyarah
                        </h3>
                        <ul>
                            {problemItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pvs-card solution reveal">
                        <h3>
                            <svg className="pvs-icon pvs-icon-solution" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            With Vyarah
                        </h3>
                        <ul>
                            {solutionItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
