import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundOrbs() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-blue-300/25 dark:bg-blue-500/25 blur-[110px]"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] -right-32 w-[480px] h-[480px] rounded-full bg-purple-300/20 dark:bg-purple-500/20 blur-[130px]"
      />
      <motion.div
        style={{ y: y3 }}
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[70%] left-[10%] w-[400px] h-[400px] rounded-full bg-cyan-300/20 dark:bg-cyan-400/20 blur-[110px]"
      />
      <motion.div
        style={{ y: y4 }}
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[15%] w-[350px] h-[350px] rounded-full bg-blue-200/25 dark:bg-blue-400/20 blur-[100px]"
      />
    </div>
  );
}
