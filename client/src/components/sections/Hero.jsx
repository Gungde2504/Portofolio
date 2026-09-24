import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ProfileCard from "../ui/ProfileCard";
import SocialRow from "../ui/SocialRow";
import TextReveal from "../ui/TextReveal";
import { DotGrid } from "../ui/HeroDecor";
import OrbitRings from "../ui/OrbitRings";
import TechOrbitBadges from "../ui/TechOrbitBadges";
import { ArrowRightIcon, DownloadIcon } from "../ui/icons";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col md:flex-row md:items-center overflow-hidden pt-8 pb-12"
    >
      <div className="relative w-full flex justify-center mb-8 md:mb-0 md:absolute md:inset-y-0 md:right-0 md:w-[48%] md:items-center z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[460px] md:h-[460px] lg:w-[560px] lg:h-[560px]"
        >
          <OrbitRings variant="back" />

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "perspective(1200px) rotateX(15deg)" }}
          >
            <ProfileCard className="w-[54%] h-[54%]" />
          </div>

          <OrbitRings variant="front" />

          <TechOrbitBadges />
        </motion.div>
      </div>

      <div className="absolute top-28 right-10 opacity-60 hidden md:block z-10">
        <DotGrid />
      </div>

      <div className="relative z-10 px-6 max-w-6xl w-full mx-auto">
        <div className="text-center md:text-left max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass badge-pill mb-5 text-primary dark:text-white"
          >
            <span className="dot-pulse" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl md:text-6xl font-extrabold mb-1 text-slate-800 dark:text-white"
          >
            {t("hero.greeting")} <span className="text-gradient md:whitespace-nowrap">Gungde Trisna</span>
          </motion.h1>

          <TextReveal
            text={t("hero.tagline")}
            delay={0.15}
            className="text-2xl md:text-4xl font-extrabold text-slate-700 dark:text-gray-100 mb-5 justify-center md:justify-start flex flex-wrap"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-slate-500 dark:text-gray-400 mb-8 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-4 justify-center md:justify-start mb-10"
          >
            <a
              href="#project"
              className="btn-primary px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2"
            >
              {t("hero.cta")}
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn-outline px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              {t("hero.ctaCV")}
              <DownloadIcon className="w-4 h-4" />
            </a>
          </motion.div>

          <SocialRow />
        </div>
      </div>
    </section>
  );
}

