import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FolderIcon, LayersIcon } from "../ui/icons";
import { skills } from "../../data/skills";
import { projects } from "../../data/projects";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="min-h-screen flex items-center px-6 max-w-5xl mx-auto py-24">
      <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 md:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="card-neu p-3 rounded-[2rem] rotate-[-2deg]">
            <div className="rounded-[1.5rem] overflow-hidden aspect-[4/5] w-64 md:w-full">
              <img
                src="/images/about.jpeg"
                alt="Gungde"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -z-10 inset-0 rounded-[2rem] bg-primary/10 blur-2xl scale-95" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <p className="text-xs font-bold tracking-wide text-primary mb-2">{t("about.label")}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">{t("about.heading")}</h2>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
            {t("about.description")}
          </p>

          <div className="space-y-3 text-sm mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-0.5 md:gap-2">
              <span className="text-slate-400 dark:text-gray-500 text-xs md:text-sm md:w-28 md:shrink-0 text-center md:text-left">{t("about.location")}</span>
              <span className="font-medium text-slate-700 dark:text-gray-200">{t("about.locationValue")}</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-0.5 md:gap-2">
              <span className="text-slate-400 dark:text-gray-500 text-xs md:text-sm md:w-28 md:shrink-0 text-center md:text-left">{t("about.education")}</span>
              <span className="font-medium text-slate-700 dark:text-gray-200">{t("about.educationValue")}</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-0.5 md:gap-2">
              <span className="text-slate-400 dark:text-gray-500 text-xs md:text-sm md:w-28 md:shrink-0 text-center md:text-left">{t("about.focus")}</span>
              <span className="font-medium text-slate-700 dark:text-gray-200">{t("about.focusValue")}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto md:mx-0">
            <div className="card-neu p-4 flex items-center gap-3">
              <div className="skill-icon-well w-10 h-10 flex items-center justify-center p-2 text-primary shrink-0">
                <FolderIcon className="w-full h-full" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-primary dark:text-white leading-none">{projects.length}+</p>
                <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-1">{t("about.statProjects")}</p>
              </div>
            </div>
            <div className="card-neu p-4 flex items-center gap-3">
              <div className="skill-icon-well w-10 h-10 flex items-center justify-center p-2 text-primary shrink-0">
                <LayersIcon className="w-full h-full" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-primary dark:text-white leading-none">{skills.length}+</p>
                <p className="text-[11px] text-slate-500 dark:text-gray-400 mt-1">{t("about.statSkills")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


