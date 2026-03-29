import './About.css'

const values = [
  { label: 'Transparency', desc: 'No surprises — we keep you informed at every step.' },
  { label: 'Quality', desc: "We take pride in delivering work we're truly proud of." },
  { label: 'Partnership', desc: "Your success is our success. We're in this together." },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner about-grid">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Founded over a decade ago, YourCompany has grown from a small consultancy into
            a full-service agency trusted by businesses of all sizes — from ambitious
            startups to established enterprises.
          </p>
          <p>
            Our multidisciplinary team combines deep technical expertise with creative
            thinking to solve real business problems. We don't just deliver projects;
            we build lasting relationships.
          </p>
          <ul className="values-list">
            {values.map(v => (
              <li key={v.label}>
                <strong>{v.label}</strong>
                <span>{v.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-visual">
          <div className="about-card">
            <div className="about-card-row">
              <span className="about-number">200+</span>
              <span className="about-label">Projects delivered</span>
            </div>
            <div className="about-card-row">
              <span className="about-number">35</span>
              <span className="about-label">Team members</span>
            </div>
            <div className="about-card-row">
              <span className="about-number">15</span>
              <span className="about-label">Industry awards</span>
            </div>
            <div className="about-card-row">
              <span className="about-number">12</span>
              <span className="about-label">Countries served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
