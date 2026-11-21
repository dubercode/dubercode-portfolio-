
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, BookOpen } from "lucide-react";
import { experience } from "./data/experience";
import { skillGroups } from "./data/skills";
import {
  ArrowUpRight,
  GitBranch,
  UserRound,
  Mail,
  Menu,
  X,
  Terminal,
  Cloud,
  Code2,
  Workflow,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    label: "YouTube Channel",
    href: "https://www.youtube.com/@dubercoder",
    icon: Play,
  },
  {
    label: "Technical Blog",
    href: "https://dubercoder.blogspot.com/",
    icon: BookOpen,
  },
];

const projects = [
  {
    name: "Cloud Governance AI Agent",
    category: "AI & Cloud",
    description:
      "Intelligent cloud governance agent for infrastructure inventory, cost analysis, security findings and actionable recommendations.",
    stack: ["Python", "Azure", "AI", "Terraform"],
    status: "IN DEVELOPMENT",
    number: "01",
  },
  {
    name: "Kubernetes GitOps Platform",
    category: "Platform Engineering",
    description:
      "Container orchestration platform with declarative deployments, GitOps workflows and infrastructure automation.",
    stack: ["Kubernetes", "Docker", "Flux CD", "Terraform"],
    status: "LAB",
    number: "02",
  },
  {
    name: "Madi Mobile Platform",
    category: "Application Development",
    description:
      "Mobile application ecosystem with Flutter, REST API, PostgreSQL and cloud-native infrastructure.",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Azure"],
    status: "IN DEVELOPMENT",
    number: "03",
  },
  {
    name: "DevSecOps Pipeline",
    category: "Security & Automation",
    description:
      "Secure CI/CD pipeline integrating automated code analysis, dependency scanning and container security.",
    stack: ["GitHub Actions", "SAST", "Trivy", "Docker"],
    status: "LAB",
    number: "04",
  },
];

const technologies = [
  {
    category: "CLOUD",
    items: ["Azure", "AWS", "GCP", "Cloud Architecture"],
    icon: Cloud,
  },
  {
    category: "INFRASTRUCTURE",
    items: ["Terraform", "Bicep", "Docker", "Kubernetes"],
    icon: Workflow,
  },
  {
    category: "DEVOPS",
    items: ["Azure DevOps", "GitHub Actions", "GitOps", "CI/CD"],
    icon: Code2,
  },
  {
    category: "SECURITY",
    items: ["DevSecOps", "SonarQube", "Trivy", "RBAC"],
    icon: ShieldCheck,
  },
];

const commands: Record<string, string> = {
  help: "Available commands: about, skills, projects, contact, clear",
  about:
    "Cloud & DevOps Engineer focused on automation, cloud infrastructure and scalable platforms.",
  skills:
    "Azure | AWS | GCP | Terraform | Kubernetes | Docker | CI/CD | GitOps | Python",
  projects:
    "Available projects: Cloud Governance AI Agent, GitOps Platform, Madi Mobile, DevSecOps Pipeline.",
  contact:
    "Contact: duberney.dev | GitHub: github.com/dubercode",
};

