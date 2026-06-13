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
        "¡Hola! I'm Jose, a Software Developer & Data Engineer living in Germany.",
      mission:
        "With 4+ years of experience across web development, automation, and data analytics, I build internal systems that clarify complexity and reduce manual work. I'm available to start immediately in Leipzig.",
      livingIn: "Leipzig, Germany",
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
        "¡Hola! Soy José, Desarrollador de Software e Ingeniero de Datos viviendo en Alemania.",
      mission:
        "Con más de 4 años de experiencia en desarrollo web, automatización y analítica de datos, creo sistemas internos que reducen el trabajo manual y aclaran lo complejo. Disponible para incorporación inmediata en Leipzig.",
      livingIn: "Leipzig, Alemania",
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
        "Hallo! Ich bin Jose, Softwareentwickler und Data Engineer, wohnhaft in Deutschland.",
      mission:
        "Mit uber 4 Jahren Erfahrung in Webentwicklung, Automatisierung und Datenanalyse entwickle ich interne Systeme, die Komplexitat reduzieren und manuelle Arbeit eliminieren. Sofort verfugbar in Leipzig.",
      livingIn: "Leipzig, Deutschland",
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
      {
        title: {
          en: "AI & Agent Integration",
          es: "Integración de IA y Agentes",
          de: "KI- & Agenten-Integration",
        },
        impact: {
          en: "Practical teaching on integrating AI APIs (OpenAI, Gemini) and building intelligent agentic skills.",
          es: "Enseñanza práctica en integración de APIs de IA (OpenAI, Gemini) y construcción de skills y agentes inteligentes.",
          de: "Praxisnahe Lehre zur Integration von KI-APIs (OpenAI, Gemini) und Entwicklung intelligenter Agenten-Skills.",
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
          en: "Connected internal systems and built services to automate clinical data workflows.",
          es: "Conexión de sistemas internos y desarrollo de servicios para automatizar flujos de datos clínicos.",
          de: "Verknupfung interner Systeme und Services zur Automatisierung klinischer Daten-Workflows.",
        },
      },
      {
        title: {
          en: "Resource & DB Optimization",
          es: "Optimización de Recursos y BD",
          de: "Ressourcen- & DB-Optimierung",
        },
        impact: {
          en: "Optimized complex SQL queries and Node.js backend services, reducing server response times by 40%.",
          es: "Optimización de consultas SQL complejas y servicios backend en Node.js, reduciendo los tiempos de respuesta del servidor en un 40%.",
          de: "Optimierung komplexer SQL-Abfragen und Node.js-Backend-Services, wodurch die Serverantwortzeiten um 40 % verkurzt wurden.",
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
          en: "Built custom automation scripts in TypeScript/Python and SQL to optimize workflows in logistics and real estate, reducing manual work.",
          es: "Desarrollo de scripts de automatización personalizados en TypeScript/Python y SQL para optimizar flujos en logística e inmobiliaria, reduciendo tareas manuales.",
          de: "Entwicklung massgeschneiderter Automatisierungsskripte in TypeScript/Python und SQL zur Optimierung von Ablaufen in Logistik und Immobilien.",
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
    id: "gerente-comercial",
    period: "2023",
    company: "Gerente Comercial",
    role: {
      en: "Analyst & Software Developer",
      es: "Analista y Desarrollador",
      de: "Analyst & Softwareentwickler",
    },
    summary: {
      en: "Technology innovation, CRM implementation, and automation for key corporate clients like Mobil Copec, Pinos de Montemar, and Ingebio.",
      es: "Innovación tecnológica con Big Data, evaluación e implementación de CRM, y automatización de proyectos para clientes como Mobil Copec, Pinos de Montemar e Ingebio.",
      de: "Technologische Innovation mit Big Data, CRM-Evaluierung und -Implementierung sowie Projektautomatisierung fur Kunden wie Mobil Copec, Pinos de Montemar und Ingebio.",
    },
    visual: {
      label: "Commercial Intelligence",
      initials: "GC",
      accent: "#1E3A8A",
      logo: "/gerentecomercial.png",
    },
    projects: [
      {
        title: {
          en: "CRM & Process Automation",
          es: "Automatización de CRM y Procesos",
          de: "CRM- & Prozessautomatisierung",
        },
        impact: {
          en: "Integrated CRM software and automated operational workflows for enterprise clients, optimizing resources.",
          es: "Integración de CRM y automatización de flujos operativos para clientes corporativos, optimizando recursos.",
          de: "CRM-Integration und Automatisierung operativer Ablaufe fur Unternehmenskunden zur Optimierung von Ressourcen.",
        },
      },
      {
        title: {
          en: "Advanced Analytics & Python",
          es: "Analítica Avanzada y Python",
          de: "Erweiterte Analytik & Python",
        },
        impact: {
          en: "Applied advanced Python analytics and predictive models to assess commercial risks and secure data integrity.",
          es: "Uso de analítica avanzada en Python y modelos predictivos para evaluar riesgos comerciales y asegurar la integridad de datos.",
          de: "Einsatz fortgeschrittener Python-Analytik und pradiktiver Modelle zur Bewertung kommerzieller Risiken und Sicherung der Datenintegritat.",
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
      en: "Full-stack development for data-intensive retail platforms utilizing React, Next.js, Node.js, TypeScript, PostgreSQL, and MySQL.",
      es: "Desarrollo full-stack para plataformas retail orientadas a datos utilizando React, Next.js, Node.js, TypeScript, PostgreSQL y MySQL.",
      de: "Full-Stack-Entwicklung fur datenintensive Retail-Plattformen mit React, Next.js, Node.js, TypeScript, PostgreSQL und MySQL.",
    },
    visual: {
      label: "Retail Intelligence",
      initials: "BI",
      accent: "#0F4C81",
      logo: "/biwiser.png",
    },
    projects: [
      {
        title: {
          en: "Web Systems & Dashboards",
          es: "Sistemas Web y Dashboards",
          de: "Websysteme & Dashboards",
        },
        impact: {
          en: "Built interactive dashboards and modern web systems for high-profile clients like Walmart, Copec, and Glam&CO.",
          es: "Creación de dashboards interactivos y sistemas web modernos para clientes de alto perfil como Walmart, Copec y Glam&CO.",
          de: "Aufbau interaktiver Dashboards und moderner Websysteme fur namhafte Kunden wie Walmart, Copec und Glam&CO.",
        },
      },
      {
        title: {
          en: "APIs & Microservices",
          es: "APIs y Microservicios",
          de: "APIs & Microservices",
        },
        impact: {
          en: "Implemented REST APIs, secure authentication, and internal microservices.",
          es: "Implementación de APIs REST, autenticación segura y microservicios internos.",
          de: "Implementierung von REST-APIs, Authentifizierung und internen Microservices.",
        },
      },
      {
        title: {
          en: "Agile & Code Quality",
          es: "Agilidad y Calidad de Código",
          de: "Agilitat & Codequalitat",
        },
        impact: {
          en: "Collaborated in agile teams focusing on software quality, testing, and code maintainability.",
          es: "Colaboración en equipos ágiles con foco en calidad de software, testing y mantenibilidad del código.",
          de: "Zusammenarbeit in agilen Teams mit Fokus auf Qualitat, Testing und Code-Wartbarkeit.",
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
      en: "Standardized large strategic databases for planning and supported management decisions through data analytics.",
      es: "Estandarización de grandes bases de datos para planificación estratégica y soporte de decisiones gerenciales mediante análisis de datos.",
      de: "Standardisierung grosser Datenbanken fur die strategische Planung und Unterstutzung von Managemententscheidungen durch Datenanalysen.",
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
          en: "Database Standardization",
          es: "Estandarización de Bases de Datos",
          de: "Datenbank-Standardisierung",
        },
        impact: {
          en: "Standardized and optimized large databases (Big Data) for strategic planning, reducing processing memory usage.",
          es: "Estandarización y optimización de grandes bases de datos (Big Data) para planificación estratégica, optimizando el uso de memoria.",
          de: "Standardisierung grosser Datenbanken fur die strategische Planung und Verringerung des Speicherbedarfs bei der Verarbeitung.",
        },
      },
      {
        title: {
          en: "BI Dashboards & Analytics",
          es: "Dashboards BI y Analítica",
          de: "BI-Dashboards & Analytik",
        },
        impact: {
          en: "Created analytical models and business intelligence dashboards in Qlik Sense and PowerBI.",
          es: "Creación de modelos analíticos y dashboards de inteligencia de negocios en Qlik Sense y PowerBI.",
          de: "Erstellung analytischer Modelle und Dashboards in Qlik Sense & PowerBI.",
        },
      },
      {
        title: {
          en: "Decision Support",
          es: "Soporte de Decisiones",
          de: "Entscheidungsunterstutzung",
        },
        impact: {
          en: "Supported corporate management decisions through detailed data analysis.",
          es: "Soporte a decisiones gerenciales corporativas mediante análisis detallado de datos.",
          de: "Unterstutzung von Managemententscheidungen durch Datenanalysen.",
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
  github: "https://github.com/jordicv",
  linkedin: "https://linkedin.com/in/josevaldescarrasco",
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
    "AI integration & Agent/Skills development",
    "Resource optimization & system performance",
  ],
  es: [
    "Pensamiento analítico y resolución de problemas",
    "Optimización y automatización de procesos",
    "Metodologías ágiles (Scrum, Kanban)",
    "Aprendizaje rápido y adaptabilidad",
    "Autogestión y priorización",
    "Colaboración interdisciplinaria",
    "Integración de IA y desarrollo de agentes / skills",
    "Optimización de recursos y rendimiento de sistemas",
  ],
  de: [
    "Analytisches Denken und Problemlosung",
    "Prozessoptimierung und Automatisierung",
    "Agile Methoden (Scrum, Kanban)",
    "Schnelle Auffassungsgabe und Anpassungsfahigkeit",
    "Selbstorganisation und Priorisierung",
    "Interdisziplinare Zusammenarbeit",
    "KI-Integration & Entwicklung von Agenten / Skills",
    "Ressourcenoptimierung & Systemleistung",
  ],
};

export const methods = ["Scrum", "Kanban", "Lean"];

export type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  logo: "aws" | "cisco" | "microsoft" | "python" | "generic";
  credentialUrl?: string;
};

export const certificates: CertificateItem[] = [
  {
    title: "Introduction to Generative AI - Art of the Possible",
    issuer: "AWS Training & Certification",
    date: "Dec 2025",
    logo: "aws",
    credentialUrl: "/certificates/aws-generative-ai.pdf"
  },
  {
    title: "AWS Technical Essentials",
    issuer: "AWS Training & Certification",
    date: "Dec 2025",
    logo: "aws",
    credentialUrl: "/certificates/aws-technical-essentials.pdf"
  },
  {
    title: "Designing Event-Driven Architectures",
    issuer: "AWS Training & Certification",
    date: "Dec 2025",
    logo: "aws",
    credentialUrl: "/certificates/aws-event-driven-architectures.pdf"
  },
  {
    title: "AWS Application Migration Service Getting Started",
    issuer: "AWS Training & Certification",
    date: "Dec 2025",
    logo: "aws",
    credentialUrl: "/certificates/aws-migration-service.pdf"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Dec 2025",
    logo: "cisco",
    credentialUrl: "/certificates/cisco-cybersecurity.pdf"
  },
  {
    title: "Ultimate Python: de cero a programador experto",
    issuer: "Udemy (Nicolás Schürmann)",
    date: "Feb 2025",
    logo: "python",
    credentialUrl: "/certificates/udemy-python-ultimate.pdf"
  },
  {
    title: "Git & GitHub",
    issuer: "Microsoft",
    date: "2025",
    logo: "microsoft"
  },
  {
    title: "Copilot for Companies",
    issuer: "Microsoft",
    date: "2025",
    logo: "microsoft"
  },
  {
    title: "Data Science",
    issuer: "Cisco Networking Academy",
    date: "2025",
    logo: "cisco"
  }
];
