import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ perspective: 800, "--glow": skill.color }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.07, y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="skill-card p-6 text-center flex flex-col items-center gap-4"
      >
        <motion.div
          style={{
            transform: "translateZ(35px)",
            background: skill.iconBg || undefined,
          }}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className={`w-16 h-16 flex items-center justify-center p-3.5 rounded-2xl ${
            skill.iconBg ? "shadow-md" : "skill-icon-well"
          }`}
        >
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <div style={{ transform: "translateZ(20px)" }}>
          <p className="font-bold text-sm text-slate-700 dark:text-white mb-1.5">{skill.name}</p>
          <span className="skill-pill">{skill.category}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

