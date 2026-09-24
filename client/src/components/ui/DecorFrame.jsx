export default function DecorFrame() {
  return (
    <svg
      viewBox="0 0 400 480"
      className="absolute inset-0 w-full h-full text-primary/25 dark:text-blue-400/20 pointer-events-none"
      fill="none"
    >
      <rect
        x="40"
        y="20"
        width="320"
        height="320"
        rx="28"
        transform="rotate(8 200 180)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M20 120 Q -10 220 40 340"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M380 140 Q 410 250 360 380"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="120" r="3" fill="currentColor" />
      <circle cx="40" cy="340" r="3" fill="currentColor" />
      <circle cx="380" cy="140" r="3" fill="currentColor" />
      <circle cx="360" cy="380" r="3" fill="currentColor" />
    </svg>
  );
}
