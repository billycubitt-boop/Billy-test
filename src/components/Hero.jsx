import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <span className="hero-badge">Trusted by businesses worldwide</span>
        <h1>
          Build something <span className="gradient-text">extraordinary</span> with us
        </h1>
        <p>
          YourCompany helps forward-thinking businesses grow with modern solutions,
          expert strategy, and a team that genuinely cares about your success.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Get Started</a>
          <a href="#services" className="btn-secondary">See Our Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>200+</strong>
            <span>Clients served</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>98%</strong>
            <span>Satisfaction rate</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>10+ yrs</strong>
            <span>Of experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
