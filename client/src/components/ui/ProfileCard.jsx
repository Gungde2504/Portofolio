export default function ProfileCard({ className = "" }) {
  return (
    <div
      className={`relative rounded-full overflow-hidden border-4 border-white/80 dark:border-white/10 shadow-2xl ${className}`}
      style={{
        boxShadow:
          "0 20px 50px rgba(0,0,0,0.35), inset -22px -22px 50px rgba(0,0,0,0.35), inset 18px 18px 40px rgba(255,255,255,0.12)",
      }}
    >
      <img
        src="/images/profile.jpeg"
        alt="Gungde"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center 28%", transform: "scale(1.25)" }}
      />
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.35), rgba(255,255,255,0) 42%), radial-gradient(circle at 68% 78%, rgba(0,0,0,0.4), rgba(0,0,0,0) 55%)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
