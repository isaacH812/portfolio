import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getJobBySlug } from "@/lib/data"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import "../job-detail.css"

export default function JobPage({ params }: { params: { slug: string } }) {
  const job = getJobBySlug(params.slug)

  if (!job) {
    notFound()
  }

  return (
    <div className="job-detail-page">
      <Link href="/jobs" className="back-link">
        <ArrowLeft className="back-icon" />
        Back to Experience
      </Link>

      <div className="job-detail-container">
        <div className="job-detail-card">
          <div className="job-detail-header">
            <div className="job-detail-logo-container">
              <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="job-detail-logo" />
            </div>

            <div className="job-detail-title-container">
              <h1 className="job-detail-title">{job.name}</h1>
              <h2 className="job-detail-company">{job.company}</h2>

              <div className="job-detail-meta">
                <div className="job-detail-duration">
                  <Calendar className="meta-icon" />
                  <span>
                    {new Date(job.startDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="meta-separator">-</span>
                  <span>
                    {job.endDate
                      ? new Date(job.endDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })
                      : "Present"}
                  </span>
                </div>

                <div className="job-detail-location">
                  <MapPin className="meta-icon" />
                  {job.location}
                </div>
              </div>
            </div>
          </div>

          <div className="job-detail-content">
            <h3 className="job-detail-section-title">Job Description</h3>
            <p className="job-detail-description">{job.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

