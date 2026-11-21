
export type Language = "en" | "es";

export const translations = {
  en: {
    navigation: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      talk: "Let's talk",
    },

    hero: {
      availability: "OPEN TO OPPORTUNITIES",
      eyebrow: "CLOUD ENGINEERING · DEVOPS · AUTOMATION",
      titleLine1: "Engineering",
      titleLine2: "the cloud.",
      titleLine3: "Automating",
      titleLine4: "the future.",
      description:
        "I design, automate and build cloud infrastructure, DevOps platforms and software solutions that turn complex engineering challenges into scalable systems.",
      explore: "Explore my work",
      contact: "Get in touch",
    },

    about: {
      label: "01 / ABOUT ME",
      title: "Engineering mindset.",
      subtitle: "Continuous evolution.",
      lead:
        "Technology is not just about deploying systems. It's about solving problems, reducing complexity and creating reliable solutions.",
      paragraph1:
        "I am a technology engineer with experience in DevOps, cloud environments, infrastructure automation, software delivery and technical transformation.",
      paragraph2:
        "My focus is building reproducible infrastructure, secure pipelines, scalable architectures and engineering workflows that improve how teams develop, deploy and operate software.",
      highlightTitle: "Build. Automate. Improve.",
      highlightDescription:
        "Infrastructure as Code, automation, cloud architecture and continuous improvement.",
    },

    stack: {
      label: "02 / TECHNOLOGY STACK",
      title: "Tools of the trade.",
      description:
        "Technologies and tools I use to design, automate and deliver solutions.",
    },

    projects: {
      label: "03 / SELECTED PROJECTS",
      title: "Built with purpose.",
      subtitle: "Designed to scale.",
      description:
        "Hands-on engineering, experiments and solutions focused on real-world challenges.",
      all: "All",
      repository: "Explore repository",
    },

    experience: {
      label: "04 / PROFESSIONAL EXPERIENCE",
      title: "Professional Experience",
      achievements: "Key contributions",
    },

    contact: {
      label: "05 / LET'S CONNECT",
      title: "Let's build something",
      subtitle: "meaningful.",
      description:
        "Interested in cloud infrastructure, DevOps, automation, platform engineering or innovative technology projects? Let's talk.",
      button: "Get in touch",
    },

    footer: {
      description: "Designed & engineered by Duberney.",
    },
  },

  es: {
    navigation: {
      about: "Sobre mí",
      stack: "Tecnologías",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      talk: "Hablemos",
    },

    hero: {
      availability: "ABIERTO A OPORTUNIDADES",
      eyebrow: "CLOUD ENGINEERING · DEVOPS · AUTOMATIZACIÓN",
      titleLine1: "Ingeniería",
      titleLine2: "en la nube.",
      titleLine3: "Automatizando",
      titleLine4: "el futuro.",
      description:
        "Diseño, automatizo y construyo infraestructura cloud, plataformas DevOps y soluciones de software que convierten desafíos complejos de ingeniería en sistemas escalables.",
      explore: "Explorar proyectos",
      contact: "Contactar",
    },

    about: {
      label: "01 / SOBRE MÍ",
      title: "Mentalidad de ingeniería.",
      subtitle: "Evolución continua.",
      lead:
        "La tecnología no consiste únicamente en desplegar sistemas. Se trata de resolver problemas, reducir la complejidad y construir soluciones confiables.",
      paragraph1:
        "Soy un profesional de ingeniería tecnológica con experiencia en DevOps, entornos cloud, automatización de infraestructura, entrega de software y transformación tecnológica.",
      paragraph2:
        "Mi enfoque es construir infraestructura reproducible, pipelines seguros, arquitecturas escalables y flujos de trabajo que mejoren la forma en que los equipos desarrollan, despliegan y operan software.",
      highlightTitle: "Construir. Automatizar. Mejorar.",
      highlightDescription:
        "Infraestructura como Código, automatización, arquitectura cloud y mejora continua.",
    },

    stack: {
      label: "02 / TECNOLOGÍAS",
      title: "Herramientas de ingeniería.",
      description:
        "Tecnologías y herramientas que utilizo para diseñar, automatizar y entregar soluciones.",
    },

    projects: {
      label: "03 / PROYECTOS DESTACADOS",
      title: "Construidos con propósito.",
      subtitle: "Diseñados para escalar.",
      description:
        "Experimentos, desarrollos y soluciones prácticas orientadas a resolver desafíos reales.",
      all: "Todos",
      repository: "Explorar repositorio",
    },

    experience: {
      label: "04 / EXPERIENCIA PROFESIONAL",
      title: "Experiencia profesional",
      achievements: "Principales contribuciones",
    },

    contact: {
      label: "05 / CONECTEMOS",
      title: "Construyamos algo",
      subtitle: "significativo.",
      description:
        "¿Te interesan la infraestructura cloud, DevOps, automatización, ingeniería de plataformas o proyectos tecnológicos innovadores? Hablemos.",
      button: "Contactar",
    },

    footer: {
      description: "Diseñado y desarrollado por Duberney.",
    },
  },
} as const;
