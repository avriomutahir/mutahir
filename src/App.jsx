import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { portfolioHistory } from './portfolioData'

const skillsData = [
  {
    category: 'Mobile Development',
    emoji: '📱',
    skills: ['React Native', 'Expo', 'iOS (Swift)', 'Android (Kotlin)', 'Redux Toolkit', 'Firebase', 'Deep Linking', 'Push Notifications'],
  },
  {
    category: 'Frontend Web',
    emoji: '🌐',
    skills: ['React JS', 'TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3 / SCSS', 'Vite', 'REST API Integration', 'Responsive Design'],
  },
  {
    category: 'Backend & APIs',
    emoji: '⚙️',
    skills: ['PHP Laravel', 'C# / .NET Core', 'RESTful APIs', 'MySQL', 'PostgreSQL', 'Docker', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    category: 'AI & Machine Learning',
    emoji: '🤖',
    skills: ['OCR (Tesseract)', 'Sentiment Analysis', 'Natural Language Processing', 'Python', 'Hugging Face Transformers', 'FastAPI', 'Data Pipelines', 'Model Integration'],
  },
]

const achievementsData = [
  {
    title: '10+ Years Industry Experience',
    description: 'Over a decade delivering production software across mobile, web, backend, and AI domains for startups, agencies, and enterprise clients.',
    icon: '🏆',
  },
  {
    title: '40+ Projects Shipped',
    description: 'From solo-built MVPs to multi-team enterprise platforms — consistently delivering on scope, quality, and timeline.',
    icon: '🚀',
  },
  {
    title: 'Cross-Platform Mobile Expert',
    description: 'Published iOS and Android applications built with React Native, achieving 4.5+ star ratings and thousands of active users.',
    icon: '📱',
  },
  {
    title: 'Enterprise AI Systems',
    description: 'Designed and deployed production AI systems including OCR document processing and multi-class sentiment analysis serving enterprise clients.',
    icon: '🤖',
  },
  {
    title: 'Full-Stack Architecture',
    description: 'End-to-end ownership from database schema and API design through frontend UI — across four major technology stacks.',
    icon: '⚡',
  },
  {
    title: 'Multi-Tenant SaaS Builder',
    description: 'Delivered scalable multi-tenant platforms with role-based access control, real-time dashboards, and ERP integrations.',
    icon: '🏗️',
  },
]

const socialLinks = [
  { label: 'Email', href: 'mailto:hussaincor01@gmail.com', display: 'hussaincor01@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/', display: 'github.com/mutahirhussain' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', display: 'linkedin.com/in/mutahirhussain' },
]

const workHistory = [
  {
    period: '2020 - Present',
    role: 'Senior Software Developer',
    company: 'Full-Stack & AI Consultancy',
    summary: 'Leading delivery of mobile apps (React Native), web platforms (React JS), backend systems (C# / PHP Laravel), and AI solutions including OCR pipelines and sentiment analysis engines for enterprise clients.',
  },
  {
    period: '2016 - 2020',
    role: 'Software Developer',
    company: 'Product Engineering Studio',
    summary: 'Developed scalable web and mobile applications across fintech, e-commerce, and SaaS verticals. Introduced Laravel-based API standards and React component libraries adopted across multiple product teams.',
  },
  {
    period: '2014 - 2016',
    role: 'Junior Software Developer',
    company: 'Digital Agency',
    summary: 'Built client websites, internal dashboards, and custom CMS solutions using PHP and JavaScript. Gained hands-on experience across the full SDLC from requirements through deployment.',
  },
]

const resumeStats = [
  { label: 'Years of experience', value: '10+' },
  { label: 'Projects delivered', value: '40+' },
  { label: 'Technologies mastered', value: '15+' },
]

function Loader() {
  return (
    <div className="loader-screen" aria-live="polite" aria-label="Loading website">
      <div className="loader-mark">
        <span className="loader-dot" />
        <span className="loader-dot loader-dot-delay-1" />
        <span className="loader-dot loader-dot-delay-2" />
      </div>
      <p>Loading portfolio experience</p>
    </div>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function HomePage({ year }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header className="hero">
        <nav className="topbar reveal">
          <div className="brand-block">
            <span className="brand-mark">MH</span>
            <div>
              <p className="brand-name">Mutahir Hussain</p>
              <p className="brand-meta">Senior Full-Stack &amp; AI Developer</p>
            </div>
          </div>
          <div className="nav-links">
            <button type="button" className="link-button" onClick={() => scrollToSection('intro')}>
              Intro
            </button>
            <button type="button" className="link-button" onClick={() => scrollToSection('skills')}>
              Skills
            </button>
            <button type="button" className="link-button" onClick={() => scrollToSection('work')}>
              Experience
            </button>
            <button type="button" className="link-button" onClick={() => scrollToSection('portfolio')}>
              Portfolio
            </button>
            <button type="button" className="link-button" onClick={() => scrollToSection('achievements')}>
              Achievements
            </button>
            <button type="button" className="link-button" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </div>
        </nav>

        <section className="hero-content reveal" id="intro">
          <div className="hero-copy">
            <p className="eyebrow">Senior Full-Stack &amp; AI Developer</p>
            <h1>
              10+ years building mobile, web, and AI-powered software that ships and scales.
            </h1>
            <p className="hero-text">
              I'm Mutahir Hussain — a senior software developer specialising in React Native, React JS, C#, and PHP Laravel.
              I also design and build AI solutions including OCR pipelines and sentiment analysis systems. Whether it's a
              consumer mobile app, an enterprise web platform, or an intelligent data-processing engine, I deliver clean,
              production-ready code that teams can build on.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-button" onClick={() => scrollToSection('resume')}>
                View Resume
              </button>
              <button type="button" className="secondary-button" onClick={() => scrollToSection('portfolio')}>
                Explore Portfolio
              </button>
            </div>
          </div>

          <aside className="hero-card reveal-delay-1">
            <div className="profile-frame">
              <img src={`${import.meta.env.BASE_URL}images/profile-placeholder.svg`} alt="Mutahir Hussain — Senior Full-Stack &amp; AI Developer" className="profile-image" />
            </div>
            <p className="card-label">What I build</p>
            <h3>Full-stack systems, cross-platform mobile apps, and AI-driven solutions.</h3>
            <ul>
              <li>React Native &amp; React JS</li>
              <li>C# &amp; PHP Laravel backends</li>
              <li>OCR &amp; Sentiment Analysis AI</li>
            </ul>
          </aside>
        </section>
      </header>

      <main>
        <section className="section-grid" id="skills">
          <SectionTitle
            eyebrow="Technical expertise"
            title="Skills & Technologies"
            text="A decade of hands-on experience across four major technology domains — from mobile and web to backend systems and applied AI."
          />
          <div className="skills-grid">
            {skillsData.map((cat, index) => (
              <article className="skill-category-card reveal" key={cat.category} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="skill-category-header">
                  <span className="skill-emoji" role="img" aria-label={cat.category}>{cat.emoji}</span>
                  <h3>{cat.category}</h3>
                </div>
                <div className="chip-wrap skill-chips">
                  {cat.skills.map((skill) => (
                    <span className="chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="work">
          <SectionTitle
            eyebrow="Career path"
            title="Work History"
            text="Over a decade of hands-on experience spanning mobile, web, backend, and AI — from agency projects to enterprise product platforms."
          />
          <div className="timeline">
            {workHistory.map((item, index) => (
              <article className="timeline-card reveal" key={item.period} style={{ animationDelay: `${index * 120}ms` }}>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid resume-section" id="resume">
          <SectionTitle
            eyebrow="Professional snapshot"
            title="Resume"
            text="A decade-long track record across mobile, web, backend, and AI — delivering quality software for startups, agencies, and enterprise clients alike."
          />
          <div className="resume-panel reveal">
            <div className="stat-grid">
              {resumeStats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="resume-copy">
              <h3>Mutahir Hussain — Senior Full-Stack &amp; AI Developer</h3>
              <p>
                Experienced in the full software development lifecycle: from architecture and API design to mobile UI,
                React web apps, C# services, and AI integrations. I work well independently and as part of cross-functional
                teams across time zones.
              </p>
              <button type="button" className="primary-button" onClick={() => scrollToSection('contact')}>
                Request Full Resume
              </button>
            </div>
          </div>
        </section>

        <section className="section-grid" id="portfolio">
          <SectionTitle
            eyebrow="Selected work"
            title="Portfolio"
            text="A selection of real projects across AI, mobile, and full-stack web — each with structured role, impact, and tech stack details."
          />
          <div className="portfolio-grid">
            {portfolioHistory.map((item, index) => (
              <Link
                className="portfolio-card reveal portfolio-link-card"
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <div className="portfolio-image-wrap">
                  <img src={item.image} alt={item.imageAlt} className="portfolio-image" loading="lazy" />
                </div>
                <p>{item.type}</p>
                <h3>{item.title}</h3>
                <span>{item.summary}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-grid" id="achievements">
          <SectionTitle
            eyebrow="Track record"
            title="Achievements"
            text="Key milestones from 10+ years of building software across mobile, web, backend, and AI."
          />
          <div className="achievement-grid">
            {achievementsData.map((item, index) => (
              <article className="achievement-card reveal" key={item.title} style={{ animationDelay: `${index * 100}ms` }}>
                <span className="achievement-icon" role="img" aria-label={item.title}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid about-layout" id="about">
          <SectionTitle
            eyebrow="Background"
            title="About Me"
            text="Senior software developer with a passion for turning complex problems into elegant, maintainable, and impactful software."
          />
          <div className="about-card reveal">
            <p>
              I'm Mutahir Hussain, a senior software developer with more than 10 years of professional experience building
              software across mobile, web, and AI domains. I specialise in React Native for cross-platform mobile apps,
              React JS for modern web interfaces, and PHP Laravel and C# for robust backend systems and APIs.
            </p>
            <p>
              Beyond traditional development, I work on AI-driven projects including Optical Character Recognition (OCR)
              for intelligent document processing and Sentiment Analysis for understanding customer and user behaviour at
              scale. I care deeply about code quality, system design, and delivering software that solves real business
              problems — on time and built to last.
            </p>
          </div>
        </section>

        <section className="contact-banner reveal" id="contact">
          <p className="eyebrow">Let's work together</p>
          <h2>Have a project in mind? I'd love to hear about it.</h2>
          <p>
            Whether you need a cross-platform mobile app, a scalable web platform, a robust backend API, or an
            AI-powered feature — reach out and let's discuss how I can help bring it to life.
          </p>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-link"
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                <span className="social-link-label">{link.label}</span>
                <span className="social-link-display">{link.display}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer reveal-delay-2">
        <p>Mutahir Hussain — Senior Full-Stack &amp; AI Developer</p>
        <p>{year} &bull; React Native &middot; React JS &middot; C# &middot; PHP Laravel &middot; AI / ML</p>
      </footer>
    </>
  )
}

function PortfolioDetailsPage() {
  const { slug } = useParams()
  const project = portfolioHistory.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="portfolio-detail-shell">
      <header className="section-grid reveal">
        <p className="eyebrow">Portfolio case study</p>
        <h1>{project.title}</h1>
        <div className="detail-hero-image-wrap">
          <img src={project.image} alt={project.imageAlt} className="detail-hero-image" />
        </div>
        <p className="hero-text">{project.summary}</p>
        <div className="detail-actions">
          <Link className="secondary-button" to="/">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="portfolio-detail-main">
        <section className="section-grid reveal">
          <SectionTitle
            eyebrow="ATS quick view"
            title="Structured role summary"
            text="This format is intentionally ATS-friendly with direct labels, measurable outcomes, and searchable keywords."
          />
          <div className="ats-grid">
            <article className="ats-card">
              <h3>Client</h3>
              <p>{project.ats.client}</p>
            </article>
            <article className="ats-card">
              <h3>Role</h3>
              <p>{project.ats.role}</p>
            </article>
            <article className="ats-card">
              <h3>Timeline</h3>
              <p>{project.ats.timeline}</p>
            </article>
            <article className="ats-card">
              <h3>Impact</h3>
              <p>{project.ats.impact}</p>
            </article>
          </div>
        </section>

        <section className="section-grid reveal-delay-1">
          <SectionTitle
            eyebrow="Responsibilities"
            title="What was delivered"
            text="Bullet structure helps recruiters and ATS tools parse responsibilities clearly."
          />
          <ul className="ats-list">
            {project.ats.responsibilities.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="section-grid reveal-delay-2">
          <SectionTitle
            eyebrow="Keywords and stack"
            title="Technical profile"
            text="Use these tags as searchable skills aligned to role descriptions."
          />
          <div className="chip-wrap">
            {project.ats.keywords.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
          <h3 className="mini-heading">Technology stack</h3>
          <div className="chip-wrap">
            {project.ats.stack.map((item) => (
              <span className="chip chip-tech" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  const year = useMemo(() => new Date().getFullYear(), [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="page-shell">
      <div className="background-orb background-orb-left" />
      <div className="background-orb background-orb-right" />

      <Routes>
        <Route path="/" element={<HomePage year={year} />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
