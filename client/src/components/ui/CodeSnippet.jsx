import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skills } from "../../data/skills";

export default function CodeSnippet() {
  const { t } = useTranslation();
  const names = skills.slice(0, 4).map((s) => s.name);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 0.7 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
      }}
      className="code-card rounded-2xl px-4 py-3.5 text-left font-mono text-[11px] leading-relaxed w-56 shadow-xl"
    >
      <div className="flex items-center justify-between mb-2 text-slate-400 dark:text-gray-500">
        <span>{"</> Code"}</span>
        <span className="w-2 h-2 rounded-full bg-green-500" />
      </div>
      <p className="text-primary dark:text-blue-300">const developer = {"{"}</p>
      <p className="text-slate-600 dark:text-gray-300 pl-3">
        name: <span className="text-orange-500 dark:text-orange-300">"Gungde"</span>,
      </p>
      <p className="text-slate-600 dark:text-gray-300 pl-3">
        skills: [
        {names.map((n, i) => (
          <span key={n}>
            <span className="text-orange-500 dark:text-orange-300">"{n}"</span>
            {i < names.length - 1 ? ", " : ""}
          </span>
        ))}
        ],
      </p>
      <p className="text-slate-600 dark:text-gray-300 pl-3">
        passion: <span className="text-orange-500 dark:text-orange-300">"{t("hero.codePassion")}"</span>
      </p>
      <p className="text-primary dark:text-blue-300">{"};"}</p>
    </motion.div>
  );
}
