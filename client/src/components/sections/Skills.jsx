import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skills } from "../../data/skills";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center mb-14"
      >
        <p className="text-xs font-bold tracking-wide text-primary mb-2">{t("skills.label")}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{t("skills.heading")}</h2>
        <div className="skills-trial-underline w-14 h-1 rounded-full mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: skill.iconBg || "transparent" }}
                >
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="font-semibold text-sm text-slate-700 dark:text-white">
                  {skill.name}
                </span>
              </div>
              <span className="skills-trial-percent text-xs font-bold">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-200/70 dark:bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: i * 0.04, ease: "easeOut" }}
                className="skills-trial-bar h-full rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

