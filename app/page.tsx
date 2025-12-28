"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  contact,
  i18n,
  languages,
  localeOptions,
  stack,
  workItems,
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
  const [locale, setLocale] = useState<"en" | "es" | "de">("en");
  const t = i18n[locale];

  return (
    <main className="relative min-h-screen scroll-smooth bg-white text-black dark:bg-black dark:text-white font-[system-ui] tracking-tighter">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-10 sm:px-10">
        <header className="flex flex-col gap-8">
          <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-auto flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span>{t.labels.languageToggle}</span>
              <div className="relative flex rounded-full border border-zinc-200/70 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/5">
                <AnimatePresence initial={false}>
                  <motion.span
                    key={locale}
                    className="absolute inset-y-1 rounded-full bg-black dark:bg-white"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                      width: "33.333%",
                      left:
                        locale === "en"
                          ? "0%"
                          : locale === "es"
                            ? "33.333%"
                            : "66.666%",
                    }}
                  />
                </AnimatePresence>
                {localeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setLocale(option.value)}
                    className={`relative z-10 rounded-full px-3 py-1 text-xs transition-colors ${
                      locale === option.value
                        ? "text-white dark:text-black"
                        : "text-zinc-500 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <motion.section
            id="intro"
            className="grid gap-6"
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
                Leipzig, Germany
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
        </header>

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
                  className="group rounded-2xl border border-zinc-200/60 bg-white/80 p-6 shadow-sm transition-colors hover:border-zinc-400/60 dark:border-white/10 dark:bg-white/5"
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
                        className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-zinc-200/70 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 group-hover:grayscale-0 grayscale"
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
                          {item.role}
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
                className="rounded-2xl border border-zinc-200/60 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
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
          className="mt-20 grid gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-semibold"
            variants={sectionVariant}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t.sections.contact}
          </motion.h2>
          <motion.div
            className="flex flex-col gap-2 text-zinc-500"
            variants={sectionVariant}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span>{contact.location}</span>
            <a
              className="text-black transition-colors hover:text-zinc-500 dark:text-white"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
