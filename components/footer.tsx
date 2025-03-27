import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-title">Isaac Henrie</h3>
            <p className="footer-description">
              Full Stack Developer specializing in creating beautiful, functional, and accessible web applications.
            </p>
            <div className="footer-social">
              <a href="https://github.com" className="social-link">
                <Github className="social-icon" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" className="social-link">
                <Linkedin className="social-icon" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" className="social-link">
                <Twitter className="social-icon" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:contact@johndoe.com" className="social-link">
                <Mail className="social-icon" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/" className="footer-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer-nav-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="footer-nav-link">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-nav-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>A02376833@aggies.usu.edu</li>
              <li>Yo mamas house</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Isaac Henrie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

