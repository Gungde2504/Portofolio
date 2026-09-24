import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { StackIcon, BrowserIcon, DatabaseIcon, PenToolIcon, ArrowRightIcon } from "../ui/icons";

const icons = [StackIcon, BrowserIcon, DatabaseIcon, PenToolIcon];

export default function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  return (
    <section id="services" className="px-6 max-w-5xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-center mb-14"
      >
        <p className="text-xs font-bold tracking-wide text-primary mb-2">{t("services.label")}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold">{t("services.heading")}</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="skill-card p-6 flex flex-col"
            >
              <div className="skill-icon-well w-12 h-12 flex items-center justify-center p-3 text-primary dark:text-blue-300 mb-4">
                <Icon className="w-full h-full" />
              </div>
              <h3 className="font-bold text-slate-700 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed flex-1 mb-4">
                {item.desc}
              </p>
              <a
                href="#project"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-blue-300 hover:gap-2.5 transition-all"
              >
                {t("services.cta")}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

