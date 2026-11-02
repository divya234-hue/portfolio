import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  ScanFace,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "./data/portfolio";
import { certifications, projects, skillGroups } from "./data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="#home" aria-label="Divya Bharti, home" onClick={closeMenu}>
          <span className="wordmark-mark">d<span>.</span></span>
          <span>Divya Bharti</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a href="mailto:db450293@gmail.com" onClick={closeMenu}>
              Get in touch <Mail size={16} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  });

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div className="availability" {...reveal(0.05)}>
          <span className="availability-dot" />
          <span>AI/ML Engineer <span className="availability-divider">·</span> Software Developer</span>
        </motion.div>
        <motion.p className="hero-intro" {...reveal(0.12)}>
          Hi, I&apos;m <span>Divya Bharti</span>
        </motion.p>
        <motion.h1 {...reveal(0.2)}>
          Building Intelligent Systems with <span className="text-gradient">AI &amp; Engineering</span>
        </motion.h1>
        <motion.p className="hero-description" {...reveal(0.29)}>
          I build end-to-end AI applications combining machine learning, LLMs, backend engineering, and modern frontend technologies.
        </motion.p>
        <motion.div className="hero-actions" {...reveal(0.37)}>
          <a className="button button-primary" href="#projects">
            View projects <ArrowDownRight size={17} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="/Divya-Bharti-Resume.pdf" download>
            Download resume <FileDown size={16} aria-hidden="true" />
          </a>
        </motion.div>
        <motion.div className="hero-socials" {...reveal(0.44)}>
          <a href="https://github.com/divya234-hue" target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> github.com/divya234-hue <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <span className="social-divider" />
          <a href="mailto:db450293@gmail.com">
            <Mail size={16} aria-hidden="true" /> db450293@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-art"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        aria-label="Illustration of connected AI systems"
        role="img"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="orbit-core"><BrainCircuit size={36} strokeWidth={1.4} /></div>
        <div className="orbit-node node-ml"><span><Cpu size={15} /></span> Machine learning</div>
        <div className="orbit-node node-rag"><span><Layers3 size={15} /></span> RAG systems</div>
        <div className="orbit-node node-build"><span><Code2 size={15} /></span> Software</div>
        <div className="art-caption"><Sparkles size={13} /> Ideas into intelligent products</div>
        <div className="art-index">AI <span>×</span> ENGINEERING</div>
      </motion.div>

      <a className="scroll-cue" href="#about">
        <span>Scroll to explore</span><ArrowDown size={14} aria-hidden="true" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section-wrap content-section" id="about">
      <SectionHeading
        eyebrow="A little about me"
        title="Curious by nature. An engineer in the making."
        description="I enjoy turning ideas into thoughtful, useful software."
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m an AI and Data Science student building practical experience through machine learning, deep learning, NLP, computer vision, and LLM-powered applications. I enjoy working across the full stack—from training and evaluating models to connecting them with APIs and intuitive interfaces.
          </p>
          <p>
            I&apos;m especially interested in AI engineering, retrieval-augmented generation, and AI agents: the systems and tools that make intelligent applications useful, dependable, and easier to work with.
          </p>
          <div className="interest-list" aria-label="Areas of interest">
            {["AI engineering", "Machine learning", "Deep learning", "NLP", "Computer vision", "RAG systems", "AI agents"].map((interest) => (
              <span key={interest}><Check size={13} aria-hidden="true" />{interest}</span>
            ))}
          </div>
        </div>
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={21} aria-hidden="true" /></div>
          <span className="card-kicker">Education</span>
          <h3>B.Tech in Artificial Intelligence and Data Science</h3>
          <p className="education-school">Poornima University <span>·</span> Jaipur</p>
          <div className="education-meta">
            <span>Expected graduation <strong>2028</strong></span>
            <span>CGPA <strong>8.5 / 10</strong></span>
          </div>
          <div className="education-glow" aria-hidden="true" />
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-wrap content-section" id="skills">
      <SectionHeading
        eyebrow="Tools of the trade"
        title="Technical skills"
        description="A growing toolkit for building across machine learning, AI, and software."
      />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <span className="skill-index">0{index + 1}</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </div>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  if (project.artwork === "vision") {
    return (
      <div className="project-art project-art-vision" aria-hidden="true">
        <div className="vision-window">
          <div className="vision-frame"><ScanFace size={82} strokeWidth={0.9} /></div>
          <span className="vision-label">Facial expression</span>
        </div>
        <div className="vision-side">
          <span className="vision-dot" />
          <span>Computer vision</span>
          <div className="vision-lines"><i /><i /><i /></div>
        </div>
        <span className="art-caption">Illustrative project artwork</span>
      </div>
    );
  }

  if (project.artwork === "wellbeing") {
    return (
      <div className="project-art project-art-wellbeing" aria-hidden="true">
        <div className="model-flow">
          <div className="model-node"><span>01</span>Preprocess</div>
          <ArrowRight size={16} />
          <div className="model-node model-node-active"><span>02</span>Model</div>
          <ArrowRight size={16} />
          <div className="model-node"><span>03</span>Predict</div>
        </div>
        <div className="model-compare">
          <div><span>Linear Regression</span><i className="bar bar-linear" /></div>
          <div><span>Random Forest</span><i className="bar bar-forest" /></div>
        </div>
        <span className="art-caption">Illustrative project artwork</span>
      </div>
    );
  }

  if (project.artwork === "translation") {
    return (
      <div className="project-art project-art-translation" aria-hidden="true">
        <div className="translate-card">
          <div className="translate-heading"><span>Source</span><span>EN</span></div>
          <div className="translate-lines"><i /><i /><i /></div>
        </div>
        <ArrowRight className="translate-arrow" size={20} />
        <div className="translate-card translate-card-output">
          <div className="translate-heading"><span>Translation</span><span>FR</span></div>
          <div className="translate-lines"><i /><i /><i /></div>
        </div>
        <div className="language-chips"><span>DE</span><span>ES</span><span>HI</span></div>
        <span className="art-caption">Illustrative project artwork</span>
      </div>
    );
  }

  return (
    <div className="project-art project-art-rag" aria-hidden="true">
      <div className="rag-side"><span /><span /><span /><span /></div>
      <div className="rag-content">
        <div className="rag-search"><span /><i>Semantic search</i><ArrowUpRight size={13} /></div>
        <div className="rag-result"><span className="result-number">01</span><div><i /><i /><i /></div><span className="citation">Source citation</span></div>
        <div className="rag-result rag-result-faint"><span className="result-number">02</span><div><i /><i /></div></div>
      </div>
      <span className="art-caption">Illustrative project artwork</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="project-card"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ProjectArtwork project={project} />
      <div className="project-content">
        <div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-features">
          {project.features.map((feature) => <li key={feature}><Check size={14} aria-hidden="true" />{feature}</li>)}
        </ul>
        <div className="project-tech" aria-label="Technologies">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        {project.repository ? (
          <a className="project-link" href={project.repository} target="_blank" rel="noreferrer">
            View on GitHub <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : (
          <span className="project-link project-link-unavailable">Repository link not listed</span>
        )}
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section className="section-wrap content-section" id="projects">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects built with purpose."
        description="Hands-on explorations in AI, machine learning, and the engineering around them."
      />
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section-wrap content-section certifications-section" id="certifications">
      <SectionHeading
        eyebrow="Learning, always"
        title="Certifications"
        description="Courses and certificates included in my resume."
      />
      <div className="certification-list">
        {certifications.map((certification, index) => (
          <article className="certification-card" key={certification.name}>
            <span className="certification-index">0{index + 1}</span>
            <div className="certification-icon"><Sparkles size={17} aria-hidden="true" /></div>
            <div><h3>{certification.name}</h3><p>{certification.issuer}</p></div>
            <ArrowUpRight className="certification-arrow" size={17} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-copy">
        <span className="eyebrow">Have a good problem to solve?</span>
        <h2>Let&apos;s build something <span className="text-gradient">meaningful.</span></h2>
        <p>
          I&apos;m open to connecting about AI/ML internships, software engineering opportunities, and thoughtful technical collaborations.
        </p>
        <a className="button button-primary" href="mailto:db450293@gmail.com">
          Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="contact-links">
        <a href="mailto:db450293@gmail.com"><Mail size={17} aria-hidden="true" /><span><small>Email</small>db450293@gmail.com</span><ArrowUpRight size={15} aria-hidden="true" /></a>
        <a href="https://github.com/divya234-hue" target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /><span><small>GitHub</small>github.com/divya234-hue</span><ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">d<span>.</span></span>Divya Bharti</a>
      <span>Designed &amp; built with curiosity.</span>
      <a className="back-to-top" href="#home">Back to top <ChevronDown size={14} aria-hidden="true" /></a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
