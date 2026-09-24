import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { socials } from "../../data/socials";

export default function SocialRow() {
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-slate-400 dark:text-gray-500 mb-3">
        {t("hero.socialLabel")}
      </p>
      <div className="flex gap-2.5 flex-wrap justify-center md:justify-start">
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
            whileHover={{ y: -3, scale: 1.08 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center p-2 skill-icon-well text-primary dark:text-blue-300"
          >
            <s.icon className="w-full h-full" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
