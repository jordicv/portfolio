"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  contact,
  i18n,
  languages,
  localeOptions,
  methods,
  certificates,
  skills,
  stack,
  workItems,
  type Locale,
} from "./data";

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Page() {
  const [activeId, setActiveId] = useState(workItems[0]?.id ?? "");
  const [locale, setLocale] = useState<Locale>("en");
  const t = i18n[locale];
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const [resolvedDark, setResolvedDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  // Certificate Preview Modal State
  const [previewCert, setPreviewCert] = useState<{ url: string; title: string } | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (previewCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [previewCert]);

  // Contact Form State
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus("error");
      return;
    }
    setFormStatus("sending");
    
    // Simulate API request send
    setTimeout(() => {
      setFormStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 1200);
  };

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const isDark = theme === "dark" || (theme === "system" && media.matches);
      root.classList.toggle("dark", isDark);
      setResolvedDark(isDark);
    };

    applyTheme();
    const handleChange = () => applyTheme();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  // Sync html lang attribute dynamically
  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  // Scroll Spy Observer
  useEffect(() => {
    const sections = ["intro", "about", "work", "stack", "skills", "methods", "certificates", "languages", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -50% 0px",
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <main className="relative min-h-screen scroll-smooth bg-white text-black dark:bg-black dark:text-white font-[system-ui] tracking-tighter">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_70%)]" />
      </div>

      {/* Premium Sticky Apple-style Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/75 backdrop-blur-md dark:border-white/10 dark:bg-black/75">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between sm:px-10 gap-6">
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <a href="#intro" className="text-base font-semibold tracking-tight active-press-sm">
              José Valdés
            </a>

            {/* Mobile Toolbar (theme toggle + github + linkedin) */}
            <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() =>
                  setTheme((current) => {
                    if (current === "system") {
                      return resolvedDark ? "light" : "dark";
                    }
                    return current === "dark" ? "light" : "dark";
                  })
                }
                className="grid h-8 w-8 place-items-center rounded-full border border-zinc-200/70 text-zinc-500 transition-colors hover:text-black dark:border-white/10 dark:hover:text-white active-press-sm"
                aria-label="Toggle theme"
              >
                {resolvedDark ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 12.8A9 9 0 0 1 11.2 3a7.2 7.2 0 1 0 9.8 9.8Z" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="4.5" />
                    <path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12h2.5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
                  </svg>
                )}
              </button>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full border border-zinc-200/70 text-zinc-400 hover:text-black dark:border-white/10 dark:hover:text-white transition-colors active-press-sm"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full border border-zinc-200/70 text-zinc-400 hover:text-black dark:border-white/10 dark:hover:text-white transition-colors active-press-sm"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>


          {/* Navigation Links - Desktop */}
          <nav className="hidden xl:flex items-center gap-3 xl:gap-5 text-sm font-medium text-zinc-500">
            {t.nav.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-black dark:hover:text-white relative py-1 ${
                    isActive ? "text-black dark:text-white font-semibold" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Social Links & Toolbar Container */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            {/* Social Icons */}
            <div className="flex items-center gap-3 border-r border-zinc-200/50 dark:border-white/10 pr-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors active-press-sm"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors active-press-sm"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Toolbar (Language + Theme) - Desktop */}
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <button
                type="button"
                onClick={() =>
                  setTheme((current) => {
                    if (current === "system") {
                      return resolvedDark ? "light" : "dark";
                    }
                    return current === "dark" ? "light" : "dark";
                  })
                }
                className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200/70 text-zinc-500 transition-colors hover:text-black dark:border-white/10 dark:hover:text-white active-press-sm flex-shrink-0"
                aria-label="Toggle theme"
              >
                {resolvedDark ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 12.8A9 9 0 0 1 11.2 3a7.2 7.2 0 1 0 9.8 9.8Z" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="4.5" />
                    <path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12h2.5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
                  </svg>
                )}
              </button>
              <div className="relative flex overflow-hidden rounded-full border border-zinc-200/70 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 flex-shrink-0">
                {localeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setLocale(option.value as Locale)}
                    className={`relative z-10 flex-1 rounded-full px-3 py-1 text-xs transition-colors ${
                      locale === option.value
                        ? "text-white dark:text-black"
                        : "text-zinc-500 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {locale === option.value && (
                      <motion.span
                        layoutId="locale-pill"
                        className="absolute inset-0 rounded-full bg-black dark:bg-white"
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    )}
                    <span className="relative z-10">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon - Mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative h-9 w-9 flex items-center justify-center xl:hidden z-50 text-zinc-500 hover:text-black dark:hover:text-white active-press-sm border border-transparent hover:border-zinc-200/70 dark:hover:border-white/10 rounded-full flex-shrink-0"
            aria-label="Toggle navigation"
          >
            <div className="relative w-5 h-3.5 flex flex-col justify-between">
              <span className={`h-[1.5px] w-full bg-current rounded-full transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`h-[1.5px] w-full bg-current rounded-full transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[1.5px] w-full bg-current rounded-full transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-40 xl:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg pt-24 px-6 sm:px-10 border-b border-zinc-200/50 dark:border-white/10 h-screen flex flex-col gap-6"
          >
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2 text-lg font-medium text-zinc-500 mt-4">
              {t.nav.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-colors py-2.5 border-b border-zinc-100 dark:border-white/5 active-press-sm flex items-center justify-between ${
                      isActive ? "text-black dark:text-white font-semibold" : "text-zinc-500"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Toolbar */}
            <div className="flex flex-col gap-4 mt-auto pb-16">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>Redes / Socials</span>
                <div className="flex gap-4">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>{t.labels.languageToggle}</span>
                <div className="relative flex overflow-hidden rounded-full border border-zinc-200/70 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/5">
                  {localeOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setLocale(option.value as Locale)}
                      className={`relative z-10 flex-1 rounded-full px-3 py-1.5 text-xs transition-colors ${
                        locale === option.value
                          ? "text-white dark:text-black"
                          : "text-zinc-500 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {locale === option.value && (
                        <motion.span
                          layoutId="locale-pill-mobile"
                          className="absolute inset-0 rounded-full bg-black dark:bg-white"
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        />
                      )}
                      <span className="relative z-10">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>Tema / Theme</span>
                <button
                  type="button"
                  onClick={() =>
                    setTheme((current) => {
                      if (current === "system") {
                        return resolvedDark ? "light" : "dark";
                      }
                      return current === "dark" ? "light" : "dark";
                    })
                  }
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200/70 text-zinc-500 transition-colors hover:text-black dark:border-white/10 dark:hover:text-white active-press-sm"
                >
                  {resolvedDark ? "Oscuro / Dark" : "Claro / Light"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-12 sm:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={locale}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.section
              id="intro"
              className="grid gap-6 pt-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="text-xs uppercase tracking-[0.2em] text-zinc-500"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                José Valdés Portfolio
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="h-14 w-14 overflow-hidden rounded-full border border-zinc-200/70 shadow-sm dark:border-white/10">
                  <Image
                    src="/jose.png"
                    alt="José Valdés"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.intro.livingIn}
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl font-semibold sm:text-5xl"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {t.intro.greeting}
              </motion.h1>
              <motion.p
                className="max-w-2xl text-lg text-zinc-500"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {t.intro.mission}
              </motion.p>
            </motion.section>

            <motion.section
              id="about"
              className="mt-16 grid gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-end justify-between gap-6"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold">{t.about.title}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.about.caption}
                </span>
              </motion.div>
              <motion.p
                className="max-w-2xl text-lg text-zinc-500"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {t.about.body}
              </motion.p>
            </motion.section>

            <motion.section
              id="work"
              className="mt-20 grid gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-end justify-between gap-6"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold">{t.sections.work}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.sections.workCaption}
                </span>
              </motion.div>

              <motion.div className="grid gap-4" variants={staggerContainer}>
                {workItems.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <motion.article
                      key={item.id}
                      className="group squircle border border-zinc-200/60 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:border-zinc-400/60 hover:shadow-md dark:border-white/10 dark:bg-white/5 active-press"
                      layout
                      variants={sectionVariant}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setActiveId((prev) => (prev === item.id ? "" : item.id))
                        }
                        className="flex w-full items-center justify-between gap-6 text-left"
                      >
                        <div className="flex items-center gap-5">
                          <div
                            className="relative grid h-16 w-16 place-items-center overflow-hidden squircle-inner border border-zinc-200/70 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 group-hover:grayscale-0 grayscale"
                            style={{
                              background: `linear-gradient(135deg, ${item.visual.accent}, #f4f4f5)`,
                            }}
                            aria-label={item.visual.label}
                          >
                            {item.visual.logo ? (
                              <Image
                                src={item.visual.logo}
                                alt={item.visual.label}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <span className="relative z-10 text-[0.7rem]">
                                {item.visual.initials}
                              </span>
                            )}
                            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                              {item.period}
                            </div>
                            <div className="text-lg font-semibold">
                              {item.company}
                            </div>
                            <div className="text-sm text-zinc-500">
                              {item.role[locale]}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-zinc-500">
                          {isActive ? t.labels.collapse : t.labels.expand}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 border-t border-zinc-200/60 pt-5 text-sm text-zinc-500 dark:border-white/10">
                              <p className="text-base text-black dark:text-white">
                                {item.summary[locale]}
                              </p>
                              <div className="mt-4 grid gap-3">
                                {item.projects.map((project) => (
                                  <div
                                    key={project.title[locale]}
                                    className="rounded-xl border border-zinc-200/60 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/5"
                                  >
                                    <div className="text-sm font-semibold text-black dark:text-white">
                                      {project.title[locale]}
                                    </div>
                                    <p className="text-sm text-zinc-500">
                                      {project.impact[locale]}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.article>
                  );
                })}
              </motion.div>
            </motion.section>

            <motion.section
              id="stack"
              className="mt-20 grid gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-end justify-between gap-6"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold">{t.sections.stack}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.sections.stackCaption}
                </span>
              </motion.div>

              <motion.div
                className="grid gap-6 md:grid-cols-3"
                variants={staggerContainer}
              >
                {Object.entries(stack).map(([group, items]) => (
                  <motion.div
                    key={group}
                    className="squircle border border-zinc-200/60 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                    variants={sectionVariant}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      {group}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-200/70 px-3 py-1 text-sm text-black dark:border-white/10 dark:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              id="skills"
              className="mt-20 grid gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-end justify-between gap-6"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold">{t.sections.skills}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.sections.skillsCaption}
                </span>
              </motion.div>
              <motion.div
                className="grid gap-3 sm:grid-cols-2"
                variants={staggerContainer}
              >
                {skills[locale].map((item) => (
                  <motion.div
                    key={item}
                    className="rounded-xl border border-zinc-200/60 bg-white/80 px-4 py-3 text-sm text-zinc-500 shadow-sm dark:border-white/10 dark:bg-white/5"
                    variants={sectionVariant}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              id="methods"
              className="mt-20 grid gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-end justify-between gap-6"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold">{t.sections.methods}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.sections.methodsCaption}
                </span>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
              >
                {methods.map((item) => (
                  <motion.div
                    key={item}
                    className="rounded-full border border-zinc-200/70 bg-white/80 px-4 py-2 text-sm text-black shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
                    variants={sectionVariant}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              id="certificates"
              className="mt-20 grid gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-end justify-between gap-6"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold">
                  {t.sections.certificates}
                </h2>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.sections.certificatesCaption}
                </span>
              </motion.div>
              <motion.div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
              >
                {certificates.map((cert) => {
                  let logoColor = "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200";
                  let logoIcon = null;

                  if (cert.logo === "aws") {
                    logoColor = "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30";
                    logoIcon = (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.81 14.86c-1.35-.11-2.61-.63-3.63-1.46-.22-.18-.2-.51.04-.66l.87-.55c.21-.13.48-.09.64.1.75.87 1.83 1.39 3.01 1.39 2.05 0 3.75-1.5 3.75-3.48 0-1.89-1.57-3.23-3.56-3.23-.74 0-1.47.22-2.07.64-.17.12-.41.09-.54-.08l-.72-.94c-.11-.15-.09-.37.06-.49C9.07 7.74 10.3 7.37 11.58 7.37c3.12 0 5.68 2.28 5.68 5.48s-2.63 5.86-5.81 5.86c-.43 0-.85-.05-1.26-.15z" />
                      </svg>
                    );
                  } else if (cert.logo === "cisco") {
                    logoColor = "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/30";
                    logoIcon = (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current fill-none" strokeWidth="2">
                        <path strokeLinecap="round" d="M3 14v-4m3 6v-8m3 10V6m3 14V4m3 14V6m3 10V8m3 6v-4" />
                      </svg>
                    );
                  } else if (cert.logo === "microsoft") {
                    logoColor = "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30";
                    logoIcon = (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M0 0h11v11H0zM13 0h11v11H13zM0 13h11v11H0zM13 13h11v11H13z" />
                      </svg>
                    );
                  } else if (cert.logo === "python") {
                    logoColor = "bg-yellow-50 text-yellow-600 dark:bg-yellow-950/40 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-900/30";
                    logoIcon = (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 12.83h-3.76v-1.12h3.76v1.12zm0-2.25h-3.76v-1.12h3.76v1.12z" />
                      </svg>
                    );
                  }

                  const isClickable = !!cert.credentialUrl;
                  const CardTag = isClickable ? (motion.button as any) : motion.div;
                  const cardProps = isClickable
                    ? {
                        type: "button",
                        onClick: () => setPreviewCert({ url: cert.credentialUrl!, title: cert.title }),
                        className: "text-left squircle border border-zinc-200/60 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:border-zinc-400/60 hover:shadow-md dark:border-white/10 dark:bg-white/5 flex flex-col justify-between min-h-[140px] group active-press cursor-pointer w-full"
                      }
                    : {
                        className: "squircle border border-zinc-200/60 bg-white/80 p-5 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-white/5 flex flex-col justify-between min-h-[140px]"
                      };

                  return (
                    <CardTag
                      key={cert.title}
                      variants={sectionVariant}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      {...cardProps}
                    >
                      <div className="w-full">
                        <div className="flex items-center justify-between gap-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${logoColor}`}>
                            {logoIcon}
                            {cert.logo === "generic" ? "Cert" : cert.logo}
                          </span>
                          <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
                            {cert.date}
                          </span>
                        </div>
                        <h3 className="mt-3 text-sm font-semibold leading-tight text-black dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs w-full">
                        <span className="text-zinc-500 font-medium">{cert.issuer}</span>
                        {isClickable && (
                          <svg
                            className="h-3.5 w-3.5 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </div>
                    </CardTag>
                  );
                })}
              </motion.div>
            </motion.section>

            <motion.section
              id="languages"
              className="mt-20 grid gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="flex items-end justify-between gap-6"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl font-semibold">{t.sections.languages}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {t.sections.languagesCaption}
                </span>
              </motion.div>

              <motion.div className="flex flex-wrap gap-3" variants={staggerContainer}>
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    className="flex items-center gap-3 rounded-full border border-zinc-200/70 bg-white/80 px-4 py-2 text-sm text-black shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
                    variants={sectionVariant}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-zinc-500">{lang.level}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              id="contact"
              className="mt-24 grid gap-10 lg:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Left Column: Direct Info & Social Pills */}
              <div className="grid gap-6">
                <div>
                  <motion.div
                    className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2"
                    variants={sectionVariant}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {t.sections.contact}
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-bold tracking-tight sm:text-4xl text-black dark:text-white"
                    variants={sectionVariant}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {locale === "es" ? "Hablemos de tu próximo proyecto" : locale === "de" ? "Lass uns ins Gespräch kommen" : "Let's build something together"}
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-zinc-500 max-w-md"
                    variants={sectionVariant}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {locale === "es" 
                      ? "Estoy disponible para incorporarme inmediatamente en Leipzig o de forma remota. Escríbeme y responderé en menos de 24 horas." 
                      : locale === "de" 
                        ? "Ich bin ab sofort in Leipzig oder remote verfügbar. Schreiben Sie mir, ich antworte innerhalb von 24 Stunden."
                        : "I'm available to start immediately in Leipzig or remotely. Reach out and I'll get back to you within 24 hours."}
                  </motion.p>
                </div>

                <motion.div 
                  className="flex flex-col gap-3 max-w-sm"
                  variants={sectionVariant}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* WhatsApp Button */}
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="squircle flex items-center justify-between border border-emerald-200/60 bg-emerald-50/50 p-4 transition-all hover:border-emerald-400/60 hover:shadow-md dark:border-emerald-900/30 dark:bg-emerald-950/10 active-press text-emerald-800 dark:text-emerald-300"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.253 5.264 0 11.732 0c3.132.001 6.077 1.22 8.29 3.433 2.213 2.212 3.431 5.158 3.43 8.29-.002 6.477-5.263 11.73-11.73 11.73-2.016-.001-3.996-.518-5.757-1.503L0 24zm6.09-4.733c1.679.997 3.3 1.504 5.578 1.505 5.56 0 10.086-4.522 10.088-10.085.002-2.695-1.047-5.228-2.952-7.133C16.906 1.649 14.375.6 11.729.6 6.173.6 1.646 5.127 1.644 10.683c-.001 2.046.536 4.048 1.554 5.823L2.2 20.28l4.004-1.048z" />
                      </svg>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold opacity-70">WhatsApp</div>
                        <div className="text-sm font-semibold">{contact.number}</div>
                      </div>
                    </div>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  {/* Email Button */}
                  <a
                    href={`mailto:${contact.email}`}
                    className="squircle flex items-center justify-between border border-zinc-200/60 bg-white/80 p-4 transition-all hover:border-zinc-400/60 hover:shadow-md dark:border-white/10 dark:bg-white/5 active-press text-black dark:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-semibold text-zinc-500">Email</div>
                        <div className="text-sm font-semibold">{contact.email}</div>
                      </div>
                    </div>
                    <svg className="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Premium Glassmorphic Form */}
              <motion.div
                className="squircle border border-zinc-200/60 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
                variants={sectionVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {locale === "es" ? "¡Mensaje Enviado!" : locale === "de" ? "Nachricht gesendet!" : "Message Sent!"}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-2 max-w-xs">
                      {locale === "es" 
                        ? "Gracias por escribirme. Me pondré en contacto contigo lo antes posible." 
                        : locale === "de" 
                          ? "Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden."
                          : "Thanks for reaching out. I'll get back to you as soon as possible."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus("idle")}
                      className="mt-6 rounded-full border border-zinc-200/70 px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-black dark:border-white/10 dark:hover:text-white transition-colors active-press-sm"
                    >
                      {locale === "es" ? "Enviar otro" : locale === "de" ? "Noch eine senden" : "Send another"}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                        {locale === "es" ? "Nombre" : locale === "de" ? "Name" : "Name"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={locale === "es" ? "Tu nombre" : locale === "de" ? "Ihr Name" : "Your name"}
                        className="contact-input"
                        required
                      />
                    </div>
                    
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="example@email.com"
                        className="contact-input"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                        {locale === "es" ? "Mensaje" : locale === "de" ? "Nachricht" : "Message"}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder={locale === "es" ? "Hola José, me gustaría hablar contigo sobre..." : locale === "de" ? "Hallo Jose, ich möchte mit Ihnen sprechen über..." : "Hello Jose, I'd like to talk about..."}
                        className="contact-input resize-none"
                        required
                      />
                    </div>

                    {formStatus === "error" && (
                      <p className="text-xs text-rose-500 font-semibold mt-1">
                        {locale === "es" ? "Por favor completa todos los campos." : locale === "de" ? "Bitte füllen Sie alle Felder aus." : "Please fill out all fields."}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="squircle mt-2 w-full bg-black py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 active-press disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {locale === "es" ? "Enviando..." : locale === "de" ? "Wird gesendet..." : "Sending..."}
                        </>
                      ) : (
                        locale === "es" ? "Enviar Mensaje" : locale === "de" ? "Nachricht senden" : "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.section>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 md:p-10"
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl h-[80vh] flex flex-col rounded-3xl border border-zinc-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/95 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-zinc-200/60 dark:border-white/10">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">
                    {locale === "es" ? "Vista Previa de Certificado" : locale === "de" ? "Zertifikat-Vorschau" : "Certificate Preview"}
                  </span>
                  <h3 className="text-base font-semibold text-black dark:text-white truncate">
                    {previewCert.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={previewCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 items-center gap-1.5 rounded-full border border-zinc-200/80 bg-white px-4 text-xs font-semibold text-zinc-600 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-white transition-colors active-press-sm"
                  >
                    <span>{locale === "es" ? "Abrir pestaña" : locale === "de" ? "Im neuen Tab öffnen" : "Open in tab"}</span>
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={() => setPreviewCert(null)}
                    className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200/80 bg-white text-zinc-500 hover:text-black dark:border-white/10 dark:bg-white/5 dark:hover:text-white transition-colors active-press-sm"
                    aria-label="Close modal"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body (PDF display) */}
              <div className="flex-1 mt-4 overflow-hidden rounded-xl bg-zinc-100 dark:bg-black/50 relative">
                {/* Fallback helper message for mobile devices */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none z-0">
                  <svg className="h-10 w-10 text-zinc-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm font-semibold text-zinc-500">
                    {locale === "es" ? "Cargando previsualización..." : locale === "de" ? "Vorschau wird geladen..." : "Loading preview..."}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                    {locale === "es"
                      ? "Si no carga automáticamente, pulsa 'Abrir pestaña' arriba."
                      : locale === "de"
                        ? "Wenn sie nicht geladen wird, klicken Sie oben auf 'Im neuen Tab öffnen'."
                        : "If it doesn't load automatically, tap 'Open in tab' above."}
                  </p>
                </div>

                <iframe
                  src={`${previewCert.url}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-0 rounded-xl relative z-10 bg-transparent"
                  title={previewCert.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
