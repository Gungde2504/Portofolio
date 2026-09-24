import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skills } from "../../data/skills";

export default function TechRow() {
  const { t } = useTranslation();
  const featured = skills.slice(0, 7);
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-slate-400 dark:text-gray-500 mb-3">
        {t("hero.techLabel")}
      </p>
      <div className="flex gap-2.5 flex-wrap justify-center md:justify-start">
        {featured.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
            whileHover={{ y: -3, scale: 1.08 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center p-1.5 skill-icon-well"
            style={{ background: skill.iconBg || undefined }}
          >
            <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
