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
                        <span className="section-tag" style={{ marginBottom: '1rem' }}>Founder</span>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Love Patel</h3>
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
