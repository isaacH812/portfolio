import Link from "next/link"
import "./not-found.css"

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="not-found-link">
        Back to Home
      </Link>
    </div>
  )
}

