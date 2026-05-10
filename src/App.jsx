import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioHistory } from './portfolioData'

gsap.registerPlugin(ScrollTrigger)

// ── Static data ───────────────────────────────────────────────────────────────

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

const workHistory = [
  {
    period: '2020 – Present',
    role: 'Senior Software Developer',
    company: 'Full-Stack & AI Consultancy',
    summary: 'Leading delivery of mobile apps (React Native), web platforms (React JS), backend systems (C# / PHP Laravel), and AI solutions including OCR pipelines and sentiment analysis engines for enterprise clients.',
  },
  {
    period: '2016 – 2020',
    role: 'Software Developer',
    company: 'Product Engineering Studio',
    summary: 'Developed scalable web and mobile applications across fintech, e-commerce, and SaaS verticals. Introduced Laravel-based API standards and React component libraries adopted across multiple product teams.',
  },
  {
    period: '2014 – 2016',
    role: 'Junior Software Developer',
    company: 'Digital Agency',
    summary: 'Built client websites, internal dashboards, and custom CMS solutions using PHP and JavaScript. Gained hands-on experience across the full SDLC from requirements through deployment.',
  },
]

const testimonialsData = [
  {
    name: 'Sarah Chen',
    role: 'CTO, FinTech Startup',
    quote: 'Mutahir delivered our React Native app on time and to an exceptional standard. The codebase is clean, well-structured, and our team has been building on it seamlessly ever since.',
    initials: 'SC',
  },
  {
    name: 'David Müller',
    role: 'Head of Product, SaaS Platform',
    quote: 'Working with Mutahir on our Laravel + React platform was a game-changer. He took full ownership of the architecture and delivered a multi-tenant system that scaled far beyond our expectations.',
    initials: 'DM',
  },
  {
    name: 'Aisha Patel',
    role: 'Lead Data Scientist, Enterprise Client',
    quote: 'The OCR and sentiment analysis pipeline Mutahir built processes over 10,000 documents daily without a hitch. His ability to bridge AI research and production engineering is rare and invaluable.',
    initials: 'AP',
  },
]

const faqData = [
  {
    question: 'What types of projects do you take on?',
    answer: 'I specialise in cross-platform mobile apps (React Native), full-stack web platforms (React JS + Laravel or C#), and AI integrations including OCR and sentiment analysis. I work across the full lifecycle from architecture through deployment.',
  },
  {
    question: 'Do you work with startups or enterprise clients?',
    answer: "Both. I've built MVPs for early-stage startups and delivered large-scale platforms for enterprise clients. The approach adapts to team size, timeline, and technical constraints of each engagement.",
  },
  {
    question: 'What does a typical engagement look like?',
    answer: "It starts with a brief discovery call to understand your goals and existing stack. From there I produce an architecture outline, agree a timeline, and begin development in structured sprints with regular check-ins and demos.",
  },
  {
    question: 'Can you work within an existing team?',
    answer: "Absolutely. I'm experienced collaborating with cross-functional teams across time zones. I can plug in as a senior contributor, tech lead, or individual contributor depending on what the project needs.",
  },
  {
    question: 'How do I get started?',
    answer: "The easiest way is to email me at hussaincor01@gmail.com with a short description of your project — what you're building, your timeline, and any tech constraints. I'll respond within 1–2 business days.",
  },
]

const socialLinks = [
  { label: 'Email', href: 'mailto:hussaincor01@gmail.com', display: 'hussaincor01@gmail.com', copyText: 'hussaincor01@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/', display: 'github.com/mutahirhussain' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/', display: 'linkedin.com/in/mutahirhussain' },
]

const heroStats = [
  { value: '10+', label: 'Years exp.' },
  { value: '40+', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
]

// ── GSAP scroll-reveal hook ───────────────────────────────────────────────────

function useScrollReveal() {
  useLayoutEffect(() => {
    // Give React time to paint initial invisible state before attaching triggers
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.reveal', {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.13,
            duration: 0.92,
            ease: 'power3.out',
          })
        },
        start: 'top 90%',
        once: true,
      })
    })

    return () => ctx.revert()
  }, [])
}

