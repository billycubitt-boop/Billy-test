import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo">YourCompany</span>
          <p>Building exceptional products and experiences for businesses worldwide.</p>
        </div>
        <nav className="footer-links">
          <div>
            <strong>Company</strong>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <strong>Connect</strong>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter / X</a>
            <a href="#">GitHub</a>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  )
}
