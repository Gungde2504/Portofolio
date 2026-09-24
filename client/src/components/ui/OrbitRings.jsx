const DEFS_AND_GLOW = (
  <>
    <defs>
      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </>
);

const INNER_RINGS = (
  <>
    <circle cx="680" cy="680" r="320" stroke="url(#ringGrad)" strokeWidth="1" strokeDasharray="2 5" opacity="0.6" />
    <circle cx="680" cy="680" r="230" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="3 7" filter="url(#glow)" />
    <circle cx="680" cy="680" r="140" stroke="url(#ringGrad)" strokeWidth="1.5" filter="url(#glow)" />
  </>
);

const OUTER_RINGS = (
  <>
    <g style={{ transform: "translateZ(-45px) scale(0.92)", transformBox: "fill-box" }} opacity="0.3">
      <circle cx="680" cy="680" r="560" stroke="url(#ringGrad)" strokeWidth="1.5" />
    </g>
    <circle cx="680" cy="680" r="650" stroke="url(#ringGrad)" strokeWidth="2.5" filter="url(#glow)" />
    <circle cx="680" cy="680" r="590" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="1 6" opacity="0.6" />
    <circle cx="680" cy="680" r="560" stroke="url(#ringGrad)" strokeWidth="1.5" opacity="0.7" />
    <circle cx="680" cy="680" r="410" stroke="url(#ringGrad)" strokeWidth="2" filter="url(#glow)" />

    <circle cx="1180" cy="680" r="7" fill="currentColor" filter="url(#glow)" />
    <circle cx="180" cy="680" r="5" fill="currentColor" filter="url(#glow)" opacity="0.8" />
    <circle cx="680" cy="180" r="4" fill="currentColor" filter="url(#glow)" opacity="0.7" />
    <circle cx="680" cy="1180" r="6" fill="currentColor" filter="url(#glow)" opacity="0.85" />
    <circle cx="1140" cy="220" r="6" fill="currentColor" filter="url(#glow)" opacity="0.9" />
  </>
);

export default function OrbitRings({ variant = "full" }) {
  const clipStyle =
    variant === "back"
      ? { clipPath: "inset(0% 0% 40% 0%)" }
      : variant === "front"
      ? { clipPath: "inset(40% 0% 0% 0%)" }
      : {};

  return (
    <div
      className="absolute inset-0 flex items-center justify-center orbit-perspective"
      style={variant === "front" ? {} : {}}
    >
      {variant !== "front" && (
        <div className="absolute w-[55%] h-[55%] rounded-full bg-primary/25 dark:bg-blue-400/30 blur-3xl" />
      )}
      <div className="w-[190%] h-[190%] orbit-3d" style={{ position: "absolute" }}>
        <svg viewBox="0 0 1360 1360" className="w-full h-full text-primary/55 dark:text-blue-300/80 orbit-glow" fill="none">
          {DEFS_AND_GLOW}
          {variant !== "front" && INNER_RINGS}
        </svg>
      </div>

      <div className="w-[190%] h-[190%] orbit-3d" style={{ position: "absolute", ...clipStyle }}>
        <svg viewBox="0 0 1360 1360" className="w-full h-full text-primary/55 dark:text-blue-300/80 orbit-glow" fill="none">
          {DEFS_AND_GLOW}
          {OUTER_RINGS}
        </svg>
      </div>
    </div>
  );
}
