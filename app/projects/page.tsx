import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import "./projects.css"

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>
          A collection of my recent work and personal projects. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.id} className="project-card-link">
            <div className="project-card">
              <div className="project-image-container">
                <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="project-image" />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="project-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="project-tag">+{project.technologies.length - 3} more</span>
                  )}
                </div>

                <div className="project-link">
                  View Project <ArrowRight className="project-link-icon" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

