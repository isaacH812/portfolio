import Link from "next/link"
import Image from "next/image"
import { jobs } from "@/lib/data"
import { ArrowRight, Calendar } from "lucide-react"
import "./jobs.css"

export default function JobsPage() {
  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1>Work Experience</h1>
        <p>My professional journey and the companies I have had the pleasure to work with.</p>
      </div>

      <div className="jobs-list">
        {jobs.map((job, index) => (
          <Link href={`/jobs/${job.slug}`} key={job.id} className="job-card-link">
            <div className={`job-card ${index !== jobs.length - 1 ? "job-card-with-margin" : ""}`}>
              <div className="job-card-content">
                <div className="job-logo-container">
                  <Image src={job.logo || "/images/loog2.png"} alt={job.company} fill className="job-logo" />
                </div>

                <div className="job-details">
                  <h3 className="job-title">{job.name}</h3>

                  <h4 className="job-company">
                    {job.company} • {job.location}
                  </h4>

                  <div className="job-duration">
                    <Calendar className="duration-icon" />
                    <span>
                      {new Date(job.startDate).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="duration-separator">-</span>
                    <span>
                      {job.endDate
                        ? new Date(job.endDate).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })
                        : "Present"}
                    </span>
                  </div>

                  <p className="job-description">{job.description}</p>

                  <div className="job-link">
                    View Details <ArrowRight className="job-link-icon" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

