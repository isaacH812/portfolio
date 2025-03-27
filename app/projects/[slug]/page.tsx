import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/data"
import { ArrowLeft, Globe, Github, Calendar } from "lucide-react"
import "../project-detail.css"

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug}  = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="project-detail-page">
      <Link href="/projects" className="back-link">
        <ArrowLeft className="back-icon" />
        Back to Projects
      </Link>

      <div className="project-detail-container">
        <h1 className="project-detail-title">{project.name}</h1>

        <div className="project-detail-image-container">
          <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="project-detail-image" />
        </div>

        <div className="project-detail-grid">
          <div className="project-detail-main">
            <h2 className="project-detail-section-title">Description</h2>
            <p className="project-detail-description">{project.longDescription}</p>
          </div>

          <div className="project-detail-sidebar">
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Technologies</h2>
              <div className="project-detail-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-detail-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-detail-section">
              <h2 className="project-detail-section-title">Timeline</h2>
              <div className="project-detail-timeline">
                <Calendar className="timeline-icon" />
                <span>
                  {new Date(project.startDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="timeline-separator">-</span>
                <span>
                  {new Date(project.endDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {(project.url || project.github) && (
              <div className="project-detail-section">
                <h2 className="project-detail-section-title">Links</h2>
                <div className="project-detail-links">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                      <Globe className="link-icon" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                      <Github className="link-icon" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

