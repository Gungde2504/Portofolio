import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useActiveSection } from "../../hooks/useActiveSection";
import {
  CodeBracketsIcon,
  MenuIcon,
  XIcon,
  HomeIcon,
  UserIcon,
  StackIcon,
  FolderIcon,
  MailIcon,
  ArrowRightIcon,
} from "../ui/icons";

const SECTION_IDS = ["home", "about", "skills", "project", "contact"];

export default function Navbar() {
  const { t } = useTranslation();
  const activeId = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", href: "#home", label: t("nav.home"), Icon: HomeIcon },
    { id: "about", href: "#about", label: t("nav.about"), Icon: UserIcon },
    { id: "skills", href: "#skills", label: t("nav.skills"), Icon: StackIcon },
    { id: "project", href: "#project", label: t("nav.project"), Icon: FolderIcon },
    { id: "contact", href: "#contact", label: t("nav.contact"), Icon: MailIcon },
  ];

  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl">
        <nav className="navbar-float w-full flex items-center justify-between pl-3 pr-3 py-2.5">
          <span className="flex items-center gap-2.5 font-extrabold text-[15px] shrink-0">
            <CodeBracketsIcon className="w-9 h-9" />
            <span className="hidden sm:inline">Gungde Trisna</span>
            <span className="sm:hidden">Gungde</span>
          </span>

          <div className="hidden md:flex items-center gap-5 text-[13px] font-semibold text-slate-600 dark:text-gray-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  activeId === link.id ? "active text-primary dark:text-white" : ""
                }`}
              >
                {link.label}
                <span className="nav-underline" />
              </a>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="md:hidden w-9 h-9 rounded-full skill-icon-well flex items-center justify-center text-slate-600 dark:text-gray-200"
            >
              {open ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden fixed top-[4.75rem] left-4 right-4 z-50 max-w-4xl mx-auto"
            >
              <div className="card-neu rounded-3xl p-3">
                <div className="flex flex-col gap-1">
                  {links.map((link, i) => {
                    const isActive = activeId === link.id;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.06 }}
                        className={`relative flex items-center justify-between gap-2 px-3 py-3 rounded-2xl transition-colors ${
                          isActive
                            ? "bg-primary/10 dark:bg-white/10"
                            : "hover:bg-primary/5 dark:hover:bg-white/5"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-active-bar"
                            className="absolute left-0 top-2 bottom-2 w-1 rounded-full"
                            style={{ background: "linear-gradient(180deg, #1E3A8A, #3B82F6)" }}
                          />
                        )}
                        <span className="flex items-center gap-3 min-w-0">
                          <span
                            className={`skill-icon-well w-9 h-9 flex items-center justify-center p-2 shrink-0 ${
                              isActive ? "text-primary dark:text-blue-300" : "text-slate-500 dark:text-gray-400"
                          }`}
                        >
                          <link.Icon className="w-full h-full" />
                        </span>
                        <span
                          className={`text-sm font-semibold truncate ${
                            isActive
                              ? "text-primary dark:text-white"
                              : "text-slate-600 dark:text-gray-300"
                          }`}
                        >
                          {link.label}
                        </span>
                      </span>
                      <ArrowRightIcon
                        className={`w-3.5 h-3.5 shrink-0 ml-2 ${
                          isActive ? "text-primary dark:text-blue-300" : "text-slate-300 dark:text-gray-600"
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
