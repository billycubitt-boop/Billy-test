import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Have a project in mind? We'd love to hear from you.</p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong>
                <span>hello@yourcompany.com</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <span>+1 (555) 000-0000</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Office</strong>
                <span>123 Business Ave, City, ST 00000</span>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="contact-success">
              <span>✅</span>
              <h3>Message received!</h3>
              <p>Thanks for reaching out. We'll get back to you within one business day.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                  />
                </label>
              </div>
              <label>
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </label>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
