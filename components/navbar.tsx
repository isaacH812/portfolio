"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import "./navbar.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link href="/" className="navbar-logo">
            Isaac Henrie
          </Link>

          {/* Desktop navigation */}
          <nav className="navbar-desktop">
            <Link href="/" className="navbar-link">
              Home
            </Link>
            <Link href="/projects" className="navbar-link">
              Projects
            </Link>
            <Link href="/jobs" className="navbar-link">
              Experience
            </Link>
            <Link href="mailto:contact@johndoe.com" className="navbar-button">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="navbar-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="navbar-mobile">
          <div className="navbar-mobile-links">
            <Link href="/" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/projects" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/jobs" className="navbar-mobile-link" onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
            <Link
              href="mailto:contact@johndoe.com"
              className="navbar-mobile-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

