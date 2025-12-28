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
  role: string;
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
        "¡Hola!  I'm José, a Software Developer & Data Engineer based in Leipzig.",
      mission:
        "I specialize in bridging the gap between complex data ecosystems and user-centric software. My mission is to contribute to society by automating the tedious and clarifying the complex.",
    },
    nav: [
      { label: "Intro", href: "#intro" },
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Languages", href: "#languages" },
      { label: "Contact", href: "#contact" },
    ],
    sections: {
      work: "Work",
      workCaption: "Selected Experience",
      stack: "Technical Stack",
      stackCaption: "Core Tools",
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
        "I design and build data-driven platforms that feel calm, clear, and reliable. I enjoy translating messy systems into elegant workflows and collaborating with teams that value impact over noise.",
    },
  },
  es: {
    intro: {
      greeting:
        "¡Hola!  Soy José, Desarrollador de Software e Ingeniero de Datos con base en Leipzig.",
      mission:
        "Me especializo en tender puentes entre ecosistemas de datos complejos y software centrado en las personas. Mi mision es aportar a la sociedad automatizando lo tedioso y aclarando lo complejo.",
    },
    nav: [
      { label: "Intro", href: "#intro" },
      { label: "Sobre mi", href: "#about" },
      { label: "Trabajo", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Idiomas", href: "#languages" },
      { label: "Contacto", href: "#contact" },
    ],
    sections: {
      work: "Experiencia",
      workCaption: "Trayectoria seleccionada",
      stack: "Stack Tecnico",
      stackCaption: "Herramientas clave",
      languages: "Idiomas",
      languagesCaption: "Comunicacion",
      contact: "Contacto",
    },
    labels: {
      expand: "Ver mas",
      collapse: "Cerrar",
      languageToggle: "Idioma",
      location: "Ubicacion",
    },
    about: {
      title: "Sobre mi",
      caption: "Presentacion",
      body:
        "Diseno y construyo plataformas basadas en datos con una experiencia clara y confiable. Me gusta traducir sistemas complejos en flujos elegantes y colaborar con equipos que buscan impacto real.",
    },
  },
  de: {
    intro: {
      greeting:
        "Hallo! Ich bin Jose, Softwareentwickler und Data Engineer mit Sitz in Leipzig.",
      mission:
        "Ich verbinde komplexe Daten-Okosysteme mit nutzerzentrierter Software. Meine Mission ist es, das Langwierige zu automatisieren und das Komplexe zu klaren.",
    },
    nav: [
      { label: "Intro", href: "#intro" },
      { label: "Uber mich", href: "#about" },
      { label: "Arbeit", href: "#work" },
      { label: "Stack", href: "#stack" },
      { label: "Sprachen", href: "#languages" },
      { label: "Kontakt", href: "#contact" },
    ],
    sections: {
      work: "Berufserfahrung",
      workCaption: "Ausgewahlte Projekte",
      stack: "Technischer Stack",
      stackCaption: "Kernwerkzeuge",
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
        "Ich entwickle datengetriebene Plattformen, die ruhig, klar und zuverlassig wirken. Ich ubersetze komplexe Systeme in elegante Workflows und arbeite gerne mit Teams, die Wirkung uber Larm stellen.",
    },
  },
};

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Advanced / C1" },
  { name: "German", level: "B1" },
];

export const stack = {
  Programming: ["Python", "TS/JS", "SQL"],
  Frontend: ["Next.js", "React"],
  "Backend/Data": ["Node.js", "PostgreSQL", "PowerBI"],
};

