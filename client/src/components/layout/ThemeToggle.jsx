import { useTheme } from "../../context/ThemeContext";
import { SunIcon, MoonIcon } from "../ui/icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="well-neu relative w-14 h-8 flex items-center px-1"
    >
      <span
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
          isDark ? "toggle-knob-active" : "bg-white shadow-md text-primary"
        }`}
        style={{ transform: isDark ? "translateX(24px)" : "translateX(0)" }}
      >
        {isDark ? <MoonIcon className="w-3.5 h-3.5" /> : <SunIcon className="w-3.5 h-3.5" />}
      </span>
    </button>
  );
}
