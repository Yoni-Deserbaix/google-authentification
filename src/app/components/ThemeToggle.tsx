"use client";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="flex items-center"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          console.log(theme);
        }}
      >
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
    </div>
  );
}
