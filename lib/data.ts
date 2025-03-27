export type Project = {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  startDate: string
  endDate: string
  url?: string
  github?: string
}

export type Job = {
  id: string
  name: string
  slug: string
  company: string
  logo: string
  description: string
  longDescription: string
  startDate: string
  endDate: string | null
  location: string
}

export const projects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    slug: "e-commerce-platform",
    description: "A full-featured e-commerce platform with payment processing and inventory management.",
    longDescription:
      "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. The platform includes product management, inventory tracking, payment processing with Stripe, user authentication, order management, and analytics dashboards. Built with performance and scalability in mind, it can handle thousands of concurrent users and process hundreds of transactions per minute. The admin dashboard gives store owners complete control over their products, orders, and customer data.",
    image: "/images/proj1.jfif",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    startDate: "2022-03-01",
    endDate: "2022-08-15",
    url: "https://example-ecommerce.com",
    github: "https://github.com/johndoe/ecommerce-platform",
  },
  {
    id: "2",
    name: "Health & Fitness App",
    slug: "health-fitness-app",
    description: "Mobile application for tracking workouts, nutrition, and health metrics.",
    longDescription:
      "This health and fitness application helps users achieve their wellness goals by tracking workouts, nutrition, and key health metrics. Users can create custom workout routines, log their exercises, and monitor their progress over time. The nutrition tracker allows for meal planning and calorie counting, while the health dashboard visualizes trends in weight, body measurements, and other metrics. The app also includes social features that allow users to connect with friends, share achievements, and participate in challenges.",
      image: "/images/proj2.jfif",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express", "MongoDB"],
    startDate: "2021-09-10",
    endDate: "2022-02-28",
    url: "https://fitnessapp.example.com",
    github: "https://github.com/johndoe/fitness-app",
  },
  {
    id: "3",
    name: "Real Estate Platform",
    slug: "real-estate-platform",
    description: "Property listing and management system with virtual tours and analytics.",
    longDescription:
      "This real estate platform revolutionizes how properties are listed, viewed, and managed. It features high-quality property listings with detailed information, photo galleries, and virtual 3D tours. Agents can manage their listings, track inquiries, and analyze performance metrics through a comprehensive dashboard. Buyers can search for properties using advanced filters, save favorites, schedule viewings, and receive notifications about new listings that match their criteria. The platform also includes mortgage calculators and neighborhood information to help buyers make informed decisions.",
      image: "/images/proj3.jfif",
    technologies: ["React", "Next.js", "PostgreSQL", "GraphQL", "AWS", "Mapbox"],
    startDate: "2021-04-15",
    endDate: "2021-08-30",
    url: "https://realestate-example.com",
    github: "https://github.com/johndoe/real-estate-platform",
  },
  {
    id: "4",
    name: "Project Management Tool",
    slug: "project-management-tool",
    description: "Collaborative project management application with task tracking and team communication.",
    longDescription:
      "This project management tool helps teams collaborate effectively and deliver projects on time. It features task management with customizable workflows, time tracking, file sharing, and team communication tools. The interactive Gantt charts and Kanban boards provide visual representations of project timelines and task status. Teams can set milestones, track progress, and generate reports for stakeholders. The tool integrates with popular services like GitHub, Slack, and Google Drive to streamline workflows and centralize information.",
      image: "/images/proj4.jfif",
    technologies: ["Vue.js", "Vuex", "Node.js", "Socket.io", "PostgreSQL", "Docker"],
    startDate: "2020-11-01",
    endDate: "2021-03-20",
    url: "https://projecttool-example.com",
    github: "https://github.com/johndoe/project-management-tool",
  },
  {
    id: "5",
    name: "AI Content Generator",
    slug: "ai-content-generator",
    description: "Content creation platform powered by artificial intelligence for marketers and writers.",
    longDescription:
      "This AI-powered content generation platform helps marketers and writers create high-quality content efficiently. Using advanced natural language processing models, it can generate blog posts, social media updates, product descriptions, and more based on simple prompts. The platform includes tools for editing and refining the generated content, as well as SEO optimization features to improve search engine rankings. Users can save templates, create content calendars, and schedule publications directly from the platform. Analytics tools provide insights into content performance and audience engagement.",
      image: "/images/prog5.png",
    technologies: ["React", "Python", "TensorFlow", "OpenAI API", "FastAPI", "Redis"],
    startDate: "2020-06-15",
    endDate: "2020-10-25",
    url: "https://ai-content-example.com",
    github: "https://github.com/johndoe/ai-content-generator",
  },
]

