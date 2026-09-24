import { motion } from "framer-motion";

export default function GlassBadge({ icon, label, value, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`glass rounded-2xl px-4 py-3 flex items-center gap-3 ${className}`}
    >
      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="text-left leading-tight">
        <p className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-gray-400">{label}</p>
        <p className="text-sm font-bold text-primary dark:text-white">{value}</p>
      </div>
    </motion.div>
  );
}
