import { skills } from "../../data/skills";

const DURATION = 34;

const items = [
  { name: "Laravel", radius: "clamp(100px, 26vw, 240px)", tilt: "clamp(-6px, -1.5vw, -10px)", angle: 15 },
  { name: "React JS", radius: "clamp(85px, 22vw, 210px)", tilt: "clamp(4px, 1vw, 8px)", angle: 110 },
  { name: "Node JS", radius: "clamp(100px, 26vw, 240px)", tilt: "clamp(-6px, -1.5vw, -10px)", angle: 230 },
  { name: "MySQL", radius: "clamp(85px, 22vw, 210px)", tilt: "clamp(4px, 1vw, 8px)", angle: 300 },
];

export default function TechOrbitBadges() {
  const data = items
    .map((cfg) => ({ ...cfg, skill: skills.find((s) => s.name === cfg.name) }))
    .filter((d) => d.skill);

  return (
    <>
      {data.map(({ skill, radius, tilt, angle }) => {
        const delay = -((DURATION / 360) * angle);
        return (
          <div
            key={skill.name}
            className="absolute inset-0 flex items-center justify-center pointer-events-none badge-orbit-outer"
            style={{ animationDuration: `${DURATION}s`, animationDelay: `${delay}s` }}
          >
            <div
              style={{ transform: `translateX(${radius}) translateY(${tilt})` }}
              className="pointer-events-auto"
            >
              <div
                className="badge-orbit-inner"
                style={{ animationDuration: `${DURATION}s`, animationDelay: `${delay}s` }}
              >
                <div className="card-neu px-2 py-1.5 sm:px-3 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                  <div
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center shrink-0"
                    style={{ background: skill.iconBg || "transparent" }}
                  >
                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-white whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
