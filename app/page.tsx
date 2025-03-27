"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import "./home.css"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="home-page">
      {/* Hero section with parallax effect */}
      <div className="hero-section">
        <div
          className="hero-background"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            <h1>Isaac Henrie</h1>
            <h2>Full Stack Developer</h2>

            <div className="profile-image-container">
              <Image src="/images/profile.jfif" alt="w" fill className="profile-image" />
            </div>

            <p>I build beautiful, functional, and accessible web applications with modern technologies.</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <ArrowDown className="arrow-icon" />
        </div>
      </div>

      {/* About section */}
      <section className="about-section">
        <div className="container">
          <h2>About Me</h2>

          <div className="about-grid">
            <div className="about-text">
              <h3>My Journey</h3>
              <p>
                Im a passionate college student who has been grinding the software life. I know I'm great and I hand coded a version control software called Git.
              </p>
              <p>
                I specialize in React, Next.js, Node.js, and modern frontend technologies. My background in design
                allows me to bridge the gap between development and user experience.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <h4>Frontend</h4>
                <p>React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="skill-card">
                <h4>Backend</h4>
                <p>Node.js, Express, PostgreSQL, MongoDB</p>
              </div>
              <div className="skill-card">
                <h4>Design</h4>
                <p>Figma, Adobe XD, UI/UX Principles</p>
              </div>
              <div className="skill-card">
                <h4>DevOps</h4>
                <p>AWS, Vercel, Docker, CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="skills-section">
        <div className="container">
          <h2>My Skills</h2>

          <div className="skills-list">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "GraphQL",
              "REST API",
              "CSS",
              "Styled Components",
              "Git",
              "AWS",
              "Docker",
              "CI/CD",
            ].map((skill, index) => (
              <div key={index} className="skill-item">
                <div>{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact-section">
        <div className="container">
          <h2>Let's Work Together</h2>
          <p>
            Reach out for some free tips on how to be as cool as me bruh
          </p>

          <a href="mailto:contact@johndoe.com" className="contact-button">
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}