// ── Shared components ─────────────────────────────────────────────────────────

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

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' faq-open' : ''}`}>
      <button
        className="faq-trigger"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">+</span>
      </button>
      <div className="faq-body" aria-hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <button
      type="button"
      className={`copy-btn${copied ? ' copy-btn-success' : ''}`}
      onClick={handleCopy}
      title="Copy to clipboard"
    >
      <span className="copy-icon" aria-hidden="true">{copied ? '✓' : '⧉'}</span>
      <span>{copied ? 'Copied!' : 'Copy'}</span>
    </button>
  )
}

// ── Portfolio carousel ────────────────────────────────────────────────────────

const CAROUSEL_GAP = 16

function PortfolioCarousel() {
  const outerRef = useRef(null)
  const trackRef = useRef(null)
  const currentRef = useRef(0)  // current slide index — no state needed (no UI indicators)
  const accDelta = useRef(0)    // accumulated wheel delta between threshold triggers
  const isAnimating = useRef(false)
  const total = portfolioHistory.length

  const goTo = useCallback((index) => {
    if (isAnimating.current) return
    // Clamp — no looping, stops at first / last
    const next = Math.max(0, Math.min(index, total - 1))
    if (next === currentRef.current) return

    const firstSlide = trackRef.current?.children[0]
    if (!firstSlide) return
    const slideW = firstSlide.offsetWidth + CAROUSEL_GAP

    isAnimating.current = true
    gsap.to(trackRef.current, {
      x: -(next * slideW),
      duration: 0.72,
      ease: 'power3.inOut',
      onComplete: () => {
        isAnimating.current = false
        accDelta.current = 0 // reset accumulator after each completed move
      },
    })
    currentRef.current = next
  }, [total])

  // Window-level wheel listener so it fires regardless of cursor position.
  // Only intercepts scroll when the carousel is in the viewport AND the carousel
  // still has slides to navigate. At the boundaries we do NOT call
  // preventDefault() — the event propagates and the page scrolls normally.
  useEffect(() => {
    const THRESHOLD = 60

    const onWheel = (e) => {
      const outer = outerRef.current
      if (!outer) return

      // Check carousel is at least 40 % visible in the viewport
      const { top, bottom, height } = outer.getBoundingClientRect()
      const visible = Math.min(bottom, window.innerHeight) - Math.max(top, 0)
      if (visible / height < 0.4) return

      // Vertical scroll (up/down) drives the carousel
      const delta = e.deltaY

      const atEnd   = currentRef.current >= total - 1
      const atStart = currentRef.current <= 0

      // At last slide going forward → release: page scrolls down
      if (delta > 0 && atEnd) { accDelta.current = 0; return }
      // At first slide going backward → release: page scrolls up
      if (delta < 0 && atStart) { accDelta.current = 0; return }

      // Otherwise own this scroll event
      e.preventDefault()
      accDelta.current += delta

      if (accDelta.current >= THRESHOLD) {
        accDelta.current = 0
        goTo(currentRef.current + 1)
      } else if (accDelta.current <= -THRESHOLD) {
        accDelta.current = 0
        goTo(currentRef.current - 1)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [goTo, total])

  // Reposition track on window resize so slides don't drift
  useEffect(() => {
    const onResize = () => {
      const firstSlide = trackRef.current?.children[0]
      if (!firstSlide) return
      gsap.set(trackRef.current, {
        x: -(currentRef.current * (firstSlide.offsetWidth + CAROUSEL_GAP)),
      })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="carousel reveal">
      <div className="carousel-outer" ref={outerRef}>
        <div className="carousel-track" ref={trackRef}>
          {portfolioHistory.map((item) => (
            <div className="carousel-slide" key={item.slug}>
              <Link className="carousel-card" to={`/portfolio/${item.slug}`}>
                <div className="carousel-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="carousel-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-card-info">
                  <p className="portfolio-type">{item.type}</p>
                  <h3>{item.title}</h3>
                  <p className="portfolio-summary">{item.summary}</p>
                  <span className="carousel-cta">View Case Study →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <p className="carousel-hint">
        <span className="carousel-hint-icon">↑ ↓</span>
        Scroll down to explore projects
      </p>
    </div>
  )
}

// ── Home page ─────────────────────────────────────────────────────────────────

function HomePage({ year }) {
  useScrollReveal()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* ─ Fixed nav ─ */}
      <nav className="topbar">
        <div className="topbar-inner">
          <div className="brand-block">
            <span className="brand-mark">MH</span>
            <div>
              <p className="brand-name">Mutahir Hussain</p>
              <p className="brand-meta">Senior Full-Stack &amp; AI Developer</p>
            </div>
          </div>
          <div className="nav-links">
            <button type="button" className="link-button" onClick={() => scrollTo('skills')}>Skills</button>
            <button type="button" className="link-button" onClick={() => scrollTo('work')}>Experience</button>
            <button type="button" className="link-button" onClick={() => scrollTo('portfolio')}>Portfolio</button>
            <button type="button" className="link-button" onClick={() => scrollTo('testimonials')}>Reviews</button>
            <button type="button" className="link-button" onClick={() => scrollTo('faq')}>FAQ</button>
            <button type="button" className="link-button pill" onClick={() => scrollTo('contact')}>Contact</button>
          </div>
        </div>
      </nav>

      {/* ─ Hero ─ */}
      <section className="hero-section" id="intro">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Senior Full-Stack &amp; AI Developer</span>
              <h1 className="hero-h1">10+ years building mobile, web &amp; AI software that ships.</h1>
              <p className="hero-text">
                I'm Mutahir Hussain — a senior developer specialising in React Native, React JS, C#, and
                PHP Laravel. I design and build AI solutions including OCR pipelines and sentiment analysis
                systems that scale in production.
              </p>
              <div className="hero-actions">
                <button type="button" className="btn-primary" onClick={() => scrollTo('portfolio')}>
                  View My Work
                </button>
                <button type="button" className="btn-secondary" onClick={() => scrollTo('contact')}>
                  Get In Touch
                </button>
              </div>
            </div>

            <aside className="hero-card reveal">
              <div className="profile-frame">
                <img
                  src="/images/profile-placeholder.svg"
                  alt="Mutahir Hussain — Senior Full-Stack & AI Developer"
                  className="profile-image"
                />
              </div>
              <div className="hero-card-stats">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="hero-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─ Skills ─ */}
      <section className="section section-alt" id="skills">
        <div className="container">
          <SectionHeading
            eyebrow="Technical expertise"
            title="Skills & Technologies"
            text="A decade of hands-on experience across four major technology domains — from mobile and web to backend systems and applied AI."
          />
          <div className="skills-grid">
            {skillsData.map((cat) => (
              <article className="skill-card reveal" key={cat.category}>
                <div className="skill-card-header">
                  <span className="skill-emoji" role="img" aria-label={cat.category}>{cat.emoji}</span>
                  <h3>{cat.category}</h3>
                </div>
                <div className="chip-wrap">
                  {cat.skills.map((skill) => (
                    <span className="chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─ Work History ─ */}
      <section className="section" id="work">
        <div className="container">
          <SectionHeading
            eyebrow="Career path"
            title="Work History"
            text="Over a decade spanning mobile, web, backend, and AI — from agency projects to enterprise product platforms."
          />
          <div className="timeline">
            {workHistory.map((item) => (
              <article className="timeline-card reveal" key={item.period}>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─ Portfolio ─ */}
      <section className="section section-alt" id="portfolio">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Portfolio"
            text="Real projects across AI, mobile, and full-stack web — each with structured role, impact, and tech stack details."
          />
          <PortfolioCarousel />
        </div>
      </section>

      {/* ─ Testimonials ─ */}
      <section className="section" id="testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="Client feedback"
            title="Testimonials"
            text="What clients and collaborators say about working with me."
          />
          <div className="testimonials-grid">
            {testimonialsData.map((t) => (
              <article className="testimonial-card reveal" key={t.name}>
                <blockquote>"{t.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─ FAQ ─ */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <SectionHeading
            eyebrow="Common questions"
            title="FAQ"
            text="Answers to the questions I hear most often about working together."
          />
          <div className="faq-list reveal">
            {faqData.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ─ Contact ─ */}
      <section className="contact-section" id="contact">
        <div className="container">
          <span className="eyebrow reveal">Let's work together</span>
          <h2 className="contact-h2 reveal">Have a project in mind?</h2>
          <p className="contact-lead reveal">
            Whether you need a cross-platform mobile app, a scalable web platform, a robust backend API, or an
            AI-powered feature — reach out and let's discuss how I can help bring it to life.
          </p>
          <div className="social-links reveal">
            {socialLinks.map((link) => (
              <div key={link.label} className="social-link-row">
                <a
                  href={link.href}
                  className="social-link"
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                >
                  <div className="social-link-info">
                    <span className="social-link-label">{link.label}</span>
                    <span className="social-link-display">{link.display}</span>
                  </div>
                  <span className="social-link-arrow" aria-hidden="true">→</span>
                </a>
                {link.copyText && <CopyButton text={link.copyText} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>Mutahir Hussain — Senior Full-Stack &amp; AI Developer</p>
          <p>{year} &bull; React Native &middot; React JS &middot; C# &middot; PHP Laravel &middot; AI / ML</p>
        </div>
      </footer>
    </>
  )
}

// ── Portfolio detail page ─────────────────────────────────────────────────────

function PortfolioDetailsPage() {
  useScrollReveal()

  const { slug } = useParams()
  const project = portfolioHistory.find((item) => item.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <div className="portfolio-detail-shell">
      <nav className="topbar">
        <div className="topbar-inner">
          <div className="brand-block">
            <span className="brand-mark">MH</span>
            <div>
              <p className="brand-name">Mutahir Hussain</p>
              <p className="brand-meta">Portfolio case study</p>
            </div>
          </div>
          <div className="nav-links">
            <Link className="link-button" to="/">← Back to Home</Link>
          </div>
        </div>
      </nav>

      <header className="portfolio-detail-header">
        <div className="container">
          <span className="eyebrow reveal">Portfolio case study</span>
          <h1 className="reveal">{project.title}</h1>
          <p className="hero-text reveal">{project.summary}</p>
          <div className="detail-actions reveal">
            <Link className="btn-secondary" to="/">Back to Home</Link>
          </div>
          <div className="detail-hero-image-wrap reveal">
            <img src={project.image} alt={project.imageAlt} className="detail-hero-image" />
          </div>
        </div>
      </header>

      <div className="portfolio-detail-content">
        <section className="detail-section">
          <div className="container">
            <SectionHeading
              eyebrow="ATS quick view"
              title="Structured role summary"
              text="ATS-friendly format with direct labels, measurable outcomes, and searchable keywords."
            />
            <div className="ats-grid">
              {[
                { label: 'Client', value: project.ats.client },
                { label: 'Role', value: project.ats.role },
                { label: 'Timeline', value: project.ats.timeline },
                { label: 'Impact', value: project.ats.impact },
              ].map((item) => (
                <article className="ats-card reveal" key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-section section-alt">
          <div className="container">
            <SectionHeading
              eyebrow="Responsibilities"
              title="What was delivered"
              text="Bullet structure helps recruiters and ATS tools parse responsibilities clearly."
            />
            <ul className="ats-list">
              {project.ats.responsibilities.map((line) => (
                <li className="reveal" key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="detail-section">
          <div className="container">
            <SectionHeading
              eyebrow="Keywords and stack"
              title="Technical profile"
              text="Use these tags as searchable skills aligned to role descriptions."
            />
            <div className="chip-wrap reveal">
              {project.ats.keywords.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
            <h3 className="mini-heading">Technology stack</h3>
            <div className="chip-wrap reveal">
              {project.ats.stack.map((item) => (
                <span className="chip chip-tech" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// ── App root ──────────────────────────────────────────────────────────────────

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  if (isLoading) return <Loader />

  return (
    <div className="page-shell">
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />
      <div className="bg-orb bg-orb-3" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<HomePage year={year} />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
