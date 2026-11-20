import { motion, useScroll, useTransform } from "framer-motion";

const orbBase =
  "absolute rounded-full will-change-transform bg-[radial-gradient(circle,var(--orb)_0%,transparent_70%)]";

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
        className={`${orbBase} -top-32 -left-32 w-[620px] h-[620px] [--orb:rgba(147,197,253,0.40)] dark:[--orb:rgba(59,130,246,0.32)]`}
      />
      <motion.div
        style={{ y: y2 }}
        className={`${orbBase} top-[30%] -right-48 w-[680px] h-[680px] [--orb:rgba(216,180,254,0.34)] dark:[--orb:rgba(168,85,247,0.26)]`}
      />
      <motion.div
        style={{ y: y3 }}
        className={`${orbBase} top-[65%] left-[5%] w-[600px] h-[600px] [--orb:rgba(103,232,249,0.32)] dark:[--orb:rgba(34,211,238,0.24)]`}
      />
      <motion.div
        style={{ y: y4 }}
        className={`${orbBase} bottom-[-10%] right-[10%] w-[540px] h-[540px] [--orb:rgba(191,219,254,0.40)] dark:[--orb:rgba(96,165,250,0.26)]`}
      />
    </div>
  );
}
