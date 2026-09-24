import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCapIcon, BriefcaseIcon } from "../ui/icons";

const icons = [GraduationCapIcon, BriefcaseIcon];

const START_DELAY = 0.4;
const PHASE1 = 0.8;
const ICON1_DURATION = 0.5;
const PHASE2 = 0.9;
const ICON2_DURATION = 0.5;
const TOTAL = PHASE1 + ICON1_DURATION + PHASE2;

const ICON1_DELAY = START_DELAY + PHASE1;
const SEG2_DELAY = ICON1_DELAY + ICON1_DURATION;
const ICON2_DELAY = START_DELAY + PHASE1 + ICON1_DURATION + PHASE2;

function IconCard({ item, Icon, arriveDelay, duration }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.4, delay: arriveDelay }}
      className="relative flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ scale: 0.4 }}
        whileInView={{ scale: [0.4, 1.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration, delay: arriveDelay, ease: "easeOut" }}
        className="journey-icon-well w-16 h-16 flex items-center justify-center p-4 text-primary dark:text-blue-300 mb-4 relative z-10"
      >
        <Icon className="w-full h-full" />
      </motion.div>
      <span className="skill-pill mb-2">{item.period}</span>
      <h3 className="font-bold text-slate-700 dark:text-white mb-1">{item.title}</h3>
      <p className="text-sm font-medium text-primary dark:text-blue-300 mb-2">{item.org}</p>
      <p className="text-sm text-slate-500 dark:text-gray-300 leading-relaxed max-w-xs">
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function Journey() {
  const { t } = useTranslation();
  const items = t("journey.items", { returnObjects: true });
  const itemDelays = [ICON1_DELAY, ICON2_DELAY];

  return (
    <section id="journey" className="px-6 max-w-5xl mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-bold tracking-wide text-primary mb-2">{t("journey.label")}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold">{t("journey.heading")}</h2>
      </motion.div>

      {/* ---------- DESKTOP: horizontal timeline ---------- */}
      <div className="relative hidden md:grid md:grid-cols-2 gap-10 md:gap-6">
        <div className="hidden md:block absolute top-8 left-[3%] right-[25%] h-2">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="journey-icon-well absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 z-10"
          />
          <div
            style={{ background: "linear-gradient(90deg, #1E3A8A, #3B82F6)" }}
            className="w-full h-full relative overflow-hidden rounded-full"
          >
            <motion.div
              initial={{ width: "100%" }}
              whileInView={{ width: ["100%", "66.5%", "66.5%", "0%"] }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: TOTAL,
                delay: START_DELAY,
                times: [0, PHASE1 / TOTAL, (PHASE1 + ICON1_DURATION) / TOTAL, 1],
                ease: "easeOut",
              }}
              className="journey-mask absolute inset-y-0 right-0"
            />
            <motion.div
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: START_DELAY + TOTAL + 0.3 }}
              className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </div>
        </div>

        {items.map((item, i) => (
          <IconCard
            key={item.title}
            item={item}
            Icon={icons[i]}
            arriveDelay={itemDelays[i]}
            duration={i === 0 ? ICON1_DURATION : ICON2_DURATION}
          />
        ))}
      </div>

      {/* ---------- MOBILE: vertical timeline, same timing as desktop ---------- */}
      <div className="md:hidden flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="journey-icon-well w-8 h-8"
        />

        <div
          style={{ background: "linear-gradient(180deg, #1E3A8A, #3B82F6)" }}
          className="w-2 h-10 relative overflow-hidden rounded-full my-1"
        >
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: PHASE1, delay: START_DELAY, ease: "easeOut" }}
            className="journey-mask absolute inset-x-0 bottom-0"
          />
        </div>

        <IconCard item={items[0]} Icon={icons[0]} arriveDelay={ICON1_DELAY} duration={ICON1_DURATION} />

        <div
          style={{ background: "linear-gradient(180deg, #1E3A8A, #3B82F6)" }}
          className="w-2 h-10 relative overflow-hidden rounded-full my-6"
        >
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: PHASE2, delay: SEG2_DELAY, ease: "easeOut" }}
            className="journey-mask absolute inset-x-0 bottom-0"
          />
        </div>

        <IconCard item={items[1]} Icon={icons[1]} arriveDelay={ICON2_DELAY} duration={ICON2_DURATION} />
      </div>
    </section>
  );
}
