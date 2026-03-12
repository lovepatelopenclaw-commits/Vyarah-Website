export default function Team() {
    return (
        <section className="section team" id="team">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Leadership</span>
                    <h2 className="section-title">
                        Meet the <span className="text-outline">Founder.</span>
                    </h2>
                    <p className="section-desc">
                        We believe in direct relationships. When you work with Vyarah, you work
                        with the people building your growth engine.
                    </p>
                </div>
                <div className="team-grid" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                    <div className="team-card reveal" style={{ 
                        background: 'var(--surface)', 
                        border: '1px solid var(--border)', 
                        borderRadius: '24px', 
                        padding: '2.5rem', 
                        maxWidth: '500px',
                        textAlign: 'center'
                    }}>
                        <div className="team-image-wrapper" style={{ 
                            width: '120px', 
                            height: '120px', 
                            margin: '0 auto 1.5rem', 
                            borderRadius: '50%', 
                            overflow: 'hidden',
                            background: 'var(--sage)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Placeholder for actual founder image */}
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Founder Name</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: 500 }}>Founder & Lead Strategist</p>
                        <p style={{ lineHeight: 1.6, color: 'var(--text-dark)' }}>
                            With a deep background in advanced web systems and AI integration, they built Vyarah to
                            help businesses stop wasting money on basic websites and start investing in digital revenue machines.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
