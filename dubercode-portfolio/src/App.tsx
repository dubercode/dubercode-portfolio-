
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Play,
  BookOpen,
  ArrowUpRight,
  GitBranch,
  UserRound,
  Menu,
  X,
  Terminal,
  Cloud,
  Code2,
  Workflow,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

import { experience } from "./data/experience";
import { skillGroups } from "./data/skills";
import { translations } from "./i18n/translations";
import type { Language } from "./i18n/translations";

/* -------------------------------------------------------------------------- */
/* SOCIAL LINKS                                                               */
/* -------------------------------------------------------------------------- */

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@dubercoder",
    icon: Play,
  },
  {
    label: "Technical Blog",
    href: "https://dubercoder.blogspot.com/",
    icon: BookOpen,
  },
];

/* -------------------------------------------------------------------------- */
/* PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

type Project = {
  name: string;
  category: string;
  description: {
    en: string;
    es: string;
  };
  stack: string[];
  status: string;
  number: string;
  repository: string | null;
};

const projects: Project[] = [
  {
    name: "Cloud Governance AI Agent",
    category: "AI & Cloud",
    description: {
      en: "Intelligent cloud governance agent for infrastructure inventory, cost analysis, security findings and actionable recommendations.",
      es: "Agente inteligente de gobierno cloud para inventario de infraestructura, análisis de costes, hallazgos de seguridad y recomendaciones accionables.",
    },
    stack: ["Python", "Azure", "AI", "Terraform"],
    status: "IN DEVELOPMENT",
    number: "01",
    repository: "https://github.com/dubercode/agent-government-dev",
  },
  {
    name: "Kubernetes GitOps Platform",
    category: "Platform Engineering",
    description: {
      en: "Container orchestration platform with declarative deployments, GitOps workflows and infrastructure automation.",
      es: "Plataforma de orquestación de contenedores con despliegues declarativos, flujos GitOps y automatización de infraestructura.",
    },
    stack: ["Kubernetes", "Docker", "Flux CD", "Terraform"],
    status: "LAB",
    number: "02",
    repository: "https://github.com/dubercode/gitops-flux-fleet",
  },
  {
    name: "Madi Mobile Platform",
    category: "Application Development",
    description: {
      en: "Mobile application ecosystem with Flutter, REST API, PostgreSQL and cloud-native infrastructure.",
      es: "Ecosistema de aplicaciones móviles con Flutter, API REST, PostgreSQL e infraestructura cloud-native.",
    },
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Azure"],
    status: "IN DEVELOPMENT",
    number: "03",
    repository: "https://github.com/dubercode/api-madi-platform-dev",
  },
  {
    name: "DevSecOps Pipeline",
    category: "Security & Automation",
    description: {
      en: "Secure CI/CD pipeline integrating automated code analysis, dependency scanning and container security.",
      es: "Pipeline CI/CD seguro que integra análisis automatizado de código, análisis de dependencias y seguridad de contenedores.",
    },
    stack: ["GitHub Actions", "SAST", "Trivy", "Docker"],
    status: "LAB",
    number: "04",
    repository: null,
  },
];

const projectFilters = [
  { value: "All", en: "All", es: "Todos" },
  { value: "AI & Cloud", en: "AI & Cloud", es: "IA y Cloud" },
  {
    value: "Platform Engineering",
    en: "Platform Engineering",
    es: "Ingeniería de Plataformas",
  },
  {
    value: "Application Development",
    en: "Application Development",
    es: "Desarrollo de Aplicaciones",
  },
  {
    value: "Security & Automation",
    en: "Security & Automation",
    es: "Seguridad y Automatización",
  },
];

/* -------------------------------------------------------------------------- */
/* SKILLS TRANSLATIONS                                                        */
/* -------------------------------------------------------------------------- */

const skillCategoryTranslations: Record<string, string> = {
  "Cloud Platforms": "Plataformas Cloud",
  "Infrastructure as Code": "Infraestructura como Código",
  "DevOps & CI/CD": "DevOps y CI/CD",
  "Containers & GitOps": "Contenedores y GitOps",
  "Data & Databases": "Datos y Bases de Datos",
  Programming: "Programación",
  "AI Engineering": "Ingeniería de IA",
  Networking: "Redes",
  "Security & Governance": "Seguridad y Gobierno",
  "Tools & Systems": "Herramientas y Sistemas",
};

