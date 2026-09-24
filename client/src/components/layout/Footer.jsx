import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { socials } from "../../data/socials";
import { CodeBracketsIcon, MailIcon, ArrowRightIcon } from "../ui/icons";

const SECTION_IDS = ["home", "about", "skills", "project", "contact"];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#project", label: t("nav.project") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative px-6 pt-16 pb-8 mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="card-neu p-8 md:p-10">
          <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 mb-10">
            <div>
              <span className="flex items-center gap-2 font-extrabold text-base mb-3">
                <CodeBracketsIcon className="w-8 h-8" />
                Gungde Trisna
              </span>
              <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed max-w-xs mb-5">
                {t("footer.tagline")}
              </p>
              <div className="flex gap-2.5 flex-wrap">
                {socials.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    aria-label={s.name}
                    className="skill-icon-well w-9 h-9 flex items-center justify-center p-2 text-primary dark:text-blue-300"
                  >
                    <s.icon className="w-full h-full" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wide text-primary mb-4">
                {t("footer.quickLinks")}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wide text-primary mb-4">
                {t("footer.contactLabel")}
              </p>
              <a
                href="mailto:shemarawiditrisna@gmail.com"
                className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors mb-3"
              >
                <MailIcon className="w-4 h-4 shrink-0" />
                shemarawiditrisna@gmail.com
              </a>
              <p className="text-sm text-slate-500 dark:text-gray-400">Bali, Indonesia</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 dark:text-gray-400 text-center md:text-left">
              © {year} Gungde Trisna. {t("footer.rights")}
            </p>
            <button
              onClick={scrollTop}
              className="flex items-center gap-1.5 text-xs font-semibold text-primary dark:text-blue-300 hover:gap-2.5 transition-all"
            >
              {t("footer.backToTop")}
              <ArrowRightIcon className="w-3.5 h-3.5 -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
