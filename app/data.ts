export type Locale = "en" | "es" | "de";

export type LocalizedString = Record<Locale, string>;

export type WorkProject = {
  title: LocalizedString;
  impact: LocalizedString;
};

export type WorkItem = {
  id: string;
  period: string;
  company: string;
  role: LocalizedString;
  summary: LocalizedString;
  visual: {
    label: string;
    initials: string;
    accent: string;
    logo?: string;
  };
  projects: WorkProject[];
};

export const i18n = {
  en: {
    intro: {
      greeting:
        "¡Hola! I'm Jose, a Software Developer & Data Engineer based in Leipzig.",
      mission:
        "With 4+ years of experience across web development, automation, and data analytics, I build internal systems that clarify complexity and reduce manual work. I'm available to start immediately in Leipzig.",
    },
    nav: [
      { label: "Intro", href: "#intro" },
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Skills", href: "#skills" },
      { label: "Methods", href: "#methods" },
      { label: "Certificates", href: "#certificates" },
      { label: "Languages", href: "#languages" },
      { label: "Contact", href: "#contact" },
    ],
    sections: {
      work: "Work",
      workCaption: "Selected Experience",
      stack: "Technical Stack",
      stackCaption: "Core Tools",
      skills: "Skills",
      skillsCaption: "Capabilities",
      methods: "Methodologies",
      methodsCaption: "Workflows",
      certificates: "Certificates",
      certificatesCaption: "Credentials",
      languages: "Languages",
      languagesCaption: "Communication",
      contact: "Contact",
    },
    labels: {
      expand: "Expand",
      collapse: "Collapse",
      languageToggle: "Language",
      location: "Location",
    },
    about: {
      title: "About",
      caption: "Presence",
      body:
        "Analytical and hands-on engineer focused on process optimization, clean architecture, and measurable outcomes. I adapt quickly to new technologies, collaborate cross-functionally, and prioritize maintainability from day one.",
    },
  },
  es: {
    intro: {
      greeting:
        "¡Hola! Soy José, Desarrollador de Software e Ingeniero de Datos con base en Leipzig.",
      mission:
        "Con más de 4 años de experiencia en desarrollo web, automatización y analítica de datos, creo sistemas internos que reducen el trabajo manual y aclaran lo complejo. Disponible para incorporación inmediata en Leipzig.",
    },
    nav: [
      { label: "Intro", href: "#intro" },
      { label: "Sobre mi", href: "#about" },
      { label: "Trabajo", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Skills", href: "#skills" },
      { label: "Metodos", href: "#methods" },
      { label: "Certificados", href: "#certificates" },
      { label: "Idiomas", href: "#languages" },
      { label: "Contacto", href: "#contact" },
    ],
    sections: {
      work: "Experiencia",
      workCaption: "Trayectoria seleccionada",
      stack: "Stack Técnico",
      stackCaption: "Herramientas clave",
      skills: "Competencias",
      skillsCaption: "Capacidades",
      methods: "Metodologías",
      methodsCaption: "Flujos",
      certificates: "Certificados",
      certificatesCaption: "Credenciales",
      languages: "Idiomas",
      languagesCaption: "Comunicación",
      contact: "Contacto",
    },
    labels: {
      expand: "Ver más",
      collapse: "Cerrar",
      languageToggle: "Idioma",
      location: "Ubicación",
    },
    about: {
      title: "Sobre mí",
      caption: "Presentación",
      body:
        "Perfil analítico y práctico, enfocado en optimización de procesos, arquitectura limpia y resultados medibles. Aprendo rápido, colaboro de forma transversal y priorizo la mantenibilidad desde el inicio.",
    },
  },
  de: {
    intro: {
      greeting:
        "Hallo! Ich bin Jose, Softwareentwickler und Data Engineer mit Sitz in Leipzig.",
      mission:
        "Mit uber 4 Jahren Erfahrung in Webentwicklung, Automatisierung und Datenanalyse entwickle ich interne Systeme, die Komplexitat reduzieren und manuelle Arbeit eliminieren. Sofort verfugbar in Leipzig.",
    },
    nav: [
      { label: "Intro", href: "#intro" },
      { label: "Uber mich", href: "#about" },
      { label: "Arbeit", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Skills", href: "#skills" },
      { label: "Methoden", href: "#methods" },
      { label: "Zertifikate", href: "#certificates" },
      { label: "Sprachen", href: "#languages" },
      { label: "Kontakt", href: "#contact" },
    ],
    sections: {
      work: "Berufserfahrung",
      workCaption: "Ausgewahlte Projekte",
      stack: "Technischer Stack",
      stackCaption: "Kernwerkzeuge",
      skills: "Kompetenzen",
      skillsCaption: "Fahigkeiten",
      methods: "Methoden",
      methodsCaption: "Ablaufe",
      certificates: "Zertifikate",
      certificatesCaption: "Nachweise",
      languages: "Sprachen",
      languagesCaption: "Kommunikation",
      contact: "Kontakt",
    },
    labels: {
      expand: "Offnen",
      collapse: "Schliessen",
      languageToggle: "Sprache",
      location: "Standort",
    },
    about: {
      title: "Uber mich",
      caption: "Prasenz",
      body:
        "Analytischer und praktischer Engineer mit Fokus auf Prozessoptimierung, saubere Architektur und messbare Resultate. Ich passe mich schnell an neue Technologien an, arbeite gern interdisziplinar und denke von Anfang an an Wartbarkeit.",
    },
  },
};

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Advanced/C1" },
  { name: "German", level: "B1" },
];

export const stack = {
  Programming: [
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "C#",
    "Java",
  ],
  Frontend: ["Next.js", "React", "Angular", "Vue", "Storybook"],
  "Backend/Data": [
    "Node.js (Express/Koa)",
    "Django",
    "FastAPI",
    "Pandas",
    "NumPy",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "PowerBI",
    "Qlik Sense",
    "REST APIs",
    "Microservices",
    "Docker",
    "GitHub Actions",
    "Kubernetes (basic)",
  ],
};

export const workItems: WorkItem[] = [
  {
    id: "duoc",
    period: "2025",
    company: "DUOC UC",
    role: {
      en: "Lecturer",
      es: "Docente",
      de: "Dozent",
    },
    summary: {
      en: "Practice-oriented teaching in software development and databases with a focus on logic, structure, and solution design.",
      es: "Docencia práctica en desarrollo de software y bases de datos, con foco en lógica, estructura y diseño de soluciones.",
      de: "Praxisorientierter Unterricht in Softwareentwicklung und Datenbanken mit Fokus auf Logik, Struktur und Losungsdesign.",
    },
    visual: {
      label: "Academic Architecture",
      initials: "DU",
      accent: "#0F172A",
      logo: "/duoc.png",
    },
    projects: [
      {
        title: {
          en: "Software Development",
          es: "Desarrollo de Software",
          de: "Softwareentwicklung",
        },
        impact: {
          en: "Mentored students through applied problem-solving and clean system structure.",
          es: "Acompañamiento en resolución de problemas y estructura de sistemas limpios.",
          de: "Begleitung bei angewandter Problemlosung und sauberem Systemaufbau.",
        },
      },
      {
        title: {
          en: "Databases & BPM",
          es: "Bases de Datos y BPM",
          de: "Datenbanken & BPM",
        },
        impact: {
          en: "Applied agile methods in student projects to reinforce collaboration and delivery.",
          es: "Uso de métodos ágiles en proyectos para reforzar colaboración y entrega.",
          de: "Einsatz agiler Methoden in Projekten zur Starkung von Zusammenarbeit und Lieferung.",
        },
      },
    ],
  },
  {
    id: "higueras",
    period: "2024-2025",
    company: "Hospital Las Higueras",
    role: {
      en: "Software Developer",
      es: "Desarrollador de Software",
      de: "Softwareentwickler",
    },
    summary: {
      en: "Backend development and automation for internal clinical services with Python and SQL.",
      es: "Desarrollo backend y automatización de servicios internos con Python y SQL.",
      de: "Backend-Entwicklung und Automatisierung interner klinischer Services mit Python und SQL.",
    },
    visual: {
      label: "Digital Health",
      initials: "HL",
      accent: "#0F766E",
      logo: "/hospital.png",
    },
    projects: [
      {
        title: {
          en: "API Integrations",
          es: "Integracion de APIs",
          de: "API-Integrationen",
        },
        impact: {
          en: "Connected internal systems and built services to streamline clinical operations.",
          es: "Conexión de sistemas internos y servicios para optimizar la operación clínica.",
          de: "Verknupfung interner Systeme und Services zur Optimierung klinischer Ablaufe.",
        },
      },
      {
        title: {
          en: "Operational Dashboards",
          es: "Dashboards Operacionales",
          de: "Operative Dashboards",
        },
        impact: {
          en: "Delivered dashboards for scheduling and operational visibility.",
          es: "Dashboards para agenda y visibilidad operativa.",
          de: "Dashboards fur Terminplanung und operative Transparenz.",
        },
      },
    ],
  },
  {
    id: "fg",
    period: "2023",
    company: "Empresas FG",
    role: {
      en: "Analyst & Software Developer",
      es: "Analista y Desarrollador",
      de: "Analyst & Softwareentwickler",
    },
    summary: {
      en: "Process automation across logistics, construction, and real estate.",
      es: "Automatización de procesos en logística, construcción e inmobiliaria.",
      de: "Prozessautomatisierung in Logistik, Bau und Immobilien.",
    },
    visual: {
      label: "Industrial Automation",
      initials: "FG",
      accent: "#1F2937",
      logo: "/fg.png",
    },
    projects: [
      {
        title: {
          en: "Automation Tooling",
          es: "Herramientas de Automatizacion",
          de: "Automatisierungs-Tooling",
        },
        impact: {
          en: "Built solutions with TypeScript, Python, and SQL to reduce manual work.",
          es: "Soluciones con TypeScript, Python y SQL para reducir tareas manuales.",
          de: "Losungen mit TypeScript, Python und SQL zur Reduktion manueller Aufgaben.",
        },
      },
      {
        title: {
          en: "Reusable Modules",
          es: "Modulos Reutilizables",
          de: "Wiederverwendbare Module",
        },
        impact: {
          en: "Integrated APIs and shipped reusable components for multiple business areas.",
          es: "Integración de APIs y componentes reutilizables para distintas áreas.",
          de: "API-Integration und wiederverwendbare Module fur verschiedene Bereiche.",
        },
      },
    ],
  },
  {
    id: "biwiser",
    period: "2021-2022",
    company: "Biwiser",
    role: {
      en: "Full-Stack Developer",
      es: "Desarrollador Full-Stack",
      de: "Full-Stack-Entwickler",
    },
    summary: {
      en: "Full-stack delivery for data-intensive retail platforms.",
      es: "Entrega full-stack para plataformas retail orientadas a datos.",
      de: "Full-Stack-Delivery fur datenintensive Retail-Plattformen.",
    },
    visual: {
      label: "Retail Intelligence",
      initials: "BI",
      accent: "#0F4C81",
      logo: "/gerentecomercial.png",
    },
    projects: [
      {
        title: {
          en: "Modern Web Systems",
          es: "Sistemas Web Modernos",
          de: "Moderne Websysteme",
        },
        impact: {
          en: "Built dashboards and web systems for clients like Walmart, Copec, and Glam&CO.",
          es: "Dashboards y sistemas web para clientes como Walmart, Copec y Glam&CO.",
          de: "Dashboards und Websysteme fur Kunden wie Walmart, Copec und Glam&CO.",
        },
      },
      {
        title: {
          en: "APIs & Microservices",
          es: "APIs y Microservicios",
          de: "APIs & Microservices",
        },
        impact: {
          en: "Implemented REST APIs, authentication, and internal microservices with quality and testing in mind.",
          es: "Implementación de APIs REST, autenticación y microservicios con foco en calidad y testing.",
          de: "Implementierung von REST-APIs, Authentifizierung und Microservices mit Fokus auf Qualitat und Testing.",
        },
      },
    ],
  },
  {
    id: "arauco",
    period: "2021",
    company: "Forestal Arauco",
    role: {
      en: "Data Engineer",
      es: "Ingeniero de Datos",
      de: "Data Engineer",
    },
    summary: {
      en: "Standardized large strategic datasets for planning and predictive models.",
      es: "Estandarización de grandes datasets estratégicos para planificación y modelos predictivos.",
      de: "Standardisierung grosser strategischer Daten fur Planung und Prognosemodelle.",
    },
    visual: {
      label: "Strategic Planning",
      initials: "FA",
      accent: "#14532D",
      logo: "/arauco.png",
    },
    projects: [
      {
        title: {
          en: "Data Standardization",
          es: "Estandarizacion de Datos",
          de: "Datenstandardisierung",
        },
        impact: {
          en: "Prepared databases for strategic planning and asset calculations.",
          es: "Preparación de bases de datos para planificación estratégica y cálculo de activos.",
          de: "Aufbereitung von Datenbanken fur strategische Planung und Asset-Berechnung.",
        },
      },
      {
        title: {
          en: "BI Dashboards",
          es: "Dashboards BI",
          de: "BI-Dashboards",
        },
        impact: {
          en: "Built analytical models and dashboards in Qlik Sense and PowerBI to support leadership decisions.",
          es: "Modelos analíticos y dashboards en Qlik Sense y PowerBI para decisiones gerenciales.",
          de: "Analytische Modelle und Dashboards in Qlik Sense und PowerBI fur Managemententscheidungen.",
        },
      },
    ],
  },
];

export const contact = {
  email: "josevaldescarrasco@gmail.com",
  location: "Leipzig, Germany",
  number: "+49 170 9020413",
  whatsapp: "https://wa.me/491709020413",
};

export const localeOptions = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
  { value: "de", label: "DE" },
] satisfies readonly { value: Locale; label: string }[];