/* -------------------------------------------------------------------------- */
/* TERMINAL                                                                   */
/* -------------------------------------------------------------------------- */

const terminalContent = {
  en: {
    welcome: "Welcome to dubercoder.dev interactive terminal.",
    instruction: 'Type "help" to explore available commands.',
    help: "Available commands: help, about, skills, projects, contact, clear",
    about:
      "Cloud & DevOps Engineer focused on automation, cloud infrastructure and scalable platforms.",
    skills:
      "Azure | AWS | GCP | Terraform | Kubernetes | Docker | CI/CD | GitOps | Python",
    projects:
      "Available projects: Cloud Governance AI Agent, GitOps Platform, Madi Mobile, DevSecOps Pipeline.",
    contact: "GitHub: github.com/dubercode",
    notFound: (command: string) =>
      `Command not found: ${command}. Type "help".`,
    prompt: "visitor@portfolio:~$",
    title: "dubercoder@portfolio — terminal",
    inputLabel: "Terminal command",
  },
  es: {
    welcome: "Bienvenido a la terminal interactiva de dubercoder.dev.",
    instruction: 'Escribe "help" para explorar los comandos disponibles.',
    help: "Comandos: help, about, skills, projects, contact, clear",
    about:
      "Ingeniero Cloud & DevOps enfocado en automatización, infraestructura cloud y plataformas escalables.",
    skills:
      "Azure | AWS | GCP | Terraform | Kubernetes | Docker | CI/CD | GitOps | Python",
    projects:
      "Proyectos: Cloud Governance AI Agent, GitOps Platform, Madi Mobile y DevSecOps Pipeline.",
    contact: "GitHub: github.com/dubercode",
    notFound: (command: string) =>
      `Comando no encontrado: ${command}. Escribe "help".`,
    prompt: "visitor@portfolio:~$",
    title: "dubercoder@portfolio — terminal",
    inputLabel: "Comando de terminal",
  },
};

