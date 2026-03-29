import './Services.css'

const services = [
  {
    icon: '💡',
    title: 'Strategy & Consulting',
    description:
      'We work closely with your team to craft a clear roadmap that drives sustainable growth and competitive advantage.',
  },
  {
    icon: '🎨',
    title: 'Design & Branding',
    description:
      'From logo to full brand identity, we create visually compelling experiences that resonate with your audience.',
  },
  {
    icon: '🚀',
    title: 'Product Development',
    description:
      'Modern, scalable software built with the right technology stack to power your business now and in the future.',
  },
  {
    icon: '📈',
    title: 'Marketing & Growth',
    description:
      'Data-driven campaigns across SEO, paid media, and content that consistently bring qualified leads to your door.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description:
      'Protecting your data and reputation with industry-best practices, audits, and ongoing monitoring.',
  },
  {
    icon: '🤝',
    title: 'Ongoing Support',
    description:
      "We're a long-term partner, not a one-time vendor. Dedicated support keeps your business running smoothly.",
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-inner">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>End-to-end solutions tailored to your unique business needs.</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
