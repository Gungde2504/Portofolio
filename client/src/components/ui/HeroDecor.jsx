export function DotGrid() {
  const dots = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      dots.push(
        <circle key={`${r}-${c}`} cx={c * 14} cy={r * 14} r="1.6" fill="currentColor" />
      );
    }
  }
  return (
    <svg viewBox="0 0 60 60" className="w-16 h-16 text-primary/30 dark:text-blue-300/25">
      {dots}
    </svg>
  );
}

export function HandArrow(props) {
  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M8 8 C 8 30, 20 42, 40 40" />
      <path d="M30 34 L40 40 L34 50" />
    </svg>
  );
}
