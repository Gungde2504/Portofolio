import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skills } from "../../data/skills";
import { GithubIcon, ExternalLinkIcon, FolderIcon, ArrowRightIcon } from "../ui/icons";

const TECH_ICON_SLUGS = {
  vite: "vite",
  express: "express",
  i18next: "i18next",
  jwt: "jwt",
  livewire: "livewire",
  "alpine.js": "alpinedotjs",
  framer: "framer",
  "framer motion": "framer",
  "node.js": "nodedotjs",
};

const EXPLICIT_ICON_URLS = {
  midtrans: "https://www.google.com/s2/favicons?domain=midtrans.com&sz=128",
  fonnte: "https://www.google.com/s2/favicons?domain=fonnte.com&sz=128",
};

function findSkillIcon(stackName) {
  const key = stackName.toLowerCase().split(" ")[0].replace(/\(|\)/g, "");

  if (EXPLICIT_ICON_URLS[key]) return EXPLICIT_ICON_URLS[key];

  const bySkills = skills.find((s) => s.name.toLowerCase().split(" ")[0] === key);
  if (bySkills) return bySkills.logo;

  const lower = stackName.toLowerCase();
  for (const [needle, slug] of Object.entries(TECH_ICON_SLUGS)) {
    if (lower.includes(needle)) {
      return `https://thesvg.org/icons/${slug}/default.svg`;
    }
  }
  return null;
}

function Gallery({ images, fallback, title }) {
  const [index, setIndex] = useState(0);
  const slides = images && images.length > 0 ? images : fallback ? [fallback] : [];

  if (slides.length === 0) {
    return (
      <div className="relative w-full min-h-[260px] rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
        <FolderIcon className="w-12 h-12 text-white/80" />
      </div>
    );
  }

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-black/20 flex items-center justify-center"
        style={{ minHeight: "280px", maxHeight: "540px" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]}
            alt={`${title} ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full object-contain"
            style={{ maxHeight: "540px" }}
          />
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="skill-icon-well w-8 h-8 flex items-center justify-center text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
          >
            <ArrowRightIcon className="w-4 h-4 rotate-180" />
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-primary dark:bg-blue-300" : "bg-slate-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="skill-icon-well w-8 h-8 flex items-center justify-center text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
          >
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-slate-900/50 dark:bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="modal-card relative w-full max-w-5xl p-5 md:p-6 max-h-[88vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full skill-icon-well flex items-center justify-center text-slate-500 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors z-10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="grid md:grid-cols-[1.3fr_1fr] gap-8">
              <Gallery images={project.gallery} fallback={project.banner} title={project.title} />

              <div className="flex flex-col">
                <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white mb-3 pr-8">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <p className="text-xs font-bold tracking-wide text-primary mb-3">
                  {t("projects.techUsed")}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3 mb-6">
                  {project.stack.map((tech) => {
                    const iconUrl = findSkillIcon(tech);
                    return (
                      <div key={tech} className="flex items-center gap-2 min-w-0">
                        {iconUrl ? (
                          <img src={iconUrl} alt={tech} className="w-5 h-5 shrink-0 object-contain" />
                        ) : (
                          <span className="w-5 h-5 shrink-0 rounded-full bg-primary/15 dark:bg-blue-400/20" />
                        )}
                        <span className="text-sm text-slate-600 dark:text-gray-300 truncate">{tech}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3 flex-wrap mt-auto pt-2">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 text-sm"
                    >
                      <GithubIcon className="w-4 h-4" />
                      {t("projects.code")}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-5 py-2.5 rounded-full text-white font-semibold flex items-center gap-2 text-sm"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      {t("projects.liveDemo")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