function TerminalWidget() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to duberney.dev interactive terminal.",
    'Type "help" to explore available commands.',
  ]);

  const runCommand = (value: string) => {
    const input = value.trim().toLowerCase();

    if (!input) return;

    if (input === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const output =
      commands[input] ?? `Command not found: ${input}. Type "help".`;

    setHistory((prev) => [
      ...prev,
      `visitor@portfolio:~$ ${input}`,
      output,
    ]);

    setCommand("");
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal-title">
          duberney@portfolio — terminal
        </span>
        <Terminal size={15} />
      </div>

      <div className="terminal-body">
        {history.map((line, index) => (
          <div className="terminal-line" key={index}>
            {line.startsWith("visitor@") ? (
              <span className="terminal-command">{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            runCommand(command);
          }}
          className="terminal-input-row"
        >
          <span className="terminal-prompt">
            visitor@portfolio:~$
          </span>
          <input
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            autoComplete="off"
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "AI & Cloud",
    "Platform Engineering",
    "Application Development",
    "Security & Automation",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand">
          DUBERNEY<span>.DEV</span>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="home" className="hero section-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="hero-eyebrow">
            CLOUD ENGINEERING · DEVOPS · AUTOMATION
          </p>

          <h1>
            Engineering
            <br />
            <span>the cloud.</span>
            <br />
            Automating
            <br />
            <span>the future.</span>
          </h1>

          <p className="hero-description">
            I design, automate and build cloud infrastructure,
            DevOps platforms and software solutions that turn
            complex engineering challenges into scalable systems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="button-secondary">
              Get in touch
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/dubercode"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={17} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <UserRound size={17} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <TerminalWidget />
          <div className="floating-card card-top">
            <Cloud size={17} />
            <div>
              <strong>Cloud Native</strong>
              <small>Infrastructure & platforms</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <ShieldCheck size={17} />
            <div>
              <strong>Automation First</strong>
              <small>Secure by design</small>
            </div>
          </div>
        </motion.div>
      </section>

      {/* METRICS / KEY AREAS */}
      <section className="metrics section-container">
        <div className="metric">
          <strong>Cloud</strong>
          <span>Infrastructure & Architecture</span>
        </div>
        <div className="metric">
          <strong>DevOps</strong>
          <span>CI/CD & Automation</span>
        </div>
        <div className="metric">
          <strong>Platform</strong>
          <span>Kubernetes & GitOps</span>
        </div>
        <div className="metric">
          <strong>AI</strong>
          <span>Intelligent Engineering</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-container section">
        <div className="section-heading">
          <span className="section-label">01 / ABOUT ME</span>
          <h2>
            Engineering mindset.
            <br />
            <span>Continuous evolution.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">
              Technology is not just about deploying systems.
              It's about solving problems, reducing complexity
              and creating reliable solutions.
            </p>

            <p>
              I am a technology engineer with experience in
              DevOps, cloud environments, infrastructure
              automation, software delivery and technical
              transformation.
            </p>

            <p>
              My focus is building reproducible infrastructure,
              secure pipelines, scalable architectures and
              engineering workflows that improve how teams
              develop, deploy and operate software.
            </p>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">
              <Code2 size={23} />
            </div>
            <h3>Build. Automate. Improve.</h3>
            <p>
              Infrastructure as Code, automation, cloud
              architecture and continuous improvement.
            </p>
            <div className="highlight-tags">
              <span>IaC</span>
              <span>Cloud</span>
              <span>DevOps</span>
              <span>Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="section stack-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-label">02 / TECHNOLOGY STACK</span>
            <h2>
              Tools of the
              <span> trade.</span>
            </h2>
            <p>
              Technologies and tools I use to design,
              automate and deliver solutions.
            </p>
          </div>
          <div className="skills-grid">
  {skillGroups.map((group) => (
    <div key={group.category} className="skill-group">
      <h3>{group.category}</h3>

      <div className="tech-tags">
        {group.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  ))}
</div>

          <div className="stack-grid">
            {technologies.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  className="stack-card"
                  key={group.category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="stack-icon" size={22} />

                  <span className="stack-category">
                    {group.category}
                  </span>

                  <div className="stack-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-container">
        <div className="section-heading">
          <span className="section-label">03 / SELECTED PROJECTS</span>
          <h2>
            Built with purpose.
            <br />
            <span>Designed to scale.</span>
          </h2>
          <p>
            Hands-on engineering, experiments and solutions
            focused on real-world challenges.
          </p>
        </div>

        <div className="project-filters">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "filter-active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="project-top">
                  <span className="project-number">
                    PROJECT / {project.number}
                  </span>
                  <span className="project-status">
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>

                <div className="project-icon">
                  <Workflow size={27} />
                </div>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href="https://github.com/dubercode"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Explore repository <ExternalLink size={15} />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience">
  <h2>Professional Experience</h2>

  <div className="experience-list">
    {experience.map((job) => (
      <article key={`${job.company}-${job.period}`}>
        <h3>{job.role}</h3>
        <h4>{job.company}</h4>
        <p>{job.period}</p>
        <p>{job.description}</p>

        {job.technologies && (
          <div className="tech-tags">
            {job.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
      </article>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="section section-container contact-section">
        <span className="section-label">05 / LET'S CONNECT</span>
        <h2>
          Let's build something
          <span> meaningful.</span>
        </h2>
        <p>
          Interested in cloud infrastructure, DevOps,
          automation, platform engineering or innovative
          technology projects? Let's talk.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="button-primary contact-button"
        >
          <Mail size={17} /> Get in touch <ArrowUpRight size={17} />
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
          <a href="https://github.com/dubercode" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer section-container">
        <a href="#home" className="brand">
          DUBERNEY<span>.DEV</span>
        </a>
        <span>Designed & engineered by Duberney.</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>

  );
}



export default App;