function TerminalWidget({ language }: { language: Language }) {
  const terminal = terminalContent[language];

  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    terminal.welcome,
    terminal.instruction,
  ]);

  useEffect(() => {
    setHistory([terminal.welcome, terminal.instruction]);
    setCommand("");
  }, [language, terminal.welcome, terminal.instruction]);

  const runCommand = (value: string) => {
    const input = value.trim().toLowerCase();

    if (!input) return;

    if (input === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const outputs: Record<string, string> = {
      help: terminal.help,
      about: terminal.about,
      skills: terminal.skills,
      projects: terminal.projects,
      contact: terminal.contact,
    };

    const output = outputs[input] ?? terminal.notFound(input);

    setHistory((previous) => [
      ...previous,
      `${terminal.prompt} ${input}`,
      output,
    ]);

    setCommand("");
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <span className="terminal-title">{terminal.title}</span>
        <Terminal size={15} />
      </div>

      <div
        className="terminal-body"
        role="log"
        aria-live="polite"
        aria-label={terminal.title}
      >
        {history.map((line, index) => (
          <div className="terminal-line" key={`${index}-${line}`}>
            {line.startsWith(terminal.prompt) ? (
              <span className="terminal-command">{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}

        <form
          className="terminal-input-row"
          onSubmit={(event) => {
            event.preventDefault();
            runCommand(command);
          }}
        >
          <span className="terminal-prompt">{terminal.prompt}</span>

          <input
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-label={terminal.inputLabel}
          />
        </form>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN APPLICATION                                                           */
/* -------------------------------------------------------------------------- */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const shouldReduceMotion = useReducedMotion();

  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("portfolio-language") === "es"
        ? "es"
        : "en";
    } catch {
      return "en";
    }
  });

  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      // The application remains functional without localStorage.
    }
  }, [language]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navItems = [
    { label: t.navigation.about, href: "#about" },
    { label: t.navigation.stack, href: "#stack" },
    { label: t.navigation.projects, href: "#projects" },
    { label: t.navigation.experience, href: "#experience" },
    { label: t.navigation.contact, href: "#contact" },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  };

  const motionInitial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 18 };

  const motionVisible = { opacity: 1, y: 0 };

  return (
    <div className="portfolio">
      {/* NAVIGATION */}

      <header className="navbar">
        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          DUBER<span>CODER</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <div
            className="language-switch"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              className={language === "en" ? "language-active" : ""}
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>

            <span aria-hidden="true">/</span>

            <button
              type="button"
              className={language === "es" ? "language-active" : ""}
              onClick={() => changeLanguage("es")}
              aria-pressed={language === "es"}
            >
              ES
            </button>
          </div>

          <a
            href="https://wa.me/573016700780"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            {t.navigation.talk}
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="mobile-language-switch">
              <button
                type="button"
                className={language === "en" ? "language-active" : ""}
                onClick={() => changeLanguage("en")}
                aria-pressed={language === "en"}
              >
                EN
              </button>

              <span>/</span>

              <button
                type="button"
                className={language === "es" ? "language-active" : ""}
                onClick={() => changeLanguage("es")}
                aria-pressed={language === "es"}
              >
                ES
              </button>
            </div>

            <a
              href="https://wa.me/573016700780"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              {t.navigation.talk}
              <ArrowUpRight size={15} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* HERO */}

      <section id="home" className="hero section-container">
        <motion.div
          className="hero-content"
          initial={motionInitial}
          animate={motionVisible}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          <div className="availability">
            <span className="status-dot" />
            {t.hero.availability}
          </div>

          <p className="hero-eyebrow">{t.hero.eyebrow}</p>

          <h1>
            {t.hero.titleLine1}
            <br />
            <span>{t.hero.titleLine2}</span>
            <br />
            {t.hero.titleLine3}
            <br />
            <span>{t.hero.titleLine4}</span>
          </h1>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              {t.hero.explore}
              <ArrowUpRight size={17} />
            </a>

            <a
              href="https://wa.me/573016700780"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              {t.hero.contact}
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/dubercode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={17} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dubercoder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UserRound size={17} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
        >
          {/* PROFESSIONAL PROFILE */}

          <div className="hero-profile">
            <div className="hero-profile-image">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.webp`}
                alt="Duberney - Cloud and DevOps Engineer"
                fetchPriority="high"
              />
            </div>

            <div className="hero-profile-caption">
              <span className="profile-label">
                {language === "en"
                  ? "ENGINEERING PROFILE"
                  : "PERFIL DE INGENIERÍA"}
              </span>

              <strong>Duberney</strong>

              <small>Cloud · DevOps · Platform Engineering</small>
            </div>

            <div className="profile-status">
              <span className="status-dot" />
            </div>
          </div>

          <TerminalWidget language={language} />

          <div className="floating-card card-top">
            <Cloud size={17} />
            <div>
              <strong>Cloud Native</strong>
              <small>
                {language === "en"
                  ? "Infrastructure & platforms"
                  : "Infraestructura y plataformas"}
              </small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <ShieldCheck size={17} />
            <div>
              <strong>Automation First</strong>
              <small>
                {language === "en"
                  ? "Secure by design"
                  : "Seguridad desde el diseño"}
              </small>
            </div>
          </div>
        </motion.div>
      </section>

      {/* METRICS */}

      <section className="metrics section-container">
        <div className="metric">
          <strong>Cloud</strong>
          <span>
            {language === "en"
              ? "Infrastructure & Architecture"
              : "Infraestructura y Arquitectura"}
          </span>
        </div>

        <div className="metric">
          <strong>DevOps</strong>
          <span>
            {language === "en"
              ? "CI/CD & Automation"
              : "CI/CD y Automatización"}
          </span>
        </div>

        <div className="metric">
          <strong>Platform</strong>
          <span>
            {language === "en"
              ? "Kubernetes & GitOps"
              : "Kubernetes y GitOps"}
          </span>
        </div>

        <div className="metric">
          <strong>AI</strong>
          <span>
            {language === "en"
              ? "Intelligent Engineering"
              : "Ingeniería Inteligente"}
          </span>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section-container section">
        <div className="section-heading">
          <span className="section-label">{t.about.label}</span>

          <h2>
            {t.about.title}
            <br />
            <span>{t.about.subtitle}</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">{t.about.lead}</p>
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">
              <Code2 size={23} />
            </div>

            <h3>{t.about.highlightTitle}</h3>
            <p>{t.about.highlightDescription}</p>

            <div className="highlight-tags">
              <span>IaC</span>
              <span>Cloud</span>
              <span>DevOps</span>
              <span>Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING TOOLS */}

      <section id="stack" className="section stack-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-label">{t.stack.label}</span>
            <h2>{t.stack.title}</h2>
            <p>{t.stack.description}</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.category}
                className="skill-card"
                initial={motionInitial}
                whileInView={motionVisible}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : (index % 2) * 0.07,
                }}
              >
                <div className="skill-card-header">
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(skillGroups.length).padStart(2, "0")}
                  </span>

                  <span className="skill-card-indicator" />
                </div>

                <h3>
                  {language === "en"
                    ? group.category
                    : skillCategoryTranslations[group.category] ??
                      group.category}
                </h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section section-container">
        <div className="section-heading">
          <span className="section-label">{t.projects.label}</span>

          <h2>
            {t.projects.title}
            <br />
            <span>{t.projects.subtitle}</span>
          </h2>

          <p>{t.projects.description}</p>
        </div>

        <div
          className="project-filters"
          role="group"
          aria-label={
            language === "en" ? "Filter projects" : "Filtrar proyectos"
          }
        >
          {projectFilters.map((item) => (
            <button
              type="button"
              key={item.value}
              className={filter === item.value ? "filter-active" : ""}
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
            >
              {language === "en" ? item.en : item.es}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.number}
                className="project-card"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              >
                <div className="project-top">
                  <span className="project-number">
                    PROJECT / {project.number}
                  </span>

                  <span className="project-status">
                    <span className="status-dot" />
                    {language === "en"
                      ? project.status
                      : project.status === "LAB"
                        ? "LABORATORIO"
                        : "EN DESARROLLO"}
                  </span>
                </div>

                <div className="project-icon">
                  <Workflow size={27} />
                </div>

                <h3>{project.name}</h3>

                <p>{project.description[language]}</p>

                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.repository ? (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`Explore ${project.name} repository on GitHub`}
                  >
                    {t.projects.repository}
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="project-link project-link-disabled">
                    {language === "en"
                      ? "Repository coming soon"
                      : "Repositorio próximamente"}
                  </span>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}

      <section id="experience" className="experience-section">
        <div className="section-container section">
          <div className="section-heading">
            <span className="section-label">{t.experience.label}</span>
            <h2>{t.experience.title}</h2>
          </div>

          <div className="experience-timeline">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                className="experience-card"
                initial={motionInitial}
                whileInView={motionVisible}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.04, 0.2),
                }}
              >
                <div className="experience-marker" aria-hidden="true">
                  <span />
                </div>

                <div className="experience-content">
                  <div className="experience-meta">
                    <span>{job.period}</span>
                    <span className="experience-company">{job.company}</span>
                  </div>

                  <h3>{job.role}</h3>

                  <p className="experience-description">{job.description}</p>

                  {job.achievements.length > 0 && (
                    <>
                      <h4>{t.experience.achievements}</h4>

                      <ul className="experience-achievements">
                        {job.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={`${index}-${achievementIndex}`}>
                              {achievement}
                            </li>
                          ),
                        )}
                      </ul>
                    </>
                  )}

                  {job.technologies.length > 0 && (
                    <div className="experience-technologies">
                      {job.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="section section-container contact-section"
      >
        <span className="section-label">{t.contact.label}</span>

        <h2>
          {t.contact.title}
          <span> {t.contact.subtitle}</span>
        </h2>

        <p>{t.contact.description}</p>

        <a
          href="https://wa.me/573016700780"
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary contact-button"
          aria-label="Contact me on WhatsApp"
        >
          <MessageCircle size={17} />
          {t.contact.button}
          <ArrowUpRight size={17} />
        </a>

        <div className="social-links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={label}
            >
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/dubercode"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/dubercoder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer section-container">
        <a href="#home" className="brand">
          DUBER<span>CODER</span>
        </a>

        <span>{t.footer.description}</span>

        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
