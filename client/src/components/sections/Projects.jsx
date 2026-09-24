import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";

export default function Projects() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  return (
    <section id="project" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center mb-12"
      >
        <p className="text-xs font-bold tracking-wide text-primary mb-2">{t("projects.label")}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{t("projects.heading")}</h2>
        <p className="text-slate-500 dark:text-gray-400">{t("projects.subtitle")}</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