export const workItems: WorkItem[] = [
  {
    id: "duoc",
    period: "2025",
    company: "DUOC UC",
    role: "Dozent",
    summary: {
      en: "Academic leadership in Advanced Databases and BPM, teaching the next generation how to design scalable logic.",
      es: "Liderazgo academico en Bases de Datos Avanzadas y BPM, formando a la nueva generacion en diseno de logica escalable.",
      de: "Akademische Leitung in Advanced Databases und BPM, mit Fokus auf skalierbare Logik und Systementwurf.",
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
          en: "Advanced Databases",
          es: "Bases de Datos Avanzadas",
          de: "Advanced Databases",
        },
        impact: {
          en: "Designed curriculum emphasizing scalable schemas, query optimization, and real-world constraints.",
          es: "Diseno de planes de estudio enfocados en esquemas escalables, optimizacion de consultas y restricciones reales.",
          de: "Curriculum mit Fokus auf skalierbare Schemata, Query-Optimierung und reale Rahmenbedingungen.",
        },
      },
      {
        title: {
          en: "BPM Systems",
          es: "Sistemas BPM",
          de: "BPM-Systeme",
        },
        impact: {
          en: "Guided process modeling and automation for resilient enterprise workflows.",
          es: "Modelado y automatizacion de procesos para flujos empresariales resilientes.",
          de: "Prozessmodellierung und Automatisierung fur robuste Unternehmensablaufe.",
        },
      },
    ],
  },
  {
    id: "higueras",
    period: "2024-2025",
    company: "Hospital Las Higueras",
    role: "Digital Health",
    summary: {
      en: "Digital Transformation Suite for mission-critical hospital workflows.",
      es: "Suite de transformacion digital para flujos clinicos criticos.",
      de: "Digitale Transformationssuite fur unternehmenskritische Klinikprozesse.",
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
          en: "Patient Scheduling",
          es: "Agendamiento de Pacientes",
          de: "Patientenplanung",
        },
        impact: {
          en: "Migrated paper-based operations to high-availability digital scheduling and agenda systems.",
          es: "Migracion de operaciones en papel a sistemas digitales de agenda y alta disponibilidad.",
          de: "Migration papierbasierter Ablaufe zu hochverfugbaren digitalen Planungs- und Agenda-Systemen.",
        },
      },
      {
        title: {
          en: "Pharmacy & Medicine Tracking",
          es: "Trazabilidad de Farmacia",
          de: "Pharmazie- und Medikamenten-Tracking",
        },
        impact: {
          en: "Delivered reliable tracking pipelines to safeguard medical operability.",
          es: "Pipelines confiables para asegurar la operatividad y control de medicamentos.",
          de: "Zuverlassige Tracking-Pipelines zur Sicherung der medizinischen Betriebsfahigkeit.",
        },
      },
    ],
  },
  {
    id: "fg",
    period: "2023",
    company: "Empresas FG",
    role: "Automation Lead",
    summary: {
      en: "Enterprise Resource Optimization for core business cycles.",
      es: "Optimizacion de recursos empresariales para ciclos clave del negocio.",
      de: "Optimierung von Unternehmensressourcen fur zentrale Geschaftsprozesse.",
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
          en: "Billing & Error Detection",
          es: "Facturacion y Deteccion de Errores",
          de: "Abrechnung und Fehlererkennung",
        },
        impact: {
          en: "Automated billing flows and anomaly detection to reduce manual overhead.",
          es: "Automatizacion de facturacion y deteccion de anomalias para reducir trabajo manual.",
          de: "Automatisierte Abrechnung und Anomalieerkennung zur Reduktion manueller Aufwande.",
        },
      },
      {
        title: {
          en: "Accounting & HR Reporting",
          es: "Reporteria Contable y RRHH",
          de: "Accounting- und HR-Reporting",
        },
        impact: {
          en: "Streamlined reporting pipelines for faster executive decision-making.",
          es: "Pipelines de reportes optimizados para decisiones ejecutivas mas rapidas.",
          de: "Optimierte Reporting-Pipelines fur schnellere Entscheidungen im Management.",
        },
      },
    ],
  },
  {
    id: "biwiser",
    period: "2021-2022",
    company: "Biwiser",
    role: "Data-Driven Retail",
    summary: {
      en: "Inventory Intelligence Systems for Walmart & Copec.",
      es: "Sistemas de inteligencia de inventario para Walmart y Copec.",
      de: "Inventar-Intelligence-Systeme fur Walmart und Copec.",
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
          en: "Inventory Data-Warehousing",
          es: "Data-Warehousing de Inventario",
          de: "Inventory Data-Warehousing",
        },
        impact: {
          en: "Full-cycle design-to-production of data pipelines and BI dashboards.",
          es: "Desarrollo completo de pipelines de datos y dashboards de BI.",
          de: "End-to-End-Entwicklung von Datenpipelines und BI-Dashboards.",
        },
      },
      {
        title: {
          en: "Executive Analytics",
          es: "Analitica Ejecutiva",
          de: "Executive Analytics",
        },
        impact: {
          en: "Structured messy datasets into actionable insights for leadership teams.",
          es: "Estructuracion de datos desordenados en insights accionables para la direccion.",
          de: "Strukturierung unordentlicher Daten zu umsetzbaren Insights fur Leadership-Teams.",
        },
      },
    ],
  },
  {
    id: "arauco",
    period: "2021",
    company: "Forestal Arauco",
    role: "Data Engineering",
    summary: {
      en: "Tactical Planning Models for strategic forestry data.",
      es: "Modelos tacticos de planificacion para datos forestales estrategicos.",
      de: "Taktische Planungsmodelle fur strategische Forstdaten.",
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
          en: "Strategic Databases",
          es: "Bases de Datos Estrategicas",
          de: "Strategische Datenbanken",
        },
        impact: {
          en: "Standardized massive datasets for predictive modeling and asset calculation.",
          es: "Estandarizacion de grandes datasets para modelado predictivo y calculo de activos.",
          de: "Standardisierung grosser Datenmengen fur Predictive Modeling und Asset-Berechnung.",
        },
      },
      {
        title: {
          en: "Operational Forecasting",
          es: "Pronostico Operacional",
          de: "Operatives Forecasting",
        },
        impact: {
          en: "Enabled faster scenario planning with reliable, normalized data sources.",
          es: "Planeacion de escenarios mas rapida con fuentes de datos confiables y normalizadas.",
          de: "Schnellere Szenarioplanung durch verlassliche, normalisierte Datenquellen.",
        },
      },
    ],
  },
];

export const contact = {
  email: "jose.valdes@portfolio.dev",
  location: "Leipzig, Germany",
};

export const localeOptions = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
  { value: "de", label: "DE" },
];