export const jobs: Job[] = [
  {
    id: "1",
    name: "Senior Frontend Developer",
    slug: "senior-frontend-developer-techcorp",
    company: "TechCorp Inc.",
    logo: "/images/logo5.png",
    description: "Led the frontend development team in building modern web applications.",
    longDescription:
      "As the Senior Frontend Developer at TechCorp Inc., I led a team of 5 developers in building and maintaining the company's flagship SaaS product. I architected the frontend infrastructure using React and Next.js, implemented CI/CD pipelines, and established coding standards and best practices. I worked closely with the design team to ensure pixel-perfect implementation of UI designs and collaborated with the backend team to define and consume APIs. During my tenure, we improved application performance by 40% and reduced build times by 60% through optimization techniques and code splitting.",
    startDate: "2021-06-01",
    endDate: null,
    location: "San Francisco, CA",
  },
  {
    id: "2",
    name: "Full Stack Developer",
    slug: "full-stack-developer-innovate",
    company: "Innovate Solutions",
    logo: "/images/logo7.png",
    description: "Developed end-to-end solutions for clients in various industries.",
    longDescription:
      "At Innovate Solutions, I worked as a Full Stack Developer on client projects spanning e-commerce, healthcare, and fintech sectors. I built responsive web applications using React on the frontend and Node.js/Express on the backend, with MongoDB and PostgreSQL for data storage. I implemented authentication systems, payment processing integrations, and real-time features using WebSockets. I also participated in client meetings to gather requirements and provide technical consultation. One of my key achievements was developing a telemedicine platform that helped a healthcare provider increase patient engagement by 35%.",
    startDate: "2019-08-15",
    endDate: "2021-05-30",
    location: "Austin, TX",
  },
  {
    id: "3",
    name: "Frontend Developer",
    slug: "frontend-developer-webflow",
    company: "Webflow Digital",
    logo: "/images/loog2.png",
    description: "Created responsive and accessible web interfaces for client websites.",
    longDescription:
      "As a Frontend Developer at Webflow Digital, I specialized in building responsive and accessible web interfaces for clients in the retail and hospitality industries. I used HTML, CSS, JavaScript, and React to implement designs from Figma and Adobe XD. I optimized websites for performance, achieving Google PageSpeed scores above 90 for all projects. I also implemented A/B testing frameworks and analytics tracking to help clients make data-driven decisions. I collaborated with UX designers to improve user flows and implemented accessibility improvements that brought all client websites to WCAG 2.1 AA compliance.",
    startDate: "2018-03-10",
    endDate: "2019-08-01",
    location: "Chicago, IL",
  },
  {
    id: "4",
    name: "Junior Web Developer",
    slug: "junior-web-developer-digitaledge",
    company: "Digital Edge Agency",
    logo: "/images/logo6.jfif",
    description: "Developed websites and web applications for small to medium businesses.",
    longDescription:
      "I started my professional career as a Junior Web Developer at Digital Edge Agency, where I built websites and web applications for small to medium-sized businesses. I worked with WordPress, PHP, and jQuery to create custom themes and plugins. I also gained experience with responsive design principles and cross-browser compatibility. During my time at Digital Edge, I developed over 20 client websites and contributed to the agency's internal project management tool. I participated in code reviews and gradually took on more responsibilities, eventually leading small projects for key clients.",
    startDate: "2016-09-01",
    endDate: "2018-02-28",
    location: "Boston, MA",
  },
  {
    id: "5",
    name: "Web Design Intern",
    slug: "web-design-intern-creative",
    company: "Creative Studios",
    logo: "/images/logo3.jfif",
    description: "Assisted in designing and developing websites for various clients.",
    longDescription:
      "As a Web Design Intern at Creative Studios, I assisted senior designers and developers in creating websites for clients in the arts and entertainment industry. I learned the fundamentals of HTML, CSS, and JavaScript while contributing to real-world projects. I created wireframes and mockups using Photoshop and Illustrator, and implemented them under supervision. This internship provided me with valuable experience in the web development workflow, client communication, and working in a creative team environment. I also had the opportunity to design and develop a microsite for a local music festival, which was well-received by the client and attendees.",
    startDate: "2016-01-15",
    endDate: "2016-08-30",
    location: "New York, NY",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}