export const skills = {
  en: [
    "Analytical thinking & problem solving",
    "Process optimization & automation",
    "Agile methods (Scrum, Kanban)",
    "Fast learning & adaptability",
    "Self-management & prioritization",
    "Cross-functional collaboration",
  ],
  es: [
    "Pensamiento analítico y resolución de problemas",
    "Optimización y automatización de procesos",
    "Metodologías ágiles (Scrum, Kanban)",
    "Aprendizaje rápido y adaptabilidad",
    "Autogestión y priorización",
    "Colaboración interdisciplinaria",
  ],
  de: [
    "Analytisches Denken und Problemlosung",
    "Prozessoptimierung und Automatisierung",
    "Agile Methoden (Scrum, Kanban)",
    "Schnelle Auffassungsgabe und Anpassungsfahigkeit",
    "Selbstorganisation und Priorisierung",
    "Interdisziplinare Zusammenarbeit",
  ],
};

export const methods = ["Scrum", "Kanban", "Lean"];

export const certificates = [
  "Python Certification",
  "CISCO Cybersecurity",
  "AWS Designing Event-Driven",
  "Microsoft Git & GitHub",
  "AWS Technical Essentials",
  "AWS Generative AI",
  "Microsoft Copilot for Companies",
  "CISCO Data Science",
];
